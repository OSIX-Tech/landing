import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const cardTopsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const nativeScrollCleanupRef = useRef(null);
  const endTopRef = useRef(0);
  const lastWidthRef = useRef(0);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return { scrollTop: scroller.scrollTop, containerHeight: scroller.clientHeight };
  }, [useWindowScroll]);

  // Read natural card positions (before sticky kicks in) and apply sticky
  const cachePositions = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);

    // Temporarily remove sticky to read natural flow positions
    cards.forEach((card) => {
      card.style.position = 'relative';
      card.style.top = 'auto';
      card.style.transform = '';
    });

    cardTopsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    const endEl = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');
    endTopRef.current = endEl
      ? endEl.getBoundingClientRect().top + window.scrollY
      : 0;

    // Apply sticky positioning — browser handles pinning natively
    cards.forEach((card, i) => {
      card.style.position = 'sticky';
      card.style.top = `${Math.round(stackPositionPx + itemStackDistance * i)}px`;
      card.style.zIndex = `${i + 1}`;
      card.style.transform = 'scale(1)';
    });

    lastTransformsRef.current.clear();
  }, [useWindowScroll, stackPosition, itemStackDistance, parsePercentage]);

  // Sticky handles pinning; JS handles scale + coordinated push-out
  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !cardTopsRef.current.length) return;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endTopRef.current;
    const pinEnd = endElementTop - containerHeight / 2;

    // After pinEnd, push the entire stack up together
    const pushOffset = Math.max(0, Math.round(scrollTop - pinEnd));

    const n = cardsRef.current.length;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardTopsRef.current[i];
      const stickyTop = stackPositionPx + itemStackDistance * i;

      // Self-scale: card shrinks when it sticks ("going far away" effect)
      const selfStart = cardTop - stickyTop;
      const selfEnd = cardTop - scaleEndPositionPx;
      const selfProgress = calculateProgress(scrollTop, selfStart, selfEnd);

      // Push-scale: additional shrink from each subsequent card arriving
      let pushReduction = 0;
      for (let j = i + 1; j < n; j++) {
        const jCardTop = cardTopsRef.current[j];
        const jStickyTop = stackPositionPx + itemStackDistance * j;
        const jStart = jCardTop - jStickyTop;
        const jEnd = jCardTop - scaleEndPositionPx;
        pushReduction += calculateProgress(scrollTop, jStart, jEnd) * itemScale;
      }

      const scale = Math.max(baseScale, 1 - selfProgress * itemScale - pushReduction);
      const rotation = rotationAmount ? (selfProgress + pushReduction / itemScale) * rotationAmount : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jStickyTop = stackPositionPx + itemStackDistance * j;
          const jTriggerStart = cardTopsRef.current[j] - jStickyTop;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      const newScale = Math.round(scale * 1000) / 1000;
      const newRotation = Math.round(rotation * 100) / 100;
      const newBlur = Math.round(blur * 100) / 100;

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        lastTransform.pushOffset !== pushOffset ||
        Math.abs(lastTransform.scale - newScale) > 0.001 ||
        Math.abs(lastTransform.rotation - newRotation) > 0.1 ||
        Math.abs(lastTransform.blur - newBlur) > 0.1;

      if (hasChanged) {
        let transform = '';
        if (pushOffset > 0) transform += `translateY(${-pushOffset}px) `;
        transform += `scale(${newScale})`;
        if (newRotation !== 0) transform += ` rotate(${newRotation}deg)`;
        card.style.transform = transform;
        card.style.filter = newBlur > 0 ? `blur(${newBlur}px)` : '';
        lastTransformsRef.current.set(i, { pushOffset, scale: newScale, rotation: newRotation, blur: newBlur });
      }

      // Stack complete detection
      if (i === n - 1) {
        const pinStart = cardTop - stickyTop;
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete,
    calculateProgress, parsePercentage, getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupScrollHandling = useCallback(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Native scroll + rAF for touch devices
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateCardTransforms();
            ticking = false;
          });
          ticking = true;
        }
      };

      const target = useWindowScroll ? window : scrollerRef.current;
      if (target) {
        target.addEventListener('scroll', onScroll, { passive: true });
        nativeScrollCleanupRef.current = () => {
          target.removeEventListener('scroll', onScroll);
        };
      }
      return null;
    }

    // Desktop: use Lenis for smooth wheel scrolling
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
      });
      lenis.on('scroll', handleScroll);
      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenisRef.current = lenis;
      return lenis;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector('.scroll-stack-inner'),
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });
    lenis.on('scroll', handleScroll);
    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card'),
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
    });

    lastWidthRef.current = window.innerWidth;
    cachePositions();
    setupScrollHandling();
    updateCardTransforms();

    const onResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth === lastWidthRef.current) return;
      lastWidthRef.current = newWidth;
      cachePositions();
      updateCardTransforms();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      if (nativeScrollCleanupRef.current) nativeScrollCleanupRef.current();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardTopsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, scaleDuration, rotationAmount, blurAmount, useWindowScroll,
    onStackComplete, setupScrollHandling, updateCardTransforms, cachePositions,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}

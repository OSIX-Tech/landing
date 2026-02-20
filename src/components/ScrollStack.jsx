import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const layoutRef = useRef(null);
  const lastTransformsRef = useRef(new Map());

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const parsePct = useCallback((value, total) => {
    if (typeof value === 'string' && value.includes('%'))
      return (parseFloat(value) / 100) * total;
    return parseFloat(value);
  }, []);

  // Cache all position data once — avoids re-reading getBoundingClientRect
  // every frame (which would be affected by transforms → circular dependency).
  const cacheLayout = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const vh = window.innerHeight;
    const stackPx = parsePct(stackPosition, vh);
    const scaleEndPx = parsePct(scaleEndPosition, vh);

    // Strip transforms so getBoundingClientRect returns natural flow positions
    const saved = cards.map(c => c.style.transform);
    cards.forEach(c => { c.style.transform = 'none'; });
    void cards[0].offsetHeight; // force reflow

    const cardTops = cards.map(c => c.getBoundingClientRect().top + window.scrollY);

    const endEl = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');
    const endTop = endEl
      ? endEl.getBoundingClientRect().top + window.scrollY
      : cardTops[cardTops.length - 1] + 500;

    // Restore transforms
    cards.forEach((c, i) => { c.style.transform = saved[i] || ''; });

    // Pre-compute per-card layout values
    const n = cards.length;
    const triggerStarts = new Array(n);
    const triggerEnds = new Array(n);
    const pinTargets = new Array(n);
    for (let i = 0; i < n; i++) {
      pinTargets[i] = stackPx + itemStackDistance * i;
      triggerStarts[i] = cardTops[i] - pinTargets[i];
      triggerEnds[i] = cardTops[i] - scaleEndPx;
    }

    layoutRef.current = {
      cardTops,
      triggerStarts,
      triggerEnds,
      pinTargets,
      pinEnd: endTop - vh / 2,
    };
    lastTransformsRef.current.clear();
  }, [stackPosition, scaleEndPosition, itemStackDistance, useWindowScroll, parsePct]);

  const update = useCallback(() => {
    const layout = layoutRef.current;
    const cards = cardsRef.current;
    if (!layout || !cards.length) return;

    // Use Lenis scroll position when available (stays in sync with its rAF loop)
    const scrollTop = lenisRef.current
      ? lenisRef.current.scroll
      : (useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0));

    const { cardTops, triggerStarts, triggerEnds, pinTargets, pinEnd } = layout;
    const n = cards.length;

    cards.forEach((card, i) => {
      if (!card) return;

      // Scale — original reactbits formula: each card has its own target scale
      const scaleProgress = clamp(
        (scrollTop - triggerStarts[i]) / ((triggerEnds[i] - triggerStarts[i]) || 1),
        0, 1
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < n; j++) {
          if (scrollTop >= triggerStarts[j]) topIdx = j;
        }
        if (i < topIdx) blur = (topIdx - i) * blurAmount;
      }

      // Pin translation
      let translateY = 0;
      const isPinned = scrollTop >= triggerStarts[i] && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTops[i] + pinTargets[i];
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTops[i] + pinTargets[i];
      }

      const nt = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lt = lastTransformsRef.current.get(i);
      const changed = !lt
        || Math.abs(lt.translateY - nt.translateY) > 0.1
        || Math.abs(lt.scale - nt.scale) > 0.001
        || Math.abs(lt.rotation - nt.rotation) > 0.1
        || Math.abs(lt.blur - nt.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0,${nt.translateY}px,0) scale(${nt.scale}) rotate(${nt.rotation}deg)`;
        card.style.filter = nt.blur > 0 ? `blur(${nt.blur}px)` : '';
        card.style.zIndex = `${10 + i}`;
        lastTransformsRef.current.set(i, nt);
      }

      if (i === n - 1) {
        if (isPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isPinned && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [baseScale, itemScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    cacheLayout();

    // Lenis: smooth scroll on desktop, syncTouch on mobile (prevents flicker)
    const lenisOpts = useWindowScroll
      ? {
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          infinite: false,
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075,
        }
      : {
          wrapper: scroller,
          content: scroller.querySelector('.scroll-stack-inner'),
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          infinite: false,
          normalizeWheel: true,
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075,
        };

    const lenis = new Lenis(lenisOpts);
    lenisRef.current = lenis;
    lenis.on('scroll', update);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    // Native scroll fallback — safety net if Lenis doesn't fire
    const scrollTarget = useWindowScroll ? window : scroller;
    scrollTarget.addEventListener('scroll', update, { passive: true });

    update();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { cacheLayout(); update(); }, 100);
    };
    window.addEventListener('resize', onResize);

    return () => {
      scrollTarget.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      lenisRef.current = null;
      cards.forEach(c => {
        c.style.transform = '';
        c.style.filter = '';
        c.style.willChange = '';
        c.style.marginBottom = '';
        c.style.zIndex = '';
        c.style.backfaceVisibility = '';
      });
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      layoutRef.current = null;
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition,
    scaleEndPosition, baseScale, rotationAmount, blurAmount,
    useWindowScroll, onStackComplete, cacheLayout, update
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;

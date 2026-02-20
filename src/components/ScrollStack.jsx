import { useLayoutEffect, useRef, useCallback } from 'react';

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
  const cardsRef = useRef([]);
  const layoutRef = useRef(null);
  const lastTransformsRef = useRef(new Map());
  const tickingRef = useRef(false);

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const parsePct = useCallback((value, total) => {
    if (typeof value === 'string' && value.includes('%'))
      return (parseFloat(value) / 100) * total;
    return parseFloat(value);
  }, []);

  // Reads natural positions then applies CSS sticky. Runs inside useLayoutEffect
  // (before paint) so the reset→read→apply cycle is invisible to the user.
  const setup = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const vh = window.innerHeight;
    const stackPx = parsePct(stackPosition, vh);
    const scaleEndPx = parsePct(scaleEndPosition, vh);

    // Reset to natural flow so we can read true document positions
    cards.forEach(c => {
      c.style.position = 'relative';
      c.style.top = 'auto';
      c.style.transform = '';
    });
    void cards[0].offsetHeight; // force reflow

    const naturalTops = cards.map(c => c.getBoundingClientRect().top + window.scrollY);
    const stickyTops = cards.map((_, i) => stackPx + itemStackDistance * i);

    // Apply native sticky — browser compositor handles pinning, zero lag
    cards.forEach((card, i) => {
      card.style.position = 'sticky';
      card.style.top = `${Math.round(stickyTops[i])}px`;
      card.style.zIndex = `${10 + i}`;
    });

    layoutRef.current = { naturalTops, stickyTops, scaleEndPx };
    lastTransformsRef.current.clear();
  }, [stackPosition, scaleEndPosition, itemStackDistance, parsePct]);

  // Only touches transform + filter. Never touches position/top — those are
  // handled by CSS sticky and never change after setup().
  const update = useCallback(() => {
    const layout = layoutRef.current;
    const cards = cardsRef.current;
    if (!layout || !cards.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0);
    const { naturalTops, stickyTops, scaleEndPx } = layout;
    const n = cards.length;

    cards.forEach((card, i) => {
      if (!card) return;

      // How much to shrink this card — driven by subsequent cards arriving
      let totalReduction = 0;
      for (let j = i + 1; j < n; j++) {
        const jTrigger = naturalTops[j] - stickyTops[j];
        const jEnd = naturalTops[j] - scaleEndPx;
        const jProgress = clamp((scrollTop - jTrigger) / ((jEnd - jTrigger) || 1), 0, 1);
        totalReduction += jProgress * itemScale;
      }

      const scale = Math.max(baseScale, 1 - totalReduction);
      const rotation = rotationAmount
        ? (totalReduction / (itemScale || 1)) * rotationAmount
        : 0;

      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < n; j++) {
          if (scrollTop >= naturalTops[j] - stickyTops[j]) topIdx = j;
        }
        if (i < topIdx) blur = (topIdx - i) * blurAmount;
      }

      const nt = {
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lt = lastTransformsRef.current.get(i);
      const changed = !lt
        || Math.abs(lt.scale - nt.scale) > 0.001
        || Math.abs(lt.rotation - nt.rotation) > 0.1
        || Math.abs(lt.blur - nt.blur) > 0.1;

      if (changed) {
        let transform = `scale(${nt.scale})`;
        if (nt.rotation) transform += ` rotate(${nt.rotation}deg)`;
        card.style.transform = transform;
        card.style.filter = nt.blur > 0 ? `blur(${nt.blur}px)` : '';
        lastTransformsRef.current.set(i, nt);
      }

      if (i === n - 1) {
        const trigger = naturalTops[i] - stickyTops[i];
        const inView = scrollTop >= trigger;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
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
    });

    setup();
    update();

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          update();
          tickingRef.current = false;
        });
      }
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { setup(); update(); }, 100);
    };

    const scrollTarget = useWindowScroll ? window : scroller;
    scrollTarget.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      scrollTarget.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      cards.forEach(c => {
        c.style.position = '';
        c.style.top = '';
        c.style.zIndex = '';
        c.style.transform = '';
        c.style.filter = '';
        c.style.willChange = '';
        c.style.marginBottom = '';
      });
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      layoutRef.current = null;
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition,
    scaleEndPosition, baseScale, rotationAmount, blurAmount,
    useWindowScroll, onStackComplete, setup, update
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

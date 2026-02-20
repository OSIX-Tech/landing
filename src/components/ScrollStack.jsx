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

  const measure = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Temporarily strip transforms so we read natural flow positions
    const saved = cards.map(c => c.style.transform);
    cards.forEach(c => { c.style.transform = 'none'; });
    void cards[0].offsetHeight; // force reflow

    const vh = window.innerHeight;
    const stackPx = parsePct(stackPosition, vh);
    const scaleEndPx = parsePct(scaleEndPosition, vh);

    const endEl = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endTop = endEl
      ? endEl.getBoundingClientRect().top + window.scrollY
      : 0;

    const cardLayouts = cards.map((card, i) => {
      const rect = card.getBoundingClientRect();
      const naturalTop = rect.top + window.scrollY;
      return {
        naturalTop,
        triggerStart: naturalTop - stackPx - itemStackDistance * i,
        triggerEnd: naturalTop - scaleEndPx,
        pinStart: naturalTop - stackPx - itemStackDistance * i,
        pinEnd: endTop - vh / 2,
      };
    });

    // Restore transforms
    cards.forEach((c, i) => { c.style.transform = saved[i]; });

    layoutRef.current = { cardLayouts, stackPx, vh };
  }, [stackPosition, scaleEndPosition, itemStackDistance, useWindowScroll, parsePct]);

  const update = useCallback(() => {
    const layout = layoutRef.current;
    const cards = cardsRef.current;
    if (!layout || !cards.length) return;

    const scrollTop = window.scrollY;
    const { cardLayouts, stackPx } = layout;

    cards.forEach((card, i) => {
      if (!card) return;
      const cl = cardLayouts[i];

      // Scale progress
      const sProgress = clamp(
        (scrollTop - cl.triggerStart) / (cl.triggerEnd - cl.triggerStart || 1),
        0, 1
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - sProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * sProgress : 0;

      // Blur
      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < cards.length; j++) {
          if (scrollTop >= cardLayouts[j].triggerStart) topIdx = j;
        }
        if (i < topIdx) blur = (topIdx - i) * blurAmount;
      }

      // Pin translation
      let translateY = 0;
      if (scrollTop >= cl.pinStart && scrollTop <= cl.pinEnd) {
        translateY = scrollTop - cl.naturalTop + stackPx + itemStackDistance * i;
      } else if (scrollTop > cl.pinEnd) {
        translateY = cl.pinEnd - cl.naturalTop + stackPx + itemStackDistance * i;
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

      // Stack complete callback
      if (i === cards.length - 1) {
        const inView = scrollTop >= cl.pinStart && scrollTop <= cl.pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [baseScale, itemScale, itemStackDistance, rotationAmount, blurAmount, onStackComplete]);

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
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    measure();
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
      resizeTimer = setTimeout(() => {
        measure();
        update();
      }, 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      cards.forEach(c => {
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
    useWindowScroll, onStackComplete, measure, update
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

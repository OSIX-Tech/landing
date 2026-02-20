import { useLayoutEffect, useRef, useCallback } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  stackOffset = 12,
  scaleFactor = 0.04,
  stackPosition = '20%',
  itemDistance = 80,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const layoutRef = useRef(null);
  const tickingRef = useRef(false);

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const parsePct = useCallback((value, total) => {
    if (typeof value === 'string' && value.includes('%'))
      return (parseFloat(value) / 100) * total;
    return parseFloat(value);
  }, []);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards.length) return;

    const n = cards.length;
    const serviceCount = n - 1;
    const vh = window.innerHeight;
    const stackPx = parsePct(stackPosition, vh);

    // Reset positions (keep flex + gap)
    cards.forEach(c => {
      c.style.position = '';
      c.style.top = '';
      c.style.zIndex = '';
      const inner = c.firstElementChild;
      if (inner) inner.style.transform = '';
    });
    container.style.paddingBottom = '';
    container.style.marginBottom = '';
    void cards[0].offsetHeight;

    // Natural positions — flex gap is properly reflected here
    const naturalTops = cards.map(c => c.getBoundingClientRect().top + window.scrollY);
    const containerTop = container.getBoundingClientRect().top + window.scrollY;

    // Sticky positions for service cards
    const stickyTops = [];
    for (let i = 0; i < serviceCount; i++) {
      stickyTops.push(stackPx + i * stackOffset);
    }

    // Apply positions
    for (let i = 0; i < serviceCount; i++) {
      cards[i].style.position = 'sticky';
      cards[i].style.top = `${Math.round(stickyTops[i])}px`;
      cards[i].style.zIndex = `${i + 1}`;
    }
    // CTA: normal flow, paints above sticky cards.
    // Match tallest service card + stack spread so it fully covers the stack.
    let maxH = 0;
    for (let i = 0; i < serviceCount; i++) maxH = Math.max(maxH, cards[i].offsetHeight);
    const stackSpread = serviceCount > 1 ? stickyTops[serviceCount - 1] - stickyTops[0] : 0;
    cards[n - 1].style.minHeight = `${maxH + stackSpread}px`;

    cards[n - 1].style.position = 'relative';
    cards[n - 1].style.zIndex = `${n + 1}`;

    // Trigger points (when each service card reaches its sticky position)
    // Plus one extra for the CTA reaching the last service card's sticky pos
    const triggerPoints = [];
    for (let i = 0; i < serviceCount; i++) {
      triggerPoints.push(naturalTops[i] - stickyTops[i]);
    }
    triggerPoints.push(naturalTops[n - 1] - stickyTops[serviceCount - 1]);

    // Padding: CTA must fully cover the stack before first card unsticks.
    // CTA covers stack when: scrollY = naturalTops[CTA] - stickyTops[0]
    // First card unsticks when: scrollY = containerBottom - stickyTops[0] - firstCardHeight
    // Need: containerBottom >= naturalTops[CTA] + firstCardHeight + buffer
    const firstCardHeight = cards[0].offsetHeight;
    const neededBottom = naturalTops[n - 1] + firstCardHeight + 200;
    const currentBottom = containerTop + container.offsetHeight;
    const extra = Math.max(0, Math.ceil(neededBottom - currentBottom));
    if (extra > 0) {
      container.style.paddingBottom = `${extra}px`;
      container.style.marginBottom = `-${extra}px`;
    }

    layoutRef.current = { triggerPoints, serviceCount };
  }, [stackOffset, stackPosition, parsePct]);

  const update = useCallback(() => {
    const layout = layoutRef.current;
    const cards = cardsRef.current;
    if (!layout || !cards.length) return;

    const { triggerPoints, serviceCount } = layout;
    const scrollTop = window.scrollY;

    for (let i = 0; i < serviceCount; i++) {
      const inner = cards[i].firstElementChild;
      if (!inner) continue;

      let depth = 0;
      for (let j = i + 1; j <= serviceCount; j++) {
        const rangeStart = triggerPoints[j - 1];
        const rangeEnd = triggerPoints[j];
        const range = rangeEnd - rangeStart;
        if (range <= 0) { depth += 1; continue; }
        const progress = clamp((scrollTop - rangeStart) / range, 0, 1);
        depth += easeOutCubic(progress);
      }

      const scale = 1 - depth * scaleFactor;
      inner.style.transform = `scale(${scale.toFixed(4)})`;
      inner.style.transformOrigin = 'top center';
    }
  }, [scaleFactor]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    // Use flex gap instead of margins — avoids sticky+margin measurement bugs
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.rowGap = `${itemDistance}px`;

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
      resizeTimer = setTimeout(() => { measure(); update(); }, 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      cards.forEach(c => {
        c.style.position = '';
        c.style.top = '';
        c.style.zIndex = '';
        c.style.minHeight = '';
        const inner = c.firstElementChild;
        if (inner) {
          inner.style.transform = '';
          inner.style.transformOrigin = '';
        }
      });
      container.style.display = '';
      container.style.flexDirection = '';
      container.style.rowGap = '';
      container.style.paddingBottom = '';
      container.style.marginBottom = '';
      cardsRef.current = [];
      layoutRef.current = null;
    };
  }, [itemDistance, measure, update]);

  return (
    <div className={`scroll-stack-container ${className}`.trim()} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollStack;

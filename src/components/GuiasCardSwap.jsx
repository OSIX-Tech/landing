import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// ReactBits-style CardSwap deck: 3D-stacked cards that auto-cycle,
// front card drops out and slides to the back of the stack.
const GuiasCardSwap = ({ cards, delay = 3800, distX = 54, distY = 52, distZ = 90, skew = 5 }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const orderRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean);
    const total = els.length;
    if (!total) return;
    orderRef.current = els.map((_, i) => i);

    const slot = (i) => ({
      x: i * distX,
      y: -i * distY,
      z: -i * distZ,
      zIndex: total - i,
    });

    els.forEach((el, i) => {
      const s = slot(i);
      gsap.set(el, {
        x: s.x, y: s.y, z: s.z, zIndex: s.zIndex,
        xPercent: -50, yPercent: -50,
        skewY: skew,
        transformOrigin: 'center center',
        force3D: true,
      });
    });

    let tl = null;
    const swap = () => {
      if (pausedRef.current || document.hidden) return;
      const [front, ...rest] = orderRef.current;
      const frontEl = els[front];
      tl = gsap.timeline();

      // Front card drops out of the deck
      tl.to(frontEl, { y: '+=460', duration: 0.55, ease: 'power2.in' });

      // Remaining cards promote one slot forward
      rest.forEach((idx, i) => {
        const s = slot(i);
        tl.set(els[idx], { zIndex: s.zIndex }, '-=0.25');
        tl.to(els[idx], { x: s.x, y: s.y, z: s.z, duration: 0.7, ease: 'power3.out' }, '-=0.45');
      });

      // Dropped card returns at the back of the deck
      const back = slot(total - 1);
      tl.set(frontEl, { zIndex: back.zIndex });
      tl.to(frontEl, { x: back.x, y: back.y, z: back.z, duration: 0.7, ease: 'power3.out' }, '-=0.4');

      orderRef.current = [...rest, front];
    };

    const interval = setInterval(swap, delay);

    const node = containerRef.current;
    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);
    node.addEventListener('touchstart', pause, { passive: true });
    node.addEventListener('touchend', resume);

    return () => {
      clearInterval(interval);
      if (tl) tl.kill();
      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
      node.removeEventListener('touchstart', pause);
      node.removeEventListener('touchend', resume);
    };
  }, [cards, delay, distX, distY, distZ, skew]);

  return (
    <div className="guias-swap" ref={containerRef}>
      {cards.map((c, i) => (
        <a
          key={c.href}
          href={c.href}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="guias-swap-card"
        >
          <div className="guias-swap-top">
            <span className="guias-swap-num">{c.num}</span>
            <span className="guias-swap-tag">{c.tag}</span>
          </div>
          <span className="guias-swap-title">{c.title}</span>
          <span className="guias-swap-arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </span>
        </a>
      ))}
    </div>
  );
};

export default GuiasCardSwap;

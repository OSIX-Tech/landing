// Generative placeholder covers for guide cards.
// Poster-style monochrome compositions in the OSIX mark's language: each slug
// deterministically picks one of five curated patterns with seeded variation.
// Swap the rendered SVG for an <img> when real photos are available.

function seedFromString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function genGuideArt(slug: string, variantOverride?: number): string {
  const rnd = mulberry32(seedFromString(slug));
  const W = 400, H = 250;
  const parts: string[] = [];
  const variant = variantOverride !== undefined ? variantOverride % 5 : Math.floor(rnd() * 5);
  const dir = rnd() > 0.5 ? 1 : -1;

  if (variant === 0) {
    // Chevron march: bold chevrons crossing the frame, opacity ramp, one crisp accent
    const n = 5;
    const gap = 58 + rnd() * 10;
    const startX = (dir === 1 ? 60 : W - 60) + (rnd() - 0.5) * 40;
    const span = 74;
    for (let i = 0; i < n; i++) {
      const x = startX + dir * i * gap;
      const o = 0.06 + i * 0.055;
      parts.push(`<path d="M ${x - dir * span / 2} -20 L ${x + dir * span / 2} ${H / 2} L ${x - dir * span / 2} ${H + 20}" fill="none" stroke="#fff" stroke-width="30" opacity="${o.toFixed(2)}"/>`);
    }
    const ax = startX + dir * (n - 1.4) * gap;
    parts.push(`<path d="M ${ax - dir * span / 2} -20 L ${ax + dir * span / 2} ${H / 2} L ${ax - dir * span / 2} ${H + 20}" fill="none" stroke="#fff" stroke-width="3" opacity="0.9"/>`);
  } else if (variant === 1) {
    // Diagonal stripes: parallel full-bleed lines, alternating weight, one white accent
    const n = 6;
    const gap = 54 + rnd() * 12;
    const off = rnd() * 60 - 90;
    const accent = 1 + Math.floor(rnd() * (n - 2));
    for (let i = 0; i < n; i++) {
      const x = off + i * gap;
      const isAccent = i === accent;
      const w = isAccent ? 3 : (i % 2 === 0 ? 22 : 9);
      const o = isAccent ? 0.9 : 0.07 + (i / n) * 0.14;
      parts.push(`<line x1="${x}" y1="${H + 40}" x2="${x + H + 80}" y2="-40" stroke="#fff" stroke-width="${w}" opacity="${o.toFixed(2)}"/>`);
    }
  } else if (variant === 2) {
    // Nested chevrons: concentric > shapes sharing a vertex, ramping opacity
    const n = 5;
    const cx = W * (0.35 + rnd() * 0.3);
    const cy = H / 2 + (rnd() - 0.5) * 30;
    const step = 34 + rnd() * 8;
    for (let i = n - 1; i >= 0; i--) {
      const s = (i + 1.2) * step;
      const o = i === 0 ? 0.9 : 0.08 + (n - i) * 0.05;
      const w = i === 0 ? 3 : 16;
      parts.push(`<path d="M ${cx - dir * s * 0.55} ${cy - s} L ${cx + dir * s * 0.55} ${cy} L ${cx - dir * s * 0.55} ${cy + s}" fill="none" stroke="#fff" stroke-width="${w}" opacity="${o.toFixed(2)}"/>`);
    }
  } else if (variant === 3) {
    // Gradient grid: field of squares fading across, one large faint triangle behind
    const cols = 10, rows = 6;
    const cw = W / cols, ch = H / rows;
    const tx = rnd() * W * 0.5;
    parts.push(`<polygon points="${tx},${H + 30} ${tx + 260 * dir},${H + 30} ${tx + 130 * dir},-30" fill="#fff" opacity="0.05"/>`);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const t = dir === 1 ? c / cols : 1 - c / cols;
        const o = 0.04 + t * t * 0.4 + rnd() * 0.04;
        const s = 5 + t * 4;
        parts.push(`<rect x="${(c + 0.5) * cw - s / 2}" y="${(r + 0.5) * ch - s / 2}" width="${s.toFixed(1)}" height="${s.toFixed(1)}" fill="#fff" opacity="${o.toFixed(2)}"/>`);
      }
    }
  } else {
    // Overlapping peaks: large translucent triangles rising from the base, one crisp outline
    const n = 4;
    const baseXs = Array.from({ length: n }, () => rnd());
    baseXs.sort();
    baseXs.forEach((bx, i) => {
      const cx = 40 + bx * (W - 80);
      const half = 90 + rnd() * 70;
      const peak = 20 + rnd() * 60;
      const o = 0.06 + i * 0.05;
      parts.push(`<polygon points="${cx - half},${H + 20} ${cx + half},${H + 20} ${cx},${peak}" fill="#fff" opacity="${o.toFixed(2)}"/>`);
    });
    const acx = 60 + rnd() * (W - 120);
    const ahalf = 70 + rnd() * 40;
    parts.push(`<polygon points="${acx - ahalf},${H + 20} ${acx + ahalf},${H + 20} ${acx},${40 + rnd() * 40}" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.9"/>`);
  }

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"><rect width="${W}" height="${H}" fill="#0a0a0a"/>${parts.join('')}</svg>`;
}

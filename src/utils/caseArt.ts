// Generative placeholder art for case study pages.
// Same idea as guideArt, different vocabulary: where guide covers are poster
// shapes, case art leans on the language of the work itself — blueprints,
// pipelines, radar sweeps, data ladders, exploded views. Each case id
// deterministically picks one of five compositions.
// Swap the rendered SVG for an <img>/<video> as soon as real media exists.

import { seedFromString, mulberry32 } from './seed';

export function genCaseArt(id: string, variantOverride?: number): string {
  const rnd = mulberry32(seedFromString(id));
  const W = 600, H = 420;
  const parts: string[] = [];
  const variant = variantOverride !== undefined ? variantOverride % 5 : Math.floor(rnd() * 5);

  if (variant === 0) {
    // Blueprint: faint measuring grid with a bold machined outline on top
    const step = 30;
    for (let x = step; x < W; x += step) {
      parts.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#fff" stroke-width="1" opacity="0.05"/>`);
    }
    for (let y = step; y < H; y += step) {
      parts.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#fff" stroke-width="1" opacity="0.05"/>`);
    }
    const cx = W / 2 + (rnd() - 0.5) * 60;
    const cy = H / 2 + (rnd() - 0.5) * 40;
    const r = 110 + rnd() * 30;
    const sides = 6;
    const pts: string[] = [];
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
      pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
    }
    parts.push(`<polygon points="${pts.join(' ')}" fill="#fff" opacity="0.06"/>`);
    parts.push(`<polygon points="${pts.join(' ')}" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.85"/>`);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${(r * 0.38).toFixed(1)}" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.85"/>`);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${(r * 0.62).toFixed(1)}" fill="none" stroke="#fff" stroke-width="1" opacity="0.25" stroke-dasharray="6 8"/>`);
  } else if (variant === 1) {
    // Radar sweep: concentric arcs expanding from a corner, one crisp
    const ox = rnd() > 0.5 ? 0 : W;
    const oy = H;
    const n = 9;
    const accent = 3 + Math.floor(rnd() * 4);
    for (let i = 1; i <= n; i++) {
      const r = i * (52 + rnd() * 6);
      const isAccent = i === accent;
      parts.push(`<circle cx="${ox}" cy="${oy}" r="${r.toFixed(1)}" fill="none" stroke="#fff" stroke-width="${isAccent ? 3 : 14}" opacity="${isAccent ? 0.9 : (0.04 + i * 0.012).toFixed(3)}"/>`);
    }
    const dir = ox === 0 ? 1 : -1;
    for (let i = 0; i < 4; i++) {
      const a = -Math.PI / 2 + dir * (0.18 + i * 0.32);
      parts.push(`<line x1="${ox}" y1="${oy}" x2="${(ox + Math.cos(a) * 700).toFixed(1)}" y2="${(oy + Math.sin(a) * 700).toFixed(1)}" stroke="#fff" stroke-width="1" opacity="0.12"/>`);
    }
  } else if (variant === 2) {
    // Pipeline: orthogonal routing between nodes, one lit path end to end
    const rows = 4, cols = 5;
    const cw = W / (cols + 1), ch = H / (rows + 1);
    const litRow = Math.floor(rnd() * rows);
    for (let r = 0; r < rows; r++) {
      const y = (r + 1) * ch;
      const lit = r === litRow;
      parts.push(`<line x1="${cw * 0.4}" y1="${y}" x2="${W - cw * 0.4}" y2="${y}" stroke="#fff" stroke-width="${lit ? 2.5 : 1}" opacity="${lit ? 0.85 : 0.1}"/>`);
      for (let c = 0; c < cols; c++) {
        const x = (c + 1) * cw;
        const s = lit ? 9 : 6;
        parts.push(`<rect x="${x - s}" y="${y - s}" width="${s * 2}" height="${s * 2}" fill="${lit ? '#fff' : 'none'}" stroke="#fff" stroke-width="1.5" opacity="${lit ? 0.9 : 0.22}"/>`);
        if (r < rows - 1 && rnd() > 0.55) {
          parts.push(`<line x1="${x}" y1="${y + s}" x2="${x}" y2="${y + ch - s}" stroke="#fff" stroke-width="1" opacity="0.12"/>`);
        }
      }
    }
  } else if (variant === 3) {
    // Data ladder: stacked bars growing across the frame, one crisp outline
    const n = 11;
    const gap = H / n;
    const accent = 2 + Math.floor(rnd() * (n - 4));
    for (let i = 0; i < n; i++) {
      const y = i * gap + gap * 0.18;
      const h = gap * 0.64;
      const w = 70 + rnd() * 90 + (i / n) * 300;
      const isAccent = i === accent;
      if (isAccent) {
        parts.push(`<rect x="0" y="${y.toFixed(1)}" width="${Math.min(w, W).toFixed(1)}" height="${h.toFixed(1)}" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.9"/>`);
      } else {
        parts.push(`<rect x="0" y="${y.toFixed(1)}" width="${Math.min(w, W).toFixed(1)}" height="${h.toFixed(1)}" fill="#fff" opacity="${(0.05 + (i / n) * 0.16).toFixed(3)}"/>`);
      }
    }
  } else {
    // Exploded view: nested rotated frames drifting off a shared centre
    const n = 6;
    const cx = W / 2 + (rnd() - 0.5) * 40;
    const cy = H / 2 + (rnd() - 0.5) * 30;
    const drift = (rnd() - 0.5) * 18;
    for (let i = n - 1; i >= 0; i--) {
      const s = 60 + i * 42;
      const rot = (i * (4 + rnd() * 3)).toFixed(1);
      const ox = cx + i * drift;
      const oy = cy - i * 6;
      const isAccent = i === 1;
      parts.push(
        `<rect x="${(ox - s / 2).toFixed(1)}" y="${(oy - s * 0.66).toFixed(1)}" width="${s}" height="${(s * 1.32).toFixed(1)}" ` +
        `fill="${isAccent ? 'none' : '#fff'}" stroke="#fff" stroke-width="${isAccent ? 2.5 : 1}" ` +
        `opacity="${isAccent ? 0.9 : (0.05 + (n - i) * 0.035).toFixed(3)}" ` +
        `transform="rotate(${rot} ${ox.toFixed(1)} ${oy.toFixed(1)})"/>`
      );
    }
  }

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"><rect width="${W}" height="${H}" fill="#0a0a0a"/>${parts.join('')}</svg>`;
}

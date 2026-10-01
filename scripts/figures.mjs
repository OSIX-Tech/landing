#!/usr/bin/env node
// Renders every generated image on the site from content frontmatter:
//   - the cover of each guide and case  → src/assets/figures/<collection>/<slug>/cover.png
//   - the charts a case declares in `figures` → src/assets/figures/casos/<slug>/<id>.png
// Runs before `pnpm dev` and `pnpm build` (`pnpm figures` runs it alone). Outputs are not
// committed: they derive from the Markdown files, so a figure can never drift from its page.
// Text is drawn with the site font (Plus Jakarta Sans) and converted to paths, so the PNGs
// look the same on every machine.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import satori from 'satori';
import sharp from 'sharp';
import { parse } from 'yaml';

const ROOT = path.resolve();
const OUT = path.join(ROOT, 'src/assets/figures');
const FONT_DIR = path.join(ROOT, 'node_modules/@fontsource/plus-jakarta-sans/files');
const VERSION = 'figures-v8'; // bump to re-render everything after a design change

const W = 1600;
const H = 900;
const INK = '#000000'; // images use full black, not the page's near-black ink
const PAPER = '#ffffff';
const SURFACE = '#f5f5f4';
const MUTED = '#5c5c5c';
const MUTED_ON_INK = '#a3a3a3';
const LINE = 'rgba(10, 10, 10, 0.14)';
const LINE_ON_INK = 'rgba(255, 255, 255, 0.18)';
const FONT = 'Plus Jakarta Sans';

const fonts = [500, 700, 800].map((weight) => ({
  name: FONT,
  data: fs.readFileSync(path.join(FONT_DIR, `plus-jakarta-sans-latin-${weight}-normal.woff`)),
  weight,
  style: 'normal',
}));

const logoDark = await dataUri(path.join(ROOT, 'public/full_logo.png'));
const logoLight = await dataUri(path.join(ROOT, 'public/full_logo_w.png'));

// ---------- tiny element helpers (satori takes React-like objects) ----------
const el = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } });
const text = (value, style) => ({ type: 'div', props: { style, children: String(value) } });
const logo = (src, height) => ({
  type: 'img',
  props: { src: src.uri, width: Math.round((src.width / src.height) * height), height },
});

async function dataUri(file) {
  const buf = fs.readFileSync(file);
  const { width, height } = await sharp(buf).metadata();
  return { uri: `data:image/png;base64,${buf.toString('base64')}`, width, height };
}

const eyebrow = (value, color) =>
  text(value.toUpperCase(), { fontSize: 22, fontWeight: 700, letterSpacing: 4, color });

// ---------- the OSIX mark as two clip-path polygons (same points as logo3d.ts) ----------
const LEFT = [
  [53.7168, 177.064], [39.4381, 185.189], [39.1495, 185.021], [39.1495, 180.983], [39.1495, 177.232],
  [39.4371, 176.734], [46.3435, 172.747], [46.6308, 172.67], [46.9176, 172.749], [53.7189, 176.732],
];
const RIGHT = [
  [49.2004, 180.63], [63.4791, 172.505], [63.763, 172.673], [63.7186, 175.831], [63.7139, 176.495],
  [63.7139, 180.555], [63.4253, 181.051], [56.5746, 184.949], [56.2865, 185.024], [55.9995, 184.945],
  [49.1983, 180.961],
];
const all = [...LEFT, ...RIGHT];
const minX = Math.min(...all.map((p) => p[0]));
const maxX = Math.max(...all.map((p) => p[0]));
const minY = Math.min(...all.map((p) => p[1]));
const maxY = Math.max(...all.map((p) => p[1]));
const MARK_RATIO = (maxX - minX) / (maxY - minY);

function mark({ size, x, y, rotate, left, right, stroke }) {
  // Satori has no polygon clipping, so the mark is an inline SVG passed as an image.
  // With `stroke`, the halves are outlined instead of filled.
  const height = Math.round(size / MARK_RATIO);
  const pts = (points) => points.map(([px, py]) => `${(px - minX).toFixed(3)},${(py - minY).toFixed(3)}`).join(' ');
  const pad = stroke ? 0.6 : 0;
  const poly = (points, fill) =>
    stroke
      ? `<polygon points="${pts(points)}" fill="none" stroke="${fill}" stroke-width="${stroke}" stroke-linejoin="round"/>`
      : `<polygon points="${pts(points)}" fill="${fill}"/>`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${(maxX - minX + 2 * pad).toFixed(3)} ${(maxY - minY + 2 * pad).toFixed(3)}">` +
    poly(LEFT, left) + poly(RIGHT, right) + `</svg>`;
  return {
    type: 'img',
    props: {
      src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
      width: Math.round(size),
      height,
      style: { position: 'absolute', left: Math.round(x), top: Math.round(y), transform: `rotate(${rotate}deg)` },
    },
  };
}

// ---------- Lucide icons for guide covers ----------
// A guide can set `icon:` (a Lucide name) in its frontmatter; otherwise its category, then its
// section, decides. Drawn as thin white lines, large, in the cover's upper right.
const ICON_BY_CATEGORY = {
  Criterios: 'list-checks', Comparativa: 'columns-3', 'IA para pymes': 'sparkles', 'Automatización documental': 'file-stack',
  Turismo: 'map-pin', 'Software a medida': 'code', Procesos: 'workflow', 'Precios reales': 'euro', 'Precios de agentes': 'coins',
  Ofertas: 'receipt', Modernización: 'refresh-cw', Medición: 'gauge', Licitaciones: 'landmark', Laboratorios: 'flask-conical',
  Integración: 'plug', Informes: 'chart-column', Industria: 'factory', Implantación: 'rocket', 'IA explicable': 'eye',
  Herramientas: 'wrench', Gobernanza: 'shield-check', Gestorías: 'briefcase', Facturación: 'receipt-euro', Expectativas: 'target',
  Distribución: 'truck', Datos: 'database', 'Correo y CRM': 'mail', Contratos: 'file-signature', Continuidad: 'repeat',
  Conceptos: 'book-open', Chatbots: 'message-square', 'Casos reales': 'badge-check', Ayudas: 'hand-coins', Automatización: 'bot',
  'Atención al cliente': 'headset', 'Asistentes con IA': 'message-circle', Alimentación: 'wheat', 'Agentes de IA': 'bot',
};
const ICON_BY_SECTION = {
  'primeros-pasos': 'compass', 'costes-y-resultados': 'calculator', 'elegir-proveedor': 'search-check',
  'automatizar-procesos': 'workflow', sectores: 'factory', 'software-y-contratos': 'file-check',
};
const ICON_DIR = path.join(ROOT, 'node_modules/lucide-static/icons');

function iconFor(data) {
  return data.icon ?? ICON_BY_CATEGORY[data.category] ?? ICON_BY_SECTION[data.section] ?? 'book-open';
}

function icon(name, { size, color, strokeWidth = 1.25, x, y }) {
  const file = path.join(ICON_DIR, `${name}.svg`);
  if (!fs.existsSync(file)) throw new Error(`Icono Lucide desconocido: "${name}" (mira node_modules/lucide-static/icons).`);
  const svg = fs
    .readFileSync(file, 'utf8')
    .replace(/<!--[\s\S]*?-->/, '')
    .replace('stroke="currentColor"', `stroke="${color}"`)
    .replace('stroke-width="2"', `stroke-width="${strokeWidth}"`);
  return {
    type: 'img',
    props: { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`, width: size, height: size, style: { position: 'absolute', left: x, top: y } },
  };
}

// ---------- seeded variation for guide covers ----------
function seeded(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 3432918353), (h = (h << 13) | (h >>> 19));
  let a = h >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- renderers ----------
const GREY_2 = '#d9d9d9';

const GUIDE_DESIGN = process.env.GUIDE_DESIGN ?? 'marca-arriba';

const titleSize = (t) => (t.length > 64 ? 64 : t.length > 44 ? 76 : 92);
const frame = (children, extra = {}) =>
  el(
    'div',
    {
      width: W,
      height: H,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 72,
      background: INK,
      color: PAPER,
      fontFamily: FONT,
      position: 'relative',
      overflow: 'hidden',
      ...extra,
    },
    children,
  );

/** Guide covers: the case cover's language (black, white type, OSIX top right) with text
 *  instead of figures. Four designs; GUIDE_DESIGN picks one. */
const GUIDE_DESIGNS = {
  // The guide's title, large, bottom-left.
  titulo(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [eyebrow(`Guía · ${data.category}`, MUTED_ON_INK), logo(logoLight, 40)]),
      el('div', { flexDirection: 'column', maxWidth: 1340 }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
        text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
      ]),
    ]);
  },
  // The category huge, the title under it in grey.
  categoria(slug, data) {
    const c = data.category;
    const size = c.length > 22 ? 96 : c.length > 14 ? 120 : 150;
    return frame([
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [eyebrow('Guía práctica', MUTED_ON_INK), logo(logoLight, 40)]),
      el('div', { flexDirection: 'column', maxWidth: 1340 }, [
        text(c, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.045, lineHeight: 0.98 }),
        text(data.shortTitle ?? data.title, { marginTop: 32, fontSize: 34, fontWeight: 500, lineHeight: 1.3, color: GREY_2, maxWidth: 1100 }),
      ]),
    ]);
  },
  // Title bottom-left; the white mark sits mid-height at the right edge, cut in half.
  marca(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const markSize = 760;
    return frame([
      mark({ size: markSize, x: W - markSize / 2, y: (H - markSize / MARK_RATIO) / 2, rotate: 0, left: PAPER, right: PAPER }),
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [eyebrow(`Guía · ${data.category}`, MUTED_ON_INK), logo(logoLight, 40)]),
      el('div', { flexDirection: 'column', maxWidth: 1080 }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
        text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
      ]),
    ]);
  },
  // Mark top-right, cut in half; wordmark bottom-right.
  'marca-arriba'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const m = 1080;
    return frame([
      mark({ size: m, x: W - m * 0.56, y: -150, rotate: 0, left: PAPER, right: PAPER }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Mark top-right, cut in half, with the wordmark in black over it.
  'marca-arriba-negro'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const m = 760;
    return frame([
      mark({ size: m, x: W - m / 2, y: 40, rotate: 0, left: PAPER, right: PAPER }),
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [eyebrow(`Guía · ${data.category}`, MUTED_ON_INK), logo(logoDark, 40)]),
      el('div', { flexDirection: 'column', maxWidth: 1080 }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
        text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
      ]),
    ]);
  },
  // White cover: black mark top-right cut in half, black wordmark bottom-right.
  'blanco'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const m = 1080;
    return frame(
      [
        mark({ size: m, x: W - m * 0.56, y: -150, rotate: 0, left: INK, right: INK }),
        eyebrow(`Guía · ${data.category}`, MUTED),
        el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
          el('div', { flexDirection: 'column', maxWidth: 1080 }, [
            text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
            text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED }),
          ]),
          logo(logoDark, 40),
        ]),
      ],
      { background: PAPER, color: INK },
    );
  },
  // Whole mark, white, upper right.
  'marca-entera'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      mark({ size: 520, x: W - 72 - 520, y: 72, rotate: 0, left: PAPER, right: PAPER }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Whole mark outlined, upper right.
  'marca-trazo'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      mark({ size: 560, x: W - 72 - 560, y: 60, rotate: 0, left: PAPER, right: PAPER, stroke: 0.35 }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Whole mark, one half white and one grey, upper right.
  'marca-dos-tonos'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      mark({ size: 520, x: W - 72 - 520, y: 72, rotate: 0, left: PAPER, right: '#5c5c5c' }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // The full OSIX wordmark, large, upper right; nothing else.
  'wordmark'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      el('div', { justifyContent: 'space-between', alignItems: 'flex-start' }, [eyebrow(`Guía · ${data.category}`, MUTED_ON_INK), logo(logoLight, 96)]),
      el('div', { flexDirection: 'column', maxWidth: 1200 }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
        text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
      ]),
    ]);
  },
  // A row of three small marks fading to grey, upper right.
  'tres-marcas'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      mark({ size: 220, x: W - 72 - 220, y: 72, rotate: 0, left: PAPER, right: PAPER }),
      mark({ size: 220, x: W - 72 - 220 * 2 - 40, y: 72, rotate: 0, left: '#8a8a8a', right: '#8a8a8a' }),
      mark({ size: 220, x: W - 72 - 220 * 3 - 80, y: 72, rotate: 0, left: '#3a3a3a', right: '#3a3a3a' }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // A thin line icon for the guide's subject, upper right.
  icono(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const n = 400;
    return frame([
      icon(iconFor(data), { size: n, color: PAPER, strokeWidth: 1.1, x: W - 72 - n + 20, y: 48 }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Same icon, larger and in grey so the title stays in front.
  'icono-grande'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const n = 560;
    return frame([
      icon(iconFor(data), { size: n, color: '#8a8a8a', strokeWidth: 0.9, x: W - 72 - n + 40, y: 20 }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // A grid of dots, upper right.
  puntos(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const dots = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 9; c++) dots.push(el('div', { position: 'absolute', left: W - 72 - 9 * 56 + c * 56, top: 72 + r * 56, width: 12, height: 12, borderRadius: 6, background: c + r >= 8 ? PAPER : '#5c5c5c' }));
    return frame([
      ...dots,
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Section number, large and thin, upper right.
  numero(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const sections = ['primeros-pasos', 'costes-y-resultados', 'elegir-proveedor', 'automatizar-procesos', 'sectores', 'software-y-contratos'];
    const n = String(sections.indexOf(data.section) + 1).padStart(2, '0');
    return frame([
      text(n, { position: 'absolute', right: 60, top: 20, fontSize: 320, fontWeight: 500, letterSpacing: -20, lineHeight: 1, color: '#3a3a3a' }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Concentric rings, upper right.
  anillos(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const rings = [440, 330, 220, 110].map((d, i) =>
      el('div', { position: 'absolute', right: 72 + (440 - d) / 2, top: 60 + (440 - d) / 2, width: d, height: d, borderRadius: d / 2, border: `2px solid ${i === 3 ? PAPER : i === 2 ? '#a3a3a3' : i === 1 ? '#5c5c5c' : '#333333'}` }),
    );
    return frame([
      ...rings,
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Diagonal hairlines block, upper right.
  rayas(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      el('div', { position: 'absolute', right: 72, top: 72, width: 480, height: 300, backgroundImage: `repeating-linear-gradient(135deg, ${PAPER} 0, ${PAPER} 2px, transparent 2px, transparent 18px)` }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // The subject icon inside a ring, upper right.
  'icono-anillo'(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const d = 400;
    return frame([
      el('div', { position: 'absolute', right: 72, top: 60, width: d, height: d, borderRadius: d / 2, border: `2px solid ${PAPER}` }),
      icon(iconFor(data), { size: 200, color: PAPER, strokeWidth: 1.25, x: W - 72 - d / 2 - 100, y: 60 + d / 2 - 100 }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // A big arrow pointing up-right: every guide goes somewhere.
  flecha(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    return frame([
      icon('arrow-up-right', { size: 440, color: PAPER, strokeWidth: 1, x: W - 72 - 440 + 40, y: 20 }),
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // A three-line checklist, like the guide's "respuesta en 30 segundos".
  lista(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t);
    const rows = [0, 1, 2].map((i) =>
      el('div', { position: 'absolute', right: 72, top: 80 + i * 92, alignItems: 'center', gap: 28 }, [
        el('div', { width: 44, height: 44, border: `2px solid ${PAPER}`, alignItems: 'center', justifyContent: 'center' }, i === 0 ? [el('div', { width: 20, height: 20, background: PAPER })] : []),
        el('div', { width: [360, 280, 320][i], height: 2, background: i === 0 ? PAPER : '#5c5c5c' }),
      ]),
    );
    return frame([
      ...rows,
      eyebrow(`Guía · ${data.category}`, MUTED_ON_INK),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1080 }, [
          text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
          text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
        ]),
        logo(logoLight, 40),
      ]),
    ]);
  },
  // Centred title between two hairlines, like a book cover.
  centrado(slug, data) {
    const t = data.shortTitle ?? data.title;
    const size = titleSize(t) - 8;
    return frame([
      el('div', { justifyContent: 'space-between', alignItems: 'center', paddingBottom: 28, borderBottom: `1px solid ${LINE_ON_INK}` }, [
        eyebrow('Guía práctica', MUTED_ON_INK),
        eyebrow(data.category, MUTED_ON_INK),
      ]),
      el('div', { flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 80px' }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.04, textAlign: 'center' }),
      ]),
      el('div', { justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, borderTop: `1px solid ${LINE_ON_INK}` }, [
        text('Para pymes · con fuentes y límites claros', { fontSize: 24, fontWeight: 500, color: MUTED_ON_INK }),
        logo(logoLight, 36),
      ]),
    ]);
  },
};

const guideCover = (slug, data) => GUIDE_DESIGNS[GUIDE_DESIGN](slug, data);

function caseCover(data) {
  const metrics = data.metrics.slice(0, 4);
  const valueSize = [0, 168, 140, 112, 88][metrics.length];
  const tiles = metrics.map((m, i) =>
    el(
      'div',
      {
        flex: 1,
        minWidth: 0,
        flexDirection: 'column',
        paddingTop: 32,
        borderTop: `3px solid ${i === 0 ? PAPER : LINE_ON_INK}`,
      },
      [
        text(m.value, { fontSize: valueSize, fontWeight: 800, letterSpacing: -valueSize * 0.05, lineHeight: 1 }),
        text(m.label, { marginTop: 22, fontSize: 30, fontWeight: 500, lineHeight: 1.25 }),
        ...(m.note ? [text(m.note, { marginTop: 10, fontSize: 22, fontWeight: 500, color: MUTED_ON_INK })] : []),
      ],
    ),
  );
  return el(
    'div',
    {
      width: W,
      height: H,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 72,
      background: INK,
      color: PAPER,
      fontFamily: FONT,
    },
    [
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [
        eyebrow(`Caso · ${data.category}`, MUTED_ON_INK),
        logo(logoLight, 40),
      ]),
      el('div', { gap: 56 }, tiles),
      text(data.status, { fontSize: 24, fontWeight: 500, color: MUTED_ON_INK }),
    ],
  );
}

const number = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2, useGrouping: 'always' });

function bars(spec) {
  const max = Math.max(...spec.items.map((i) => i.value));
  const rows = spec.items.map((item) =>
    el('div', { alignItems: 'center', gap: 32 }, [
      text(item.label, { width: 440, fontSize: 26, fontWeight: 600, lineHeight: 1.2 }),
      el('div', { flex: 1, height: 52, background: SURFACE }, [
        el('div', { width: `${Math.max(1, (item.value / max) * 100)}%`, height: '100%', background: item.value === max ? INK : MUTED }),
      ]),
      text(item.display ?? `${number.format(item.value)}${spec.unit ? ` ${spec.unit}` : ''}`, {
        width: 230,
        justifyContent: 'flex-end',
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: -1,
      }),
    ]),
  );
  return el(
    'div',
    { width: W, height: H, flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: PAPER, color: INK, fontFamily: FONT },
    [
      el('div', { flexDirection: 'column' }, [
        text(spec.title, { fontSize: 46, fontWeight: 800, letterSpacing: -2, lineHeight: 1.1 }),
        ...(spec.subtitle ? [text(spec.subtitle, { marginTop: 14, fontSize: 26, fontWeight: 500, color: MUTED })] : []),
      ]),
      el('div', { flexDirection: 'column', gap: 26 }, rows),
      el('div', { justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, borderTop: `1px solid ${LINE}` }, [
        text(spec.note ?? 'Cifras de producción medidas por OSIX', { fontSize: 22, fontWeight: 500, color: MUTED }),
        logo(logoDark, 32),
      ]),
    ],
  );
}

// ---------- pipeline ----------
async function render(tree, file) {
  const svg = await satori(tree, { width: W, height: H, fonts });
  await sharp(Buffer.from(svg)).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(file);
}

const hashOf = (input) => crypto.createHash('sha1').update(VERSION + JSON.stringify(input)).digest('hex');

async function emit(dir, name, input, build) {
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}.png`);
  const stamp = path.join(dir, `${name}.hash`);
  const hash = hashOf(input);
  if (fs.existsSync(file) && fs.existsSync(stamp) && fs.readFileSync(stamp, 'utf8') === hash) return false;
  await render(build(), file);
  fs.writeFileSync(stamp, hash);
  return true;
}

function frontmatter(file) {
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`${file}: sin frontmatter`);
  return parse(m[1]);
}

if (process.env.PREVIEW_OUT) {
  const slugs = (process.env.PREVIEW_SLUG ?? 'automatizar-albaranes-facturas-proveedores-erp').split(',');
  const designs = (process.env.PREVIEW_DESIGNS ?? Object.keys(GUIDE_DESIGNS).join(',')).split(',');
  fs.mkdirSync(process.env.PREVIEW_OUT, { recursive: true });
  for (const slug of slugs) {
    const data = frontmatter(path.join(ROOT, 'src/content/guias', `${slug}.md`));
    for (const name of designs) await render(GUIDE_DESIGNS[name](slug, data), path.join(process.env.PREVIEW_OUT, `${name}--${slug}.png`));
  }
  console.log(`preview → ${process.env.PREVIEW_OUT}`);
  process.exit(0);
}

const started = Date.now();
let rendered = 0;
const wanted = new Set();

for (const collection of ['guias', 'casos']) {
  const dir = path.join(ROOT, 'src/content', collection);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    const data = frontmatter(path.join(dir, file));
    const out = path.join(OUT, collection, slug);
    wanted.add(path.join(collection, slug, 'cover'));
    if (collection === 'guias') {
      rendered += await emit(out, 'cover', { design: GUIDE_DESIGN, category: data.category, title: data.shortTitle ?? data.title }, () => guideCover(slug, data));
    } else {
      rendered += await emit(out, 'cover', { metrics: data.metrics, status: data.status, category: data.category }, () => caseCover(data));
      for (const spec of data.figures ?? []) {
        if (spec.type !== 'bars') throw new Error(`${file}: figura "${spec.id}" de tipo desconocido "${spec.type}"`);
        wanted.add(path.join(collection, slug, spec.id));
        rendered += await emit(out, spec.id, spec, () => bars(spec));
      }
    }
  }
}

// Remove figures whose page or spec no longer exists.
if (fs.existsSync(OUT)) {
  for (const collection of fs.readdirSync(OUT)) {
    for (const slug of fs.readdirSync(path.join(OUT, collection))) {
      const dir = path.join(OUT, collection, slug);
      for (const f of fs.readdirSync(dir)) {
        const name = f.replace(/\.(png|hash)$/, '');
        if (!wanted.has(path.join(collection, slug, name))) fs.rmSync(path.join(dir, f));
      }
      if (!fs.readdirSync(dir).length) fs.rmdirSync(dir);
    }
  }
}

console.log(`figures: ${wanted.size} up to date, ${rendered} rendered in ${((Date.now() - started) / 1000).toFixed(1)}s`);

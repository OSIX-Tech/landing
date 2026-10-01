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
const VERSION = 'figures-v7'; // bump to re-render everything after a design change

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

function mark({ size, x, y, rotate, left, right }) {
  // Satori has no polygon clipping, so the mark is an inline SVG passed as an image.
  const height = Math.round(size / MARK_RATIO);
  const pts = (points) => points.map(([px, py]) => `${(px - minX).toFixed(3)},${(py - minY).toFixed(3)}`).join(' ');
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${(maxX - minX).toFixed(3)} ${(maxY - minY).toFixed(3)}">` +
    `<polygon points="${pts(LEFT)}" fill="${left}"/><polygon points="${pts(RIGHT)}" fill="${right}"/></svg>`;
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
const GREY_1 = '#8a8a8a';
const GREY_2 = '#d9d9d9';
const GREY_3 = '#efefef';

/** Six hand-set compositions of the mark; the slug picks one, so every guide differs and
 *  none looks accidental. All black, white and grey. The right half of the frame is theirs;
 *  the text owns the bottom-left. */
const LAYOUTS = [
  () => [mark({ size: 980, x: 900, y: 40, rotate: 0, left: INK, right: GREY_2 })],
  () => [mark({ size: 620, x: 1000, y: 60, rotate: 90, left: INK, right: INK })],
  () => [
    mark({ size: 520, x: 780, y: 60, rotate: 0, left: GREY_2, right: GREY_2 }),
    mark({ size: 520, x: 1040, y: 300, rotate: 0, left: INK, right: INK }),
  ],
  () => [
    mark({ size: 1500, x: 500, y: -120, rotate: 0, left: GREY_3, right: GREY_3 }),
    mark({ size: 420, x: 1110, y: 90, rotate: 0, left: INK, right: INK }),
  ],
  () => [mark({ size: 760, x: 940, y: 150, rotate: 180, left: INK, right: GREY_1 })],
  () => [
    mark({ size: 300, x: 760, y: 100, rotate: 0, left: INK, right: INK }),
    mark({ size: 300, x: 1030, y: 100, rotate: 0, left: GREY_1, right: GREY_1 }),
    mark({ size: 300, x: 1300, y: 100, rotate: 0, left: GREY_2, right: GREY_2 }),
  ],
];

function guideCover(slug, data) {
  const pick = Math.floor(seeded(slug)() * LAYOUTS.length);
  const category = data.category;
  const size = category.length > 22 ? 84 : category.length > 14 ? 104 : 128;
  return el(
    'div',
    {
      width: W,
      height: H,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 72,
      background: PAPER,
      color: INK,
      fontFamily: FONT,
      position: 'relative',
      overflow: 'hidden',
    },
    [
      ...LAYOUTS[pick](),
      eyebrow('Guía práctica', MUTED),
      el('div', { justifyContent: 'space-between', alignItems: 'flex-end' }, [
        el('div', { flexDirection: 'column', maxWidth: 1000 }, [
          text(category, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.045, lineHeight: 0.98 }),
          text('Para pymes, con fuentes y límites claros', { marginTop: 28, fontSize: 28, fontWeight: 500, color: MUTED }),
        ]),
        logo(logoDark, 40),
      ]),
    ],
  );
}

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
      rendered += await emit(out, 'cover', { category: data.category, slug }, () => guideCover(slug, data));
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

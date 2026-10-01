#!/usr/bin/env node
// Renders every generated image on the site from content frontmatter:
//   - the cover of each case (shown on the page and cards) and of each guide (social
//     preview only)                      → src/assets/figures/<collection>/<slug>/cover.png
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
const VERSION = 'figures-v9'; // bump to re-render everything after a design change

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

/** Guide "covers" are not shown on the site: they are the social preview (og:image) of a
 *  guide. Black, the title large, the OSIX wordmark top right; same language as the cases. */
function guideCover(slug, data) {
  const t = data.shortTitle ?? data.title;
  const size = t.length > 64 ? 64 : t.length > 44 ? 76 : 92;
  return el(
    'div',
    { width: W, height: H, flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: INK, color: PAPER, fontFamily: FONT },
    [
      el('div', { justifyContent: 'space-between', alignItems: 'center' }, [eyebrow(`Guía · ${data.category}`, MUTED_ON_INK), logo(logoLight, 40)]),
      el('div', { flexDirection: 'column', maxWidth: 1340 }, [
        text(t, { fontSize: size, fontWeight: 800, letterSpacing: -size * 0.04, lineHeight: 1.02 }),
        text('Para pymes · con fuentes y límites claros', { marginTop: 28, fontSize: 26, fontWeight: 500, color: MUTED_ON_INK }),
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
      rendered += await emit(out, 'cover', { category: data.category, title: data.shortTitle ?? data.title }, () => guideCover(slug, data));
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

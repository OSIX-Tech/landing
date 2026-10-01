#!/usr/bin/env node
// Post-build checks on dist/. Run after `astro build` (CI does: `pnpm check`).
// Fails on: broken internal links, pages without exactly one <h1>, missing canonical or
// description, invalid JSON-LD, guides/cases without their Markdown twin, and client
// JavaScript on reading pages (guides, cases, legal) beyond the analytics snippets.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://osix.tech';
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

const files = walk(DIST);
const html = files.filter((f) => f.endsWith('.html'));
const routeOf = (file) => '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');

// Redirect routes (the ones with a Location header), so links to retired URLs are reported as such.
const redirectRes = vercel.routes
  .filter((r) => r.headers?.Location)
  .map((r) => ({ re: new RegExp(r.src), to: r.headers.Location }));

function resolves(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean) return true;
  const target = path.join(DIST, clean);
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  if (fs.existsSync(path.join(target, 'index.html'))) return true;
  return false;
}

const problems = [];
const report = (file, msg) => problems.push(`${routeOf(file)}: ${msg}`);
const READING = /^\/(guias|casos)\/[^/]+\/$|^\/(privacidad|seguridad-informacion|nosotros)\/$/;

for (const file of html) {
  const route = routeOf(file);
  const src = fs.readFileSync(file, 'utf8');
  const is404 = route === '/404.html';

  if (!is404) {
    const h1 = (src.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) report(file, `${h1} <h1> elements (expected exactly 1)`);
    if (!/<link rel="canonical" href="https:\/\/osix\.tech\/[^"]*"/.test(src)) report(file, 'missing canonical URL');
    const desc = src.match(/<meta name="description" content="([^"]*)"/);
    if (!desc || desc[1].length < 50) report(file, 'missing or too short meta description');
  }

  for (const m of src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      report(file, 'invalid JSON-LD');
    }
  }

  if (READING.test(route)) {
    const bundles = [...src.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]).filter((s) => s.startsWith('/_astro/'));
    if (bundles.length) report(file, `reading page ships client JS: ${bundles.join(', ')}`);
  }

  for (const m of src.matchAll(/href="([^"]+)"/g)) {
    let href = m[1].replace(/&amp;/g, '&');
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || '/';
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (resolves(href)) continue;
    const redirect = redirectRes.find((r) => r.re.test(href.split('#')[0]));
    report(file, redirect ? `links to redirected URL ${href} (use ${redirect.to})` : `broken link ${href}`);
  }
}

for (const dir of ['guias', 'casos']) {
  for (const file of html.filter((f) => routeOf(f).startsWith(`/${dir}/`) && routeOf(f) !== `/${dir}/`)) {
    const slug = routeOf(file).split('/')[2];
    if (!fs.existsSync(path.join(DIST, dir, `${slug}.md`))) report(file, `missing Markdown twin /${dir}/${slug}.md`);
  }
}

for (const f of ['sitemap.xml', 'llms.txt', 'llms-full.txt', 'robots.txt']) {
  if (!fs.existsSync(path.join(DIST, f))) problems.push(`missing /${f}`);
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`check-dist: ${unique.length} problem(s)\n- ${unique.join('\n- ')}`);
  process.exit(1);
}
console.log(`check-dist: ${html.length} pages OK`);

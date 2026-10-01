// Every page reads content through these helpers, so ordering, draft handling and
// cross-reference checks live in one place. A broken reference throws at build time.
import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { GUIDE_SECTIONS } from '../content.config';

export type Guide = CollectionEntry<'guias'>;
export type Case = CollectionEntry<'casos'>;
export type Service = CollectionEntry<'servicios'>;
export type Member = CollectionEntry<'equipo'>;
export type Faq = { question: string; answer: string };

const byDateDesc = (a: Guide, b: Guide) =>
  (b.data.published + b.id).localeCompare(a.data.published + a.id);

let cache: Promise<{ guides: Guide[]; cases: Case[]; services: Service[]; team: Member[] }> | undefined;

function load() {
  cache ??= (async () => {
    const [guides, cases, services, team] = await Promise.all([
      getCollection('guias', (g) => !g.data.draft),
      getCollection('casos', (c) => !c.data.draft),
      getCollection('servicios'),
      getCollection('equipo'),
    ]);
    guides.sort(byDateDesc);
    cases.sort((a, b) => a.data.order - b.data.order);
    services.sort((a, b) => a.data.order - b.data.order);
    team.sort((a, b) => a.data.order - b.data.order);
    validate(guides, cases, services);
    return { guides, cases, services, team };
  })();
  return cache;
}

function validate(guides: Guide[], cases: Case[], services: Service[]) {
  const guideIds = new Set(guides.map((g) => g.id));
  const problems: string[] = [];
  const check = (owner: string, ids: string[]) => {
    for (const id of ids) if (!guideIds.has(id)) problems.push(`${owner} enlaza a la guía "${id}", que no existe.`);
  };
  for (const g of guides) {
    check(`src/content/guias/${g.id}.md (related)`, g.data.related);
    if (g.data.updated && g.data.updated < g.data.published) {
      problems.push(`src/content/guias/${g.id}.md: updated (${g.data.updated}) es anterior a published.`);
    }
    if (g.data.faqs && hasFaqHeading(g.body ?? '')) {
      problems.push(
        `src/content/guias/${g.id}.md: tiene "faqs" en el frontmatter y también una sección "## Preguntas frecuentes". Deja solo una.`,
      );
    }
  }
  for (const c of cases) {
    check(`src/content/casos/${c.id}.md (relatedGuides)`, c.data.relatedGuides);
    if (!parseBodyFaq(c.body ?? '')) {
      problems.push(`src/content/casos/${c.id}.md: falta la sección "## Preguntas frecuentes" con al menos una pregunta.`);
    }
    for (const id of referencedFigures(c.body ?? '')) {
      if (!c.data.figures.some((f) => f.id === id)) {
        problems.push(`src/content/casos/${c.id}.md: el cuerpo enlaza la figura "${id}" pero no está definida en "figures".`);
      }
    }
  }
  for (const s of services) check(`src/content/servicios/${s.id}.md (guides)`, s.data.guides);
  if (problems.length) throw new Error(`Contenido inválido:\n- ${problems.join('\n- ')}`);
}

export const getGuides = async () => (await load()).guides;
export const getCases = async () => (await load()).cases;
export const getServices = async () => (await load()).services;
export const getTeam = async () => (await load()).team;

export async function getGuidesBySection() {
  const guides = await getGuides();
  return (Object.keys(GUIDE_SECTIONS) as (keyof typeof GUIDE_SECTIONS)[]).map((id) => ({
    id,
    label: GUIDE_SECTIONS[id],
    guides: guides.filter((g) => g.data.section === id),
  }));
}

export async function getGuidesById(ids: string[]) {
  const guides = await getGuides();
  return ids.map((id) => guides.find((g) => g.id === id)).filter((g): g is Guide => Boolean(g));
}

/** Cases for a service first, topped up with the rest so every service page shows three. */
export async function getCasesForService(serviceId: string, limit = 3) {
  const cases = await getCases();
  const matching = cases.filter((c) => (c.data.services as string[]).includes(serviceId));
  const rest = cases.filter((c) => !(c.data.services as string[]).includes(serviceId));
  return [...matching, ...rest].slice(0, limit);
}

export const guideTitle = (g: Guide) => g.data.shortTitle ?? g.data.title;
export const lastModified = (d: { published?: string; updated?: string }) => d.updated ?? d.published;

// ---------- Covers and figures ----------
// scripts/figures.mjs renders a cover for every guide and case before each build. A page
// can bring its own with `cover:` in the frontmatter; otherwise the generated one is used.
const generatedCovers = import.meta.glob<ImageMetadata>('/src/assets/figures/*/*/cover.png', {
  eager: true,
  import: 'default',
});

export function coverOf(collection: 'guias' | 'casos', entry: Guide | Case): ImageMetadata {
  if (entry.data.cover) return entry.data.cover;
  const file = `/src/assets/figures/${collection}/${entry.id}/cover.png`;
  const cover = generatedCovers[file];
  if (!cover) throw new Error(`Falta la portada generada ${file}. Ejecuta "pnpm figures" (pnpm dev y pnpm build lo hacen solos).`);
  return cover;
}

/** Figure ids referenced from a body as ![alt](../../assets/figures/casos/<slug>/<id>.png). */
export const FIGURE_IMAGE = /!\[([^\]]*)\]\((?:\.\.\/)+assets\/figures\/casos\/[^/]+\/([a-z0-9-]+)\.png\)/g;
export const referencedFigures = (body: string) => [...body.matchAll(FIGURE_IMAGE)].map((m) => m[2]);

// ---------- FAQ ----------
// A guide's or case's FAQ lives in its body under "## Preguntas frecuentes", in either format:
//   **¿Pregunta?**            ### ¿Pregunta?
//   Respuesta…                (blank line) Respuesta…
// The FAQPage markup is derived from that text, so it always matches what readers see.

const FAQ_HEADING = /^## Preguntas frecuentes[^\n]*$/m;
export const hasFaqHeading = (body: string) => FAQ_HEADING.test(body);

export function parseBodyFaq(body: string): Faq[] | null {
  const heading = body.match(FAQ_HEADING);
  if (!heading || heading.index === undefined) return null;
  const rest = body.slice(heading.index + heading[0].length);
  const next = rest.search(/^## (?!#)/m);
  const section = next === -1 ? rest : rest.slice(0, next);
  const pairs: Faq[] = [];

  if (/^### /m.test(section)) {
    for (const part of section.split(/^### /m).slice(1)) {
      const [question, ...lines] = part.split('\n');
      const answer = lines.join('\n').trim();
      if (answer) pairs.push({ question: question.trim(), answer });
    }
  } else {
    let current: Faq | null = null;
    for (const block of section.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)) {
      const glued = block.match(/^\*\*([^*]+?)\*\*\s*\n([\s\S]+)$/);
      const alone = block.match(/^\*\*([^*]+?)\*\*$/);
      if (glued) pairs.push((current = { question: glued[1].trim(), answer: glued[2].trim() }));
      else if (alone) pairs.push((current = { question: alone[1].trim(), answer: '' }));
      else if (current) current.answer = current.answer ? `${current.answer}\n\n${block}` : block;
    }
  }
  const complete = pairs.filter((p) => p.answer);
  return complete.length ? complete : null;
}

export const guideFaqs = (g: Guide): Faq[] => g.data.faqs ?? parseBodyFaq(g.body ?? '') ?? [];
export const caseFaqs = (c: Case): Faq[] => parseBodyFaq(c.body ?? '') ?? [];

/** Markdown → plain text for structured data and llms.txt. */
export const plain = (md: string) =>
  md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

// ---------- Numbers and dates ----------
const num = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2, useGrouping: 'always' });
export const formatNumber = (n: number) => num.format(n);
const fmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const fmtShort = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));
export const formatDateShort = (iso: string) => fmtShort.format(new Date(`${iso}T00:00:00Z`));

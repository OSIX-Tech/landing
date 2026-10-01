// Markdown twins of guides and cases, served at /guias/<id>.md and /casos/<id>.md for
// AI agents and listed in llms.txt. Same text as the HTML page, without layout.
import { FIGURE_IMAGE, formatDate, formatNumber, lastModified, type Case, type Guide } from './content';
import { GUIDE_SECTIONS } from '../content.config';
import { SITE_URL, org, absolute } from '../site';

/** Relative site links become absolute so the file stands on its own. */
const absolutize = (md: string) => md.replace(/\]\((\/[^)\s]*)\)/g, (_m, path: string) => `](${SITE_URL}${path})`);

/** Images that live in the repo mean nothing to a reader of the .md file: keep their alt text. */
const imagesAsText = (md: string) => md.replace(/!\[([^\]]*)\]\(\.{1,2}\/[^)]+\)/g, (_m, alt: string) => `*Figura: ${alt}*`);

const footer = () =>
  `\n\n---\n\nPublicado por ${org.name} (${org.legalName}), ${org.address.locality}. Contacto: ${absolute('/contacto/')} · ${org.email}\n`;

function header(title: string, description: string, url: string, meta: string[]) {
  return `# ${title}\n\n> ${description}\n\n${meta.map((m) => `- ${m}`).join('\n')}\n- URL: ${url}\n\n`;
}

export function guideMarkdown(g: Guide) {
  const { data } = g;
  const meta = [
    `Sección: ${GUIDE_SECTIONS[data.section]}`,
    `Publicado: ${formatDate(data.published)}`,
    ...(data.updated && data.updated !== data.published ? [`Actualizado: ${formatDate(data.updated)}`] : []),
  ];
  let body = (g.body ?? '').trim();
  if (data.faqs?.length) {
    body += `\n\n## Preguntas frecuentes\n\n${data.faqs.map((f) => `**${f.question}**\n${f.answer}`).join('\n\n')}`;
  }
  return header(data.title, data.description, absolute(`/guias/${g.id}/`), meta) + absolutize(imagesAsText(body)) + footer();
}

/** A generated chart becomes its numbers: agents read data, not pixels. */
function figuresAsText(md: string, figures: Case['data']['figures']) {
  return md.replace(FIGURE_IMAGE, (_m, alt: string, id: string) => {
    const spec = figures.find((f) => f.id === id);
    if (!spec) return `*Figura: ${alt}*`;
    const rows = spec.items
      .map((i) => `- ${i.label}: ${i.display ?? formatNumber(i.value)}${spec.unit ? ` ${spec.unit}` : ''}`)
      .join('\n');
    return `**${spec.title}**${spec.subtitle ? ` (${spec.subtitle})` : ''}\n\n${rows}`;
  });
}

export function caseMarkdown(c: Case) {
  const { data } = c;
  const metrics = data.metrics.map((m) => `- **${m.value}** ${m.label}${m.note ? ` (${m.note})` : ''}`).join('\n');
  const parts = [
    data.lead,
    `## Cifras medidas\n\n${metrics}${data.metricsNote ? `\n\n${data.metricsNote}` : ''}\n\nEstado: ${data.status}`,
    imagesAsText(figuresAsText((c.body ?? '').trim(), data.figures)),
  ];
  const meta = [`Categoría: ${data.category}`, `Publicado: ${formatDate(data.published)}`];
  if (lastModified(data) !== data.published) meta.push(`Actualizado: ${formatDate(lastModified(data)!)}`);
  return header(data.title, data.description, absolute(`/casos/${c.id}/`), meta) + absolutize(parts.join('\n\n')) + footer();
}

export const markdownResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });

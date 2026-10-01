// Markdown twins of guides and cases, served at /guias/<id>.md and /casos/<id>.md for
// AI agents and listed in llms.txt. Same text as the HTML page, without layout.
import { formatDate, lastModified, type Case, type Guide } from './content';
import { GUIDE_SECTIONS } from '../content.config';
import { SITE_URL, org, absolute } from '../site';

/** Relative site links become absolute so the file stands on its own. */
const absolutize = (md: string) => md.replace(/\]\((\/[^)\s]*)\)/g, (_m, path: string) => `](${SITE_URL}${path})`);

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
  return header(data.title, data.description, absolute(`/guias/${g.id}/`), meta) + absolutize(body) + footer();
}

export function caseMarkdown(c: Case) {
  const { data } = c;
  const list = (items: { value: string; label: string; note?: string }[]) =>
    items.map((m) => `- **${m.value}** ${m.label}${m.note ? ` (${m.note})` : ''}`).join('\n');
  const parts = [
    data.lead,
    `## Cifras medidas\n\n${list(data.metrics)}${data.metricsNote ? `\n\n${data.metricsNote}` : ''}\n\nEstado: ${data.status}`,
    (c.body ?? '').trim(),
    data.secondaryMetrics ? `## Desglose de producción\n\n${list(data.secondaryMetrics)}` : '',
    `## ${data.limit.title}\n\n${data.limit.body.join('\n\n')}`,
    `## Ficha del proyecto\n\n${data.facts.map((f) => `- **${f.key}:** ${f.value}`).join('\n')}${data.sourceNote ? `\n\n${data.sourceNote}` : ''}`,
    `## Preguntas frecuentes\n\n${data.faqs.map((f) => `**${f.question}**\n${f.answer}`).join('\n\n')}`,
  ].filter(Boolean);
  const meta = [`Categoría: ${data.category}`, `Publicado: ${formatDate(data.published)}`];
  if (lastModified(data) !== data.published) meta.push(`Actualizado: ${formatDate(lastModified(data)!)}`);
  return header(data.title, data.description, absolute(`/casos/${c.id}/`), meta) + absolutize(parts.join('\n\n')) + footer();
}


export const markdownResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });

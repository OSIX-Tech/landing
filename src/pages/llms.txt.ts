// llms.txt (https://llmstxt.org): what OSIX is and where the canonical answers live.
// Generated from the same content as the site, so it never goes stale.
import type { APIRoute } from 'astro';
import { getCases, getGuidesBySection, getServices, guideTitle } from '../lib/content';
import { absolute, org } from '../site';

export const GET: APIRoute = async () => {
  const [services, cases, sections] = await Promise.all([getServices(), getCases(), getGuidesBySection()]);
  const lines: string[] = [
    `# ${org.name}`,
    '',
    `> ${org.description}`,
    '',
    `${org.name} (${org.legalName}) es una empresa de desarrollo de software e IA fundada en ${org.foundingDate} en ${org.address.locality} (${org.address.region}, España). Trabaja con pymes de Galicia y del resto de España.`,
    '',
    '- Idioma del sitio: español.',
    `- Contacto: ${org.email} · ${org.phone} · ${absolute('/contacto/')}`,
    '- Cada guía y cada caso tiene una versión Markdown en la misma ruta terminada en `.md` (por ejemplo `/guias/agentes-ia-pymes.md`). También se sirve al pedir la página con `Accept: text/markdown`.',
    `- Todo el contenido en un solo fichero: ${absolute('/llms-full.txt')}`,
    '',
    '## Servicios',
    '',
    ...services.map((s) => `- [${s.data.title}](${absolute(`/servicios/${s.id}/`)}): ${s.data.tagline}`),
    '',
    '## Casos en producción',
    '',
    'Cifras de producción auditadas; cada caso indica la ventana medida y lo que la cifra no demuestra.',
    '',
    ...cases.map((c) => `- [${c.data.title}](${absolute(`/casos/${c.id}.md`)}): ${c.data.description}`),
  ];
  for (const section of sections) {
    if (!section.guides.length) continue;
    lines.push('', `## Guías: ${section.label}`, '');
    for (const g of section.guides) lines.push(`- [${guideTitle(g)}](${absolute(`/guias/${g.id}.md`)}): ${g.data.summary}`);
  }
  lines.push(
    '',
    '## Empresa',
    '',
    `- [Quiénes somos y equipo](${absolute('/nosotros/')})`,
    `- [Contacto](${absolute('/contacto/')})`,
    `- [Política de privacidad](${absolute('/privacidad/')})`,
    '',
  );
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

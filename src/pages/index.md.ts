// Markdown twin of the home, served at /index.md and when an agent asks for / with
// Accept: text/markdown (vercel.json rewrites it here). What OSIX is, what it does, where
// the proof and the answers live.
import type { APIRoute } from 'astro';
import { getCases, getGuides, getServices, guideTitle } from '../lib/content';
import { markdownResponse } from '../lib/markdown';
import { absolute, org } from '../site';

export const GET: APIRoute = async () => {
  const [services, cases, guides] = await Promise.all([getServices(), getCases(), getGuides()]);
  const lines = [
    `# ${org.name}: consultoría de IA y software a medida para pymes`,
    '',
    `> ${org.description}`,
    '',
    `${org.name} (${org.legalName}) desarrolla software e inteligencia artificial para pymes desde ${org.address.locality} (${org.address.region}, España) desde ${org.foundingDate}. Automatización documental, agentes de IA, aplicaciones a medida y consultoría para decidir qué automatizar.`,
    '',
    `- Web: ${absolute('/')}`,
    `- Contacto: ${org.email} · ${org.phone} · ${absolute('/contacto/')}`,
    `- Índice para agentes: ${absolute('/llms.txt')} · todo el contenido: ${absolute('/llms-full.txt')}`,
    '',
    '## Servicios',
    '',
    ...services.map((s) => `- [${s.data.title}](${absolute(`/servicios/${s.id}/`)}): ${s.data.summary ?? s.data.description}`),
    '',
    '## Casos en producción',
    '',
    'Software en uso en empresas reales. Cada caso publica la cifra, el periodo medido y lo que esa cifra no demuestra.',
    '',
    ...cases.map((c) => `- [${c.data.title}](${absolute(`/casos/${c.id}.md`)}): ${c.data.metrics[0].value} ${c.data.metrics[0].label}.`),
    '',
    '## Guías recientes',
    '',
    ...guides.slice(0, 8).map((g) => `- [${guideTitle(g)}](${absolute(`/guias/${g.id}.md`)}): ${g.data.summary}`),
    '',
    `Todas las guías: ${absolute('/guias/')}`,
    '',
    '## Empresa',
    '',
    `- [Quiénes somos y equipo](${absolute('/nosotros/')})`,
    `- [Contacto](${absolute('/contacto/')})`,
    `- [Política de privacidad](${absolute('/privacidad/')})`,
    `- [Seguridad de la información](${absolute('/seguridad-informacion/')})`,
    '',
  ];
  return markdownResponse(lines.join('\n'));
};

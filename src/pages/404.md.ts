// Markdown body for 404s requested with Accept: text/markdown (vercel.json routes it here),
// so an agent that hits a dead URL learns where to look next.
import type { APIRoute } from 'astro';
import { getGuides, guideTitle } from '../lib/content';
import { markdownResponse } from '../lib/markdown';
import { absolute } from '../site';

export const GET: APIRoute = async () => {
  const latest = (await getGuides()).slice(0, 5);
  const lines = [
    '# 404: esta página no existe en osix.tech',
    '',
    'La dirección puede haber cambiado. Dónde buscar:',
    '',
    `- Índice para agentes: ${absolute('/llms.txt')}`,
    `- Mapa del sitio: ${absolute('/sitemap.xml')}`,
    `- Portada en Markdown: ${absolute('/index.md')}`,
    `- Todas las guías: ${absolute('/guias/')} · todos los casos: ${absolute('/casos/')}`,
    '',
    'Guías recientes:',
    '',
    ...latest.map((g) => `- [${guideTitle(g)}](${absolute(`/guias/${g.id}.md`)})`),
    '',
    `Contacto: ${absolute('/contacto/')}`,
    '',
  ];
  return markdownResponse(lines.join('\n'));
};

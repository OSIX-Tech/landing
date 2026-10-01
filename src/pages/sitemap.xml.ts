// Generated from content: every indexable HTML page with its real last-modified date.
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { getCases, getGuides, getServices, lastModified } from '../lib/content';
import { absolute } from '../site';

const latest = (dates: (string | undefined)[]) => dates.filter(Boolean).sort().at(-1);

export const GET: APIRoute = async () => {
  const [guides, cases, services] = await Promise.all([getGuides(), getCases(), getServices()]);
  const pages = ['nosotros', 'privacidad', 'seguridad-informacion'] as const;
  const pageDates = Object.fromEntries(
    await Promise.all(pages.map(async (id) => [id, (await getEntry('paginas', id))!.data.updated] as const)),
  );

  const guideDate = latest(guides.map((g) => lastModified(g.data)));
  const caseDate = latest(cases.map((c) => lastModified(c.data)));
  const serviceDate = latest(services.map((s) => s.data.updated));

  const urls: { path: string; lastmod?: string }[] = [
    { path: '/', lastmod: latest([guideDate, caseDate, serviceDate]) },
    { path: '/servicios/', lastmod: serviceDate },
    ...services.map((s) => ({ path: `/servicios/${s.id}/`, lastmod: s.data.updated })),
    { path: '/casos/', lastmod: caseDate },
    ...cases.map((c) => ({ path: `/casos/${c.id}/`, lastmod: lastModified(c.data) })),
    { path: '/guias/', lastmod: guideDate },
    ...guides.map((g) => ({ path: `/guias/${g.id}/`, lastmod: lastModified(g.data) })),
    { path: '/nosotros/', lastmod: pageDates.nosotros },
    { path: '/contacto/' },
    { path: '/privacidad/', lastmod: pageDates.privacidad },
    { path: '/seguridad-informacion/', lastmod: pageDates['seguridad-informacion'] },
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map((u) => `  <url><loc>${absolute(u.path)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
      .join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

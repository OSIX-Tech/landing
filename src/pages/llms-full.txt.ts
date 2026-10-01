// Every guide and case as Markdown in one file, for agents that want the whole corpus.
import type { APIRoute } from 'astro';
import { getCases, getGuides } from '../lib/content';
import { caseMarkdown, guideMarkdown } from '../lib/markdown';
import { org } from '../site';

export const GET: APIRoute = async () => {
  const [cases, guides] = await Promise.all([getCases(), getGuides()]);
  const parts = [`# ${org.name}: casos y guías\n\n> ${org.description}\n`, ...cases.map(caseMarkdown), ...guides.map(guideMarkdown)];
  return new Response(parts.join('\n\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

import type { APIRoute, GetStaticPaths } from 'astro';
import { getGuides, type Guide } from '../../lib/content';
import { guideMarkdown, markdownResponse } from '../../lib/markdown';

export const getStaticPaths = (async () =>
  (await getGuides()).map((guide) => ({ params: { slug: guide.id }, props: { guide } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => markdownResponse(guideMarkdown((props as { guide: Guide }).guide));

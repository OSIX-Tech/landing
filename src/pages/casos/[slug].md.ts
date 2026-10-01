import type { APIRoute, GetStaticPaths } from 'astro';
import { getCases, type Case } from '../../lib/content';
import { caseMarkdown, markdownResponse } from '../../lib/markdown';

export const getStaticPaths = (async () =>
  (await getCases()).map((item) => ({ params: { slug: item.id }, props: { item } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => markdownResponse(caseMarkdown((props as { item: Case }).item));

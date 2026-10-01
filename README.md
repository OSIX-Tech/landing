# osix.tech

The website of [OSIX Tech](https://osix.tech): an animated home page and a set of clean,
Markdown-driven pages for services, case studies, guides and company information.

## How the site is built

- **Astro 7, static output.** Every page is plain HTML generated at build time.
- **Home: showcase.** Subtle CSS motion and the interactive 3D OSIX mark (Three.js),
  which loads only after the visitor's first interaction. A still poster of the same scene
  paints first.
- **Everything else: reading pages.** Guides, cases and company pages render Markdown
  through one layout with no client JavaScript.
- **Content as files.** Each page is one Markdown file in `src/content/`, validated by
  the schemas in `src/content.config.ts`. The sitemap, `llms.txt`, `llms-full.txt`, the
  Markdown copy of each guide and case, indexes, related links and structured data
  are all generated from those files.

See [AGENTS.md](AGENTS.md) for how to add or change content.

## Commands

```bash
pnpm install
pnpm dev        # renders covers and charts, then http://localhost:4321
pnpm build      # renders covers and charts, then writes dist/
pnpm figures    # only re-render the generated images (src/assets/figures/, not committed)
pnpm check      # type checks and post-build checks (after build)
```

The contact form uses EmailJS and needs `PUBLIC_EMAILJS_SERVICE_ID`,
`PUBLIC_EMAILJS_TEMPLATE_ID` and `PUBLIC_EMAILJS_PUBLIC_KEY` at build time.

## Layout

```
src/
  content/        one Markdown file per page (guias, casos, servicios, equipo, paginas)
  content.config.ts  schemas for those files
  pages/          routes; generated files (sitemap.xml, llms.txt, *.md twins)
  layouts/        BaseLayout (every page) and DocLayout (reading pages)
  components/     header, footer, cards, FAQ, hero
  scripts/        logo3d.ts, the only heavy client script
  lib/            content queries, structured data, Markdown export
  site.ts         company facts used across the site
  data/home.ts    home copy, client logos, home FAQ
scripts/check-dist.mjs   post-build checks
vercel.json      redirects, headers, Markdown content negotiation
```

Vercel deploys on push; `master` is production.

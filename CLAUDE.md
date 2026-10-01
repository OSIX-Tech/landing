# CLAUDE.md

Read [AGENTS.md](AGENTS.md) first: it is the source of truth for how content is added,
the editorial rules for case studies, and the design and performance rules.

Summary for orientation:

- Astro 7 static site, Spanish only, deployed on Vercel (`master` is production).
- Every page except the home is one Markdown file in `src/content/`, validated by
  `src/content.config.ts`. Sitemap, `llms.txt`, Markdown twins, indexes and JSON-LD are
  generated — never edit them by hand.
- Reading pages ship no client JavaScript. The home's 3D logo (`src/scripts/logo3d.ts`)
  loads on the visitor's first interaction.
- Verify with `pnpm build && pnpm check` before opening a PR.

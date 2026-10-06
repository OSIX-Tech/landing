# AGENTS.md

How to work on osix.tech. Read this before adding or changing content. It is written for
coding agents (Omnio, Claude Code, Codex) and for people.

## The one rule

**Every page except the home is one Markdown file in `src/content/`.** Do not create
`.astro` pages for content, and do not edit `sitemap.xml`, `llms.txt`, the guide index,
the home's "latest" strips, related links, covers or footers by hand. They are all
generated from the content files at build time.

| To add or change | Edit only | It appears at |
|---|---|---|
| A guide | `src/content/guias/<slug>.md` | `/guias/<slug>/` and `/guias/<slug>.md` |
| A case study | `src/content/casos/<slug>.md` | `/casos/<slug>/` and `/casos/<slug>.md` |
| A service | `src/content/servicios/<id>.md` | `/servicios/<id>/` |
| A team member | `src/content/equipo/<id>.md` (+ photo in `src/assets/team/`) | `/nosotros/` |
| Company or legal text | `src/content/paginas/<id>.md` | `/nosotros/`, `/privacidad/`, `/seguridad-informacion/` |
| Home copy, client logos, home FAQ | `src/data/home.ts` | `/` |
| Address, phone, email, socials | `src/site.ts` | header, footer, contact, structured data, llms.txt |

The schemas live in `src/content.config.ts`. If a file breaks them, `pnpm build` fails and
names the file and the field. Fix the file; do not loosen the schema to make it pass.

## Images are generated, not drawn

Reading pages are text, tables, quotes and images. The images come from
`scripts/figures.mjs`, which runs before every `pnpm dev` and `pnpm build` (or alone with
`pnpm figures`) and writes PNGs to `src/assets/figures/` (not committed):

- **Every case gets a cover** at `src/assets/figures/casos/<slug>/cover.png`: black, with
  its `metrics` and `status`. It is the image on cards, at the top of the page and in
  social previews. To use a real photo or illustration instead, add
  `cover: "../../assets/covers/<file>.png"` (16:9) to the frontmatter.
- **Guides show no images.** Their cards and pages are text. The build still renders
  `src/assets/figures/guias/<slug>/cover.png` (black, the title) but only as the social
  preview (`og:image`); `cover:` in the frontmatter replaces it.
- **A case can declare charts** in `figures:` and place them in the body with a normal
  Markdown image whose path is `../../assets/figures/casos/<slug>/<id>.png`. The build
  fails if the body references a figure that is not declared. Only `type: "bars"` exists;
  add a renderer to `scripts/figures.mjs` before inventing another type.
- Dark image backgrounds are full black (`#000000`). Text in images is the site font,
  converted to paths, so it renders the same everywhere.

The Markdown twins (`/casos/<slug>.md`) replace each chart with its numbers as a list, so
AI agents read the data instead of a picture.

## Adding a guide

1. Create `src/content/guias/<slug>.md`. The slug is the URL: lowercase, hyphens, no
   accents, and never change it once published.
2. Frontmatter:

```yaml
---
title: "Cómo automatizar X en una pyme"          # the H1, required
description: "Respuesta corta y concreta…"         # meta description, 70–320 chars, required
subtitle: "Una línea bajo el título."              # optional
summary: "Una línea para tarjetas y llms.txt."     # required
category: "Automatización documental"              # cover text and card tag, ≤ 40 chars, required
section: "automatizar-procesos"                    # sidebar group, required — see below
published: "2026-10-01"                            # AAAA-MM-DD, required
updated: "2026-10-15"                              # only when the content changes
related: ["otra-guia", "otra-mas"]                 # optional, slugs of existing guides
seoTitle: "Título para Google (2026) - OSIX Tech"  # optional, defaults to "<title> | OSIX Tech"
author: "mateo"                                    # optional, id from src/content/equipo
---
```

   `section` must be one of: `primeros-pasos`, `costes-y-resultados`, `elegir-proveedor`,
   `automatizar-procesos`, `sectores`, `software-y-contratos`.

3. Body, in this order:
   - An opening paragraph that answers the question directly. AI answers quote it.
   - `## La respuesta en 30 segundos` with 4–6 bullets.
   - The guide. Use `##` for sections and `###` below them. **Never write a `#` H1** —
     the layout renders the title.
   - `## Preguntas frecuentes` with each question in bold on its own line and the
     answer below it. The FAQ structured data is generated from this section, so
     do not add `faqs` to the frontmatter as well (the build rejects having both).
   - `## Nuestro límite honesto`, `## Cómo se elaboró esta guía`, `## Fuentes`.
4. Link to other pages with root-relative paths and the trailing slash:
   `[texto](/guias/otra-guia/)`, `[contacto](/contacto/)`.
5. Run `pnpm build && pnpm check`. Both must pass.

## Adding a case study

Copy an existing file in `src/content/casos/` and replace the values. The frontmatter
holds only what the cover and the cards need: `title`, `description`, `lead`, `category`,
`services`, `order`, `status`, dates, `metrics` (1–4 headline figures, drawn on the cover),
`metricsNote` (one or two sentences shown under the cover), optional `figures` and
`relatedGuides`.

Everything else is the body, in this order, all plain Markdown:

1. The narrative, as `##` sections with figures in **bold**. Place charts where the text
   states the numbers.
2. `## Desglose de producción`: a table of the secondary figures.
3. The limit section (`## El límite que mantenemos visible` or a specific title): what the
   figures do not prove. Required.
4. `## Ficha del proyecto`: a two-column table (client, sector, in production since,
   input, output, deployment, source of the figures, cut-off date) and the source note.
5. `## Preguntas frecuentes`, same format as guides. Required: the build fails without it.
6. A closing section with the call to action, ending in `[Cuéntanos tu proceso](/contacto/)`.

Editorial rules for cases (binding):

- Only publish figures graded A (direct count) or B (derived from a stated assumption) in
  the metrics audit. C figures appear only with the page saying what they rest on.
- Never publish acceptance rates, active users, hours saved, response times or precision
  unless they were measured. The limit section says out loud what is not measured.
- The audit's savings estimates are sales hypotheses, not results. No case publishes hours
  or euros saved.
- Headline figures (`metrics`, the `## Desglose de producción` table, charts) answer a
  buyer's question: what it costs, how fast it is, what work it removes, whether it fits
  the tools they already use, whether their data is safe, whether people use it, how
  soon it shipped. Engineering evidence (tests, commits, pull requests, lines of code,
  endpoints, architecture decisions, HTTP errors, latency of a landing page, days
  without a restart) never goes there; at most one plain sentence in the body, e.g.
  "en los últimos treinta días no falló ninguna petición".
- A chart only shows numbers the body already states. Charts compare counts of the same
  kind; never put unrelated units on one chart.
- Cases are Spanish only: these are measured client figures and must not be machine-translated.

## Writing rules for all content

- Spanish (Spain). Plain, specific, no superlatives about OSIX ("líder", "el mejor",
  "2x más rápido") and no figures without a source.
- Do not present a grant or call as open unless its official page confirms the deadline.
- Say when OSIX is not a neutral source.

## Design and code rules

- Reading pages (guides, cases, legal, `/nosotros/`) ship **no client JavaScript**.
  `scripts/check-dist.mjs` fails the build if they do.
- OSIX is black and white: full black (`#000000`) and full white, greys only for
  hierarchy, no accent colour anywhere, images included. Headings are weight 700–800;
  nothing on the site uses weights under 500 except body text.
- Motion: micro-interactions 150–250 ms, transitions 300–400 ms, the `--ease` curve, no
  spring or bounce, only `transform` and `opacity`, prefer fading over moving, never hide
  the H1 or above-the-fold content, nothing moves under `prefers-reduced-motion`. List
  transition properties explicitly, never `transition: all`. Hovers brighten text or draw
  an underline (`.t-link`); nothing scales and nothing casts a shadow.
- The home is the only page that is allowed to be heavy: marquee, scroll reveals and the
  3D logo (`src/scripts/logo3d.ts`, loaded on the visitor's first interaction). Do not
  import Three.js anywhere else.
- Every page renders through `BaseLayout` (head, structured data, header, footer).
  Markdown pages use `DocLayout`, whose reading column is 46rem and keeps that width
  before the side columns.

## Commands

```bash
pnpm install
pnpm dev                         # renders figures, then http://localhost:4321
pnpm build                       # renders figures, then the static site in dist/
pnpm figures                     # only re-render covers and charts
pnpm check                       # type checks + post-build checks (run after build)
```

## Deployment

Vercel builds every push. Merging to `master` deploys production. Redirects, headers and
Markdown content negotiation live in `vercel.json`. When a URL changes, add a 301 there.

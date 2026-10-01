# AGENTS.md

How to work on osix.tech. Read this before adding or changing content. It is written for
coding agents (Omnio, Claude Code, Codex) and for people.

## The one rule

**Every page except the home is one Markdown file in `src/content/`.** Do not create
`.astro` pages for content, and do not edit `sitemap.xml`, `llms.txt`, the guide index,
the home's "latest" strips, related links or footers by hand. They are all generated
from the content files at build time.

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
category: "Automatización documental"              # short tag on cards, required
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
5. Run `pnpm build && node scripts/check-dist.mjs`. Both must pass.

## Adding a case study

Copy an existing file in `src/content/casos/` and replace the values. The frontmatter holds
the figures (`metrics`, `secondaryMetrics`), the `limit` section, `facts`, `faqs` and the
`cta`; the body holds the narrative as `##` sections, with figures in **bold**.

Editorial rules for cases (binding):

- Only publish figures graded A (direct count) or B (derived from a stated assumption) in
  the metrics audit. C figures appear only with the page saying what they rest on.
- Never publish acceptance rates, active users, hours saved, response times or precision
  unless they were measured. The `limit` section says out loud what is not measured.
- The audit's savings estimates are sales hypotheses, not results. No case publishes hours
  or euros saved.
- Cases are Spanish only: these are measured client figures and must not be machine-translated.

## Writing rules for all content

- Spanish (Spain). Plain, specific, no superlatives about OSIX ("líder", "el mejor",
  "2x más rápido") and no figures without a source.
- Do not present a grant or call as open unless its official page confirms the deadline.
- Say when OSIX is not a neutral source.

## Design and code rules

- Reading pages (guides, cases, legal, `/nosotros/`) ship **no client JavaScript**.
  `scripts/check-dist.mjs` fails the build if they do.
- Motion is CSS only, uses `transform`/`opacity`, never hides the H1 or above-the-fold
  content, and is disabled by `prefers-reduced-motion`. Use the `.rise`, `.fade-in`,
  `.reveal` and `.reveal-stagger` classes from `src/styles/global.css`.
- The only heavy script is the home's 3D logo (`src/scripts/logo3d.ts`), loaded on the
  visitor's first interaction. Do not import Three.js anywhere else.
- Every page renders through `BaseLayout` (head, structured data, header, footer).
  Markdown pages use `DocLayout`.

## Commands

```bash
pnpm install
pnpm dev                         # http://localhost:4321
pnpm build                       # static site in dist/
pnpm check                       # type checks + post-build checks (run after build)
```

## Deployment

Vercel builds every push. Merging to `master` deploys production. Redirects, headers and
Markdown content negotiation live in `vercel.json`. When a URL changes, add a 301 there.

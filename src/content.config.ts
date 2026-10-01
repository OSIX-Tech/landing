// Content schemas. Every public page except the home is one Markdown file in
// src/content/<collection>/. The build fails with a precise message when a file
// breaks these rules — see AGENTS.md for how to add each kind of page.
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Sidebar groups on /guias/. Order here is the order on the page. */
export const GUIDE_SECTIONS = {
  'primeros-pasos': 'Primeros pasos con IA',
  'costes-y-resultados': 'Costes, plazos y resultados',
  'elegir-proveedor': 'Elegir proveedor',
  'automatizar-procesos': 'Automatizar procesos',
  sectores: 'Por sector',
  'software-y-contratos': 'Software, datos y contratos',
} as const;

const sectionIds = Object.keys(GUIDE_SECTIONS) as [keyof typeof GUIDE_SECTIONS, ...(keyof typeof GUIDE_SECTIONS)[]];

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa el formato AAAA-MM-DD, por ejemplo "2026-10-01".');

const faq = z.object({
  question: z.string().min(5),
  answer: z.string().min(10),
});

const metric = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  note: z.string().optional(),
});

/** A chart rendered by scripts/figures.mjs from these numbers, referenced in the body as
 *  ![alt](../../assets/figures/casos/<slug>/<id>.png). */
const figure = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'El id de la figura es el nombre del fichero: minúsculas, números y guiones.'),
  type: z.literal('bars'),
  title: z.string().min(5),
  subtitle: z.string().optional(),
  /** Appended to every value, e.g. "usuarios". */
  unit: z.string().optional(),
  /** Small print under the chart. Defaults to "Cifras de producción medidas por OSIX". */
  note: z.string().optional(),
  items: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.number(),
        /** How the value is printed when the default es-ES formatting is not right, e.g. "5,75". */
        display: z.string().optional(),
      }),
    )
    .min(2)
    .max(8),
});

const guias = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guias' }),
  schema: ({ image }) =>
    z.object({
      /** The page's H1. */
      title: z.string().min(10),
      /** <title> tag. Defaults to "<title> | OSIX Tech". */
      seoTitle: z.string().max(160).optional(),
      /** Meta description and the summary AI answers quote. */
      description: z.string().min(70).max(320),
      /** One line under the H1. */
      subtitle: z.string().optional(),
      /** Card title when the H1 is too long for a card. */
      shortTitle: z.string().optional(),
      /** One line on cards and in llms.txt. */
      summary: z.string().min(10),
      /** Short tag shown on the card and in the generated cover, e.g. "Agentes de IA". */
      category: z.string().min(2).max(40),
      section: z.enum(sectionIds),
      published: isoDate,
      updated: isoDate.optional(),
      author: reference('equipo').optional(),
      related: z.array(z.string()).default([]),
      /** Only when the body has no "## Preguntas frecuentes" section; rendered visibly. */
      faqs: z.array(faq).optional(),
      /** Own cover (16:9, in src/assets/covers/). Without it the build generates one. */
      cover: image().optional(),
      /** Lucide icon drawn on the generated cover; defaults by category, then section. */
      icon: z.string().regex(/^[a-z0-9-]+$/).optional(),
      draft: z.boolean().default(false),
    }),
});

const casos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/casos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(10),
      seoTitle: z.string().max(160).optional(),
      description: z.string().min(70).max(320),
      /** One paragraph under the H1: what the client does and what OSIX built. */
      lead: z.string().min(40),
      category: z.string().min(2),
      services: z.array(z.enum(['desarrollo-a-medida', 'consultoria-transformacion', 'innovacion-subvencionada'])).min(1),
      /** Position on /casos/ and the home (lower first). */
      order: z.number().int(),
      /** One line, e.g. "En producción desde el 12 de marzo de 2026." Printed on the cover. */
      status: z.string().min(10),
      published: isoDate,
      updated: isoDate.optional(),
      /** The headline figures, drawn on the cover. Only audited figures — see AGENTS.md. */
      metrics: z.array(metric).min(1).max(4),
      /** One or two sentences under the cover explaining the headline figures. */
      metricsNote: z.string().optional(),
      /** Own cover instead of the generated one. */
      cover: image().optional(),
      figures: z.array(figure).default([]),
      relatedGuides: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    /** One word for the home and menus, e.g. "Desarrollo". Falls back to `title`. */
    shortTitle: z.string().max(24).optional(),
    tagline: z.string(),
    /** Two or three sentences for the home. Falls back to `description`. */
    summary: z.string().min(80).max(400).optional(),
    description: z.string().min(70),
    seoTitle: z.string().max(160).optional(),
    order: z.number().int(),
    icon: z.enum(['code', 'compass', 'lightbulb']),
    /** schema.org serviceType, in English. */
    serviceType: z.string(),
    updated: isoDate,
    problem: z.object({ title: z.string(), body: z.string() }),
    solution: z.object({ title: z.string(), body: z.string() }),
    highlightsTitle: z.string(),
    highlights: z.array(z.string()).min(2),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).max(4),
    testimonial: z.object({ quote: z.string(), author: z.string(), role: z.string() }).optional(),
    faqs: z.array(faq).min(1),
    guides: z.array(z.string()).default([]),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/equipo' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      order: z.number().int(),
      photo: image(),
      linkedin: z.url(),
      github: z.url().optional(),
    }),
});

/** Standalone text pages: legal texts and the company page intro. */
const paginas = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(50),
    updated: isoDate,
  }),
});

export const collections = { guias, casos, servicios, equipo, paginas };

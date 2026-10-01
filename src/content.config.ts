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

const paragraphs = z.object({
  title: z.string().min(5),
  body: z.array(z.string().min(10)).min(1),
});

const guias = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guias' }),
  schema: z.object({
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
    /** Short tag shown on the card, e.g. "Agentes de IA". */
    category: z.string().min(2).max(40),
    section: z.enum(sectionIds),
    published: isoDate,
    updated: isoDate.optional(),
    author: reference('equipo').optional(),
    related: z.array(z.string()).default([]),
    /** Only when the body has no "## Preguntas frecuentes" section; rendered visibly. */
    faqs: z.array(faq).optional(),
    draft: z.boolean().default(false),
  }),
});

const casos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/casos' }),
  schema: z.object({
    title: z.string().min(10),
    seoTitle: z.string().max(160).optional(),
    description: z.string().min(70).max(320),
    lead: z.string().min(40),
    category: z.string().min(2),
    services: z.array(z.enum(['desarrollo-a-medida', 'consultoria-transformacion', 'innovacion-subvencionada'])).min(1),
    /** Position on /casos/ and the home (lower first). */
    order: z.number().int(),
    status: z.string().min(10),
    published: isoDate,
    updated: isoDate.optional(),
    /** The headline figures. Only audited figures — see AGENTS.md. */
    metrics: z.array(metric).min(1).max(4),
    metricsNote: z.string().optional(),
    secondaryMetrics: z.array(metric).max(4).optional(),
    /** What the figures do not prove. Required: every case publishes its limit. */
    limit: paragraphs,
    facts: z.array(z.object({ key: z.string(), value: z.string() })).min(1),
    faqs: z.array(faq).min(1),
    cta: paragraphs,
    sourceNote: z.string().optional(),
    relatedGuides: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
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

import { defineCollection } from 'astro:content';

const enCollection = defineCollection({
  type: 'content',
});

const esCollection = defineCollection({
  type: 'content',
});

const glCollection = defineCollection({
  type: 'content',
});

export const collections = {
  en: enCollection,
  es: esCollection,
  gl: glCollection,
};
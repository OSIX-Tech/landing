export const LANGUAGES = ['en', 'es', 'gl'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<Lang, { label: string; ogLocale: string }> = {
  en: { label: 'English', ogLocale: 'en_US' },
  es: { label: 'Español', ogLocale: 'es_ES' },
  gl: { label: 'Galego', ogLocale: 'gl_ES' },
};

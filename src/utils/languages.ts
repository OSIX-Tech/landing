export const LANGUAGES = ['es'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'es';

export const LANG_META: Record<Lang, { label: string; ogLocale: string }> = {
  es: { label: 'Español', ogLocale: 'es_ES' },
};

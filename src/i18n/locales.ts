// Langues du site. Le néerlandais est servi à la racine (/), le français sous /fr/, l'anglais sous /en/.
export const langs = ['nl', 'fr', 'en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'nl';

export const localeInfo: Record<Lang, { name: string; short: string; html: string; og: string; dateLocale: string }> = {
  nl: { name: 'Nederlands', short: 'NL', html: 'nl-BE', og: 'nl_BE', dateLocale: 'nl-BE' },
  fr: { name: 'Français', short: 'FR', html: 'fr-BE', og: 'fr_BE', dateLocale: 'fr-BE' },
  en: { name: 'English', short: 'EN', html: 'en-GB', og: 'en_GB', dateLocale: 'en-GB' },
};

export const isLang = (v: unknown): v is Lang => typeof v === 'string' && (langs as readonly string[]).includes(v);

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(localeInfo[lang].dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });

/** Raccourci pour un texte dans les trois langues : L(lang)('nl', 'fr', 'en') */
export const L = (lang: Lang) => (nl: string, fr: string, en: string) => ({ nl, fr, en })[lang];

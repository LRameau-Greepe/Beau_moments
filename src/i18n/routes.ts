// Adresses traduites de chaque page. Une seule source : le menu, le sélecteur de langue,
// les balises hreflang et le sitemap en dépendent.
import type { Lang } from './locales';

export const pages = {
  home: { nl: '/', fr: '/fr/', en: '/en/' },
  catering: { nl: '/catering/', fr: '/fr/traiteur/', en: '/en/catering/' },
  atelier: { nl: '/atelier/', fr: '/fr/atelier/', en: '/en/atelier/' },
  takeaway: { nl: '/afhaal/', fr: '/fr/a-emporter/', en: '/en/takeaway/' },
  gallery: { nl: '/galerij/', fr: '/fr/galerie/', en: '/en/gallery/' },
  about: { nl: '/over-ons/', fr: '/fr/a-propos/', en: '/en/about/' },
  legal: { nl: '/juridische-informatie/', fr: '/fr/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { nl: '/privacy/', fr: '/fr/confidentialite/', en: '/en/privacy/' },
} satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof pages;

/** Formules de catering : chacune a sa page sous /catering/ */
export const eventSlugs = {
  home: { nl: 'prive-chef-aan-huis', fr: 'chef-a-domicile', en: 'private-chef-at-home' },
  celebrations: { nl: 'feesten', fr: 'fetes', en: 'celebrations' },
  weddings: { nl: 'huwelijk', fr: 'mariage', en: 'weddings' },
  corporate: { nl: 'bedrijfsevents', fr: 'entreprises', en: 'corporate' },
} satisfies Record<string, Record<Lang, string>>;

export type EventKey = keyof typeof eventSlugs;

export const pagePath = (key: PageKey, lang: Lang) => pages[key][lang];
export const eventPath = (key: EventKey, lang: Lang) => `${pages.catering[lang]}${eventSlugs[key][lang]}/`;

/** Construit { nl, fr, en } à partir d'une fonction */
export const allLangs = (fn: (l: Lang) => string): Record<Lang, string> => ({ nl: fn('nl'), fr: fn('fr'), en: fn('en') });

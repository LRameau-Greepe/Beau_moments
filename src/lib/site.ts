// Données du site et petites aides partagées entre les pages.
import data from '../data/site.json';

export const site = data;

/** Transforme un chemin (/page/) en adresse absolue (https://…/page/). */
export const abs = (path: string) => new URL(path, site.siteUrl).href;

/** Adresse sur une ligne : « Industrielaan 3/C1, 9990 Maldegem » */
export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

/** Lien « tel: » (sans espaces) */
export const tel = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
export const telHref = tel(site.phone);
export const mailHref = `mailto:${site.email}`;

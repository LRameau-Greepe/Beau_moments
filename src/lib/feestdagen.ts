// Afhaal Feestdagen 2026 : l'offre à emporter de Noël et Nouvel An, d'après la publication Instagram
// du 20 novembre 2026 (https://www.instagram.com/p/Df9vzkyjThl/). Néerlandais = texte d'origine ; FR/EN = traductions.
import type { Lang } from '../i18n/locales';
import type { PhotoKey } from './photos';

export const feestPost = 'https://www.instagram.com/p/Df9vzkyjThl/';
export const feestSlides: PhotoKey[] = ['feest-cover', 'feest-menu', 'feest-classics', 'feest-order'];

interface FeestCopy {
  label: string;
  title: string;
  lead: string;
  menuTitle: string;
  courses: { name: string; dish: string }[];
  prices: { name: string; price: string }[];
  fourNote: string;
  classicsTitle: string;
  classics: { name: string; note?: string; price: string }[];
  orderTitle: string;
  order: string[];
  pickupTitle: string;
  pickup: string[];
  orderCta: string;
  short: { name: string; price: string }[];
  deadline: string;
  allergens: string;
}

export const feest: Record<Lang, FeestCopy> = {
  nl: {
    label: 'Afhaal feestdagen 2026',
    title: 'Vier de feestdagen met Beau Moments.',
    lead: 'Een feestmenu en feestelijke klassiekers om thuis van te genieten, met Kerst en Nieuwjaar. Hetzelfde aanbod voor beide feestdagen.',
    menuTitle: 'Menu Kerst & Nieuwjaar',
    courses: [
      { name: 'Amuses', dish: 'Dip groene kruiden & pane carasau · Noordzeekrab & brioche · Bisque d’homard' },
      { name: 'Voorgerecht', dish: 'Coquille · gerookte paling · aardpeer' },
      { name: 'Tussengerecht *', dish: 'Kreeft · winterprei · nantua' },
      { name: 'Hoofdgerecht', dish: 'Fazant · fine champagne · wintergarnituur' },
      { name: 'Dessert', dish: 'Speculaas · karamel · mascarpone' },
      { name: 'Mignardises', dish: 'Twee koffiegarnituren' },
    ],
    prices: [{ name: 'Menu 3 gangen', price: '€ 85 p.p.' }, { name: 'Menu 4 gangen *', price: '€ 110 p.p.' }],
    fourNote: '* Met tussengerecht',
    classicsTitle: 'Feestelijke klassiekers',
    classics: [
      { name: 'Vol-au-vent', note: 'Mechelse koekoek', price: '€ 30 / kg' },
      { name: 'Stoofpot van hert', note: 'Wintergarnituur', price: '€ 40 / kg' },
      { name: 'Aardappelkroketten', note: '15 stuks', price: '€ 6 per portie' },
      { name: 'Bladerdeegvidée', price: '€ 3,5 per stuk' },
    ],
    orderTitle: 'Bestellen',
    order: ['Kerst: tot 20 december 2026', 'Nieuwjaar: tot 27 december 2026'],
    pickupTitle: 'Afhalen',
    pickup: ['Kerst: 24 december 2026, 11u – 14u', 'Nieuwjaar: 31 december 2026, 11u – 14u', 'Industrielaan 3/C1, 9990 Maldegem'],
    orderCta: 'Bestel per mail',
    short: [{ name: 'Feestmenu 3 gangen', price: '€ 85 p.p.' }, { name: 'Feestmenu 4 gangen', price: '€ 110 p.p.' }, { name: 'Vol-au-vent, Mechelse koekoek', price: '€ 30 / kg' }, { name: 'Stoofpot van hert', price: '€ 40 / kg' }],
    deadline: 'Bestellen tot 20/12 (Kerst) en 27/12 (Nieuwjaar), afhalen op 24/12 en 31/12.',
    allergens: 'Allergenen: informatie op aanvraag, vóór je bestelling (info@beau-moments.be of telefonisch).',
  },
  fr: {
    label: 'À emporter pour les fêtes 2026',
    title: 'Célébrez les fêtes avec Beau Moments.',
    lead: 'Un menu de fête et des classiques festifs à savourer chez vous, à Noël et au Nouvel An. La même offre pour les deux fêtes.',
    menuTitle: 'Menu de Noël & Nouvel An',
    courses: [
      { name: 'Mises en bouche', dish: 'Dip aux herbes vertes & pane carasau · Crabe de la mer du Nord & brioche · Bisque de homard' },
      { name: 'Entrée', dish: 'Saint-Jacques · anguille fumée · topinambour' },
      { name: 'Entrée intermédiaire *', dish: 'Homard · poireau d’hiver · nantua' },
      { name: 'Plat', dish: 'Faisan · fine champagne · garniture d’hiver' },
      { name: 'Dessert', dish: 'Spéculoos · caramel · mascarpone' },
      { name: 'Mignardises', dish: 'Deux accompagnements pour le café' },
    ],
    prices: [{ name: 'Menu 3 services', price: '85 € p.p.' }, { name: 'Menu 4 services *', price: '110 € p.p.' }],
    fourNote: '* Avec entrée intermédiaire',
    classicsTitle: 'Classiques festifs',
    classics: [
      { name: 'Vol-au-vent', note: 'Coucou de Malines', price: '30 € / kg' },
      { name: 'Ragoût de cerf', note: 'Garniture d’hiver', price: '40 € / kg' },
      { name: 'Croquettes de pommes de terre', note: '15 pièces', price: '6 € la portion' },
      { name: 'Bouchée feuilletée (vidée)', price: '3,5 € pièce' },
    ],
    orderTitle: 'Commander',
    order: ['Noël : jusqu’au 20 décembre 2026', 'Nouvel An : jusqu’au 27 décembre 2026'],
    pickupTitle: 'Retrait',
    pickup: ['Noël : 24 décembre 2026, de 11 h à 14 h', 'Nouvel An : 31 décembre 2026, de 11 h à 14 h', 'Industrielaan 3/C1, 9990 Maldegem'],
    orderCta: 'Commander par e-mail',
    short: [{ name: 'Menu de fête 3 services', price: '85 € p.p.' }, { name: 'Menu de fête 4 services', price: '110 € p.p.' }, { name: 'Vol-au-vent au coucou de Malines', price: '30 € / kg' }, { name: 'Ragoût de cerf', price: '40 € / kg' }],
    deadline: 'Commande jusqu’au 20/12 (Noël) et au 27/12 (Nouvel An), retrait les 24/12 et 31/12.',
    allergens: 'Allergènes : informations sur demande, avant votre commande (info@beau-moments.be ou par téléphone).',
  },
  en: {
    label: 'Holiday takeaway 2026',
    title: 'Celebrate the holidays with Beau Moments.',
    lead: 'A festive menu and festive classics to enjoy at home, at Christmas and New Year. The same offer for both holidays.',
    menuTitle: 'Christmas & New Year menu',
    courses: [
      { name: 'Amuse-bouches', dish: 'Green herb dip & pane carasau · North Sea crab & brioche · Lobster bisque' },
      { name: 'Starter', dish: 'Scallop · smoked eel · Jerusalem artichoke' },
      { name: 'Intermediate course *', dish: 'Lobster · winter leek · Nantua' },
      { name: 'Main course', dish: 'Pheasant · fine champagne · winter garnish' },
      { name: 'Dessert', dish: 'Speculoos · caramel · mascarpone' },
      { name: 'Mignardises', dish: 'Two coffee accompaniments' },
    ],
    prices: [{ name: '3-course menu', price: '€85 pp' }, { name: '4-course menu *', price: '€110 pp' }],
    fourNote: '* With the intermediate course',
    classicsTitle: 'Festive classics',
    classics: [
      { name: 'Vol-au-vent', note: 'Mechelen cuckoo chicken', price: '€30 / kg' },
      { name: 'Venison stew', note: 'Winter garnish', price: '€40 / kg' },
      { name: 'Potato croquettes', note: '15 pieces', price: '€6 per portion' },
      { name: 'Puff pastry case', price: '€3.50 each' },
    ],
    orderTitle: 'Order',
    order: ['Christmas: until 20 December 2026', 'New Year: until 27 December 2026'],
    pickupTitle: 'Collect',
    pickup: ['Christmas: 24 December 2026, 11:00 – 14:00', 'New Year: 31 December 2026, 11:00 – 14:00', 'Industrielaan 3/C1, 9990 Maldegem'],
    orderCta: 'Order by email',
    short: [{ name: 'Festive menu, 3 courses', price: '€85 pp' }, { name: 'Festive menu, 4 courses', price: '€110 pp' }, { name: 'Vol-au-vent, Mechelen cuckoo', price: '€30 / kg' }, { name: 'Venison stew', price: '€40 / kg' }],
    deadline: 'Order by 20/12 (Christmas) and 27/12 (New Year), collect on 24/12 and 31/12.',
    allergens: 'Allergens: information on request, before you order (info@beau-moments.be or by phone).',
  },
};

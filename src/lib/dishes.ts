// Gerechten (plats) tirés des publications Instagram de BEAU MOMENTS : nom, courte description, photo.
// Le nom reprend la légende d'origine (ex. « Kreeft - kaviaar - beurre blanc - mergpompoen »).
import type { Lang } from '../i18n/locales';
import type { PhotoKey } from './photos';

export interface Dish { photo: PhotoKey; name: Record<Lang, string>; notes: Record<Lang, string> }

export const dishes: Dish[] = [
  { photo: 'lobster-caviar', name: { nl: 'Kreeft & kaviaar', fr: 'Homard & caviar', en: 'Lobster & caviar' }, notes: { nl: 'Beurre blanc · mergpompoen', fr: 'Beurre blanc · courge', en: 'Beurre blanc · marrow' } },
  { photo: 'egg-shrimp-tray', name: { nl: 'Hoeve-ei', fr: 'Œuf fermier', en: 'Farm egg' }, notes: { nl: 'Garnaal · mousseline', fr: 'Crevettes grises · mousseline', en: 'Grey shrimp · mousseline' } },
  { photo: 'langoustine', name: { nl: 'Noorse langoustine', fr: 'Langoustine de Norvège', en: 'Norwegian langoustine' }, notes: { nl: 'Courgette · beurre blanc', fr: 'Courgette · beurre blanc', en: 'Courgette · beurre blanc' } },
  { photo: 'scallop-dish', name: { nl: 'Sint-jakobsvrucht', fr: 'Saint-Jacques', en: 'Scallop' }, notes: { nl: 'In de schelp · kruidenolie', fr: 'En coquille · huile d’herbes', en: 'In the shell · herb oil' } },
  { photo: 'hamachi', name: { nl: 'Hamachi', fr: 'Hamachi', en: 'Hamachi' }, notes: { nl: 'Tomaat · lavas', fr: 'Tomate · livèche', en: 'Tomato · lovage' } },
  { photo: 'hazelnut-tart-side', name: { nl: 'Hazelnoottaart', fr: 'Tarte aux noisettes', en: 'Hazelnut tart' }, notes: { nl: 'Praliné · karamel', fr: 'Praliné · caramel', en: 'Praline · caramel' } },
  { photo: 'langoustine-ceviche', name: { nl: 'Ceviche van langoustine', fr: 'Ceviche de langoustine', en: 'Langoustine ceviche' }, notes: { nl: 'Komkommer · limoen', fr: 'Concombre · citron vert', en: 'Cucumber · lime' } },
  { photo: 'croquettes', name: { nl: 'Kroket van Rubia Gallega', fr: 'Croquette de Rubia Gallega', en: 'Rubia Gallega croquette' }, notes: { nl: 'Bij de receptie', fr: 'À la réception', en: 'At the reception' } },
];

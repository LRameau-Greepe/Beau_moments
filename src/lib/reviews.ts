// Avis de clients publiés par BEAU MOMENTS sur Instagram (publication du 17 juin 2025).
// Néerlandais : mot pour mot (langue d'origine ; les plus longs sont des extraits). Français et anglais : traductions fidèles.
// Auteurs : prénom seul, comme sur les cartes.
import type { Lang } from '../i18n/locales';

export const reviewsPost = 'https://www.instagram.com/p/DLA4A_fNlTr/';

export interface Review { quote: Record<Lang, string>; author: string }

export const reviews: Review[] = [
  {
    author: 'Nicole',
    quote: {
      nl: 'Absoluut tevreden! Bert zeer fijne kookkunst en Aude vlotte, gedistingeerde bediening! Aanraders!!',
      fr: 'Une satisfaction totale ! Une cuisine très raffinée de Bert et un service fluide et distingué d’Aude ! À recommander !!',
      en: 'Absolutely delighted! Bert’s cooking is so refined and Aude’s service smooth and distinguished! Highly recommended!!',
    },
  },
  {
    author: 'Axelle',
    quote: {
      nl: 'We hebben enorm genoten van een fantastische avond dankzij dit geweldige duo. Hij toverde de ene smaakvolle creatie na de andere uit de keuken, terwijl zij alles met een glimlach en oog voor detail verzorgde. Een echte aanrader voor wie thuis wil genieten van een gastronomische avond zonder zorgen.',
      fr: 'Nous avons adoré cette soirée fantastique grâce à ce duo formidable. Il a fait sortir de la cuisine une création savoureuse après l’autre, pendant qu’elle s’occupait de tout avec le sourire et le souci du détail. Vraiment à recommander pour profiter d’une soirée gastronomique chez soi, sans le moindre souci.',
      en: 'We thoroughly enjoyed a fantastic evening thanks to this wonderful duo. He conjured one delicious creation after another from the kitchen, while she took care of everything with a smile and an eye for detail. A real must for anyone who wants a carefree fine-dining evening at home.',
    },
  },
  {
    author: 'Jessica',
    quote: {
      nl: 'Een geweldige ervaring!!! Het eten op de communie van onze dochter was niet alleen erg lekker, maar ook mooi gepresenteerd en met zorg bereid. Je merkt dat er aandacht, passie en liefde in zit.',
      fr: 'Une expérience formidable !!! Le repas de la communion de notre fille était non seulement délicieux, mais aussi joliment présenté et préparé avec soin. On sent l’attention, la passion et l’amour qui y sont mis.',
      en: 'A wonderful experience!!! The food at our daughter’s communion was not only delicious, but also beautifully presented and prepared with care. You can tell there is attention, passion and love in it.',
    },
  },
  {
    author: 'Marie',
    quote: {
      nl: 'Super super merci voor vandaag. Het was heel dik in orde & we voelden ons heel op ons gemak om onze keuken aan andere mensen over te geven, de eerste keer! En wat een ervaring!',
      fr: 'Un super super merci pour aujourd’hui. Tout était parfait et nous nous sommes sentis très à l’aise de confier notre cuisine à d’autres personnes, pour la première fois ! Et quelle expérience !',
      en: 'A huge thank you for today. Everything was spot on & we felt completely at ease handing our kitchen over to other people, for the first time! And what an experience!',
    },
  },
  {
    author: 'Nele',
    quote: {
      nl: 'Wat deze ervaring echt speciaal maakte, was de vriendelijke en relaxte sfeer die het koppel creëerde. Wij kunnen niet wachten om hen opnieuw uit te nodigen voor een nieuwe kookervaring!',
      fr: 'Ce qui a rendu cette expérience vraiment spéciale, c’est l’ambiance chaleureuse et détendue que le couple a créée. Nous avons hâte de les inviter à nouveau pour une nouvelle expérience culinaire !',
      en: 'What made this experience truly special was the friendly, relaxed atmosphere the couple created. We can’t wait to invite them again for another cooking experience!',
    },
  },
  {
    author: 'Griet',
    quote: {
      nl: 'Een culinaire en gezellige beleving in onze eigen omgeving. Alles mooi gedecoreerd en nadien was onze keuken volledig spic en span. Onze gasten waren vol lof over hoe jullie het aanpakken en alles tot in de puntjes brengen.',
      fr: 'Une expérience culinaire et conviviale, chez nous. Tout était joliment décoré et, après, notre cuisine était impeccable. Nos invités n’ont pas tari d’éloges sur votre façon de faire et le soin apporté à chaque détail.',
      en: 'A culinary and convivial experience in our own home. Everything beautifully decorated, and afterwards our kitchen was spotless. Our guests were full of praise for how you go about it and get every detail just right.',
    },
  },
];

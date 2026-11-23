// Avis Google de la fiche « Beau Moments » (Industrielaan 3/C1, Maldegem), relevés le 23 novembre 2026 :
// note 4,8 sur 5 avis (dont un sans texte). Néerlandais = texte d'origine, mot pour mot (le plus long est un extrait) ;
// français et anglais = traductions fidèles. Auteurs : prénom + initiale du nom.
import type { Lang } from '../i18n/locales';

export const googleRating = { score: 4.8, count: 5 };
export const googleReviewsUrl = 'https://www.google.com/maps/place/Beau+Moments/@51.1976681,3.4653947,17z/data=!4m8!3m7!1s0x47c367d3d21b71b3:0x73b62ceaea1bd83!8m2!3d51.1976681!4d3.4653947!9m1!1b1!16s%2Fg%2F11zx0xzb08';

export interface Review { quote: Record<Lang, string>; author: string; stars: number }

export const reviews: Review[] = [
  {
    author: 'Isabelle D.', stars: 5,
    quote: {
      nl: 'In één woord: Bert en Aude zijn fantastisch! Zowel culinair als in menselijk contact zijn Bert en Aude een topkoppel! Enorm lekkere keuken, zeer hartelijke bediening. Moesten we kunnen, we nemen beide in huis 😍',
      fr: 'En un mot : Bert et Aude sont fantastiques ! Tant en cuisine que dans le contact humain, Bert et Aude forment un couple au top ! Une cuisine délicieuse, un service très chaleureux. Si nous le pouvions, nous les garderions tous les deux à la maison 😍',
      en: 'In one word: Bert and Aude are fantastic! Both in the kitchen and in personal contact, Bert and Aude are a top couple! Incredibly delicious food, very warm service. If we could, we would keep them both at home 😍',
    },
  },
  {
    author: 'Kimberly H.', stars: 5,
    quote: {
      nl: 'Voor een verrassingsetentje met 26 gasten deed ik beroep op Aude en Bert. Het eten was top en verzorgd tot in de puntjes. Ook de bediening was heel vriendelijk, vlot en professioneel. De gasten waren enorm lovend over de gerechten én de service. Dankzij Aude, Bert & het team werd het een geslaagde avond! Een echte aanrader!',
      fr: 'J’ai fait appel à Aude et Bert pour un dîner surprise de 26 invités. La cuisine était excellente et soignée jusque dans les moindres détails. Le service était lui aussi très aimable, fluide et professionnel. Les invités ont été unanimes sur les plats comme sur le service. Grâce à Aude, Bert et l’équipe, la soirée a été une réussite ! À recommander vivement !',
      en: 'I called on Aude and Bert for a surprise dinner with 26 guests. The food was excellent and perfect down to the last detail. The service was also very friendly, smooth and professional. The guests were full of praise for both the dishes and the service. Thanks to Aude, Bert & the team it was a wonderful evening! Highly recommended!',
    },
  },
  {
    author: 'Lies B.', stars: 5,
    quote: {
      nl: 'Beste traiteurervaring van het voorbije jaar! Recent 2 dineetjes, en het was echt fantastisch! We namen de week nadien zelfs opnieuw hetzelfde menu, omdat het zo goed was. Bediening onder leiding van Aude is top, de lekkere gerechten van Bert maken het natuurlijk helemaal af. Alle gasten waren laaiend enthousiast!',
      fr: 'La meilleure expérience traiteur de l’année ! Deux dîners récemment, et c’était vraiment fantastique ! La semaine suivante, nous avons même repris le même menu tant il était bon. Le service mené par Aude est au top, et les délicieux plats de Bert font le reste. Tous les invités étaient enthousiastes !',
      en: 'Best catering experience of the past year! Two dinners recently, and it was truly fantastic! The following week we even ordered the same menu again because it was so good. The service led by Aude is top-notch, and Bert’s delicious dishes complete it all. Every guest was thrilled!',
    },
  },
  {
    author: 'Katrine B.', stars: 4,
    quote: {
      nl: 'Op vrijdag 28 augustus hebben wij kunnen genieten van de culinaire kookkunsten van Beau Moments. Het was een fijne ervaring. Het was super lekker, vlekkeloze en vriendelijke bediening! En na het diner was onze keuken tip top in orde.',
      fr: 'Le vendredi 28 août, nous avons pu profiter du savoir-faire culinaire de Beau Moments. Une très belle expérience. C’était délicieux, avec un service impeccable et aimable ! Et après le dîner, notre cuisine était parfaitement en ordre.',
      en: 'On Friday 28 August we enjoyed the culinary skills of Beau Moments. It was a lovely experience. Super delicious, with flawless and friendly service! And after dinner our kitchen was spotless.',
    },
  },
];

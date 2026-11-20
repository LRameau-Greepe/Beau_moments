// Les quatre formules de catering de BEAU MOMENTS. Chacune a sa page (ex. /catering/huwelijk/),
// dans les trois langues. L'ordre ici est l'ordre d'affichage.
import type { Lang } from '../i18n/locales';
import type { EventKey } from '../i18n/routes';
import type { PhotoKey } from './photos';

interface EventCopy {
  name: string;
  short: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead: string;
  body: string[];
  ideas: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export interface EventType { key: EventKey; hero: PhotoKey; body: PhotoKey; copy: Record<Lang, EventCopy> }

export const eventTypes: EventType[] = [
  {
    key: 'home',
    hero: 'lobster-sauce',
    body: 'bert-serving',
    copy: {
      nl: {
        name: 'Privé chef aan huis',
        short: 'Een gastronomisch diner aan je eigen tafel: wij koken, serveren en laten je keuken spic en span achter.',
        title: 'Een gastronomisch diner, gewoon thuis.',
        metaTitle: 'Privé chef aan huis in Maldegem, Brugge & Gent — BEAU MOMENTS',
        metaDesc: 'Bert kookt, Aude serveert: een gastronomisch privé diner bij jou thuis, met verfijnde Franse keuken, bediening aan tafel en een opgeruimde keuken achteraf.',
        lead: 'Bert kookt in jouw keuken, Aude verzorgt de tafel en de bediening. Jij geniet van je gasten — en na afloop is je keuken volledig spic en span.',
        body: [
          'Een avond aan je eigen tafel, met de rust van thuis en het niveau van een restaurant. We stellen samen een menu op rond het seizoen, jouw smaak en je gasten.',
          'Wij brengen alles mee: verse producten, mise-en-place en, als je wil, ook de bloemen. We serveren gang na gang aan tafel en ruimen alles op voor we vertrekken.',
        ],
        ideas: [
          { title: 'Verjaardagsdiner', text: 'Een meergangenmenu voor een kleine groep, met een dessert dat bij de gelegenheid past.' },
          { title: 'Communie of lentefeest', text: 'Een feestelijke lunch voor familie, met aandacht voor de kleinste gasten.' },
          { title: 'Diner voor twee', text: 'Een romantisch menu met kreeft, kaviaar of oesters, gewoon in je eigen woonkamer.' },
        ],
        faq: [
          { q: 'Wat hebben jullie nodig in onze keuken?', a: 'Een gewone keuken met kookplaat en oven volstaat. We bespreken vooraf wat we zelf meebrengen.' },
          { q: 'Laten jullie de keuken netjes achter?', a: 'Ja. We ruimen alles op voor we vertrekken; onze klanten vinden hun keuken spic en span terug.' },
        ],
      },
      fr: {
        name: 'Chef privé à domicile',
        short: 'Un dîner gastronomique à votre propre table : nous cuisinons, servons et laissons votre cuisine impeccable.',
        title: 'Un dîner gastronomique, tout simplement chez vous.',
        metaTitle: 'Chef privé à domicile — Maldegem, Bruges & Gand | BEAU MOMENTS',
        metaDesc: 'Bert cuisine, Aude sert : un dîner gastronomique privé chez vous, cuisine française raffinée, service à table et cuisine rangée après le repas.',
        lead: 'Bert cuisine chez vous, Aude s’occupe de la table et du service. Vous profitez de vos invités — et à la fin, votre cuisine est impeccable.',
        body: [
          'Une soirée à votre propre table, avec le calme de la maison et le niveau d’un restaurant. Nous composons ensemble un menu autour de la saison, de vos goûts et de vos invités.',
          'Nous apportons tout : produits frais, mise en place et, si vous le souhaitez, les fleurs. Nous servons plat après plat à table et rangeons tout avant de partir.',
        ],
        ideas: [
          { title: 'Dîner d’anniversaire', text: 'Un menu en plusieurs services pour un petit groupe, avec un dessert à la hauteur de l’occasion.' },
          { title: 'Communion', text: 'Un déjeuner festif en famille, avec une attention pour les plus petits.' },
          { title: 'Dîner pour deux', text: 'Un menu romantique avec homard, caviar ou huîtres, dans votre propre salon.' },
        ],
        faq: [
          { q: 'De quoi avez-vous besoin dans notre cuisine ?', a: 'Une cuisine ordinaire avec plaques et four suffit. Nous convenons à l’avance de ce que nous apportons.' },
          { q: 'Laissez-vous la cuisine propre ?', a: 'Oui. Nous rangeons tout avant de partir ; nos clients retrouvent leur cuisine impeccable.' },
        ],
      },
      en: {
        name: 'Private chef at home',
        short: 'A fine-dining dinner at your own table: we cook, serve and leave your kitchen spotless.',
        title: 'A fine-dining dinner, right at home.',
        metaTitle: 'Private chef at home near Bruges & Ghent — BEAU MOMENTS',
        metaDesc: 'Bert cooks, Aude serves: a private fine-dining dinner in your home in Flanders, with refined French cuisine, table service and a spotless kitchen afterwards.',
        lead: 'Bert cooks in your kitchen, Aude looks after the table and service. You enjoy your guests — and afterwards your kitchen is spotless.',
        body: [
          'An evening at your own table, with the ease of home and the standard of a restaurant. Together we build a menu around the season, your tastes and your guests.',
          'We bring everything: fresh produce, mise-en-place and, if you like, the flowers. We serve course after course at the table and clear everything away before we leave.',
        ],
        ideas: [
          { title: 'Birthday dinner', text: 'A multi-course menu for a small group, with a dessert to match the occasion.' },
          { title: 'Communion lunch', text: 'A festive family lunch, with thought for the youngest guests too.' },
          { title: 'Dinner for two', text: 'A romantic menu with lobster, caviar or oysters, in your own living room.' },
        ],
        faq: [
          { q: 'What do you need in our kitchen?', a: 'An ordinary kitchen with a hob and oven is enough. We agree in advance on what we bring ourselves.' },
          { q: 'Do you leave the kitchen clean?', a: 'Yes. We tidy everything before we leave; our clients find their kitchen spotless.' },
        ],
      },
    },
  },
  {
    key: 'celebrations',
    hero: 'table-long',
    body: 'egg-shrimp-garden',
    copy: {
      nl: {
        name: 'Feesten & recepties',
        short: 'Verjaardagen, communies, jubilea of een koffietafel: van receptie met hapjes tot walking dinner.',
        title: 'Feesten met smaak, tot in de puntjes verzorgd.',
        metaTitle: 'Catering voor feesten & recepties — BEAU MOMENTS Maldegem',
        metaDesc: 'Catering voor verjaardagen, communies, jubilea en koffietafels in Maldegem, Brugge, Gent en omstreken: hapjes, walking dinner of aan tafel, met bediening.',
        lead: 'Een verjaardag, een communie, een jubileum of een koffietafel: wij verzorgen catering die past bij de sfeer van jouw moment, zodat je gasten niets tekortkomen.',
        body: [
          'Catering draait niet alleen om lekker eten, maar ook om de juiste sfeer. Daarom denken we mee over het verloop van de dag, de tafels en de bloemen.',
          'Van een plateau vol hapjes bij de receptie tot een volledig diner aan tafel: elk gerecht wordt met liefde bereid en met zorg gepresenteerd.',
        ],
        ideas: [
          { title: 'Receptie met hapjes', text: 'Koude en warme hapjes, rondgedragen door ons team: tartelettes, oesters, kroketjes.' },
          { title: 'Walking dinner', text: 'Kleine gerechten die elkaar opvolgen, zodat je gasten vrij kunnen mingelen.' },
          { title: 'Koffietafel', text: 'Een verzorgde, sobere ontvangst na een afscheid, met respect en rust.' },
        ],
        faq: [
          { q: 'Brengen jullie ook bediening mee?', a: 'Ja, ons team serveert en loopt rond met de hapjes. Het aantal medewerkers stemmen we af op je groep.' },
          { q: 'Kunnen jullie de tafels en bloemen verzorgen?', a: 'Graag. We bezorgen niet alleen het eten maar ook de bloemen, en dekken de tafels mee in de sfeer van je feest.' },
        ],
      },
      fr: {
        name: 'Fêtes & réceptions',
        short: 'Anniversaires, communions, jubilés ou collation funéraire : de la réception aux bouchées jusqu’au walking dinner.',
        title: 'Des fêtes pleines de goût, soignées jusqu’au moindre détail.',
        metaTitle: 'Traiteur pour fêtes & réceptions — BEAU MOMENTS Maldegem',
        metaDesc: 'Traiteur pour anniversaires, communions, jubilés et collations funéraires à Maldegem, Bruges, Gand et environs : bouchées, walking dinner ou repas à table, avec service.',
        lead: 'Un anniversaire, une communion, un jubilé ou une collation après des funérailles : nous proposons un service traiteur à l’image de votre moment, pour que vos invités ne manquent de rien.',
        body: [
          'Un traiteur, ce n’est pas seulement de la bonne cuisine, c’est aussi la bonne ambiance. Nous réfléchissons avec vous au déroulement de la journée, aux tables et aux fleurs.',
          'D’un plateau de bouchées à la réception jusqu’au dîner complet à table : chaque plat est préparé avec amour et présenté avec soin.',
        ],
        ideas: [
          { title: 'Réception et bouchées', text: 'Bouchées froides et chaudes servies par notre équipe : tartelettes, huîtres, croquettes.' },
          { title: 'Walking dinner', text: 'De petits plats qui se succèdent, pour que vos invités circulent librement.' },
          { title: 'Collation funéraire', text: 'Un accueil soigné et sobre après un adieu, dans le respect et le calme.' },
        ],
        faq: [
          { q: 'Venez-vous avec du personnel de service ?', a: 'Oui, notre équipe sert et fait circuler les bouchées. Le nombre de personnes est adapté à votre groupe.' },
          { q: 'Pouvez-vous vous occuper des tables et des fleurs ?', a: 'Avec plaisir. Nous apportons la cuisine mais aussi les fleurs, et dressons les tables dans l’esprit de votre fête.' },
        ],
      },
      en: {
        name: 'Celebrations & receptions',
        short: 'Birthdays, communions, anniversaries or a funeral reception: from canapés to a walking dinner.',
        title: 'Celebrations full of flavour, cared for down to the last detail.',
        metaTitle: 'Catering for parties & receptions in Flanders — BEAU MOMENTS',
        metaDesc: 'Catering for birthdays, communions, anniversaries and funeral receptions around Maldegem, Bruges and Ghent: canapés, walking dinner or seated, with service.',
        lead: 'A birthday, a communion, an anniversary or a reception after a farewell: our catering follows the mood of your moment, so your guests want for nothing.',
        body: [
          'Catering is not only about good food, it is also about the right atmosphere. That is why we think along about the flow of the day, the tables and the flowers.',
          'From a tray of canapés at the reception to a full seated dinner: every dish is prepared with love and presented with care.',
        ],
        ideas: [
          { title: 'Reception & canapés', text: 'Cold and warm bites passed round by our team: tartlets, oysters, croquettes.' },
          { title: 'Walking dinner', text: 'Small dishes served one after another, so your guests can mingle freely.' },
          { title: 'Funeral reception', text: 'A calm, considered welcome after a farewell, with respect and care.' },
        ],
        faq: [
          { q: 'Do you bring serving staff?', a: 'Yes, our team serves and passes the canapés. We match the number of staff to your group.' },
          { q: 'Can you take care of the tables and flowers?', a: 'Gladly. We bring the food but also the flowers, and set the tables in the spirit of your celebration.' },
        ],
      },
    },
  },
  {
    key: 'weddings',
    hero: 'table-candles',
    body: 'champagne-bar',
    copy: {
      nl: {
        name: 'Huwelijk',
        short: 'Van receptie en walking dinner tot een diner aan tafel: jullie trouwdag, met zorg bereid.',
        title: 'Catering voor jullie trouwdag.',
        metaTitle: 'Huwelijkscatering in Maldegem, Brugge & Gent — BEAU MOMENTS',
        metaDesc: 'Huwelijkscatering door BEAU MOMENTS: receptie, walking dinner of diner aan tafel, met bediening, gedekte tafels en bloemen. Vanuit Maldegem, in Brugge, Gent en omstreken.',
        lead: 'Van de bubbels na de ceremonie tot het dessert: wij verzorgen jullie trouwdag met verfijnde gerechten, warme bediening en tafels die het plaatje compleet maken.',
        body: [
          'Een trouwfeest moet voelen zoals jullie. We stellen samen een menu op, denken mee over het verloop en stemmen de tafels af op jullie stijl.',
          'Op de dag zelf zorgt ons team voor alles: de receptie, de bediening aan tafel en de zachte afsluiting. Jullie hoeven nergens naar om te kijken.',
        ],
        ideas: [
          { title: 'Champagnereceptie', text: 'Bubbels en verfijnde hapjes meteen na de ceremonie, ook met alcoholvrije sparkling.' },
          { title: 'Diner aan lange tafels', text: 'Een meergangenmenu aan gedekte tafels met kaarsen en bloemen.' },
          { title: 'Dessertmoment', text: 'Een gedeelde afsluiter, van dame blanche tot hazelnoottaart.' },
        ],
        faq: [
          { q: 'Hoe ver op voorhand moeten we boeken?', a: 'Hoe vroeger hoe beter, zeker in het trouwseizoen. Contacteer ons zodra jullie datum vastligt.' },
          { q: 'Kunnen jullie op locatie koken?', a: 'Ja, we werken op jullie locatie: een feestzaal, een schuur of gewoon thuis in de tuin.' },
        ],
      },
      fr: {
        name: 'Mariage',
        short: 'De la réception et du walking dinner au dîner à table : votre mariage, préparé avec soin.',
        title: 'Un traiteur pour votre mariage.',
        metaTitle: 'Traiteur mariage — Maldegem, Bruges & Gand | BEAU MOMENTS',
        metaDesc: 'Traiteur de mariage BEAU MOMENTS : réception, walking dinner ou dîner à table, avec service, tables dressées et fleurs. Depuis Maldegem, à Bruges, Gand et environs.',
        lead: 'Des bulles après la cérémonie jusqu’au dessert : nous accompagnons votre mariage avec des plats raffinés, un service chaleureux et des tables qui complètent le tableau.',
        body: [
          'Un mariage doit vous ressembler. Nous composons le menu ensemble, réfléchissons au déroulement et accordons les tables à votre style.',
          'Le jour J, notre équipe s’occupe de tout : la réception, le service à table et la fin de soirée. Vous n’avez à vous soucier de rien.',
        ],
        ideas: [
          { title: 'Réception au champagne', text: 'Bulles et bouchées raffinées juste après la cérémonie, aussi en version sans alcool.' },
          { title: 'Dîner en longues tables', text: 'Un menu en plusieurs services à des tables dressées de bougies et de fleurs.' },
          { title: 'Moment dessert', text: 'Une douceur partagée, de la dame blanche à la tarte aux noisettes.' },
        ],
        faq: [
          { q: 'Combien de temps à l’avance réserver ?', a: 'Le plus tôt possible, surtout en saison des mariages. Contactez-nous dès que votre date est fixée.' },
          { q: 'Cuisinez-vous sur place ?', a: 'Oui, nous travaillons sur votre lieu : salle de fête, grange ou simplement au jardin.' },
        ],
      },
      en: {
        name: 'Weddings',
        short: 'From reception and walking dinner to a seated dinner: your wedding day, prepared with care.',
        title: 'Catering for your wedding day.',
        metaTitle: 'Wedding catering near Bruges & Ghent — BEAU MOMENTS',
        metaDesc: 'Wedding catering by BEAU MOMENTS: reception, walking dinner or seated dinner, with service, laid tables and flowers. Based in Maldegem, serving Bruges, Ghent and around.',
        lead: 'From the bubbles after the ceremony to dessert: we look after your wedding day with refined dishes, warm service and tables that complete the picture.',
        body: [
          'A wedding should feel like the two of you. We build the menu together, think along about the flow of the day and match the tables to your style.',
          'On the day itself our team takes care of everything: the reception, table service and the gentle close of the evening. You don’t have to think about a thing.',
        ],
        ideas: [
          { title: 'Champagne reception', text: 'Bubbles and refined canapés straight after the ceremony, with alcohol-free sparkling too.' },
          { title: 'Long-table dinner', text: 'A multi-course menu at tables laid with candles and flowers.' },
          { title: 'Dessert moment', text: 'A shared finale, from dame blanche to hazelnut tart.' },
        ],
        faq: [
          { q: 'How far ahead should we book?', a: 'The earlier the better, especially in wedding season. Get in touch as soon as your date is set.' },
          { q: 'Do you cook on location?', a: 'Yes, we work at your venue: a function hall, a barn or simply at home in the garden.' },
        ],
      },
    },
  },
  {
    key: 'corporate',
    hero: 'olive-oil-tasting',
    body: 'dinner-served',
    copy: {
      nl: {
        name: 'Bedrijfsevents',
        short: 'Klantendiners, lunches en recepties: catering die je bedrijf op zijn best laat zien.',
        title: 'Catering voor bedrijven, met oog voor detail.',
        metaTitle: 'Bedrijfscatering & klantendiners — BEAU MOMENTS Maldegem',
        metaDesc: 'Bedrijfscatering door BEAU MOMENTS: klantendiners, lunches, recepties en teamfeesten, op jouw locatie of in ons atelier in Maldegem (8 tot 18 personen).',
        lead: 'Een klantendiner, een lunch met je team of een receptie: wij zorgen voor verfijnde gerechten en een vlotte, gedistingeerde bediening, zodat jij je op je gasten kan richten.',
        body: [
          'Voor een kleine groep ontvangen we je graag in ons atelier in Maldegem: een privé ruimte voor 8 tot 18 personen, met een eigen keuken.',
          'Voor grotere groepen komen we naar jullie toe, van een lunch op kantoor tot een receptie op een externe locatie.',
        ],
        ideas: [
          { title: 'Klantendiner', text: 'Een meergangenmenu in ons atelier of op jullie locatie, met wijn of alcoholvrije pairing.' },
          { title: 'Lunch', text: 'Een verzorgde lunch voor je team of je partners, aan tafel geserveerd.' },
          { title: 'Receptie', text: 'Hapjes en bubbels voor een opening, jubileum of nieuwjaarsreceptie.' },
        ],
        faq: [
          { q: 'Kunnen we het atelier privé afhuren?', a: 'Ja, het atelier is volledig privé voor jouw gezelschap van 8 tot 18 personen.' },
          { q: 'Ontvangen we een factuur op bedrijfsnaam?', a: 'Natuurlijk. Geef bij je aanvraag de bedrijfsgegevens mee.' },
        ],
      },
      fr: {
        name: 'Événements d’entreprise',
        short: 'Dîners clients, lunchs et réceptions : un traiteur qui montre votre entreprise sous son meilleur jour.',
        title: 'Un traiteur pour les entreprises, attentif aux détails.',
        metaTitle: 'Traiteur entreprise & dîners clients — BEAU MOMENTS Maldegem',
        metaDesc: 'Traiteur d’entreprise BEAU MOMENTS : dîners clients, lunchs, réceptions et fêtes d’équipe, sur votre site ou dans notre atelier à Maldegem (8 à 18 personnes).',
        lead: 'Un dîner clients, un lunch d’équipe ou une réception : nous assurons une cuisine raffinée et un service fluide et distingué, pour que vous puissiez vous consacrer à vos invités.',
        body: [
          'Pour un petit groupe, nous vous accueillons volontiers dans notre atelier à Maldegem : un espace privé pour 8 à 18 personnes, avec sa propre cuisine.',
          'Pour les groupes plus grands, nous venons chez vous, du lunch au bureau à la réception sur un lieu externe.',
        ],
        ideas: [
          { title: 'Dîner clients', text: 'Un menu en plusieurs services à l’atelier ou chez vous, avec accord vins ou sans alcool.' },
          { title: 'Lunch', text: 'Un lunch soigné pour votre équipe ou vos partenaires, servi à table.' },
          { title: 'Réception', text: 'Bouchées et bulles pour une inauguration, un jubilé ou une réception de nouvel an.' },
        ],
        faq: [
          { q: 'Peut-on privatiser l’atelier ?', a: 'Oui, l’atelier est entièrement privatisé pour votre groupe de 8 à 18 personnes.' },
          { q: 'Recevons-nous une facture au nom de l’entreprise ?', a: 'Bien sûr. Indiquez les coordonnées de l’entreprise dans votre demande.' },
        ],
      },
      en: {
        name: 'Corporate events',
        short: 'Client dinners, lunches and receptions: catering that shows your company at its best.',
        title: 'Corporate catering, with an eye for detail.',
        metaTitle: 'Corporate catering & client dinners — BEAU MOMENTS',
        metaDesc: 'Corporate catering by BEAU MOMENTS: client dinners, lunches, receptions and team events, at your venue or in our private atelier in Maldegem (8 to 18 guests).',
        lead: 'A client dinner, a team lunch or a reception: we bring refined food and smooth, distinguished service, so you can focus on your guests.',
        body: [
          'For a small group, we are happy to welcome you to our atelier in Maldegem: a private space for 8 to 18 guests, with its own kitchen.',
          'For larger groups we come to you, from a lunch at the office to a reception at an outside venue.',
        ],
        ideas: [
          { title: 'Client dinner', text: 'A multi-course menu at the atelier or your venue, with wine or alcohol-free pairing.' },
          { title: 'Lunch', text: 'A considered lunch for your team or partners, served at the table.' },
          { title: 'Reception', text: 'Canapés and bubbles for an opening, anniversary or New Year reception.' },
        ],
        faq: [
          { q: 'Can we book the atelier privately?', a: 'Yes, the atelier is entirely private for your group of 8 to 18 guests.' },
          { q: 'Can we get an invoice in the company’s name?', a: 'Of course. Just include the company details with your enquiry.' },
        ],
      },
    },
  },
];

export const getEventType = (key: EventKey) => eventTypes.find((e) => e.key === key)!;

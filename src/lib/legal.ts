// Mentions légales (Code de droit économique, art. XII.6) et politique de confidentialité (RGPD) de BEAU MOMENTS.
// Données de l'entreprise : Banque-Carrefour des Entreprises (KBO/BCE), consultée le 23 novembre 2026.
// Le site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience : pas de bandeau cookies nécessaire.
import type { Lang } from '../i18n/locales';

export const company = {
  name: 'BEAU MOMENTS',
  form: { nl: 'Vennootschap onder firma (VOF)', fr: 'Société en nom collectif (SNC)', en: 'General partnership (VOF)' } as Record<Lang, string>,
  number: '1021.052.088',
  vat: 'BE 1021.052.088',
  court: { nl: 'RPR Gent', fr: 'RPM Gand', en: 'Register of Legal Entities, Ghent' } as Record<Lang, string>,
  managers: 'Aude De Baets, Bert Mortier',
  address: 'Industrielaan 3 bus C1, 9990 Maldegem, België',
};

export const updated = { nl: '23 november 2026', fr: '23 novembre 2026', en: '23 November 2026' } as Record<Lang, string>;

type Block = { h: string; p?: string[]; list?: string[] };
interface LegalCopy { label: string; title: string; intro: string; blocks: Block[] }

const c = company;
export const legalNotice: Record<Lang, LegalCopy> = {
  nl: {
    label: 'Juridisch', title: 'Juridische informatie',
    intro: 'Deze website wordt uitgegeven door BEAU MOMENTS. Hieronder vind je de gegevens die de wet vereist.',
    blocks: [
      { h: 'Onderneming', list: [`Naam: ${c.name}`, `Rechtsvorm: ${c.form.nl}`, `Maatschappelijke zetel: ${c.address}`, `Ondernemingsnummer: ${c.number} (${c.court.nl})`, `Btw-nummer: ${c.vat}`, `Zaakvoerders: ${c.managers}`] },
      { h: 'Contact', list: ['E-mail: info@beau-moments.be', 'Aude: +32 468 19 66 44', 'Bert: +32 476 70 61 86'] },
      { h: 'Hosting', p: ['Deze website wordt gehost door Netlify, Inc., San Francisco (Verenigde Staten).'] },
      { h: 'Intellectuele eigendom', p: ['Alle teksten, foto’s, logo’s en tekeningen op deze website zijn eigendom van BEAU MOMENTS. Overname, ook gedeeltelijk, is niet toegestaan zonder voorafgaande schriftelijke toestemming.'] },
      { h: 'Aansprakelijkheid', p: ['We besteden de grootste zorg aan de inhoud van deze website. Menu’s, prijzen en data kunnen echter wijzigen; enkel het voorstel of de bevestiging die je van ons ontvangt is bindend. Voor de inhoud van externe websites waarnaar we verwijzen (zoals Instagram of Google Maps) zijn we niet verantwoordelijk.'] },
      { h: 'Toepasselijk recht', p: ['Op deze website is het Belgisch recht van toepassing.'] },
    ],
  },
  fr: {
    label: 'Informations légales', title: 'Mentions légales',
    intro: 'Ce site est édité par BEAU MOMENTS. Vous trouverez ci-dessous les informations requises par la loi.',
    blocks: [
      { h: 'Entreprise', list: [`Nom : ${c.name}`, `Forme juridique : ${c.form.fr}`, `Siège social : Industrielaan 3 bte C1, 9990 Maldegem, Belgique`, `Numéro d’entreprise : ${c.number} (${c.court.fr})`, `Numéro de TVA : ${c.vat}`, `Gérants : ${c.managers}`] },
      { h: 'Contact', list: ['E-mail : info@beau-moments.be', 'Aude : +32 468 19 66 44', 'Bert : +32 476 70 61 86'] },
      { h: 'Hébergement', p: ['Ce site est hébergé par Netlify, Inc., San Francisco (États-Unis).'] },
      { h: 'Propriété intellectuelle', p: ['Tous les textes, photos, logos et dessins de ce site sont la propriété de BEAU MOMENTS. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.'] },
      { h: 'Responsabilité', p: ['Nous apportons le plus grand soin au contenu de ce site. Les menus, prix et dates peuvent toutefois changer ; seule la proposition ou la confirmation que vous recevez de notre part fait foi. Nous ne sommes pas responsables du contenu des sites externes vers lesquels nous renvoyons (comme Instagram ou Google Maps).'] },
      { h: 'Droit applicable', p: ['Ce site est soumis au droit belge.'] },
    ],
  },
  en: {
    label: 'Legal', title: 'Legal notice',
    intro: 'This website is published by BEAU MOMENTS. Below you will find the information required by law.',
    blocks: [
      { h: 'Company', list: [`Name: ${c.name}`, `Legal form: ${c.form.en}`, `Registered office: Industrielaan 3 box C1, 9990 Maldegem, Belgium`, `Enterprise number: ${c.number} (${c.court.en})`, `VAT number: ${c.vat}`, `Managing partners: ${c.managers}`] },
      { h: 'Contact', list: ['Email: info@beau-moments.be', 'Aude: +32 468 19 66 44', 'Bert: +32 476 70 61 86'] },
      { h: 'Hosting', p: ['This website is hosted by Netlify, Inc., San Francisco (United States).'] },
      { h: 'Intellectual property', p: ['All texts, photos, logos and drawings on this website are the property of BEAU MOMENTS. Reproduction, even in part, is not permitted without prior written consent.'] },
      { h: 'Liability', p: ['We take great care over the content of this website. Menus, prices and dates may change, however; only the proposal or confirmation you receive from us is binding. We are not responsible for the content of external websites we link to (such as Instagram or Google Maps).'] },
      { h: 'Applicable law', p: ['This website is governed by Belgian law.'] },
    ],
  },
};

export const privacyPolicy: Record<Lang, LegalCopy> = {
  nl: {
    label: 'Juridisch', title: 'Privacybeleid',
    intro: 'We gaan zorgvuldig om met je persoonsgegevens en verwerken ze volgens de Algemene Verordening Gegevensbescherming (AVG/GDPR).',
    blocks: [
      { h: 'Verantwoordelijke', p: [`${c.name} (${c.form.nl}), ${c.address}, ondernemingsnummer ${c.number}. Vragen over privacy: info@beau-moments.be.`] },
      { h: 'Welke gegevens we verwerken', list: ['Wanneer je het aanvraagformulier invult: je naam, e-mailadres, telefoonnummer, het soort event, de datum, het aantal gasten, de locatie en je bericht.', 'Wanneer je ons mailt of belt, bijvoorbeeld voor een bestelling: de gegevens die je ons zelf bezorgt.'] },
      { h: 'Waarom', p: ['Om je aanvraag te beantwoorden, een voorstel op maat op te maken, je bestelling of event te organiseren en te factureren. De rechtsgrond is het nemen van precontractuele maatregelen en het uitvoeren van de overeenkomst; voor de facturatie is dat onze wettelijke verplichting.'] },
      { h: 'Bewaring', p: ['We bewaren je gegevens zolang nodig om je aanvraag of bestelling af te handelen. Gegevens van aanvragen zonder vervolg verwijderen we uiterlijk twee jaar na het laatste contact. Facturen bewaren we zo lang als de boekhoudwetgeving voorschrijft.'] },
      { h: 'Wie je gegevens ontvangt', p: ['We verkopen of delen je gegevens niet. De website en het aanvraagformulier worden gehost door Netlify, Inc. (Verenigde Staten), dat je gegevens enkel in onze opdracht verwerkt, met de waarborgen die de AVG vereist voor doorgifte buiten de EU. Inzendingen via het formulier worden daarbij automatisch op spam gecontroleerd (Akismet).'] },
      { h: 'Cookies', p: ['Deze website plaatst geen cookies, bewaart niets in je browser en gebruikt geen analyse- of advertentietools. Links naar Instagram en Google Maps openen die diensten pas wanneer je erop klikt; daar gelden hun eigen privacyregels.'] },
      { h: 'Je rechten', p: ['Je hebt het recht op inzage, verbetering en verwijdering van je gegevens, op beperking van en bezwaar tegen de verwerking, en op overdraagbaarheid. Stuur je verzoek naar info@beau-moments.be. Ben je niet tevreden, dan kan je klacht indienen bij de Gegevensbeschermingsautoriteit (Drukpersstraat 35, 1000 Brussel, www.gegevensbeschermingsautoriteit.be).'] },
    ],
  },
  fr: {
    label: 'Informations légales', title: 'Politique de confidentialité',
    intro: 'Nous traitons vos données personnelles avec soin, conformément au Règlement général sur la protection des données (RGPD).',
    blocks: [
      { h: 'Responsable du traitement', p: [`${c.name} (${c.form.fr}), Industrielaan 3 bte C1, 9990 Maldegem, Belgique, numéro d’entreprise ${c.number}. Questions sur la vie privée : info@beau-moments.be.`] },
      { h: 'Données traitées', list: ['Lorsque vous remplissez le formulaire de demande : votre nom, votre e-mail, votre téléphone, le type d’événement, la date, le nombre d’invités, le lieu et votre message.', 'Lorsque vous nous écrivez ou nous appelez, par exemple pour une commande : les informations que vous nous communiquez.'] },
      { h: 'Finalités', p: ['Répondre à votre demande, établir une proposition sur mesure, organiser et facturer votre commande ou votre événement. La base légale est l’exécution de mesures précontractuelles et du contrat ; pour la facturation, notre obligation légale.'] },
      { h: 'Conservation', p: ['Nous conservons vos données le temps nécessaire au traitement de votre demande ou commande. Les données des demandes sans suite sont supprimées au plus tard deux ans après le dernier contact. Les factures sont conservées pendant la durée imposée par la législation comptable.'] },
      { h: 'Destinataires', p: ['Nous ne vendons ni ne partageons vos données. Le site et le formulaire sont hébergés par Netlify, Inc. (États-Unis), qui traite vos données uniquement pour notre compte, avec les garanties exigées par le RGPD pour les transferts hors de l’UE. Les envois du formulaire sont alors filtrés automatiquement contre le spam (Akismet).'] },
      { h: 'Cookies', p: ['Ce site ne dépose aucun cookie, n’enregistre rien dans votre navigateur et n’utilise aucun outil d’analyse ni de publicité. Les liens vers Instagram et Google Maps n’ouvrent ces services que si vous cliquez dessus ; leurs propres règles de confidentialité s’y appliquent.'] },
      { h: 'Vos droits', p: ['Vous disposez d’un droit d’accès, de rectification et d’effacement de vos données, de limitation et d’opposition au traitement, ainsi qu’à la portabilité. Envoyez votre demande à info@beau-moments.be. En cas de désaccord, vous pouvez introduire une plainte auprès de l’Autorité de protection des données (rue de la Presse 35, 1000 Bruxelles, www.autoriteprotectiondonnees.be).'] },
    ],
  },
  en: {
    label: 'Legal', title: 'Privacy policy',
    intro: 'We handle your personal data with care and process it in accordance with the General Data Protection Regulation (GDPR).',
    blocks: [
      { h: 'Data controller', p: [`${c.name} (${c.form.en}), Industrielaan 3 box C1, 9990 Maldegem, Belgium, enterprise number ${c.number}. Privacy questions: info@beau-moments.be.`] },
      { h: 'Data we process', list: ['When you fill in the enquiry form: your name, email address, phone number, type of event, date, number of guests, location and your message.', 'When you email or call us, for example to place an order: the information you give us.'] },
      { h: 'Purposes', p: ['To answer your enquiry, prepare a tailored proposal, and organise and invoice your order or event. The legal basis is taking pre-contractual steps and performing the contract; for invoicing, our legal obligation.'] },
      { h: 'Retention', p: ['We keep your data as long as needed to handle your enquiry or order. Data from enquiries that do not lead to an order are deleted no later than two years after the last contact. Invoices are kept for as long as accounting law requires.'] },
      { h: 'Recipients', p: ['We do not sell or share your data. The website and enquiry form are hosted by Netlify, Inc. (United States), which processes your data only on our behalf, with the safeguards the GDPR requires for transfers outside the EU. Form submissions are automatically checked for spam (Akismet).'] },
      { h: 'Cookies', p: ['This website sets no cookies, stores nothing in your browser and uses no analytics or advertising tools. Links to Instagram and Google Maps only open those services when you click them; their own privacy rules apply there.'] },
      { h: 'Your rights', p: ['You have the right to access, correct and erase your data, to restrict and object to processing, and to data portability. Send your request to info@beau-moments.be. If you are not satisfied, you can lodge a complaint with the Belgian Data Protection Authority (Drukpersstraat 35, 1000 Brussels, www.dataprotectionauthority.be).'] },
    ],
  },
};

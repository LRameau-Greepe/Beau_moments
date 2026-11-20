// Photos du site : toutes viennent du compte Instagram de BEAU MOMENTS (@beau_moments_catering), en pleine qualité
// (originaux des publications ; aucune image tirée des vidéos). Astro les sert en AVIF/WebP à plusieurs tailles.
// Pour en ajouter : déposer la photo dans src/assets/photos/instagram/ puis la déclarer ici.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/locales';
import p_hazelnut_tart from '../assets/photos/instagram/hazelnut-tart.jpg';
import p_hazelnut_tart_side from '../assets/photos/instagram/hazelnut-tart-side.jpg';
import p_hazelnut_tart_profile from '../assets/photos/instagram/hazelnut-tart-profile.jpg';
import p_atelier_facade from '../assets/photos/instagram/atelier-facade.jpg';
import p_atelier_candles from '../assets/photos/instagram/atelier-candles.jpg';
import p_olive_oil_tasting from '../assets/photos/instagram/olive-oil-tasting.jpg';
import p_kitchen_beef from '../assets/photos/instagram/kitchen-beef.jpg';
import p_atelier_from_above from '../assets/photos/instagram/atelier-from-above.jpg';
import p_atelier_dinner_from_above from '../assets/photos/instagram/atelier-dinner-from-above.jpg';
import p_plating_sauce from '../assets/photos/instagram/plating-sauce.jpg';
import p_tartelettes from '../assets/photos/instagram/tartelettes.jpg';
import p_awa_shiso_ice from '../assets/photos/instagram/awa-shiso-ice.jpg';
import p_awa_shiso_bottle from '../assets/photos/instagram/awa-shiso-bottle.jpg';
import p_serving_bubbles from '../assets/photos/instagram/serving-bubbles.jpg';
import p_atelier_dining_room from '../assets/photos/instagram/atelier-dining-room.jpg';
import p_chef_plating from '../assets/photos/instagram/chef-plating.jpg';
import p_valentine_barn from '../assets/photos/instagram/valentine-barn.jpg';
import p_valentine_table from '../assets/photos/instagram/valentine-table.jpg';
import p_egg_shrimp_garden from '../assets/photos/instagram/egg-shrimp-garden.jpg';
import p_egg_shrimp_tray from '../assets/photos/instagram/egg-shrimp-tray.jpg';
import p_ready_to_serve from '../assets/photos/instagram/ready-to-serve.jpg';
import p_scallop_dish from '../assets/photos/instagram/scallop-dish.jpg';
import p_scallops from '../assets/photos/instagram/scallops.jpg';
import p_langoustine from '../assets/photos/instagram/langoustine.jpg';
import p_apron_details from '../assets/photos/instagram/apron-details.jpg';
import p_side_dish from '../assets/photos/instagram/side-dish.jpg';
import p_private_dining_bowls from '../assets/photos/instagram/private-dining-bowls.jpg';
import p_garden_table from '../assets/photos/instagram/garden-table.jpg';
import p_hamachi from '../assets/photos/instagram/hamachi.jpg';
import p_beef_cuts from '../assets/photos/instagram/beef-cuts.jpg';
import p_apron_field from '../assets/photos/instagram/apron-field.jpg';
import p_amuse_spoons from '../assets/photos/instagram/amuse-spoons.jpg';
import p_flowers from '../assets/photos/instagram/flowers.jpg';
import p_appetizers from '../assets/photos/instagram/appetizers.jpg';
import p_strawberry_dessert from '../assets/photos/instagram/strawberry-dessert.jpg';
import p_lobster_caviar from '../assets/photos/instagram/lobster-caviar.jpg';
import p_lobster_sauce from '../assets/photos/instagram/lobster-sauce.jpg';
import p_european_lobster from '../assets/photos/instagram/european-lobster.jpg';
import p_flower_bites from '../assets/photos/instagram/flower-bites.jpg';
import p_champagne_bar from '../assets/photos/instagram/champagne-bar.jpg';
import p_croquettes from '../assets/photos/instagram/croquettes.jpg';
import p_dame_blanche from '../assets/photos/instagram/dame-blanche.jpg';
import p_waiter_tray from '../assets/photos/instagram/waiter-tray.jpg';
import p_langoustine_ceviche from '../assets/photos/instagram/langoustine-ceviche.jpg';
import p_aude_at_work from '../assets/photos/instagram/aude-at-work.jpg';
import p_aude_with_guests from '../assets/photos/instagram/aude-with-guests.jpg';
import p_oysters from '../assets/photos/instagram/oysters.jpg';
import p_bert_serving from '../assets/photos/instagram/bert-serving.jpg';
import p_apero from '../assets/photos/instagram/apero.jpg';
import p_dinner_served from '../assets/photos/instagram/dinner-served.jpg';
import p_bert_and_aude from '../assets/photos/instagram/bert-and-aude.jpg';
import p_table_lemons from '../assets/photos/instagram/table-lemons.jpg';
import p_table_long from '../assets/photos/instagram/table-long.jpg';
import p_table_room from '../assets/photos/instagram/table-room.jpg';
import p_table_flowers from '../assets/photos/instagram/table-flowers.jpg';
import p_table_candles from '../assets/photos/instagram/table-candles.jpg';
import p_behind_the_curtain from '../assets/photos/instagram/behind-the-curtain.jpg';
import p_bites_tray from '../assets/photos/instagram/bites-tray.jpg';
import p_caviar_dish from '../assets/photos/instagram/caviar-dish.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: Record<Lang, string>;
  /** Publication Instagram d'origine */
  post: string;
}

const p = (code: string) => `https://www.instagram.com/p/${code}/`;

export const photos = {
  "hazelnut-tart": { src: p_hazelnut_tart, post: p("DeopbycDXGG"), alt: { nl: "Hazelnoottaart met pralinécrème en gekarameliseerde hazelnoten, van bovenaf", fr: "Tarte aux noisettes, crème pralinée et noisettes caramélisées, vue du dessus", en: "Hazelnut tart with praline cream and caramelised hazelnuts, from above" } },
  "hazelnut-tart-side": { src: p_hazelnut_tart_side, post: p("DeopbycDXGG"), alt: { nl: "Hazelnoottaart op een wit bord, met krokante bodem en pralinécrème", fr: "Tarte aux noisettes sur une assiette blanche, fond croustillant et crème pralinée", en: "Hazelnut tart on a white plate with a crisp base and praline cream" } },
  "hazelnut-tart-profile": { src: p_hazelnut_tart_profile, post: p("DeopbycDXGG"), alt: { nl: "Zijaanzicht van de hazelnoottaart: zandkoekdeeg, crème en karamel", fr: "La tarte aux noisettes de profil : pâte sablée, crème et caramel", en: "The hazelnut tart in profile: shortcrust, cream and caramel" } },
  "atelier-facade": { src: p_atelier_facade, post: p("Dc3KjshtSV5"), alt: { nl: "Het atelier van BEAU MOMENTS in Maldegem bij avond, met gasten achter de glazen gevel", fr: "L’atelier BEAU MOMENTS à Maldegem le soir, avec des invités derrière la façade vitrée", en: "The BEAU MOMENTS atelier in Maldegem at night, guests behind the glass façade" } },
  "atelier-candles": { src: p_atelier_candles, post: p("Dcgzc2RNprF"), alt: { nl: "Geurkaarsen en een speaker op de toog van het atelier", fr: "Bougies parfumées et enceinte sur le comptoir de l’atelier", en: "Scented candles and a speaker on the atelier counter" } },
  "olive-oil-tasting": { src: p_olive_oil_tasting, post: p("DcVVwuhtHmS"), alt: { nl: "Schaaltjes met olijfolie, boter, zout en peper klaar voor de lunch", fr: "Coupelles d’huile d’olive, beurre, sel et poivre prêtes pour le déjeuner", en: "Little dishes of olive oil, butter, salt and pepper set for lunch" } },
  "kitchen-beef": { src: p_kitchen_beef, post: p("DbyAovxDb1O"), alt: { nl: "Rundvlees in de pan in de keuken van het atelier", fr: "Bœuf saisi à la poêle dans la cuisine de l’atelier", en: "Beef searing in the pan in the atelier kitchen" } },
  "atelier-from-above": { src: p_atelier_from_above, post: p("DboLYjJjV7o"), alt: { nl: "Het atelier van bovenaf: rieten hanglampen boven een lange zwarte tafel", fr: "L’atelier vu d’en haut : suspensions en rotin au-dessus d’une longue table noire", en: "The atelier from above: rattan pendant lamps over a long black table" } },
  "atelier-dinner-from-above": { src: p_atelier_dinner_from_above, post: p("DboLYjJjV7o"), alt: { nl: "Gasten rond de tafel tijdens een diner in het atelier, van bovenaf gezien", fr: "Des invités autour de la table lors d’un dîner à l’atelier, vus d’en haut", en: "Guests around the table during a dinner at the atelier, seen from above" } },
  "plating-sauce": { src: p_plating_sauce, post: p("DYIRALdDXzF"), alt: { nl: "De chef giet saus over borden met rundvlees aan de pass", fr: "Le chef nappe de sauce des assiettes de bœuf au passe", en: "The chef spooning sauce over plates of beef at the pass" } },
  "tartelettes": { src: p_tartelettes, post: p("DXq-w1DDQH8"), alt: { nl: "Zelfgebakken tartelettes, de start van een amuse", fr: "Tartelettes faites maison, base d’une mise en bouche", en: "Home-baked tartlets, the start of an amuse-bouche" } },
  "awa-shiso-ice": { src: p_awa_shiso_ice, post: p("DXRJLm5Dd9M"), alt: { nl: "Flessen AWA Shiso, alcoholvrije sparkling, op ijs", fr: "Bouteilles d’AWA Shiso, pétillant sans alcool, sur glace", en: "Bottles of AWA Shiso alcohol-free sparkling on ice" } },
  "awa-shiso-bottle": { src: p_awa_shiso_bottle, post: p("DXRJLm5Dd9M"), alt: { nl: "Een fles AWA Shiso, alcoholvrije Japanse sparkling", fr: "Une bouteille d’AWA Shiso, pétillant japonais sans alcool", en: "A bottle of AWA Shiso, a Japanese alcohol-free sparkling" } },
  "serving-bubbles": { src: p_serving_bubbles, post: p("DW_eLy4DU73"), alt: { nl: "Een fles bubbels wordt uit de ijsemmer genomen", fr: "Une bouteille de bulles sortie du seau à glace", en: "A bottle of bubbles lifted from the ice bucket" } },
  "atelier-dining-room": { src: p_atelier_dining_room, post: p("DWW6Q3jDWvU"), alt: { nl: "De gedekte tafel in het atelier, met kaarsen, bloemen en een wijnrek", fr: "La table dressée à l’atelier, avec bougies, fleurs et étagère à vins", en: "The table set in the atelier, with candles, flowers and a wine shelf" } },
  "chef-plating": { src: p_chef_plating, post: p("DWR7bFfjTbp"), alt: { nl: "De chef dresseert borden, in zwart-wit", fr: "Le chef dresse les assiettes, en noir et blanc", en: "The chef plating dishes, in black and white" } },
  "valentine-barn": { src: p_valentine_barn, post: p("DUvOsjOjQEY"), alt: { nl: "Een gerestaureerde schuur met open haard en statafels met rode rozen", fr: "Une grange restaurée avec cheminée et mange-debout fleuris de roses rouges", en: "A restored barn with an open fire and high tables with red roses" } },
  "valentine-table": { src: p_valentine_table, post: p("DUvOsjOjQEY"), alt: { nl: "Een lange tafel met rode rozen en kaarsen voor Valentijn", fr: "Une longue table de roses rouges et de bougies pour la Saint-Valentin", en: "A long table of red roses and candles for Valentine’s Day" } },
  "egg-shrimp-garden": { src: p_egg_shrimp_garden, post: p("DSlFyj4jSHv"), alt: { nl: "Hoeve-ei met garnaal en mousseline op een plateau in de tuin", fr: "Œuf fermier, crevettes grises et mousseline sur un plateau au jardin", en: "Farm egg with grey shrimp and mousseline on a tray in the garden" } },
  "egg-shrimp-tray": { src: p_egg_shrimp_tray, post: p("DSlFyj4jSHv"), alt: { nl: "Plateau met hoeve-eitjes, garnaal en mousseline op erwtjes", fr: "Plateau d’œufs fermiers aux crevettes et mousseline sur lit de pois", en: "Tray of farm eggs with shrimp and mousseline on a bed of peas" } },
  "ready-to-serve": { src: p_ready_to_serve, post: p("DR5VMxCjdaI"), alt: { nl: "Een ober met strik en BEAU MOMENTS-schort naast de champagne", fr: "Un serveur en nœud papillon et tablier BEAU MOMENTS près du champagne", en: "A waiter in a bow tie and BEAU MOMENTS apron beside the champagne" } },
  "scallop-dish": { src: p_scallop_dish, post: p("DRXxcypjV3L"), alt: { nl: "Sint-jakobsvrucht met krokante chips en kruidenolie, geserveerd in de schelp", fr: "Saint-Jacques en coquille, chips croustillantes et huile d’herbes", en: "Scallop served in its shell with crisps and herb oil" } },
  "scallops": { src: p_scallops, post: p("DQ3rhRAjbC-"), alt: { nl: "Verse coquilles Saint-Jacques, maandagochtend geleverd", fr: "Coquilles Saint-Jacques fraîches, livrées le lundi matin", en: "Fresh scallops in their shells, delivered on a Monday morning" } },
  "langoustine": { src: p_langoustine, post: p("DQpEP3aDbj_"), alt: { nl: "Noorse langoustine op courgette met beurre blanc", fr: "Langoustine de Norvège sur courgette et beurre blanc", en: "Norwegian langoustine on courgette with beurre blanc" } },
  "apron-details": { src: p_apron_details, post: p("DQhdYZ3DaEq"), alt: { nl: "Rug van de chef met het BA-monogram op de schort, bloemen op de achtergrond", fr: "Le dos du chef avec le monogramme BA sur le tablier, fleurs en arrière-plan", en: "The chef’s back with the BA monogram on the apron, flowers behind" } },
  "side-dish": { src: p_side_dish, post: p("DQUwDhMja4x"), alt: { nl: "Bijgerecht met tomaat, avocado en eetbare bloemen in glazen schalen", fr: "Accompagnement de tomates, avocat et fleurs comestibles en coupes de verre", en: "Side dish of tomato, avocado and edible flowers in glass bowls" } },
  "private-dining-bowls": { src: p_private_dining_bowls, post: p("DP8yAcUiFeT"), alt: { nl: "Voorgerechten in stenen kommen voor een privé diner", fr: "Entrées en bols de grès pour un dîner privé", en: "Starters in stoneware bowls for a private dinner" } },
  "garden-table": { src: p_garden_table, post: p("DOyjs76jVpn"), alt: { nl: "Een kleurrijk gedekte tafel in de tuin, met kaarsen en veldbloemen", fr: "Une table colorée dressée au jardin, bougies et fleurs des champs", en: "A colourful table set in the garden with candles and wild flowers" } },
  "hamachi": { src: p_hamachi, post: p("DOJT5CnjTZy"), alt: { nl: "Hamachi met tomaat en lavas in diepe borden", fr: "Hamachi, tomate et livèche en assiettes creuses", en: "Hamachi with tomato and lovage in deep plates" } },
  "beef-cuts": { src: p_beef_cuts, post: p("DNgS8ugt1L7"), alt: { nl: "Gemarmerd rundvlees van Monarti Finefood", fr: "Bœuf persillé de Monarti Finefood", en: "Marbled beef from Monarti Finefood" } },
  "apron-field": { src: p_apron_field, post: p("DNQ2IqJtkML"), alt: { nl: "Linnen schort met BEAU MOMENTS catering & private dining", fr: "Tablier en lin brodé BEAU MOMENTS catering & private dining", en: "Linen apron embroidered BEAU MOMENTS catering & private dining" } },
  "amuse-spoons": { src: p_amuse_spoons, post: p("DNDzbN8NZ10"), alt: { nl: "Amuselepels op een zilveren schaal, in zwart-wit", fr: "Cuillères apéritives sur un plateau d’argent, en noir et blanc", en: "Amuse-bouche spoons on a silver tray, in black and white" } },
  "flowers": { src: p_flowers, post: p("DM2xpALNeiN"), alt: { nl: "Een groot boeket veldbloemen op een terras", fr: "Un grand bouquet de fleurs des champs sur une terrasse", en: "A large bouquet of wild flowers on a terrace" } },
  "appetizers": { src: p_appetizers, post: p("DMz2fTzt6Ec"), alt: { nl: "Hapjes met kruidencrème en bloemblaadjes op een rij", fr: "Bouchées à la crème d’herbes et pétales alignées", en: "Rows of bites with herb cream and petals" } },
  "strawberry-dessert": { src: p_strawberry_dessert, post: p("DMfK4rrNOCF"), alt: { nl: "Aardbeiendessert met een suikerbloem in een glazen schaal", fr: "Dessert aux fraises et fleur en sucre dans une coupe de verre", en: "Strawberry dessert with a sugar flower in a glass bowl" } },
  "lobster-caviar": { src: p_lobster_caviar, post: p("DMao0SqtYrj"), alt: { nl: "Kreeft met kaviaar en mergpompoen op witte borden", fr: "Homard, caviar et courge sur assiettes blanches", en: "Lobster with caviar and marrow on white plates" } },
  "lobster-sauce": { src: p_lobster_sauce, post: p("DMao0SqtYrj"), alt: { nl: "Beurre blanc wordt aan tafel over kreeft met kaviaar gegoten", fr: "Le beurre blanc versé à table sur le homard au caviar", en: "Beurre blanc poured at the table over lobster with caviar" } },
  "european-lobster": { src: p_european_lobster, post: p("DMQKEwWtKKu"), alt: { nl: "Europese kreeftenstaarten, Homarus gammarus", fr: "Queues de homard européen, Homarus gammarus", en: "European lobster tails, Homarus gammarus" } },
  "flower-bites": { src: p_flower_bites, post: p("DLaOjFyNt4n"), alt: { nl: "Krokante hapjes met eetbare bloemen op een gouden schaal", fr: "Bouchées croustillantes aux fleurs comestibles sur un plateau doré", en: "Crisp bites with edible flowers on a golden tray" } },
  "champagne-bar": { src: p_champagne_bar, post: p("DLQDJOntkbY"), alt: { nl: "Champagnekoeler en glazen klaar voor de receptie, in zwart-wit", fr: "Seau à champagne et verres prêts pour la réception, en noir et blanc", en: "Champagne cooler and glasses ready for the reception, in black and white" } },
  "croquettes": { src: p_croquettes, post: p("DLNYY4DNE4J"), alt: { nl: "Kroketjes van Rubia Gallega op gevlochten schalen", fr: "Croquettes de Rubia Gallega sur plateaux tressés", en: "Rubia Gallega croquettes on woven trays" } },
  "dame-blanche": { src: p_dame_blanche, post: p("DLJ_TfjN6RM"), alt: { nl: "Warme chocoladesaus wordt over een dame blanche gegoten", fr: "Sauce chocolat chaude versée sur une dame blanche", en: "Hot chocolate sauce poured over a dame blanche" } },
  "waiter-tray": { src: p_waiter_tray, post: p("DKxHkrrNI-V"), alt: { nl: "Een plateau vol hapjes in glaasjes wordt rondgedragen, in zwart-wit", fr: "Un plateau de verrines porté parmi les invités, en noir et blanc", en: "A tray of verrines carried round, in black and white" } },
  "langoustine-ceviche": { src: p_langoustine_ceviche, post: p("DKkN1pXN5Vu"), alt: { nl: "Ceviche van langoustine met komkommer en limoen", fr: "Ceviche de langoustine, concombre et citron vert", en: "Langoustine ceviche with cucumber and lime" } },
  "aude-at-work": { src: p_aude_at_work, post: p("DKUEmMei3IZ"), alt: { nl: "Aude bereidt de tafel voor tijdens een event", fr: "Aude prépare la table pendant un événement", en: "Aude preparing the table during an event" } },
  "aude-with-guests": { src: p_aude_with_guests, post: p("DKUEmMei3IZ"), alt: { nl: "Aude in gesprek met gasten tijdens een event", fr: "Aude en discussion avec des invités pendant un événement", en: "Aude chatting with guests during an event" } },
  "oysters": { src: p_oysters, post: p("DJG0z3_tDRW"), alt: { nl: "Oesters met kruidenvinaigrette op een schaal", fr: "Huîtres à la vinaigrette d’herbes sur un plateau", en: "Oysters with herb vinaigrette on a platter" } },
  "bert-serving": { src: p_bert_serving, post: p("DItS6KttNrz"), alt: { nl: "Chef Bert serveert een gast aan tafel, in zwart-wit", fr: "Le chef Bert sert une invitée à table, en noir et blanc", en: "Chef Bert serving a guest at the table, in black and white" } },
  "apero": { src: p_apero, post: p("DIWjuSgNN9a"), alt: { nl: "Een glas bubbels en een kommetje soep bij het aperitief", fr: "Une coupe de bulles et un bol de velouté à l’apéritif", en: "A glass of bubbles and a small bowl of soup at aperitif time" } },
  "dinner-served": { src: p_dinner_served, post: p("DIUHSiBNcyW"), alt: { nl: "Borden met gamba’s en groenten worden naar de tafel gebracht", fr: "Des assiettes de gambas et légumes apportées à table", en: "Plates of prawns and vegetables carried to the table" } },
  "bert-and-aude": { src: p_bert_and_aude, post: p("DIQ0nJENfE-"), alt: { nl: "Bert en Aude, de oprichters van BEAU MOMENTS", fr: "Bert et Aude, fondateurs de BEAU MOMENTS", en: "Bert and Aude, the founders of BEAU MOMENTS" } },
  "table-lemons": { src: p_table_lemons, post: p("DH8-hhhN5k2"), alt: { nl: "Gedekte tafel met gele bloemen, citroenen en kaarsen", fr: "Table dressée de fleurs jaunes, citrons et bougies", en: "A table set with yellow flowers, lemons and candles" } },
  "table-long": { src: p_table_long, post: p("DH8-hhhN5k2"), alt: { nl: "Een lange gedekte tafel in een lichte woning, klaar voor een feest", fr: "Une longue table dressée dans une maison lumineuse, prête pour une fête", en: "A long table set in a bright home, ready for a celebration" } },
  "table-room": { src: p_table_room, post: p("DH8-hhhN5k2"), alt: { nl: "Lange tafel met witte kaarsen onder lampen, voor een privé diner", fr: "Longue table aux bougies blanches sous les suspensions, pour un dîner privé", en: "A long table with white candles beneath pendant lamps, for a private dinner" } },
  "table-flowers": { src: p_table_flowers, post: p("DH8-hhhN5k2"), alt: { nl: "Detail van de tafel: bloemstuk, citroenen en een kaars", fr: "Détail de la table : composition florale, citrons et bougie", en: "Table detail: flower arrangement, lemons and a candle" } },
  "table-candles": { src: p_table_candles, post: p("DH8-hhhN5k2"), alt: { nl: "Kaarsen en bloemen tussen de glazen op een lange tafel", fr: "Bougies et fleurs entre les verres sur une longue table", en: "Candles and flowers among the glasses on a long table" } },
  "behind-the-curtain": { src: p_behind_the_curtain, post: p("DH6PyCttrjZ"), alt: { nl: "Linnen gordijn met licht erachter: achter de schermen", fr: "Rideau de lin éclairé : en coulisses", en: "A linen curtain lit from behind: behind the scenes" } },
  "bites-tray": { src: p_bites_tray, post: p("DH5fRirNe2e"), alt: { nl: "Een schaal met hapjes wordt rondgedragen, in zwart-wit", fr: "Un plateau de bouchées porté par un serveur, en noir et blanc", en: "A tray of bites carried by a server, in black and white" } },
  "caviar-dish": { src: p_caviar_dish, post: p("DHyWKket1kd"), alt: { nl: "Visgerecht met kaviaar en saus op een geribd bord, aan een gedekte tafel", fr: "Poisson au caviar et sa sauce sur assiette striée, à une table dressée", en: "Fish with caviar and sauce on a ribbed plate at a laid table" } },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
export const getPhoto = (k: PhotoKey): Photo => photos[k];

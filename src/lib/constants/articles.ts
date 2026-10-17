/**
 * RÊVE AFRICA SAFARIS — Journal articles
 *
 * The single source for /blog/[slug], the article list on /blog and the
 * article entries in sitemap.xml. The text below is the founders' reviewed
 * draft of 16 October 2026, used verbatim. The author of every article is
 * the organisation, not a named person.
 *
 * To add an article, see "Adding a journal article" in
 * docs/OWNER_FILL_CHECKLIST.md.
 *
 * publishedAt is an ISO date (YYYY-MM-DD).
 * [OWNER-CONFIRM]: set each publishedAt to the real date the article goes
 * live (the day the Owner merges it). It is shown on the article and used in
 * the Article JSON-LD datePublished.
 */

export interface ArticleSection {
  heading:    string;
  paragraphs: string[];
  bullets?:   string[];
}

export interface Article {
  slug:        string;
  title:       string;
  excerpt:     string;
  category:    string;
  readingTime: string;
  publishedAt: string;
  sections:    ArticleSection[];
}

export const ARTICLES: Article[] = [
  // ─────────────────────────────────────────────
  // 1. When to See the Great Migration
  // ─────────────────────────────────────────────
  {
    slug:        'when-to-see-the-great-migration',
    title:       'When to See the Great Migration',
    excerpt:     "The Great Migration has no fixed start date. Here is how the herds move through the year, and how to choose the season that suits what you most want to see.",
    category:    'Planning',
    readingTime: '3 min',
    publishedAt: '2026-10-16', // [OWNER-CONFIRM]: the real publish date
    sections: [
      {
        heading: 'The herds follow the rains',
        paragraphs: [
          "The Great Migration is the circular movement of more than a million wildebeest, together with zebra and gazelle, through the Serengeti–Mara ecosystem on the border of Tanzania and Kenya. It is not a single event with a start and finish. The herds move in response to rain and fresh grass, so timing shifts from year to year. What follows is a general pattern, not a promise.",
        ],
      },
      {
        heading: 'January to March: calving season',
        paragraphs: [
          "From late January, the herds gather on the short-grass plains of the southern Serengeti and the Ndutu area. Thousands of calves are born in a short window, with February usually the peak. Predators follow the herds, so this is a strong season for watching hunts and young animals. It is also a quieter time of year than the northern river crossings.",
        ],
      },
      {
        heading: 'April to June: moving north',
        paragraphs: [
          "As the plains dry out, the herds begin their trek north and west. In the western Serengeti, the Grumeti River crossings usually fall around June and July. They are often less crowded than the Mara River, which suits travellers whose dates fall outside the peak crossing window.",
        ],
      },
      {
        heading: 'July to October: the Mara River',
        paragraphs: [
          "The most photographed part of the migration is the crossing of the Mara River, in the northern Serengeti and Kenya's Maasai Mara. Crossings are usually seen between July and October, with August and September the most commonly recommended months. The herds spend time on both sides of the river and may cross it more than once.",
        ],
      },
      {
        heading: 'October to December: heading south',
        paragraphs: [
          "With the short rains, the herds turn back toward the southern Serengeti, arriving on the plains again towards the end of the year.",
        ],
      },
      {
        heading: 'Things worth knowing before you choose',
        paragraphs: [],
        bullets: [
          "Crossings are never guaranteed. Herds can wait at a riverbank for hours or days. A longer stay gives you better odds, and a good guide will help, but nobody controls the animals.",
          "Kenya or Tanzania? The Maasai Mara and the northern Serengeti are the same ecosystem, divided by a border. Where you stay depends on how you want to travel, the style of camp, and how much time you have.",
          "The busiest months are the most in demand. August to October is usually the busiest and most expensive stretch, and the best camps can fill many months ahead. Calving season camps are also popular.",
          "There is wildlife all year. If your dates don't match a headline event, the Serengeti and Mara still offer excellent game viewing.",
        ],
      },
      {
        heading: 'Before you go',
        paragraphs: [
          "Movements change with the weather. Park fees, camp availability and entry rules change too, so confirm current details when you plan. If you would like help choosing a season, send us an enquiry and we will talk it through with you.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Gorilla Trekking: What to Know Before You Go
  // ─────────────────────────────────────────────
  {
    slug:        'gorilla-trekking-what-to-know',
    title:       'Gorilla Trekking: What to Know Before You Go',
    excerpt:     "A plain guide to how mountain gorilla trekking works in Rwanda and Uganda: permits, age limits, fitness, what the day looks like, and how to prepare.",
    category:    'Experiences',
    readingTime: '3 min',
    publishedAt: '2026-10-16', // [OWNER-CONFIRM]: the real publish date
    sections: [
      {
        heading: 'Where it happens',
        paragraphs: [
          "Mountain gorillas live in a small number of protected forests. Visitors can trek to see them in Rwanda (Volcanoes National Park), Uganda (Bwindi Impenetrable and Mgahinga Gorilla National Parks) and the Democratic Republic of Congo (Virunga). This guide focuses on Rwanda and Uganda, where most travellers go.",
        ],
      },
      {
        heading: 'The permit comes first',
        paragraphs: [
          "Every trekker needs a permit for a specific date. Permits are issued by the Rwanda Development Board in Rwanda and the Uganda Wildlife Authority in Uganda. Numbers are limited each day, and groups are small, with a maximum of eight visitors per habituated gorilla family. Permit prices differ between the two countries and are reviewed from time to time, so always check the current price with the issuing authority or your planner before you commit. Because dates can sell out, permits are usually secured several months before travel, and earlier for busy periods.",
        ],
      },
      {
        heading: 'Age and fitness',
        paragraphs: [
          "The minimum age to trek is 15 in both Rwanda and Uganda. There is no upper age limit, but you should be comfortable walking for several hours at altitude on steep, sometimes muddy ground. Treks can last anywhere from a short walk to most of a day, depending on where the gorilla family you are assigned has moved to. Porters can be hired locally to carry your bag and help on steep sections, and many trekkers find this worthwhile.",
        ],
      },
      {
        heading: 'What the day looks like',
        paragraphs: [
          "You meet at the park headquarters in the early morning for a briefing. Rangers assign trekkers to a gorilla family, and you hike with a guide and trackers who know where the group went the day before. Once you find the gorillas, you spend up to one hour with them. Then you hike back.",
        ],
      },
      {
        heading: 'Rules that protect the gorillas',
        paragraphs: [
          "The rules exist mainly to protect the gorillas from human illness and stress. Your guide will brief you on the details, which can differ slightly by park, so follow them closely. In general:",
        ],
        bullets: [
          "Anyone who is unwell, especially with a cold or other infection, may be refused entry.",
          "You may be asked to wear a face mask near the gorillas.",
          "Keep your voice low, keep the distance your guide tells you to keep, and never touch the animals.",
          "Do not eat or drink near the gorillas, and take all litter out with you.",
        ],
      },
      {
        heading: 'What to wear and bring',
        paragraphs: [
          "Long trousers and long sleeves protect against nettles and insects. Wear sturdy, broken-in walking boots, and bring gardening-style gloves, a light waterproof jacket and drinking water. Forest weather changes quickly. Keep camera gear in a waterproof bag, and check whether your camera rules allow flash (it is not usually permitted).",
        ],
      },
      {
        heading: 'When to go',
        paragraphs: [
          "Trekking is possible all year. The drier months are generally easier underfoot, but the forest is wet in any season, and no month guarantees a better encounter.",
        ],
      },
      {
        heading: 'Before you go',
        paragraphs: [
          "Permit prices, health requirements and park rules change. Confirm the current rules with the park authority or your planner. If you have questions about combining gorillas with a wider journey, send us an enquiry.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. What to Pack for an East African Safari
  // ─────────────────────────────────────────────
  {
    slug:        'what-to-pack-east-african-safari',
    title:       'What to Pack for an East African Safari',
    excerpt:     "Neutral colours, soft bags and a few local rules that surprise first-time travellers. A practical packing guide for safari in Kenya, Tanzania, Rwanda and Uganda.",
    category:    'Planning',
    readingTime: '2 min',
    publishedAt: '2026-10-16', // [OWNER-CONFIRM]: the real publish date
    sections: [
      {
        heading: 'Pack light, and in a soft bag',
        paragraphs: [
          "Safari kit does not need to be smart, and it will get dusty. The most important decision is your bag. Many camps are served by small aircraft, and those flights usually have strict luggage limits, often around 15 kg in total including camera gear. They also usually require soft-sided bags that can be squeezed into a small hold. Ask your planner for the exact limit before you pack, because it varies by airline.",
        ],
      },
      {
        heading: 'Colours and clothing',
        paragraphs: [],
        bullets: [
          "Neutral colours such as khaki, olive, tan and brown are the usual advice. Bright colours can be distracting for animals, and white shows every speck of dust.",
          "Avoid black and dark blue. They absorb heat, and in some areas they attract tsetse flies.",
          "Avoid camouflage. Camouflage clothing is reserved for the military in several East African countries. In Tanzania and Uganda it is illegal for civilians, and rules differ elsewhere, so leave it at home, including hats and children's clothes.",
          "Layers. Early morning game drives can be cold, especially at altitude, and the day warms up quickly. Bring a fleece or light jacket you can take off.",
          "Cover up sensibly when you are away from the camp, particularly in more conservative areas.",
        ],
      },
      {
        heading: 'Essentials',
        paragraphs: [],
        bullets: [
          "A wide-brimmed hat, sunglasses and high-factor sunscreen",
          "Insect repellent",
          "Comfortable closed shoes (and sandals for camp)",
          "Binoculars, which make a big difference to what you see",
          "A torch or head torch, and a power bank",
          "A small day bag for game drives",
          "A copy of your passport and travel documents, kept separate from the originals",
        ],
      },
      {
        heading: 'Leave behind',
        paragraphs: [],
        bullets: [
          "Single-use plastic bags. Kenya, Tanzania, Rwanda and Uganda all restrict them, and you may be stopped at the airport. Pack in reusable or zip-top bags that are not thin disposable carriers.",
          "Strong perfumes and scented lotions, which attract insects",
          "Anything that looks like military wear",
        ],
      },
      {
        heading: 'Health and documents',
        paragraphs: [
          "Ask a travel-health clinic well ahead of your trip about vaccinations and malaria prevention for the countries you are visiting. Entry and visa requirements also change, so check them with the relevant government before you travel, and make sure your passport has enough validity.",
        ],
      },
      {
        heading: 'Before you go',
        paragraphs: [
          "Rules about luggage, bags and clothing are set by airlines and governments and can change. Confirm them when you book. If you would like help with a packing list for a specific journey, send us an enquiry.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

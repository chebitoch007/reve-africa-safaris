/**
 * RÊVE AFRICA SAFARIS — Destinations Page Content Constants
 *
 * All copy, data, and content for the /destinations page lives here.
 * Components import from this file — never hardcode content in JSX.
 */

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const DESTINATIONS_HERO = {
  eyebrow:     'Six Countries, One Africa',
  headline:    'The world\'s\ngreatest\nwilderness',
  subheadline: 'From the sweeping savannas of the Maasai Mara to the ancient rainforests of Bwindi — Africa\'s wild places are as varied as they are breathtaking.',
  primaryCTA:  { label: 'Plan Your Journey', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Overview intro
// ─────────────────────────────────────────────

export const DESTINATIONS_OVERVIEW = {
  eyebrow:  'Where We Travel',
  headline: 'A continent that\ndefies a single\ndescription',
  body: [
    'We operate across six extraordinary countries — each offering a distinct character, a different rhythm, and wildlife encounters unlike anywhere else on earth.',
    'Whether you are drawn by the iconic spectacle of the Great Migration, the intimate forest encounters of gorilla trekking, or the starlit silence of the Kalahari, we have the knowledge and the relationships to bring it to life.',
  ],
  stat: { value: '6', label: 'Countries', detail: 'across East and Southern Africa' },
} as const;

// ─────────────────────────────────────────────
// Country Showcase
// ─────────────────────────────────────────────

export interface DestinationCountry {
  id:               string;
  name:             string;
  region:           string;
  tagline:          string;
  description:      string;
  href:             string;
  highlights:       readonly string[];
  bestMonths:       string;
  placeholderFrom:  string;
  placeholderTo:    string;
}

export const COUNTRIES: DestinationCountry[] = [
  {
    id:              'kenya',
    name:            'Kenya',
    region:          'East Africa',
    tagline:         'Safari at its most iconic',
    description:     'Home to the Maasai Mara, Amboseli, and Laikipia — Kenya is where the safari tradition was forged. Sweeping savannas, the Great Migration, and some of Africa\'s finest lodges.',
    href:            '/destinations/kenya',
    highlights:      ['Great Migration', 'Big Five', 'Maasai Culture', 'Ballooning'],
    bestMonths:      'Jul – Oct, Jan – Mar',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'tanzania',
    name:            'Tanzania',
    region:          'East Africa',
    tagline:         'The infinite Serengeti',
    description:     'The Serengeti, Ngorongoro Crater, Tarangire, and Ruaha together form Africa\'s most diverse wildlife canvas. Add Zanzibar and you have the complete East African journey.',
    href:            '/destinations/tanzania',
    highlights:      ['Serengeti Plains', 'Ngorongoro Crater', 'Zanzibar Beaches', 'Kilimanjaro'],
    bestMonths:      'Jun – Oct, Jan – Feb',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
  },
  {
    id:              'rwanda',
    name:            'Rwanda',
    region:          'Central Africa',
    tagline:         'Land of a thousand hills',
    description:     'In the mist-wrapped Volcanoes National Park, Rwanda offers one of the world\'s most profound wildlife encounters: tracking endangered mountain gorillas through ancient forest.',
    href:            '/destinations/rwanda',
    highlights:      ['Gorilla Trekking', 'Golden Monkeys', 'Volcanoes NP', 'Lake Kivu'],
    bestMonths:      'Jun – Sep, Dec – Feb',
    placeholderFrom: '#627A53',
    placeholderTo:   '#131510',
  },
  {
    id:              'uganda',
    name:            'Uganda',
    region:          'East Africa',
    tagline:         'The pearl of Africa',
    description:     'Bwindi Impenetrable Forest shelters half the world\'s mountain gorillas. Combined with Queen Elizabeth National Park and Murchison Falls, Uganda is Africa\'s most intimate wilderness.',
    href:            '/destinations/uganda',
    highlights:      ['Bwindi Gorillas', 'Chimp Tracking', 'Murchison Falls', 'Tree-climbing Lions'],
    bestMonths:      'Jun – Sep, Dec – Feb',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'botswana',
    name:            'Botswana',
    region:          'Southern Africa',
    tagline:         'The last great wilderness',
    description:     'Botswana is defined by exclusivity. Strict low-volume tourism means vast private concessions, extraordinary elephant populations, and an undisturbed quality to every game drive.',
    href:            '/destinations/botswana',
    highlights:      ['Okavango Delta', 'Chobe Elephants', 'Kalahari Desert', 'Makgadikgadi Pans'],
    bestMonths:      'May – Oct',
    placeholderFrom: '#B8A44A',
    placeholderTo:   '#4A3F1E',
  },
  {
    id:              'namibia',
    name:            'Namibia',
    region:          'Southern Africa',
    tagline:         'Where desert meets wild',
    description:     'Namibia\'s landscapes are unlike anywhere else on earth — the soaring red dunes of Sossusvlei, the ancient Namib Desert, Etosha\'s salt pan teaming with wildlife.',
    href:            '/destinations/namibia',
    highlights:      ['Sossusvlei Dunes', 'Etosha NP', 'Damaraland', 'Skeleton Coast'],
    bestMonths:      'May – Sep',
    placeholderFrom: '#C4A35A',
    placeholderTo:   '#5C3F20',
  },
] as const;

export const COUNTRIES_SECTION = {
  eyebrow:  'Our Destinations',
  headline: 'Six countries,\nsix characters',
  body:     'Each destination we operate in has been chosen for the depth and quality of the wildlife experience it offers — not its proximity to an airport.',
} as const;

// ─────────────────────────────────────────────
// Wildlife Highlights
// ─────────────────────────────────────────────

export interface WildlifeHighlight {
  id:          string;
  icon:        string;
  title:       string;
  description: string;
  where:       string;
}

export const WILDLIFE_HIGHLIGHTS: WildlifeHighlight[] = [
  {
    id:          'migration',
    icon:        'Footprints',
    title:       'The Great Migration',
    description: 'Witness over 1.5 million wildebeest thunder across the Serengeti-Mara ecosystem in one of the natural world\'s greatest events. River crossings are the ultimate spectacle.',
    where:       'Kenya & Tanzania',
  },
  {
    id:          'gorillas',
    icon:        'TreePine',
    title:       'Mountain Gorillas',
    description: 'Track the world\'s most endangered great apes through ancient rainforest. Only around 1,000 mountain gorillas remain — a permit and a guide bring you into their presence.',
    where:       'Rwanda & Uganda',
  },
  {
    id:          'big-five',
    icon:        'Footprints',
    title:       'The Big Five',
    description: 'Lion, leopard, elephant, buffalo, and rhino — Africa\'s most iconic wildlife. Kenya, Tanzania, and Botswana offer some of the finest Big Five viewing on the continent.',
    where:       'Kenya, Tanzania & Botswana',
  },
  {
    id:          'elephants',
    icon:        'Waves',
    title:       'Elephant Gatherings',
    description: 'Botswana\'s Chobe National Park hosts the world\'s highest concentration of African elephants — herds of hundreds converge on the Chobe River in the dry season.',
    where:       'Botswana',
  },
  {
    id:          'chimpanzees',
    icon:        'TreePine',
    title:       'Chimpanzee Tracking',
    description: 'Uganda\'s Kibale Forest is home to over 1,000 chimpanzees — the highest density in East Africa. Expert tracking guides bring you within metres of our closest relatives.',
    where:       'Uganda',
  },
  {
    id:          'desert-wildlife',
    icon:        'Sun',
    title:       'Desert Adapted Wildlife',
    description: 'Namibia\'s desert-adapted species — black rhino, desert elephant, and oryx — thrive in conditions that seem impossible. Tracking them across Damaraland is an adventure in itself.',
    where:       'Namibia',
  },
] as const;

export const WILDLIFE_SECTION = {
  eyebrow:  'What You Will Witness',
  headline: 'Wildlife encounters\nthat stay with\nyou forever',
  body:     'Africa\'s wildlife doesn\'t just impress — it transforms. These are the encounters that define a journey.',
} as const;

// ─────────────────────────────────────────────
// Signature Experiences
// ─────────────────────────────────────────────

export interface SignatureExperience {
  id:              string;
  title:           string;
  description:     string;
  detail:          string;
  href:            string;
  placeholderFrom: string;
  placeholderTo:   string;
}

export const SIGNATURE_EXPERIENCES: SignatureExperience[] = [
  {
    id:              'balloon',
    title:           'Hot Air Balloon Safari',
    description:     'Drift at dawn over the Serengeti or Maasai Mara, watching the landscape glow gold as the savanna wakes below.',
    detail:          'Kenya & Tanzania',
    href:            '/contact',
    placeholderFrom: '#D4A017',
    placeholderTo:   '#7D6D3A',
  },
  {
    id:              'walking',
    title:           'Guided Walking Safari',
    description:     'On foot, the bush reveals itself at a different scale — tracks, dung, insects, birds, and the electric awareness that you are on the same level as everything else.',
    detail:          'Multiple destinations',
    href:            '/contact',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'fly-in',
    title:           'Fly-in Safari Circuit',
    description:     'Connect remote wilderness areas by light aircraft, covering ground in minutes that would take days by road. Each landing strip reveals a different world.',
    detail:          'Kenya, Tanzania & Botswana',
    href:            '/contact',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'gorilla',
    title:           'Gorilla Habituation',
    description:     'Spend four hours — not one — with a semi-habituated gorilla group in Bwindi. Reserved for a very small number of guests per day, this is the most intimate wildlife experience in Africa.',
    detail:          'Uganda',
    href:            '/contact',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
] as const;

export const SIGNATURE_EXPERIENCES_SECTION = {
  eyebrow:  'Curated Experiences',
  headline: 'Beyond the\ngame drive',
  body:     'The best African journeys are built from a combination of experiences — the classic game drive, yes, but also these extraordinary alternatives.',
} as const;

// ─────────────────────────────────────────────
// Best Time to Visit
// ─────────────────────────────────────────────

export interface SeasonEntry {
  id:           string;
  name:         string;
  months:       string;
  description:  string;
  highlights:   readonly string[];
  isBest?:      boolean;
}

export interface CountrySeason {
  country:     string;
  countryId:   string;
  seasons:     readonly SeasonEntry[];
}

export const SEASONAL_GUIDE: CountrySeason[] = [
  {
    country:   'Kenya & Tanzania',
    countryId: 'east-africa',
    seasons: [
      {
        id:          'ea-peak',
        name:        'Peak Season',
        months:      'July – October',
        description: 'The dry season brings unparalleled game viewing as vegetation thins and animals gather near water. The Great Migration river crossings peak July–September.',
        highlights:  ['Great Migration river crossings', 'Best game visibility', 'Ideal photographic light', 'Cooler temperatures'],
        isBest:      true,
      },
      {
        id:          'ea-green',
        name:        'Green Season',
        months:      'November – June',
        description: 'Lower visitor numbers, lush landscapes, newborn animals, and exceptional birdlife. January–March offers excellent game viewing with the short dry season within the rains.',
        highlights:  ['Lower lodge rates', 'Newborn wildlife', 'Dramatic skies', 'Fewer visitors'],
      },
    ],
  },
  {
    country:   'Rwanda & Uganda',
    countryId: 'central-africa',
    seasons: [
      {
        id:          'ca-dry',
        name:        'Dry Season',
        months:      'June – September, Dec – Feb',
        description: 'Gorilla tracking is possible year-round, but the dry season makes forest trails less muddy and trekking more comfortable. Permits must be booked months in advance.',
        highlights:  ['Easier trekking conditions', 'Best forest visibility', 'Comfortable temperatures'],
        isBest:      true,
      },
      {
        id:          'ca-wet',
        name:        'Wet Season',
        months:      'March – May, October – November',
        description: 'Heavy rains make trails challenging but the forest is extraordinarily lush. Gorilla encounters are equally possible — just expect a more strenuous trek.',
        highlights:  ['Lush forest scenery', 'Lower permit availability', 'Dramatic atmosphere'],
      },
    ],
  },
  {
    country:   'Botswana & Namibia',
    countryId: 'southern-africa',
    seasons: [
      {
        id:          'sa-dry',
        name:        'Dry Season',
        months:      'May – October',
        description: 'The optimal period across Southern Africa. In Botswana, water recedes and animals concentrate around remaining sources. Namibia\'s desert landscapes are at their most accessible.',
        highlights:  ['Largest elephant herds at water', 'Best Okavango water levels', 'Clear skies for photography', 'Comfortable game-viewing temperatures'],
        isBest:      true,
      },
      {
        id:          'sa-wet',
        name:        'Green Season',
        months:      'November – April',
        description: 'Summer rains transform Botswana\'s landscapes. Baby animals are everywhere, migratory birds arrive, and lodges offer reduced rates. Namibia\'s desert blooms briefly and spectacularly.',
        highlights:  ['Baby animals', 'Migratory birdlife', 'Green Kalahari', 'Lower rates'],
      },
    ],
  },
] as const;

export const SEASONAL_SECTION = {
  eyebrow:  'When to Travel',
  headline: 'Every season\nhas its own\nreward',
  body:     'There is no single "best time" to visit Africa — only the best time for what you want to see. Our specialists will match your travel window to the experience you are seeking.',
} as const;

// ─────────────────────────────────────────────
// Featured Lodges
// ─────────────────────────────────────────────

export interface FeaturedLodge {
  id:              string;
  name:            string;
  location:        string;
  country:         string;
  description:     string;
  attributes:      readonly string[];
  placeholderFrom: string;
  placeholderTo:   string;
}

export const FEATURED_LODGES: FeaturedLodge[] = [
  {
    id:              'mara-camp',
    name:            'Mara Intimate Camp',
    location:        'Maasai Mara, Kenya',
    country:         'Kenya',
    description:     'A six-tent private camp within a 35,000-acre conservancy. Walking distance from the Mara River, with uninterrupted views across the migration corridor.',
    attributes:      ['6 Private Tents', 'Full Board', 'Private Conservancy', 'Walking Safaris'],
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'serengeti-retreat',
    name:            'Serengeti Migration Retreat',
    location:        'Northern Serengeti, Tanzania',
    country:         'Tanzania',
    description:     'A mobile tented camp that follows the migration across the Serengeti, repositioning seasonally to place guests in the heart of the action.',
    attributes:      ['Mobile Camp', 'Migration-following', 'All-Inclusive', 'Expert Guides'],
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'bwindi-lodge',
    name:            'Bwindi Forest Lodge',
    location:        'Bwindi, Uganda',
    country:         'Uganda',
    description:     'Nestled within a private forest clearing on the boundary of Bwindi Impenetrable Forest. Eight cottages, each positioned for treetop gorilla sightings.',
    attributes:      ['Forest Setting', 'Gorilla Permits', 'Local Community', 'Spa'],
    placeholderFrom: '#495C3D',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'okavango-island',
    name:            'Okavango Island Camp',
    location:        'Okavango Delta, Botswana',
    country:         'Botswana',
    description:     'An island camp in the heart of the Okavango Delta, accessible only by mokoro canoe or light aircraft. Total immersion in the world\'s largest inland delta.',
    attributes:      ['Island Setting', 'Mokoro Safaris', 'Water Activities', 'Private Concession'],
    placeholderFrom: '#B8A44A',
    placeholderTo:   '#4A3F1E',
  },
] as const;

export const LODGES_SECTION = {
  eyebrow:  'Where You Stay',
  headline: 'Lodges chosen\nfor character,\nnot category',
  body:     'Every property in our portfolio has been personally visited and assessed. We select for location, guiding quality, and ecological responsibility — not star ratings.',
} as const;

// ─────────────────────────────────────────────
// Interactive Map
// ─────────────────────────────────────────────

export const MAP_SECTION = {
  eyebrow:  'Our Territory',
  headline: 'Where we\noperate',
  body:     'Our six destinations span East and Southern Africa, connected by the shared conviction that wild places deserve extraordinary care.',
  // Map integration note: replace MapPlaceholder with a real map library
  // (e.g. Mapbox GL JS, Google Maps, or Leaflet) when ready.
  // Country marker data for future map integration:
  markers: [
    { id: 'kenya',    name: 'Kenya',    lat: 1.0,   lng: 38.0  },
    { id: 'tanzania', name: 'Tanzania', lat: -6.3,  lng: 34.9  },
    { id: 'rwanda',   name: 'Rwanda',   lat: -1.9,  lng: 29.9  },
    { id: 'uganda',   name: 'Uganda',   lat: 1.4,   lng: 32.3  },
    { id: 'botswana', name: 'Botswana', lat: -22.3, lng: 24.7  },
    { id: 'namibia',  name: 'Namibia',  lat: -22.6, lng: 17.1  },
  ],
} as const;

// ─────────────────────────────────────────────
// Destinations FAQ
// ─────────────────────────────────────────────

export interface DestinationsFAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const DESTINATIONS_FAQ_ITEMS: DestinationsFAQItem[] = [
  {
    id:       'dfaq-1',
    question: 'How do I choose between Kenya and Tanzania?',
    answer:   'Both countries share the same extraordinary ecosystem — the Serengeti-Mara — and the choice often comes down to timing and travel style. Kenya\'s Maasai Mara is best for the river crossings from July to October. Tanzania\'s Serengeti offers a broader circuit and greater diversity of parks. Many guests visit both in a single journey — we recommend this whenever time allows.',
  },
  {
    id:       'dfaq-2',
    question: 'Is it possible to combine gorilla trekking with a classic safari?',
    answer:   'Absolutely — and it makes for a remarkable contrast. A typical combination pairs three to four nights of gorilla trekking in Rwanda or Uganda with a classic savanna safari in Kenya or Tanzania. The logistics work well and we design these itineraries regularly. It is one of our most-requested journeys.',
  },
  {
    id:       'dfaq-3',
    question: 'Which destination is best for first-time safari visitors?',
    answer:   'Kenya\'s Maasai Mara is widely regarded as the finest introduction to African safari — world-class game viewing, experienced guiding infrastructure, and excellent lodge options at every level. Tanzania\'s Serengeti is equally rewarding. Both deliver the classic East African experience that most people first imagine when they think of an African safari.',
  },
  {
    id:       'dfaq-4',
    question: 'How exclusive are the destinations you work in?',
    answer:   'We deliberately focus on areas where visitor numbers are managed. Botswana is the global exemplar — strict quotas mean its private concessions feel genuinely remote. We also prioritise private conservancies in Kenya and Tanzania that operate alongside, but separate from, the main national parks. In practice, this often means an entire game area to yourselves.',
  },
  {
    id:       'dfaq-5',
    question: 'Can a single trip cover multiple countries?',
    answer:   'Yes — multi-country itineraries are one of our specialities. East Africa in particular lends itself to country combinations: Kenya and Tanzania are natural partners; Rwanda and Uganda for gorilla enthusiasts. Light aircraft connections make transitions seamless, and we handle all logistics including permits, transfers, and cross-border arrangements.',
  },
] as const;

export const DESTINATIONS_FAQ_SECTION = {
  eyebrow:  'Destination Questions',
  headline: 'Answers to the\nquestions we\nhear most',
  body:     'If your question isn\'t answered here, our specialists are always ready to help.',
  cta:      { label: 'Contact a Specialist', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Final CTA
// ─────────────────────────────────────────────

export const DESTINATIONS_CTA = {
  eyebrow:     'Your Destination Awaits',
  headline:    'Tell us where\nyou dream\nof going',
  body:        'Every extraordinary African journey begins with a conversation. Share your destination, your timing, and your vision — we will design the rest.',
  primaryCTA:  { label: 'Begin Planning',      href: '/contact' },
  secondaryCTA:{ label: 'Browse Our Journeys', href: '/journeys' },
  detail:      'No obligation. A dedicated specialist will respond within 24 hours.',
} as const;

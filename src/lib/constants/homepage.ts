/**
 * RÊVE AFRICA SAFARIS — Homepage Content Constants
 *
 * All copy, data, and content for the homepage lives here.
 * Components import from this file — never hardcode content in JSX.
 */

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const HERO_CONTENT = {
  eyebrow:      'East Africa & Beyond',
  headline:     'Where the\nWilderness\nBegins',
  subheadline:  'Bespoke safari journeys crafted for those who seek the\nextraordinary. Intimate, transformative, and entirely your own.',
  primaryCTA:   { label: 'Plan Your Safari',  href: '/contact' },
  secondaryCTA: { label: 'Explore Journeys',  href: '/packages' },
} as const;

// ─────────────────────────────────────────────
// Introduction
// ─────────────────────────────────────────────

export const INTRO_CONTENT = {
  eyebrow:   'Our Philosophy',
  headline:  'Journeys as singular\nas the landscapes\nthat inspire them',
  body: [
    'Rêve Africa Safaris is a new, founder-led safari company. We are two people, and every journey is designed by hand around the traveller. We are at the beginning of our story, and we would rather earn your trust one carefully planned trip at a time than promise you a track record we have not built yet.',
  ],
} as const;

// ─────────────────────────────────────────────
// Featured Destinations
// ─────────────────────────────────────────────

export interface DestinationData {
  id:          string;
  country:     string;
  region:      string;
  tagline:     string;
  description: string;
  href:        string;
  /** Production photography path — relative to /public */
  imageSrc:    string;
  /** Alt text for the destination image */
  imageAlt:    string;
  /** Placeholder gradient stop colours — retained as fallback */
  placeholderFrom: string;
  placeholderTo:   string;
  highlights:  readonly string[];
}

export const FEATURED_DESTINATIONS: DestinationData[] = [
  {
    id:          'kenya',
    country:     'Kenya',
    region:      'Maasai Mara & Beyond',
    tagline:     'The Great Migration',
    description: 'Witness one of nature\'s greatest spectacles across the rolling savanna of the Maasai Mara. Kenya is safari at its most iconic.',
    href:        '/contact#contact-form',
    imageSrc:    '/images/homepage/destinations-preview/img-001-maasai-mara-dawn-landscape.jpg',
    imageAlt:    'Dawn light over the Maasai Mara savanna, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
    highlights:  ['Maasai Mara', 'Amboseli', 'Laikipia'],
  },
  {
    id:          'tanzania',
    country:     'Tanzania',
    region:      'Serengeti & Ngorongoro',
    tagline:     'The Endless Plains',
    description: 'From the infinite Serengeti to the volcanic wonder of Ngorongoro, Tanzania offers an unrivalled canvas for wildlife encounters.',
    href:        '/contact#contact-form',
    imageSrc:    '/images/homepage/destinations-preview/img-002-serengeti-plains-landscape.jpg',
    imageAlt:    'The endless golden plains of the Serengeti, Tanzania',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
    highlights:  ['Serengeti', 'Ngorongoro', 'Zanzibar'],
  },
  {
    id:          'uganda',
    country:     'Uganda',
    region:      'Bwindi & Queen Elizabeth',
    tagline:     'The Pearl of Africa',
    description: 'Trek through ancient rainforest to encounter mountain gorillas in their natural habitat. Uganda is Africa\'s most intimate wilderness.',
    href:        '/contact#contact-form',
    imageSrc:    '/images/homepage/destinations-preview/img-004-bwindi-rainforest-interior.jpg',
    imageAlt:    'Morning light filtering through the ancient rainforest at Bwindi, Uganda',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#1C1F18',
    highlights:  ['Bwindi', 'Queen Elizabeth', 'Murchison Falls'],
  },
  {
    id:          'rwanda',
    country:     'Rwanda',
    region:      'Volcanoes & Nyungwe',
    tagline:     'Land of a Thousand Hills',
    description: 'Among mist-wrapped volcanoes, come face to face with endangered mountain gorillas and golden monkeys in the heart of Central Africa.',
    href:        '/contact#contact-form',
    imageSrc:    '/images/homepage/destinations-preview/img-005-rwanda-volcanoes-mist.jpg',
    imageAlt:    'Mist-wrapped volcanic peaks of Volcanoes National Park, Rwanda',
    placeholderFrom: '#627A53',
    placeholderTo:   '#131510',
    highlights:  ['Volcanoes NP', 'Nyungwe Forest', 'Lake Kivu'],
  },
] as const;

// ─────────────────────────────────────────────
// CTA Section
// ─────────────────────────────────────────────

export const CTA_CONTENT = {
  eyebrow:     'Begin Your Journey',
  headline:    'Your Africa\nawaits',
  body:        'Every great safari begins with a conversation. Tell us where you dream of going — we\'ll handle every detail from there.',
  primaryCTA:  { label: 'Start Planning',    href: '/contact' },
  secondaryCTA:{ label: 'View All Journeys', href: '/packages' },
} as const;

// ─────────────────────────────────────────────
// Experiences
// ─────────────────────────────────────────────

export interface ExperienceData {
  id:              string;
  icon:            string;
  title:           string;
  description:     string;
  href:            string;
  placeholderFrom: string;
  placeholderTo:   string;
}

export const EXPERIENCES: ExperienceData[] = [
  {
    id:              'luxury-safaris',
    icon:            'Crown',
    title:           'Luxury Safaris',
    description:     'Private game drives, exclusive camps, and extraordinary wildlife encounters across Africa\'s finest reserves.',
    href:            '/packages',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'photography',
    icon:            'Camera',
    title:           'Photography Expeditions',
    description:     'Specialist photography safaris with expert guidance, optimal positioning, and unhurried time in the field.',
    href:            '/packages',
    placeholderFrom: '#4F4A44',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'family',
    icon:            'Users',
    title:           'Family Adventures',
    description:     'Safari experiences designed for families — age-appropriate activities, specialist guides, and memories that last a lifetime.',
    href:            '/packages',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'honeymoon',
    icon:            'Heart',
    title:           'Honeymoon Escapes',
    description:     'Romantic bush retreats, private plunge pools, sundowner cocktails, and the magic of the African wilderness.',
    href:            '/packages',
    placeholderFrom: '#B5A26A',
    placeholderTo:   '#495C3D',
  },
  {
    id:              'cultural',
    icon:            'Globe',
    title:           'Cultural Journeys',
    description:     'Deep cultural immersion — Maasai villages, Swahili coast heritage, and authentic encounters with Africa\'s diverse peoples.',
    href:            '/packages',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'beach',
    icon:            'Waves',
    title:           'Beach Holidays',
    description:     'Combine the thrill of the bush with the Indian Ocean\'s turquoise waters — Zanzibar, Lamu, and the Kenyan coast await.',
    href:            '/packages',
    placeholderFrom: '#839A73',
    placeholderTo:   '#282C22',
  },
];

export const EXPERIENCES_SECTION = {
  eyebrow:  'Ways to Travel',
  headline: 'Every journey,\nyour way',
  body:     'Whether you seek the thrill of a first game drive or the intimacy of a private photography expedition, we build each journey around what matters most to you.',
} as const;

// ─────────────────────────────────────────────
// Safari Packages
// ─────────────────────────────────────────────

export interface PackageData {
  id:              string;
  name:            string;
  duration:        string;
  destination:     string;
  region:          string;
  description:     string;
  highlights:      readonly string[];
  startingFrom:    string;
  href:            string;
  imageSrc:        string;
  imageAlt:        string;
  placeholderFrom: string;
  placeholderTo:   string;
  badge?:          string;
}

export const FEATURED_PACKAGES: PackageData[] = [
  {
    id:              'mara-migration',
    name:            'Mara Migration Safari',
    duration:        '8 Days',
    destination:     'Kenya',
    region:          'Maasai Mara',
    description:     'Witness the Great Migration at its most dramatic — millions of wildebeest crossing the Mara River in an ancient spectacle of survival.',
    highlights:      ['Private game drives', 'River crossing viewpoints', 'Luxury tented camp', 'Maasai cultural visit'],
    startingFrom:    'From USD 6,500 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-014-wildebeest-mara-crossing.jpg',
    imageAlt:        'Wildebeest crossing the Mara River during the Great Migration, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
    badge:           'Most Popular',
  },
  {
    id:              'serengeti-secrets',
    name:            'Serengeti Secrets',
    duration:        '10 Days',
    destination:     'Tanzania',
    region:          'Serengeti & Ngorongoro',
    description:     'Journey across the endless Serengeti plains and descend into the ancient Ngorongoro Crater — one of Africa\'s great wildlife arenas.',
    highlights:      ['Hot air balloon safari', 'Crater floor game drive', 'Mobile camp experience', 'Olduvai Gorge visit'],
    startingFrom:    'From USD 8,200 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-003-balloon-serengeti-dawn.jpg',
    imageAlt:        'Hot air balloon at dawn over the Serengeti plains, Tanzania',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'gorilla-highlands',
    name:            'Gorilla Highlands',
    duration:        '7 Days',
    destination:     'Rwanda & Uganda',
    region:          'Volcanoes & Bwindi',
    description:     'A rare encounter with mountain gorillas across two countries — trekking through ancient forest to meet our closest relatives face to face.',
    highlights:      ['Mountain gorilla tracking', 'Golden monkey trek', 'Luxury forest lodge', 'Conservation briefing'],
    startingFrom:    'From USD 7,800 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-015-mountain-gorilla-silverback.jpg',
    imageAlt:        'Mountain gorilla in Volcanoes National Park, Rwanda',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'botswana-immersion',
    name:            'Botswana Immersion',
    duration:        '9 Days',
    destination:     'Botswana',
    region:          'Okavango & Chobe',
    description:     'Total wilderness immersion in Botswana\'s most iconic ecosystems — the Okavango Delta by mokoro and Chobe\'s legendary elephant herds by boat.',
    highlights:      ['Okavango mokoro safari', 'Chobe river cruise', 'Private concession camps', 'Big Five game drives'],
    startingFrom:    'From USD 9,400 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-018-chobe-elephants-river.jpg',
    imageAlt:        'Elephant herd on the Chobe River, Botswana',
    placeholderFrom: '#B8A44A',
    placeholderTo:   '#4A3F1E',
  },
  {
    id:              'east-africa-grand-tour',
    name:            'East Africa Grand Tour',
    duration:        '14 Days',
    destination:     'Kenya & Tanzania',
    region:          'Mara, Serengeti & Amboseli',
    description:     'The definitive East African safari — from the Maasai Mara and Amboseli\'s elephants beneath Kilimanjaro to the Serengeti and Ngorongoro Crater.',
    highlights:      ['Maasai Mara game drives', 'Amboseli & Kilimanjaro views', 'Serengeti migration', 'Ngorongoro Crater'],
    startingFrom:    'From USD 12,800 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-017-elephant-amboseli-kilimanjaro.jpg',
    imageAlt:        'Elephant herd in Amboseli with Mount Kilimanjaro, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
    badge:           'Best Seller',
  },
  {
    id:              'namibia-desert-dunes',
    name:            'Namibia Desert & Dunes',
    duration:        '10 Days',
    destination:     'Namibia',
    region:          'Sossusvlei, Etosha & Damaraland',
    description:     'An expedition through the world\'s oldest desert — the soaring red dunes of Sossusvlei, Etosha\'s wildlife, and the desert-adapted giants of Damaraland.',
    highlights:      ['Sossusvlei sunrise dunes', 'Etosha game drives', 'Desert-adapted elephants', 'Skeleton Coast'],
    startingFrom:    'From USD 8,600 per person',
    href:            '/packages',
    imageSrc:        '/images/homepage/packages/img-007-sossusvlei-dunes-namibia.jpg',
    imageAlt:        'The iconic red dunes of Sossusvlei at dawn, Namibia',
    placeholderFrom: '#C4A35A',
    placeholderTo:   '#5C3F20',
  },
];

export const PACKAGES_SECTION = {
  eyebrow:  'Featured Journeys',
  headline: 'Carefully crafted\nitineraries',
  body:     'Each package is a starting point — a framework that we then tailor entirely to you.',
  viewAll:  { label: 'View All Journeys', href: '/packages' },
} as const;

// ─────────────────────────────────────────────
// Why Travel With Us
// ─────────────────────────────────────────────

export interface TrustPillar {
  id:          string;
  icon:        string;
  title:       string;
  description: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id:          'bespoke',
    icon:        'Compass',
    title:       'Designed around you',
    description: 'Every journey is planned from scratch around your interests, travel style and budget.',
  },
  {
    id:          'founders',
    icon:        'Star',
    title:       'Direct access to the founders',
    description: 'You deal with the two of us, from your first message to your return home.',
  },
  {
    id:          'partners',
    icon:        'Gem',
    title:       'Careful partner selection',
    description: 'When we choose lodges and camps, we look at location, design, hospitality and how they treat people and wildlife.',
  },
];

export const WHY_US_SECTION = {
  eyebrow:  'Why Rêve Africa',
  headline: 'Every detail\nconsidered',
  body:     'We are not a booking platform.',
} as const;

// ─────────────────────────────────────────────
// Gallery Preview
// ─────────────────────────────────────────────

export interface GalleryItem {
  id:              string;
  label:           string;
  span:            'normal' | 'wide' | 'tall';
  /** Production photography path — relative to /public. Empty string until image is sourced. */
  imageSrc:        string;
  /** Alt text for the gallery image */
  imageAlt:        string;
  placeholderFrom: string;
  placeholderTo:   string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id:              'g1',
    label:           'Maasai Mara at Dawn',
    span:            'wide',
    imageSrc:        '/images/homepage/gallery/img-041-gallery-mara-dawn-wide.jpg',
    imageAlt:        'Dawn mist rising over the Maasai Mara, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'g2',
    label:           'Mountain Gorilla, Rwanda',
    span:            'tall',
    imageSrc:        '/images/homepage/gallery/img-015-mountain-gorilla-silverback.jpg',
    imageAlt:        'Mountain gorilla in Volcanoes National Park, Rwanda',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'g3',
    label:           'Serengeti Sunset',
    span:            'normal',
    imageSrc:        '/images/homepage/gallery/img-012-acacia-sunset-silhouette.jpg',
    imageAlt:        'The Serengeti at golden hour, Tanzania',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
  },
  {
    id:              'g4',
    label:           'Elephant, Amboseli',
    span:            'normal',
    imageSrc:        '/images/homepage/gallery/img-017-elephant-amboseli-kilimanjaro.jpg',
    imageAlt:        'African elephant family in Amboseli, Kenya',
    placeholderFrom: '#4F4A44',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'g5',
    label:           'Ngorongoro Crater',
    span:            'normal',
    imageSrc:        '/images/homepage/gallery/img-009-ngorongoro-crater-floor.jpg',
    imageAlt:        'Wildlife on the floor of the Ngorongoro Crater, Tanzania',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'g6',
    label:           'Zanzibar, Indian Ocean',
    span:            'normal',
    imageSrc:        '/images/homepage/gallery/img-008-zanzibar-indian-ocean.jpg',
    imageAlt:        'Turquoise Indian Ocean waters, Zanzibar',
    placeholderFrom: '#839A73',
    placeholderTo:   '#282C22',
  },
];

export const GALLERY_SECTION = {
  eyebrow:  'Life in the Field',
  headline: 'Africa through\nour lens',
  body:     'Placeholder gallery — real photography will be added prior to launch.',
  cta:      { label: 'View Full Gallery', href: '/gallery' },
} as const;

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────

export interface FAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id:       'faq-1',
    question: 'How far in advance should I book a safari?',
    answer:   'We recommend booking at least six to twelve months in advance, particularly for peak season travel (July to October for the Great Migration) and gorilla trekking permits, which are limited and in high demand. That said, we can sometimes accommodate shorter lead times — contact us to discuss your needs.',
  },
  {
    id:       'faq-2',
    question: 'What is the best time of year to visit East Africa?',
    answer:   'The dry seasons — January to March and June to October — generally offer the best game viewing as animals congregate around water sources. However, different destinations peak at different times. The Great Migration river crossings typically occur July to September in the Maasai Mara. We will advise the optimal timing for your chosen destinations and interests.',
  },
  {
    id:       'faq-3',
    question: 'Are your itineraries truly bespoke, or are they based on set tours?',
    answer:   'Every itinerary we design is built from scratch around you — your interests, travel style, group size, and budget. We use our deep knowledge of each destination to create a journey that is entirely original. We do not operate group departures or fixed tour schedules.',
  },
  {
    id:       'faq-4',
    question: 'What level of accommodation do you offer?',
    answer:   'We work exclusively with handpicked lodges, tented camps, and private conservancy properties that meet our standards for location, design, and service. Our portfolio ranges from intimate owner-run camps to iconic five-star lodges — and everything in between. We match accommodation to your preferences and budget.',
  },
  {
    id:       'faq-5',
    question: 'Is safari travel safe?',
    answer:   'Africa\'s premier safari destinations are safe and well-managed environments visited by hundreds of thousands of travellers each year. We work exclusively with reputable lodges and guide operations, provide comprehensive pre-departure information, and maintain 24/7 support throughout your journey. We also recommend comprehensive travel insurance.',
  },
  {
    id:       'faq-6',
    question: 'Do you cater for families with young children?',
    answer:   'Absolutely. We design family safaris specifically around the ages and interests of your children — selecting child-friendly lodges, age-appropriate activities, and experienced family guides. Many of our partner properties offer dedicated family programmes and bush education for younger guests.',
  },
];

export const FAQ_SECTION = {
  eyebrow:  'Common Questions',
  headline: 'Everything you\nneed to know',
  body:     'Our team is always happy to answer any questions not covered here.',
  cta:      { label: 'Contact Us', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Final CTA
// ─────────────────────────────────────────────

export const FINAL_CTA_CONTENT = {
  eyebrow:     'Your Safari Awaits',
  headline:    'Let\'s start\nplanning',
  body:        'Share your dream and we\'ll do the rest. A dedicated safari specialist will be in touch within 24 hours.',
  primaryCTA:  { label: 'Get in Touch',        href: '/contact' },
  secondaryCTA:{ label: 'Browse All Journeys', href: '/packages' },
  detail:      'No obligation. No hard sell. Just great safari planning.',
} as const;

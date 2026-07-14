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
  secondaryCTA: { label: 'Explore Journeys',  href: '/journeys' },
} as const;

// ─────────────────────────────────────────────
// Introduction
// ─────────────────────────────────────────────

export const INTRO_CONTENT = {
  eyebrow:   'Our Philosophy',
  headline:  'Journeys as singular\nas the landscapes\nthat inspire them',
  body: [
    'Rêve Africa Safaris was founded on a single conviction: that truly extraordinary travel demands extraordinary attention to detail. We do not operate tours. We design experiences — crafted around you, your rhythm, and the Africa you wish to discover.',
    'From the great migrations of the Maasai Mara to the mountain gorillas of Rwanda, from the salt pans of Botswana to the peaks of Kilimanjaro — each journey we build is an original. Private guides, exclusive camps, and a commitment to conservation that ensures the wilderness endures.',
  ],
  stats: [
    { value: '15+',  label: 'Years of experience' },
    { value: '6',    label: 'Countries' },
    { value: '100%', label: 'Bespoke itineraries' },
    { value: '4.9',  label: 'Guest satisfaction' },
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
  /** Placeholder gradient stop colours used until real photography is added */
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
    href:        '/destinations/kenya',
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
    href:        '/destinations/tanzania',
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
    href:        '/destinations/uganda',
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
    href:        '/destinations/rwanda',
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
  secondaryCTA:{ label: 'View All Journeys', href: '/journeys' },
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
    href:            '/experiences/luxury-safaris',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'photography',
    icon:            'Camera',
    title:           'Photography Expeditions',
    description:     'Specialist photography safaris with expert guidance, optimal positioning, and unhurried time in the field.',
    href:            '/experiences/photography',
    placeholderFrom: '#4F4A44',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'family',
    icon:            'Users',
    title:           'Family Adventures',
    description:     'Safari experiences designed for families — age-appropriate activities, specialist guides, and memories that last a lifetime.',
    href:            '/experiences/family',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'honeymoon',
    icon:            'Heart',
    title:           'Honeymoon Escapes',
    description:     'Romantic bush retreats, private plunge pools, sundowner cocktails, and the magic of the African wilderness.',
    href:            '/experiences/honeymoon',
    placeholderFrom: '#B5A26A',
    placeholderTo:   '#495C3D',
  },
  {
    id:              'cultural',
    icon:            'Globe',
    title:           'Cultural Journeys',
    description:     'Deep cultural immersion — Maasai villages, Swahili coast heritage, and authentic encounters with Africa\'s diverse peoples.',
    href:            '/experiences/cultural',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'beach',
    icon:            'Waves',
    title:           'Beach Holidays',
    description:     'Combine the thrill of the bush with the Indian Ocean\'s turquoise waters — Zanzibar, Lamu, and the Kenyan coast await.',
    href:            '/experiences/beach',
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
    href:            '/journeys/mara-migration',
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
    href:            '/journeys/serengeti-secrets',
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
    href:            '/journeys/gorilla-highlands',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
];

export const PACKAGES_SECTION = {
  eyebrow:  'Featured Journeys',
  headline: 'Carefully crafted\nitineraries',
  body:     'Each package is a starting point — a framework built from years of experience that we then tailor entirely to you.',
  viewAll:  { label: 'View All Journeys', href: '/journeys' },
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
    title:       'Tailor-made Itineraries',
    description: 'Every journey is designed from scratch around your interests, travel style, and budget. No two safaris are ever the same.',
  },
  {
    id:          'accommodation',
    icon:        'Gem',
    title:       'Handpicked Lodges',
    description: 'We partner exclusively with lodges and camps that meet our exacting standards — for location, design, hospitality, and conservation.',
  },
  {
    id:          'guides',
    icon:        'Binoculars',
    title:       'Expert Local Guides',
    description: 'Our guides are among the finest in Africa — deeply knowledgeable, passionate, and dedicated to delivering transformative experiences.',
  },
  {
    id:          'sustainability',
    icon:        'Leaf',
    title:       'Sustainable Tourism',
    description: 'We are committed to low-impact travel, conservation partnerships, and ensuring that tourism benefits the communities around the parks.',
  },
  {
    id:          'support',
    icon:        'Shield',
    title:       '24/7 In-Journey Support',
    description: 'From the moment you depart to the moment you return, our team is available around the clock to ensure everything runs perfectly.',
  },
  {
    id:          'experience',
    icon:        'Star',
    title:       'Decades of Expertise',
    description: 'With over fifteen years operating across East Africa, we have the relationships, knowledge, and experience to deliver the exceptional.',
  },
];

export const WHY_US_SECTION = {
  eyebrow:  'Why Rêve Africa',
  headline: 'Every detail\nconsidered',
  body:     'We are not a booking platform. We are safari specialists — and everything we do reflects that commitment.',
} as const;

// ─────────────────────────────────────────────
// Statistics
// ─────────────────────────────────────────────

export interface StatisticData {
  value:   string;
  label:   string;
  suffix?: string;
}

export const STATISTICS: StatisticData[] = [
  { value: '15', label: 'Years of expertise',     suffix: '+' },
  { value: '28', label: 'Safari destinations',    suffix: '+' },
  { value: '3,200', label: 'Journeys delivered',  suffix: '+' },
  { value: '96', label: 'Partner lodges & camps', suffix: '+' },
];

export const STATISTICS_SECTION = {
  eyebrow:  'By the Numbers',
  headline: 'Trusted by travellers\nacross the world',
} as const;

// ─────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────

export interface TestimonialData {
  id:       string;
  quote:    string;
  author:   string;
  location: string;
  journey:  string;
  rating:   number;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id:       'testimonial-1',
    quote:    'Rêve Africa designed a journey that exceeded every expectation. From the moment we landed to our final sundowner in the Mara, every detail was perfect. This is how safari should be experienced.',
    author:   'Placeholder Guest A',
    location: 'London, United Kingdom',
    journey:  'Mara Migration Safari, Kenya',
    rating:   5,
  },
  {
    id:       'testimonial-2',
    quote:    'We have travelled extensively across Africa, but nothing compared to our gorilla trekking experience in Rwanda. The guides\' knowledge was extraordinary. We will absolutely return.',
    author:   'Placeholder Guest B',
    location: 'New York, United States',
    journey:  'Gorilla Highlands, Rwanda & Uganda',
    rating:   5,
  },
  {
    id:       'testimonial-3',
    quote:    'Planning a safari with three children felt daunting. The Rêve Africa team made every concern disappear. Our family came home transformed. It is, without question, the best holiday we have ever taken.',
    author:   'Placeholder Guest C',
    location: 'Sydney, Australia',
    journey:  'Family Adventure, Tanzania',
    rating:   5,
  },
];

export const TESTIMONIALS_SECTION = {
  eyebrow:  'Guest Experiences',
  headline: 'Words from\nour travellers',
  note:     'These are placeholder testimonials. Real guest reviews will be added prior to launch.',
} as const;

// ─────────────────────────────────────────────
// Gallery Preview
// ─────────────────────────────────────────────

export interface GalleryItem {
  id:              string;
  label:           string;
  span:            'normal' | 'wide' | 'tall';
  placeholderFrom: string;
  placeholderTo:   string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', label: 'Maasai Mara at Dawn',     span: 'wide',   placeholderFrom: '#9E8B4D', placeholderTo: '#363B2D' },
  { id: 'g2', label: 'Mountain Gorilla, Rwanda', span: 'tall',   placeholderFrom: '#495C3D', placeholderTo: '#131510' },
  { id: 'g3', label: 'Serengeti Sunset',         span: 'normal', placeholderFrom: '#7D6D3A', placeholderTo: '#282C22' },
  { id: 'g4', label: 'Elephant, Amboseli',       span: 'normal', placeholderFrom: '#4F4A44', placeholderTo: '#0C0D0B' },
  { id: 'g5', label: 'Ngorongoro Crater',        span: 'normal', placeholderFrom: '#627A53', placeholderTo: '#1C1F18' },
  { id: 'g6', label: 'Zanzibar, Indian Ocean',   span: 'normal', placeholderFrom: '#839A73', placeholderTo: '#282C22' },
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
  secondaryCTA:{ label: 'Browse All Journeys', href: '/journeys' },
  detail:      'No obligation. No hard sell. Just great safari planning.',
} as const;

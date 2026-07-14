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

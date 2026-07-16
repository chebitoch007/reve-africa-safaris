/**
 * RÊVE AFRICA SAFARIS — Safari Packages (Journeys) Page Content Constants
 *
 * All copy, data, and content for the /packages page lives here.
 * Components import from this file — never hardcode content in JSX.
 *
 * Note on PackageData: The PackageData interface and FEATURED_PACKAGES array
 * used on the homepage live in homepage.ts. This file extends the catalogue
 * with additional packages and page-specific content. There is intentional
 * separation — homepage shows a curated preview; this page shows the full set.
 */

import type { PackageData } from '@/lib/constants/homepage';

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const PACKAGES_HERO = {
  eyebrow:    'Safari Journeys',
  headline:   'Itineraries built\naround wonder,\nnot convenience',
  subheadline: 'Every journey we offer has been walked, driven, and lived — refined over years of guiding guests across East and Southern Africa.',
  primaryCTA:  { label: 'Enquire About a Journey', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Journey Introduction
// ─────────────────────────────────────────────

export const JOURNEY_INTRO = {
  eyebrow:  'Our Philosophy',
  headline: 'No two journeys\nare the same —\nand they never\nshould be',
  body: [
    'Most safari operators start with logistics: where can we get a vehicle, which lodge has availability, what\'s the easiest route. We start with a different question: what would make this journey truly extraordinary for this particular person?',
    'The result is an approach that feels less like tour operating and more like having a deeply knowledgeable friend plan the trip of a lifetime. Our itineraries are starting points — refined through conversation until they become uniquely yours.',
  ],
  stat1: { value: '15+',  label: 'Years of experience' },
  stat2: { value: '800+', label: 'Journeys designed' },
  stat3: { value: '6',    label: 'Countries we know deeply' },
} as const;

// ─────────────────────────────────────────────
// All Packages (full catalogue for this page)
// ─────────────────────────────────────────────
// These extend the three homepage packages with additional journeys.
// PackageData is imported from homepage.ts — no interface duplication.

export const ALL_PACKAGES: PackageData[] = [
  {
    id:              'mara-migration',
    name:            'Mara Migration Safari',
    duration:        '8 Days',
    destination:     'Kenya',
    region:          'Maasai Mara',
    description:     'Witness the Great Migration at its most dramatic — millions of wildebeest crossing the Mara River in an ancient spectacle of survival.',
    highlights:      ['Private game drives', 'River crossing viewpoints', 'Luxury tented camp', 'Maasai cultural visit'],
    startingFrom:    'From USD 6,500 per person',
    href:            '/contact',
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
    href:            '/contact',
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
    href:            '/contact',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'botswana-immersion',
    name:            'Botswana Immersion',
    duration:        '12 Days',
    destination:     'Botswana',
    region:          'Okavango & Chobe',
    description:     'The Okavango Delta by mokoro canoe, Chobe\'s legendary elephant herds by boat, and the silence of the Kalahari under a vast night sky.',
    highlights:      ['Okavango mokoro excursions', 'Chobe river safaris', 'Private island camp', 'Kalahari night drives'],
    startingFrom:    'From USD 10,500 per person',
    href:            '/contact',
    placeholderFrom: '#B8A44A',
    placeholderTo:   '#4A3F1E',
    badge:           'Exclusive',
  },
  {
    id:              'east-africa-grand',
    name:            'East Africa Grand Tour',
    duration:        '14 Days',
    destination:     'Kenya & Tanzania',
    region:          'Multi-destination',
    description:     'The definitive East African journey — Amboseli\'s elephants, the Mara at peak migration, Serengeti\'s endless plains, and Ngorongoro\'s ancient crater.',
    highlights:      ['Amboseli elephant herds', 'Mara river crossings', 'Serengeti balloon flight', 'Ngorongoro crater descent'],
    startingFrom:    'From USD 13,500 per person',
    href:            '/contact',
    placeholderFrom: '#C4A35A',
    placeholderTo:   '#282C22',
  },
  {
    id:              'desert-dunes-namibia',
    name:            'Desert & Dunes of Namibia',
    duration:        '9 Days',
    destination:     'Namibia',
    region:          'Namib & Etosha',
    description:     'The world\'s oldest desert, towering red dunes at Sossusvlei, desert-adapted wildlife in Damaraland, and the wildlife theatre of Etosha.',
    highlights:      ['Sossusvlei dune walks at dawn', 'Desert-adapted elephant tracking', 'Etosha waterhole game drives', 'Skeleton Coast flyover'],
    startingFrom:    'From USD 7,200 per person',
    href:            '/contact',
    placeholderFrom: '#C4A35A',
    placeholderTo:   '#5C3F20',
  },
] as const;

export const ALL_PACKAGES_SECTION = {
  eyebrow:  'Our Journeys',
  headline: 'Six curated\nSafari journeys',
  body:     'Each itinerary below is a proven journey — tested, refined, and loved. Every one can be adjusted, extended, or combined with other destinations to create your perfect trip.',
} as const;

// ─────────────────────────────────────────────
// Journey Categories
// ─────────────────────────────────────────────

export interface JourneyCategory {
  id:          string;
  icon:        string;
  title:       string;
  description: string;
  href:        string;
}

export const JOURNEY_CATEGORIES: JourneyCategory[] = [
  {
    id:          'luxury',
    icon:        'Gem',
    title:       'Luxury Safari',
    description: 'Private vehicles, intimate camps, and guiding teams dedicated to your group alone. Comfort without compromise.',
    href:        '/contact',
  },
  {
    id:          'migration',
    icon:        'Footprints',
    title:       'Great Migration',
    description: 'Timed to the annual movement of 1.5 million wildebeest across the Serengeti-Mara ecosystem. River crossings included.',
    href:        '/contact',
  },
  {
    id:          'gorilla',
    icon:        'TreePine',
    title:       'Gorilla Trekking',
    description: 'Rare mountain gorilla encounters in Rwanda and Uganda. Permit allocation and specialist guide included.',
    href:        '/contact',
  },
  {
    id:          'honeymoon',
    icon:        'Heart',
    title:       'Honeymoon Safari',
    description: 'Romantic private camps, candlelit bush dinners, and experiences crafted for two. Unforgettable beginnings.',
    href:        '/contact',
  },
  {
    id:          'photography',
    icon:        'Camera',
    title:       'Photography Expedition',
    description: 'Extended game drives in optimal light, specialist photographic guides, and exclusive access to the best positions.',
    href:        '/contact',
  },
  {
    id:          'family',
    icon:        'Users',
    title:       'Family Safari',
    description: 'Multi-generational journeys designed to engage children and adults equally. Age-appropriate activities throughout.',
    href:        '/contact',
  },
  {
    id:          'beach-bush',
    icon:        'Waves',
    title:       'Beach & Bush',
    description: 'Combine a classic East African safari with the turquoise waters of Zanzibar or the Kenyan coast. The perfect combination.',
    href:        '/contact',
  },
  {
    id:          'tailor-made',
    icon:        'Pencil',
    title:       'Tailor-Made Journey',
    description: 'Nothing in our catalogue matches your vision? We design from a blank page. Tell us what you imagine.',
    href:        '/contact',
  },
] as const;

export const CATEGORIES_SECTION = {
  eyebrow:  'Journey Types',
  headline: 'A journey for\nevery kind of\ntraveller',
  body:     'Whatever brings you to Africa — a lifelong dream, a milestone anniversary, or sheer curiosity — we have designed journeys that speak to it.',
} as const;

// ─────────────────────────────────────────────
// Signature Itinerary Showcase
// ─────────────────────────────────────────────

export const SIGNATURE_ITINERARY = {
  eyebrow:      'Signature Journey',
  label:        'The East Africa Grand Tour',
  duration:     '14 Days',
  countries:    'Kenya & Tanzania',
  headline:     'The journey that\ndefines East\nAfrican safari',
  body:         'This is the itinerary we would design for ourselves — unhurried, deeply immersive, and built around the moments that only Africa can provide. Fourteen days that move between very different landscapes and emotions, from the gentle giants of Amboseli to the drama of the Mara river crossings.',
  itinerary: [
    {
      day:         'Days 1–2',
      title:       'Arrival & Amboseli',
      description: 'Private transfer to Amboseli National Park. Two nights at a luxury camp with Kilimanjaro as backdrop. Afternoon and morning game drives focused on the famous elephant families.',
    },
    {
      day:         'Days 3–5',
      title:       'Maasai Mara',
      description: 'Fly to the Mara. Three nights in a private conservancy camp with exclusive game-drive access. River crossing positioning during peak migration season (Jul–Oct).',
    },
    {
      day:         'Days 6–8',
      title:       'Serengeti Plains',
      description: 'Cross into Tanzania. Three nights in the central Serengeti following the migration circuit. Early morning drives when predator activity peaks and the light is extraordinary.',
    },
    {
      day:         'Days 9–11',
      title:       'Ngorongoro & Tarangire',
      description: 'Descend into the Ngorongoro Crater for a full-day game drive within this ancient caldera. Continue to Tarangire for its baobab-scattered plains and vast elephant herds.',
    },
    {
      day:         'Days 12–14',
      title:       'Zanzibar',
      description: 'Optional beach extension: three nights on the island of Zanzibar. Stone Town exploration, pristine beaches, and the perfect decompression after the intensity of the bush.',
    },
  ],
  href:         '/contact',
  placeholderFrom: '#9E8B4D',
  placeholderTo:   '#1C1F18',
} as const;

// ─────────────────────────────────────────────
// What's Included
// ─────────────────────────────────────────────

export interface InclusionItem {
  id:          string;
  title:       string;
  description: string;
  included:    boolean;
}

export const INCLUSIONS: InclusionItem[] = [
  {
    id:          'accommodation',
    title:       'Luxury Accommodation',
    description: 'All nights in hand-selected lodges and camps. Every property is personally vetted by our team.',
    included:    true,
  },
  {
    id:          'meals',
    title:       'Full Board',
    description: 'All meals from arrival dinner to departure breakfast. Bush dinners and private breakfasts included where camps offer them.',
    included:    true,
  },
  {
    id:          'guiding',
    title:       'Expert Guiding',
    description: 'A dedicated safari guide throughout, supplemented by specialist naturalists in key areas.',
    included:    true,
  },
  {
    id:          'game-drives',
    title:       'All Game Activities',
    description: 'Twice-daily game drives in private vehicles, plus all walking safaris, boat trips, and specialist activities.',
    included:    true,
  },
  {
    id:          'transfers',
    title:       'Internal Flights & Transfers',
    description: 'All light aircraft transfers between destinations and ground transfers to/from lodges.',
    included:    true,
  },
  {
    id:          'park-fees',
    title:       'Park Fees & Conservation Levies',
    description: 'All national park entry fees, conservancy fees, and conservation levies.',
    included:    true,
  },
  {
    id:          'international-flights',
    title:       'International Flights',
    description: 'International flights to/from Africa are not included. We can advise on routing and airlines.',
    included:    false,
  },
  {
    id:          'visas',
    title:       'Visas & Travel Insurance',
    description: 'Visa fees and comprehensive travel insurance are not included. Both are required.',
    included:    false,
  },
] as const;

export const INCLUSIONS_SECTION = {
  eyebrow:  'What\'s Included',
  headline: 'Everything you\nneed — nothing\nyou don\'t',
  body:     'Our journey prices are designed to be genuinely all-inclusive within Africa. The only additions are international flights and visa fees.',
} as const;

// ─────────────────────────────────────────────
// Custom Journey / Bespoke Planning
// ─────────────────────────────────────────────

export const BESPOKE_SECTION = {
  eyebrow:  'Bespoke Planning',
  headline: 'Nothing in our\ncatalogue feels\nquite right?',
  body:     'Our catalogue represents journeys we believe in — but it is not exhaustive. We have designed journeys for single travellers, multi-generational families of twenty, professional photographers, wildlife researchers, and people celebrating every kind of occasion. If you have a vision, bring it to us.',
  steps: [
    {
      id:          'step-1',
      number:      '01',
      title:       'Tell us your vision',
      description: 'A single email or phone call. Tell us where you want to go, when, for how long, and what you hope to feel on this journey.',
    },
    {
      id:          'step-2',
      number:      '02',
      title:       'We design',
      description: 'Within 48 hours, a dedicated specialist will draft a bespoke itinerary — with options, alternatives, and an honest assessment of the best time to travel.',
    },
    {
      id:          'step-3',
      number:      '03',
      title:       'We refine together',
      description: 'We iterate until every detail is exactly right. Most itineraries take two to three rounds of refinement. There is no pressure and no obligation.',
    },
    {
      id:          'step-4',
      number:      '04',
      title:       'We take care of everything',
      description: 'From permits and park bookings to private aircraft and lodge arrangements — every detail is managed by us, so you simply arrive and experience.',
    },
  ],
  cta: { label: 'Begin Planning', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Packages FAQ
// ─────────────────────────────────────────────

export interface PackagesFAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const PACKAGES_FAQ_ITEMS: PackagesFAQItem[] = [
  {
    id:       'pfaq-1',
    question: 'How far in advance should I book?',
    answer:   'For peak season travel (July–October for Kenya and Tanzania, June–September for Botswana), we recommend booking nine to twelve months in advance. Gorilla trekking permits — especially for the full habituation experience in Uganda — should be secured at least a year ahead. For shoulder and green season travel, three to six months is usually sufficient.',
  },
  {
    id:       'pfaq-2',
    question: 'Are the prices per person or per journey?',
    answer:   'All prices shown are per person, based on double occupancy. Single supplement applies for solo travellers. Prices include everything within Africa as described under "What\'s Included" — accommodation, all meals, game activities, internal flights, and park fees. International flights are additional.',
  },
  {
    id:       'pfaq-3',
    question: 'Can the itineraries be modified?',
    answer:   'Every itinerary is a starting point. We can extend any journey, swap destinations, adjust the pace, add a beach extension, or combine two itineraries into one longer trip. Our specialists will work with you until the journey matches exactly what you\'re looking for.',
  },
  {
    id:       'pfaq-4',
    question: 'What is the minimum group size?',
    answer:   'There is no minimum. We regularly design journeys for solo travellers, couples, and small families. For private vehicles and exclusive access, two or more guests are ideal but not required. Larger groups can be accommodated with advance planning.',
  },
  {
    id:       'pfaq-5',
    question: 'Are children welcome on safari?',
    answer:   'Absolutely — and we design wonderful family safaris. Most properties we work with accommodate children from five years old; some from birth in family suites. We build in age-appropriate activities and ensure pace is comfortable for younger guests. Please let us know children\'s ages when enquiring.',
  },
] as const;

export const PACKAGES_FAQ_SECTION = {
  eyebrow:  'Journey Questions',
  headline: 'Everything you\nneed to know\nbefore you go',
  body:     'Our specialists are available to answer any question not covered here.',
  cta:      { label: 'Ask a Specialist', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// Final CTA
// ─────────────────────────────────────────────

export const PACKAGES_CTA = {
  eyebrow:      'Begin Your Journey',
  headline:     'The Africa you\nare imagining\nexists',
  body:         'Every journey begins with a single conversation. Tell us your vision — we will take care of the rest.',
  primaryCTA:   { label: 'Plan My Safari',       href: '/contact' },
  secondaryCTA: { label: 'View Destinations',    href: '/destinations' },
  detail:       'No deposit required to begin planning. A specialist responds within 24 hours.',
} as const;

// ─────────────────────────────────────────────
// Accommodation Standards
// ─────────────────────────────────────────────

export interface AccommodationStandard {
  id:          string;
  tier:        string;
  title:       string;
  description: string;
  examples:    readonly string[];
  placeholderFrom: string;
  placeholderTo:   string;
}

export const ACCOMMODATION_STANDARDS: AccommodationStandard[] = [
  {
    id:              'classic-luxury',
    tier:            'Classic Luxury',
    title:           'Established camps & lodges',
    description:     'The gold standard of safari accommodation — permanent tented camps and stone lodges with ensuite bathrooms, quality linens, and guiding teams who know every inch of their territory.',
    examples:        ['Angama Mara, Kenya', 'Singita Grumeti, Tanzania', 'Mombo Camp, Botswana'],
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'private-exclusive',
    tier:            'Private & Exclusive',
    title:           'Private houses & exclusive-use camps',
    description:     'Entire properties reserved for your group alone. A dedicated team, a vehicle, and a piece of Africa that belongs, briefly, entirely to you.',
    examples:        ['Mahali Mzuri, Kenya', 'Roho ya Selous, Tanzania', 'Duba Plains Camp, Botswana'],
    placeholderFrom: '#B8A44A',
    placeholderTo:   '#4A3F1E',
  },
  {
    id:              'mobile-expedition',
    tier:            'Mobile & Expedition',
    title:           'Mobile camps that follow the action',
    description:     'Repositioned seasonally to keep guests at the heart of wildlife events. Lightweight luxury — the essence of safari without compromise on comfort.',
    examples:        ['Serengeti Under Canvas', 'Ol Donyo Walking Camp', 'Makgadikgadi Migration Camp'],
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
] as const;

export const ACCOMMODATION_SECTION = {
  eyebrow:  'Where You Stay',
  headline: 'Three tiers of\nluxury — all\nexceptional',
  body:     'Every property we place guests in has been personally assessed by our team. We look beyond star ratings to judge what matters: guiding excellence, ecological sensitivity, food quality, and — above all — location.',
} as const;

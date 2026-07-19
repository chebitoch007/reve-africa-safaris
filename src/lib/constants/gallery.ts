/**
 * RÊVE AFRICA SAFARIS — Gallery Page Constants
 *
 * All content data for the /gallery page.
 * Components must not contain any hardcoded copy.
 *
 * Page sections (8 total):
 *  1. GalleryHero          — dark editorial hero
 *  2. GalleryIntro         — two-column philosophy intro
 *  3. GalleryGrid          — masonry-style full photo grid (main content)
 *  4. BehindTheLens        — photographer notes / editorial vignettes
 *  5. ConservationNote     — photography ethics & conservation context
 *  6. GalleryCategories    — filter categories (visual only, no JS filter)
 *  7. GalleryFAQ           — accordion FAQ
 *  8. GalleryCTA           — closing call to action
 */

import { GalleryItem } from '@/lib/constants/homepage';

// ─────────────────────────────────────────────
// Re-export GalleryItem for use in gallery components
// ─────────────────────────────────────────────
export type { GalleryItem };

// ─────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────

export const GALLERY_HERO = {
  eyebrow:    'Visual Stories',
  headline:   'Africa through\nour lens',
  subheadline: 'Photography from the field — every frame a moment of stillness in the wild.',
} as const;

// ─────────────────────────────────────────────
// 2. Gallery Intro
// ─────────────────────────────────────────────

export const GALLERY_INTRO = {
  eyebrow:  'Life in the Field',
  headline: 'Stories told\nin light',
  body: [
    'Every image in this gallery was captured by our guides and photography specialists during real expeditions across East and Southern Africa. These are not stock photographs — they are moments witnessed first-hand.',
    'We believe that great wildlife photography requires patience, knowledge, and respect for the subject. Our guides know when to hold still, when to wait, and when a scene needs no intervention at all.',
  ],
  stat: {
    value: '6',
    label: 'Countries',
    note:  'Kenya · Tanzania · Botswana · Rwanda · Zimbabwe · Namibia',
  },
} as const;

// ─────────────────────────────────────────────
// 3. Full Gallery Grid
// ─────────────────────────────────────────────

export interface FullGalleryItem {
  id:              string;
  label:           string;
  category:        GalleryCategory;
  location:        string;
  imageSrc:        string;
  imageAlt:        string;
  span:            'normal' | 'wide' | 'tall';
  placeholderFrom: string;
  placeholderTo:   string;
}

export type GalleryCategory =
  | 'wildlife'
  | 'landscapes'
  | 'culture'
  | 'conservation'
  | 'aerial'
  | 'intimate';

export const GALLERY_GRID_ITEMS: FullGalleryItem[] = [
  {
    id:              'fg-01',
    label:           'Maasai Mara at Dawn',
    category:        'landscapes',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-041-gallery-mara-dawn-wide.jpg',
    imageAlt:        'Dawn mist rising over the Maasai Mara, Kenya',
    span:            'wide',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'fg-02',
    label:           'Mountain Gorilla, Volcanoes',
    category:        'wildlife',
    location:        'Rwanda',
    imageSrc:        '/images/gallery/grid/img-015-mountain-gorilla-silverback.jpg',
    imageAlt:        'Mountain gorilla in Volcanoes National Park, Rwanda',
    span:            'tall',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'fg-03',
    label:           'Serengeti Sunset',
    category:        'landscapes',
    location:        'Tanzania',
    imageSrc:        '/images/gallery/grid/img-012-acacia-sunset-silhouette.jpg',
    imageAlt:        'Acacia tree silhouetted against a blazing East African sunset',
    span:            'normal',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#282C22',
  },
  {
    id:              'fg-04',
    label:           'Elephant, Amboseli',
    category:        'wildlife',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-017-elephant-amboseli-kilimanjaro.jpg',
    imageAlt:        'African elephant family in Amboseli, Kenya',
    span:            'normal',
    placeholderFrom: '#4F4A44',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'fg-05',
    label:           'Ngorongoro Crater',
    category:        'landscapes',
    location:        'Tanzania',
    imageSrc:        '/images/gallery/grid/img-009-ngorongoro-crater-floor.jpg',
    imageAlt:        'Wildlife on the floor of the Ngorongoro Crater, Tanzania',
    span:            'normal',
    placeholderFrom: '#627A53',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'fg-06',
    label:           'Zanzibar, Indian Ocean',
    category:        'landscapes',
    location:        'Tanzania',
    imageSrc:        '/images/gallery/grid/img-008-zanzibar-indian-ocean.jpg',
    imageAlt:        'Turquoise Indian Ocean waters, Zanzibar',
    span:            'wide',
    placeholderFrom: '#839A73',
    placeholderTo:   '#282C22',
  },
  {
    id:              'fg-07',
    label:           'Leopard at Rest, Samburu',
    category:        'wildlife',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-019-leopard-acacia-samburu.jpg',
    imageAlt:        'Leopard resting in an acacia tree, Samburu National Reserve, Kenya',
    span:            'normal',
    placeholderFrom: '#8F7A3A',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'fg-08',
    label:           'Okavango Delta, Aerial',
    category:        'aerial',
    location:        'Botswana',
    imageSrc:        '/images/gallery/grid/img-006-okavango-delta-aerial.jpg',
    imageAlt:        'Aerial view of the Okavango Delta waterways, Botswana',
    span:            'tall',
    placeholderFrom: '#4A6B4A',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'fg-09',
    label:           'Maasai Elder',
    category:        'culture',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-024-maasai-elder-portrait.jpg',
    imageAlt:        'Maasai elder in traditional red shuka against the Maasai Mara, Kenya',
    span:            'normal',
    placeholderFrom: '#7B3B2A',
    placeholderTo:   '#2C1A14',
  },
  {
    id:              'fg-10',
    label:           'Cheetah, Ol Pejeta',
    category:        'conservation',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-021-cheetah-ol-pejeta.jpg',
    imageAlt:        'Cheetah in the Ol Pejeta Conservancy, Kenya',
    span:            'normal',
    placeholderFrom: '#A08040',
    placeholderTo:   '#282C22',
  },
  {
    id:              'fg-11',
    label:           'Lion Pride at Dusk',
    category:        'wildlife',
    location:        'Tanzania',
    imageSrc:        '/images/gallery/grid/img-020-lion-pride-dusk.jpg',
    imageAlt:        'Lion pride resting at dusk on the Serengeti plains, Tanzania',
    span:            'wide',
    placeholderFrom: '#6B4A1C',
    placeholderTo:   '#1C1510',
  },
  {
    id:              'fg-12',
    label:           'Wildebeest Migration',
    category:        'wildlife',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-014-wildebeest-mara-crossing.jpg',
    imageAlt:        'Wildebeest crossing the Mara River during the Great Migration, Kenya',
    span:            'normal',
    placeholderFrom: '#5A6040',
    placeholderTo:   '#131510',
  },
  {
    id:              'fg-13',
    label:           'Rhino, Etosha',
    category:        'conservation',
    location:        'Namibia',
    imageSrc:        '/images/gallery/grid/img-022-black-rhino-etosha.jpg',
    imageAlt:        'Black rhinoceros at a waterhole in Etosha National Park, Namibia',
    span:            'normal',
    placeholderFrom: '#7A7060',
    placeholderTo:   '#282C22',
  },
  {
    id:              'fg-14',
    label:           'Victoria Falls',
    category:        'landscapes',
    location:        'Zimbabwe',
    imageSrc:        '/images/gallery/grid/img-010-victoria-falls-zimbabwe.jpg',
    imageAlt:        'Victoria Falls in full flow, Zimbabwe',
    span:            'normal',
    placeholderFrom: '#3A6060',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'fg-15',
    label:           'Balloon Safari, Serengeti',
    category:        'aerial',
    location:        'Tanzania',
    imageSrc:        '/images/gallery/grid/img-003-balloon-serengeti-dawn.jpg',
    imageAlt:        'Hot air balloon at dawn over the Serengeti plains, Tanzania',
    span:            'wide',
    placeholderFrom: '#D4A017',
    placeholderTo:   '#363B2D',
  },
  {
    id:              'fg-16',
    label:           'Hippo Pool at Sunset',
    category:        'intimate',
    location:        'Kenya',
    imageSrc:        '/images/gallery/grid/img-023-hippo-pool-sunset.jpg',
    imageAlt:        'Hippos in a sunset pool on the Maasai Mara, Kenya',
    span:            'normal',
    placeholderFrom: '#4A3030',
    placeholderTo:   '#1C1510',
  },
  {
    id:              'fg-17',
    label:           'Gorilla Mother & Infant',
    category:        'intimate',
    location:        'Rwanda',
    imageSrc:        '/images/gallery/grid/img-016-gorilla-mother-infant.jpg',
    imageAlt:        'Mountain gorilla mother and infant in Volcanoes National Park, Rwanda',
    span:            'tall',
    placeholderFrom: '#3A4A3A',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'fg-18',
    label:           'Deception Valley, Dunes',
    category:        'landscapes',
    location:        'Botswana',
    imageSrc:        '/images/gallery/grid/img-011-kalahari-desert-botswana.jpg',
    imageAlt:        'Ancient dunes and desert landscape of the Kalahari, Botswana',
    span:            'normal',
    placeholderFrom: '#B38612',
    placeholderTo:   '#282C22',
  },
];

export const GALLERY_GRID_SECTION = {
  eyebrow:  'The Collection',
  headline: 'Moments from\nthe field',
} as const;

// ─────────────────────────────────────────────
// 4. Behind the Lens
// ─────────────────────────────────────────────

export interface LensVignette {
  id:              string;
  quote:           string;
  credit:          string;
  role:            string;
  imageSrc:        string;
  imageAlt:        string;
  placeholderFrom: string;
  placeholderTo:   string;
}

export const LENS_VIGNETTES: LensVignette[] = [
  {
    id:              'lv-1',
    quote:           'We waited three hours in the same position for the light to fall correctly on the gorilla family. The moment came and lasted perhaps forty seconds.',
    credit:          'James Mwangi',
    role:            'Head Guide, Rwanda',
    imageSrc:        '/images/gallery/guides/img-025-safari-guide-field.jpg',
    imageAlt:        'James Mwangi, Head Guide in Rwanda, photographing in the field',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'lv-2',
    quote:           'The Mara at five in the morning is a different world. The light arrives slowly, then all at once. You have to be ready long before you need to be.',
    credit:          'Amina Ochieng',
    role:            'Senior Guide, Kenya',
    imageSrc:        '/images/gallery/guides/img-026-female-guide-portrait.jpg',
    imageAlt:        'Amina Ochieng, Senior Guide in Kenya, on the Maasai Mara at dawn',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#363B2D',
  },
];

export const BEHIND_LENS_SECTION = {
  eyebrow:  'From Our Guides',
  headline: 'Behind the\nframe',
  body:     'Our guides carry cameras because they care about what they see. These are their words.',
} as const;

// ─────────────────────────────────────────────
// 5. Conservation Note
// ─────────────────────────────────────────────

export const CONSERVATION_NOTE = {
  eyebrow:  'Photography & Ethics',
  headline: 'Images with\nresponsibility',
  body: [
    'Every photograph taken in our company follows a strict code of conduct. We never alter animal behaviour for a shot, never approach closer than is comfortable for the subject, and never stay longer than the animal tolerates.',
    'We believe that responsible photography is conservation photography. When guests leave with images they love, they become ambassadors for the places and animals they photographed.',
  ],
  principles: [
    { id: 'p1', label: 'No baiting',         note: 'Animals are never attracted to positions for photographic advantage.' },
    { id: 'p2', label: 'Distance respected', note: 'All standard buffer distances are observed at all times.' },
    { id: 'p3', label: 'Minimal impact',     note: 'Vehicle positioning always prioritises animal comfort over composition.' },
    { id: 'p4', label: 'No flash',           note: 'Artificial light that could disturb animals is never used in the field.' },
  ],
} as const;

// ─────────────────────────────────────────────
// 6. Gallery Categories
// ─────────────────────────────────────────────

export interface GalleryCategoryItem {
  id:              string;
  label:           string;
  category:        GalleryCategory;
  count:           number;
  imageSrc:        string;
  imageAlt:        string;
  placeholderFrom: string;
  placeholderTo:   string;
}

export const GALLERY_CATEGORY_ITEMS: GalleryCategoryItem[] = [
  {
    id:              'cat-1',
    label:           'Wildlife',
    category:        'wildlife',
    count:           47,
    imageSrc:        '/images/gallery/categories/img-020-lion-pride-dusk.jpg',
    imageAlt:        'Lion pride resting at dusk, Tanzania',
    placeholderFrom: '#363B2D',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'cat-2',
    label:           'Landscapes',
    category:        'landscapes',
    count:           38,
    imageSrc:        '/images/gallery/categories/img-001-maasai-mara-dawn-landscape.jpg',
    imageAlt:        'Dawn light over the Maasai Mara savanna, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'cat-3',
    label:           'Culture',
    category:        'culture',
    count:           24,
    imageSrc:        '/images/gallery/categories/img-024-maasai-elder-portrait.jpg',
    imageAlt:        'Maasai elder in traditional red shuka, Kenya',
    placeholderFrom: '#7B3B2A',
    placeholderTo:   '#1C1510',
  },
  {
    id:              'cat-4',
    label:           'Conservation',
    category:        'conservation',
    count:           19,
    imageSrc:        '/images/gallery/categories/img-021-cheetah-ol-pejeta.jpg',
    imageAlt:        'Cheetah in the Ol Pejeta Conservancy, Kenya',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'cat-5',
    label:           'Aerial',
    category:        'aerial',
    count:           15,
    imageSrc:        '/images/gallery/categories/img-006-okavango-delta-aerial.jpg',
    imageAlt:        'Aerial view of the Okavango Delta, Botswana',
    placeholderFrom: '#4A6B4A',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'cat-6',
    label:           'Intimate',
    category:        'intimate',
    count:           22,
    imageSrc:        '/images/gallery/categories/img-015-mountain-gorilla-silverback.jpg',
    imageAlt:        'Mountain gorilla in Volcanoes National Park, Rwanda',
    placeholderFrom: '#3A4A3A',
    placeholderTo:   '#0C0D0B',
  },
];

export const GALLERY_CATEGORIES_SECTION = {
  eyebrow:  'Browse by Theme',
  headline: 'Explore\nthe collection',
  body:     'Photography from across our six destination countries, organised by subject.',
  cta:      { label: 'Plan Your Safari', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// 7. Gallery FAQ
// ─────────────────────────────────────────────

export interface GalleryFAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const GALLERY_FAQ_ITEMS: GalleryFAQItem[] = [
  {
    id:       'gfaq-1',
    question: 'Can I purchase prints of these images?',
    answer:   'Many images in our collection are available as fine-art prints, produced on archival paper by our partner printing studio in Nairobi. Please contact us with the image you are interested in and we will provide print size options, pricing, and delivery information.',
  },
  {
    id:       'gfaq-2',
    question: 'Do you offer dedicated photography safaris?',
    answer:   'Yes — we design photography-focused itineraries for both enthusiast and professional photographers. These journeys are structured around optimal light, with early morning and late afternoon drives, customised vehicle positioning, and, where appropriate, accompanied by a specialist photography guide. Contact us to discuss your specific needs.',
  },
  {
    id:       'gfaq-3',
    question: 'What camera equipment should I bring on safari?',
    answer:   'For wildlife photography, a telephoto lens of at least 300mm (ideally 400–600mm) is essential. A fast memory card, extra batteries, and a quality dust bag are important. We provide comprehensive pre-departure equipment guidance to all guests. We also recommend a compact camera or smartphone for documenting the smaller moments.',
  },
  {
    id:       'gfaq-4',
    question: 'Can I use these images for personal or commercial purposes?',
    answer:   'Images in this gallery are the property of Rêve Africa Safaris and our guide-photographers. Personal, non-commercial use with credit is welcomed. For commercial licensing enquiries, please contact us directly with the intended use and we will discuss terms accordingly.',
  },
  {
    id:       'gfaq-5',
    question: 'How do I know where a photograph was taken?',
    answer:   'Each image in the collection is captioned with the subject and country of origin. If you would like more specific location information — or are interested in visiting a particular area you have seen here — our team is happy to help you plan accordingly.',
  },
] as const;

export const GALLERY_FAQ_SECTION = {
  eyebrow:  'Photography Questions',
  headline: 'Questions\nabout our work',
  body:     'Our guides and specialists are always happy to discuss technique, locations, or print enquiries.',
  cta:      { label: 'Contact a Specialist', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// 8. Gallery CTA
// ─────────────────────────────────────────────

export const GALLERY_CTA = {
  eyebrow:    'Begin Your Story',
  headline:   'Your images\nawait',
  body:       'Every safari we design creates its own photographs — moments that belong only to you. Let us plan the journey that will fill your own album.',
  primaryCTA: {
    label: 'Plan Your Safari',
    href:  '/contact',
  },
  secondaryCTA: {
    label: 'Explore Packages',
    href:  '/packages',
  },
  detail: 'Bespoke itineraries from seven nights — across East and Southern Africa.',
} as const;

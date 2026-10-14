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
  headline:   'A first look\nat Africa',
  subheadline: 'Illustrative imagery from the destinations we are building journeys for.',
} as const;

// ─────────────────────────────────────────────
// 2. Gallery Intro
// ─────────────────────────────────────────────

export const GALLERY_INTRO = {
  eyebrow:  'About These Images',
  headline: 'Stories told\nin light',
  body: [
    'The photography on this site is illustrative: free-to-use images from Unsplash and Pexels, together with AI-generated landscapes, chosen to give a feel for each destination. These are not photographs from our own trips. We will add our own photography once we begin hosting guests.',
  ],
  stat: {
    value: '5',
    label: 'Countries',
    note:  'Kenya · Tanzania · Botswana · Rwanda · Namibia',
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
// 6. Gallery Categories
// ─────────────────────────────────────────────

export interface GalleryCategoryItem {
  id:              string;
  label:           string;
  category:        GalleryCategory;
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
    imageSrc:        '/images/gallery/categories/img-020-lion-pride-dusk.jpg',
    imageAlt:        'Lion pride resting at dusk, Tanzania',
    placeholderFrom: '#363B2D',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'cat-2',
    label:           'Landscapes',
    category:        'landscapes',
    imageSrc:        '/images/gallery/categories/img-001-maasai-mara-dawn-landscape.jpg',
    imageAlt:        'Dawn light over the Maasai Mara savanna, Kenya',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'cat-3',
    label:           'Culture',
    category:        'culture',
    imageSrc:        '/images/gallery/categories/img-024-maasai-elder-portrait.jpg',
    imageAlt:        'Maasai elder in traditional red shuka, Kenya',
    placeholderFrom: '#7B3B2A',
    placeholderTo:   '#1C1510',
  },
  {
    id:              'cat-4',
    label:           'Conservation',
    category:        'conservation',
    imageSrc:        '/images/gallery/categories/img-021-cheetah-ol-pejeta.jpg',
    imageAlt:        'Cheetah in the Ol Pejeta Conservancy, Kenya',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'cat-5',
    label:           'Aerial',
    category:        'aerial',
    imageSrc:        '/images/gallery/categories/img-006-okavango-delta-aerial.jpg',
    imageAlt:        'Aerial view of the Okavango Delta, Botswana',
    placeholderFrom: '#4A6B4A',
    placeholderTo:   '#0C0D0B',
  },
  {
    id:              'cat-6',
    label:           'Intimate',
    category:        'intimate',
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
    id:       'gfaq-2',
    question: 'Do you offer dedicated photography safaris?',
    answer:   'Yes — we design photography-focused itineraries for both enthusiast and professional photographers. These journeys are structured around optimal light, with early morning and late afternoon drives, and customised vehicle positioning. Contact us to discuss your specific needs.',
  },
  {
    id:       'gfaq-3',
    question: 'What camera equipment should I bring on safari?',
    answer:   'For wildlife photography, a telephoto lens of at least 300mm (ideally 400–600mm) is essential. A fast memory card, extra batteries, and a quality dust bag are important. We also recommend a compact camera or smartphone for documenting the smaller moments.',
  },
  {
    id:       'gfaq-4',
    question: 'Can I use these images for personal or commercial purposes?',
    answer:   'Most images on this site are free-to-use photographs from Unsplash and Pexels, or AI-generated landscapes. They remain the property of their respective creators under those licences. If you would like to know the source of a particular image, please ask us.',
  },
  {
    id:       'gfaq-5',
    question: 'How do I know where a photograph was taken?',
    answer:   'Not every image is labelled with its exact location, and some are illustrative. If you would like to know where a particular image was taken, or where it came from, please ask us.',
  },
] as const;

export const GALLERY_FAQ_SECTION = {
  eyebrow:  'Photography Questions',
  headline: 'Questions\nabout these images',
  body:     'We are always happy to discuss destinations, photography safaris, or the images you see here.',
  cta:      { label: 'Get in Touch', href: '/contact' },
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

/**
 * RÊVE AFRICA SAFARIS — Global Metadata Configuration
 *
 * Centralised metadata for Next.js App Router.
 * Extend at the page level using `generateMetadata()` or the `metadata` export.
 * All SEO, OG, and Twitter card data is derived from these base constants.
 */

import type { Metadata, Viewport } from 'next';

// ─────────────────────────────────────────────
// Site-level constants
// ─────────────────────────────────────────────

export const SITE = {
  name:        'Rêve Africa Safaris',
  tagline:     'Extraordinary Journeys Across Wild Africa',
  description:
    'Rêve Africa Safaris crafts intimate, transformative expeditions to Africa\'s ' +
    'most magnificent wilderness destinations — from the Maasai Mara to the ' +
    'Okavango Delta. Bespoke luxury safaris designed for the discerning traveller.',
  url:         'https://reveafricasafaris.com',
  locale:      'en_GB',
  twitterHandle: '@reveafricasafaris',
} as const;

// ─────────────────────────────────────────────
// Base metadata (merged at root layout)
// ─────────────────────────────────────────────

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default:  `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [
    'luxury safari',
    'Africa safari',
    'bespoke safari',
    'Maasai Mara',
    'Okavango Delta',
    'Tanzania safari',
    'Kenya safari',
    'Botswana safari',
    'Rwanda gorilla trekking',
    'luxury travel Africa',
    'private safari',
    'wildlife safari',
    'conservation travel',
  ],

  authors: [{ name: SITE.name, url: SITE.url }],

  creator:   SITE.name,
  publisher: SITE.name,

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  openGraph: {
    type:        'website',
    locale:      SITE.locale,
    url:         SITE.url,
    siteName:    SITE.name,
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url:    '/og/default.jpg',
        width:  1200,
        height: 630,
        alt:    `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    creator:     SITE.twitterHandle,
    images:      ['/og/default.jpg'],
  },

  icons: {
    icon:        [{ url: '/favicon.ico' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple:       [{ url: '/apple-touch-icon.png' }],
    shortcut:    '/favicon-16x16.png',
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: SITE.url,
  },
} as const;

// ─────────────────────────────────────────────
// Viewport configuration
// ─────────────────────────────────────────────

export const VIEWPORT: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F5' },
    { media: '(prefers-color-scheme: dark)',  color: '#131510' },
  ],
  width:              'device-width',
  initialScale:       1,
  viewportFit:        'cover',
} as const;

// ─────────────────────────────────────────────
// Page-level metadata factory
// Merge page-specific fields with base metadata
// ─────────────────────────────────────────────

export interface PageMetadataOptions {
  title:       string;
  description?: string;
  path?:        string;
  image?:       string;
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const { title, description, path = '', image } = options;
  const url         = `${SITE.url}${path}`;
  const ogImage     = image ?? '/og/default.jpg';
  const desc        = description ?? SITE.description;

  return {
    title,
    description: desc,
    alternates:  { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

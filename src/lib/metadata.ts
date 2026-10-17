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
  tagline:     'Hand-planned safari journeys across East and Southern Africa',
  description:
    'Rêve Africa Safaris is a new, founder-led safari company designing journeys across ' +
    'East and Southern Africa, planned by hand around each traveller.',
  url:         'https://reveafricasafaris.com',
  locale:      'en_GB',
  // [OWNER-FILL]: real X/Twitter handle including the @; empty omits the twitter site/creator tags
  twitterHandle: '' as string,
} as const;

// Default social-sharing image: the supplied logo artwork (public/og/default.jpg, 1200 × 630).
export const OG_DEFAULT_IMAGE = {
  url:    '/og/default.jpg',
  width:  1200,
  height: 630,
  alt:    `${SITE.name} logo`,
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
    'gorilla trekking Rwanda Uganda',
    'private safari',
    'wildlife safari',
    'Botswana Namibia safari',
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
    images: [OG_DEFAULT_IMAGE],
  },

  twitter: {
    card:        'summary_large_image',
    ...(SITE.twitterHandle
      ? { site: SITE.twitterHandle, creator: SITE.twitterHandle }
      : {}),
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images:      [{ url: OG_DEFAULT_IMAGE.url, alt: OG_DEFAULT_IMAGE.alt }],
  },

  // Icons come from the Next.js file conventions in src/app (favicon.ico,
  // icon.png, apple-icon.png); file-based metadata overrides this object, so
  // no `icons` field is declared here.

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
  title:        string;
  description?: string;
  path?:        string;
  image?:       string;
  /** Additional page-specific keywords merged with site-level keywords */
  keywords?:    string[];
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const { title, description, path = '', image, keywords } = options;
  const url         = `${SITE.url}${path}`;
  const ogImage     = image ?? OG_DEFAULT_IMAGE.url;
  // The default image is the logo, so its alt must not be the page title.
  const ogAlt       = image ? title : OG_DEFAULT_IMAGE.alt;
  const desc        = description ?? SITE.description;

  return {
    title,
    description: desc,
    alternates:  { canonical: url },
    ...(keywords ? { keywords: [...(BASE_METADATA.keywords as string[]), ...keywords] } : {}),
    openGraph: {
      title,
      description: desc,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description: desc,
      ...(SITE.twitterHandle ? { creator: SITE.twitterHandle } : {}),
      images:      [{ url: ogImage, alt: ogAlt }],
    },
  };
}

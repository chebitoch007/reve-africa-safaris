/**
 * RÊVE AFRICA SAFARIS — Legal page metadata
 *
 * Builds the metadata for /privacy, /terms and /cookies. While
 * LEGAL_PAGES_REVIEWED is false the pages are noindex,nofollow; when it is
 * true they use the site-wide indexable robots settings.
 */

import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import { LEGAL_PAGES, LEGAL_PAGES_REVIEWED, type LegalSlug } from '@/lib/constants/legal';

export function buildLegalMetadata(slug: LegalSlug): Metadata {
  const page = LEGAL_PAGES[slug];

  return {
    ...buildPageMetadata({
      title:       page.title,
      description: page.description,
      path:        page.path,
    }),
    ...(LEGAL_PAGES_REVIEWED
      ? {}
      : {
          robots: {
            index:     false,
            follow:    false,
            googleBot: { index: false, follow: false },
          },
        }),
  };
}

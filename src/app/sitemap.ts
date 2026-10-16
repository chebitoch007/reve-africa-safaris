/**
 * RÊVE AFRICA SAFARIS — Sitemap
 *
 * Next.js App Router dynamic sitemap generator.
 * Outputs /sitemap.xml at build time and is revalidated on ISR.
 *
 * All primary routes are static. If dynamic routes (individual blog posts,
 * destination sub-pages, etc.) are added in future milestones, extend this
 * array with their generated entries.
 */

import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/metadata';
import { LEGAL_PAGES, LEGAL_PAGES_REVIEWED } from '@/lib/constants/legal';
import { ARTICLES } from '@/lib/constants/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  // Static routes with priority and change frequency guidance
  const routes: MetadataRoute.Sitemap = [
    {
      url:             base,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${base}/about`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/destinations`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/packages`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/gallery`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${base}/blog`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.8,
    },
    {
      url:             `${base}/contact`,
      lastModified:    new Date(),
      changeFrequency: 'yearly',
      priority:        0.8,
    },
  ];

  // One entry per journal article (see articles.ts).
  for (const article of ARTICLES) {
    routes.push({
      url:             `${base}/blog/${article.slug}`,
      lastModified:    new Date(`${article.publishedAt}T00:00:00Z`),
      changeFrequency: 'monthly',
      priority:        0.6,
    });
  }

  // Legal pages are listed only once they have been reviewed (see legal.ts).
  if (LEGAL_PAGES_REVIEWED) {
    for (const page of Object.values(LEGAL_PAGES)) {
      routes.push({
        url:             `${base}${page.path}`,
        lastModified:    new Date(),
        changeFrequency: 'yearly',
        priority:        0.3,
      });
    }
  }

  return routes;
}

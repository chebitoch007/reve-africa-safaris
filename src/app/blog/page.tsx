/**
 * RÊVE AFRICA SAFARIS — Blog Page
 *
 * Milestone 8: Editorial journal composition.
 *
 * Section order + surface alternation:
 *   1. BlogHero             — bg-deep      — dark editorial entry
 *   4. BlogCategories       — bg-dune      — six category cards
 *   6. NewsletterSection    — bg-muted     — signup form; only when NEWSLETTER_ENABLED
 *   7. BlogFAQ              — bg-primary   — shared accordion FAQ
 *   8. BlogCTA              — bg-deep      — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }      from '@/lib/metadata';
import { FaqPageJsonLd }          from '@/components/seo/JsonLd';
import { BlogHero }               from '@/components/blog/BlogHero';
import { BlogCategories }         from '@/components/blog/BlogCategories';
import { NewsletterSection }      from '@/components/blog/NewsletterSection';
import { BlogFAQ }                from '@/components/blog/BlogFAQ';
import { BlogCTA }                from '@/components/blog/BlogCTA';
import { BLOG_FAQ_ITEMS, NEWSLETTER_ENABLED } from '@/lib/constants/blog';

export const metadata: Metadata = buildPageMetadata({
  title:       'Journal',
  description:
    'Early notes from the two of us as we build Rêve Africa Safaris.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <FaqPageJsonLd items={BLOG_FAQ_ITEMS} />
      <BlogHero />
      <BlogCategories />
      {NEWSLETTER_ENABLED && <NewsletterSection />}
      <BlogFAQ />
      <BlogCTA />
    </>
  );
}

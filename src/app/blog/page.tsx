/**
 * RÊVE AFRICA SAFARIS — Blog Page
 *
 * Milestone 8: Editorial journal composition.
 *
 * Section order + surface alternation:
 *   1. BlogHero             — bg-deep      — dark editorial entry
 *   2. FeaturedStory        — bg-secondary — flagship article showcase
 *   3. LatestStories        — bg-primary   — six-article card grid
 *   4. BlogCategories       — bg-dune      — six category cards
 *   5. EditorialPhilosophy  — bg-inverse   — three storytelling pillars
 *   6. NewsletterSection    — bg-muted     — signup form (arch. only)
 *   7. BlogFAQ              — bg-primary   — shared accordion FAQ
 *   8. BlogCTA              — bg-deep      — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }      from '@/lib/metadata';
import { FaqPageJsonLd }          from '@/components/seo/JsonLd';
import { BlogHero }               from '@/components/blog/BlogHero';
import { FeaturedStory }          from '@/components/blog/FeaturedStory';
import { LatestStories }          from '@/components/blog/LatestStories';
import { BlogCategories }         from '@/components/blog/BlogCategories';
import { EditorialPhilosophy }    from '@/components/blog/EditorialPhilosophy';
import { NewsletterSection }      from '@/components/blog/NewsletterSection';
import { BlogFAQ }                from '@/components/blog/BlogFAQ';
import { BlogCTA }                from '@/components/blog/BlogCTA';
import { BLOG_FAQ_ITEMS }         from '@/lib/constants/blog';

export const metadata: Metadata = buildPageMetadata({
  title:       'Field Notes — Safari Journal & Editorial Dispatches',
  description:
    'Stories from wild Africa — wildlife encounters, conservation insights, destination guides, and photography dispatches written by the guides and specialists of Rêve Africa Safaris.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <FaqPageJsonLd items={BLOG_FAQ_ITEMS} />
      <BlogHero />
      <FeaturedStory />
      <LatestStories />
      <BlogCategories />
      <EditorialPhilosophy />
      <NewsletterSection />
      <BlogFAQ />
      <BlogCTA />
    </>
  );
}

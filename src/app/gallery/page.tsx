/**
 * RÊVE AFRICA SAFARIS — Gallery Page
 *
 * Milestone 7: Gallery page composition.
 *
 * Section order + surface alternation:
 *   1.  GalleryHero         — bg-deep      — dark editorial entry
 *   2.  GalleryIntro        — bg-primary   — editorial philosophy
 *   3.  GalleryGrid         — bg-secondary — full 18-item masonry grid
 *   6.  GalleryCategories   — bg-muted     — six category tiles
 *   7.  GalleryFAQ          — bg-primary   — accordion FAQ
 *   8.  GalleryCTA          — bg-deep      — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }         from '@/lib/metadata';
import { FaqPageJsonLd }             from '@/components/seo/JsonLd';
import { GalleryHero }               from '@/components/gallery/GalleryHero';
import { GalleryIntro }              from '@/components/gallery/GalleryIntro';
import { GalleryGrid }               from '@/components/gallery/GalleryGrid';
import { GalleryCategories }         from '@/components/gallery/GalleryCategories';
import { GalleryFAQ }                from '@/components/gallery/GalleryFAQ';
import { GalleryCTA }                from '@/components/gallery/GalleryCTA';
import { GALLERY_FAQ_ITEMS }         from '@/lib/constants/gallery';

export const metadata: Metadata = buildPageMetadata({
  title:       'Gallery — Safari Photography Across East & Southern Africa',
  description: 'Illustrative imagery of Kenya, Tanzania, Rwanda, Botswana and Namibia. Free-to-use photographs and AI-generated landscapes, not photographs from our own trips.',
  path:        '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <FaqPageJsonLd items={GALLERY_FAQ_ITEMS} />
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <GalleryCategories />
      <GalleryFAQ />
      <GalleryCTA />
    </>
  );
}

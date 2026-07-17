'use client';

/**
 * GalleryFAQ
 *
 * Gallery page FAQ section. Client Component (via AccordionFAQ).
 *
 * Uses the shared <AccordionFAQ> primitive extracted in Milestone 7.
 * This is the fourth and final FAQ section on the site — the extraction
 * was triggered by this instance.
 *
 * Surface: bg-primary (chalk-50) — consistent with all FAQ sections.
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import { GALLERY_FAQ_ITEMS, GALLERY_FAQ_SECTION } from '@/lib/constants/gallery';

export function GalleryFAQ() {
  return (
    <AccordionFAQ
      items={GALLERY_FAQ_ITEMS}
      section={GALLERY_FAQ_SECTION}
      headingId="gallery-faq-heading"
      prefix="gfaq"
    />
  );
}

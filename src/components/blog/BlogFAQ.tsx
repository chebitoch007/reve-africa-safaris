'use client';

/**
 * BlogFAQ
 *
 * Blog page FAQ section. Client Component (via AccordionFAQ).
 *
 * Thin wrapper around the shared <AccordionFAQ> primitive
 * (src/components/ui/AccordionFAQ.tsx, extracted in Milestone 7).
 *
 * Surface: bg-primary (chalk-50) — consistent with all FAQ sections.
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import { BLOG_FAQ_ITEMS, BLOG_FAQ_SECTION } from '@/lib/constants/blog';

export function BlogFAQ() {
  return (
    <AccordionFAQ
      items={BLOG_FAQ_ITEMS}
      section={BLOG_FAQ_SECTION}
      headingId="blog-faq-heading"
      prefix="bfaq"
    />
  );
}

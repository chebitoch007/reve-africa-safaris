'use client';

/**
 * FAQSection
 *
 * Homepage FAQ section. Client Component (via AccordionFAQ).
 *
 * Migrated in Milestone 7 to use the shared <AccordionFAQ> primitive
 * extracted from src/components/ui/AccordionFAQ.tsx. The fourth FAQ
 * instance (Gallery page) triggered the extraction.
 *
 * Surface: bg-primary (chalk-50).
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import { FAQ_ITEMS, FAQ_SECTION } from '@/lib/constants/homepage';

export function FAQSection() {
  return (
    <AccordionFAQ
      items={FAQ_ITEMS}
      section={FAQ_SECTION}
      headingId="faq-heading"
      prefix="faq"
    />
  );
}

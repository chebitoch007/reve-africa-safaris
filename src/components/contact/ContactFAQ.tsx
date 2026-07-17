'use client';

/**
 * ContactFAQ
 *
 * Contact page FAQ section. Client Component (via AccordionFAQ).
 *
 * Thin wrapper around the shared <AccordionFAQ> primitive
 * (src/components/ui/AccordionFAQ.tsx, extracted in Milestone 7).
 * This is the sixth consumer of the shared primitive.
 *
 * Surface: bg-primary (chalk-50) — consistent with all FAQ sections.
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import { CONTACT_FAQ_ITEMS, CONTACT_FAQ_SECTION } from '@/lib/constants/contact';

export function ContactFAQ() {
  return (
    <AccordionFAQ
      items={CONTACT_FAQ_ITEMS}
      section={CONTACT_FAQ_SECTION}
      headingId="contact-faq-heading"
      prefix="cfaq"
    />
  );
}

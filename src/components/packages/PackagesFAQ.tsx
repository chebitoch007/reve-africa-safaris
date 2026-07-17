'use client';

/**
 * PackagesFAQ
 *
 * Safari Packages page FAQ section. Client Component (via AccordionFAQ).
 *
 * Migrated in Milestone 7 to use the shared <AccordionFAQ> primitive
 * extracted from src/components/ui/AccordionFAQ.tsx.
 *
 * Surface: bg-primary (chalk-50).
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import { PACKAGES_FAQ_ITEMS, PACKAGES_FAQ_SECTION } from '@/lib/constants/packages';

export function PackagesFAQ() {
  return (
    <AccordionFAQ
      items={PACKAGES_FAQ_ITEMS}
      section={PACKAGES_FAQ_SECTION}
      headingId="packages-faq-heading"
      prefix="pfaq"
    />
  );
}

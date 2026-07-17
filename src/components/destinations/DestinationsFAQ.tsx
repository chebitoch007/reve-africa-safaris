'use client';

/**
 * DestinationsFAQ
 *
 * Destinations-page FAQ section. Client Component (via AccordionFAQ).
 *
 * Migrated in Milestone 7 to use the shared <AccordionFAQ> primitive
 * extracted from src/components/ui/AccordionFAQ.tsx.
 *
 * Surface: bg-primary (chalk-50).
 */

import { AccordionFAQ } from '@/components/ui/AccordionFAQ';
import {
  DESTINATIONS_FAQ_ITEMS,
  DESTINATIONS_FAQ_SECTION,
} from '@/lib/constants/destinations';

export function DestinationsFAQ() {
  return (
    <AccordionFAQ
      items={DESTINATIONS_FAQ_ITEMS}
      section={DESTINATIONS_FAQ_SECTION}
      headingId="destinations-faq-heading"
      prefix="dfaq"
    />
  );
}

/**
 * RÊVE AFRICA SAFARIS — Safari Packages (Journeys) Page
 *
 * Milestone 6: Packages page composition.
 *
 * Section order + surface alternation:
 *   1.  PackagesHero             — bg-deep     — dark editorial entry
 *   2.  JourneyIntro             — bg-primary  — philosophy + three stats
 *   3.  AllPackages              — bg-secondary — full 6-package catalogue (reuses PackageCard)
 *   4.  JourneyCategories        — bg-dune     — eight journey type tiles
 *   5.  SignatureItinerary       — bg-inverse  — editorial flagship showcase
 *   6.  WhatsIncluded            — bg-primary  — inclusions/exclusions
 *   7.  AccommodationStandards   — bg-dune     — three accommodation tiers
 *   8.  BespokeProcess           — bg-secondary — four-step custom planning
 *   9.  PackagesFAQ              — bg-primary  — accordion FAQ
 *  10.  PackagesCTA              — bg-deep     — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }            from '@/lib/metadata';
import { PackagesHero }                 from '@/components/packages/PackagesHero';
import { JourneyIntro }                 from '@/components/packages/JourneyIntro';
import { AllPackages }                  from '@/components/packages/AllPackages';
import { JourneyCategories }            from '@/components/packages/JourneyCategories';
import { SignatureItinerary }           from '@/components/packages/SignatureItinerary';
import { WhatsIncluded }                from '@/components/packages/WhatsIncluded';
import { AccommodationStandards }       from '@/components/packages/AccommodationStandards';
import { BespokeProcess }               from '@/components/packages/BespokeProcess';
import { PackagesFAQ }                  from '@/components/packages/PackagesFAQ';
import { PackagesCTA }                  from '@/components/packages/PackagesCTA';

export const metadata: Metadata = buildPageMetadata({
  title:       'Safari Packages — Curated Luxury Journeys Across Africa',
  description: 'Discover six curated safari journeys across Kenya, Tanzania, Rwanda, Uganda, Botswana, and Namibia. Every itinerary is a starting point — refined through conversation until it becomes uniquely yours.',
  path:        '/packages',
});

export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <JourneyIntro />
      <AllPackages />
      <JourneyCategories />
      <SignatureItinerary />
      <WhatsIncluded />
      <AccommodationStandards />
      <BespokeProcess />
      <PackagesFAQ />
      <PackagesCTA />
    </>
  );
}

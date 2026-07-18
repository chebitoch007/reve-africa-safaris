/**
 * RÊVE AFRICA SAFARIS — Destinations Page
 *
 * Milestone 5: Destinations page composition.
 *
 * Section order + surface alternation:
 *   1. DestinationsHero       — bg-deep     — dark entry
 *   2. DestinationsOverview   — bg-primary  — light editorial intro
 *   3. CountryShowcase        — bg-secondary — six country cards
 *   4. WildlifeHighlights     — bg-dune     — warm organic
 *   5. SignatureExperiences   — bg-primary  — curated experiences
 *   6. BestTimeToVisit        — bg-inverse  — dark, authoritative
 *   7. FeaturedLodges         — bg-secondary — lodge previews
 *   8. MapPlaceholder         — bg-muted    — architecture-only map
 *   9. DestinationsFAQ        — bg-primary  — accordion FAQ
 *  10. DestinationsCTA        — bg-deep     — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }             from '@/lib/metadata';
import { FaqPageJsonLd }                 from '@/components/seo/JsonLd';
import { DestinationsHero }             from '@/components/destinations/DestinationsHero';
import { DestinationsOverview }         from '@/components/destinations/DestinationsOverview';
import { CountryShowcase }              from '@/components/destinations/CountryShowcase';
import { WildlifeHighlights }           from '@/components/destinations/WildlifeHighlights';
import { SignatureExperiences }         from '@/components/destinations/SignatureExperiences';
import { BestTimeToVisit }              from '@/components/destinations/BestTimeToVisit';
import { FeaturedLodges }               from '@/components/destinations/FeaturedLodges';
import { MapPlaceholder }               from '@/components/destinations/MapPlaceholder';
import { DestinationsFAQ }             from '@/components/destinations/DestinationsFAQ';
import { DestinationsCTA }             from '@/components/destinations/DestinationsCTA';
import { DESTINATIONS_FAQ_ITEMS }       from '@/lib/constants/destinations';

export const metadata: Metadata = buildPageMetadata({
  title:       'Destinations — East & Southern Africa Safari Destinations',
  description: 'Explore six extraordinary safari destinations: Kenya, Tanzania, Rwanda, Uganda, Botswana, and Namibia. Discover wildlife highlights, seasonal guidance, and signature experiences across wild Africa.',
  path:        '/destinations',
});

export default function DestinationsPage() {
  return (
    <>
      <FaqPageJsonLd items={DESTINATIONS_FAQ_ITEMS} />
      <DestinationsHero />
      <DestinationsOverview />
      <CountryShowcase />
      <WildlifeHighlights />
      <SignatureExperiences />
      <BestTimeToVisit />
      <FeaturedLodges />
      <MapPlaceholder />
      <DestinationsFAQ />
      <DestinationsCTA />
    </>
  );
}

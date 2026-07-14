/**
 * RÊVE AFRICA SAFARIS — Homepage
 *
 * Composes the Milestone 3A homepage sections:
 *   1. Hero            — Full-viewport editorial entry
 *   2. Introduction    — Brand philosophy and stats
 *   3. DestinationsPreview — Kenya, Tanzania, Uganda, Rwanda
 *   4. CTASection      — Dark-surface invitation to plan
 *
 * All sections use Framer Motion whileInView animations (scroll-triggered).
 * The Hero uses entry animations that fire on page load.
 */

import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import { Hero }                 from '@/components/home/Hero';
import { Introduction }         from '@/components/home/Introduction';
import { DestinationsPreview }  from '@/components/home/DestinationsPreview';
import { CTASection }           from '@/components/home/CTASection';

export const metadata: Metadata = buildPageMetadata({
  title:       'Extraordinary Safari Journeys Across Africa',
  description: 'Rêve Africa Safaris crafts intimate, transformative expeditions to Africa\'s most magnificent wilderness destinations. Bespoke luxury safaris for the discerning traveller.',
  path:        '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <DestinationsPreview />
      <CTASection />
    </>
  );
}

/**
 * RÊVE AFRICA SAFARIS — About Page
 *
 * Milestone 4: About page composition.
 *
 * Section order + surface alternation:
 *   1. AboutHero            — bg-deep (basalt-950) — dark entry
 *   2. OurStory             — bg-primary (chalk-50) — light, editorial
 *   3. OurApproach          — bg-secondary (chalk-100) — philosophy pillars
 *   4. MeetTheTeam          — bg-dune (dune-100) — warm organic
 *   5. ConservationCommitment — bg-inverse (basalt-900) — weighty dark
 *   6. AboutCTA             — bg-deep (basalt-950) — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }          from '@/lib/metadata';
import { AboutHero }                  from '@/components/about/AboutHero';
import { OurStory }                   from '@/components/about/OurStory';
import { OurApproach }                from '@/components/about/OurApproach';
import { MeetTheTeam }                from '@/components/about/MeetTheTeam';
import { ConservationCommitment }     from '@/components/about/ConservationCommitment';
import { AboutCTA }                   from '@/components/about/AboutCTA';

export const metadata: Metadata = buildPageMetadata({
  title:       'About Us — Our Story, Team & Commitment',
  description: 'Founded in 2009 by two East African guides, Rêve Africa Safaris was built on a single conviction: extraordinary travel demands extraordinary care. Meet our team and discover our approach.',
  path:        '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurApproach />
      <MeetTheTeam />
      <ConservationCommitment />
      <AboutCTA />
    </>
  );
}

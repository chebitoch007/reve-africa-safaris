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
 *   6. AboutCTA             — bg-deep (basalt-950) — dramatic close
 */

import type { Metadata } from 'next';
import { buildPageMetadata }          from '@/lib/metadata';
import { AboutHero }                  from '@/components/about/AboutHero';
import { OurStory }                   from '@/components/about/OurStory';
import { OurApproach }                from '@/components/about/OurApproach';
import { MeetTheTeam }                from '@/components/about/MeetTheTeam';
import { AboutCTA }                   from '@/components/about/AboutCTA';

export const metadata: Metadata = buildPageMetadata({
  title:       'About Us — Our Story, Team & Commitment',
  description: 'Meet the two founders of Rêve Africa Safaris, a new, founder-led safari company.',
  path:        '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurApproach />
      <MeetTheTeam />
      <AboutCTA />
    </>
  );
}

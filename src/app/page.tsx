/**
 * RÊVE AFRICA SAFARIS — Homepage
 *
 * Full homepage composition — Milestones 3A + 3B.
 *
 * Section order:
 *   1.  Hero                 — Full-viewport editorial entry
 *   2.  Introduction         — Brand philosophy and stats
 *   3.  DestinationsPreview  — Kenya, Tanzania, Uganda, Rwanda
 *   4.  ExperiencesSection   — Six core travel experience types
 *   5.  PackagesSection      — Three featured safari packages
 *   6.  WhyUsSection         — Six trust pillars (dark surface)
 *   7.  StatisticsSection    — Key company metrics
 *   8.  TestimonialsSection  — Placeholder guest testimonials
 *   9.  GalleryPreview       — Photography placeholder grid
 *   10. FAQSection           — Six accordion FAQ items
 *   11. FinalCTA             — Closing call to action
 */

import type { Metadata } from 'next';
import { buildPageMetadata }      from '@/lib/metadata';
import { FaqPageJsonLd }          from '@/components/seo/JsonLd';
import { Hero }                   from '@/components/home/Hero';
import { Introduction }           from '@/components/home/Introduction';
import { DestinationsPreview }    from '@/components/home/DestinationsPreview';
import { ExperiencesSection }     from '@/components/home/ExperiencesSection';
import { PackagesSection }        from '@/components/home/PackagesSection';
import { WhyUsSection }           from '@/components/home/WhyUsSection';
import { StatisticsSection }      from '@/components/home/StatisticsSection';
import { TestimonialsSection }    from '@/components/home/TestimonialsSection';
import { GalleryPreview }         from '@/components/home/GalleryPreview';
import { FAQSection }             from '@/components/home/FAQSection';
import { FinalCTA }               from '@/components/home/FinalCTA';
import { FAQ_ITEMS }              from '@/lib/constants/homepage';

export const metadata: Metadata = buildPageMetadata({
  title:       'Extraordinary Safari Journeys Across Africa',
  description: 'Rêve Africa Safaris crafts intimate, transformative expeditions to Africa\'s most magnificent wilderness destinations. Bespoke luxury safaris for the discerning traveller.',
  path:        '/',
});

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd items={FAQ_ITEMS} />
      <Hero />
      <Introduction />
      <DestinationsPreview />
      <ExperiencesSection />
      <PackagesSection />
      <WhyUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

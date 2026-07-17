/**
 * RÊVE AFRICA SAFARIS — Contact Page
 *
 * Milestone 9: Contact page composition.
 *
 * Section order + surface alternation:
 *   1. ContactHero       — bg-deep      — dark editorial entry
 *   2. ConciergeIntro    — bg-primary   — personal service philosophy
 *   3. ContactMethods    — bg-secondary — phone, email, WhatsApp, hours
 *   4. EnquiryForm       — bg-primary   — luxury enquiry form
 *   5. OfficeLocation    — bg-dune      — address, travel info, map placeholder
 *   6. ContactFAQ        — bg-primary   — shared accordion FAQ
 *   7. ContactCTA        — bg-inverse   — final CTA
 */

import type { Metadata } from 'next';
import { buildPageMetadata }    from '@/lib/metadata';
import { ContactHero }          from '@/components/contact/ContactHero';
import { ConciergeIntro }       from '@/components/contact/ConciergeIntro';
import { ContactMethods }       from '@/components/contact/ContactMethods';
import { EnquiryForm }          from '@/components/contact/EnquiryForm';
import { OfficeLocation }       from '@/components/contact/OfficeLocation';
import { ContactFAQ }           from '@/components/contact/ContactFAQ';
import { ContactCTA }           from '@/components/contact/ContactCTA';

export const metadata: Metadata = buildPageMetadata({
  title:       'Contact — Plan Your Bespoke African Safari',
  description:
    'Begin planning your luxury safari with Rêve Africa Safaris. Speak directly with a specialist — complimentary consultation, no obligation. Based in Nairobi, Kenya.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ConciergeIntro />
      <ContactMethods />
      <EnquiryForm />
      <OfficeLocation />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}

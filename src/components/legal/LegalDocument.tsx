/**
 * RÊVE AFRICA SAFARIS — Legal document
 *
 * Shared Server Component for /privacy, /terms and /cookies.
 * Content comes from src/lib/constants/legal.ts. Anything empty is not
 * rendered: no empty heading, no orphan label, no mailto: with nothing
 * behind it.
 */

import { cn } from '@/lib/design-system';
import { LEGAL_PAGES, type LegalSlug } from '@/lib/constants/legal';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/constants/contact';

export function LegalDocument({ slug }: { slug: LegalSlug }) {
  const page     = LEGAL_PAGES[slug];
  const headingId = `${slug}-heading`;
  const sections = page.sections.filter(
    (section) => section.heading !== '' && section.paragraphs.some((p) => p !== ''),
  );
  const showEmail = page.contactLine !== '' && CONTACT_EMAIL !== '';

  return (
    <>
      {/* Header band */}
      <section
        aria-labelledby={headingId}
        className="w-full bg-[var(--color-bg-deep)] text-[var(--color-text-inverse)]"
      >
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />
        <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 py-16 lg:py-24">
          {page.eyebrow !== '' && (
            <div className="flex items-center gap-4 mb-8">
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[10px] tracking-[0.28em] leading-none',
                  'text-[var(--color-accent-light)]',
                )}
              >
                {page.eyebrow}
              </span>
            </div>
          )}
          <h1
            id={headingId}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(2.75rem,5vw+0.5rem,4.5rem)]',
              'leading-[1.05] tracking-[-0.02em]',
              'text-[var(--color-text-inverse)]',
            )}
          >
            {page.headline}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {(page.intro !== '' || showEmail) && (
              <div className="space-y-4">
                {page.intro !== '' && (
                  <p className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]">
                    {page.intro}
                  </p>
                )}
                {showEmail && (
                  <p className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]">
                    {page.contactLine}{' '}
                    <a
                      href={CONTACT_EMAIL_HREF}
                      className="underline underline-offset-2 text-[var(--color-text-primary)]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
              </div>
            )}

            {sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h2
                  className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-[clamp(1.75rem,2vw+0.5rem,2.25rem)]',
                    'leading-[1.15] tracking-[-0.01em]',
                    'text-[var(--color-text-primary)]',
                  )}
                >
                  {section.heading}
                </h2>
                {section.paragraphs
                  .filter((paragraph) => paragraph !== '')
                  .map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

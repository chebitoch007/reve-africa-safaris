'use client';

/**
 * SignatureExperiences
 *
 * Four curated signature experiences. Client Component — scroll-reveal
 * animation wrapper around SignatureExperienceCard Server Components.
 * Surface: bg-primary (chalk-50).
 *
 * 2×2 grid on desktop; single column stacked on mobile.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { SIGNATURE_EXPERIENCES, SIGNATURE_EXPERIENCES_SECTION } from '@/lib/constants/destinations';
import { SignatureExperienceCard } from '@/components/destinations/SignatureExperienceCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.09 },
  }),
};

export function SignatureExperiences() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="signature-experiences-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-16">
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-6"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-text-muted)]',
              )}>
                {SIGNATURE_EXPERIENCES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="signature-experiences-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)]',
                'whitespace-pre-line',
              )}
            >
              {SIGNATURE_EXPERIENCES_SECTION.headline}
            </motion.h2>
          </div>

          <motion.p
            custom={0.14}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base lg:text-[1.0625rem] leading-[1.82]',
              'text-[var(--color-text-secondary)]',
              'self-end',
            )}
          >
            {SIGNATURE_EXPERIENCES_SECTION.body}
          </motion.p>
        </div>

        {/* ── Experiences grid ─────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Signature safari experiences"
        >
          {SIGNATURE_EXPERIENCES.map((experience, i) => (
            <motion.div
              key={experience.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <SignatureExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * ExperiencesSection
 *
 * Highlights the six core travel experiences. Client Component for
 * scroll-triggered Framer Motion reveals. Cards are Server Components.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { EXPERIENCES, EXPERIENCES_SECTION } from '@/lib/constants/homepage';
import { ExperienceCard } from '@/components/home/ExperienceCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.08 },
  }),
};

export function ExperiencesSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="experiences-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.div
            custom={0}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex items-center gap-4 mb-5"
          >
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}>
              {EXPERIENCES_SECTION.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            id="experiences-heading"
            custom={0.08}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
              'leading-[1.1] tracking-[-0.02em]',
              'text-[var(--color-text-primary)] mb-5 whitespace-pre-line',
            )}
          >
            {EXPERIENCES_SECTION.headline}
          </motion.h2>

          <motion.p
            custom={0.16}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base leading-relaxed',
              'text-[var(--color-text-secondary)]',
            )}
          >
            {EXPERIENCES_SECTION.body}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Travel experiences"
        >
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              role="listitem"
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

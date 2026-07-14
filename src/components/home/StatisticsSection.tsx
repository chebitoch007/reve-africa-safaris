'use client';

/**
 * StatisticsSection
 *
 * Elegant statistics display. Client Component for scroll-triggered animations.
 * No number-counting animation — the values animate in via fade/slide only,
 * which is more performant, accessible, and avoids screen-reader issues.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { STATISTICS, STATISTICS_SECTION } from '@/lib/constants/homepage';

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const statVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function StatisticsSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="stats-heading"
      className="py-20 md:py-28 bg-[var(--color-bg-secondary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header — compact, centred */}
        <div className="text-center mb-14">
          <motion.div
            custom={0}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}>
              {STATISTICS_SECTION.eyebrow}
            </span>
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="stats-heading"
            custom={0.08}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(1.75rem,3vw+0.5rem,2.5rem)]',
              'leading-[1.15] tracking-[-0.02em]',
              'text-[var(--color-text-primary)] whitespace-pre-line',
            )}
          >
            {STATISTICS_SECTION.headline}
          </motion.h2>
        </div>

        {/* Stats */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-light)]">
          {STATISTICS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={reduced ? {} : statVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center py-12 px-6 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(2.5rem,4vw,3.5rem)]',
                  'leading-none tracking-[-0.02em]',
                  'text-[var(--color-accent-primary)] mb-3',
                )}
                aria-label={`${stat.value}${stat.suffix ?? ''} — ${stat.label}`}
              >
                {stat.value}
                {stat.suffix && (
                  <span className="text-[0.6em]">{stat.suffix}</span>
                )}
              </dd>
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[9px] tracking-[0.2em]',
                'text-[var(--color-text-muted)]',
              )}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

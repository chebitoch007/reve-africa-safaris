'use client';

/**
 * OurApproach
 *
 * Three philosophy pillars — the principles that shape every journey.
 * Client Component for scroll-triggered animations.
 * Surface: bg-secondary (chalk-100).
 *
 * Layout: intro text full-width, then three editorial "chapter" cards
 * arranged in a three-column grid with Roman numeral markers.
 *
 * ┌────────────────────────────────────────────────┐
 * │  [Eyebrow]   [Headline]                        │
 * │              [Body intro]                      │
 * │                                                │
 * │  [I — Pillar]  [II — Pillar]  [III — Pillar] │
 * └────────────────────────────────────────────────┘
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { OUR_APPROACH } from '@/lib/constants/about';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const pillarVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function OurApproach() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="our-approach-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header: two-column ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 mb-16 lg:mb-20">

          {/* Left — eyebrow + headline */}
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
                {OUR_APPROACH.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="our-approach-heading"
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
              {OUR_APPROACH.headline}
            </motion.h2>
          </div>

          {/* Right — intro body */}
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
            {OUR_APPROACH.body}
          </motion.p>
        </div>

        {/* ── Pillars grid ──────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Our guiding principles"
        >
          {OUR_APPROACH.pillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : pillarVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="bg-[var(--color-bg-secondary)] p-8 lg:p-10 group"
            >
              {/* Roman numeral marker */}
              <div className="mb-8">
                <span className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(2.5rem,4vw,3.5rem)] leading-none',
                  'text-[var(--color-accent-primary)] opacity-60',
                  'select-none',
                )} aria-hidden="true">
                  {pillar.number}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px w-8 bg-[var(--color-accent-primary)] mb-6 transition-all duration-[400ms] group-hover:w-14"
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className={cn(
                'font-[var(--font-inter)] font-medium',
                'text-[0.9375rem] leading-snug',
                'text-[var(--color-text-primary)]',
                'mb-4',
              )}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p className={cn(
                'font-[var(--font-inter)] font-light',
                'text-sm leading-[1.78]',
                'text-[var(--color-text-secondary)]',
              )}>
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

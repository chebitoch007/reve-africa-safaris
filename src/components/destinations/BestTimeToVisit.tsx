'use client';

/**
 * BestTimeToVisit
 *
 * Seasonal guidance across three regional groupings.
 * Client Component — scroll-reveal animations.
 * Surface: bg-inverse (basalt-900) — dark, authoritative surface for
 * information-dense content.
 *
 * Layout:
 * - Section header (eyebrow + headline + body)
 * - Three regional panels, each with two season cards side by side
 * - "Best" season is visually distinguished with an accent border
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { SEASONAL_GUIDE, SEASONAL_SECTION } from '@/lib/constants/destinations';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const panelVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function BestTimeToVisit() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="seasonal-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-20">
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
                'text-[var(--color-accent-light)]',
              )}>
                {SEASONAL_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="seasonal-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)]',
                'whitespace-pre-line',
              )}
            >
              {SEASONAL_SECTION.headline}
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
              'text-[var(--color-text-inverse-muted)]',
              'self-end',
            )}
          >
            {SEASONAL_SECTION.body}
          </motion.p>
        </div>

        {/* ── Regional panels ──────────────────────────────────── */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {SEASONAL_GUIDE.map((regionGroup, gi) => (
            <motion.div
              key={regionGroup.countryId}
              custom={gi}
              variants={reduced ? {} : panelVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              {/* Region label */}
              <div className="flex items-center gap-4 mb-5">
                <span className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[10px] tracking-[0.26em] leading-none',
                  'text-[var(--color-accent-primary)]',
                )}>
                  {regionGroup.country}
                </span>
                <div className="flex-1 h-px bg-[var(--color-border-inverse)]" aria-hidden="true" />
              </div>

              {/* Season cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-inverse)]">
                {regionGroup.seasons.map((season) => (
                  <div
                    key={season.id}
                    className={cn(
                      'bg-[var(--color-bg-inverse)] p-7 lg:p-8',
                      'border-t-2',
                      season.isBest
                        ? 'border-[var(--color-accent-primary)]'
                        : 'border-[var(--color-border-inverse)]',
                    )}
                  >
                    {/* Season name + months */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className={cn(
                          'font-[var(--font-inter)] font-medium',
                          'text-[0.8125rem] leading-none',
                          'text-[var(--color-text-inverse)] mb-1.5',
                        )}>
                          {season.name}
                        </p>
                        <p className={cn(
                          'font-[var(--font-cormorant)] font-light italic',
                          'text-lg leading-none',
                          season.isBest
                            ? 'text-[var(--color-accent-primary)]'
                            : 'text-[var(--color-text-inverse-muted)]',
                        )}>
                          {season.months}
                        </p>
                      </div>

                      {season.isBest && (
                        <span className={cn(
                          'inline-block shrink-0 px-2.5 py-1',
                          'font-[var(--font-inter)] font-medium uppercase tracking-[0.16em] text-[8px]',
                          'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
                        )}>
                          Best
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className={cn(
                      'font-[var(--font-inter)] font-light',
                      'text-sm leading-[1.78]',
                      'text-[var(--color-text-inverse-muted)] mb-5',
                    )}>
                      {season.description}
                    </p>

                    {/* Highlights list */}
                    <ul
                      className="flex flex-col gap-2"
                      aria-label={`${season.name} highlights`}
                    >
                      {season.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            size={12}
                            strokeWidth={2}
                            className="text-[var(--color-accent-primary)] mt-[3px] shrink-0"
                            aria-hidden="true"
                          />
                          <span className={cn(
                            'font-[var(--font-inter)] font-light text-sm',
                            'text-[var(--color-text-inverse-muted)]',
                          )}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

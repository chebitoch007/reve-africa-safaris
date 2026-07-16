'use client';

/**
 * CountryShowcase
 *
 * Six-country destination grid. Client Component — scroll-reveal animation
 * wrapper around CountryCard Server Components.
 * Surface: bg-secondary (chalk-100).
 *
 * Grid: 2 cols on sm, 3 cols on lg.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { COUNTRIES, COUNTRIES_SECTION } from '@/lib/constants/destinations';
import { CountryCard } from '@/components/destinations/CountryCard';

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
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.08 },
  }),
};

export function CountryShowcase() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="countries-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
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
                {COUNTRIES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="countries-heading"
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
              {COUNTRIES_SECTION.headline}
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
            {COUNTRIES_SECTION.body}
          </motion.p>
        </div>

        {/* ── Country grid ────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Safari destinations by country"
        >
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <CountryCard country={country} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

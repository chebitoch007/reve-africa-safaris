'use client';

/**
 * DestinationsOverview
 *
 * Editorial introduction to the destinations page.
 * Client Component — scroll-triggered animations.
 * Surface: bg-primary (chalk-50).
 *
 * Two-column layout: headline left, body copy right.
 * A large stat figure anchors the composition.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { DESTINATIONS_OVERVIEW } from '@/lib/constants/destinations';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function DestinationsOverview() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="destinations-overview-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-center">

          {/* Left — eyebrow + headline + stat */}
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
                {DESTINATIONS_OVERVIEW.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="destinations-overview-heading"
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
                'whitespace-pre-line mb-12',
              )}
            >
              {DESTINATIONS_OVERVIEW.headline}
            </motion.h2>

            {/* Stat */}
            <motion.div
              custom={0.16}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="border-l-2 border-[var(--color-accent-primary)] pl-6"
            >
              <p className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(3rem,5vw,4rem)] leading-none',
                'text-[var(--color-accent-primary)]',
                'mb-2',
              )}>
                {DESTINATIONS_OVERVIEW.stat.value}
              </p>
              <p className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-xs tracking-[0.22em] leading-none',
                'text-[var(--color-text-primary)]',
                'mb-1',
              )}>
                {DESTINATIONS_OVERVIEW.stat.label}
              </p>
              <p className={cn(
                'font-[var(--font-inter)] font-light',
                'text-xs text-[var(--color-text-muted)]',
              )}>
                {DESTINATIONS_OVERVIEW.stat.detail}
              </p>
            </motion.div>
          </div>

          {/* Right — body paragraphs */}
          <div className="flex flex-col gap-6">
            {DESTINATIONS_OVERVIEW.body.map((paragraph, i) => (
              <motion.p
                key={i}
                custom={0.1 + i * 0.1}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className={cn(
                  'font-[var(--font-inter)] font-light',
                  'text-base lg:text-[1.0625rem] leading-[1.82]',
                  'text-[var(--color-text-secondary)]',
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

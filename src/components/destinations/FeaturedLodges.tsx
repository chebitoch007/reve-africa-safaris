'use client';

/**
 * FeaturedLodges
 *
 * Preview of four handpicked lodge properties. Client Component —
 * scroll-reveal animation wrapper around LodgeCard Server Components.
 * Surface: bg-secondary (chalk-100).
 *
 * The note at the top of the section makes clear these are editorial
 * previews, not a booking widget.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { FEATURED_LODGES, LODGES_SECTION } from '@/lib/constants/destinations';
import { LodgeCard } from '@/components/destinations/LodgeCard';

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

export function FeaturedLodges() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="lodges-heading"
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
                {LODGES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="lodges-heading"
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
              {LODGES_SECTION.headline}
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
            {LODGES_SECTION.body}
          </motion.p>
        </div>

        {/* ── Lodge grid ───────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Featured safari lodges"
        >
          {FEATURED_LODGES.map((lodge, i) => (
            <motion.div
              key={lodge.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <LodgeCard lodge={lodge} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

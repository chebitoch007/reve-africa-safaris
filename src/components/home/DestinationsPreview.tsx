'use client';

/**
 * DestinationsPreview
 *
 * Featured destinations section for the homepage. Client Component —
 * uses Framer Motion staggered whileInView for card reveals.
 *
 * Layout: 2-col on tablet, 4-col on desktop, with cards staggered on entry.
 * A "View All Destinations" link sits below the grid.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { FEATURED_DESTINATIONS } from '@/lib/constants/homepage';
import { DestinationCard } from '@/components/home/DestinationCard';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';

const headingVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic },
  },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y:       0,
    transition: {
      duration: DURATION.cinematic,
      ease:     EASE.cinematic,
      delay:    i * 0.1,
    },
  }),
};

export function DestinationsPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="destinations-heading"
      className={cn(
        'py-24 md:py-36',
        'bg-[var(--color-bg-secondary)]',
      )}
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Section header ─────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <motion.div
              variants={prefersReducedMotion ? {} : headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="mb-5"
            >
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="block h-px w-10 bg-[var(--color-accent-primary)]"
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    'font-[var(--font-inter)] font-medium uppercase',
                    'text-[10px] tracking-[0.28em] leading-none',
                    'text-[var(--color-text-muted)]',
                  )}
                >
                  Featured Destinations
                </span>
              </div>

              <h2
                id="destinations-heading"
                className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
                  'leading-[1.1] tracking-[-0.02em]',
                  'text-[var(--color-text-primary)]',
                )}
              >
                Africa&rsquo;s most extraordinary<br />
                places to explore
              </h2>
            </motion.div>
          </div>

          {/* View all link — desktop */}
          <motion.div
            variants={prefersReducedMotion ? {} : headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="hidden md:block shrink-0"
          >
            <Link
              href="/destinations"
              className={cn(
                'inline-flex items-center gap-2',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                'text-[var(--color-text-secondary)]',
                'transition-all duration-[250ms]',
                'hover:text-[var(--color-text-primary)] hover:gap-3',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[var(--color-accent-primary)]',
                'focus-visible:ring-offset-2 rounded-[2px]',
              )}
            >
              View all destinations
              <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* ── Destination cards grid ────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          role="list"
          aria-label="Featured destinations"
        >
          {FEATURED_DESTINATIONS.map((destination, i) => (
            <motion.div
              key={destination.id}
              custom={i}
              variants={prefersReducedMotion ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              role="listitem"
            >
              <DestinationCard
                destination={destination}
                aspect="portrait"
                index={i}
              />
            </motion.div>
          ))}
        </div>

        {/* View all link — mobile */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/destinations"
            className={cn(
              'inline-flex items-center gap-2',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
              'text-[var(--color-text-secondary)]',
              'border-b border-[var(--color-border-default)] pb-0.5',
              'transition-all duration-[250ms]',
              'hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 rounded-[2px]',
            )}
          >
            View all destinations
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * DestinationsCTA
 *
 * Destinations page closing call to action. Client Component.
 * Surface: bg-deep (basalt-950) — consistent with all other page closing CTAs.
 * Follows the same pattern as AboutCTA and FinalCTA.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { DESTINATIONS_CTA } from '@/lib/constants/destinations';

const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function DestinationsCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="destinations-cta-heading"
      className="relative overflow-hidden py-28 md:py-40 bg-[var(--color-bg-deep)]"
    >
      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(212,160,23,0.08) 0%, transparent 62%)',
        }}
        aria-hidden="true"
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4A017)' }}
        aria-hidden="true"
      />

      <div className="relative z-[1] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 text-center">

        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={reduced ? {} : itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
          <span className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[10px] tracking-[0.28em] leading-none',
            'text-[var(--color-accent-light)]',
          )}>
            {DESTINATIONS_CTA.eyebrow}
          </span>
          <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="destinations-cta-heading"
          custom={0.08}
          variants={reduced ? {} : itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className={cn(
            'font-[var(--font-cormorant)] font-light italic',
            'text-[clamp(3.5rem,7vw+0.5rem,6rem)]',
            'leading-[1.0] tracking-[-0.02em]',
            'text-[var(--color-text-inverse)]',
            'whitespace-pre-line mb-8',
          )}
        >
          {DESTINATIONS_CTA.headline}
        </motion.h2>

        {/* Body */}
        <motion.p
          custom={0.16}
          variants={reduced ? {} : itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className={cn(
            'font-[var(--font-inter)] font-light',
            'text-base lg:text-lg leading-relaxed',
            'text-[var(--color-chalk-300)]',
            'max-w-xl mx-auto mb-12',
          )}
        >
          {DESTINATIONS_CTA.body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.24}
          variants={reduced ? {} : itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href={DESTINATIONS_CTA.primaryCTA.href}
            className={cn(
              'inline-flex items-center justify-center',
              'px-10 py-4 min-w-[11rem]',
              'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
              'transition-all duration-[300ms]',
              'hover:bg-[var(--color-accent-light)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]',
            )}
          >
            {DESTINATIONS_CTA.primaryCTA.label}
          </Link>

          <Link
            href={DESTINATIONS_CTA.secondaryCTA.href}
            className={cn(
              'inline-flex items-center justify-center',
              'px-10 py-4 min-w-[11rem]',
              'border border-[rgba(255,255,255,0.2)]',
              'text-[var(--color-text-inverse)]',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
              'transition-all duration-[300ms]',
              'hover:border-[rgba(255,255,255,0.55)] hover:bg-[rgba(255,255,255,0.05)]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]',
            )}
          >
            {DESTINATIONS_CTA.secondaryCTA.label}
          </Link>
        </motion.div>

        {/* Detail line */}
        <motion.p
          custom={0.3}
          variants={reduced ? {} : itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className={cn(
            'font-[var(--font-inter)] text-xs italic',
            'text-[var(--color-text-inverse-muted)]',
          )}
        >
          {DESTINATIONS_CTA.detail}
        </motion.p>
      </div>
    </section>
  );
}

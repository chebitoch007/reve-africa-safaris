'use client';

/**
 * CTASection
 *
 * Premium dark-surface call to action section. Client Component —
 * uses Framer Motion whileInView for content reveal.
 *
 * Sits above the footer. Invites visitors to begin planning their safari.
 * Uses the basalt dark surface with amber accent to create a dramatic close.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { CTA_CONTENT } from '@/lib/constants/homepage';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';

const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.cinematic,
      ease:     EASE.cinematic,
      delay,
    },
  }),
};

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cta-heading"
      className={cn(
        'relative overflow-hidden',
        'py-28 md:py-40',
        'bg-[var(--color-bg-inverse)]',
      )}
    >
      {/* Ambient amber glow — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[40rem] h-[30rem] opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, #D4A017, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{
          background: 'linear-gradient(to right, transparent, #D4A017 30%, #D4A017 70%, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[1] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={prefersReducedMotion ? {} : itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="mb-8"
          >
            <div className="flex items-center gap-4">
              <span
                className="block h-px w-10 bg-[var(--color-accent-primary)]"
                aria-hidden="true"
              />
              <span
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[10px] tracking-[0.28em] leading-none',
                  'text-[var(--color-accent-light)]',
                )}
              >
                {CTA_CONTENT.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="cta-heading"
            custom={0.1}
            variants={prefersReducedMotion ? {} : itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(3rem,6vw+0.5rem,5rem)]',
              'leading-[1.05] tracking-[-0.02em]',
              'text-[var(--color-text-inverse)]',
              'whitespace-pre-line mb-8',
            )}
          >
            {CTA_CONTENT.headline}
          </motion.h2>

          {/* Body */}
          <motion.p
            custom={0.2}
            variants={prefersReducedMotion ? {} : itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base lg:text-lg leading-relaxed',
              'text-[var(--color-chalk-300)]',
              'max-w-xl mb-12',
            )}
          >
            {CTA_CONTENT.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.3}
            variants={prefersReducedMotion ? {} : itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Primary */}
            <Link
              href={CTA_CONTENT.primaryCTA.href}
              className={cn(
                'inline-flex items-center justify-center',
                'px-8 py-4 min-w-[10rem]',
                'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                'transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:bg-[var(--color-accent-light)]',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[var(--color-accent-primary)]',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
              )}
            >
              {CTA_CONTENT.primaryCTA.label}
            </Link>

            {/* Secondary */}
            <Link
              href={CTA_CONTENT.secondaryCTA.href}
              className={cn(
                'inline-flex items-center justify-center',
                'px-8 py-4 min-w-[10rem]',
                'border border-[rgba(255,255,255,0.25)]',
                'text-[var(--color-text-inverse)]',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                'transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:border-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.05)]',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[var(--color-accent-primary)]',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
              )}
            >
              {CTA_CONTENT.secondaryCTA.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

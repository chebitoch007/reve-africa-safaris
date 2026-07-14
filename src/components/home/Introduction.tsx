'use client';

/**
 * Introduction
 *
 * Editorial brand introduction section. Client Component — uses Framer Motion
 * whileInView for scroll-triggered reveals.
 *
 * Layout:
 * ┌────────────────────────────────────────────────┐
 * │  [Eyebrow]                                     │
 * │  [Display headline — Cormorant]                │
 * │                                                │
 * │  [Body copy col 1]   [Body copy col 2]        │
 * │                                                │
 * │  ──────────────────────────────────────────   │
 * │  [Stat]  [Stat]  [Stat]  [Stat]               │
 * └────────────────────────────────────────────────┘
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { INTRO_CONTENT } from '@/lib/constants/homepage';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
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

const statVariant = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    0.1 * i,
    },
  }),
};

export function Introduction() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="intro-heading"
      className={cn(
        'py-24 md:py-36',
        'bg-[var(--color-bg-primary)]',
      )}
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        {/* ── Upper: eyebrow + headline ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24">

          {/* Left — headline */}
          <div>
            <motion.div
              custom={0}
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="mb-6"
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
                    'text-[var(--color-text-muted)]',
                  )}
                >
                  {INTRO_CONTENT.eyebrow}
                </span>
              </div>
            </motion.div>

            <motion.h2
              id="intro-heading"
              custom={0.1}
              variants={prefersReducedMotion ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2.25rem,4vw+0.5rem,3.5rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)]',
                'whitespace-pre-line',
              )}
            >
              {INTRO_CONTENT.headline}
            </motion.h2>
          </div>

          {/* Right — body copy */}
          <div className="flex flex-col justify-end gap-6">
            {INTRO_CONTENT.body.map((paragraph, i) => (
              <motion.p
                key={i}
                custom={0.2 + i * 0.1}
                variants={prefersReducedMotion ? {} : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className={cn(
                  'font-[var(--font-inter)] font-light',
                  'text-base lg:text-[1.0625rem] leading-[1.8]',
                  'text-[var(--color-text-secondary)]',
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: DURATION.cinematic, ease: EASE.cinematic }}
          className="h-px bg-[var(--color-border-light)] mb-16"
          aria-hidden="true"
        />

        {/* ── Stats row ────────────────────────────────────── */}
        <dl
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          aria-label="Company highlights"
        >
          {INTRO_CONTENT.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={prefersReducedMotion ? {} : statVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex flex-col gap-2"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(2rem,3vw,2.75rem)]',
                  'leading-none tracking-[-0.02em]',
                  'text-[var(--color-accent-primary)]',
                )}
                aria-label={`${stat.value} — ${stat.label}`}
              >
                {stat.value}
              </dd>
              <span
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[9px] tracking-[0.22em]',
                  'text-[var(--color-text-muted)]',
                )}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

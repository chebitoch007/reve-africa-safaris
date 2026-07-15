'use client';

/**
 * ConservationCommitment
 *
 * Rêve's conservation pledge and three initiatives.
 * Client Component for scroll animations.
 * Surface: bg-inverse (basalt-900) — dark, weighty surface befitting the
 * gravity of the conservation message.
 *
 * ┌────────────────────────────────────────────────┐
 * │  [Eyebrow]  [Headline]                         │
 * │             [Body]                             │
 * │                                                │
 * │  [Initiative 1]  [Initiative 2]  [Initiative 3]│
 * │   stat + label   stat + label    stat + label  │
 * └────────────────────────────────────────────────┘
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { CONSERVATION } from '@/lib/constants/about';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.1 },
  }),
};

export function ConservationCommitment() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="conservation-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">

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
                {CONSERVATION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="conservation-heading"
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
              {CONSERVATION.headline}
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
            {CONSERVATION.body}
          </motion.p>
        </div>

        {/* ── Initiative cards ────────────────────────────────── */}
        <dl
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-inverse)]"
          aria-label="Conservation initiatives"
        >
          {CONSERVATION.initiatives.map((initiative, i) => (
            <motion.div
              key={initiative.id}
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="bg-[var(--color-bg-inverse)] p-8 lg:p-10 group"
            >
              {/* Leaf icon */}
              <div className={cn(
                'flex items-center justify-center w-10 h-10 mb-8',
                'border border-[var(--color-border-inverse)]',
                'text-[var(--color-accent-primary)]',
                'transition-colors duration-[300ms]',
                'group-hover:border-[var(--color-accent-primary)]',
              )}>
                <Leaf size={16} strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* Stat */}
              <div className="mb-6">
                <span className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[clamp(2.25rem,4vw,3rem)] leading-none',
                  'text-[var(--color-accent-primary)]',
                )}>
                  {initiative.stat}
                </span>
                <p className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[9px] tracking-[0.22em] leading-none',
                  'text-[var(--color-text-inverse-muted)]',
                  'mt-2',
                )}>
                  {initiative.statLabel}
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px w-8 bg-[var(--color-border-inverse)] mb-6 transition-all duration-[400ms] group-hover:bg-[var(--color-accent-primary)] group-hover:w-12"
                aria-hidden="true"
              />

              <dt className={cn(
                'font-[var(--font-inter)] font-medium',
                'text-sm text-[var(--color-text-inverse)]',
                'mb-3',
              )}>
                {initiative.title}
              </dt>
              <dd className={cn(
                'font-[var(--font-inter)] font-light',
                'text-sm leading-[1.78]',
                'text-[var(--color-text-inverse-muted)]',
              )}>
                {initiative.description}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

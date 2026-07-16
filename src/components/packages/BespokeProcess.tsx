'use client';

/**
 * BespokeProcess
 *
 * Bespoke / custom journey planning section.
 * Client Component — scroll-reveal animations.
 * Surface: bg-secondary (chalk-100).
 *
 * Layout: editorial intro left, four-step process right.
 * The four numbered steps use the established Cormorant numeral pattern
 * (same visual language as OurApproach on the About page).
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { BESPOKE_SECTION } from '@/lib/constants/packages';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const stepVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.09 },
  }),
};

export function BespokeProcess() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="bespoke-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-secondary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24">

          {/* Left — eyebrow, headline, body, CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start">
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
                {BESPOKE_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="bespoke-heading"
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
                'whitespace-pre-line mb-6',
              )}
            >
              {BESPOKE_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-inter)] font-light',
                'text-sm lg:text-[1.0625rem] leading-[1.82]',
                'text-[var(--color-text-secondary)] mb-8',
              )}
            >
              {BESPOKE_SECTION.body}
            </motion.p>

            <motion.div
              custom={0.2}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <Link
                href={BESPOKE_SECTION.cta.href}
                className={cn(
                  'inline-flex items-center gap-2',
                  'px-8 py-4',
                  'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                  'transition-all duration-[300ms]',
                  'hover:bg-[var(--color-basalt-800)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-secondary)]',
                )}
              >
                {BESPOKE_SECTION.cta.label}
                <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — four steps */}
          <ol
            className="flex flex-col gap-px bg-[var(--color-border-light)]"
            aria-label="How bespoke journey planning works"
          >
            {BESPOKE_SECTION.steps.map((step, i) => (
              <motion.li
                key={step.id}
                custom={i}
                variants={reduced ? {} : stepVariant}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="bg-[var(--color-bg-secondary)] p-7 lg:p-9 group"
              >
                {/* Step number */}
                <span
                  className={cn(
                    'block font-[var(--font-cormorant)] font-light italic',
                    'text-[3rem] leading-none mb-4',
                    'text-[var(--color-accent-primary)] opacity-50',
                    'select-none',
                  )}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Divider */}
                <div
                  className="h-px w-8 bg-[var(--color-accent-primary)] mb-4 transition-all duration-[400ms] group-hover:w-14"
                  aria-hidden="true"
                />

                <h3 className={cn(
                  'font-[var(--font-inter)] font-medium text-[0.9375rem]',
                  'text-[var(--color-text-primary)] mb-3',
                )}>
                  {step.title}
                </h3>
                <p className={cn(
                  'font-[var(--font-inter)] font-light text-sm leading-[1.78]',
                  'text-[var(--color-text-secondary)]',
                )}>
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

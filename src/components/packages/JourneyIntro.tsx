'use client';

/**
 * JourneyIntro
 *
 * Philosophy introduction — explains the bespoke approach.
 * Client Component — scroll-reveal animations.
 * Surface: bg-primary (chalk-50).
 *
 * Three-stat row anchors the section below the editorial copy.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { JOURNEY_INTRO } from '@/lib/constants/packages';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function JourneyIntro() {
  const reduced = useReducedMotion();
  const stats   = [JOURNEY_INTRO.stat1, JOURNEY_INTRO.stat2, JOURNEY_INTRO.stat3];

  return (
    <section
      aria-labelledby="journey-intro-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Main grid: headline left, copy right ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 mb-16 lg:mb-20">

          {/* Left — eyebrow + headline */}
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
                {JOURNEY_INTRO.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="journey-intro-heading"
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
              {JOURNEY_INTRO.headline}
            </motion.h2>
          </div>

          {/* Right — body paragraphs */}
          <div className="flex flex-col gap-6 justify-center">
            {JOURNEY_INTRO.body.map((para, i) => (
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
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: DURATION.cinematic, ease: EASE.cinematic }}
          className="h-px bg-[var(--color-border-light)] mb-16 lg:mb-20"
          aria-hidden="true"
        />

        {/* ── Stats row ─────────────────────────────────────────── */}
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-border-light)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i * 0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="bg-[var(--color-bg-primary)] px-8 lg:px-10 py-8"
            >
              <dt className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[9px] tracking-[0.22em] leading-none',
                'text-[var(--color-text-muted)] mb-3',
              )}>
                {stat.label}
              </dt>
              <dd className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2.5rem,4vw,3.5rem)] leading-none',
                'text-[var(--color-accent-primary)]',
              )}>
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

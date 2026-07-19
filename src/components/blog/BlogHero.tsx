'use client';

/**
 * BlogHero
 *
 * Blog page editorial hero. Client Component — Framer Motion entry animations.
 * Surface: bg-deep (basalt-950).
 *
 * Two-column layout at lg+: large italic headline left, subheadline + scroll
 * indicator right. Shifts to centred stacked on mobile.
 *
 * Replace the gradient placeholder with <Image fill priority> when a
 * flagship editorial photograph is available.
 */

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE } from '@/lib/design-system';
import { BLOG_HERO } from '@/lib/constants/blog';

const itemVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const bgVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.6, ease: EASE.cinematic } },
};

export function BlogHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Field Notes — safari journal and editorial dispatches"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(520px, 75vh, 820px)' }}
    >
      {/* ── Background placeholder ─────────────────────────────────────
          Replace with <Image fill priority> when an editorial photograph
          is available — ideally a wide, textured landscape image.
          Gradient evokes pre-dawn light across the Serengeti plains.
      ────────────────────────────────────────────────────────────── */}
      <motion.div
        variants={reduced ? {} : bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src="/images/blog/hero/img-036-safari-planning-desk.jpg"
          alt="Field notes and binoculars on a camp table in the African bush"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Header spacer */}
      <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[1] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end pb-24 pt-16 lg:pt-24 lg:pb-32">

          {/* Left — headline */}
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-8"
            >
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
                {BLOG_HERO.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(3.5rem,6.5vw+0.5rem,6.25rem)]',
                'leading-[1.02] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)]',
                'whitespace-pre-line',
              )}
            >
              {BLOG_HERO.headline}
            </motion.h1>
          </div>

          {/* Right — subheadline + decorative rule */}
          <div className="lg:pb-4">
            <motion.div
              custom={0.18}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="border-l border-[var(--color-accent-primary)] pl-6"
            >
              <p
                className={cn(
                  'font-[var(--font-inter)] font-light',
                  'text-base lg:text-lg leading-[1.75]',
                  'text-[var(--color-chalk-300)]',
                  'mb-10',
                )}
              >
                {BLOG_HERO.subheadline}
              </p>

              {/* Scroll indicator */}
              <div className="flex items-center gap-4" aria-hidden="true">
                <span
                  className={cn(
                    'font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em]',
                    'text-[var(--color-text-inverse-muted)]',
                  )}
                >
                  Scroll
                </span>
                <span className="block h-px w-12 bg-gradient-to-r from-[rgba(255,255,255,0.25)] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

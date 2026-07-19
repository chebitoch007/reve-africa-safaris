'use client';

/**
 * AboutHero
 *
 * About page hero — editorial entry on a deep basalt surface.
 * Layout splits into a two-column grid on desktop: the large Cormorant
 * headline on the left, the supporting copy + decorative element on the right.
 *
 * ┌────────────────────────────────────────────────────┐
 * │  [Eyebrow]                                         │
 * │                                                    │
 * │  [Large headline — Cormorant]  [Subheadline copy] │
 * │                                                    │
 * │  ──────────────────────────────────────────────── │
 * │                            [Founding year detail] │
 * └────────────────────────────────────────────────────┘
 *
 * Placeholder background: basalt gradient with amber horizon glow.
 * Replace placeholder div with <Image fill priority> when photography arrives.
 */

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { ABOUT_HERO } from '@/lib/constants/about';

const itemVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const lineVariant = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: 0.6 },
  },
};

const imageVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: EASE.cinematic } },
};

export function AboutHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="About Rêve Africa Safaris"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(540px, 75vh, 820px)' }}
    >
      {/* ── Background placeholder ─────────────────────────────────────
          Replace this div with <Image fill priority> when photography
          is available. The gradient suggests Kenyan highland at dusk.
      ────────────────────────────────────────────────────────────── */}
      <motion.div
        variants={reduced ? {} : imageVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/about/hero/img-025-safari-guide-field.jpg"
          alt="Safari guide tracking wildlife in the East African bush at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay for content legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(12,13,11,0.3) 0%, rgba(12,13,11,0.1) 100%)' }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-[2] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 flex flex-col">
        {/* Spacer for fixed header */}
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

        <div className="flex-1 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — headline block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              custom={0.2}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-8"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-accent-light)]',
              )}>
                {ABOUT_HERO.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.32}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[var(--color-text-inverse)]',
                'text-[clamp(3.25rem,6vw+0.5rem,5.5rem)]',
                'leading-[1.05] tracking-[-0.02em]',
                'whitespace-pre-line',
              )}
            >
              {ABOUT_HERO.headline}
            </motion.h1>
          </div>

          {/* Right — body + decorative rule */}
          <div className="flex flex-col justify-center gap-10">
            <motion.p
              custom={0.44}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-inter)] font-light',
                'text-base lg:text-lg leading-[1.8]',
                'text-[var(--color-chalk-300)]',
                'max-w-md',
              )}
            >
              {ABOUT_HERO.subheadline}
            </motion.p>

            {/* Divider + founding year */}
            <motion.div
              variants={reduced ? {} : lineVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              <div className="h-px flex-1 bg-[var(--color-border-inverse)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[9px] tracking-[0.3em] leading-none',
                'text-[var(--color-text-inverse-muted)]',
                'shrink-0',
              )}>
                Est. 2009
              </span>
              <div className="h-px w-8 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

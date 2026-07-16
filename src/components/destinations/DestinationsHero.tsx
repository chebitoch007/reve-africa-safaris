'use client';

/**
 * DestinationsHero
 *
 * Destinations page editorial hero. Client Component — Framer Motion entry
 * animations. Surface: bg-deep (basalt-950).
 *
 * Layout: full-width dark entry with a large centred headline.
 * The large italic headline sits above supporting copy and a single CTA.
 * A geographic detail line anchors the composition.
 *
 * Replace the gradient placeholder with <Image fill priority> when
 * destination hero photography is available.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { DESTINATIONS_HERO } from '@/lib/constants/destinations';

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

export function DestinationsHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Destinations — an introduction"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(520px, 72vh, 800px)' }}
    >
      {/* ── Background placeholder ─────────────────────────────────────
          Replace this div with <Image fill priority> when destination
          hero photography is available.
          The gradient suggests the tonal range of the East African savanna.
      ────────────────────────────────────────────────────────────── */}
      <motion.div
        variants={reduced ? {} : bgVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 60% 40%, rgba(158,139,77,0.12) 0%, transparent 55%),
              radial-gradient(ellipse at 20% 70%, rgba(98,122,83,0.07) 0%, transparent 45%),
              linear-gradient(150deg, #0C0D0B 0%, #131510 45%, #1C1F18 100%)
            `,
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Amber horizon glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at 30% 100%, #D4A017, transparent 55%)' }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(12,13,11,0.25) 0%, rgba(12,13,11,0.05) 100%)' }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-[2] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 flex flex-col">
        {/* Header spacer */}
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

        <div className="flex-1 py-16 lg:py-24 flex flex-col justify-center">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.div
              custom={0.2}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-10"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-accent-light)]',
              )}>
                {DESTINATIONS_HERO.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.3}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[var(--color-text-inverse)]',
                'text-[clamp(3.5rem,7vw+0.5rem,6.5rem)]',
                'leading-[1.0] tracking-[-0.02em]',
                'whitespace-pre-line mb-8',
              )}
            >
              {DESTINATIONS_HERO.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.42}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-inter)] font-light',
                'text-base lg:text-lg leading-[1.78]',
                'text-[var(--color-chalk-300)]',
                'max-w-xl mb-10',
              )}
            >
              {DESTINATIONS_HERO.subheadline}
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={0.52}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={DESTINATIONS_HERO.primaryCTA.href}
                className={cn(
                  'inline-flex items-center justify-center',
                  'px-10 py-4',
                  'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                  'transition-all duration-[300ms]',
                  'hover:bg-[var(--color-accent-light)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]',
                )}
              >
                {DESTINATIONS_HERO.primaryCTA.label}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

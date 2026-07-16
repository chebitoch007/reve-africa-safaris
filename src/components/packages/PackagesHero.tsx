'use client';

/**
 * PackagesHero
 *
 * Safari Packages page editorial hero. Client Component — Framer Motion
 * entry animations. Surface: bg-deep (basalt-950).
 *
 * Asymmetric two-column layout: the oversized italic headline fills the left,
 * with supporting copy and CTA on the right — contrasting weight on screen.
 *
 * Replace the gradient placeholder with <Image fill priority> when
 * photography is available.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE } from '@/lib/design-system';
import { PACKAGES_HERO } from '@/lib/constants/packages';

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

export function PackagesHero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Safari Packages — an introduction"
      className="relative w-full overflow-hidden bg-[var(--color-bg-deep)]"
      style={{ minHeight: 'clamp(540px, 75vh, 820px)' }}
    >
      {/* ── Background placeholder ─────────────────────────────────────
          Replace with <Image fill priority> when photography is available.
          Gradient suggests dawn light over the Serengeti.
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
              radial-gradient(ellipse at 75% 50%, rgba(158,139,77,0.13) 0%, transparent 50%),
              radial-gradient(ellipse at 15% 80%, rgba(98,122,83,0.06) 0%, transparent 45%),
              linear-gradient(155deg, #0C0D0B 0%, #131510 50%, #1C1F18 100%)
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
          className="absolute bottom-0 right-0 w-2/3 h-1/2 opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at 80% 100%, #D4A017, transparent 55%)' }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(12,13,11,0.2) 0%, rgba(12,13,11,0.05) 100%)' }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-[2] w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 flex flex-col">
        {/* Header spacer */}
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

        <div className="flex-1 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — headline */}
          <div>
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
                {PACKAGES_HERO.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              custom={0.3}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[var(--color-text-inverse)]',
                'text-[clamp(3rem,5.5vw+0.5rem,5.5rem)]',
                'leading-[1.05] tracking-[-0.02em]',
                'whitespace-pre-line',
              )}
            >
              {PACKAGES_HERO.headline}
            </motion.h1>
          </div>

          {/* Right — subheadline + CTA */}
          <div className="flex flex-col justify-center gap-8">
            <motion.p
              custom={0.42}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className={cn(
                'font-[var(--font-inter)] font-light',
                'text-base lg:text-lg leading-[1.78]',
                'text-[var(--color-chalk-300)]',
              )}
            >
              {PACKAGES_HERO.subheadline}
            </motion.p>

            <motion.div
              custom={0.52}
              variants={reduced ? {} : itemVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              <Link
                href={PACKAGES_HERO.primaryCTA.href}
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
                {PACKAGES_HERO.primaryCTA.label}
              </Link>

              {/* Est. detail */}
              <div className="hidden sm:flex items-center gap-3" aria-hidden="true">
                <div className="h-px w-6 bg-[var(--color-border-inverse)]" />
                <span className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[9px] tracking-[0.26em] leading-none',
                  'text-[var(--color-text-inverse-muted)]',
                )}>
                  Est. 2009
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

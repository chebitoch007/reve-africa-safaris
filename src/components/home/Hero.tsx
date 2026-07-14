'use client';

/**
 * Hero
 *
 * Full-viewport editorial hero section. Client Component — uses Framer Motion
 * for staggered entry animations and a CSS scroll indicator.
 *
 * Visual structure (dark surface, overlays hero imagery placeholder):
 * ┌────────────────────────────────────────────────┐
 * │  [eyebrow label]                               │
 * │                                                │
 * │  [Large Cormorant display headline]            │
 * │                                                │
 * │  [Supporting copy]                             │
 * │                                                │
 * │  [Primary CTA]  [Secondary CTA]               │
 * │                                                │
 * │                              ↓ Scroll          │
 * └────────────────────────────────────────────────┘
 *
 * Placeholder background: deep basalt gradient, ready for next/image.
 * Real photography drops in by replacing the placeholder div with
 * <Image fill priority> inside the existing container.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { HERO_CONTENT } from '@/lib/constants/homepage';
import {
  DURATION,
  EASE,
} from '@/lib/design-system';

// ─────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────

const containerVariants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren:  0.14,
      delayChildren:    0.3,
    },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y:       0,
    transition: {
      duration: DURATION.cinematic,
      ease:     EASE.cinematic,
    },
  },
};

const lineVariants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    0.2,
    },
  },
};

const imageVariants = {
  hidden:  { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale:   1,
    transition: {
      duration: 1.8,
      ease:     EASE.cinematic,
    },
  },
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const resolvedContainer = prefersReducedMotion
    ? {}
    : containerVariants;

  const resolvedItem = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.15 } } }
    : itemVariants;

  return (
    <section
      aria-label="Welcome to Rêve Africa Safaris"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Background placeholder ────────────────────────────────
          Replace this div with <Image fill priority> when photography
          is available. The gradient approximates a savanna dusk palette.
      ─────────────────────────────────────────────────────────── */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 60% 40%, #363B2D 0%, transparent 60%),
              linear-gradient(160deg, #1C1F18 0%, #0C0D0B 45%, #282C22 100%)
            `,
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Amber horizon glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
          style={{
            background: 'linear-gradient(to top, #D4A017, transparent)',
          }}
        />
      </motion.div>

      {/* ── Overlay gradient — content legibility ─────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(12,13,11,0.72) 0%, rgba(12,13,11,0.35) 60%, rgba(12,13,11,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-[2] flex flex-col flex-1 w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        {/* Spacer for fixed header */}
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

        {/* Main content — vertically centred in remaining space */}
        <motion.div
          className="flex flex-col justify-center flex-1 max-w-3xl py-16 lg:py-24"
          variants={resolvedContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={resolvedItem} className="mb-8">
            <div className="flex items-center gap-4">
              <motion.span
                variants={lineVariants}
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
                {HERO_CONTENT.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={resolvedItem}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[var(--color-text-inverse)]',
              'mb-8',
              // Fluid type: clamp from 52px (mobile) to 96px (desktop)
              'text-[clamp(3.25rem,7vw+0.5rem,6rem)]',
              'leading-[1.05] tracking-[-0.02em]',
              'whitespace-pre-line',
            )}
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={resolvedItem}
            className={cn(
              'font-[var(--font-inter)] font-light',
              'text-base lg:text-lg leading-relaxed',
              'text-[var(--color-chalk-300)]',
              'max-w-lg mb-12',
              'whitespace-pre-line',
            )}
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={resolvedItem}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Primary */}
            <Link
              href={HERO_CONTENT.primaryCTA.href}
              className={cn(
                'inline-flex items-center justify-center',
                'px-8 py-4 min-w-[10rem]',
                'bg-[var(--color-text-inverse)] text-[var(--color-bg-inverse)]',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                'transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:bg-[var(--color-chalk-200)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              )}
            >
              {HERO_CONTENT.primaryCTA.label}
            </Link>

            {/* Secondary */}
            <Link
              href={HERO_CONTENT.secondaryCTA.href}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-8 py-4 min-w-[10rem]',
                'border border-[rgba(255,255,255,0.3)]',
                'text-[var(--color-text-inverse)]',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                'transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:border-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.06)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              )}
            >
              {HERO_CONTENT.secondaryCTA.label}
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="pb-10 flex items-end justify-end"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[9px] tracking-[0.24em] leading-none',
                'text-[var(--color-chalk-300)]',
                '[writing-mode:vertical-rl] rotate-180',
              )}
            >
              Scroll
            </span>
            <div className="w-px h-16 relative overflow-hidden bg-[rgba(255,255,255,0.15)]">
              <motion.div
                className="absolute top-0 left-0 right-0 bg-[var(--color-accent-primary)]"
                animate={{ y: ['0%', '100%'] }}
                transition={{
                  duration:   1.4,
                  ease:       'linear',
                  repeat:     Infinity,
                  repeatDelay: 0.4,
                }}
                style={{ height: '40%' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

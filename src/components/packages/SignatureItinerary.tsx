'use client';

/**
 * SignatureItinerary
 *
 * Editorial showcase of the flagship East Africa Grand Tour itinerary.
 * Client Component — scroll-reveal animations.
 * Surface: bg-inverse (basalt-900) — dark, authoritative.
 *
 * Asymmetric layout: headline + image placeholder left, day-by-day
 * itinerary timeline right.
 */

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { SIGNATURE_ITINERARY } from '@/lib/constants/packages';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const dayVariant = {
  hidden:  { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.07 },
  }),
};

export function SignatureItinerary() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="signature-itinerary-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex items-center gap-4 mb-10 lg:mb-14"
        >
          <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
          <span className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[10px] tracking-[0.28em] leading-none',
            'text-[var(--color-accent-light)]',
          )}>
            {SIGNATURE_ITINERARY.eyebrow}
          </span>
        </motion.div>

        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">

          {/* Left — image placeholder + headline + meta */}
          <div>
            {/* Image placeholder ─────────────────────────────────
                Replace with <Image fill> when photography available.
                Portrait-ish ratio; spans roughly half the viewport height.
            ─────────────────────────────────────────────────────── */}
            <motion.div
              custom={0.06}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="relative overflow-hidden mb-8"
              style={{ aspectRatio: '4/3' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(155deg, ${SIGNATURE_ITINERARY.placeholderFrom} 0%, ${SIGNATURE_ITINERARY.placeholderTo} 100%)`,
                }}
                aria-hidden="true"
              >
                {/* Noise texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Label badge */}
              <div className="absolute top-4 left-4 z-[1]">
                <span className={cn(
                  'inline-block px-3 py-1.5',
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9px]',
                  'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
                )}>
                  {SIGNATURE_ITINERARY.label}
                </span>
              </div>
            </motion.div>

            {/* Meta row */}
            <motion.div
              custom={0.12}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex flex-wrap gap-5 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 text-[var(--color-text-inverse-muted)]">
                <Clock size={12} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-[var(--font-inter)] text-xs">{SIGNATURE_ITINERARY.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[var(--color-text-inverse-muted)]">
                <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-[var(--font-inter)] text-xs">{SIGNATURE_ITINERARY.countries}</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              id="signature-itinerary-heading"
              custom={0.18}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3.25rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)]',
                'whitespace-pre-line mb-5',
              )}
            >
              {SIGNATURE_ITINERARY.headline}
            </motion.h2>

            <motion.p
              custom={0.24}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-inter)] font-light',
                'text-sm lg:text-[1.0625rem] leading-[1.8]',
                'text-[var(--color-text-inverse-muted)] mb-8',
              )}
            >
              {SIGNATURE_ITINERARY.body}
            </motion.p>

            <motion.div
              custom={0.30}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <Link
                href={SIGNATURE_ITINERARY.href}
                className={cn(
                  'inline-flex items-center gap-2',
                  'px-8 py-4',
                  'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                  'transition-all duration-[300ms]',
                  'hover:bg-[var(--color-accent-light)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                )}
                aria-label="Enquire about the East Africa Grand Tour"
              >
                Enquire About This Journey
                <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — itinerary timeline */}
          <div>
            <ol
              className="flex flex-col divide-y divide-[var(--color-border-inverse)]"
              aria-label="East Africa Grand Tour itinerary"
            >
              {SIGNATURE_ITINERARY.itinerary.map((day, i) => (
                <motion.li
                  key={day.day}
                  custom={i}
                  variants={reduced ? {} : dayVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="py-7 first:pt-0 last:pb-0"
                >
                  <p className={cn(
                    'font-[var(--font-inter)] font-medium uppercase',
                    'text-[9px] tracking-[0.22em] leading-none',
                    'text-[var(--color-accent-primary)] mb-2',
                  )}>
                    {day.day}
                  </p>
                  <h3 className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-[1.25rem] leading-[1.2] tracking-[-0.01em]',
                    'text-[var(--color-text-inverse)] mb-3',
                  )}>
                    {day.title}
                  </h3>
                  <p className={cn(
                    'font-[var(--font-inter)] font-light',
                    'text-sm leading-[1.78]',
                    'text-[var(--color-text-inverse-muted)]',
                  )}>
                    {day.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * OfficeLocation
 *
 * Office address, travel details, and visiting note.
 * Client Component — scroll-reveal. Surface: bg-dune (dune-100).
 *
 * Two-column layout: intro + address left, location detail dl right.
 * Map placeholder included — architecture only, no maps API.
 * Replace the placeholder with an <iframe> or maps component when
 * a maps integration is introduced.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { OFFICE_LOCATION } from '@/lib/constants/contact';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function OfficeLocation() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="office-location-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            custom={0}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex items-center gap-4 mb-5"
          >
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span className={cn(
              'font-[var(--font-inter)] font-medium uppercase',
              'text-[10px] tracking-[0.28em] leading-none',
              'text-[var(--color-text-muted)]',
            )}>
              {OFFICE_LOCATION.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            id="office-location-heading"
            custom={0.08}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className={cn(
              'font-[var(--font-cormorant)] font-light italic',
              'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
              'leading-[1.1] tracking-[-0.02em]',
              'text-[var(--color-text-primary)] whitespace-pre-line',
            )}
          >
            {OFFICE_LOCATION.headline}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — address + intro */}
          <div>
            <motion.p
              custom={0.1}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)] mb-10"
            >
              {OFFICE_LOCATION.intro}
            </motion.p>

            {/* Address */}
            <motion.address
              custom={0.16}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'not-italic flex items-start gap-3 mb-10',
                'border-l-2 border-[var(--color-accent-primary)] pl-6',
              )}
            >
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="text-[var(--color-accent-primary)] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-[var(--font-inter)] font-medium text-sm text-[var(--color-text-primary)]">
                  {OFFICE_LOCATION.address.street}
                </p>
                <p className="font-[var(--font-inter)] font-light text-sm text-[var(--color-text-secondary)]">
                  {OFFICE_LOCATION.address.city}, {OFFICE_LOCATION.address.country}
                </p>
                <p className="font-[var(--font-inter)] font-light text-sm text-[var(--color-text-muted)]">
                  {OFFICE_LOCATION.address.postcode}
                </p>
              </div>
            </motion.address>

            {/* Travel note */}
            <motion.div
              custom={0.22}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="bg-[var(--color-bg-primary)] border border-[var(--color-border-light)] p-7"
            >
              <p className={cn(
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.16em] text-[10px]',
                'text-[var(--color-text-muted)] mb-3',
              )}>
                {OFFICE_LOCATION.travelNote.label}
              </p>
              <p className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {OFFICE_LOCATION.travelNote.body}
              </p>
            </motion.div>
          </div>

          {/* Right — detail list + map placeholder */}
          <div className="space-y-8">
            {/* Detail dl */}
            <motion.dl
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="divide-y divide-[var(--color-border-light)]"
            >
              {OFFICE_LOCATION.details.map((detail) => (
                <div key={detail.id} className="grid grid-cols-[1fr_1.5fr] gap-4 py-4 first:pt-0 last:pb-0">
                  <dt className="font-[var(--font-inter)] font-medium text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)] pt-0.5">
                    {detail.label}
                  </dt>
                  <dd className="font-[var(--font-inter)] font-light text-sm text-[var(--color-text-secondary)]">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* ── Map placeholder ────────────────────────────────────────
                Replace with <iframe> or maps component when a maps
                integration is introduced. No maps API in scope for M9.
            ───────────────────────────────────────────────────────────── */}
            <motion.div
              custom={0.2}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'relative overflow-hidden',
                'bg-[var(--color-bg-secondary)]',
                'border border-[var(--color-border-light)]',
              )}
              style={{ height: 'clamp(200px, 28vw, 320px)' }}
              role="img"
              aria-label="Office location map placeholder — Karen, Nairobi, Kenya"
            >
              {/* Placeholder visual */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(160deg, #E8EDE0 0%, #F0E8D5 100%)
                  `,
                }}
              />
              {/* Grid lines (evoke a map) */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#495C3D" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent-primary)] shadow-[0_4px_16px_rgba(212,160,23,0.4)]">
                    <MapPin size={18} strokeWidth={1.5} className="text-white" aria-hidden="true" />
                  </div>
                  <p className={cn(
                    'font-[var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.16em]',
                    'text-[var(--color-text-secondary)]',
                    'bg-[var(--color-bg-primary)] px-2.5 py-1',
                  )}>
                    Karen, Nairobi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

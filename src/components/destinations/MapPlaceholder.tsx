'use client';

/**
 * MapPlaceholder
 *
 * Architecture-only map component. Client Component — ready for future
 * third-party map library integration (Mapbox GL JS, Google Maps, Leaflet).
 * Surface: bg-muted (chalk-200).
 *
 * ── Integration guide ─────────────────────────────────────────────────────
 *
 * When real map integration is ready:
 *
 * 1. Install your map library (e.g. `npm install mapbox-gl`)
 * 2. Replace the <MapCanvas /> placeholder div with the map component,
 *    passing MAP_SECTION.markers as pin data.
 * 3. Keep this component as 'use client' — map libraries require the browser.
 * 4. Keep the section structure (eyebrow, headline, body) unchanged.
 * 5. The markers array in MAP_SECTION contains { id, name, lat, lng } for
 *    all six destinations — use these to place pins.
 *
 * ── Why this architecture ────────────────────────────────────────────────
 *
 * The section is isolated here so the page composition (destinations/page.tsx)
 * requires no changes when the map is introduced. The placeholder renders a
 * visually honest "map coming soon" state rather than a broken or empty space.
 *
 * ─────────────────────────────────────────────────────────────────────────
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Map } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { MAP_SECTION, COUNTRIES } from '@/lib/constants/destinations';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

/**
 * MapCanvas
 *
 * Placeholder canvas div. Replace the contents of this component
 * with a real map initialisation when ready. The outer `div` should
 * retain its className so the page layout remains stable.
 */
function MapCanvas() {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        'bg-[var(--color-bg-dark)]',
        'border border-[var(--color-border-inverse)]',
      )}
      style={{ minHeight: 'clamp(320px, 45vh, 560px)' }}
      role="img"
      aria-label="Map showing Rêve Africa Safaris destinations across East and Southern Africa. Interactive map coming soon."
    >
      {/* ── Placeholder visual ──────────────────────────────────────
          Remove everything inside this div when integrating a real map.
          The outer div (role="img") can become a ref-target for the map.
      ─────────────────────────────────────────────────────────── */}

      {/* Stylised continent silhouette suggestion */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 45% 45%, rgba(158,139,77,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 65%, rgba(98,122,83,0.05) 0%, transparent 40%),
            linear-gradient(150deg, #1C1F18 0%, #131510 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Grid lines suggestion */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FAF9F5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      {/* Destination markers — text labels as a fallback visual */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-5">
          <div className={cn(
            'flex items-center justify-center w-14 h-14',
            'border border-[var(--color-border-inverse)]',
            'text-[var(--color-accent-primary)]',
          )}>
            <Map size={22} strokeWidth={1} />
          </div>

          <p className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[10px] tracking-[0.28em] leading-none',
            'text-[var(--color-text-inverse-muted)]',
          )}>
            Interactive map — coming soon
          </p>

          {/* Country name chips */}
          <ul
            className="flex flex-wrap justify-center gap-2 max-w-sm"
            aria-label="Our destination countries"
          >
            {COUNTRIES.map((country) => (
              <li
                key={country.id}
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[9px] tracking-[0.2em] leading-none',
                  'text-[var(--color-text-inverse-muted)]',
                  'border border-[var(--color-border-inverse)]',
                  'px-3 py-1.5',
                )}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MapPlaceholder() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="map-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-muted)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-10 lg:mb-12">
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
                {MAP_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="map-heading"
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
              {MAP_SECTION.headline}
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
              'text-[var(--color-text-secondary)]',
              'self-end',
            )}
          >
            {MAP_SECTION.body}
          </motion.p>
        </div>

        {/* ── Map canvas ──────────────────────────────────────── */}
        <motion.div
          custom={0.2}
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <MapCanvas />
        </motion.div>
      </div>
    </section>
  );
}

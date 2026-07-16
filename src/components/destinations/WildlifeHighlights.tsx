'use client';

/**
 * WildlifeHighlights
 *
 * Six wildlife encounter highlights in a two-column grid.
 * Client Component — scroll-reveal animations.
 * Surface: bg-dune (dune-100) — warm organic contrast.
 *
 * Uses a static icon map (Server-safe pattern from ExperienceCard).
 * Each highlight card is a flat editorial tile — no image placeholder,
 * keeping this section visually distinct from the Country grid above.
 */

import { motion, useReducedMotion } from 'framer-motion';
import {
  Footprints, TreePine, Sun, Waves,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { WILDLIFE_HIGHLIGHTS, WILDLIFE_SECTION } from '@/lib/constants/destinations';

// Static icon map — only icons used by WILDLIFE_HIGHLIGHTS
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Footprints,
  TreePine,
  Sun,
  Waves,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.08 },
  }),
};

export function WildlifeHighlights() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="wildlife-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-16">
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
                {WILDLIFE_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="wildlife-heading"
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
              {WILDLIFE_SECTION.headline}
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
            {WILDLIFE_SECTION.body}
          </motion.p>
        </div>

        {/* ── Highlights grid ───────────────────────────────── */}
        <dl
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-light)]"
          aria-label="Wildlife encounters"
        >
          {WILDLIFE_HIGHLIGHTS.map((highlight, i) => {
            const Icon = ICON_MAP[highlight.icon] ?? Footprints;

            return (
              <motion.div
                key={highlight.id}
                custom={i}
                variants={reduced ? {} : cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="bg-[var(--color-bg-dune)] p-8 lg:p-10 group"
              >
                {/* Icon */}
                <div className={cn(
                  'inline-flex items-center justify-center w-10 h-10 mb-7',
                  'border border-[var(--color-border-light)]',
                  'text-[var(--color-accent-primary)]',
                  'transition-colors duration-[300ms]',
                  'group-hover:bg-[var(--color-bg-muted)]',
                )}>
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <dt className={cn(
                  'font-[var(--font-cormorant)] font-light italic',
                  'text-[1.3rem] leading-[1.2] tracking-[-0.01em]',
                  'text-[var(--color-text-primary)] mb-1.5',
                )}>
                  {highlight.title}
                </dt>

                <dd>
                  {/* Location label */}
                  <p className={cn(
                    'font-[var(--font-inter)] font-medium uppercase',
                    'text-[9px] tracking-[0.2em] leading-none',
                    'text-[var(--color-accent-primary)] mb-4',
                  )}>
                    {highlight.where}
                  </p>

                  <p className={cn(
                    'font-[var(--font-inter)] font-light',
                    'text-sm leading-[1.78]',
                    'text-[var(--color-text-secondary)]',
                  )}>
                    {highlight.description}
                  </p>
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

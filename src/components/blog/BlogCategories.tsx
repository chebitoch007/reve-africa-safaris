'use client';

/**
 * BlogCategories
 *
 * Editorial category overview. Client Component — animation only.
 * Surface: bg-dune (dune-100).
 *
 * Informational only — no filtering, no links, no JS interaction.
 * Six categories presented as a responsive card grid with icon,
 * label, description, and article count.
 *
 * Uses a static icon map (no dynamic imports) consistent with the
 * established WildlifeHighlights / JourneyCategoryCard pattern.
 */

import { motion, useReducedMotion } from 'framer-motion';
import {
  Footprints,
  Leaf,
  MapPin,
  Camera,
  BookOpen,
  Users,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { BLOG_CATEGORY_ITEMS, BLOG_CATEGORIES_SECTION } from '@/lib/constants/blog';

// Static icon map — no dynamic import, no conditional rendering
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Footprints,
  Leaf,
  MapPin,
  Camera,
  BookOpen,
  Users,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y:       0,
    transition: {
      duration: DURATION.slow,
      ease:     EASE.cinematic,
      delay:    i * 0.06,
    },
  }),
};

export function BlogCategories() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="blog-categories-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-end mb-14">
          <div>
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-5"
            >
              <span
                className="block h-px w-10 bg-[var(--color-accent-primary)]"
                aria-hidden="true"
              />
              <span
                className={cn(
                  'font-[var(--font-inter)] font-medium uppercase',
                  'text-[10px] tracking-[0.28em] leading-none',
                  'text-[var(--color-text-muted)]',
                )}
              >
                {BLOG_CATEGORIES_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="blog-categories-heading"
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
              {BLOG_CATEGORIES_SECTION.headline}
            </motion.h2>
          </div>

          <motion.p
            custom={0.14}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]"
          >
            {BLOG_CATEGORIES_SECTION.body}
          </motion.p>
        </div>

        {/* Category grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Journal categories"
        >
          {BLOG_CATEGORY_ITEMS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Leaf;
            return (
              <motion.div
                key={item.id}
                role="listitem"
                custom={i}
                variants={reduced ? {} : cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <div
                  className={cn(
                    'flex flex-col p-8',
                    'bg-[var(--color-bg-primary)]',
                    'border border-[var(--color-border-light)]',
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      'flex items-center justify-center w-10 h-10 mb-5',
                      'border border-[var(--color-border-default)]',
                      'text-[var(--color-accent-primary)]',
                    )}
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Label + count */}
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <h3
                      className={cn(
                        'font-[var(--font-inter)] font-medium text-[0.9375rem]',
                        'text-[var(--color-text-primary)]',
                      )}
                    >
                      {item.label}
                    </h3>
                    <span
                      className={cn(
                        'font-[var(--font-inter)] font-light text-xs shrink-0',
                        'text-[var(--color-text-muted)]',
                      )}
                    >
                      {item.count} articles
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      'font-[var(--font-inter)] font-light text-sm leading-relaxed',
                      'text-[var(--color-text-secondary)]',
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

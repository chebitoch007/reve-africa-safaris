'use client';

/**
 * WhyUsSection
 *
 * Company trust pillars — six reasons to travel with Rêve Africa.
 * Client Component for scroll-triggered animations.
 * Icons rendered from a static map; no dynamic imports.
 */

import { motion, useReducedMotion } from 'framer-motion';
import {
  Compass, Gem, Binoculars, Leaf, Shield, Star,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { TRUST_PILLARS, WHY_US_SECTION } from '@/lib/constants/homepage';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Compass, Gem, Binoculars, Leaf, Shield, Star,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const pillarVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.07 },
  }),
};

export function WhyUsSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="why-us-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-inverse)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
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
                'text-[var(--color-accent-light)]',
              )}>
                {WHY_US_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="why-us-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-inverse)] whitespace-pre-line',
              )}
            >
              {WHY_US_SECTION.headline}
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
              'text-base lg:text-lg leading-relaxed',
              'text-[var(--color-text-inverse-muted)]',
              'self-end',
            )}
          >
            {WHY_US_SECTION.body}
          </motion.p>
        </div>

        {/* Pillars grid */}
        <dl
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-inverse)]"
          aria-label="Reasons to travel with us"
        >
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon] ?? Compass;
            return (
              <motion.div
                key={pillar.id}
                custom={i}
                variants={reduced ? {} : pillarVariant}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="bg-[var(--color-bg-inverse)] p-8 group"
              >
                <dt className="flex items-center gap-4 mb-4">
                  <div className={cn(
                    'flex items-center justify-center w-10 h-10',
                    'border border-[var(--color-border-inverse)]',
                    'text-[var(--color-accent-primary)]',
                    'transition-colors duration-[300ms]',
                    'group-hover:border-[var(--color-accent-primary)]',
                  )}>
                    <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className={cn(
                    'font-[var(--font-inter)] font-medium',
                    'text-sm text-[var(--color-text-inverse)]',
                  )}>
                    {pillar.title}
                  </span>
                </dt>
                <dd className={cn(
                  'font-[var(--font-inter)] font-light text-sm leading-relaxed',
                  'text-[var(--color-text-inverse-muted)]',
                  'pl-14', // align with title text
                )}>
                  {pillar.description}
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

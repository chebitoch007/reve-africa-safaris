'use client';

/**
 * MeetTheTeam
 *
 * Team member showcase. Client Component — animation wrapper around
 * TeamCard Server Components.
 * Surface: bg-dune (dune-100) — warm, organic contrast after chalk surfaces.
 *
 * ┌────────────────────────────────────────────────┐
 * │  [Eyebrow]                                     │
 * │  [Headline]          [Body intro]              │
 * │                                                │
 * │  [Card] [Card] [Card] [Card]                  │
 * └────────────────────────────────────────────────┘
 */

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { TEAM_MEMBERS } from '@/lib/constants/about';
import { TeamCard } from '@/components/about/TeamCard';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.slow, ease: EASE.cinematic, delay: i * 0.09 },
  }),
};

export function MeetTheTeam() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="team-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-dune)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* ── Header ──────────────────────────────────────────── */}
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
                Our People
              </span>
            </motion.div>

            <motion.h2
              id="team-heading"
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
              {'Guides who live\nwhat they lead'}
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
            Our team is small by design. Every guide has been chosen not only for their field knowledge, but for the quality of attention they bring to every guest, every camp, and every encounter with the wild.
          </motion.p>
        </div>

        {/* ── Team grid ────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-light)]"
          role="list"
          aria-label="Our team members"
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              role="listitem"
              custom={i}
              variants={reduced ? {} : cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

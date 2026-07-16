'use client';

/**
 * DestinationsFAQ
 *
 * Destinations-specific FAQ accordion. Client Component — manages open/close
 * state. Follows the exact same pattern as FAQSection (homepage) — same
 * structure, same aria pattern, same animation — but consumes
 * DESTINATIONS_FAQ_ITEMS and DESTINATIONS_FAQ_SECTION from destinations.ts.
 *
 * ── Reuse decision ──────────────────────────────────────────────────────
 * The homepage FAQSection is tightly coupled to FAQ_ITEMS / FAQ_SECTION from
 * homepage.ts. Rather than introducing a generic abstraction used in only two
 * places (both slightly different in copy/CTA), the pattern is reproduced here
 * with different data. If a third page needs a FAQ, extract a shared
 * <AccordionFAQ data={...} section={...} /> primitive at that point.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Surface: bg-primary (chalk-50) — matches the homepage FAQ surface.
 */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import {
  DESTINATIONS_FAQ_ITEMS,
  DESTINATIONS_FAQ_SECTION,
} from '@/lib/constants/destinations';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function DestinationsFAQ() {
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      aria-labelledby="destinations-faq-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left — heading column (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
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
                {DESTINATIONS_FAQ_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="destinations-faq-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3vw+0.5rem,2.75rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-6 whitespace-pre-line',
              )}
            >
              {DESTINATIONS_FAQ_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)] mb-8"
            >
              {DESTINATIONS_FAQ_SECTION.body}
            </motion.p>

            <motion.div
              custom={0.2}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <Link
                href={DESTINATIONS_FAQ_SECTION.cta.href}
                className={cn(
                  'inline-flex items-center gap-2',
                  'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                  'text-[var(--color-text-secondary)]',
                  'border-b border-[var(--color-border-default)] pb-0.5',
                  'transition-all duration-[250ms]',
                  'hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 rounded-[2px]',
                )}
              >
                {DESTINATIONS_FAQ_SECTION.cta.label}
                <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div>
            <dl className="divide-y divide-[var(--color-border-light)]">
              {DESTINATIONS_FAQ_ITEMS.map((item, i) => {
                const isOpen    = openId === item.id;
                const panelId   = `dfaq-panel-${item.id}`;
                const triggerId = `dfaq-trigger-${item.id}`;

                return (
                  <motion.div
                    key={item.id}
                    custom={i * 0.05}
                    variants={reduced ? {} : fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                  >
                    <dt>
                      <button
                        id={triggerId}
                        type="button"
                        onClick={() => toggle(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className={cn(
                          'flex items-center justify-between w-full',
                          'py-6 text-left gap-6',
                          'focus-visible:outline-none focus-visible:ring-2',
                          'focus-visible:ring-[var(--color-accent-primary)]',
                          'focus-visible:ring-offset-2 rounded-[2px]',
                          'group',
                        )}
                      >
                        <span className={cn(
                          'font-[var(--font-inter)] font-medium text-[0.9375rem] leading-snug',
                          'transition-colors duration-[200ms]',
                          isOpen
                            ? 'text-[var(--color-text-primary)]'
                            : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]',
                        )}>
                          {item.question}
                        </span>

                        <span
                          className={cn(
                            'flex items-center justify-center w-8 h-8 shrink-0',
                            'border transition-colors duration-[200ms]',
                            isOpen
                              ? 'border-[var(--color-accent-primary)] text-[var(--color-accent-primary)]'
                              : 'border-[var(--color-border-default)] text-[var(--color-text-muted)] group-hover:border-[var(--color-border-strong)]',
                          )}
                          aria-hidden="true"
                        >
                          {isOpen
                            ? <Minus size={14} strokeWidth={1.5} />
                            : <Plus  size={14} strokeWidth={1.5} />
                          }
                        </span>
                      </button>
                    </dt>

                    <dd
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                    >
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                              transition: {
                                height:  { duration: reduced ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: reduced ? 0 : 0.2, delay: reduced ? 0 : 0.1 },
                              },
                            }}
                            exit={{
                              height:  0,
                              opacity: 0,
                              transition: {
                                height:  { duration: reduced ? 0 : 0.25, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: reduced ? 0 : 0.15 },
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <p className={cn(
                              'font-[var(--font-inter)] font-light text-sm leading-[1.8]',
                              'text-[var(--color-text-secondary)]',
                              'pb-6',
                            )}>
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </dd>
                  </motion.div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

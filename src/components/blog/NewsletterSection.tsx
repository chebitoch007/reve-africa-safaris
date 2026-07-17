'use client';

/**
 * NewsletterSection
 *
 * Newsletter signup section. Client Component — form interaction.
 * Surface: bg-muted (chalk-200).
 *
 * ── Architecture note ─────────────────────────────────────────────────
 * This is a front-end-only implementation. The form does not submit to
 * any backend. The submit handler is a stub that prevents default and
 * shows a success state. Future integration: replace handleSubmit with
 * a POST to your email service (Mailchimp, Kit, Resend, etc.).
 *
 * Accessible form markup:
 * - <form> with aria-label
 * - <label> explicitly associated with <input> via htmlFor/id
 * - Error/success states managed via aria-live="polite"
 * - No autocomplete suppression (browser autofill is helpful here)
 * - Submit button not inside <label>
 * ────────────────────────────────────────────────────────────────────
 */

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { NEWSLETTER_SECTION } from '@/lib/constants/blog';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

export function NewsletterSection() {
  const reduced  = useReducedMotion();
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState('');

  /**
   * Stub submit handler.
   * TODO: Replace with POST to newsletter service when backend is available.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Stub success — replace with API call
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-muted)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
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
                {NEWSLETTER_SECTION.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="newsletter-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-6 whitespace-pre-line',
              )}
            >
              {NEWSLETTER_SECTION.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]"
            >
              {NEWSLETTER_SECTION.body}
            </motion.p>
          </div>

          {/* Right — form */}
          <motion.div
            custom={0.18}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {/* Success state */}
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className={cn(
                  'p-8 border border-[var(--color-accent-primary)]',
                  'bg-[var(--color-bg-primary)]',
                )}
              >
                <p
                  className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-xl text-[var(--color-text-primary)]',
                  )}
                >
                  {NEWSLETTER_SECTION.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Newsletter signup"
                noValidate
              >
                {/* Label */}
                <label
                  htmlFor="newsletter-email"
                  className={cn(
                    'block font-[var(--font-inter)] font-medium',
                    'text-[11px] uppercase tracking-[0.2em]',
                    'text-[var(--color-text-secondary)] mb-3',
                  )}
                >
                  {NEWSLETTER_SECTION.inputLabel}
                </label>

                {/* Input row */}
                <div className="flex gap-0">
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={NEWSLETTER_SECTION.inputPlaceholder}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    aria-invalid={!!error}
                    className={cn(
                      'flex-1 min-w-0 px-5 py-4',
                      'bg-[var(--color-bg-primary)]',
                      'border border-r-0',
                      error
                        ? 'border-red-400'
                        : 'border-[var(--color-border-default)]',
                      'font-[var(--font-inter)] font-light text-sm',
                      'text-[var(--color-text-primary)]',
                      'placeholder:text-[var(--color-text-muted)]',
                      'focus:outline-none focus:border-[var(--color-accent-primary)]',
                      'transition-colors duration-[200ms]',
                    )}
                  />
                  <button
                    type="submit"
                    className={cn(
                      'px-7 py-4 shrink-0',
                      'bg-[var(--color-bg-inverse)]',
                      'text-[var(--color-text-inverse)]',
                      'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
                      'transition-colors duration-[250ms]',
                      'hover:bg-[var(--color-basalt-800)]',
                      'focus-visible:outline-none focus-visible:ring-2',
                      'focus-visible:ring-[var(--color-accent-primary)]',
                      'focus-visible:ring-offset-2',
                    )}
                  >
                    {NEWSLETTER_SECTION.buttonLabel}
                  </button>
                </div>

                {/* Error message */}
                {error && (
                  <p
                    id="newsletter-error"
                    role="alert"
                    className="mt-2 font-[var(--font-inter)] text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}

                {/* Privacy note */}
                <p
                  className={cn(
                    'mt-4 font-[var(--font-inter)] font-light text-xs italic',
                    'text-[var(--color-text-muted)]',
                  )}
                >
                  {NEWSLETTER_SECTION.privacyNote}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

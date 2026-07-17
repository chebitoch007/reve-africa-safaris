/**
 * RÊVE AFRICA SAFARIS — 404 Not Found Page
 *
 * Rendered by Next.js App Router when no route matches.
 * Server Component — no interactivity required.
 *
 * Follows the site's dark hero aesthetic and guides visitors
 * back to the primary sections of the site.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/lib/design-system';
import { SITE } from '@/lib/metadata';

export const metadata: Metadata = {
  title:  `Page Not Found | ${SITE.name}`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className={cn(
        'flex-1 flex flex-col items-center justify-center text-center',
        'px-5 sm:px-8 lg:px-16 py-32',
        'bg-[var(--color-bg-deep)] text-[var(--color-text-inverse)]',
        'min-h-[60vh]',
      )}
    >
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
        <span
          className={cn(
            'font-[var(--font-inter)] font-medium uppercase',
            'text-[10px] tracking-[0.28em] leading-none',
            'text-[var(--color-accent-light)]',
          )}
        >
          404 — Page Not Found
        </span>
        <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
      </div>

      {/* Headline */}
      <h1
        id="not-found-heading"
        className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          'text-[clamp(2.5rem,6vw+0.5rem,5rem)]',
          'leading-[1.05] tracking-[-0.02em]',
          'text-[var(--color-text-inverse)] mb-6',
        )}
      >
        Lost in the wild
      </h1>

      {/* Body */}
      <p
        className={cn(
          'font-[var(--font-inter)] font-light text-base leading-relaxed',
          'text-[var(--color-text-inverse-muted)] max-w-md mb-12',
        )}
      >
        The page you are looking for has moved or does not exist. Let us guide
        you back to something extraordinary.
      </p>

      {/* Navigation links */}
      <nav aria-label="Recovery navigation" className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className={cn(
            'inline-block px-8 py-4',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
            'bg-[var(--color-accent-primary)] text-[var(--color-bg-inverse)]',
            'transition-colors duration-[250ms]',
            'hover:bg-[var(--color-accent-light)]',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-[var(--color-accent-primary)]',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]',
            'rounded-[2px]',
          )}
        >
          Return Home
        </Link>

        <Link
          href="/contact"
          className={cn(
            'inline-block px-8 py-4',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
            'border border-[rgba(255,255,255,0.2)]',
            'text-[var(--color-text-inverse)]',
            'transition-all duration-[250ms]',
            'hover:border-[rgba(255,255,255,0.55)] hover:bg-[rgba(255,255,255,0.05)]',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-[var(--color-accent-primary)]',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]',
            'rounded-[2px]',
          )}
        >
          Contact Us
        </Link>
      </nav>
    </section>
  );
}

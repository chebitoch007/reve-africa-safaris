/**
 * GalleryPreview
 *
 * Responsive gallery preview with placeholder colour blocks.
 * Server Component — CSS hover only, zero JS.
 *
 * Grid layout:
 *   [wide — spans 2 cols] [tall — spans 2 rows]
 *   [normal] [normal]
 *   [normal] [normal]
 *
 * Replace each placeholder <div> with <Image fill> when photography available.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { GALLERY_ITEMS, GALLERY_SECTION } from '@/lib/constants/homepage';

export function GalleryPreview() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-muted)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-text-muted)]',
              )}>
                {GALLERY_SECTION.eyebrow}
              </span>
            </div>

            <h2
              id="gallery-heading"
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] whitespace-pre-line',
              )}
            >
              {GALLERY_SECTION.headline}
            </h2>
          </div>

          <Link
            href={GALLERY_SECTION.cta.href}
            className={cn(
              'hidden md:inline-flex items-center gap-2 shrink-0',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
              'text-[var(--color-text-secondary)]',
              'transition-all duration-[250ms]',
              'hover:text-[var(--color-text-primary)] hover:gap-3',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent-primary)]',
              'focus-visible:ring-offset-2 rounded-[2px]',
            )}
          >
            {GALLERY_SECTION.cta.label}
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        {/*
          CSS grid gallery — 3 columns on lg+, 2 on sm, 1 on mobile.
          span variants control how many tracks each tile occupies.
        */}
        <div
          className={cn(
            'grid gap-3',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
            'auto-rows-[220px]',
          )}
          role="list"
          aria-label="Safari photography gallery preview"
        >
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className={cn(
                'group relative overflow-hidden cursor-pointer',
                // Span classes
                item.span === 'wide' && 'lg:col-span-2',
                item.span === 'tall' && 'lg:row-span-2',
              )}
            >
              {/* Placeholder background — swap for <Image fill> */}
              <div
                className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                style={{
                  background: `linear-gradient(160deg, ${item.placeholderFrom} 0%, ${item.placeholderTo} 100%)`,
                }}
                aria-hidden="true"
              />

              {/* Noise texture */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
              />

              {/* Overlay + label — revealed on hover */}
              <div
                className={cn(
                  'absolute inset-0 flex items-end p-5',
                  'bg-gradient-to-t from-[rgba(12,13,11,0.7)] to-transparent',
                  'opacity-0 transition-opacity duration-[300ms]',
                  'group-hover:opacity-100',
                )}
              >
                <p className={cn(
                  'font-[var(--font-inter)] text-xs font-medium uppercase tracking-[0.18em]',
                  'text-[var(--color-text-inverse)]',
                )}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href={GALLERY_SECTION.cta.href}
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
            {GALLERY_SECTION.cta.label}
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

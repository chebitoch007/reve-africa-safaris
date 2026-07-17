/**
 * BlogCard
 *
 * Reusable article card. Server Component — CSS-only hover, no JS.
 * Used by LatestStories (Client animation wrapper).
 *
 * Displays: image placeholder, category badge, reading time, date,
 * headline, excerpt, and a read-more arrow link.
 *
 * Replace the gradient placeholder <div> with <Image fill> when
 * photography is available.
 */

import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { ArticleData } from '@/lib/constants/blog';

interface BlogCardProps {
  article: ArticleData;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden',
        'bg-[var(--color-bg-primary)]',
        'border border-[var(--color-border-light)]',
        'transition-shadow duration-[400ms]',
        'hover:shadow-[0_8px_32px_-4px_rgba(12,13,11,0.1)]',
      )}
    >
      {/* ── Image placeholder ──────────────────────────────────────────
          Replace this <div> with <Image fill> when photography is available.
          Aspect ratio: 16:10 editorial crop.
      ────────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ paddingBottom: '62.5%' }}
        role="img"
        aria-label={article.imageAlt}
      >
        <div
          className={cn(
            'absolute inset-0',
            'transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            'group-hover:scale-105',
          )}
          style={{
            background: `linear-gradient(160deg, ${article.placeholderFrom} 0%, ${article.placeholderTo} 100%)`,
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className={cn(
              'inline-block px-2.5 py-1',
              'bg-[rgba(12,13,11,0.75)]',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.16em] text-[8.5px]',
              'text-[var(--color-accent-light)]',
            )}
          >
            {article.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">

        {/* Meta row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
            <Clock size={10} strokeWidth={1.5} aria-hidden="true" />
            <span className="font-[var(--font-inter)] text-[10.5px] tracking-[0.08em]">
              {article.readingTime}
            </span>
          </span>
          <span
            className="block h-2.5 w-px bg-[var(--color-border-light)]"
            aria-hidden="true"
          />
          <time
            className="font-[var(--font-inter)] text-[10.5px] tracking-[0.08em] text-[var(--color-text-muted)]"
          >
            {article.publishedAt}
          </time>
        </div>

        {/* Headline */}
        <h3
          className={cn(
            'font-[var(--font-cormorant)] font-light italic',
            'text-[clamp(1.3rem,1.8vw+0.3rem,1.6rem)]',
            'leading-[1.2] tracking-[-0.01em]',
            'text-[var(--color-text-primary)]',
            'mb-3 transition-colors duration-[200ms]',
            'group-hover:text-[var(--color-text-accent)]',
          )}
        >
          {article.headline}
        </h3>

        {/* Excerpt */}
        <p
          className={cn(
            'font-[var(--font-inter)] font-light',
            'text-[0.875rem] leading-[1.75]',
            'text-[var(--color-text-secondary)]',
            'flex-1 mb-7',
            'line-clamp-3',
          )}
        >
          {article.excerpt}
        </p>

        {/* Read link */}
        <Link
          href={article.href}
          aria-label={`Read article: ${article.headline}`}
          className={cn(
            'inline-flex items-center gap-2 self-start',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[9.5px]',
            'text-[var(--color-text-muted)]',
            'border-b border-[var(--color-border-light)] pb-0.5',
            'transition-all duration-[250ms]',
            'hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] hover:gap-3',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-[var(--color-accent-primary)]',
            'focus-visible:ring-offset-2 rounded-[2px]',
          )}
        >
          Read
          <ArrowRight size={10} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

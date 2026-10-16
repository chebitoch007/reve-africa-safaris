/**
 * RÊVE AFRICA SAFARIS — ArticleList
 *
 * Server Component. The list of journal articles on /blog: title, excerpt,
 * category and reading time, each linking to its article. Content comes
 * from src/lib/constants/articles.ts. Renders nothing when there are no
 * articles.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { ARTICLES } from '@/lib/constants/articles';

export function ArticleList() {
  if (ARTICLES.length === 0) return null;

  return (
    <section
      aria-labelledby="article-list-heading"
      className="py-24 md:py-32 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <h2
          id="article-list-heading"
          className={cn(
            'font-[var(--font-cormorant)] font-light italic',
            'text-[clamp(2rem,3.5vw+0.5rem,3rem)]',
            'leading-[1.1] tracking-[-0.02em]',
            'text-[var(--color-text-primary)] mb-12',
          )}
        >
          Latest articles
        </h2>

        <ul className="max-w-4xl border-t border-[var(--color-border-light)]">
          {ARTICLES.map((article) => (
            <li
              key={article.slug}
              className="border-b border-[var(--color-border-light)]"
            >
              <Link
                href={`/blog/${article.slug}`}
                className={cn(
                  'group block py-10',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                )}
              >
                <p
                  className={cn(
                    'font-[var(--font-inter)] font-medium uppercase',
                    'text-[10px] tracking-[0.28em] leading-none mb-4',
                    'text-[var(--color-text-muted)]',
                  )}
                >
                  {article.category} · {article.readingTime}
                </p>
                <h3
                  className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-[clamp(1.75rem,2vw+0.5rem,2.25rem)]',
                    'leading-[1.15] tracking-[-0.01em] mb-4',
                    'text-[var(--color-text-primary)]',
                  )}
                >
                  {article.title}
                </h3>
                <p className="font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)] max-w-3xl">
                  {article.excerpt}
                </p>
                <span
                  className={cn(
                    'inline-flex items-center gap-2 mt-5',
                    'font-[var(--font-inter)] text-sm',
                    'text-[var(--color-text-primary)]',
                    'underline underline-offset-4',
                  )}
                >
                  Read article
                  <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

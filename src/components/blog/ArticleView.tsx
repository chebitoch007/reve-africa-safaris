/**
 * RÊVE AFRICA SAFARIS — ArticleView
 *
 * Server Component. One journal article: breadcrumb back to /blog, header
 * band, then each section as a heading, paragraphs and an optional bullet
 * list. The author is the organisation, never a named person.
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';
import { SITE } from '@/lib/metadata';
import type { Article } from '@/lib/constants/articles';

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day:      'numeric',
    month:    'long',
    year:     'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

const BODY_TEXT =
  'font-[var(--font-inter)] font-light text-base leading-[1.85] text-[var(--color-text-secondary)]';

export function ArticleView({ article }: { article: Article }) {
  return (
    <>
      {/* Header band */}
      <section
        aria-labelledby="article-heading"
        className="w-full bg-[var(--color-bg-deep)] text-[var(--color-text-inverse)]"
      >
        <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />
        <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16 py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol
              className={cn(
                'flex flex-wrap items-center gap-2',
                'font-[var(--font-inter)] text-sm',
                'text-[var(--color-text-inverse-muted)]',
              )}
            >
              <li>
                <Link
                  href="/blog"
                  className="underline underline-offset-4 hover:text-[var(--color-text-inverse)]"
                >
                  Journal
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{article.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
            <span
              className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-accent-light)]',
              )}
            >
              {article.category} · {article.readingTime}
            </span>
          </div>

          <h1
            id="article-heading"
            className={cn(
              'font-[var(--font-cormorant)] font-light italic max-w-4xl',
              'text-[clamp(2.5rem,4.5vw+0.5rem,4.25rem)]',
              'leading-[1.05] tracking-[-0.02em]',
              'text-[var(--color-text-inverse)]',
            )}
          >
            {article.title}
          </h1>

          <p
            className={cn(
              'mt-8 font-[var(--font-inter)] text-sm',
              'text-[var(--color-text-inverse-muted)]',
            )}
          >
            {SITE.name} ·{' '}
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2
                  className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-[clamp(1.75rem,2vw+0.5rem,2.25rem)]',
                    'leading-[1.15] tracking-[-0.01em]',
                    'text-[var(--color-text-primary)]',
                  )}
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={BODY_TEXT}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className={cn(BODY_TEXT, 'list-disc pl-6 space-y-3')}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p>
              <Link
                href="/blog"
                className={cn(
                  'font-[var(--font-inter)] text-sm underline underline-offset-4',
                  'text-[var(--color-text-primary)]',
                )}
              >
                Back to the Journal
              </Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

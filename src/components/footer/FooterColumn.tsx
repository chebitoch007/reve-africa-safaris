/**
 * FooterColumn
 *
 * A labelled column of navigation links for use inside the Footer.
 * Server Component — no interactivity required.
 *
 * @example
 *   <FooterColumn heading="Destinations" links={FOOTER_DESTINATIONS} />
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';
import type { NavLink } from '@/types';

interface FooterColumnProps {
  heading:    string;
  links:      NavLink[];
  className?: string;
}

export function FooterColumn({ heading, links, className }: FooterColumnProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* Column heading */}
      <h3
        className={cn(
          'font-[var(--font-inter)] font-medium uppercase',
          'text-[10px] tracking-[0.22em] leading-none',
          'text-[var(--color-text-inverse)] mb-6',
        )}
      >
        {heading}
      </h3>

      {/* Link list */}
      <ul className="flex flex-col gap-4" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'font-[var(--font-inter)] text-sm leading-none',
                'text-[var(--color-text-inverse-muted)]',
                'transition-colors duration-[250ms]',
                'hover:text-[var(--color-text-inverse)]',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-[var(--color-accent-primary)]',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                'rounded-[2px]',
              )}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

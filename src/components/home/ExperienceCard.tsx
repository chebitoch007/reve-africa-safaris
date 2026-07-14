/**
 * ExperienceCard
 *
 * Reusable experience tile. Server Component — hover effects via CSS only.
 * Icon name is resolved at render time via a static map; no dynamic require().
 */

import Link from 'next/link';
import {
  Crown, Camera, Users, Heart, Globe, Waves,
  type LucideProps,
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { ExperienceData } from '@/lib/constants/homepage';

// ── Icon map (only the icons used by ExperienceData) ──────────────
type IconName = ExperienceData['icon'];

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Crown,
  Camera,
  Users,
  Heart,
  Globe,
  Waves,
};

interface ExperienceCardProps {
  experience: ExperienceData;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { icon, title, description, href, placeholderFrom, placeholderTo } = experience;
  const Icon = ICON_MAP[icon] ?? Crown;

  return (
    <article className="group relative flex flex-col overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-light)] transition-shadow duration-[400ms] hover:shadow-[0_8px_28px_-4px_rgba(12,13,11,0.12)]">

      {/* Colour accent bar — top edge, derived from destination palette */}
      <div
        className="h-1 w-full shrink-0 transition-all duration-[400ms] group-hover:h-[3px]"
        style={{ background: `linear-gradient(to right, ${placeholderFrom}, ${placeholderTo})` }}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Icon */}
        <div
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 mb-6',
            'border border-[var(--color-border-light)]',
            'text-[var(--color-accent-primary)]',
            'transition-colors duration-[300ms]',
            'group-hover:bg-[var(--color-bg-muted)]',
          )}
        >
          <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-[var(--font-cormorant)] font-light italic',
            'text-[1.375rem] leading-[1.2] tracking-[-0.01em]',
            'text-[var(--color-text-primary)] mb-3',
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'font-[var(--font-inter)] font-light text-sm leading-relaxed',
            'text-[var(--color-text-secondary)] flex-1 mb-6',
          )}
        >
          {description}
        </p>

        {/* Link */}
        <Link
          href={href}
          className={cn(
            'inline-flex items-center gap-2',
            'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
            'text-[var(--color-text-muted)]',
            'transition-all duration-[250ms]',
            'hover:text-[var(--color-accent-primary)] hover:gap-3',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-[var(--color-accent-primary)]',
            'focus-visible:ring-offset-2 rounded-[2px]',
          )}
          aria-label={`Learn more about ${title}`}
        >
          Explore
          <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

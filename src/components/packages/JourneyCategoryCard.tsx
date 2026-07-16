/**
 * JourneyCategoryCard
 *
 * Server Component — journey category card with icon, title, description,
 * and an enquiry link. CSS-only hover. No image — content-forward design.
 *
 * Uses the established icon-map pattern from ExperienceCard / WildlifeHighlights.
 * The parent section (JourneyCategories) handles scroll-reveal animation.
 */

import Link from 'next/link';
import {
  Gem, Footprints, TreePine, Heart,
  Camera, Users, Waves, Pencil,
  ArrowRight,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/design-system';
import type { JourneyCategory } from '@/lib/constants/packages';

// Static icon map — only icons used by JOURNEY_CATEGORIES
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Gem, Footprints, TreePine, Heart, Camera, Users, Waves, Pencil,
};

interface JourneyCategoryCardProps {
  category: JourneyCategory;
}

export function JourneyCategoryCard({ category }: JourneyCategoryCardProps) {
  const { title, description, href, icon } = category;
  const Icon = ICON_MAP[icon] ?? Gem;

  return (
    <article className="group bg-[var(--color-bg-dune)] p-7 lg:p-8 flex flex-col gap-5">
      {/* Icon */}
      <div className={cn(
        'inline-flex items-center justify-center w-10 h-10 shrink-0',
        'border border-[var(--color-border-light)]',
        'text-[var(--color-accent-primary)]',
        'transition-colors duration-[300ms]',
        'group-hover:bg-[var(--color-bg-muted)]',
      )}>
        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className={cn(
          'font-[var(--font-inter)] font-medium',
          'text-[0.9375rem] leading-snug',
          'text-[var(--color-text-primary)]',
        )}>
          {title}
        </h3>
        <p className={cn(
          'font-[var(--font-inter)] font-light',
          'text-sm leading-[1.75]',
          'text-[var(--color-text-secondary)]',
        )}>
          {description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={href}
        className={cn(
          'inline-flex items-center gap-2 self-start',
          'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[10px]',
          'text-[var(--color-text-muted)]',
          'transition-all duration-[250ms]',
          'hover:text-[var(--color-text-primary)] hover:gap-3',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-[var(--color-accent-primary)]',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dune)]',
          'rounded-[2px]',
        )}
        aria-label={`Enquire about ${title}`}
      >
        Enquire
        <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </article>
  );
}

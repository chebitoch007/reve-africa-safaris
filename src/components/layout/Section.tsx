/**
 * Section
 *
 * Semantic <section> with vertical padding scale. Server Component.
 * Compose with Container for a full page section.
 *
 * @example
 *   <Section>
 *     <Container>...</Container>
 *   </Section>
 *
 *   <Section size="lg" surface="dark">
 *     <Container>...</Container>
 *   </Section>
 */

import { cn } from '@/lib/design-system';
import type { ThemeSurface } from '@/lib/design-system';

type SectionSize    = 'sm' | 'md' | 'lg' | 'xl' | 'none';
type SectionElement = 'section' | 'div' | 'article' | 'aside';

interface SectionProps {
  children:   React.ReactNode;
  size?:      SectionSize;
  surface?:   ThemeSurface;
  className?: string;
  as?:        SectionElement;
  id?:        string;
  /** Accessible label for landmark navigation */
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

const SIZE_CLASSES: Record<SectionSize, string> = {
  none: '',
  sm:   'py-12 md:py-16',
  md:   'py-16 md:py-24',
  lg:   'py-24 md:py-36',
  xl:   'py-32 md:py-48',
};

const SURFACE_CLASSES: Record<ThemeSurface, string> = {
  light:  'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
  dark:   'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
  dune:   'bg-[var(--color-bg-dune)] text-[var(--color-text-primary)]',
  acacia: 'bg-[var(--color-bg-acacia)] text-[var(--color-text-primary)]',
};

export function Section({
  children,
  size    = 'md',
  surface,
  className,
  as: Tag = 'section',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        SIZE_CLASSES[size],
        surface && SURFACE_CLASSES[surface],
        className,
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </Tag>
  );
}

/**
 * Container
 *
 * Responsive max-width wrapper. Server Component.
 * All page content should live inside a Container.
 *
 * @example
 *   <Container>...</Container>
 *   <Container size="narrow">...</Container>
 *   <Container size="wide" className="py-24">...</Container>
 */

import { cn } from '@/lib/design-system';

type ContainerSize = 'narrow' | 'default' | 'wide' | 'full';

interface ContainerProps {
  children:  React.ReactNode;
  size?:     ContainerSize;
  className?: string;
  as?:       React.ElementType;
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  narrow:  'max-w-[56rem]',   // 896px — editorial / article
  default: 'max-w-[80rem]',   // 1280px — standard layout
  wide:    'max-w-[90rem]',   // 1440px — cinematic / full-bleed with padding
  full:    'max-w-none',      // no max-width
};

export function Container({
  children,
  size      = 'default',
  className,
  as: Tag   = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto',
        'px-5 sm:px-8 lg:px-16',
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

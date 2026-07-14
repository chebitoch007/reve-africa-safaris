/**
 * Logo
 *
 * Company wordmark component. Server Component.
 *
 * Renders the brand name in Cormorant Garamond italic with a
 * fine lettermark accent. Replace this component's internals
 * when the final SVG logo is available — the interface stays the same.
 *
 * @example
 *   <Logo />
 *   <Logo variant="inverse" size="lg" />
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';

type LogoVariant = 'default' | 'inverse';
type LogoSize    = 'sm' | 'md' | 'lg';

interface LogoProps {
  variant?:   LogoVariant;
  size?:      LogoSize;
  className?: string;
  /** If false, renders without a link wrapper (e.g. on the homepage h1) */
  asLink?:    boolean;
  href?:      string;
}

const SIZE_STYLES: Record<LogoSize, { wordmark: string; eyebrow: string }> = {
  sm: {
    wordmark: 'text-xl leading-none tracking-[-0.02em]',
    eyebrow:  'text-[8px] tracking-[0.22em]',
  },
  md: {
    wordmark: 'text-2xl leading-none tracking-[-0.02em]',
    eyebrow:  'text-[9px] tracking-[0.24em]',
  },
  lg: {
    wordmark: 'text-3xl leading-none tracking-[-0.02em]',
    eyebrow:  'text-[10px] tracking-[0.24em]',
  },
};

const VARIANT_CLASSES: Record<LogoVariant, { wordmark: string; eyebrow: string; divider: string }> = {
  default: {
    wordmark: 'text-[var(--color-text-primary)]',
    eyebrow:  'text-[var(--color-text-muted)]',
    divider:  'bg-[var(--color-border-default)]',
  },
  inverse: {
    wordmark: 'text-[var(--color-text-inverse)]',
    eyebrow:  'text-[var(--color-text-inverse-muted)]',
    divider:  'bg-[var(--color-border-inverse)]',
  },
};

function LogoMark({
  variant = 'default',
  size    = 'md',
  className,
}: Pick<LogoProps, 'variant' | 'size' | 'className'>) {
  const v = VARIANT_CLASSES[variant ?? 'default'];
  const s = SIZE_STYLES[size ?? 'md'];

  return (
    <span
      className={cn('inline-flex flex-col items-start gap-[3px]', className)}
      aria-label="Rêve Africa Safaris"
    >
      {/* Eyebrow — small uppercase label above wordmark */}
      <span
        className={cn(
          'font-[var(--font-inter)] font-medium uppercase',
          s.eyebrow,
          v.eyebrow,
        )}
        aria-hidden="true"
      >
        Rêve Africa
      </span>

      {/* Thin rule between eyebrow and wordmark */}
      <span
        className={cn('w-full h-px', v.divider)}
        aria-hidden="true"
      />

      {/* Primary wordmark */}
      <span
        className={cn(
          'font-[var(--font-cormorant)] font-light italic',
          s.wordmark,
          v.wordmark,
        )}
      >
        Safaris
      </span>
    </span>
  );
}

export function Logo({
  variant  = 'default',
  size     = 'md',
  className,
  asLink   = true,
  href     = '/',
}: LogoProps) {
  if (!asLink) {
    return <LogoMark variant={variant} size={size} className={className} />;
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-block',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 rounded-[2px]',
        className,
      )}
      aria-label="Rêve Africa Safaris — Home"
    >
      <LogoMark variant={variant} size={size} />
    </Link>
  );
}

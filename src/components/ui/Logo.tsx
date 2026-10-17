/**
 * Logo
 *
 * Company logo component. Server Component.
 *
 * Two versions, both for dark surfaces only (the artwork is gold and copper
 * on a transparent background and no light-background version exists):
 *
 * - `header`: the square mark (/brand/logo-mark.png, decorative, alt="")
 *   beside a live text wordmark "Rêve Africa Safaris" in the display font.
 *   Used in the header and the mobile menu. The link's accessible name comes
 *   from the text.
 * - `full`: the full lockup image (/brand/logo-full.png) at 176px wide.
 *   Used in the footer.
 *
 * Next.js 16: the `priority` image prop is deprecated in favour of `preload`.
 *
 * @example
 *   <Logo version="header" preload />
 *   <Logo version="full" />
 */

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/design-system';

type LogoVersion = 'header' | 'full';

interface LogoProps {
  version?:   LogoVersion;
  className?: string;
  /** If false, renders without a link wrapper */
  asLink?:    boolean;
  href?:      string;
  /** Preload the image (use for the header logo only) */
  preload?:   boolean;
}

const BRAND_NAME = 'Rêve Africa Safaris';

function LogoContent({ version, preload }: Pick<LogoProps, 'version' | 'preload'>) {
  if (version === 'full') {
    return (
      <Image
        src="/brand/logo-full.png"
        alt={BRAND_NAME}
        width={640}
        height={536}
        sizes="176px"
        preload={preload}
        className="block h-auto w-44"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      {/* Decorative: the adjacent text carries the name */}
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={512}
        height={512}
        sizes="44px"
        preload={preload}
        className="block h-11 w-11 shrink-0"
      />
      <span
        className={cn(
          // Explicit font-family property: Tailwind reads the font-[var(--name)]
          // shorthand as a font-weight, so it cannot set the family. Keep
          // leading-none after the text size, which would otherwise remove it.
          '[font-family:var(--font-display)] font-medium whitespace-nowrap',
          'text-xl sm:text-2xl tracking-[0.02em] leading-none',
          'text-[var(--color-text-inverse)]',
        )}
      >
        {BRAND_NAME}
      </span>
    </span>
  );
}

export function Logo({
  version   = 'header',
  className,
  asLink    = true,
  href      = '/',
  preload   = false,
}: LogoProps) {
  const content = <LogoContent version={version} preload={preload} />;

  if (!asLink) {
    return <span className={cn('inline-block', className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-block',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 rounded-[2px]',
        className,
      )}
    >
      {content}
    </Link>
  );
}

/**
 * Logo
 *
 * Company logo component. Server Component.
 *
 * Renders the supplied PNG logo files from /public/brand with next/image.
 * Only a dark-background version exists (gold and copper artwork on a
 * transparent background), so this component must only be placed on dark
 * surfaces: the header (transparent over a hero, solid basalt once
 * scrolled), the mobile menu drawer and the footer. There is no light
 * variant; do not add one without a supplied asset.
 *
 * Next.js 16: the `priority` image prop is deprecated in favour of `preload`.
 *
 * @example
 *   <Logo />                                  // compact, links to /
 *   <Logo version="full" size="md" />         // full lockup with tagline
 *   <Logo preload />                          // above-the-fold (header)
 */

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/design-system';

type LogoVersion = 'compact' | 'full';
type LogoSize    = 'sm' | 'md';

interface LogoProps {
  /** compact = mark + name; full = mark + name + "Inspired by Africa" */
  version?:   LogoVersion;
  size?:      LogoSize;
  className?: string;
  /** If false, renders without a link wrapper (e.g. on the homepage h1) */
  asLink?:    boolean;
  href?:      string;
  /** Preload the image (use for the header logo only) */
  preload?:   boolean;
}

// Intrinsic pixel sizes of the supplied files (used for aspect ratio only;
// rendered size comes from the height classes below).
const LOGO_FILES: Record<LogoVersion, { src: string; width: number; height: number }> = {
  compact: { src: '/brand/logo-compact.png', width: 640, height: 490 },
  full:    { src: '/brand/logo-full.png',    width: 640, height: 536 },
};

// Fixed heights at every viewport: the logo never changes size on scroll,
// so the header's height transition cannot shift it. 56px is the maximum
// that fits inside the scrolled header (h-16 = 64px).
const SIZE_CLASSES: Record<LogoSize, string> = {
  sm: 'h-12 sm:h-14',
  md: 'h-32',
};

// Approximate rendered widths, so next/image picks a suitably small file.
const SIZES_ATTR: Record<LogoVersion, Record<LogoSize, string>> = {
  compact: { sm: '74px',  md: '168px' },
  full:    { sm: '70px',  md: '154px' },
};

export function Logo({
  version   = 'compact',
  size      = 'sm',
  className,
  asLink    = true,
  href      = '/',
  preload   = false,
}: LogoProps) {
  const file = LOGO_FILES[version];

  const image = (
    <Image
      src={file.src}
      alt="Rêve Africa Safaris"
      width={file.width}
      height={file.height}
      sizes={SIZES_ATTR[version][size]}
      preload={preload}
      className={cn('block w-auto', SIZE_CLASSES[size])}
    />
  );

  if (!asLink) {
    return <span className={cn('inline-block', className)}>{image}</span>;
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
      {image}
    </Link>
  );
}

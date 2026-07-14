/**
 * RÊVE AFRICA SAFARIS — Font Configuration
 *
 * Fonts are self-hosted via next/font/local for:
 *   - Zero external network requests at runtime
 *   - No layout shift (fonts inlined at build time)
 *   - Full GDPR compliance (no Google Fonts tracking)
 *   - Optimal performance on all networks
 *
 * Font files live in /public/fonts/ (woff2, latin subset).
 *
 * Cormorant Garamond — editorial display, used italic at large sizes
 * Inter             — clean body and UI copy
 *
 * CSS variables are injected on <html> and consumed throughout the design system.
 */

import localFont from 'next/font/local';

/**
 * Cormorant Garamond — Display / Editorial
 * Light (300) and Regular (400) weights, both normal and italic.
 * Italic Light is the signature treatment for major headlines.
 */
export const cormorant = localFont({
  variable: '--font-cormorant',
  display:  'swap',
  preload:  true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  src: [
    {
      path: '../../public/fonts/cormorant-garamond-latin-300-normal.woff2',
      weight: '300',
      style:  'normal',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-300-italic.woff2',
      weight: '300',
      style:  'italic',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-400-normal.woff2',
      weight: '400',
      style:  'normal',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-400-italic.woff2',
      weight: '400',
      style:  'italic',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-500-normal.woff2',
      weight: '500',
      style:  'normal',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-500-italic.woff2',
      weight: '500',
      style:  'italic',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-600-normal.woff2',
      weight: '600',
      style:  'normal',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-600-italic.woff2',
      weight: '600',
      style:  'italic',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-700-normal.woff2',
      weight: '700',
      style:  'normal',
    },
    {
      path: '../../public/fonts/cormorant-garamond-latin-700-italic.woff2',
      weight: '700',
      style:  'italic',
    },
  ],
});

/**
 * Inter — Body / UI
 * Key weights loaded individually (no variable font in this subset).
 */
export const inter = localFont({
  variable: '--font-inter',
  display:  'swap',
  preload:  true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  src: [
    {
      path: '../../public/fonts/inter-latin-300-normal.woff2',
      weight: '300',
      style:  'normal',
    },
    {
      path: '../../public/fonts/inter-latin-400-normal.woff2',
      weight: '400',
      style:  'normal',
    },
    {
      path: '../../public/fonts/inter-latin-500-normal.woff2',
      weight: '500',
      style:  'normal',
    },
    {
      path: '../../public/fonts/inter-latin-600-normal.woff2',
      weight: '600',
      style:  'normal',
    },
    {
      path: '../../public/fonts/inter-latin-700-normal.woff2',
      weight: '700',
      style:  'normal',
    },
  ],
});

/**
 * Combined class string — apply to <html> element in root layout.
 * Makes both --font-cormorant and --font-inter available as CSS vars.
 */
export function getFontClassNames(): string {
  return `${cormorant.variable} ${inter.variable}`;
}

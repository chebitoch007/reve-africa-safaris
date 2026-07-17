/**
 * RÊVE AFRICA SAFARIS — Root Layout
 *
 * Server Component. Applies font variables, metadata, and viewport config.
 * Composes the global Header and Footer around every page.
 *
 * Header is a Client Component (scroll detection, mobile menu).
 * Footer is a Server Component.
 * The <main> element receives flex-1 so it fills all remaining vertical space,
 * preventing a short-page footer from floating mid-screen.
 *
 * Accessibility:
 * - Skip-to-main-content link is the first focusable element in the document.
 *   Keyboard users (and screen readers) can bypass the navigation with a
 *   single key press. Visually hidden until focused.
 *
 * SEO:
 * - JSON-LD structured data (Organization + WebSite schemas) is injected
 *   site-wide for knowledge panel eligibility and E-E-A-T signals.
 */

import type { Metadata, Viewport } from 'next';
import { getFontClassNames } from '@/lib/fonts';
import { BASE_METADATA, VIEWPORT } from '@/lib/metadata';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/footer/Footer';
import { SiteJsonLd } from '@/components/seo/JsonLd';
import '@/app/globals.css';

export const metadata: Metadata = BASE_METADATA;
export const viewport: Viewport = VIEWPORT;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en-GB"
      className={getFontClassNames()}
      suppressHydrationWarning
    >
      <head>
        <SiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        {/* Skip to main content — first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

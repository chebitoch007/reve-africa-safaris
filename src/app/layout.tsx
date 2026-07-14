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
 */

import type { Metadata, Viewport } from 'next';
import { getFontClassNames } from '@/lib/fonts';
import { BASE_METADATA, VIEWPORT } from '@/lib/metadata';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/footer/Footer';
import '@/app/globals.css';

export const metadata: Metadata = BASE_METADATA;
export const viewport: Viewport = VIEWPORT;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={getFontClassNames()}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

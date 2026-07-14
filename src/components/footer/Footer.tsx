/**
 * Footer
 *
 * Global site footer. Server Component.
 *
 * Structure:
 * ┌────────────────────────────────────────────────────┐
 * │  Brand column  │  Destinations  │  Explore  │  Company  │
 * ├────────────────────────────────────────────────────┤
 * │  Social row                                        │
 * ├────────────────────────────────────────────────────┤
 * │  Copyright          Legal links                    │
 * └────────────────────────────────────────────────────┘
 *
 * Accessibility:
 * - `role="contentinfo"` landmark (implicit from <footer>)
 * - Each nav column is a labelled <nav> landmark
 * - Social links open in new tab with screen-reader-friendly labels
 */

import Link from 'next/link';
import { cn } from '@/lib/design-system';
import { Logo } from '@/components/ui/Logo';
import { FooterColumn } from '@/components/footer/FooterColumn';
import {
  FOOTER_DESTINATIONS,
  FOOTER_EXPLORE,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  SOCIAL_LINKS,
  type SocialLink,
} from '@/lib/constants/navigation';

// ─────────────────────────────────────────────
// Social icons — inline SVG
// Brand icons are not included in lucide-react; these minimal paths
// match the brand glyphs closely at 18×18 and respect the design system's
// strokeWidth convention.
// ─────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<SocialLink['platform'], React.ReactNode> = {
  instagram: <IconInstagram />,
  facebook:  <IconFacebook />,
  youtube:   <IconYoutube />,
  twitter:   null, // unused; present for type completeness
  linkedin:  null, // unused; present for type completeness
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]"
      aria-label="Site footer"
    >
      {/* ── Upper section ────────────────────────── */}
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div
          className={cn(
            'grid gap-12 py-16 md:py-20',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]',
            'border-b border-[var(--color-border-inverse)]',
          )}
        >
          {/* ── Brand column ─────────────────────── */}
          <div className="flex flex-col gap-6">
            <Logo variant="inverse" size="md" />

            <p
              className={cn(
                'font-[var(--font-inter)] text-sm leading-relaxed max-w-[22rem]',
                'text-[var(--color-text-inverse-muted)]',
              )}
            >
              We craft intimate, transformative expeditions to Africa&rsquo;s
              most magnificent wilderness destinations. Bespoke journeys
              designed for those who seek the extraordinary.
            </p>

            {/* Contact detail */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:enquiries@reveafricasafaris.com"
                className={cn(
                  'font-[var(--font-inter)] text-sm',
                  'text-[var(--color-text-inverse-muted)]',
                  'transition-colors duration-[250ms]',
                  'hover:text-[var(--color-text-inverse)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                  'rounded-[2px]',
                )}
              >
                enquiries@reveafricasafaris.com
              </a>
              <a
                href="tel:+441234567890"
                className={cn(
                  'font-[var(--font-inter)] text-sm',
                  'text-[var(--color-text-inverse-muted)]',
                  'transition-colors duration-[250ms]',
                  'hover:text-[var(--color-text-inverse)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent-primary)]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                  'rounded-[2px]',
                )}
              >
                +44 (0) 123 456 7890
              </a>
            </div>
          </div>

          {/* ── Destinations column ──────────────── */}
          <nav aria-label="Footer destinations navigation">
            <FooterColumn
              heading="Destinations"
              links={FOOTER_DESTINATIONS}
            />
          </nav>

          {/* ── Explore column ───────────────────── */}
          <nav aria-label="Footer explore navigation">
            <FooterColumn
              heading="Explore"
              links={FOOTER_EXPLORE}
            />
          </nav>

          {/* ── Company column ───────────────────── */}
          <nav aria-label="Footer company navigation">
            <FooterColumn
              heading="Company"
              links={FOOTER_COMPANY}
            />
          </nav>
        </div>

        {/* ── Lower section ────────────────────────── */}
        <div
          className={cn(
            'flex flex-col sm:flex-row items-start sm:items-center',
            'justify-between gap-6 py-8',
          )}
        >
          {/* Copyright */}
          <p
            className={cn(
              'font-[var(--font-inter)] text-xs',
              'text-[var(--color-text-inverse-muted)]',
              'order-2 sm:order-1',
            )}
          >
            &copy; {currentYear} Rêve Africa Safaris. All rights reserved.
          </p>

          {/* Legal links + Social — right side */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-start sm:items-center gap-6',
              'order-1 sm:order-2',
            )}
          >
            {/* Legal links */}
            <nav
              aria-label="Legal navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-[var(--font-inter)] text-xs',
                    'text-[var(--color-text-inverse-muted)]',
                    'transition-colors duration-[250ms]',
                    'hover:text-[var(--color-text-inverse)]',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-[var(--color-accent-primary)]',
                    'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                    'rounded-[2px]',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Divider — visible on sm+ */}
            <span
              className="hidden sm:block w-px h-4 bg-[var(--color-border-inverse)]"
              aria-hidden="true"
            />

            {/* Social icons */}
            <nav
              aria-label="Social media links"
              className="flex items-center gap-4"
            >
              {SOCIAL_LINKS.map((social) => {
                const icon = SOCIAL_ICONS[social.platform];
                if (!icon) return null;

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label} (opens in new tab)`}
                    className={cn(
                      'flex items-center justify-center w-8 h-8',
                      'text-[var(--color-text-inverse-muted)]',
                      'transition-colors duration-[250ms]',
                      'hover:text-[var(--color-text-inverse)]',
                      'focus-visible:outline-none focus-visible:ring-2',
                      'focus-visible:ring-[var(--color-accent-primary)]',
                      'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
                      'rounded-[2px]',
                    )}
                  >
                    {icon}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

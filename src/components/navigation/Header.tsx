'use client';

/**
 * Header
 *
 * Global sticky navigation bar. Client Component.
 *
 * Behaviour:
 * - Transparent with inverse (light) text at the top of the page —
 *   designed to overlay hero imagery.
 * - Transitions to a solid basalt background after scrolling past
 *   a threshold (64px), with the same inverse text.
 * - Desktop: horizontal nav links with hover states.
 * - Mobile: hamburger trigger opens the MobileMenu drawer.
 *
 * Accessibility:
 * - `role="banner"` landmark (implicit from <header>)
 * - `aria-expanded` on hamburger button
 * - `aria-controls` linking button to menu panel
 * - Keyboard navigable — all interactive elements reachable via Tab
 */

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/design-system';
import { Logo } from '@/components/ui/Logo';
import { NavLink } from '@/components/navigation/NavLink';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { PRIMARY_NAV } from '@/lib/constants/navigation';

const SCROLL_THRESHOLD = 64;
const MOBILE_MENU_ID   = 'mobile-nav-menu';

export function Header() {
  const pathname          = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  // ── Scroll detection ────────────────────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    // Set initial state (in case page loads mid-scroll)
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const openMenu  = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          // Layout
          'fixed top-0 left-0 right-0 z-[30]',
          'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          // Scrolled: solid dark background
          scrolled
            ? 'bg-[var(--color-bg-inverse)] shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent',
        )}
        role="banner"
      >
        <div
          className={cn(
            'w-full mx-auto max-w-[90rem]',
            'px-5 sm:px-8 lg:px-16',
            'flex items-center justify-between',
            'transition-[height] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
            scrolled ? 'h-16' : 'h-20 lg:h-24',
          )}
        >
          {/* ── Logo ───────────────────────────────── */}
          <Logo variant="inverse" size="sm" />

          {/* ── Desktop navigation ──────────────────── */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {PRIMARY_NAV.map((group) => {
              const isActive =
                pathname === group.href ||
                (group.href !== undefined &&
                  group.href !== '/' &&
                  pathname.startsWith(group.href + '/'));

              return (
                <NavLink
                  key={group.label}
                  href={group.href ?? '#'}
                  label={group.label}
                  isActive={isActive}
                  variant="header"
                />
              );
            })}
          </nav>

          {/* ── Desktop CTA ─────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact"
              className={cn(
                'inline-block px-6 py-3',
                'font-[var(--font-inter)] font-medium uppercase tracking-[0.2em] text-[10px]',
                'border border-[rgba(255,255,255,0.35)]',
                'text-[var(--color-text-inverse)]',
                'transition-all duration-[250ms]',
                'hover:border-[var(--color-text-inverse)] hover:bg-[rgba(255,255,255,0.08)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[2px]',
              )}
            >
              Plan Your Safari
            </Link>
          </div>

          {/* ── Mobile hamburger ────────────────────── */}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            className={cn(
              'lg:hidden flex items-center justify-center w-11 h-11 -mr-2',
              'text-[var(--color-text-inverse)]',
              'transition-colors duration-[150ms]',
              'hover:text-[var(--color-text-inverse-muted)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[2px]',
            )}
          >
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ── Mobile menu drawer ──────────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={closeMenu}
        nav={PRIMARY_NAV}
      />
    </>
  );
}

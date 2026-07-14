'use client';

/**
 * MobileMenu
 *
 * Accessible off-canvas navigation drawer for mobile viewports.
 * Client Component — manages open/close state, focus trap, and scroll lock.
 *
 * Accessibility:
 * - `aria-expanded` on trigger button
 * - `aria-controls` linking trigger to menu panel
 * - `role="dialog"` and `aria-modal` on the panel
 * - Escape key closes the menu
 * - Focus is trapped inside the open menu
 * - Body scroll is locked while menu is open
 * - First focusable element receives focus on open
 * - Trigger button regains focus on close
 */

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { Logo } from '@/components/ui/Logo';
import type { NavGroup } from '@/types';

interface MobileMenuProps {
  isOpen:  boolean;
  onClose: () => void;
  nav:     NavGroup[];
}

const MENU_ID      = 'mobile-nav-menu';
const MENU_TITLE   = 'mobile-nav-title';

export function MobileMenu({ isOpen, onClose, nav }: MobileMenuProps) {
  const pathname     = usePathname();
  const panelRef     = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // ── Focus management ──────────────────────────
  useEffect(() => {
    if (isOpen) {
      // Defer focus to after the animation frame so the panel is visible
      const id = requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isOpen]);

  // ── Body scroll lock ─────────────────────────
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow    = 'hidden';
      document.body.style.position    = 'fixed';
      document.body.style.top         = `-${scrollY}px`;
      document.body.style.width       = '100%';

      return () => {
        document.body.style.overflow  = '';
        document.body.style.position  = '';
        document.body.style.top       = '';
        document.body.style.width     = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // ── Focus trap ────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    },
    [onClose],
  );

  // ── Close on route change ─────────────────────
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[40] bg-[rgba(12,13,11,0.7)] backdrop-blur-sm',
          'transition-opacity duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        ref={panelRef}
        id={MENU_ID}
        role="dialog"
        aria-modal="true"
        aria-labelledby={MENU_TITLE}
        aria-label="Navigation menu"
        onKeyDown={handleKeyDown}
        className={cn(
          'fixed top-0 right-0 z-[50] h-full w-full max-w-sm',
          'bg-[var(--color-bg-inverse)] flex flex-col',
          'transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border-inverse)]">
          <Logo variant="inverse" size="sm" />

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-[2px]',
              'text-[var(--color-text-inverse-muted)] hover:text-[var(--color-text-inverse)]',
              'transition-colors duration-[150ms]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)]',
            )}
            aria-label="Close navigation menu"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Nav items */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto py-8 px-6"
        >
          <span id={MENU_TITLE} className="sr-only">
            Site navigation
          </span>

          <ul className="space-y-1" role="list">
            {nav.map((group) => (
              <li key={group.label}>
                {/* Parent link */}
                <Link
                  href={group.href ?? '#'}
                  onClick={onClose}
                  aria-current={pathname === group.href ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between w-full py-4',
                    'border-b border-[var(--color-border-inverse)]',
                    'font-[var(--font-inter)] font-medium uppercase tracking-[0.2em] text-[11px]',
                    'transition-colors duration-[150ms]',
                    pathname === group.href || pathname.startsWith(group.href + '/')
                      ? 'text-[var(--color-text-inverse)]'
                      : 'text-[var(--color-text-inverse-muted)]',
                    'hover:text-[var(--color-text-inverse)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)] rounded-[2px]',
                  )}
                >
                  {group.label}
                  {group.children && (
                    <ChevronRight
                      size={14}
                      strokeWidth={1.5}
                      className="opacity-40"
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Sub-links */}
                {group.children && group.children.length > 0 && (
                  <ul className="pl-4 pb-4 space-y-3 mt-3" role="list">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          aria-current={pathname === child.href ? 'page' : undefined}
                          className={cn(
                            'block font-[var(--font-inter)] text-sm',
                            'transition-colors duration-[150ms]',
                            pathname === child.href
                              ? 'text-[var(--color-accent-light)]'
                              : 'text-[var(--color-text-inverse-muted)]',
                            'hover:text-[var(--color-text-inverse)]',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)] rounded-[2px]',
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel footer */}
        <div className="px-6 py-6 border-t border-[var(--color-border-inverse)]">
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(
              'block w-full text-center py-4 px-6',
              'font-[var(--font-inter)] font-medium uppercase tracking-[0.2em] text-[11px]',
              'text-[var(--color-bg-inverse)] bg-[var(--color-text-inverse)]',
              'transition-colors duration-[250ms]',
              'hover:bg-[var(--color-chalk-200)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-inverse)] rounded-[2px]',
            )}
          >
            Plan Your Safari
          </Link>
        </div>
      </div>
    </>
  );
}

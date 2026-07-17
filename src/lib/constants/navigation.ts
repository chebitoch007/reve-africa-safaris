/**
 * RÊVE AFRICA SAFARIS — Navigation Constants
 *
 * All navigation data lives here, separate from UI components.
 * Swap content without touching any component.
 */

import type { NavLink, NavGroup } from '@/types';

// ─────────────────────────────────────────────
// Primary navigation
// ─────────────────────────────────────────────

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: 'Destinations',
    href:  '/destinations',
    children: [
      { label: 'Kenya',      href: '/destinations/kenya' },
      { label: 'Tanzania',   href: '/destinations/tanzania' },
      { label: 'Botswana',   href: '/destinations/botswana' },
      { label: 'Rwanda',     href: '/destinations/rwanda' },
      { label: 'Zimbabwe',   href: '/destinations/zimbabwe' },
      { label: 'Namibia',    href: '/destinations/namibia' },
    ],
  },
  {
    label: 'Experiences',
    href:  '/experiences',
    children: [
      { label: 'Private Game Drives',    href: '/experiences/game-drives' },
      { label: 'Gorilla Trekking',       href: '/experiences/gorilla-trekking' },
      { label: 'Hot Air Ballooning',     href: '/experiences/ballooning' },
      { label: 'Walking Safaris',        href: '/experiences/walking-safaris' },
      { label: 'Conservation Stays',     href: '/experiences/conservation' },
      { label: 'Fly-in Safaris',         href: '/experiences/fly-in' },
    ],
  },
  {
    label: 'Journeys',
    href:  '/packages',
  },
  {
    label: 'About',
    href:  '/about',
  },
  {
    label: 'Contact',
    href:  '/contact',
  },
];

// ─────────────────────────────────────────────
// Footer navigation columns
// ─────────────────────────────────────────────

export const FOOTER_DESTINATIONS: NavLink[] = [
  { label: 'Kenya',      href: '/destinations/kenya' },
  { label: 'Tanzania',   href: '/destinations/tanzania' },
  { label: 'Botswana',   href: '/destinations/botswana' },
  { label: 'Rwanda',     href: '/destinations/rwanda' },
  { label: 'Zimbabwe',   href: '/destinations/zimbabwe' },
  { label: 'Namibia',    href: '/destinations/namibia' },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { label: 'All Journeys',      href: '/packages' },
  { label: 'Experiences',       href: '/experiences' },
  { label: 'Private Safaris',   href: '/experiences/private' },
  { label: 'Conservation',      href: '/experiences/conservation' },
  { label: 'Safari Planning',   href: '/plan' },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About Us',          href: '/about' },
  { label: 'Our Philosophy',    href: '/about/philosophy' },
  { label: 'Sustainability',    href: '/about/sustainability' },
  { label: 'Partners',          href: '/about/partners' },
  { label: 'Contact',           href: '/contact' },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy Policy',       href: '/legal/privacy' },
  { label: 'Terms & Conditions',   href: '/legal/terms' },
  { label: 'Cookie Policy',        href: '/legal/cookies' },
];

// ─────────────────────────────────────────────
// Social links
// ─────────────────────────────────────────────

export interface SocialLink {
  label:    string;
  href:     string;
  platform: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'linkedin';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label:    'Instagram',
    href:     'https://instagram.com/reveafricasafaris',
    platform: 'instagram',
  },
  {
    label:    'Facebook',
    href:     'https://facebook.com/reveafricasafaris',
    platform: 'facebook',
  },
  {
    label:    'YouTube',
    href:     'https://youtube.com/@reveafricasafaris',
    platform: 'youtube',
  },
];

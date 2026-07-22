/**
 * RÊVE AFRICA SAFARIS — Navigation Constants
 *
 * All navigation data lives here, separate from UI components.
 * Swap content without touching any component.
 *
 * NOTE: Unbuilt routes are redirected to the closest real page
 * to prevent 404s until dedicated pages are implemented.
 */

import type { NavLink, NavGroup } from '@/types';

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: 'Destinations',
    href:  '/destinations',
    children: [
      { label: 'Kenya',      href: '/destinations' },
      { label: 'Tanzania',   href: '/destinations' },
      { label: 'Botswana',   href: '/destinations' },
      { label: 'Rwanda',     href: '/destinations' },
      { label: 'Zimbabwe',   href: '/destinations' },
      { label: 'Namibia',    href: '/destinations' },
    ],
  },
  {
    label: 'Experiences',
    href:  '/packages',
    children: [
      { label: 'Private Game Drives',    href: '/packages' },
      { label: 'Gorilla Trekking',       href: '/packages' },
      { label: 'Hot Air Ballooning',     href: '/packages' },
      { label: 'Walking Safaris',        href: '/packages' },
      { label: 'Conservation Stays',     href: '/packages' },
      { label: 'Fly-in Safaris',         href: '/packages' },
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

export const FOOTER_DESTINATIONS: NavLink[] = [
  { label: 'Kenya',      href: '/destinations' },
  { label: 'Tanzania',   href: '/destinations' },
  { label: 'Botswana',   href: '/destinations' },
  { label: 'Rwanda',     href: '/destinations' },
  { label: 'Zimbabwe',   href: '/destinations' },
  { label: 'Namibia',    href: '/destinations' },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { label: 'All Journeys',      href: '/packages' },
  { label: 'Experiences',       href: '/packages' },
  { label: 'Private Safaris',   href: '/packages' },
  { label: 'Conservation',      href: '/packages' },
  { label: 'Safari Planning',   href: '/contact' },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About Us',          href: '/about' },
  { label: 'Our Philosophy',    href: '/about' },
  { label: 'Sustainability',    href: '/about' },
  { label: 'Partners',          href: '/about' },
  { label: 'Contact',           href: '/contact' },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy Policy',       href: '/contact' },
  { label: 'Terms & Conditions',   href: '/contact' },
  { label: 'Cookie Policy',        href: '/contact' },
];

export interface SocialLink {
  label:    string;
  href:     string;
  platform: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'linkedin';
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/reveafricasafaris', platform: 'instagram' },
  { label: 'Facebook',  href: 'https://facebook.com/reveafricasafaris',  platform: 'facebook'  },
  { label: 'YouTube',   href: 'https://youtube.com/@reveafricasafaris',  platform: 'youtube'   },
];

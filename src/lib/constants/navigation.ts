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

// Set to false to remove the Journal link from the header, mobile menu and footer.
export const BLOG_IN_NAV: boolean = true;

const JOURNAL_LINK: NavLink = { label: 'Journal', href: '/blog' };

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: 'Destinations',
    href:  '/destinations',
    children: [
      { label: 'Kenya',      href: '/destinations#kenya' },
      { label: 'Tanzania',   href: '/destinations#tanzania' },
      { label: 'Rwanda',     href: '/destinations#rwanda' },
      { label: 'Uganda',     href: '/destinations#uganda' },
      { label: 'Botswana',   href: '/destinations#botswana' },
      { label: 'Namibia',    href: '/destinations#namibia' },
    ],
  },
  {
    label: 'Experiences',
    href:  '/destinations#signature-experiences',
    children: [
      { label: 'Gorilla Trekking',       href: '/destinations#experience-gorilla' },
      { label: 'Hot Air Ballooning',     href: '/destinations#experience-balloon' },
      { label: 'Walking Safaris',        href: '/destinations#experience-walking' },
      { label: 'Fly-in Safaris',         href: '/destinations#experience-fly-in' },
    ],
  },
  {
    label: 'Journeys',
    href:  '/packages',
  },
  ...(BLOG_IN_NAV ? [JOURNAL_LINK] : []),
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
  { label: 'Kenya',      href: '/destinations#kenya' },
  { label: 'Tanzania',   href: '/destinations#tanzania' },
  { label: 'Rwanda',     href: '/destinations#rwanda' },
  { label: 'Uganda',     href: '/destinations#uganda' },
  { label: 'Botswana',   href: '/destinations#botswana' },
  { label: 'Namibia',    href: '/destinations#namibia' },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { label: 'All Journeys',      href: '/packages' },
  ...(BLOG_IN_NAV ? [JOURNAL_LINK] : []),
  { label: 'Experiences',       href: '/destinations#signature-experiences' },
  { label: 'Safari Planning',   href: '/contact#contact-form' },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About Us',          href: '/about' },
  { label: 'Our Philosophy',    href: '/about#our-approach' },
  { label: 'Contact',           href: '/contact' },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy Policy',       href: '/privacy' },
  { label: 'Terms & Conditions',   href: '/terms' },
  { label: 'Cookie Policy',        href: '/cookies' },
];

export interface SocialLink {
  label:    string;
  href:     string;
  platform: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'linkedin';
}

// OWNER-FILL pattern: an empty href means the account does not exist yet.
// The footer icon and the JSON-LD sameAs entry appear only once it is set.
export const SOCIAL_LINKS: SocialLink[] = [
  // [OWNER-FILL]: full Instagram profile URL
  { label: 'Instagram', href: '', platform: 'instagram' },
  // [OWNER-FILL]: full Facebook page URL
  { label: 'Facebook',  href: '', platform: 'facebook'  },
  // [OWNER-FILL]: full YouTube channel URL
  { label: 'YouTube',   href: '', platform: 'youtube'   },
];

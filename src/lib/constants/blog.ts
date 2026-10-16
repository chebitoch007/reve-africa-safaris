/**
 * RÊVE AFRICA SAFARIS — Blog Page Constants
 *
 * All content data for the /blog page (editorial journal).
 * Components must not contain any hardcoded copy.
 *
 * Page sections (8 total):
 *  1. BlogHero              — dark editorial hero
 *  2. FeaturedStory         — flagship article showcase
 *  3. LatestStories         — article card grid
 *  4. BlogCategories        — category overview (informational only; only categories with an article)
 *  5. EditorialPhilosophy   — storytelling approach
 *  6. NewsletterSection     — newsletter CTA; rendered only when NEWSLETTER_ENABLED is true
 *  7. BlogFAQ               — accordion FAQ
 *  8. BlogCTA               — closing safari CTA
 */

// ─────────────────────────────────────────────
// Shared types
// ─────────────────────────────────────────────

export type BlogCategory =
  | 'wildlife'
  | 'conservation'
  | 'destinations'
  | 'photography'
  | 'safari-planning'
  | 'culture';

// ─────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────

export const BLOG_HERO = {
  eyebrow:    'Field Notes',
  headline:   'Stories from\nwild Africa',
  subheadline:
    'Early notes from the two of us as we build Rêve Africa Safaris.',
} as const;

// ─────────────────────────────────────────────
// 4. Blog Categories
// ─────────────────────────────────────────────

export interface BlogCategoryItem {
  id:          string;
  category:    BlogCategory;
  label:       string;
  description: string;
  icon:        string;
}

export const BLOG_CATEGORY_ITEMS: BlogCategoryItem[] = [
  {
    id:          'bc-1',
    category:    'wildlife',
    label:       'Wildlife',
    description: 'Behavioural studies, rare sightings, and the science behind Africa\'s iconic animals.',
    icon:        'Footprints',
  },
  {
    id:          'bc-2',
    category:    'conservation',
    label:       'Conservation',
    description: 'The people, policies, and projects working to protect wild Africa for future generations.',
    icon:        'Leaf',
  },
  {
    id:          'bc-3',
    category:    'destinations',
    label:       'Destinations',
    description: 'In-depth guides to the parks, reserves, and landscapes that define our itineraries.',
    icon:        'MapPin',
  },
  {
    id:          'bc-4',
    category:    'photography',
    label:       'Photography',
    description: 'Technique, timing, and the stories behind our most memorable field photographs.',
    icon:        'Camera',
  },
  {
    id:          'bc-5',
    category:    'safari-planning',
    label:       'Safari Planning',
    description: 'Practical guidance on when to go, what to pack, and how to plan a journey of your own.',
    icon:        'BookOpen',
  },
  {
    id:          'bc-6',
    category:    'culture',
    label:       'Culture',
    description: 'The communities, traditions, and living histories woven into every landscape we visit.',
    icon:        'Users',
  },
];

// Only categories that have at least one article are shown (cards are not
// links). [OWNER-FILL]: add a category id here once an article exists for it.
// While this list is empty, the whole category section is hidden.
export const BLOG_CATEGORIES_WITH_ARTICLES: BlogCategory[] = [];

export const BLOG_CATEGORIES_SECTION = {
  eyebrow:  'Browse by Theme',
  headline: 'Explore\nthe journal',
  body:     'Dispatches organised by subject — from practical planning guides to intimate wildlife encounters.',
} as const;

// ─────────────────────────────────────────────
// 6. Newsletter CTA
// ─────────────────────────────────────────────

// [OWNER-FILL]: set to true only once a newsletter provider is connected
// and the form really collects sign-ups. While false, /blog shows no
// newsletter section.
export const NEWSLETTER_ENABLED: boolean = false;

export const NEWSLETTER_SECTION = {
  eyebrow:    'Stay Connected',
  headline:   'Field notes,\ndelivered',
  body:       'A curated dispatch — new stories, seasonal travel insights, and conservation news — sent to your inbox when the timing is right. Never more than twice a month.',
  inputLabel: 'Email address',
  inputPlaceholder: 'your@email.com',
  buttonLabel:      'Subscribe',
  privacyNote:      'No spam. Unsubscribe at any time.',
  successMessage:   'Thank you — your first dispatch will arrive soon.',
} as const;

// ─────────────────────────────────────────────
// 7. Blog FAQ
// ─────────────────────────────────────────────

export interface BlogFAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const BLOG_FAQ_ITEMS: BlogFAQItem[] = [
  {
    id:       'bfaq-1',
    question: 'Who writes the articles in this journal?',
    answer:   'Notes and ideas from the two of us as we build Rêve Africa Safaris.',
  },
  {
    id:       'bfaq-3',
    question: 'Can I republish or share articles from this journal?',
    answer:   'Personal sharing, via email, social media or conversation, is always welcome. Please contact us if you have a specific request.',
  },
] as const;

export const BLOG_FAQ_SECTION = {
  eyebrow:  'Journal Questions',
  headline: 'Questions\nabout the journal',
  body:     'Everything you need to know about how we write, who writes it, and how to use it.',
  cta:      { label: 'Contact the team', href: '/contact' },
} as const;

// ─────────────────────────────────────────────
// 8. Blog CTA
// ─────────────────────────────────────────────

export const BLOG_CTA = {
  eyebrow:    'Begin Your Journey',
  headline:   'Read enough.\nNow go.',
  body:       'The best stories are the ones you live yourself. Let us plan the journey that gives you yours.',
  primaryCTA: {
    label: 'Plan Your Safari',
    href:  '/contact',
  },
  secondaryCTA: {
    label: 'View Packages',
    href:  '/packages',
  },
  detail: 'Bespoke itineraries crafted across East and Southern Africa.',
} as const;

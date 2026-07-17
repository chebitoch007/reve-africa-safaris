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
 *  4. BlogCategories        — category overview (informational only)
 *  5. EditorialPhilosophy   — storytelling approach
 *  6. NewsletterSection     — newsletter CTA (architecture only)
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
    'Dispatches from the field — wildlife encounters, conservation insights, destination guides, and the quiet moments that define a life spent in Africa.',
} as const;

// ─────────────────────────────────────────────
// 2. Featured Story
// ─────────────────────────────────────────────

export const FEATURED_STORY = {
  id:              'fs-1',
  category:        'wildlife' as BlogCategory,
  categoryLabel:   'Wildlife',
  readingTime:     '9 min read',
  publishedAt:     '14 June 2025',
  headline:        'The Crossing: Following the Great Migration from the Mara River to the Plains',
  excerpt:
    'Every year, more than a million wildebeest make one of nature\'s most perilous journeys across the Mara River into Tanzania. We spent three weeks in the field documenting the crossings — the chaos, the crocodiles, and the extraordinary stillness that follows when the dust settles.',
  cta:             { label: 'Read the story', href: '/blog/the-crossing' },
  placeholderFrom: '#4A5C35',
  placeholderTo:   '#1C1F18',
  imageAlt:        'Wildebeest crossing the Mara River at dawn during the Great Migration',
} as const;

// ─────────────────────────────────────────────
// 3. Latest Stories — Article list
// ─────────────────────────────────────────────

export interface ArticleData {
  id:              string;
  category:        BlogCategory;
  categoryLabel:   string;
  readingTime:     string;
  publishedAt:     string;
  headline:        string;
  excerpt:         string;
  href:            string;
  placeholderFrom: string;
  placeholderTo:   string;
  imageAlt:        string;
}

export const LATEST_STORIES: ArticleData[] = [
  {
    id:              'a-01',
    category:        'conservation',
    categoryLabel:   'Conservation',
    readingTime:     '6 min read',
    publishedAt:     '2 July 2025',
    headline:        'Inside Ol Pejeta: How Conservancy Models Are Changing the Future of the Black Rhino',
    excerpt:
      'Ol Pejeta Conservancy is home to the world\'s last two northern white rhinos. We speak with the team working around the clock to ensure no more species disappear on their watch.',
    href:            '/blog/ol-pejeta-rhino',
    placeholderFrom: '#5A6C45',
    placeholderTo:   '#131510',
    imageAlt:        'Black rhinoceros in the Ol Pejeta Conservancy, Kenya',
  },
  {
    id:              'a-02',
    category:        'photography',
    categoryLabel:   'Photography',
    readingTime:     '7 min read',
    publishedAt:     '18 June 2025',
    headline:        'Golden Hour in the Okavango: A Photographer\'s Guide to Botswana\'s Delta',
    excerpt:
      'The Okavango Delta at sunset is unlike anywhere else on earth. Our photography specialist shares the positions, timings, and patience that produce extraordinary light.',
    href:            '/blog/okavango-photography',
    placeholderFrom: '#4A6B4A',
    placeholderTo:   '#0C0D0B',
    imageAlt:        'Aerial view of the Okavango Delta at golden hour, Botswana',
  },
  {
    id:              'a-03',
    category:        'destinations',
    categoryLabel:   'Destinations',
    readingTime:     '8 min read',
    publishedAt:     '5 June 2025',
    headline:        'Rwanda Beyond the Gorillas: What Most Visitors Miss in the Land of a Thousand Hills',
    excerpt:
      'The mountain gorillas draw travellers to Rwanda, but the country\'s other experiences — its culture, its lakes, its unlikely elegance — are equally worth seeking out.',
    href:            '/blog/rwanda-beyond-gorillas',
    placeholderFrom: '#3D5C3A',
    placeholderTo:   '#0C0D0B',
    imageAlt:        'Rolling hills and tea plantations of Rwanda at dawn',
  },
  {
    id:              'a-04',
    category:        'safari-planning',
    categoryLabel:   'Safari Planning',
    readingTime:     '10 min read',
    publishedAt:     '22 May 2025',
    headline:        'When to Go: A Season-by-Season Guide to East and Southern Africa',
    excerpt:
      'There is no bad time to visit Africa. But there is always a best time — depending on what you want to see, where you want to go, and what kind of experience you are seeking.',
    href:            '/blog/when-to-go-africa',
    placeholderFrom: '#8F7A3A',
    placeholderTo:   '#282C22',
    imageAlt:        'Acacia trees silhouetted against an East African sunset',
  },
  {
    id:              'a-05',
    category:        'culture',
    categoryLabel:   'Culture',
    readingTime:     '5 min read',
    publishedAt:     '10 May 2025',
    headline:        'The Maasai and the Mara: Understanding a Relationship Built Over Centuries',
    excerpt:
      'The Maasai people have coexisted with East Africa\'s wildlife for generations. To understand the Mara is to understand the culture that helped shape it.',
    href:            '/blog/maasai-mara-culture',
    placeholderFrom: '#7B3B2A',
    placeholderTo:   '#1C1510',
    imageAlt:        'Maasai elder in traditional red shuka against the Mara landscape',
  },
  {
    id:              'a-06',
    category:        'wildlife',
    categoryLabel:   'Wildlife',
    readingTime:     '6 min read',
    publishedAt:     '28 April 2025',
    headline:        'The Leopard of Samburu: Six Days Tracking Africa\'s Most Elusive Cat',
    excerpt:
      'Samburu National Reserve holds more leopard sightings per square kilometre than almost anywhere on the continent. We joined a tracking team to find out why.',
    href:            '/blog/samburu-leopard',
    placeholderFrom: '#8F7A3A',
    placeholderTo:   '#1C1F18',
    imageAlt:        'Leopard resting in an acacia tree in Samburu National Reserve, Kenya',
  },
];

export const LATEST_STORIES_SECTION = {
  eyebrow:  'From the Journal',
  headline: 'Latest\nfield notes',
} as const;

// ─────────────────────────────────────────────
// 4. Blog Categories
// ─────────────────────────────────────────────

export interface BlogCategoryItem {
  id:          string;
  category:    BlogCategory;
  label:       string;
  description: string;
  count:       number;
  icon:        string;
}

export const BLOG_CATEGORY_ITEMS: BlogCategoryItem[] = [
  {
    id:          'bc-1',
    category:    'wildlife',
    label:       'Wildlife',
    description: 'Behavioural studies, rare sightings, and the science behind Africa\'s iconic animals.',
    count:       24,
    icon:        'Footprints',
  },
  {
    id:          'bc-2',
    category:    'conservation',
    label:       'Conservation',
    description: 'The people, policies, and projects working to protect wild Africa for future generations.',
    count:       18,
    icon:        'Leaf',
  },
  {
    id:          'bc-3',
    category:    'destinations',
    label:       'Destinations',
    description: 'In-depth guides to the parks, reserves, and landscapes that define our itineraries.',
    count:       31,
    icon:        'MapPin',
  },
  {
    id:          'bc-4',
    category:    'photography',
    label:       'Photography',
    description: 'Technique, timing, and the stories behind our most memorable field photographs.',
    count:       16,
    icon:        'Camera',
  },
  {
    id:          'bc-5',
    category:    'safari-planning',
    label:       'Safari Planning',
    description: 'Practical guidance on when to go, what to pack, and how to plan a journey of your own.',
    count:       22,
    icon:        'BookOpen',
  },
  {
    id:          'bc-6',
    category:    'culture',
    label:       'Culture',
    description: 'The communities, traditions, and living histories woven into every landscape we visit.',
    count:       14,
    icon:        'Users',
  },
];

export const BLOG_CATEGORIES_SECTION = {
  eyebrow:  'Browse by Theme',
  headline: 'Explore\nthe journal',
  body:     'Dispatches organised by subject — from practical planning guides to intimate wildlife encounters.',
} as const;

// ─────────────────────────────────────────────
// 5. Editorial Philosophy
// ─────────────────────────────────────────────

export interface PhilosophyPillar {
  id:    string;
  label: string;
  body:  string;
}

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id:    'pp-1',
    label: 'Written from the field',
    body:  'Every piece in this journal is written by someone who has been there — our guides, specialists, and the guests whose experiences have shaped our understanding of wild Africa. We do not publish from behind a desk.',
  },
  {
    id:    'pp-2',
    label: 'Conservation before content',
    body:  'We only write about what we believe in. If a practice, destination, or lodge does not meet our ethical standards, it does not appear on these pages. Our editorial independence is non-negotiable.',
  },
  {
    id:    'pp-3',
    label: 'Depth over frequency',
    body:  'We publish slowly and carefully. A single well-researched story about a single place is worth more to us than a dozen thin posts written for visibility. We believe the people who travel with us prefer it that way.',
  },
];

export const EDITORIAL_PHILOSOPHY_SECTION = {
  eyebrow:  'Our Approach',
  headline: 'How we\ntell stories',
  intro:    'This journal is not a content calendar. It is a record of what we have witnessed, learned, and believe — about Africa, about travel, and about the responsibility that comes with both.',
} as const;

// ─────────────────────────────────────────────
// 6. Newsletter CTA
// ─────────────────────────────────────────────

export const NEWSLETTER_SECTION = {
  eyebrow:    'Stay Connected',
  headline:   'Field notes,\ndelivered',
  body:       'A curated dispatch — new stories, seasonal travel insights, and conservation news — sent to your inbox when the timing is right. Never more than twice a month.',
  inputLabel: 'Email address',
  inputPlaceholder: 'your@email.com',
  buttonLabel:      'Subscribe',
  privacyNote:      'No spam. Unsubscribe at any time. Read our privacy policy.',
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
    answer:   'All articles are written by our guides, specialists, and in some cases by guests who have experienced our journeys first-hand. We do not commission freelance content or publish press releases. Every piece reflects a genuine field experience.',
  },
  {
    id:       'bfaq-2',
    question: 'How often do you publish new content?',
    answer:   'We publish when we have something worth saying — typically two to four times a month. We deliberately do not maintain a high-frequency publishing schedule, as we believe quality and depth serve our readers better than volume.',
  },
  {
    id:       'bfaq-3',
    question: 'Can I republish or share articles from this journal?',
    answer:   'Personal sharing — via email, social media, or conversation — is always welcome. Commercial reproduction, republication, or use of our photography without written permission is not permitted. Please contact us if you have a specific request.',
  },
  {
    id:       'bfaq-4',
    question: 'Do you accept guest contributions or sponsored content?',
    answer:   'We occasionally publish contributions from voices we trust — scientists, conservationists, and experienced travellers whose perspective adds genuine value. We do not accept paid or sponsored content of any kind. Our editorial independence is the foundation of this journal.',
  },
  {
    id:       'bfaq-5',
    question: 'Can I use these articles to help plan my safari?',
    answer:   'Absolutely — that is partly why we write them. Our destination guides, seasonal planning articles, and photography advice are all drawn from real experience. If you find something that speaks to a journey you are considering, contact our team and we will build an itinerary around it.',
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

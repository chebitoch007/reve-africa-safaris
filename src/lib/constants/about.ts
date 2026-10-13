/**
 * RÊVE AFRICA SAFARIS — About Page Content Constants
 *
 * All copy, data, and content for the /about page lives here.
 * Components import from this file — never hardcode content in JSX.
 */

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const ABOUT_HERO = {
  eyebrow:    'Our Story',
  headline:   'Born from a\npassion for\nwild Africa',
  subheadline: 'A new, founder-led safari company, built with care.',
} as const;

// ─────────────────────────────────────────────
// Our Story
// ─────────────────────────────────────────────

export const OUR_STORY = {
  eyebrow:  'The Beginning',
  headline: 'A new company,\nbuilt with care',
  chapters: [
    {
      id:   'founding',
      body: 'Rêve Africa Safaris was started in 2026 by siblings Eliphaz Chebitoch and Purity Langat. Purity brings a background in tourism and hospitality; Eliphaz built the digital side of the business. We are a two-person company at the start of our journey.',
    },
    {
      id:   'philosophy',
      body: 'The name Rêve is French for dream. We chose it deliberately: not because Africa is a fantasy to be consumed, but because of what a journey there can mean.',
    },
    {
      id:   'today',
      body: 'Today we are a team of two. We are building journeys for East and Southern Africa, and we will only offer what we can deliver well.',
    },
  ],
} as const;

// ─────────────────────────────────────────────
// Our Approach
// ─────────────────────────────────────────────

export interface ApproachPillar {
  id:          string;
  number:      string;
  title:       string;
  description: string;
}

export const OUR_APPROACH = {
  eyebrow:  'How We Work',
  headline: 'Three principles\nthat shape every\njourney',
  body:     'We do not believe in cookie-cutter safaris. Every trip we design is shaped by three convictions.',
  pillars: [
    {
      id:          'intimacy',
      number:      'I',
      title:       'Intimacy over scale',
      description: 'We design journeys for small groups and private vehicles, and give each traveller our complete attention, from the first conversation to the last farewell at the airstrip.',
    },
    {
      id:          'authenticity',
      number:      'II',
      title:       'Authenticity over aesthetics',
      description: 'We choose camps that earn their reputation through guiding excellence and ecological sensitivity, not through infinity pools and overdesigned interiors. Luxury, for us, means freedom from distraction — not an accumulation of amenities.',
    },
    {
      id:          'accountability',
      number:      'III',
      title:       'Accountability to place',
      description: 'We want to work only with partners who share our commitment to the places and communities we travel through.',
    },
  ] satisfies ApproachPillar[],
} as const;

// ─────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────

export interface TeamMember {
  id:     string;
  name:   string;
  role:   string;
  bio:    string;
  /** Optional: only set when verified facts exist. */
  origin?:    string;
  expertise?: readonly string[];
  /** Optional: when absent, TeamCard renders a gradient fallback (no portrait, no alt text). */
  imageSrc?: string;
  imageAlt?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id:   'eliphaz',
    name: 'Eliphaz Chebitoch',
    role: 'Co-Founder · Website & Digital',
    bio:  'Eliphaz designed and built this website and looks after the digital side of the business, from how we show up online to how enquiries reach us.',
  },
  {
    id:   'purity',
    name: 'Purity Langat',
    role: 'Co-Founder · Trip Planning & Guest Experience',
    bio:  'Purity has a background and working experience in tourism and hospitality, and leads how each journey is planned and how our guests are looked after.',
  },
];


// ─────────────────────────────────────────────
// Conservation Commitment
// ─────────────────────────────────────────────

export interface ConservationInitiative {
  id:          string;
  title:       string;
  description: string;
  stat:        string;
  statLabel:   string;
}

export const CONSERVATION = {
  eyebrow:  'Our Commitment',
  headline: 'Travel that gives\nmore than it takes',
  body:     'We believe the privilege of witnessing wild Africa comes with a binding obligation — to the land, the wildlife, and the people who have been its stewards for generations. These are the commitments we honour on every journey.',
  initiatives: [
    {
      id:          'community',
      title:       'Community First',
      description: 'A minimum of 15% of every journey fee is channelled directly to community conservancies and local education programmes in the regions we operate. We prioritise suppliers who are community-owned.',
      stat:        '15%',
      statLabel:   'of fees to local communities',
    },
    {
      id:          'carbon',
      title:       'Measured Footprint',
      description: 'We offset 120% of the carbon generated by every journey, verified through Gold Standard projects in East Africa. We also provide each client with a full carbon audit of their trip.',
      stat:        '120%',
      statLabel:   'carbon offset on every trip',
    },
    {
      id:          'conservation',
      title:       'Wildlife Investment',
      description: 'We are founding partners of the Rêve Conservation Fund, which has supported anti-poaching operations, elephant corridor research, and predator monitoring across Kenya, Tanzania, and Botswana since 2014.',
      stat:        '11yr',
      statLabel:   'of wildlife funding',
    },
  ] satisfies ConservationInitiative[],
} as const;

// ─────────────────────────────────────────────
// About CTA
// ─────────────────────────────────────────────

export const ABOUT_CTA = {
  eyebrow:   'Begin Here',
  headline:  'Your Africa\nawaits',
  body:      'Every extraordinary journey begins with a single conversation. Tell us when you dream of going, what you hope to witness, and we will design a journey that exceeds every expectation.',
  primaryCTA:   { label: 'Plan Your Safari',  href: '/contact' },
  secondaryCTA: { label: 'View Our Journeys', href: '/packages' },
  detail: 'No obligation. No templates. Just your Africa, designed with care.',
} as const;

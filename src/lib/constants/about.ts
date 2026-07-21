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
  subheadline: 'We are guides, conservationists, and storytellers — bound by a shared conviction that the wilderness deserves our deepest reverence.',
} as const;

// ─────────────────────────────────────────────
// Our Story
// ─────────────────────────────────────────────

export const OUR_STORY = {
  eyebrow:  'The Beginning',
  headline: 'Fifteen years of\nlistening to the land',
  chapters: [
    {
      id:   'founding',
      body: 'Rêve Africa Safaris was founded in 2009 by Amara Nkosi and David Mwangi — two guides who had spent a decade leading expeditions across East Africa for larger operators and found themselves yearning to do things differently. More slowly. More intimately. With greater care for the communities and ecosystems they moved through.',
    },
    {
      id:   'philosophy',
      body: 'The name — Rêve, French for dream — was chosen deliberately. Not because Africa is a fantasy to be consumed, but because witnessing a lioness hunt at first light, or sitting in silence as a herd of elephants crosses a river at dusk, reaches something in us that ordinary life rarely touches.',
    },
    {
      id:   'today',
      body: 'Today we operate across six countries, with a small team of hand-selected guides, naturalists, and cultural interpreters. Every itinerary is built from first principles — no templates, no group departures, no compromises on the quality of the experience.',
    },
  ],
  pullQuote: {
    text:   'Africa is not a backdrop. It is the reason — the whole, humbling, magnificent reason.',
    credit: 'Amara Nkosi, Co-Founder',
  },
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
  body:     'We do not believe in cookie-cutter safaris. Every trip we design is shaped by three convictions that have guided us since we began.',
  pillars: [
    {
      id:          'intimacy',
      number:      'I',
      title:       'Intimacy over scale',
      description: 'Small groups. Private vehicles. Guides who know the land they walk on. We deliberately limit the number of journeys we run each year so that every client receives our complete attention — from the first conversation to the last farewell at the airstrip.',
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
      description: 'Every dollar spent on a Rêve journey contributes directly to the communities and conservation areas we pass through. We work only with partners who share our commitment, and we are transparent about how travel fees are distributed.',
    },
  ] satisfies ApproachPillar[],
} as const;

// ─────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────

export interface TeamMember {
  id:           string;
  name:         string;
  role:         string;
  origin:       string;
  bio:          string;
  expertise:    readonly string[];
  imageSrc:     string;
  imageAlt:     string;
  /** Placeholder gradient stops — swap for <Image> when photography available */
  placeholderFrom: string;
  placeholderTo:   string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id:              'amara',
    name:            'Amara Nkosi',
    role:            'Co-Founder & Head of Expeditions',
    origin:          'Kenya',
    bio:             'Born in Naivasha, Amara holds a degree in ecology from the University of Nairobi and has led over 800 expeditions across East Africa. She is a Fellow of the Kenya Professional Safari Guides Association.',
    expertise:       ['Maasai Mara', 'Laikipia', 'Amboseli'],
    imageSrc:        '/images/about/team/img-037-team-amara-nkosi.jpg',
    imageAlt:        'Amara Nkosi, Co-Founder and Head of Expeditions at Rêve Africa Safaris',
    placeholderFrom: '#9E8B4D',
    placeholderTo:   '#282C22',
  },
  {
    id:              'david',
    name:            'David Mwangi',
    role:            'Co-Founder & Conservation Director',
    origin:          'Kenya',
    bio:             'A former wildlife ranger with the Kenya Wildlife Service, David brings an unmatched depth of field knowledge. He is the architect of our community partnership programme and oversees all conservation commitments.',
    expertise:       ['Wildlife conservation', 'Community relations', 'Northern Kenya'],
    imageSrc:        '/images/about/team/img-038-team-david-mwangi.jpg',
    imageAlt:        'David Mwangi, Co-Founder and Conservation Director at Rêve Africa Safaris',
    placeholderFrom: '#495C3D',
    placeholderTo:   '#131510',
  },
  {
    id:              'fatima',
    name:            'Fatima Al-Rashid',
    role:            'Senior Safari Consultant',
    origin:          'Tanzania',
    bio:             'With roots in Arusha and fluency in Swahili, Arabic, and English, Fatima designs itineraries across Tanzania and Rwanda. Her expertise in gorilla trekking permits is unrivalled in the industry.',
    expertise:       ['Serengeti', 'Ngorongoro', 'Gorilla trekking'],
    imageSrc:        '/images/about/team/img-039-team-fatima-alrashid.jpg',
    imageAlt:        'Fatima Al-Rashid, Senior Safari Consultant at Rêve Africa Safaris',
    placeholderFrom: '#7D6D3A',
    placeholderTo:   '#1C1F18',
  },
  {
    id:              'sipho',
    name:            'Sipho Dlamini',
    role:            'Southern Africa Specialist',
    origin:          'Botswana',
    bio:             'Raised on the edge of the Okavango Delta, Sipho is our guide and specialist for Botswana, Zimbabwe, and Namibia. He is a certified Master Tracker and wilderness first responder.',
    expertise:       ['Okavango Delta', 'Chobe', 'Hwange'],
    imageSrc:        '/images/about/team/img-040-team-sipho-dlamini.jpg',
    imageAlt:        'Sipho Dlamini, Southern Africa Specialist at Rêve Africa Safaris',
    placeholderFrom: '#627A53',
    placeholderTo:   '#363B2D',
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

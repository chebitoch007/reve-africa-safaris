/**
 * RÊVE AFRICA SAFARIS — Contact Page Constants
 *
 * All content data for the /contact page.
 * Components must not contain any hardcoded copy.
 *
 * Page sections (7 total):
 *  1. ContactHero          — dark editorial hero
 *  2. ConciergeIntro       — bespoke service introduction
 *  3. ContactMethods       — phone, email, office, hours
 *  4. EnquiryForm          — luxury enquiry form (frontend only)
 *  5. OfficeLocation       — office & travel information
 *  6. ContactFAQ           — shared AccordionFAQ
 *  7. ContactCTA           — final CTA
 */

// ─────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────

export const CONTACT_HERO = {
  eyebrow:     'Begin the Conversation',
  headline:    'Let\'s plan\nyour journey',
  subheadline:
    'Every extraordinary safari begins with a conversation. Tell us what you are dreaming of — we will handle everything else.',
} as const;

// ─────────────────────────────────────────────
// 2. Concierge Introduction
// ─────────────────────────────────────────────

export const CONCIERGE_INTRO = {
  eyebrow:  'Personal Service',
  headline: 'Your dedicated\nconcierge',
  body: [
    'When you contact Rêve Africa Safaris, you speak directly with a specialist — not a call centre, not a booking engine. Every enquiry is received by a member of our core team who has travelled to the destinations we design itineraries for.',
    'We take time to understand what you are looking for before we propose anything. A first conversation might last twenty minutes. Some last much longer. We believe the quality of a safari is determined long before departure — in the care taken during planning.',
  ],
  commitment: {
    label: 'Our commitment',
    items: [
      { id: 'c1', text: 'Response within 24 hours on business days' },
      { id: 'c2', text: 'Dedicated specialist assigned to your enquiry' },
      { id: 'c3', text: 'No obligation — every consultation is complimentary' },
      { id: 'c4', text: 'Complete discretion and data privacy' },
    ],
  },
} as const;

// ─────────────────────────────────────────────
// 3. Contact Methods
// ─────────────────────────────────────────────

export interface ContactMethod {
  id:       string;
  label:    string;
  value:    string;
  detail:   string;
  icon:     string;
  href?:    string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id:     'cm-1',
    label:  'Telephone',
    value:  '+254 700 000 000',
    detail: 'Available Monday–Friday, 08:00–18:00 EAT',
    icon:   'Phone',
    href:   'tel:+254700000000',
  },
  {
    id:     'cm-2',
    label:  'Email',
    value:  'hello@reveafricasafaris.com',
    detail: 'For detailed enquiries and itinerary requests',
    icon:   'Mail',
    href:   'mailto:hello@reveafricasafaris.com',
  },
  {
    id:     'cm-3',
    label:  'WhatsApp',
    value:  '+254 700 000 000',
    detail: 'Quick questions and real-time communication',
    icon:   'MessageCircle',
    href:   'https://wa.me/254700000000',
  },
  {
    id:     'cm-4',
    label:  'Office Hours',
    value:  'Mon – Fri  ·  08:00 – 18:00',
    detail: 'East Africa Time (EAT / UTC+3)',
    icon:   'Clock',
  },
];

export const CONTACT_METHODS_SECTION = {
  eyebrow:  'Reach Us',
  headline: 'How to\nget in touch',
} as const;

// ─────────────────────────────────────────────
// 4. Enquiry Form
// ─────────────────────────────────────────────

export type TravelMonth =
  | 'January' | 'February' | 'March' | 'April'
  | 'May' | 'June' | 'July' | 'August'
  | 'September' | 'October' | 'November' | 'December'
  | 'Flexible';

export type GroupSize = '1–2' | '3–5' | '6–10' | '10+';

export type BudgetRange =
  | 'Under $5,000 per person'
  | '$5,000 – $10,000 per person'
  | '$10,000 – $20,000 per person'
  | '$20,000+ per person'
  | 'Not yet decided';

export const ENQUIRY_FORM = {
  eyebrow:  'Send an Enquiry',
  headline: 'Tell us about\nyour journey',
  intro:    'The more you share, the better we can tailor our response. All fields marked with * are required.',

  fields: {
    firstName:    { label: 'First name',        placeholder: 'Jane',              required: true  },
    lastName:     { label: 'Last name',          placeholder: 'Smith',             required: true  },
    email:        { label: 'Email address',      placeholder: 'jane@example.com',  required: true  },
    phone:        { label: 'Phone number',       placeholder: '+1 555 000 0000',   required: false },
    destinations: { label: 'Destinations of interest', placeholder: 'e.g. Kenya, Tanzania, Rwanda', required: false },
    travelMonth:  { label: 'Approximate travel month', required: false },
    groupSize:    { label: 'Group size',         required: false },
    budget:       { label: 'Budget range',       required: false },
    message:      {
      label:       'Tell us about your dream safari',
      placeholder: 'Share any thoughts on the type of experience you are looking for — wildlife priorities, accommodation preferences, special occasions, accessibility needs, or anything else that will help us design the right journey for you.',
      required:    true,
    },
  },

  travelMonths: [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
    'Flexible',
  ] as TravelMonth[],

  groupSizes: ['1–2', '3–5', '6–10', '10+'] as GroupSize[],

  budgetRanges: [
    'Under $5,000 per person',
    '$5,000 – $10,000 per person',
    '$10,000 – $20,000 per person',
    '$20,000+ per person',
    'Not yet decided',
  ] as BudgetRange[],

  submitLabel:    'Send Enquiry',
  privacyNote:    'Your information is kept strictly confidential and will never be shared with third parties. Read our privacy policy.',
  successHeadline: 'Thank you — we\'ve received your enquiry.',
  successBody:    'A member of our team will be in touch within 24 hours on business days. If your travel dates are urgent, please call us directly.',
} as const;

// ─────────────────────────────────────────────
// 5. Office Location
// ─────────────────────────────────────────────

export interface LocationDetail {
  id:    string;
  label: string;
  value: string;
}

export const OFFICE_LOCATION = {
  eyebrow:  'Find Us',
  headline: 'Our office\nin Nairobi',
  intro:    'We are based in Nairobi, Kenya — a city that sits at the gateway to some of East Africa\'s finest safari destinations. Our office is open to clients by appointment.',

  address: {
    street:   'Karen Road, Karen',
    city:     'Nairobi',
    country:  'Kenya',
    postcode: '00502',
  },

  details: [
    { id: 'ld-1', label: 'Nearest airport',   value: 'Wilson Airport (WIL) — 12 km' },
    { id: 'ld-2', label: 'International hub', value: 'Jomo Kenyatta International (NBO) — 18 km' },
    { id: 'ld-3', label: 'Time zone',         value: 'East Africa Time — UTC+3 (no DST)' },
    { id: 'ld-4', label: 'Visits',            value: 'By appointment only — please contact us to arrange' },
  ] as LocationDetail[],

  travelNote: {
    label: 'Visiting Nairobi?',
    body:  'If you are travelling through Nairobi on your way to or from a safari, we would love to meet in person. Let us know your dates and we will arrange a meeting at our office or at a location convenient to you.',
  },
} as const;

// ─────────────────────────────────────────────
// 6. Contact FAQ
// ─────────────────────────────────────────────

export interface ContactFAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export const CONTACT_FAQ_ITEMS: ContactFAQItem[] = [
  {
    id:       'cfaq-1',
    question: 'How quickly will you respond to my enquiry?',
    answer:
      'We respond to all enquiries within 24 hours on business days (Monday to Friday, East Africa Time). For urgent requests or time-sensitive travel dates, we recommend calling us directly — our telephone line is staffed from 08:00 to 18:00 EAT.',
  },
  {
    id:       'cfaq-2',
    question: 'Is there a fee for an initial consultation?',
    answer:
      'No. All initial consultations — whether by phone, video call, or email — are entirely complimentary. We only present a detailed itinerary proposal once we have had a thorough conversation about what you are looking for, and we do not charge for that either.',
  },
  {
    id:       'cfaq-3',
    question: 'Do you handle group bookings and corporate travel?',
    answer:
      'Yes — we design journeys for private individuals, families, small groups, and corporate travel alike. For groups of six or more, we offer dedicated group planning support and can arrange exclusive-use lodge options, private aircraft, and bespoke activities at scale.',
  },
  {
    id:       'cfaq-4',
    question: 'What information do you need to start planning?',
    answer:
      'The more you can share, the better — but we can work with very little to begin. Approximate dates, a rough sense of budget, and the kind of experience you are after (wildlife-focused, photographic, cultural, family-friendly, honeymoon, etc.) give us enough to begin a meaningful conversation.',
  },
  {
    id:       'cfaq-5',
    question: 'Can I make changes to an itinerary once planning has begun?',
    answer:
      'Absolutely — and we expect it. Safari planning is an iterative process. We work through multiple revisions with every client until the itinerary is exactly right. There is no additional charge for revisions during the planning phase.',
  },
  {
    id:       'cfaq-6',
    question: 'Do you work with travel agents and tour operators?',
    answer:
      'Yes — we work with a select number of trusted travel agencies and operators on a trade basis. If you are a travel professional interested in partnering with us, please use the enquiry form and mention your agency in the message field.',
  },
] as const;

export const CONTACT_FAQ_SECTION = {
  eyebrow:  'Before You Write',
  headline: 'Common\nquestions',
  body:     'Answers to the questions we hear most often before a first enquiry.',
  cta:      { label: 'Send an enquiry', href: '#contact-form' },
} as const;

// ─────────────────────────────────────────────
// 7. Contact CTA
// ─────────────────────────────────────────────

export const CONTACT_CTA = {
  eyebrow:    'The Journey Starts Here',
  headline:   'Africa is\nwaiting',
  body:       'Every journey we design begins as a conversation. Reach out — there is no obligation, and no question too small.',
  primaryCTA: {
    label: 'Send an Enquiry',
    href:  '#contact-form',
  },
  secondaryCTA: {
    label: 'Call Us Now',
    href:  'tel:+254700000000',
  },
  detail: 'Complimentary consultation · No booking fees · Fully bespoke itineraries',
} as const;

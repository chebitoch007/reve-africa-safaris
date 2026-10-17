/**
 * RÊVE AFRICA SAFARIS — Contact Page Constants
 *
 * All content data for the /contact page.
 * Components must not contain any hardcoded copy.
 *
 * Page sections (7 total):
 *  1. ContactHero          — dark editorial hero
 *  2. ConciergeIntro       — bespoke service introduction
 *  3. ContactMethods       — email always; phone, WhatsApp, hours when set
 *  4. EnquiryForm          — luxury enquiry form (frontend only)
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
  headline: 'Speak directly\nwith us',
  body: [
    'When you contact Rêve Africa Safaris, you speak directly with one of the two founders. Every enquiry is received by one of us.',
    'We take time to understand what you are looking for before we propose anything. We believe the quality of a safari is determined long before departure, in the care taken during planning.',
  ],
  commitment: {
    label: 'Our commitment',
    items: [
      { id: 'c1', text: 'Response within 24 hours on business days' }, // [OWNER-CONFIRM]: 24-hour response promise
      { id: 'c2', text: 'Your enquiry is handled by one of us' },
      { id: 'c3', text: 'No obligation — every consultation is complimentary' },
      { id: 'c4', text: 'We use your details only to reply to your enquiry.' }, // [OWNER-CONFIRM]: details used only to reply (form provider processes the submission)
    ],
  },
} as const;

// ─────────────────────────────────────────────
// 3. Contact Methods
// ─────────────────────────────────────────────

// OWNER-FILL pattern: each value below lives here, ONCE, as a string.
// An empty string means "not set": nothing renders anywhere (contact
// page, CTA button, footer, JSON-LD). Fill them in only with real,
// confirmed values. See docs/OWNER_FILL_CHECKLIST.md.

/** The real email address. Single source of truth for the whole site. */
export const CONTACT_EMAIL: string = 'enquiries@reveafricasafaris.com';

// [OWNER-FILL]: real phone number, international format, as it should display
export const CONTACT_PHONE: string = '';

// [OWNER-FILL]: real WhatsApp number, international format, as it should display
export const CONTACT_WHATSAPP: string = '';

// [OWNER-FILL]: real opening hours, as they should display
export const CONTACT_HOURS: string = '';

/** Keep digits (and a leading +) only, for tel: and wa.me URLs. */
const toDialable = (value: string): string => value.replace(/[^\d+]/g, '');

export const CONTACT_EMAIL_HREF: string = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : '';
export const CONTACT_PHONE_HREF: string = CONTACT_PHONE ? `tel:${toDialable(CONTACT_PHONE)}` : '';
export const CONTACT_WHATSAPP_HREF: string = CONTACT_WHATSAPP
  ? `https://wa.me/${toDialable(CONTACT_WHATSAPP).replace(/^\+/, '')}`
  : '';

export interface ContactMethod {
  id:       string;
  label:    string;
  value:    string;
  detail:   string;
  icon:     string;
  href?:    string;
}

const ALL_CONTACT_METHODS: ContactMethod[] = [
  {
    id:     'cm-1',
    label:  'Telephone',
    value:  CONTACT_PHONE,
    detail: 'Call us directly', // Builder wording; the old text promised unconfirmed hours
    icon:   'Phone',
    href:   CONTACT_PHONE_HREF,
  },
  {
    id:     'cm-2',
    label:  'Email',
    value:  CONTACT_EMAIL,
    detail: 'For detailed enquiries and itinerary requests',
    icon:   'Mail',
    href:   CONTACT_EMAIL_HREF,
  },
  {
    id:     'cm-3',
    label:  'WhatsApp',
    value:  CONTACT_WHATSAPP,
    detail: 'Quick questions and real-time communication',
    icon:   'MessageCircle',
    href:   CONTACT_WHATSAPP_HREF,
  },
  {
    id:     'cm-4',
    label:  'Office Hours',
    value:  CONTACT_HOURS,
    detail: 'East Africa Time (EAT / UTC+3)',
    icon:   'Clock',
  },
];

/** Only methods that hold a real value are rendered. */
export const CONTACT_METHODS: ContactMethod[] = ALL_CONTACT_METHODS.filter(
  (method) => method.value !== '',
);

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
  privacyLinkLabel: 'See our Privacy Policy',
  privacyHref:      '/privacy',
  privacyNote:    'Your details are sent through our form provider and used only to reply to your enquiry.', // [OWNER-CONFIRM]: Formspree is the form provider; confirm this wording
  successHeadline: 'Thank you — we\'ve received your enquiry.',
  successBody:    'One of us will be in touch within 24 hours on business days.', // [OWNER-CONFIRM]: 24-hour response promise
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
      'We respond to all enquiries within 24 hours on business days (Monday to Friday, East Africa Time).', // [OWNER-CONFIRM]: 24-hour response promise
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
      'Yes — we design journeys for private individuals, families, small groups, and corporate travel alike.',
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
      'Absolutely, and we expect it. Safari planning is an iterative process, and we will refine the itinerary with you until it is right.',
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

export interface ContactCtaContent {
  eyebrow:       string;
  headline:      string;
  body:          string;
  primaryCTA:    { label: string; href: string };
  /** Rendered only when CONTACT_PHONE is set. */
  secondaryCTA?: { label: string; href: string };
  detail:        string;
}

export const CONTACT_CTA: ContactCtaContent = {
  eyebrow:    'The Journey Starts Here',
  headline:   'Africa is\nwaiting',
  body:       'Every journey we design begins as a conversation. Reach out — there is no obligation, and no question too small.',
  primaryCTA: {
    label: 'Send an Enquiry',
    href:  '#contact-form',
  },
  secondaryCTA: CONTACT_PHONE_HREF
    ? { label: 'Call Us Now', href: CONTACT_PHONE_HREF }
    : undefined,
  detail: 'Complimentary consultation · No booking fees · Fully bespoke itineraries',
};

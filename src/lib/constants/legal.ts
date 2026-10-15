/**
 * RÊVE AFRICA SAFARIS — Legal pages content
 *
 * The single source for /privacy, /terms and /cookies.
 *
 * Rules for this file
 *   - Only state facts that are true of the site today. Anything uncertain
 *     is left out and marked [OWNER-CONFIRM] or [OWNER-FILL].
 *   - A section renders only if it has a heading and at least one
 *     non-empty paragraph. An empty `paragraphs: []` is hidden, so the
 *     Owner can paste approved text in later without touching any component.
 *   - No statute sections and no legal claims are made here.
 *
 * See docs/OWNER_FILL_CHECKLIST.md for the full list of items to complete.
 */

// [OWNER-FILL]: set to true ONLY after the Owner / a lawyer has approved the
// text of all three pages. While false, each page is noindex,nofollow and is
// left out of sitemap.xml. When true, they become indexable and are listed.
export const LEGAL_PAGES_REVIEWED: boolean = false;

export type LegalSlug = 'privacy' | 'terms' | 'cookies';

export interface LegalSection {
  heading:    string;
  paragraphs: string[];
}

export interface LegalPageContent {
  slug:        LegalSlug;
  path:        string;
  /** Document title and footer label */
  title:       string;
  description: string;
  eyebrow:     string;
  headline:    string;
  intro:       string;
  /** Shown before the contact email link; the link is shown only when both are set */
  contactLine: string;
  sections:    LegalSection[];
}

export const LEGAL_PAGES: Record<LegalSlug, LegalPageContent> = {
  // ─────────────────────────────────────────────
  // Privacy
  // Facts verified against src/: the enquiry form (EnquiryForm.tsx) posts
  // firstName, lastName, email, phone, destinations, travelMonth,
  // groupSize, budget and message to Formspree; there are no analytics,
  // no cookies and no browser storage.
  // ─────────────────────────────────────────────
  privacy: {
    slug:        'privacy',
    path:        '/privacy',
    title:       'Privacy Policy',
    description: 'What happens to the details you send us through this website.',
    eyebrow:     'Legal',
    headline:    'Privacy Policy',
    intro:       'This page explains what happens to the details you send us through this website.',
    contactLine: 'If you have a question about your details, email us at',
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          // [OWNER-CONFIRM]: add the legal entity / data controller name and
          // any registration (for example with the Kenya ODPC) once confirmed.
          'Rêve Africa Safaris is a new, founder-led safari company designing journeys across East and Southern Africa.',
        ],
      },
      {
        heading: 'What we collect',
        paragraphs: [
          'When you use the enquiry form on our contact page, we receive what you type into it: your first name, last name, email address and message, and, if you choose to give them, your phone number, destinations of interest, approximate travel month, group size and budget range.',
          'We do not ask for payment details through this website.',
        ],
      },
      {
        heading: 'How we use your details',
        paragraphs: [
          // [OWNER-CONFIRM]: Formspree account settings (where submissions are
          // stored, for how long) before describing them here.
          'We use your details only to reply to your enquiry.',
          'The form is run by Formspree, an online form service. Your details are sent through Formspree to us.',
        ],
      },
      {
        heading: 'Cookies and tracking',
        paragraphs: [
          // [OWNER-CONFIRM]: re-check after the hosting, analytics, maps or
          // newsletter providers are chosen; update this and /cookies together.
          'This website does not currently use analytics or marketing cookies, and does not set cookies of its own. See the Cookie Policy for details.',
        ],
      },
      {
        heading: 'How long we keep your details',
        // [OWNER-FILL]: retention period, in the Owner's / lawyer's words.
        paragraphs: [],
      },
      {
        heading: 'Your rights',
        // [OWNER-FILL]: user-rights wording approved by the Owner / lawyer.
        paragraphs: [],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Terms — structure only. Nothing is invented.
  // ─────────────────────────────────────────────
  terms: {
    slug:        'terms',
    path:        '/terms',
    title:       'Terms & Conditions',
    description: 'The terms for using this website and booking with Rêve Africa Safaris.',
    eyebrow:     'Legal',
    headline:    'Terms & Conditions',
    intro:       'These terms are being finalised.',
    contactLine: 'In the meantime, please email us with any questions:',
    // [OWNER-FILL]: add approved sections as { heading, paragraphs: [...] }.
    sections:    [],
  },

  // ─────────────────────────────────────────────
  // Cookies — states only what was verified: nothing is set.
  // ─────────────────────────────────────────────
  cookies: {
    slug:        'cookies',
    path:        '/cookies',
    title:       'Cookie Policy',
    description: 'Which cookies this website uses.',
    eyebrow:     'Legal',
    headline:    'Cookie Policy',
    intro:       'This website does not currently set any cookies.',
    contactLine: 'If you have a question, email us at',
    sections: [
      {
        heading: 'What this means',
        paragraphs: [
          // [OWNER-CONFIRM]: re-check when analytics, maps, a newsletter
          // provider or a hosting layer that sets cookies is added.
          'We do not use analytics, advertising or tracking cookies, and the site does not store information in your browser using cookies or local storage.',
        ],
      },
    ],
  },
};

/**
 * RÊVE AFRICA SAFARIS — JSON-LD Structured Data
 *
 * Server Component. Injects schema.org structured data as a
 * <script type="application/ld+json"> into the document <head>.
 *
 * Schema types implemented:
 *   - Organization       — brand identity, contact, social profiles
 *   - TouristInformationCenter / TourOperator — business type signal
 *   - WebSite            — site search (SiteLinks SearchBox eligible)
 *
 * These are the highest-value structured data types for a luxury travel brand:
 * they improve knowledge panel eligibility, brand SERP appearance, and
 * reinforce E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust).
 */

import { SITE } from '@/lib/metadata';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants/contact';
import { SOCIAL_LINKS } from '@/lib/constants/navigation';
import type { Article } from '@/lib/constants/articles';

// ─────────────────────────────────────────────
// Organization schema
// ─────────────────────────────────────────────

function OrganizationSchema() {
  // Built from the social URLs that are actually set; omitted when none.
  const sameAs = SOCIAL_LINKS.map((social) => social.href).filter((href) => href !== '');

  const schema = {
    '@context':  'https://schema.org',
    '@type':     ['Organization', 'TourOperator'],
    '@id':       `${SITE.url}/#organization`,
    name:        SITE.name,
    url:         SITE.url,
    description: SITE.description,
    logo: {
      '@type':        'ImageObject',
      url:            `${SITE.url}/brand/logo-mark.png`,
      width:          512,
      height:         512,
    },
    contactPoint: {
      '@type':        'ContactPoint',
      contactType:    'customer service',
      ...(CONTACT_EMAIL ? { email: CONTACT_EMAIL } : {}),
      ...(CONTACT_PHONE ? { telephone: CONTACT_PHONE } : {}),
      areaServed:     'Worldwide',
      availableLanguage: ['English'],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: [
      'Kenya',
      'Tanzania',
      'Rwanda',
      'Uganda',
      'Botswana',
      'Namibia',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────
// WebSite schema (enables Sitelinks search box in Google SERP)
// ─────────────────────────────────────────────

function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      `${SITE.url}/#website`,
    url:        SITE.url,
    name:       SITE.name,
    description: SITE.tagline,
    publisher: {
      '@id': `${SITE.url}/#organization`,
    },
    inLanguage: 'en-GB',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export function SiteJsonLd() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  );
}

// ─────────────────────────────────────────────
// FAQPage schema — for pages with FAQ accordions
// ─────────────────────────────────────────────
//
// Added in Milestone 11. Each page that renders an AccordionFAQ
// section imports and renders <FaqPageJsonLd items={...} /> to
// gain FAQ rich results eligibility in Google Search.
//
// Usage (in a page Server Component):
//   import { FaqPageJsonLd } from '@/components/seo/JsonLd';
//   import { FAQ_ITEMS } from '@/lib/constants/homepage';
//   <FaqPageJsonLd items={FAQ_ITEMS} />

export interface FaqJsonLdItem {
  question: string;
  answer:   string;
}

interface FaqPageJsonLdProps {
  items: FaqJsonLdItem[];
}

export function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  const schema = {
    '@context':   'https://schema.org',
    '@type':      'FAQPage',
    mainEntity:   items.map((item) => ({
      '@type':          'Question',
      name:             item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────
// Article (journal posts)
// Author and publisher are the organisation, never a person.
// ─────────────────────────────────────────────

export function ArticleJsonLd({ article }: { article: Article }) {
  const organisation = {
    '@type': 'Organization',
    name:    SITE.name,
    url:     SITE.url,
  };

  const schema = {
    '@context':       'https://schema.org',
    '@type':          'Article',
    headline:         article.title,
    description:      article.excerpt,
    articleSection:   article.category,
    datePublished:    article.publishedAt,
    inLanguage:       'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   `${SITE.url}/blog/${article.slug}`,
    },
    author:    organisation,
    publisher: organisation,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

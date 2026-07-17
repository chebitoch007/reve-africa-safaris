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

// ─────────────────────────────────────────────
// Organization schema
// ─────────────────────────────────────────────

function OrganizationSchema() {
  const schema = {
    '@context':  'https://schema.org',
    '@type':     ['Organization', 'TourOperator'],
    '@id':       `${SITE.url}/#organization`,
    name:        SITE.name,
    url:         SITE.url,
    description: SITE.description,
    logo: {
      '@type':        'ImageObject',
      url:            `${SITE.url}/og/default.jpg`,
      width:          1200,
      height:         630,
    },
    contactPoint: {
      '@type':        'ContactPoint',
      telephone:      '+254700000000',
      contactType:    'customer service',
      email:          'hello@reveafricasafaris.com',
      areaServed:     'Worldwide',
      availableLanguage: ['English'],
    },
    address: {
      '@type':           'PostalAddress',
      streetAddress:     'Karen Road, Karen',
      addressLocality:   'Nairobi',
      postalCode:        '00502',
      addressCountry:    'KE',
    },
    sameAs: [
      'https://www.instagram.com/reveafricasafaris',
      'https://www.facebook.com/reveafricasafaris',
      'https://www.youtube.com/@reveafricasafaris',
    ],
    areaServed: [
      'Kenya',
      'Tanzania',
      'Rwanda',
      'Uganda',
      'Botswana',
      'Namibia',
      'Zimbabwe',
    ],
    knowsAbout: [
      'Luxury safari',
      'Wildlife safari',
      'Gorilla trekking',
      'Hot air balloon safari',
      'Conservation travel',
      'Bespoke travel',
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

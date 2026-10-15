/**
 * RÊVE AFRICA SAFARIS — /terms
 *
 * Static Server Component. Content: src/lib/constants/legal.ts.
 * Indexing is controlled by LEGAL_PAGES_REVIEWED (see legal.ts).
 */

import type { Metadata } from 'next';
import { buildLegalMetadata } from '@/lib/legal-metadata';
import { LegalDocument } from '@/components/legal/LegalDocument';

export const metadata: Metadata = buildLegalMetadata('terms');

export default function LegalPage() {
  return <LegalDocument slug="terms" />;
}

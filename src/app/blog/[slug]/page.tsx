/**
 * RÊVE AFRICA SAFARIS — /blog/[slug]
 *
 * Static Server Component. One page per article in
 * src/lib/constants/articles.ts, pre-rendered at build time.
 * Unknown slugs return a 404.
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildPageMetadata } from '@/lib/metadata';
import { ARTICLES, getArticleBySlug } from '@/lib/constants/articles';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { ArticleView } from '@/components/blog/ArticleView';

// Only the slugs returned by generateStaticParams exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title:       article.title,
    description: article.excerpt,
    path:        `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd article={article} />
      <ArticleView article={article} />
    </>
  );
}

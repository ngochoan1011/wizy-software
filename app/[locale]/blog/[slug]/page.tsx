import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { latestIsoDate, ORGANIZATION_JSON_LD, serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getPublishedPost } from "@/lib/supabase/posts";

// Resolve the published status on each visit, including URLs opened before publication.
export const dynamic = "force-dynamic";

function postUrls(slug: string, hasVietnamese: boolean) {
  const en = `${SITE_URL}/en/blog/${slug}`;
  const vi = `${SITE_URL}/vi/blog/${slug}`;
  return { en, vi, languages: hasVietnamese ? { "en-CA": en, "vi-CA": vi, "x-default": en } : { "en-CA": en, "x-default": en } };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = await getPublishedPost(slug, locale);
  if (!post) return { title: SITE_NAME, robots: { index: false } };

  const urls = postUrls(slug, post.hasVietnamese);
  // A Vietnamese URL showing English fallback content is a duplicate: canonicalize to EN.
  const canonical = post.isFallback ? urls.en : urls[locale];
  const images = post.coverImageUrl ? [{ url: post.coverImageUrl }] : [{ url: "/opengraph-image", width: 1200, height: 630 }];

  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.seoTitle} | ${SITE_NAME}`,
    description: post.seoDescription,
    alternates: { canonical, languages: urls.languages },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: SITE_NAME,
      title: post.seoTitle,
      description: post.seoDescription,
      locale: locale === "vi" && !post.isFallback ? "vi_CA" : "en_CA",
      publishedTime: post.publishedAt,
      modifiedTime: latestIsoDate(post.updatedAt, post.publishedAt),
      authors: [post.authorName],
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: images.map((image) => image.url),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const post = await getPublishedPost(slug, locale);
  if (!post) notFound();

  const urls = postUrls(slug, post.hasVietnamese);
  const otherLocale = alternateLocale(locale);
  const pageUrl = post.isFallback ? urls.en : urls[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION_JSON_LD,
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: pageUrl,
        headline: post.title,
        description: post.seoDescription,
        image: post.coverImageUrl ?? `${SITE_URL}/opengraph-image`,
        datePublished: post.publishedAt,
        dateModified: latestIsoDate(post.updatedAt, post.publishedAt),
        inLanguage: locale === "vi" && !post.isFallback ? "vi-CA" : "en-CA",
        keywords: post.tags.join(", ") || undefined,
        author: { "@type": "Organization", name: post.authorName, url: SITE_URL },
        publisher: { "@id": ORGANIZATION_JSON_LD["@id"] },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/${locale}/blog#blog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/${locale}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <BlogArticle locale={locale} post={post} alternateHref={`/${otherLocale}/blog/${slug}`} />
    </>
  );
}

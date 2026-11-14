import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteContent } from "@/content/site-content";
import { formatPostDate } from "@/lib/blog-seo";
import { alternateLocale, isLocale, type Locale } from "@/lib/i18n";
import { serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getPublishedPost, getPublishedSlugs } from "@/lib/supabase/posts";

export const revalidate = 300;
// New posts published after the build are rendered on first request.
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

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
      modifiedTime: post.updatedAt,
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

  const copy = siteContent[locale].blog;
  const urls = postUrls(slug, post.hasVietnamese);
  const otherLocale = alternateLocale(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${urls[locale]}#article`,
    mainEntityOfPage: urls[locale],
    headline: post.title,
    description: post.seoDescription,
    image: post.coverImageUrl ?? `${SITE_URL}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: locale === "vi" && !post.isFallback ? "vi-CA" : "en-CA",
    keywords: post.tags.join(", ") || undefined,
    author: { "@type": "Organization", name: post.authorName, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <SiteHeader locale={locale} alternateHref={`/${otherLocale}/blog/${slug}`} />
      <main id="main-content" className="blog-page">
        <article>
          <header className="post-hero">
            <div className="shell post-shell">
              <a className="post-back" href={`/${locale}/blog`}>← {copy.backToBlog}</a>
              <p className="blog-meta">
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
                <span>·</span>
                <span>{post.readingTime} {copy.minRead}</span>
              </p>
              <h1>{post.title}</h1>
              {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
              {post.isFallback && copy.fallbackNotice && <p className="post-fallback">{copy.fallbackNotice}</p>}
            </div>
          </header>

          {post.coverImageUrl && (
            <div className="shell post-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImageUrl} alt="" />
            </div>
          )}

          <div className="shell post-shell">
            <div className="prose" lang={locale === "vi" && !post.isFallback ? "vi" : "en"}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children }) => {
                    const external = href?.startsWith("http") && !href.startsWith(SITE_URL);
                    return (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {children}
                      </a>
                    );
                  },
                  // eslint-disable-next-line @next/next/no-img-element
                  img: ({ src, alt }) => <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {post.tags.length > 0 && (
              <ul className="post-tags">
                {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            )}

            <aside className="post-cta">
              <h2>{copy.ctaTitle}</h2>
              <p>{copy.ctaText}</p>
              <a className="button button-primary" href={`/${locale}#contact`}>
                {siteContent[locale].headerCta}<Icon name="arrow" size={19} />
              </a>
            </aside>
          </div>
        </article>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteContent } from "@/content/site-content";
import { blogIndexMetadata, formatPostDate } from "@/lib/blog-seo";
import { alternateLocale, isLocale } from "@/lib/i18n";
import { ORGANIZATION_JSON_LD, serializeJsonLd, SITE_URL } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/supabase/posts";

// Posts are edited in the wizy.ca admin; refresh the static page every 5 minutes.
export const revalidate = 300;

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return blogIndexMetadata(locale);
}

export default async function BlogIndexPage({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = siteContent[locale].blog;
  const posts = await getPublishedPosts(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION_JSON_LD,
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/${locale}/blog#blog`,
        url: `${SITE_URL}/${locale}/blog`,
        name: copy.title,
        description: copy.description,
        inLanguage: locale === "vi" ? "vi-CA" : "en-CA",
        publisher: { "@id": ORGANIZATION_JSON_LD["@id"] },
        blogPost: posts.slice(0, 20).map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${SITE_URL}/${post.isFallback ? "en" : locale}/blog/${post.slug}`,
          datePublished: post.publishedAt,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <SiteHeader locale={locale} alternateHref={`/${alternateLocale(locale)}/blog`} />
      <main id="main-content" className="blog-page">
        <section className="blog-hero">
          <div className="shell">
            <p className="eyebrow"><span />{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="blog-hero-description">{copy.description}</p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="shell">
            {posts.length === 0 ? (
              <p className="blog-empty">{copy.empty}</p>
            ) : (
              <div className="blog-grid">
                {posts.map((post, index) => (
                  <article className={`blog-card${index === 0 ? " blog-card-featured" : ""}`} key={post.slug}>
                    <a href={`/${locale}/blog/${post.slug}`} className="blog-card-link">
                      <div className="blog-card-media">
                        {post.coverImageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={post.coverImageUrl} alt="" loading={index < 3 ? "eager" : "lazy"} />
                        ) : (
                          <div className="blog-card-placeholder" aria-hidden="true">W</div>
                        )}
                      </div>
                      <div className="blog-card-body">
                        <p className="blog-meta">
                          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
                          <span>·</span>
                          <span>{post.readingTime} {copy.minRead}</span>
                          {post.isFallback && <span className="blog-lang-badge">EN</span>}
                        </p>
                        <h2>{post.title}</h2>
                        {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
                        <span className="text-link">{copy.readMore}<Icon name="arrow" size={17} /></span>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

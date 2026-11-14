import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteContent } from "@/content/site-content";
import { formatPostDate } from "@/lib/blog-seo";
import type { Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

export type ArticleContent = {
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  isFallback: boolean;
};

export function BlogArticle({ locale, post, alternateHref }: {
  locale: Locale;
  post: ArticleContent;
  alternateHref: string;
}) {
  const copy = siteContent[locale].blog;

  return (
    <>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
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

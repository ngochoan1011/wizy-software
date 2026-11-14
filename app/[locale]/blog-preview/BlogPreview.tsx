"use client";

import { useEffect, useState } from "react";
import { BlogArticle, type ArticleContent } from "@/components/BlogArticle";
import { alternateLocale, isLocale, languageTag, type Locale } from "@/lib/i18n";

const editorOrigins = ["https://wizy.ca", "https://www.wizy.ca"];

export function BlogPreview({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState(initialLocale);
  const [posts, setPosts] = useState<Record<Locale, ArticleContent> | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const opener = window.opener;
    const timeout = window.setTimeout(() => setExpired(true), opener ? 15_000 : 0);

    function receive(event: MessageEvent) {
      if (!opener || event.source !== opener || !editorOrigins.includes(event.origin)) return;
      if (event.data?.type !== "wizy-software:preview" || !event.data.posts?.en || !event.data.posts?.vi) return;
      setPosts(event.data.posts);
      setExpired(false);
      window.clearTimeout(timeout);
      window.removeEventListener("message", receive);
      window.opener = null;
    }

    function changeLocale() {
      const hash = window.location.hash.slice(1);
      setLocale(isLocale(hash) ? hash : initialLocale);
      window.scrollTo(0, 0);
    }

    window.addEventListener("message", receive);
    window.addEventListener("hashchange", changeLocale);
    for (const origin of editorOrigins) opener?.postMessage({ type: "wizy-software:preview-ready" }, origin);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("message", receive);
      window.removeEventListener("hashchange", changeLocale);
    };
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = languageTag(locale);
    document.title = locale === "vi" ? "Xem trước bài viết | Wizy Software" : "Blog Preview | Wizy Software";
  }, [locale]);

  const vi = locale === "vi";

  if (!posts) {
    return (
      <main className="shell section">
        <h1>{vi ? "Xem trước bài viết" : "Blog Preview"}</h1>
        <p role="status">
          {expired
            ? (vi ? "Mở lại bản xem trước từ mục Blog Software trong Wizy Admin." : "Open the preview again from Blog Software in Wizy Admin.")
            : (vi ? "Đang tải bản xem trước…" : "Loading preview…")}
        </p>
      </main>
    );
  }

  return (
    <>
      <p className="blog-preview-notice" role="status">{vi ? "Bản xem trước từ CMS" : "Preview from the CMS"}</p>
      <BlogArticle locale={locale} post={posts[locale]} alternateHref={`#${alternateLocale(locale)}`} />
    </>
  );
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getPublishedSlugs } from "@/lib/supabase/posts";

const lastModified = new Date("2026-08-24T00:00:00-04:00");

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = {
    "en-CA": `${SITE_URL}/en`,
    "vi-CA": `${SITE_URL}/vi`,
    "x-default": `${SITE_URL}/en`,
  };

  const home = ["en", "vi"].map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));

  const blogIndex = ["en", "vi"].map((locale) => ({
    url: `${SITE_URL}/${locale}/blog`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        "en-CA": `${SITE_URL}/en/blog`,
        "vi-CA": `${SITE_URL}/vi/blog`,
        "x-default": `${SITE_URL}/en/blog`,
      },
    },
  }));

  const posts = (await getPublishedSlugs()).flatMap(({ slug, updatedAt, hasVietnamese }) => {
    const en = `${SITE_URL}/en/blog/${slug}`;
    const vi = `${SITE_URL}/vi/blog/${slug}`;
    const alternates = hasVietnamese
      ? { languages: { "en-CA": en, "vi-CA": vi, "x-default": en } }
      : undefined;
    // Vietnamese URLs without a translation canonicalize to English, so list them only when translated.
    return (hasVietnamese ? [en, vi] : [en]).map((url) => ({
      url,
      lastModified: new Date(updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      ...(alternates ? { alternates } : {}),
    }));
  });

  return [...home, ...blogIndex, ...posts];
}

import "server-only";

import { cache } from "react";
import type { Locale } from "@/lib/i18n";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

/**
 * Blog posts live in the shared wizy.ca Supabase project (`public.software_posts`)
 * and are managed at https://www.wizy.ca/vi/admin?tab=software-posts.
 * English is the primary language; Vietnamese fields are optional and fall back
 * to English when empty.
 */

type PostRow = {
  id: string;
  slug: string;
  title_en: string;
  title_vi: string;
  excerpt_en: string;
  excerpt_vi: string;
  content_en: string;
  content_vi: string;
  cover_image_url: string | null;
  tags: string[];
  seo_title_en: string | null;
  seo_title_vi: string | null;
  seo_description_en: string | null;
  seo_description_vi: string | null;
  reading_time: number;
  author_name: string;
  published_at: string | null;
  updated_at: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  readingTime: number;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
  /** True when the Vietnamese translation exists (title + content). */
  hasVietnamese: boolean;
  /** True when the requested locale is shown with English fallback content. */
  isFallback: boolean;
};

const LIST_COLUMNS =
  "id, slug, title_en, title_vi, excerpt_en, excerpt_vi, cover_image_url, tags, reading_time, author_name, published_at, updated_at, content_vi";

function localize(row: PostRow, locale: Locale): BlogPost {
  const hasVietnamese = Boolean(row.title_vi?.trim() && row.content_vi?.trim());
  const useVi = locale === "vi" && hasVietnamese;
  const title = useVi ? row.title_vi : row.title_en;
  const excerpt = (useVi ? row.excerpt_vi : row.excerpt_en) || row.excerpt_en || "";
  return {
    slug: row.slug,
    title,
    excerpt,
    content: (useVi ? row.content_vi : row.content_en) ?? "",
    coverImageUrl: row.cover_image_url,
    tags: row.tags ?? [],
    seoTitle: (useVi ? row.seo_title_vi : row.seo_title_en) || title,
    seoDescription: (useVi ? row.seo_description_vi : row.seo_description_en) || excerpt,
    readingTime: row.reading_time || 1,
    authorName: row.author_name || "Wizy Software",
    publishedAt: row.published_at ?? row.updated_at,
    updatedAt: row.updated_at,
    hasVietnamese,
    isFallback: locale === "vi" && !hasVietnamese,
  };
}

function client() {
  try {
    return getSupabaseAdmin();
  } catch {
    return null;
  }
}

export const getPublishedPosts = cache(async (locale: Locale): Promise<BlogPost[]> => {
  const supabase = client();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("software_posts")
    .select(LIST_COLUMNS)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false })
    .limit(200);
  if (error) {
    console.error("[blog] list failed:", error.code, error.message);
    return [];
  }
  return (data as unknown as PostRow[]).map((row) => localize(row, locale));
});

export const getPublishedPost = cache(async (slug: string, locale: Locale): Promise<BlogPost | null> => {
  const supabase = client();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("software_posts")
    .select("*")
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("[blog] post failed:", error.code, error.message);
    return null;
  }
  return data ? localize(data as PostRow, locale) : null;
});

export async function getPublishedSlugs(): Promise<
  { slug: string; updatedAt: string; publishedAt: string; hasVietnamese: boolean }[]
> {
  const posts = await getPublishedPosts("en");
  return posts.map((post) => ({
    slug: post.slug,
    updatedAt: post.updatedAt,
    publishedAt: post.publishedAt,
    hasVietnamese: post.hasVietnamese,
  }));
}

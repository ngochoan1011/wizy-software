import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const lastModified = new Date("2026-08-24T00:00:00-04:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "en-CA": `${SITE_URL}/en`,
    "vi-CA": `${SITE_URL}/vi`,
    "x-default": `${SITE_URL}/en`,
  };

  return ["en", "vi"].map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));
}


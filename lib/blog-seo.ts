import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export function formatPostDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date(iso));
}

export function blogIndexMetadata(locale: Locale): Metadata {
  const copy = siteContent[locale].blog;
  const url = `${SITE_URL}/${locale}/blog`;
  return {
    metadataBase: new URL(SITE_URL),
    title: `${copy.title} | ${SITE_NAME}`,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        "en-CA": `${SITE_URL}/en/blog`,
        "vi-CA": `${SITE_URL}/vi/blog`,
        "x-default": `${SITE_URL}/en/blog`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: copy.title,
      description: copy.description,
      locale: locale === "vi" ? "vi_CA" : "en_CA",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

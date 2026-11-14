import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://software.wizy.ca";
export const SITE_NAME = "Wizy Software";

const seoCopy = {
  en: {
    title: "Custom Software Development in Canada | Wizy Software",
    description:
      "Wizy Software helps Canadian businesses scope, build and modernize web, mobile and internal software, with HiTek Software as our engineering partner.",
  },
  vi: {
    title: "Phát triển phần mềm theo yêu cầu tại Canada | Wizy Software",
    description:
      "Wizy phụ trách tại Canada, HiTek hỗ trợ kỹ thuật từ Việt Nam. Làm rõ yêu cầu, xây dựng và nâng cấp ứng dụng web, di động và hệ thống nội bộ.",
  },
} as const;

export function pageMetadata(locale: Locale): Metadata {
  const current = `${SITE_URL}/${locale}`;
  const copy = seoCopy[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    applicationName: SITE_NAME,
    alternates: {
      canonical: current,
      languages: {
        "en-CA": `${SITE_URL}/en`,
        "vi-CA": `${SITE_URL}/vi`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: current,
      siteName: SITE_NAME,
      locale: locale === "vi" ? "vi_CA" : "en_CA",
      alternateLocale: locale === "vi" ? ["en_CA"] : ["vi_CA"],
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: locale === "vi" ? "Wizy Software — Phát triển phần mềm tại Canada" : "Wizy Software — Canadian-led software delivery",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { siteContent } from "@/content/site-content";
import { isLocale } from "@/lib/i18n";
import { pageMetadata, serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale);
}

export default async function SoftwareLandingPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale];
  const pageUrl = `${SITE_URL}/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Wizy",
        alternateName: SITE_NAME,
        url: SITE_URL,
        email: "partners@wizy.ca",
        telephone: "+1-647-807-5205",
        logo: `${SITE_URL}/wizy-mark.png`,
        areaServed: { "@type": "Country", name: "Canada" },
        knowsLanguage: ["English", "Vietnamese"],
        sameAs: ["https://www.wizy.ca"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en-CA", "vi-CA"],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: locale === "vi" ? "Dịch vụ phát triển phần mềm Wizy" : "Wizy software development services",
        description: content.hero.description,
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Canada" },
        serviceType: [
          "Product Discovery",
          "Custom Software Development",
          "Dedicated Product Teams",
          "Software Modernization and Maintenance",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        url: `${pageUrl}#faq`,
        inLanguage: locale === "vi" ? "vi-CA" : "en-CA",
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <LandingPage locale={locale} />
    </>
  );
}


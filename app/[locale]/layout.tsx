import "../globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, languageTag, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Bing Webmaster Tools ownership for https://software.wizy.ca/ (keep after verification).
  verification: { other: { "msvalidate.01": "D83C03626CF0A8C635E74FC2E7276528" } },
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={languageTag(locale)} className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}

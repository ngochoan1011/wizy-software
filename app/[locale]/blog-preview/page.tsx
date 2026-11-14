import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { BlogPreview } from "./BlogPreview";

export const metadata: Metadata = {
  title: "Blog Preview | Wizy Software",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function BlogPreviewPage({ params }: PageProps<"/[locale]/blog-preview">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <BlogPreview initialLocale={locale} />;
}

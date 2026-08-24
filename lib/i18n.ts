export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function languageTag(locale: Locale) {
  return locale === "vi" ? "vi-CA" : "en-CA";
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "vi" : "en";
}


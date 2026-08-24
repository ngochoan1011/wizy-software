"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Locale } from "@/lib/i18n";

type MobileMenuProps = {
  cta: string;
  languageName: string;
  locale: Locale;
  nav: readonly { href: string; label: string }[];
  otherLocale: Locale;
};

export function MobileMenu({ cta, languageName, locale, nav, otherLocale }: MobileMenuProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label={locale === "vi" ? "Mở menu" : "Open menu"}>
        <span />
        <span />
        <span />
      </summary>
      <div className="mobile-menu-panel">
        <nav aria-label="Mobile navigation">
          {nav.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <Link href={`/${otherLocale}`} hrefLang={otherLocale} onClick={closeMenu}>
          {languageName}
        </Link>
        <a className="button button-primary" href="#contact" onClick={closeMenu}>
          {cta}
        </a>
      </div>
    </details>
  );
}

import type { Locale } from "@/lib/i18n";
import { alternateLocale } from "@/lib/i18n";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { siteContent } from "@/content/site-content";

/**
 * Resolve a nav href for the current page. Section anchors (`#model`) stay
 * in-page on the landing page and point back to `/{locale}#model` elsewhere;
 * route links (`/blog`) are prefixed with the locale.
 */
function resolveHref(href: string, locale: Locale, onLanding: boolean) {
  if (href.startsWith("#")) return onLanding ? href : `/${locale}${href}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return href;
}

type HeaderProps = {
  locale: Locale;
  /** True on the landing page, where section anchors scroll in-page. */
  onLanding?: boolean;
  /** Path of the equivalent page in the other locale. Defaults to its home. */
  alternateHref?: string;
};

export function SiteHeader({ locale, onLanding = false, alternateHref }: HeaderProps) {
  const content = siteContent[locale];
  const otherLocale = alternateLocale(locale);
  const switchHref = alternateHref ?? `/${otherLocale}`;
  const contactHref = onLanding ? "#contact" : `/${locale}#contact`;
  const nav = content.nav.map((item) => ({ ...item, href: resolveHref(item.href, locale, onLanding) }));

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="locale-link" href={switchHref} hrefLang={otherLocale} aria-label={content.switchLabel}>
            {content.languageName}
          </a>
          <a className="button button-small button-primary" href={contactHref}>{content.headerCta}</a>
        </div>
        <MobileMenu
          cta={content.headerCta}
          ctaHref={contactHref}
          languageName={content.languageName}
          locale={locale}
          nav={nav}
          otherLocale={otherLocale}
          switchHref={switchHref}
        />
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <Logo locale={locale} />
        <p>{content.footer.statement}</p>
        <div className="footer-links">
          <a href={`/${locale}/blog`}>Blog</a>
          <a href="https://www.wizy.ca" target="_blank" rel="noreferrer">{content.footer.mainSite}</a>
          <a href="https://hitek.com.vn/en/" target="_blank" rel="noreferrer">{content.footer.partnerSite}</a>
          <a href={`https://www.wizy.ca/${locale}/privacy`} target="_blank" rel="noreferrer">{content.footer.privacy}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>{content.footer.disclosure}</p>
        <span>© {new Date().getFullYear()} Wizy. {content.footer.rights}</span>
      </div>
    </footer>
  );
}

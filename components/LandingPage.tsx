import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteContent } from "@/content/site-content";

export function LandingPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "vi" ? "Đi đến nội dung chính" : "Skip to main content"}
      </a>

      <SiteHeader locale={locale} onLanding />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-grid-bg" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span />{content.hero.eyebrow}</p>
              <h1 id="hero-title">
                {content.hero.titleBefore}{" "}
                <em>{content.hero.titleHighlight}</em>
              </h1>
              <p className="hero-description">{content.hero.description}</p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#contact">
                  {content.hero.primaryCta}<Icon name="arrow" size={19} />
                </a>
                <a className="button button-ghost" href="#services">{content.hero.secondaryCta}</a>
              </div>
              <p className="hero-note"><Icon name="check" size={17} />{content.hero.note}</p>
            </div>

            <div className="delivery-console" aria-label={content.hero.panelTitle}>
              <div className="console-topline">
                <div>
                  <span className="console-eyebrow">{content.hero.panelEyebrow}</span>
                  <h2>{content.hero.panelTitle}</h2>
                </div>
                <span className="live-status"><i />{content.hero.panelStatus}</span>
              </div>

              <div className="console-milestone">
                <div>
                  <span>{content.hero.panelMetricLabel}</span>
                  <strong>{content.hero.panelMetric}</strong>
                </div>
                <span className="milestone-chip">{content.hero.panelProgress}</span>
              </div>

              <div className="progress-line" aria-hidden="true">
                <span className="progress-fill" />
                {content.hero.stages.map((stage, index) => (
                  <i className={index === 0 ? "active" : ""} key={stage} />
                ))}
              </div>
              <div className="progress-labels">
                {content.hero.stages.map((stage) => <span key={stage}>{stage}</span>)}
              </div>

              <div className="signal-grid">
                {content.hero.signals.map((signal) => (
                  <div key={signal.label}><span>{signal.label}</span><strong>{signal.value}</strong></div>
                ))}
              </div>

              <div className="artifact-panel">
                <span>{content.hero.artifactLabel}</span>
                <ul>
                  {content.hero.artifacts.map((artifact) => (
                    <li key={artifact}><Icon name="check" size={15} />{artifact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label={locale === "vi" ? "Thông tin hợp tác" : "Engagement overview"}>
          <div className="shell trust-grid">
            {content.trust.map((item, index) => (
              <div className="trust-item" key={item.title}>
                <span className="trust-number">0{index + 1}</span>
                <div><strong>{item.title}</strong><small>{item.text}</small></div>
              </div>
            ))}
          </div>
        </section>

        <aside className="market-proof">
          <div className="shell market-proof-inner">
            <strong>{content.market.stat}</strong>
            <p>{content.market.text}</p>
            <a href="https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025006-eng.pdf" target="_blank" rel="noreferrer">
              {content.market.linkLabel}<Icon name="arrow" size={16} />
            </a>
          </div>
        </aside>

        <section className="section section-pain" id="challenges" aria-labelledby="pain-title">
          <div className="shell">
            <div className="section-heading centered">
              <p className="eyebrow"><span />{content.pain.eyebrow}</p>
              <h2 id="pain-title">{content.pain.title}</h2>
              <p>{content.pain.intro}</p>
            </div>
            <div className="pain-grid">
              {content.pain.cards.map((card) => (
                <article className="pain-card" key={card.title}>
                  <span className="icon-box"><Icon name={card.icon} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-model" id="model" aria-labelledby="model-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span />{content.model.eyebrow}</p>
                <h2 id="model-title">{content.model.title}</h2>
              </div>
              <p>{content.model.intro}</p>
            </div>

            <div className="delivery-model">
              <article className="model-card model-canada">
                <div className="location-tag"><i>CA</i>{content.model.canada.label}</div>
                <h3>{content.model.canada.title}</h3>
                <p>{content.model.canada.text}</p>
                <ul>{content.model.canada.items.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul>
              </article>

              <div className="model-bridge">
                <span>{content.model.bridge.label}</span>
                <div className="bridge-line"><i /><i /><i /></div>
                <ul>{content.model.bridge.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>

              <article className="model-card model-vietnam">
                <div className="location-tag"><i>VN</i>{content.model.vietnam.label}</div>
                <h3>{content.model.vietnam.title}</h3>
                <p>{content.model.vietnam.text}</p>
                <ul>{content.model.vietnam.items.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul>
              </article>
            </div>
            <p className="model-note"><Icon name="person" size={20} />{content.model.note}</p>
          </div>
        </section>

        <section className="section section-services" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading centered">
              <p className="eyebrow"><span />{content.services.eyebrow}</p>
              <h2 id="services-title">{content.services.title}</h2>
              <p>{content.services.intro}</p>
            </div>
            <div className="service-grid">
              {content.services.items.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon name={service.icon} size={25} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>{service.bullets.map((bullet) => <li key={bullet}><Icon name="check" size={15} />{bullet}</li>)}</ul>
                  <small>{service.fit}</small>
                </article>
              ))}
            </div>
            <aside className="service-resource">
              <p>{content.services.resourceText}</p>
              <a className="text-link" href={`/${locale}/blog/choose-pharmacy-management-software-ontario`}>
                {content.services.resourceLabel}<Icon name="arrow" size={16} />
              </a>
            </aside>
          </div>
        </section>

        <section className="section section-fit" aria-labelledby="fit-title">
          <div className="shell fit-layout">
            <div className="fit-main">
              <div className="section-heading">
                <p className="eyebrow"><span />{content.fit.eyebrow}</p>
                <h2 id="fit-title">{content.fit.title}</h2>
              </div>
              <div className="fit-cards">
                {content.fit.items.map((item) => (
                  <article key={item.title}>
                    <span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="not-fit-card">
              <span className="not-fit-mark">×</span>
              <h3>{content.fit.notFitTitle}</h3>
              <ul>{content.fit.notFit.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="section section-assurance" aria-labelledby="assurance-title">
          <div className="shell assurance-layout">
            <div className="assurance-sticky">
              <p className="eyebrow"><span />{content.assurance.eyebrow}</p>
              <h2 id="assurance-title">{content.assurance.title}</h2>
              <p>{content.assurance.intro}</p>
              <a href="#contact" className="text-link">{content.headerCta}<Icon name="arrow" size={17} /></a>
            </div>
            <div className="assurance-list">
              {content.assurance.items.map((item, index) => (
                <article key={item.title}>
                  <span className="assurance-index">0{index + 1}</span>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-process" id="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="section-heading centered light-heading">
              <p className="eyebrow"><span />{content.process.eyebrow}</p>
              <h2 id="process-title">{content.process.title}</h2>
            </div>
            <div className="process-track">
              {content.process.steps.map((step, index) => (
                <article key={step.number}>
                  <div className="step-marker"><span>{step.number}</span>{index < content.process.steps.length - 1 && <i />}</div>
                  <h3>{step.title}</h3><p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-partner" aria-labelledby="partner-title">
          <div className="shell partner-layout">
            <div className="partner-wordmark" aria-hidden="true">
              <div className="partner-orbit"><span>H</span><i /><i /><i /></div>
              <strong>HITEK</strong><small>SOFTWARE</small>
            </div>
            <div className="partner-copy">
              <p className="eyebrow"><span />{content.partner.eyebrow}</p>
              <div className="partner-name-line"><strong>{content.partner.name}</strong><span>{content.partner.location}</span></div>
              <h2 id="partner-title">{content.partner.title}</h2>
              <p>{content.partner.text}</p>
              <a className="text-link" href="https://hitek.com.vn/en/" target="_blank" rel="noreferrer">
                {content.partner.linkLabel}<Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <div className="shell role-grid">
            {content.partner.roles.map((role) => <div key={role.label}><span>{role.label}</span><strong>{role.value}</strong></div>)}
          </div>
          <div className="shell proof-policy">
            <Icon name="ip" size={28} />
            <div><strong>{content.partner.proofTitle}</strong><p>{content.partner.proofText}</p></div>
          </div>
        </section>

        <section className="section section-governance" id="governance" aria-labelledby="governance-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow"><span />{content.governance.eyebrow}</p><h2 id="governance-title">{content.governance.title}</h2></div>
              <p>{content.governance.intro}</p>
            </div>
            <div className="governance-grid">
              {content.governance.items.map((item) => (
                <article key={item.title}><span className="icon-box"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="section-heading faq-heading">
              <p className="eyebrow"><span />{content.faq.eyebrow}</p>
              <h2 id="faq-title">{content.faq.title}</h2>
              <a className="text-link" href="#contact">{content.headerCta}<Icon name="arrow" size={17} /></a>
            </div>
            <div className="faq-list">
              {content.faq.items.map((item, index) => (
                <details key={item.question}>
                  <summary><span>0{index + 1}</span>{item.question}<Icon name="plus" size={20} /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-glow" />
          <div className="shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><span />{content.contact.eyebrow}</p>
              <h2 id="contact-title">{content.contact.title}</h2>
              <p>{content.contact.intro}</p>
              <div className="response-note"><i /><span>{content.contact.responseTime}</span></div>
              <div className="direct-contact">
                <span>{content.contact.directLabel}</span>
                <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                <a href="tel:+16478075205">{content.contact.phone}</a>
              </div>
            </div>
            <div className="form-card"><LeadForm locale={locale} content={content.contact} /></div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}

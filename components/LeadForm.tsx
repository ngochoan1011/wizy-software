"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteContent } from "@/content/site-content";
import { Icon } from "@/components/Icon";

type ContactContent = SiteContent["contact"];

export function LeadForm({ locale, content }: { locale: Locale; content: ContactContent }) {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams(window.location.search);

    const payload = {
      fullName: data.get("fullName"),
      workEmail: data.get("workEmail"),
      phone: data.get("phone"),
      company: data.get("company"),
      role: data.get("role"),
      projectStage: data.get("projectStage"),
      budgetRange: data.get("budgetRange"),
      timeline: data.get("timeline"),
      projectBrief: data.get("projectBrief"),
      existingStack: data.get("existingStack"),
      complianceNeeds: data.get("complianceNeeds"),
      locale,
      sourceUrl: window.location.href,
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      privacyAcknowledged: data.get("privacyAcknowledged") === "on",
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="success-icon"><Icon name="check" size={30} /></span>
        <h3>{content.form.successTitle}</h3>
        <p>{content.form.successText}</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate={false}>
      <div className="form-grid">
        <label>
          <span>{content.form.fullName} <b>*</b></span>
          <input name="fullName" autoComplete="name" required minLength={2} maxLength={120} />
        </label>
        <label>
          <span>{content.form.workEmail} <b>*</b></span>
          <input name="workEmail" type="email" autoComplete="email" required maxLength={254} />
        </label>
        <label>
          <span>{content.form.company} <b>*</b></span>
          <input name="company" autoComplete="organization" required minLength={2} maxLength={160} />
        </label>
        <label>
          <span>{content.form.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label>
          <span>{content.form.role}</span>
          <input name="role" autoComplete="organization-title" maxLength={120} />
        </label>
        <label>
          <span>{content.form.projectStage} <b>*</b></span>
          <select name="projectStage" required defaultValue="">
            <option value="" disabled>{content.form.select}</option>
            {content.form.stages.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label>
          <span>{content.form.budgetRange} <b>*</b></span>
          <select name="budgetRange" required defaultValue="">
            <option value="" disabled>{content.form.select}</option>
            {content.form.budgets.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label>
          <span>{content.form.timeline} <b>*</b></span>
          <select name="timeline" required defaultValue="">
            <option value="" disabled>{content.form.select}</option>
            {content.form.timelines.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="form-span">
          <span>{content.form.projectBrief} <b>*</b></span>
          <textarea name="projectBrief" required minLength={30} maxLength={5000} rows={6} placeholder={content.form.briefPlaceholder} />
        </label>
        <label className="form-span">
          <span>{content.form.existingStack}</span>
          <textarea name="existingStack" maxLength={1000} rows={3} placeholder={content.form.stackPlaceholder} />
        </label>
        <label className="form-span">
          <span>{content.form.complianceNeeds}</span>
          <textarea name="complianceNeeds" maxLength={1000} rows={3} placeholder={content.form.compliancePlaceholder} />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="consent-row">
        <input name="privacyAcknowledged" type="checkbox" required />
        <span>
          {content.form.consentBefore}{" "}
          <a href={`https://www.wizy.ca/${locale}/privacy`} target="_blank" rel="noreferrer">
            {content.form.privacyLink}
          </a>.
        </span>
      </label>

      {status === "error" && <p className="form-error" role="alert">{content.form.error}</p>}

      <button className="button button-primary form-submit" type="submit" disabled={status === "pending"}>
        {status === "pending" ? content.form.pending : content.form.submit}
        {status !== "pending" && <Icon name="arrow" size={18} />}
      </button>
    </form>
  );
}


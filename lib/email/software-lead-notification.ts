import "server-only";

import { Resend } from "resend";
import type { SoftwareLeadInput } from "@/lib/validation";

const DEFAULT_NOTIFICATION_EMAIL = "ngochoan1011@gmail.com";
const DEFAULT_FROM_EMAIL = "Wizy Software <notifications@wizy.ca>";

const projectStageLabels: Record<SoftwareLeadInput["projectStage"], string> = {
  idea: "Idea / early discovery",
  scoping: "Scoping and planning",
  building: "Already building",
  modernizing: "Modernizing an existing system",
  "scaling-team": "Scaling the delivery team",
};

const budgetLabels: Record<SoftwareLeadInput["budgetRange"], string> = {
  "under-15k": "Under CAD 15,000",
  "15k-30k": "CAD 15,000–30,000",
  "30k-75k": "CAD 30,000–75,000",
  "75k-150k": "CAD 75,000–150,000",
  "150k-plus": "CAD 150,000+",
  "not-sure": "Not sure yet",
};

const timelineLabels: Record<SoftwareLeadInput["timeline"], string> = {
  asap: "As soon as possible",
  "1-3-months": "Within 1–3 months",
  "3-6-months": "Within 3–6 months",
  "6-plus-months": "More than 6 months",
  flexible: "Flexible / not sure",
};

export type LeadNotificationResult = "sent" | "skipped" | "failed";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanSubjectSegment(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 100);
}

function displayValue(value: string | null) {
  return value || "—";
}

function renderHtmlRows(rows: Array<[string, string | null]>) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <th style="width:190px;padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:left;vertical-align:top;color:#6b7280;font-size:13px;font-weight:600;">${escapeHtml(label)}</th>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;white-space:pre-wrap;">${escapeHtml(displayValue(value))}</td>
        </tr>`,
    )
    .join("");
}

function renderTextRows(rows: Array<[string, string | null]>) {
  return rows.map(([label, value]) => `${label}: ${displayValue(value)}`).join("\n");
}

export async function sendSoftwareLeadNotification(
  leadId: string,
  input: SoftwareLeadInput,
): Promise<LeadNotificationResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return "skipped";

  const recipient =
    process.env.SOFTWARE_LEAD_NOTIFICATION_EMAIL?.trim() || DEFAULT_NOTIFICATION_EMAIL;
  const from = process.env.SOFTWARE_LEAD_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
  const utm = [input.utmSource, input.utmMedium, input.utmCampaign]
    .filter(Boolean)
    .join(" / ");

  const rows: Array<[string, string | null]> = [
    ["Lead ID", leadId],
    ["Submitted language", input.locale === "vi" ? "Vietnamese" : "English"],
    ["Full name", input.fullName],
    ["Work email", input.workEmail],
    ["Phone", input.phone],
    ["Company", input.company],
    ["Role", input.role],
    ["Project stage", projectStageLabels[input.projectStage]],
    ["Budget range", budgetLabels[input.budgetRange]],
    ["Timeline", timelineLabels[input.timeline]],
    ["Project brief", input.projectBrief],
    ["Existing stack", input.existingStack],
    ["Security / compliance", input.complianceNeeds],
    ["Source URL", input.sourceUrl],
    ["UTM source / medium / campaign", utm || null],
  ];

  const subjectCompany = cleanSubjectSegment(input.company) || "Unknown company";
  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:0;background:#f4f0e8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;background:#f4f0e8;">
          <tr><td align="center">
            <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="max-width:680px;width:100%;overflow:hidden;border-radius:18px;background:#ffffff;box-shadow:0 16px 45px rgba(15,23,42,0.10);">
              <tr>
                <td style="padding:30px 34px;background:#0a0d12;color:#fffdf8;">
                  <p style="margin:0 0 8px;color:#e5c781;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Wizy Software</p>
                  <h1 style="margin:0;font-size:26px;line-height:1.25;">New software project inquiry</h1>
                  <p style="margin:10px 0 0;color:#c7ced8;font-size:14px;">${escapeHtml(input.fullName)} from ${escapeHtml(input.company)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 28px 10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;border-collapse:separate;overflow:hidden;">
                    ${renderHtmlRows(rows)}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:22px 28px 32px;">
                  <a href="mailto:${encodeURIComponent(input.workEmail)}" style="display:inline-block;padding:12px 20px;border-radius:10px;background:#c99e4f;color:#0a0d12;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${escapeHtml(input.fullName)}</a>
                  <p style="margin:18px 0 0;color:#6b7280;font-size:12px;">This notification was generated after the lead was saved to Supabase.</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>`;

  const text = [
    "Wizy Software — New software project inquiry",
    "",
    renderTextRows(rows),
    "",
    `Reply to: ${input.workEmail}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send(
      {
        from,
        to: [recipient],
        replyTo: input.workEmail,
        subject: `[Wizy Software] New lead — ${subjectCompany}`,
        html,
        text,
      },
      { idempotencyKey: `software-lead-${leadId}` },
    );

    return error ? "failed" : "sent";
  } catch {
    return "failed";
  }
}

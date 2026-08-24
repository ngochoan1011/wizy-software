import { createSoftwareLead } from "@/lib/supabase/leads";
import { sendSoftwareLeadNotification } from "@/lib/email/software-lead-notification";
import { softwareLeadSchema } from "@/lib/validation";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 24_000;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false, code: "payload_too_large" }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return Response.json({ ok: false, code: "invalid_origin" }, { status: 403 });
      }
    } catch {
      return Response.json({ ok: false, code: "invalid_origin" }, { status: 403 });
    }
  }

  let raw: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ ok: false, code: "payload_too_large" }, { status: 413 });
    }
    raw = JSON.parse(body);
  } catch {
    return Response.json({ ok: false, code: "invalid_json" }, { status: 400 });
  }

  if (
    raw &&
    typeof raw === "object" &&
    "website" in raw &&
    typeof raw.website === "string" &&
    raw.website.length > 0
  ) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const result = softwareLeadSchema.safeParse(raw);
  if (!result.success) {
    return Response.json({ ok: false, code: "invalid_submission" }, { status: 400 });
  }

  try {
    const lead = await createSoftwareLead(result.data);
    const notification = await sendSoftwareLeadNotification(lead.id, result.data);

    if (notification !== "sent") {
      console.warn(`[software-leads] notification_${notification}`);
    }

    return Response.json(
      { ok: true },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    const code = error instanceof Error && error.message.includes("not configured")
      ? "service_unavailable"
      : "storage_error";

    console.error(`[software-leads] ${code}`);
    return Response.json(
      { ok: false, code },
      { status: code === "service_unavailable" ? 503 : 500 },
    );
  }
}

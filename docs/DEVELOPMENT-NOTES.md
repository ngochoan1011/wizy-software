# Development Notes

## 2026-08-24 — Initial implementation

### Shared local environment

- The local `.env.local` was copied from the parent `wizy.ca` project at the user's request so both applications use the same Supabase project and Resend account during local development.
- The copied file remains gitignored, its values are not recorded in documentation or logs, and its filesystem mode is restricted to the local owner (`600`).
- The parent environment names its project URL `NEXT_PUBLIC_SUPABASE_URL`; the standalone server-only Supabase DAL accepts that name as a compatibility fallback while continuing to prefer `SUPABASE_URL` when explicitly configured.
- No database row or notification email was created while validating this configuration.

### Architecture

- Built as a standalone Next.js 16 App Router application rather than importing code at runtime from the parent `wizy.ca` project.
- The initial 16.2.4 pin matched the parent runtime, but `npm audit` identified high-severity advisories fixed in 16.3.2. The standalone site was upgraded to Next.js 16.3.2 and React 19.2.8 before verification.
- The project owns its dependencies, build, environment variables and deployment configuration.
- Multiple root layouts are used so `/en` renders `lang="en-CA"` and `/vi` renders `lang="vi-CA"`; `/` is isolated in a redirect route group.
- Content is static and server-rendered. Only interactive form and mobile-menu behavior use Client Components.
- Database access is isolated in `lib/supabase/` and marked `server-only`.
- `turbopack.root` is pinned to this nested standalone project so Next.js does not infer the parent repository's lockfile.

### Brand and positioning decisions

- Primary identity: **Wizy Software**.
- Public operating model: Wizy leads discovery, contract, governance and client communication in Canada; HiTek supports engineering delivery in Vietnam.
- HiTek is intentionally not placed in the hero or represented as a co-equal master brand.
- The phrase “member company” is not used because the legal/ownership relationship has not been evidenced in the implementation brief.
- HiTek's official logo is not copied from the public website. A neutral typographic partner treatment is used until usage permission is confirmed.
- Public portfolio results are not borrowed. The page explains that references can be reviewed during discovery and are published only with permission and attribution.

### Content decisions

- English is the default route and primary Canadian B2B version.
- Vietnamese is a complete editorial version, not an English fallback.
- The landing page does not publish a generic hourly rate or starting project price because the commercial floor and partner margin have not been approved.
- The qualification form still asks for a broad indicative budget band to protect sales time and route the right next step.
- Statistics Canada's 17% outsourcing figure is the only numerical market claim and links directly to the source.
- The page deliberately explains cases where Wizy is not a fit, consistent with the parent sense-making methodology.

### Lead capture and security

- The browser posts to `/api/leads`; it never receives a Supabase publishable or elevated key.
- The Route Handler caps both declared and actual request size, checks same-origin browser requests, silently absorbs honeypot submissions and validates every stored field with Zod.
- The DAL uses Supabase's current secret-key model, with legacy service-role support only for migration compatibility.
- The table has RLS enabled and all privileges revoked from `anon` and `authenticated`; the server-side secret maps to `service_role` and bypasses RLS after application validation.
- IP address and user agent are not stored. Source URL and three UTM values are stored for acquisition attribution.
- No lead values are written to application logs.
- After Supabase returns the stored lead ID, a server-only Resend module sends an HTML and plain-text notification to `SOFTWARE_LEAD_NOTIFICATION_EMAIL` (default: `ngochoan1011@gmail.com`).
- The client email is set as `replyTo`; all user-provided HTML values are escaped and CR/LF characters are removed from the company name used in the subject.
- Resend receives `software-lead-{uuid}` as its idempotency key so a retry for the same stored row does not create a second notification.
- Notification delivery is deliberately non-blocking after persistence. If Resend is missing or unavailable, the stored lead remains successful and the server logs only `notification_skipped` or `notification_failed`, never lead values.

### SEO/AEO implementation

- Each locale owns its self-canonical and both locale alternates plus `x-default`.
- Structured data contains only facts visible on the page and uses a sanitized JSON serializer.
- `FAQPage` repeats the exact visible Q&A text.
- Organization schema avoids a fabricated street address and does not claim insurance, security certifications or compliance status.
- `llms.txt` is implemented as supporting discovery documentation, not treated as a ranking guarantee.
- The social image is served by an explicit `/opengraph-image` Route Handler. This keeps its URL stable without implicitly attaching file-based metadata to the generated not-found route.

### Verification and QA

- `npm run lint` and `npm run build` pass on Next.js 16.3.2 without warnings.
- `npm audit --omit=dev` reports zero production dependency vulnerabilities.
- Browser QA covered a 1280px desktop viewport and a 390×844 mobile viewport.
- The responsive test confirmed no horizontal overflow, desktop/mobile navigation switching, EN/VI locale metadata, visible form labels and a clean browser console.
- QA found that native `<details>` navigation remained open after selecting a mobile anchor. The menu is now a small Client Component that closes itself after internal navigation or locale/CTA selection.
- Local API tests cover invalid JSON, invalid fields, honeypot absorption, missing Supabase configuration and oversized request bodies. See `TESTING.md` for the status matrix.
- Resend 6.12.2 initially matched the parent project but introduced three moderate dependency advisories. The standalone site uses Resend 6.22.0 instead; the final production audit returns zero vulnerabilities.

### Known next iterations

- Add approved, correctly attributed case studies after both parties confirm usage rights.
- Add a delivery-team section only after names, roles and public profile permissions are available.
- Add CRM or webhook automation only if Wizy needs routing beyond the implemented Resend admin notification.
- Add durable rate limiting if traffic or abuse warrants it; Vercel in-memory limiting was intentionally avoided because it is unreliable across serverless instances.
- Consider a nonce-based CSP in a security-hardening pass. Current response headers cover framing, content sniffing, referrer and browser-permission controls without risking broken Next.js hydration.

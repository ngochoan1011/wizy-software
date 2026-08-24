# Wizy Software — Progress Log

> Last updated: 2026-08-24  
> Status convention: ✅ complete · 🟡 implemented but needs production validation · ⏳ pending external input/action

## Discovery and binding documents

- [x] ✅ Read every file in the parent repository's `docs/methodology/`.
- [x] ✅ Read `docs/software-outsourcing-strategy.md` and use it as the landing-page brief.
- [x] ✅ Read the installed Next.js 16 documentation relevant to App Router structure, metadata, route handlers, forms, data security, environment variables, JSON-LD, sitemap, robots, fonts, CSS, deployment and response headers.
- [x] ✅ Check current official Supabase guidance for new secret keys, server-only clients and RLS/grants.

## Standalone application

- [x] ✅ Create an independent Next.js 16 project with its own package, lint, TypeScript and Vercel-ready configuration.
- [x] ✅ Create full English and Vietnamese landing pages at `/en` and `/vi`.
- [x] ✅ Redirect `/` permanently to `/en`.
- [x] ✅ Implement responsive navigation, hero, trust proof, delivery model, services, ICP, delivery controls, process, HiTek partner disclosure, governance, FAQ and qualification form.
- [x] ✅ Use Wizy as the primary brand and Canadian accountable lead; present HiTek only as the disclosed engineering delivery partner.
- [x] ✅ Avoid unapproved case-study, logo, client-result, certification and team-size claims.
- [x] ✅ Reuse the approved Wizy mark as a local deployment asset.

## Lead capture and Supabase

- [x] ✅ Add a progressively enhanced client form with HTML validation, pending/success/error states and a bot honeypot.
- [x] ✅ Add server-side Zod validation and same-origin checks.
- [x] ✅ Keep Supabase elevated credentials inside a `server-only` data-access layer.
- [x] ✅ Support the current `SUPABASE_SECRET_KEY` and a legacy `SUPABASE_SERVICE_ROLE_KEY` fallback.
- [x] ✅ Add a locked-down `software_leads` SQL migration with RLS enabled and no `anon`/`authenticated` privileges.
- [x] ✅ Send a Resend admin notification after a successful lead insert, defaulting to `ngochoan1011@gmail.com` with a Vercel override.
- [x] ✅ Add plain-text and escaped HTML email bodies, client reply-to and per-lead idempotency keys.
- [x] ✅ Copy the parent `wizy.ca` environment into the gitignored local site, restrict it to mode `600` and support the parent's Supabase URL variable name.
- [ ] ⏳ Run the SQL migration in the real Supabase project.
- [ ] ⏳ Configure Supabase and Resend Vercel environment variables; test a real insert and delivered notification.

## SEO, AEO and delivery quality

- [x] ✅ Add locale-specific metadata, self-canonical, EN/VI hreflang, `x-default`, OG and Twitter metadata.
- [x] ✅ Add matching visible FAQ content and `FAQPage` JSON-LD.
- [x] ✅ Add shared `Organization`, `WebSite` and `Service` entities without unsupported address, insurance or compliance claims.
- [x] ✅ Add bilingual sitemap entries, `robots.txt`, `manifest.webmanifest`, generated icon, generated OG image and `llms.txt`.
- [x] ✅ Add a single H1 and answer-first hero copy in both languages.
- [x] ✅ Add security response headers and keep `/api/` out of crawl paths.
- [x] ✅ Run local lint and a warning-free production build on Next.js 16.3.2.
- [x] ✅ Complete desktop and 390×844 mobile browser QA for both locales; correct the mobile-menu close behavior found during testing.
- [x] ✅ Fix locale switching so EN/VI navigation always starts at the top instead of preserving an unrelated long-page scroll position.
- [x] ✅ Verify root redirect, public crawl files, OG response, lead API validation paths and zero production dependency advisories.
- [ ] ⏳ Validate production HTML, canonical/hreflang, JSON-LD, OG image, sitemap, robots and form behavior after deployment.

## Commercial/content inputs still required

- [ ] ⏳ Confirm whether HiTek may legally be described as a “member company”; current copy deliberately uses “engineering delivery partner”.
- [ ] ⏳ Approve partner/logo usage if the official HiTek logo should replace the neutral text treatment.
- [ ] ⏳ Approve three case studies and their exact Wizy/HiTek attribution before publishing proof claims.
- [ ] ⏳ Confirm minimum engagement and margin model before publishing any project starting price.
- [ ] ⏳ Have Canadian counsel review final MSA, NDA, SOW, DPA and privacy wording before the first sensitive-data engagement.
- [ ] ⏳ Decide whether CRM automation is required in addition to Supabase storage and Resend notification.

## Verification record

Detailed command, HTTP and browser results are recorded in
[`TESTING.md`](TESTING.md). A real Supabase insert remains intentionally pending
until the target project, migration and server-only credentials are available.

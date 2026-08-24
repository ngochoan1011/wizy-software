# Verification Record

> Last verified: 2026-08-24  
> Local target: `http://localhost:3000`

## Static checks

| Check | Result |
|---|---|
| `npm run lint` | ✅ Passed |
| `npm run build` | ✅ Passed without warnings |
| TypeScript production check | ✅ Passed as part of `next build` |
| `npm audit --omit=dev` | ✅ 0 vulnerabilities |
| Resend SDK | ✅ 6.22.0; server-only import compiles in the Node.js lead route |
| Notification unit integration | ✅ Mocked Resend `skipped`, `sent` and `failed` branches passed |

The production build prerenders `/`, `/en`, `/vi`, the social image, metadata
files and public discovery files. `/api/leads` remains a request-time Route
Handler.

## Browser QA

Tested with the local Next.js development server in the in-app Chromium browser.

| Scenario | Result |
|---|---|
| English desktop at 1280px | ✅ Hero, navigation and delivery console render correctly |
| English mobile at 390×844 | ✅ No horizontal overflow; mobile navigation replaces desktop navigation |
| Vietnamese mobile at 390×844 | ✅ Correct copy, `lang="vi-CA"`, canonical and alternates |
| Mobile anchor navigation | ✅ Menu closes and target section aligns at the top |
| Desktop locale switch | ✅ `/en` → `/vi` resets from the reproduced `scrollY=7288` defect to `scrollY=0` |
| Mobile locale switch | ✅ Native locale navigation closes the menu and opens the alternate locale at the top |
| Contact form | ✅ 13 labelled controls, 8 required controls and responsive single-column layout |
| Browser console | ✅ No warnings or errors recorded |

DOM checks also confirmed one visible H1, 10 visible FAQ entries, one JSON-LD
block, reciprocal EN/VI hreflang values and `x-default` pointing to `/en`.

## HTTP and lead API checks

| Request | Expected | Result |
|---|---:|---:|
| `GET /` | `308` to `/en` | ✅ `308` |
| `GET /robots.txt` | Crawlable public pages; `/api/` disallowed | ✅ `200` |
| `GET /sitemap.xml` | EN/VI URLs and alternates | ✅ `200` |
| `GET /llms.txt` | Factual service summary | ✅ `200` |
| `GET /opengraph-image` | PNG response | ✅ `200 image/png` |
| Invalid JSON to `POST /api/leads` | `400 invalid_json` | ✅ |
| Invalid fields to `POST /api/leads` | `400 invalid_submission` | ✅ |
| Populated honeypot | Silent `200` | ✅ |
| Valid lead without local Supabase credentials | `503 service_unavailable` | ✅ |
| Body larger than 24 KB | `413 payload_too_large` | ✅ |

The `503` test is intentional and proves that the server fails closed when an
elevated database credential is unavailable. A successful `201` insert test must
be completed after the SQL migration and Vercel/Supabase environment variables
are configured.

The notification module was exercised locally with a mocked Resend HTTP response.
The checks confirmed the configured recipient, client `replyTo`, idempotency
header, subject CR/LF removal, HTML escaping, missing-key skip and API-error
failure result. Real delivery remains downstream of a successful Supabase insert,
so production verification must confirm one stored row and one delivered
notification for the same lead ID.

## Production-only validation still required

- Run the Supabase migration and confirm a test submission creates one row.
- Configure Resend and confirm one notification arrives at `ngochoan1011@gmail.com`.
- Confirm the notification's Reply action targets the test lead's work email.
- Confirm no secret appears in browser source, bundles, responses or logs.
- Validate deployed canonical/hreflang and JSON-LD in external validators.
- Validate the Open Graph image with a social preview debugger.
- Submit the production sitemap after domain verification.

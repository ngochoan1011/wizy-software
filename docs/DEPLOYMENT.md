# Vercel Deployment

## 1. Import the standalone repository

Import the Git repository for `wizy-software` into Vercel. If deploying from a
monorepo rather than this nested repository, set **Root Directory** to:

```text
subdomains/wizy-software
```

Vercel should detect Next.js automatically. Expected commands:

- Install: `npm install`
- Build: `npm run build`
- Output: Next.js default

## 2. Configure Supabase

Run the required SQL migration first. See [DATABASE.md](DATABASE.md).

Add the following Vercel environment variables to Production and Preview as
appropriate:

```env
SUPABASE_URL=
SUPABASE_SECRET_KEY=
RESEND_API_KEY=
SOFTWARE_LEAD_NOTIFICATION_EMAIL=ngochoan1011@gmail.com
```

Use a separate Supabase project or separate secret key for preview if preview
submissions must not pollute production lead data.

`SOFTWARE_LEAD_FROM_EMAIL` is optional and defaults to
`Wizy Software <notifications@wizy.ca>`. The sender domain must be verified in
the Resend account associated with `RESEND_API_KEY`. See
[EMAIL-NOTIFICATIONS.md](EMAIL-NOTIFICATIONS.md).

## 3. Add the custom domain

In Vercel Project Settings → Domains, add:

```text
software.wizy.ca
```

Create the DNS record Vercel displays. It is commonly a CNAME from `software` to
Vercel's DNS target, but use the exact record shown for this project.

## 4. Pre-launch verification

- `/` permanently redirects to `/en`.
- `/en` and `/vi` return `200` and have the correct `<html lang>`.
- Each locale has one self-canonical and reciprocal hreflang values.
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest` and `/opengraph-image` return `200`.
- The form creates a row in `public.software_leads`.
- The same submission produces one Resend notification at `ngochoan1011@gmail.com`.
- Replying to the notification targets the lead's work email.
- A cross-origin form POST is rejected.
- No secret key appears in browser source, JavaScript bundles, network response or logs.
- English and Vietnamese form states work on mobile and desktop.
- Generated OG image renders correctly in a social preview debugger.
- JSON-LD parses in Schema Markup Validator; FAQ text matches visible content.

## 5. Post-launch actions

- Submit `https://software.wizy.ca/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Monitor Vercel function errors and Supabase inserts for the first week.
- Define a lead-response owner and one-business-day follow-up process.
- Add approved case studies only after attribution and usage rights are documented.
- Decide whether to add CRM/webhook routing beyond the existing Resend notification.

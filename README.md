# Wizy Software

Independent bilingual landing site for `software.wizy.ca`.

Wizy Software presents a Canadian-led software delivery model backed by an
engineering delivery partnership with HiTek Software in Vietnam. The site is a
standalone Next.js application intended for Vercel, with qualified lead capture
stored in Supabase.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root redirects to
`/en`; the complete Vietnamese version is at `/vi`.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Configuration

The lead form requires these server-only environment variables:

```env
SUPABASE_URL=
SUPABASE_SECRET_KEY=
RESEND_API_KEY=
SOFTWARE_LEAD_NOTIFICATION_EMAIL=ngochoan1011@gmail.com
```

`SUPABASE_SERVICE_ROLE_KEY` is supported only as a legacy fallback. Never prefix
either elevated key with `NEXT_PUBLIC_`.

Run the SQL migration documented in [docs/DATABASE.md](docs/DATABASE.md) before
testing form submissions.

After a lead is stored, the server sends an admin notification through Resend.
See [docs/EMAIL-NOTIFICATIONS.md](docs/EMAIL-NOTIFICATIONS.md) for sender-domain
requirements and production verification.

## Project documentation

- [Progress log](docs/PROGRESS.md)
- [Development notes](docs/DEVELOPMENT-NOTES.md)
- [Methodology alignment](docs/METHODOLOGY-ALIGNMENT.md)
- [Testing record](docs/TESTING.md)
- [Database setup](docs/DATABASE.md)
- [Email notifications](docs/EMAIL-NOTIFICATIONS.md)
- [Vercel deployment](docs/DEPLOYMENT.md)

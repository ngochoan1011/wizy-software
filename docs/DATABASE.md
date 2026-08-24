# Supabase Database Setup

## Required migration

Run this SQL in the Supabase project that will receive `software.wizy.ca` leads:

[`supabase/migrations/202608240001_create_software_leads.sql`](../supabase/migrations/202608240001_create_software_leads.sql)

From the Supabase Dashboard:

1. Open the target project.
2. Open **SQL Editor**.
3. Paste the complete migration and run it once.
4. Confirm `public.software_leads` exists.
5. Confirm RLS is enabled.
6. Confirm `anon` and `authenticated` have no table privileges.

The migration is idempotent for the table and indexes, but the `create table if not
exists` statement will not retrofit columns if an incompatible table with the same
name already exists. Review existing schema before running in a shared project.

## Vercel environment variables

Use server-only variables:

```env
SUPABASE_URL=https://PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
```

For an older Supabase project, the site supports this temporary fallback:

```env
SUPABASE_SERVICE_ROLE_KEY=legacy_service_role_jwt
```

Prefer a newly created Supabase `sb_secret_...` key. Never expose either elevated
key in browser code or a variable prefixed with `NEXT_PUBLIC_`.

For local compatibility with a copied parent `wizy.ca` environment, the
server-only DAL also accepts `NEXT_PUBLIC_SUPABASE_URL` as the project URL while
continuing to use `SUPABASE_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY` for elevated
database access. The URL is public configuration; the elevated key remains
server-only.

## Data flow

```text
Lead form
  → POST /api/leads
  → same-origin + honeypot + Zod validation
  → server-only Supabase client
  → public.software_leads
  → Resend admin notification using the stored lead ID
```

The current implementation stores no IP address or user-agent string. It stores
the source URL and `utm_source`, `utm_medium`, `utm_campaign` when present.

## Verification query

After submitting a test lead, use:

```sql
select
  id,
  created_at,
  status,
  locale,
  full_name,
  work_email,
  company,
  project_stage,
  budget_range,
  timeline
from public.software_leads
order by created_at desc
limit 10;
```

Delete test rows from the Dashboard after verification if they contain personal
information that should not remain in production.

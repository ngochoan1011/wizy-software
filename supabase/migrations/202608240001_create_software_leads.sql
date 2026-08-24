-- Wizy Software qualified lead capture.
-- Run this migration in the Supabase project used by software.wizy.ca.

create table if not exists public.software_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'discovery', 'proposal', 'won', 'lost')),
  locale text not null
    check (locale in ('en', 'vi')),
  full_name text not null
    check (char_length(full_name) between 2 and 120),
  work_email text not null
    check (char_length(work_email) <= 254),
  phone text
    check (phone is null or char_length(phone) <= 40),
  company text not null
    check (char_length(company) between 2 and 160),
  role text
    check (role is null or char_length(role) <= 120),
  project_stage text not null
    check (project_stage in ('idea', 'scoping', 'building', 'modernizing', 'scaling-team')),
  budget_range text not null
    check (budget_range in ('under-15k', '15k-30k', '30k-75k', '75k-150k', '150k-plus', 'not-sure')),
  timeline text not null
    check (timeline in ('asap', '1-3-months', '3-6-months', '6-plus-months', 'flexible')),
  project_brief text not null
    check (char_length(project_brief) between 30 and 5000),
  existing_stack text
    check (existing_stack is null or char_length(existing_stack) <= 1000),
  compliance_needs text
    check (compliance_needs is null or char_length(compliance_needs) <= 1000),
  source_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  privacy_acknowledged boolean not null
    check (privacy_acknowledged = true)
);

comment on table public.software_leads is
  'Qualified project inquiries submitted through software.wizy.ca.';

create index if not exists software_leads_created_at_idx
  on public.software_leads (created_at desc);

create index if not exists software_leads_status_created_at_idx
  on public.software_leads (status, created_at desc);

alter table public.software_leads enable row level security;

-- The browser never talks directly to this table. All inserts pass through the
-- validated server-side Route Handler using a Supabase secret key.
revoke all on table public.software_leads from anon, authenticated;
grant select, insert, update, delete on table public.software_leads to service_role;


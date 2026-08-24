# Lead Email Notifications

Qualified form submissions produce an admin email after the lead has been saved
to `public.software_leads`.

## Required Vercel variables

```env
RESEND_API_KEY=re_...
SOFTWARE_LEAD_NOTIFICATION_EMAIL=ngochoan1011@gmail.com
```

The notification recipient defaults to `ngochoan1011@gmail.com` when the second
variable is absent, but setting it explicitly in Vercel makes the production
configuration auditable.

The optional sender variable is:

```env
SOFTWARE_LEAD_FROM_EMAIL=Wizy Software <notifications@wizy.ca>
```

That value is also the default. `wizy.ca` must be verified in the Resend account
associated with the API key. If a different verified sending domain is used,
override this value accordingly. None of these variables may use a
`NEXT_PUBLIC_` prefix.

## Delivery behavior

```text
Validated form
  → insert into Supabase
  → receive stored lead UUID
  → send admin email through Resend
```

- Email is never attempted before persistence succeeds.
- The stored lead UUID becomes the Resend idempotency key.
- Both escaped HTML and plain-text bodies are provided.
- `replyTo` is the lead's validated work email.
- The notification contains contact, project, budget, timeline, technical,
  compliance, source and UTM fields.
- If Resend is unconfigured or temporarily fails, the stored lead remains a
  successful submission. The server logs a generic notification status without
  logging customer data.

This non-blocking behavior prevents a customer retry from creating duplicate
database rows after the original row was already stored.

## Production verification

1. Configure the Supabase variables and run the required migration.
2. Configure the Resend variables in the same Vercel environment.
3. Deploy or redeploy so the server functions receive the new variables.
4. Submit a clearly labelled test lead through `/en` or `/vi`.
5. Confirm exactly one row exists in `public.software_leads`.
6. Confirm exactly one notification arrives at `ngochoan1011@gmail.com`.
7. Confirm Reply targets the work email used in the test submission.
8. Check Vercel logs for neither `notification_skipped` nor
   `notification_failed`.

Delete the test row afterward if it should not remain in production.

## Troubleshooting

- `notification_skipped`: `RESEND_API_KEY` is absent in that Vercel environment.
- `notification_failed`: verify the API key, Resend sender-domain status and the
  configured From address.
- Lead form returns `503`: Supabase is not configured; email is not reached.
- Lead is stored but no email arrives: inspect the Resend delivery log and Vercel
  function warning for the same submission time.

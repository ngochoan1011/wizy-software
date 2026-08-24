import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# Wizy Software

> Wizy Software provides Canadian-led software delivery for Canadian founders, SMEs, SaaS teams and agency partners. Wizy leads discovery, commercial accountability and client communication in Canada. Engineering execution is supported by HiTek Software, an engineering delivery partner in Vietnam.

## Main pages

- [English landing page](${SITE_URL}/en): Custom software delivery, engagement models, process, governance and buyer FAQ.
- [Vietnamese landing page](${SITE_URL}/vi): Complete Vietnamese version of the service and delivery model.

## Services

- Product Discovery Sprint
- MVP and Custom Software Development
- Dedicated Product Pod
- Modernization and Maintenance

## Delivery principles

- Wizy is positioned as the Canadian commercial and client-delivery lead.
- HiTek Software is disclosed as an engineering delivery partner in Vietnam.
- The delivery model emphasizes named teams, visible assumptions, client-owned repositories, weekly demos, documented change control and a practical handover path.
- Public case studies, client logos, results and certifications are not attributed to Wizy unless usage rights and attribution have been confirmed.

## Contact

- Email: partners@wizy.ca
- Phone: +1 (647) 807-5205
- Service area: Canada
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}


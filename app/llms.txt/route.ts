import { SITE_URL } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/supabase/posts";

// Lists published blog articles, so it must follow the scheduled publishing dates.
export const revalidate = 3600;

export async function GET() {
  const [enPosts, viPosts] = await Promise.all([getPublishedPosts("en"), getPublishedPosts("vi")]);
  const viBySlug = new Map(viPosts.filter((post) => !post.isFallback).map((post) => [post.slug, post]));
  const articles = enPosts
    .map((post) => {
      const vi = viBySlug.get(post.slug);
      const viLink = vi ? ` Vietnamese: [${vi.title}](${SITE_URL}/vi/blog/${post.slug})` : "";
      return `- [${post.title}](${SITE_URL}/en/blog/${post.slug}): ${post.excerpt}${viLink}`;
    })
    .join("\n");

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

## Blog articles

Buyer guides that answer one question each, in English with Vietnamese versions. Index: [English](${SITE_URL}/en/blog), [Vietnamese](${SITE_URL}/vi/blog).

${articles || "- No articles published yet."}

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


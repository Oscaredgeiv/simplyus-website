import type { MetadataRoute } from "next";
import { priorityCities } from "@/data/cities";
import { counties } from "@/data/counties";
import { subServices } from "@/data/sub-services";
import { SERVICE_SLUGS, SITE_URL } from "@/lib/seo-helpers";
import { posts } from "@/data/posts";

/* ──────────────────────────────────────────────────────────────────────
 * Sitemap — Phase 1
 * Includes: core pages, all 7 services, all subservices, Tier-1 cities,
 *           Tier-1 city × service, all counties, county × service,
 *           and all blog posts.
 *
 * Phase 2/3 will widen city coverage to Tier 2 + Tier 3.
 * ────────────────────────────────────────────────────────────────────── */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE_URL}${path}`;

  const entries: MetadataRoute.Sitemap = [];

  /* Core pages */
  const corePaths = [
    { p: "/", priority: 1.0, freq: "weekly" as const },
    { p: "/about", priority: 0.8, freq: "monthly" as const },
    { p: "/services", priority: 0.9, freq: "weekly" as const },
    { p: "/areas", priority: 0.85, freq: "weekly" as const },
    { p: "/counties", priority: 0.8, freq: "monthly" as const },
    { p: "/blog", priority: 0.8, freq: "weekly" as const },
    { p: "/contact", priority: 0.7, freq: "monthly" as const },
    { p: "/faq", priority: 0.6, freq: "monthly" as const },
    { p: "/case-studies", priority: 0.5, freq: "monthly" as const },
    { p: "/privacy", priority: 0.3, freq: "yearly" as const },
    { p: "/terms", priority: 0.3, freq: "yearly" as const },
  ];
  for (const c of corePaths) {
    entries.push({
      url: url(c.p),
      lastModified: now,
      changeFrequency: c.freq,
      priority: c.priority,
    });
  }

  /* Service hubs (already exist as /services/[slug]) */
  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: url(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  /* Subservices */
  for (const sub of subServices) {
    entries.push({
      url: url(`/services/${sub.parentSlug}/${sub.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  /* Tier-1 city hubs */
  for (const city of priorityCities()) {
    entries.push({
      url: url(`/areas/${city.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
    /* Tier-1 city × all services */
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: url(`/areas/${city.slug}/${slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  /* All counties + county × service */
  for (const county of counties) {
    entries.push({
      url: url(`/counties/${county.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: url(`/counties/${county.slug}/${slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  }

  /* Blog posts */
  for (const post of posts) {
    entries.push({
      url: url(`/blog/${post.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}

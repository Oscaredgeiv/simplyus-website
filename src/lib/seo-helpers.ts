/**
 * SEO content helpers — generate unique localized content
 * for city × service combinations without duplicate metadata.
 */

import type { City } from "@/data/cities";
import type { County } from "@/data/counties";

/* ---------- Service slugs that match /services/[slug] folders ---------- */
export const SERVICE_SLUGS = [
  "digital-marketing",
  "social-media",
  "website-design",
  "hosting",
  "software-development",
  "ad-creation",
  "ai-integration",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

interface ServiceMeta {
  slug: ServiceSlug;
  name: string; // "Digital Marketing"
  shortNoun: string; // "digital marketing"
  verb: string; // "drive growth"
  keywords: string[];
  shortDescription: string;
}

export const SERVICES_META: Record<ServiceSlug, ServiceMeta> = {
  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortNoun: "digital marketing",
    verb: "drive measurable growth",
    keywords: ["digital marketing", "online marketing", "marketing agency"],
    shortDescription:
      "Paid ads, SEO, email marketing, and full-funnel strategy that turn clicks into customers.",
  },
  "social-media": {
    slug: "social-media",
    name: "Social Media & Content",
    shortNoun: "social media management",
    verb: "build audiences and drive engagement",
    keywords: ["social media management", "content creation", "social media marketing"],
    shortDescription:
      "Content creation, social strategy, community management, and growth-focused posting that builds real audiences.",
  },
  "website-design": {
    slug: "website-design",
    name: "Website Design",
    shortNoun: "web design",
    verb: "convert visitors into customers",
    keywords: ["web design", "website design", "custom websites"],
    shortDescription:
      "Conversion-focused, mobile-first websites built around your brand and your customers.",
  },
  hosting: {
    slug: "hosting",
    name: "Website Hosting",
    shortNoun: "website hosting",
    verb: "stay fast, secure, and reliable",
    keywords: ["website hosting", "managed hosting", "wordpress hosting"],
    shortDescription:
      "Fast, secure, fully-managed hosting with backups, monitoring, and real human support.",
  },
  "software-development": {
    slug: "software-development",
    name: "Software & App Development",
    shortNoun: "custom software development",
    verb: "operate faster and scale smarter",
    keywords: ["custom software", "app development", "business software"],
    shortDescription:
      "Custom apps, CRM setup, workflow automation, and API integrations built around how your business actually works.",
  },
  "ad-creation": {
    slug: "ad-creation",
    name: "Ad Creation & Campaigns",
    shortNoun: "advertising",
    verb: "generate qualified leads at scale",
    keywords: ["google ads", "facebook ads", "ad agency"],
    shortDescription:
      "Google Ads, Meta ads, ad creative, and ongoing optimization that turn ad budget into customers.",
  },
  "ai-integration": {
    slug: "ai-integration",
    name: "AI Integration & Automation",
    shortNoun: "AI integration and automation",
    verb: "automate the repetitive work and free up your team",
    keywords: ["ai automation", "ai integration", "business ai"],
    shortDescription:
      "Practical AI workflows, chatbots, and content systems that reduce manual work and help your team move faster.",
  },
};

/**
 * Stable hash from a string — used to deterministically pick
 * intro/FAQ variations per city+service combination.
 */
export function stableHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const ch = input.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash |= 0;
  }
  return Math.abs(hash);
}

/* ---------- Intro template variations for city + service pages ---------- */
const CITY_SERVICE_INTRO_TEMPLATES = [
  (city: string, service: string) =>
    `Looking for ${service} in ${city}? We're a Dacula-based digital agency serving ${city} businesses with the same hands-on approach we bring to every client. No outsourcing, no generic strategy — just the kind of work that actually moves the needle for businesses in your market.`,
  (city: string, service: string) =>
    `If you run a business in ${city} and you're searching for ${service}, you're in the right place. We work with local businesses across northeast Georgia, and we know the ${city} market well enough to build strategies that fit how your customers actually search and buy.`,
  (city: string, service: string) =>
    `Simply Us & U provides ${service} for businesses in ${city} and the surrounding area. We're based in Dacula, just a short drive from ${city}, and we treat every client like a partner — not a number on a roster.`,
  (city: string, service: string) =>
    `Our team helps ${city} businesses with ${service} that delivers real, measurable outcomes. From initial strategy to ongoing optimization, we bring the same craft to every project — whether it's a small local shop or a fast-scaling regional brand.`,
  (city: string, service: string) =>
    `${city} businesses deserve ${service} that actually works. We've built our reputation by showing up, communicating clearly, and producing results — not by selling templated solutions and disappearing after the first month.`,
];

export function generateCityServiceIntro(
  city: City,
  service: ServiceMeta,
): string {
  const idx =
    stableHash(`${city.slug}-${service.slug}`) %
    CITY_SERVICE_INTRO_TEMPLATES.length;
  return CITY_SERVICE_INTRO_TEMPLATES[idx](city.name, service.shortNoun);
}

/* ---------- City context paragraph ---------- */
const CITY_CONTEXT_TEMPLATES = [
  (c: City) =>
    `${c.name} is ${c.vibe}. We've worked with businesses across the area${
      c.distance > 0 ? ` and the short drive from our home base in Dacula` : ""
    } means we can move fast when something needs in-person attention.`,
  (c: City) =>
    `As a Dacula-based agency just ${
      c.distance === 0 ? "down the street" : `${c.distance} miles away`
    }, we know ${c.name} well — ${c.vibe}. That local awareness helps us build marketing and websites that actually fit the businesses and customers in your area.`,
  (c: City) =>
    `${c.name} — ${c.vibe} — is part of our core service area. We've helped local businesses here connect with their customers through better websites, smarter marketing, and the kind of automation that lets small teams compete with much bigger ones.`,
];

export function generateCityContext(city: City): string {
  const idx = stableHash(`${city.slug}-context`) % CITY_CONTEXT_TEMPLATES.length;
  return CITY_CONTEXT_TEMPLATES[idx](city);
}

/* ---------- Why local matters paragraph (rotates per city+service) ---------- */
const WHY_LOCAL_TEMPLATES = [
  (city: string, service: string) =>
    `When you hire a local agency for ${service}, you get faster responses, in-person meetings when they matter, and a team that understands your market. We're not in a different time zone. We're not running a hundred accounts. ${city} businesses get attention that scales with their needs.`,
  (city: string, service: string) =>
    `Hiring a local team for ${service} means working with people who can actually visit your business if needed, who answer the phone when something urgent comes up, and who treat your account like it matters — because at our size, every account does.`,
  (city: string, service: string) =>
    `${city} businesses don't always need a national agency. Sometimes you need a team close enough to come over, plain-spoken enough to actually communicate, and small enough that you matter. That's the model we built.`,
  (city: string, service: string) =>
    `The biggest advantage of working with a local team for ${service} isn't price — it's accountability. We see the same restaurants, drive the same roads, and know the same business owners as our clients. That changes the relationship in ways national agencies can't replicate.`,
];

export function generateWhyLocal(city: City, service: ServiceMeta): string {
  const idx =
    stableHash(`${city.slug}-${service.slug}-why`) %
    WHY_LOCAL_TEMPLATES.length;
  return WHY_LOCAL_TEMPLATES[idx](city.name, service.shortNoun);
}

/* ---------- FAQ generation ---------- */

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Build an FAQ block for a city + service page combining:
 *  - 2 service-specific FAQs (consistent per service)
 *  - 2 city-flavored FAQs that vary slightly
 */
export function generateCityServiceFAQs(
  city: City,
  service: ServiceMeta,
): FAQ[] {
  void service; // reserved for future service-flavored FAQ variations

  const cityFaqs: FAQ[] = [
    {
      question: `Do you actually serve businesses in ${city.name}?`,
      answer: `Yes. We're based in Dacula, GA${
        city.distance > 0
          ? ` and ${city.name} is approximately ${city.distance} miles away — well within our core service area`
          : ""
      }. We work with businesses throughout ${city.name} and surrounding communities${
        city.nearby.length
          ? ` including nearby areas like ${city.nearby.slice(0, 3).join(", ")}`
          : ""
      }.`,
    },
    {
      question: `What does ${service.shortNoun} typically cost for a ${city.name} business?`,
      answer: `Pricing depends on the scope and goals of the project. Most ${city.name} engagements fall within a normal market range for a small-to-mid-sized service business. We'll provide a transparent quote after a free discovery call — no surprises, no hidden fees.`,
    },
    {
      question: `Will you meet in person if needed?`,
      answer: `Yes. ${city.name} is close enough to Dacula that we can come on-site when it makes sense — for kickoff workshops, content shoots, or strategy sessions. Most of our work is done remotely with regular video calls, but we're available in person when it matters.`,
    },
    {
      question: `Do you work with my industry?`,
      answer: `We've worked with service businesses across many industries — contractors, professional services, retail, healthcare, manufacturing, and more. The core principles of strong ${service.shortNoun} apply broadly. On our discovery call, we'll dig into your specific industry and how the work will be tailored.`,
    },
  ];

  const idx = stableHash(`${city.slug}-${service.slug}-faq`) % 4;
  // Pick 2 different FAQs per page based on hash
  return [
    cityFaqs[idx],
    cityFaqs[(idx + 1) % 4],
    cityFaqs[(idx + 2) % 4],
    cityFaqs[(idx + 3) % 4],
  ];
}

/* ---------- Service-only intro for city pages ---------- */
const CITY_PAGE_INTRO_TEMPLATES = [
  (c: City) =>
    `Whether you run a small local business or a growing regional company, ${c.name} businesses come to us for the same reason: they want a partner that actually answers the phone, understands their market, and produces real results. We're a Dacula-based digital agency serving ${c.name} with end-to-end services from marketing and design to software and AI.`,
  (c: City) =>
    `${c.name} is a community we know well, and the businesses here have unique advantages and challenges. We help local businesses cut through the noise with marketing that converts, websites that perform, and the kind of automation that lets small teams compete with much bigger players.`,
  (c: City) =>
    `From ${c.name}'s ${c.neighborhoods[0] || "downtown core"} to the surrounding area, we work with businesses that want to grow without outsourcing their brand to a faceless national agency. Everything we do is built around your goals — marketing, design, software, all of it.`,
];

export function generateCityPageIntro(city: City): string {
  const idx =
    stableHash(`${city.slug}-pageintro`) %
    CITY_PAGE_INTRO_TEMPLATES.length;
  return CITY_PAGE_INTRO_TEMPLATES[idx](city);
}

/* ---------- City-page FAQs ---------- */
export function generateCityFAQs(city: City): FAQ[] {
  const allNearby = city.nearby.length
    ? city.nearby
        .slice(0, 3)
        .map((s) => s.replace(/-/g, " "))
        .map((s) => s.replace(/\b\w/g, (c) => c.toUpperCase()))
        .join(", ")
    : "the surrounding area";

  return [
    {
      question: `Do you serve businesses throughout ${city.name}?`,
      answer: `Yes. We work with businesses across all of ${city.name} — from established companies in established neighborhoods to new businesses just getting started. Distance from our Dacula office is rarely an issue; most of our work is done remotely with on-site visits when needed.`,
    },
    {
      question: `What services do you offer for ${city.name} businesses?`,
      answer: `Our seven core services — digital marketing, social media and content, website design, website hosting, software and app development, ad creation, and AI integration — are all available to ${city.name} businesses. Most clients start with one or two and add others as they see results.`,
    },
    {
      question: `Do you work with businesses in nearby areas like ${allNearby}?`,
      answer: `Yes. Our service area extends throughout the entire region, including ${allNearby} and other nearby communities. We have dedicated information for those areas as well — feel free to browse the area pages for specifics on each community.`,
    },
    {
      question: `How do I get started?`,
      answer: `Reach out through our contact form, give us a call at (770) 524-0488, or email Support@SimplyUsandU.com. We'll set up a free discovery call to understand your business, your goals, and whether we're the right fit. No high-pressure sales — just a conversation.`,
    },
  ];
}

/* ---------- County intro ---------- */
export function generateCountyIntro(county: County, cityNames: string[]): string {
  return `${county.fullName} — ${county.vibe}. We work with businesses throughout the county including ${cityNames
    .slice(0, 4)
    .join(", ")}${cityNames.length > 4 ? ", and more" : ""}. ${county.highlight}`;
}

/* ---------- Schema.org JSON-LD generators ---------- */

export function localBusinessSchema(
  pageUrl: string,
  city?: City,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Simply Us & U",
    url: pageUrl,
    telephone: "+17705240488",
    email: "Support@SimplyUsandU.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dacula",
      addressRegion: "GA",
      addressCountry: "US",
    },
    areaServed: city
      ? {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Georgia",
          },
        }
      : undefined,
    priceRange: "$$",
  };
}

export function faqPageSchema(faqs: FAQ[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ---------- Site URL helper ---------- */
export const SITE_URL = "https://simplyusandu.com";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

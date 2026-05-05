import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  counties,
  countyBySlug,
  allCountySlugs,
} from "@/data/counties";
import { cities, type City } from "@/data/cities";
import {
  SERVICE_SLUGS,
  SERVICES_META,
  absoluteUrl,
  localBusinessSchema,
  faqPageSchema,
  breadcrumbSchema,
  type ServiceSlug,
} from "@/lib/seo-helpers";
import { LocalHero } from "@/components/seo/local-hero";
import { LocalFAQs } from "@/components/seo/local-faqs";
import { NearbyAreas } from "@/components/seo/nearby-areas";
import { LocalCTA } from "@/components/seo/local-cta";

export function generateStaticParams() {
  const params: { county: string; service: string }[] = [];
  for (const county of allCountySlugs()) {
    for (const service of SERVICE_SLUGS) {
      params.push({ county, service });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string; service: string }>;
}): Promise<Metadata> {
  const { county: countySlug, service: serviceSlug } = await params;
  const county = countyBySlug(countySlug);
  const isValid = SERVICE_SLUGS.includes(serviceSlug as ServiceSlug);
  if (!county || !isValid) return { title: "Page Not Found" };
  const service = SERVICES_META[serviceSlug as ServiceSlug];
  const url = absoluteUrl(`/counties/${county.slug}/${service.slug}`);
  const title = `${service.name} in ${county.name}, GA`;
  const description = `${service.shortDescription} Serving businesses throughout ${county.fullName}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function CountyServicePage({
  params,
}: {
  params: Promise<{ county: string; service: string }>;
}) {
  const { county: countySlug, service: serviceSlug } = await params;
  const county = countyBySlug(countySlug);
  const isValid = SERVICE_SLUGS.includes(serviceSlug as ServiceSlug);
  if (!county || !isValid) notFound();
  const service = SERVICES_META[serviceSlug as ServiceSlug];
  const url = absoluteUrl(`/counties/${county.slug}/${service.slug}`);

  // Cities in county
  const countyCities = cities.filter((c) => c.county === county.slug);

  // FAQs — county-flavored generic FAQs
  const faqs = [
    {
      question: `Do you serve every city in ${county.name}?`,
      answer: `Yes — we work with businesses throughout ${county.name}, from larger markets to smaller communities. The work is delivered remotely with on-site visits when needed, regardless of which city in the county you're in.`,
    },
    {
      question: `What's different about ${service.shortNoun} for ${county.name} businesses?`,
      answer: `${county.name} has a unique mix of established and growing businesses. The fundamentals of strong ${service.shortNoun} are universal, but we tailor strategy to fit the local market — search behavior, competition, and the type of customer you're trying to reach.`,
    },
    {
      question: `Can I see examples of your work in the area?`,
      answer: `Yes. On a discovery call we'll walk through real examples of work we've done for businesses across the region. Some clients prefer their work stay private, but we have plenty of public examples we're happy to share.`,
    },
    {
      question: `How do I start?`,
      answer: `Reach out through our contact form, call (770) 524-0488, or email Support@SimplyUsandU.com. We'll set up a free discovery call to understand your business and goals.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(url)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Counties", url: absoluteUrl("/counties") },
              {
                name: county.name,
                url: absoluteUrl(`/counties/${county.slug}`),
              },
              { name: service.name, url },
            ]),
          ),
        }}
      />

      <LocalHero
        eyebrow={`${service.name} · ${county.fullName}`}
        heading={`${service.name} in ${county.name}`}
        description={service.shortDescription}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-[#D1D5DB]">
            We provide {service.shortNoun} for businesses throughout{" "}
            {county.fullName}. {county.vibe}, and we work with businesses across
            the entire county — large and small, new and established.
          </p>
          <p className="text-base leading-relaxed text-[#9CA3AF]">
            {county.highlight} Our team is based in Dacula, GA and we serve every
            community across the region with the same quality of work and the
            same hands-on approach.
          </p>
        </div>
      </section>

      {/* Cities in this county that get this service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            {service.name} for Cities Across {county.name}
          </h2>
          <p className="text-[#9CA3AF] text-center mb-10 max-w-xl mx-auto">
            We deliver {service.shortNoun} for businesses in every city across
            the county.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {countyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/areas/${c.slug}/${service.slug}`}
                className="group rounded-lg border border-white/[0.06] bg-[#111111] p-4 transition hover:border-[#F97316]/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors">
                    {service.name} in {c.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#F97316] shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All services for county */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Other Services in {county.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICE_SLUGS.filter((s) => s !== service.slug).map((s) => {
              const meta = SERVICES_META[s];
              return (
                <Link
                  key={s}
                  href={`/counties/${county.slug}/${s}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] p-4 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors">
                      {meta.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#9CA3AF] group-hover:text-[#F97316]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LocalFAQs
        heading={`${service.name} FAQs for ${county.name}`}
        faqs={faqs}
      />

      <NearbyAreas
        heading={`Cities We Serve in ${county.name}`}
        cities={countyCities as City[]}
        serviceSlug={service.slug}
      />

      <LocalCTA
        heading={`Get ${service.name} in ${county.name}`}
        description="Free discovery call. We'll learn about your business and show you exactly how we'd approach it."
        cityName={county.name}
      />
    </>
  );
}

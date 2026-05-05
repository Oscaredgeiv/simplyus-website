import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  cities,
  cityBySlug,
  currentPhaseCities,
  type City,
} from "@/data/cities";
import {
  SERVICE_SLUGS,
  SERVICES_META,
  generateCityServiceIntro,
  generateCityContext,
  generateWhyLocal,
  generateCityServiceFAQs,
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
import { subServicesByParent } from "@/data/sub-services";

/* Phased rollout — controlled by CURRENT_PHASE in cities.ts */
export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of currentPhaseCities()) {
    for (const service of SERVICE_SLUGS) {
      params.push({ city: city.slug, service });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = cityBySlug(citySlug);
  const isValidService = SERVICE_SLUGS.includes(serviceSlug as ServiceSlug);
  if (!city || !isValidService) return { title: "Page Not Found" };
  const service = SERVICES_META[serviceSlug as ServiceSlug];
  const url = absoluteUrl(`/areas/${city.slug}/${service.slug}`);
  const title = `${service.name} in ${city.name}, GA`;
  const description = `Local ${service.shortNoun} for ${city.name} businesses. ${service.shortDescription} Based in Dacula, serving ${city.name} and surrounding areas.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = cityBySlug(citySlug);
  const isValidService = SERVICE_SLUGS.includes(serviceSlug as ServiceSlug);
  if (!city || !isValidService) notFound();
  const service = SERVICES_META[serviceSlug as ServiceSlug];

  const intro = generateCityServiceIntro(city, service);
  const cityContext = generateCityContext(city);
  const whyLocal = generateWhyLocal(city, service);
  const faqs = generateCityServiceFAQs(city, service);
  const url = absoluteUrl(`/areas/${city.slug}/${service.slug}`);

  // Nearby cities (with link to same service)
  const nearbyCities = city.nearby
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is City => Boolean(c));

  // Subservices under this service (cross-link)
  const subs = subServicesByParent(service.slug);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(url, city)),
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
              { name: "Service Areas", url: absoluteUrl("/areas") },
              { name: city.name, url: absoluteUrl(`/areas/${city.slug}`) },
              { name: service.name, url },
            ]),
          ),
        }}
      />

      <LocalHero
        eyebrow={`${service.name} · ${city.name}, GA`}
        heading={`${service.name} in ${city.name}, GA`}
        description={service.shortDescription}
      />

      {/* Localized intro + context */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-[#D1D5DB]">{intro}</p>
          <p className="text-base leading-relaxed text-[#9CA3AF]">
            {cityContext}
          </p>
        </div>
      </section>

      {/* Why local */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0E0E10] border-y border-white/[0.06]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Why a Local Team Matters
          </h2>
          <p className="text-base leading-relaxed text-[#9CA3AF]">{whyLocal}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            What's Included
          </h2>
          <p className="text-[#9CA3AF] text-center mb-10 max-w-xl mx-auto">
            Every {service.name.toLowerCase()} engagement is tailored, but here's
            what most {city.name} clients get when they work with us.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {subs.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/${service.slug}/${sub.slug}`}
                className="group rounded-lg border border-white/[0.06] bg-[#111111] p-5 transition hover:border-[#F97316]/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-[#F97316] transition-colors">
                      {sub.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#9CA3AF] leading-relaxed">
                      {sub.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#F97316] mt-1 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-white transition-colors"
            >
              View full {service.name} service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <LocalFAQs
        heading={`${service.name} FAQs for ${city.name}`}
        subhead={`Common questions ${city.name} businesses ask before getting started.`}
        faqs={faqs}
      />

      {/* Other services in this city */}
      <section className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Other Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICE_SLUGS.filter((s) => s !== service.slug).map((s) => {
              const meta = SERVICES_META[s];
              return (
                <Link
                  key={s}
                  href={`/areas/${city.slug}/${s}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] p-4 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors">
                      {meta.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#9CA3AF] group-hover:text-[#F97316] transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <NearbyAreas
        heading={`${service.name} in Nearby Areas`}
        cities={nearbyCities}
        serviceSlug={service.slug}
      />

      {/* CTA */}
      <LocalCTA
        heading={`Ready for ${service.name} in ${city.name}?`}
        description="Free discovery call. No high-pressure sales. Just a conversation about whether we're the right fit."
        cityName={city.name}
      />
    </>
  );
}

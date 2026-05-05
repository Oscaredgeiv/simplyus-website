import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  cities,
  cityBySlug,
  priorityCities,
  type City,
} from "@/data/cities";
import { countyBySlug } from "@/data/counties";
import {
  generateCityPageIntro,
  generateCityFAQs,
  absoluteUrl,
  localBusinessSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo-helpers";
import { LocalHero } from "@/components/seo/local-hero";
import { LocalFAQs } from "@/components/seo/local-faqs";
import { ServiceMiniGrid } from "@/components/seo/service-mini-grid";
import { NearbyAreas } from "@/components/seo/nearby-areas";
import { LocalCTA } from "@/components/seo/local-cta";

/* ───────────────── Phase 1: Tier-1 cities only ───────────────── */
export function generateStaticParams() {
  return priorityCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cityBySlug(citySlug);
  if (!city) return { title: "Area Not Found" };
  const url = absoluteUrl(`/areas/${city.slug}`);
  const title = `Digital Marketing, Web Design & Software in ${city.name}, GA`;
  const description = `Simply Us & U serves ${city.name}, GA with digital marketing, web design, hosting, software development, and AI integration. Local team based in Dacula, GA.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cityBySlug(citySlug);
  if (!city) notFound();

  const county = countyBySlug(city.county);
  const intro = generateCityPageIntro(city);
  const faqs = generateCityFAQs(city);
  const url = absoluteUrl(`/areas/${city.slug}`);

  // Find nearby cities
  const nearbyCities = city.nearby
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is City => Boolean(c));

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
              { name: city.name, url },
            ]),
          ),
        }}
      />

      <LocalHero
        eyebrow={`Serving ${city.name}, GA`}
        heading={`Digital Marketing & Web Design in ${city.name}`}
        description={`We help ${city.name} businesses grow with marketing, design, hosting, software, and AI — all from one local team.`}
      />

      {/* Local intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-invert">
          <p className="text-lg leading-relaxed text-[#D1D5DB]">{intro}</p>
          {city.neighborhoods.length > 0 && (
            <p className="text-base leading-relaxed text-[#9CA3AF] mt-6">
              From {city.neighborhoods.slice(0, -1).join(", ")}
              {city.neighborhoods.length > 1 ? " and " : ""}
              {city.neighborhoods[city.neighborhoods.length - 1]} to the surrounding
              area, we help local businesses build a stronger digital presence — and
              earn the customers they're competing for.
            </p>
          )}
          {county && (
            <p className="text-base leading-relaxed text-[#9CA3AF] mt-4">
              {city.name} is part of{" "}
              <Link
                href={`/counties/${county.slug}`}
                className="text-[#F97316] hover:text-white transition-colors underline underline-offset-4"
              >
                {county.fullName}
              </Link>
              , one of the regions we serve across northeast Georgia.
            </p>
          )}
        </div>
      </section>

      {/* All services for this city */}
      <ServiceMiniGrid
        heading={`Our Services in ${city.name}`}
        intro={`Click any service to learn more about how we deliver it for ${city.name} businesses.`}
        citySlug={city.slug}
      />

      {/* FAQs */}
      <LocalFAQs
        heading={`${city.name} FAQs`}
        subhead="Common questions from businesses in the area."
        faqs={faqs}
      />

      {/* Nearby areas */}
      <NearbyAreas heading="Other Areas We Serve" cities={nearbyCities} />

      {/* CTA */}
      <LocalCTA
        heading={`Ready to grow your ${city.name} business?`}
        description={`Let's set up a free discovery call. We'll learn about your business and show you exactly how we'd approach it.`}
        cityName={city.name}
      />
    </>
  );
}

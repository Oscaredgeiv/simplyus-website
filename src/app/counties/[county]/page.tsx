import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  counties,
  countyBySlug,
  allCountySlugs,
} from "@/data/counties";
import { cities, type City } from "@/data/cities";
import {
  generateCountyIntro,
  absoluteUrl,
  localBusinessSchema,
  breadcrumbSchema,
} from "@/lib/seo-helpers";
import { LocalHero } from "@/components/seo/local-hero";
import { ServiceMiniGrid } from "@/components/seo/service-mini-grid";
import { NearbyAreas } from "@/components/seo/nearby-areas";
import { LocalCTA } from "@/components/seo/local-cta";

export function generateStaticParams() {
  return allCountySlugs().map((county) => ({ county }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const { county: countySlug } = await params;
  const county = countyBySlug(countySlug);
  if (!county) return { title: "County Not Found" };
  const url = absoluteUrl(`/counties/${county.slug}`);
  const title = `Digital Marketing & Web Design Across ${county.name}`;
  const description = `Simply Us & U serves businesses across ${county.fullName} with digital marketing, web design, hosting, software development, and AI integration.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const { county: countySlug } = await params;
  const county = countyBySlug(countySlug);
  if (!county) notFound();

  // Get cities in this county
  const countyCities = cities.filter((c) => c.county === county.slug);
  const cityNames = countyCities.map((c) => c.name);
  const intro = generateCountyIntro(county, cityNames);
  const url = absoluteUrl(`/counties/${county.slug}`);

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
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Counties", url: absoluteUrl("/counties") },
              { name: county.name, url },
            ]),
          ),
        }}
      />

      <LocalHero
        eyebrow={`Serving ${county.fullName}`}
        heading={`${county.name} Digital Agency`}
        description={`Marketing, design, hosting, software, and AI for businesses across ${county.fullName}. One local team, end-to-end services.`}
      />

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[#D1D5DB]">{intro}</p>
        </div>
      </section>

      {/* Services grid */}
      <ServiceMiniGrid
        heading={`Services Across ${county.name}`}
        intro={`Click any service to see how it's delivered for businesses across ${county.name}.`}
        countySlug={county.slug}
      />

      {/* Cities in this county */}
      <NearbyAreas
        heading={`Cities We Serve in ${county.name}`}
        cities={countyCities as City[]}
      />

      {/* Other counties */}
      <section className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Other Counties We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {counties
              .filter((c) => c.slug !== county.slug)
              .map((c) => (
                <a
                  key={c.slug}
                  href={`/counties/${c.slug}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 text-center transition hover:border-[#F97316]/30"
                >
                  <span className="text-sm font-medium text-white group-hover:text-[#F97316] transition-colors">
                    {c.name}
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>

      <LocalCTA
        heading={`Working in ${county.name}?`}
        description={`Let's chat about how we can help your ${county.name} business grow.`}
        cityName={county.name}
      />
    </>
  );
}

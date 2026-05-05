import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  subServices,
  subServiceBySlug,
  subServicesByParent,
} from "@/data/sub-services";
import {
  SERVICE_SLUGS,
  SERVICES_META,
  absoluteUrl,
  faqPageSchema,
  breadcrumbSchema,
  type ServiceSlug,
} from "@/lib/seo-helpers";
import { priorityCities } from "@/data/cities";
import { LocalHero } from "@/components/seo/local-hero";
import { LocalFAQs } from "@/components/seo/local-faqs";
import { NearbyAreas } from "@/components/seo/nearby-areas";
import { LocalCTA } from "@/components/seo/local-cta";

export function generateStaticParams() {
  return subServices.map((sub) => ({
    service: sub.parentSlug,
    subservice: sub.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; subservice: string }>;
}): Promise<Metadata> {
  const { service, subservice } = await params;
  const sub = subServiceBySlug(subservice);
  if (!sub || sub.parentSlug !== service) return { title: "Page Not Found" };
  const url = absoluteUrl(`/services/${service}/${sub.slug}`);
  const title = sub.title;
  const description = sub.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ service: string; subservice: string }>;
}) {
  const { service: parentSlug, subservice: subSlug } = await params;
  const sub = subServiceBySlug(subSlug);
  if (!sub || sub.parentSlug !== parentSlug) notFound();

  const isValidParent = SERVICE_SLUGS.includes(parentSlug as ServiceSlug);
  if (!isValidParent) notFound();
  const parent = SERVICES_META[parentSlug as ServiceSlug];

  const url = absoluteUrl(`/services/${parentSlug}/${sub.slug}`);

  // Sibling subservices (same parent)
  const siblings = subServicesByParent(parentSlug).filter(
    (s) => s.slug !== sub.slug,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(sub.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Services", url: absoluteUrl("/services") },
              {
                name: parent.name,
                url: absoluteUrl(`/services/${parentSlug}`),
              },
              { name: sub.title, url },
            ]),
          ),
        }}
      />

      <LocalHero
        eyebrow={`${parent.name} · ${sub.title}`}
        heading={sub.title}
        description={sub.shortDescription}
      />

      {/* Long description */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[#D1D5DB]">
            {sub.longDescription}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0E0E10] border-y border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            What You Get
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {sub.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-white/[0.06] bg-[#111111] p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            How We Approach It
          </h2>
          <p className="text-[#9CA3AF] text-center mb-12 max-w-xl mx-auto">
            A reliable process from kickoff to ongoing optimization.
          </p>
          <div className="space-y-4">
            {sub.process.map((step) => (
              <div
                key={step.num}
                className="rounded-lg border border-white/[0.06] bg-[#111111] p-5 flex gap-4"
              >
                <span className="text-2xl font-bold text-[#F97316] shrink-0 w-12">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#9CA3AF] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <LocalFAQs heading="Frequently Asked Questions" faqs={sub.faqs} />

      {/* Sibling subservices */}
      {siblings.length > 0 && (
        <section className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              Related to {parent.name}
            </h2>
            <p className="text-[#9CA3AF] text-center mb-10 max-w-xl mx-auto">
              Other services under {parent.name}.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${parentSlug}/${s.slug}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] p-4 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors">
                      {s.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#9CA3AF] group-hover:text-[#F97316] transition-colors shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href={`/services/${parentSlug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-white transition-colors"
              >
                Back to {parent.name} overview
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Priority cities for cross-link */}
      <NearbyAreas
        heading={`Available in These Areas`}
        cities={priorityCities()}
        serviceSlug={parentSlug}
      />

      <LocalCTA
        heading={`Get started with ${sub.title}`}
        description="Free discovery call. We'll talk about what you need and how we'd approach it."
      />
    </>
  );
}

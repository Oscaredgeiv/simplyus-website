import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { citiesByTier } from "@/data/cities";
import { counties } from "@/data/counties";
import { absoluteUrl } from "@/lib/seo-helpers";
import { LocalCTA } from "@/components/seo/local-cta";

export const metadata: Metadata = {
  title: "Service Areas — Northeast Georgia",
  description:
    "Simply Us & U serves businesses across northeast Georgia, from Dacula to Athens to North Fulton. Browse all the cities and counties we work in.",
  alternates: { canonical: absoluteUrl("/areas") },
};

export default function AreasIndexPage() {
  const tier1 = citiesByTier(1);
  const tier2 = citiesByTier(2);
  const tier3 = citiesByTier(3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            Service Areas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Serving Northeast Georgia
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            We're based in Dacula, GA and serve businesses throughout the
            metro Atlanta and northeast Georgia area. Click any city below to
            see services, FAQs, and details specific to your location.
          </p>
        </div>
      </section>

      {/* Counties */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Browse by County
          </h2>
          <p className="text-[#9CA3AF] text-center mb-8 max-w-xl mx-auto">
            Working across multiple cities? Browse our county pages.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {counties.map((c) => (
              <Link
                key={c.slug}
                href={`/counties/${c.slug}`}
                className="group rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 text-center transition hover:border-[#F97316]/30"
              >
                <span className="text-sm font-semibold text-white group-hover:text-[#F97316] transition-colors">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 1 (priority) */}
      {tier1.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Primary Service Areas
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-2xl">
              Cities where we have the deepest local presence and the most
              experience working with businesses.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier1.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] p-5 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="flex items-center gap-2 text-base font-semibold text-white group-hover:text-[#F97316] transition-colors">
                        <MapPin className="h-4 w-4 text-[#F97316] shrink-0" />
                        {c.name}, GA
                      </h3>
                      <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                        {c.vibe.charAt(0).toUpperCase() + c.vibe.slice(1)}.
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#F97316] shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 2 */}
      {tier2.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Other Cities We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {tier2.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white group-hover:text-[#F97316] transition-colors">
                      {c.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF] group-hover:text-[#F97316]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 3 */}
      {tier3.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Extended Service Area
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-2xl">
              Cities within our broader service radius. We serve these markets
              regularly with the same quality and approach.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {tier3.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="group rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 transition hover:border-[#F97316]/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white group-hover:text-[#F97316] transition-colors">
                      {c.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF] group-hover:text-[#F97316]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LocalCTA
        heading={`Don't see your area?`}
        description={`We work with businesses throughout northeast Georgia. Reach out and we'll let you know if we can help.`}
      />
    </>
  );
}


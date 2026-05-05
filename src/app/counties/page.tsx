import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { counties } from "@/data/counties";
import { cities } from "@/data/cities";
import { absoluteUrl } from "@/lib/seo-helpers";
import { LocalCTA } from "@/components/seo/local-cta";

export const metadata: Metadata = {
  title: "Counties We Serve — Northeast Georgia",
  description:
    "Simply Us & U serves businesses across Gwinnett, Hall, Jackson, Barrow, and Walton counties in Georgia. Find your county and the services we offer there.",
  alternates: { canonical: absoluteUrl("/counties") },
};

export default function CountiesIndexPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            Counties Served
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Northeast Georgia Counties
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Serving businesses across the counties most central to our service
            area. Pick your county below to see cities, services, and the way
            we approach work in your region.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((c) => {
              const cityCount = cities.filter((city) => city.county === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/counties/${c.slug}`}
                  className="group flex flex-col rounded-xl border border-white/[0.06] bg-[#111111] p-6 transition hover:border-[#F97316]/30 hover:bg-[#161616]"
                >
                  <h2 className="flex items-center gap-2 text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-3">
                    <MapPin className="h-4 w-4 text-[#F97316] shrink-0" />
                    {c.fullName}
                  </h2>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                    {c.vibe.charAt(0).toUpperCase() + c.vibe.slice(1)}.
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                    <span>{cityCount} cities served</span>
                    <span className="inline-flex items-center gap-1 text-[#F97316] font-semibold">
                      View county <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LocalCTA
        heading="Looking for service in your area?"
        description="Don't see your county? We probably still serve it. Reach out and let's talk."
      />
    </>
  );
}

import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Concepts CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Explore 8 Website Concepts
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We designed 8 completely unique visual directions — each with its own
            palette, typography, layout, and personality. See them all and pick
            your favorite.
          </p>
          <Link
            href="/concepts"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-10 text-lg font-semibold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
          >
            Browse All 8 Concepts →
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    id: "01",
    name: "Velocity Growth Engine",
    slug: "velocity",
    headline: "SOCIAL MEDIA. DIGITAL MARKETING. AUTOMATION.",
    description: "Speed and data-driven. Metric counters, split-layout services, and a relentless focus on ROI.",
    stats: "100+ Clients · 312% Avg ROI",
  },
  {
    id: "02",
    name: "Clarity Studio",
    slug: "clarity",
    headline: "STRATEGY. EXECUTION. RESULTS.",
    description: "Clean and focused. Emphasizes simplicity, retention, and long-term brand partnerships.",
    stats: "50+ Brands · 100% Retention",
  },
  {
    id: "03",
    name: "The Forge",
    slug: "forge",
    headline: "MARKETING. OPERATIONS. GROWTH.",
    description: "Industrial power. Bold copy, heavy metrics, and a no-nonsense approach to scaling businesses.",
    stats: "200+ Campaigns · 10M+ Revenue",
  },
  {
    id: "04",
    name: "Signal Flow",
    slug: "signal",
    headline: "CONTENT. CAMPAIGNS. CONVERSIONS.",
    description: "Precision-tuned. Data dashboards, signal mapping, and conversion-optimized workflows.",
    stats: "500+ Campaigns · 3.8x ROAS",
  },
  {
    id: "05",
    name: "Orbit System",
    slug: "orbit",
    headline: "LAUNCH. SCALE. DOMINATE.",
    description: "Mission-control energy. 360° service coverage with satellite-precision campaign monitoring.",
    stats: "100+ Brands · 24/7 Monitoring",
  },
  {
    id: "06",
    name: "Canvas Collective",
    slug: "canvas",
    headline: "CREATE. CONNECT. CONVERT.",
    description: "Creative firepower. Bold visuals, massive reach, and engagement-first strategies.",
    stats: "1000+ Posts · 50M+ Reach",
  },
  {
    id: "07",
    name: "Greenfield Growth",
    slug: "greenfield",
    headline: "PLANT. NURTURE. HARVEST.",
    description: "Organic growth philosophy. Patient strategy, deep roots, and compounding returns.",
    stats: "300% Growth · 60+ Clients",
  },
  {
    id: "08",
    name: "Nexus Command",
    slug: "nexus",
    headline: "PLAN. EXECUTE. WIN.",
    description: "Command-center precision. On-time delivery, tech integrations, and enterprise-grade execution.",
    stats: "99.7% On-Time · 150+ Projects",
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#E8811A" }}>
              Simply Us & You
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#E8811A" }}>
              Website Design Presentation
            </span>
            <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              8 Unique{" "}
              <span style={{ color: "#E8811A" }}>Concepts</span>
            </h1>
            <div className="mx-auto mt-3 h-1 w-16" style={{ backgroundColor: "#E8811A" }} />
            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Each concept features the same dark, premium aesthetic with a unique tone, headline, and copy direction.
              Click any card to view the full mockup page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/concepts/${concept.slug}`}
                  className="group relative block border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-[#E8811A]/40"
                  style={{ backgroundColor: "#111111" }}
                >
                  {/* Number + Name Row */}
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-extrabold" style={{ color: "#E8811A" }}>
                      {concept.id}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#E8811A] transition-colors sm:text-xl">
                        {concept.name}
                      </h2>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#E8811A" }}>
                        {concept.headline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {concept.description}
                  </p>

                  {/* Stats + Arrow */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {concept.stats}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#E8811A] transition-colors">
                      View
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Simply Us & You. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

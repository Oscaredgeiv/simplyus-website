"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    id: "01",
    name: "Velocity Growth Engine",
    slug: "velocity",
    headline: "DIGITAL MARKETING. CONTENT. DEVELOPMENT.",
    description:
      "Speed and data-driven. Metric counters, split-layout services, and a relentless focus on ROI.",
    stats: "100+ Clients · 312% Avg ROI",
  },
  {
    id: "02",
    name: "Clarity Studio",
    slug: "clarity",
    headline: "STRATEGY. EXECUTION. RESULTS.",
    description:
      "Clean and focused. Emphasizes simplicity, retention, and long-term brand partnerships.",
    stats: "50+ Brands · 100% Retention",
  },
  {
    id: "03",
    name: "The Forge",
    slug: "forge",
    headline: "MARKETING. DESIGN. DEVELOPMENT.",
    description:
      "Industrial power. Bold copy, heavy metrics, and a no-nonsense approach to scaling businesses.",
    stats: "200+ Campaigns · 10M+ Revenue",
  },
  {
    id: "04",
    name: "Signal Flow",
    slug: "signal",
    headline: "CONTENT. CAMPAIGNS. CONVERSIONS.",
    description:
      "Precision-tuned. Data dashboards, signal mapping, and conversion-optimized workflows.",
    stats: "500+ Campaigns · 3.8x ROAS",
  },
  {
    id: "05",
    name: "Orbit System",
    slug: "orbit",
    headline: "LAUNCH. SCALE. DOMINATE.",
    description:
      "Mission-control energy. 360° service coverage with satellite-precision campaign monitoring.",
    stats: "100+ Brands · 24/7 Monitoring",
  },
  {
    id: "06",
    name: "Canvas Collective",
    slug: "canvas",
    headline: "CREATE. CONNECT. CONVERT.",
    description:
      "Creative firepower. Bold visuals, massive reach, and engagement-first strategies.",
    stats: "1000+ Posts · 50M+ Reach",
  },
  {
    id: "07",
    name: "Greenfield Growth",
    slug: "greenfield",
    headline: "PLANT. NURTURE. HARVEST.",
    description:
      "Organic growth philosophy. Patient strategy, deep roots, and compounding returns.",
    stats: "300% Growth · 60+ Clients",
  },
  {
    id: "08",
    name: "Nexus Command",
    slug: "nexus",
    headline: "PLAN. EXECUTE. WIN.",
    description:
      "Command-center precision. On-time delivery, tech integrations, and enterprise-grade execution.",
    stats: "99.7% On-Time · 150+ Projects",
  },
];

export default function ConceptsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#0B0B0D" }}>
      {/* ── Ambient logo watermark (brand-enforcer compliant) ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/logo-transparent.png"
          alt=""
          aria-hidden="true"
          className="absolute -bottom-32 -right-24 w-[700px] select-none opacity-[0.035]"
          style={{ filter: "blur(28px)" }}
        />
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(11,11,13,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-[13px] font-medium text-[#9CA3AF] transition-colors hover:text-white"
          >
            ← Home
          </Link>
          <img
            src="/logo-transparent.png"
            alt="Simply Us & U"
            className="h-9"
          />
          <div className="w-12" /> {/* spacer for center alignment */}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 pb-20 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#F97316" }}
            >
              Website Design Presentation
            </p>

            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#E5E7EB]">
              8 Unique Concepts
            </h1>

            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#9CA3AF]">
              Each direction features a distinct tone, headline, and copy
              strategy — built on the same dark, premium foundation. Select one
              to view the full mockup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="relative z-10 pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {concepts.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
              >
                <Link
                  href={`/concepts/${c.slug}`}
                  className="group relative flex flex-col justify-between rounded-lg border border-white/[0.06] p-7 transition-all duration-300 hover:border-[#F97316]/30 hover:bg-white/[0.02]"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  {/* Top row: number + title */}
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-[32px] font-bold leading-none tabular-nums"
                        style={{ color: "#F97316" }}
                      >
                        {c.id}
                      </span>
                      <h2 className="text-[17px] font-semibold tracking-wide text-[#E5E7EB] transition-colors group-hover:text-[#F97316]">
                        {c.name}
                      </h2>
                    </div>

                    <p
                      className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em]"
                      style={{ color: "#F97316", opacity: 0.7 }}
                    >
                      {c.headline}
                    </p>

                    <p className="mt-3 text-[14px] leading-relaxed text-[#9CA3AF]">
                      {c.description}
                    </p>
                  </div>

                  {/* Bottom row: stats + link */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.04] pt-4">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#6B7280]">
                      {c.stats}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#F97316]">
                      View
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.04] py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-[13px] text-[#6B7280]">
            © {new Date().getFullYear()} Simply Us & U. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

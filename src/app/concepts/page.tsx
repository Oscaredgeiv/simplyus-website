"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    id: "01",
    name: "Velocity Growth Engine",
    slug: "velocity",
    style: "Dark SaaS Dashboard",
    description: "Kinetic, metric-driven design inspired by Linear and Vercel. Electric blue on void black with animated counters and glass-morphism cards.",
    colors: ["#0A0A0F", "#3B82F6", "#8B5CF6", "#111118"],
    mood: "Fast · Data-Driven · Technical",
  },
  {
    id: "02",
    name: "Clarity Studio",
    slug: "clarity",
    style: "Light Editorial",
    description: "Warm editorial design inspired by Stripe and Notion. Generous whitespace, serif headlines, coral and sage accents on cream backgrounds.",
    colors: ["#FAFAF8", "#E07A5F", "#81B29A", "#2C2825"],
    mood: "Calm · Organized · Refined",
  },
  {
    id: "03",
    name: "The Forge",
    slug: "forge",
    style: "Industrial Brutalist",
    description: "Bold industrial aesthetic inspired by Figma and Ramp. Electric orange on black with geometric shapes and heavy typographic weight.",
    colors: ["#0A0A0A", "#FF5E1A", "#FFB800", "#F0F0F0"],
    mood: "Bold · Engineered · Confident",
  },
  {
    id: "04",
    name: "Signal Flow",
    slug: "signal",
    style: "Data Command Center",
    description: "Dashboard aesthetic inspired by Datadog and Amplitude. Cyan and violet glassmorphism on deep indigo with floating metric readouts.",
    colors: ["#0F0B2E", "#00D4FF", "#8B5CF6", "#10B981"],
    mood: "Measured · Analytical · Precise",
  },
  {
    id: "05",
    name: "Orbit System",
    slug: "orbit",
    style: "Space-Tech Futuristic",
    description: "Cosmic aesthetic with orbital animations, plasma violet and ion cyan on void backgrounds. Star-field particles and glassmorphism panels.",
    colors: ["#0A0E27", "#6C2BD9", "#00D4FF", "#FF6B35"],
    mood: "Futuristic · Cosmic · Ambitious",
  },
  {
    id: "06",
    name: "Canvas Collective",
    slug: "canvas",
    style: "Creative Agency Editorial",
    description: "Asymmetric editorial design with sharp edges, signal red accents, oversized typography, and large decorative numbers. Zero border-radius.",
    colors: ["#F5F0EB", "#1A1A1A", "#E63B2E", "#8A8580"],
    mood: "Artistic · Sophisticated · Bold",
  },
  {
    id: "07",
    name: "Greenfield Growth",
    slug: "greenfield",
    style: "Organic & Warm",
    description: "Nature-inspired design with sage greens, warm cream, and terracotta. Soft rounded corners, wave dividers, and growth metaphors throughout.",
    colors: ["#FBF8F0", "#6B8F5E", "#C4704B", "#2D5016"],
    mood: "Sustainable · Trusting · Grounded",
  },
  {
    id: "08",
    name: "Nexus Command",
    slug: "nexus",
    style: "Terminal Command Center",
    description: "Enterprise command center with monospace typography, signal green on void black, dot-grid backgrounds, and system status indicators.",
    colors: ["#0A0A0A", "#00FF88", "#FFB800", "#E5E5E5"],
    mood: "Enterprise · Rigorous · Systematic",
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <span className="text-sm font-mono text-gray-500">Simply Us & You</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
              8 Unique Concepts
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Website Design
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Concepts
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              Each concept is a fully distinct visual direction — different color palette,
              typography, layout, animation style, and brand personality. Click any card
              to view the full mockup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/concepts/${concept.slug}`}
                  className="group relative block rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  {/* Number + Badge */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {concept.id}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-400">
                      {concept.style}
                    </span>
                  </div>

                  {/* Name */}
                  <h2 className="mt-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors sm:text-2xl">
                    {concept.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {concept.description}
                  </p>

                  {/* Color Swatches */}
                  <div className="mt-5 flex items-center gap-2">
                    {concept.colors.map((color, i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border border-white/10"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-500">{concept.mood}</span>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-indigo-400 transition-colors">
                    View Mockup
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

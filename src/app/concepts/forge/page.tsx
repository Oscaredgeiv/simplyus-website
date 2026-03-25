"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, BarChart3, Megaphone, Settings, CheckSquare } from "lucide-react";

/* ─── palette ─── */
const C = {
  bg: "#0A0A0A",
  steel: "#141414",
  graphite: "#1E1E1E",
  ash: "#6B6B6B",
  cloud: "#F0F0F0",
  orange: "#FF5E1A",
  amber: "#FFB800",
};

/* ─── reusable scroll-reveal wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── services data ─── */
const services = [
  { icon: Megaphone, title: "SOCIAL MEDIA MANAGEMENT", desc: "Strategic content creation, community management, and platform growth engineered for maximum impact across every channel." },
  { icon: BarChart3, title: "DIGITAL MARKETING", desc: "Data-driven campaigns across paid, organic, and email channels. Every dollar tracked, every conversion counted." },
  { icon: Settings, title: "OPERATIONAL SYSTEMS", desc: "Backend workflows, automations, and SOPs that eliminate bottleneck and scale with your ambition." },
  { icon: Shield, title: "BRAND STRATEGY", desc: "Identity systems, messaging frameworks, and positioning that make your brand impossible to ignore." },
];

/* ─── process steps ─── */
const steps = [
  { num: "01", label: "AUDIT", desc: "Deep-dive analysis of your current digital footprint, gaps, and competitive landscape." },
  { num: "02", label: "ARCHITECT", desc: "Custom strategy blueprints with clear timelines, KPIs, and deliverable roadmaps." },
  { num: "03", label: "DEPLOY", desc: "Rapid execution across all channels with real-time monitoring and iteration." },
  { num: "04", label: "OPTIMIZE", desc: "Continuous refinement driven by performance data and emerging opportunities." },
];

/* ─── testimonials ─── */
const testimonials = [
  { quote: "SimplyUs&U didn't just rebrand us — they rebuilt our entire digital infrastructure from the ground up.", author: "Morgan T.", role: "CEO, Helix Ventures" },
  { quote: "The results speak for themselves: 340% growth in qualified leads within six months.", author: "Priya S.", role: "Marketing Director, Arcline" },
  { quote: "Finally, a team that treats operational efficiency with the same seriousness as creative output.", author: "James K.", role: "Founder, Stonebridge Co." },
];

export default function ForgeConcept() {
  return (
    <div style={{ background: C.bg, color: C.cloud, fontFamily: "system-ui, -apple-system, sans-serif" }} className="min-h-screen">

      {/* ── back link ── */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/concepts" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color: C.ash, fontFamily: "monospace" }}>
          <ArrowLeft size={14} /> Back to Concepts
        </Link>
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden">
        {/* decorative geometries */}
        <div className="absolute top-16 right-12 w-32 h-32 border-4 opacity-10 hidden lg:block" style={{ borderColor: C.orange }} />
        <div className="absolute bottom-24 left-8 w-16 h-64 opacity-5 hidden lg:block" style={{ background: C.amber }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-1 opacity-10 hidden lg:block" style={{ background: C.orange }} />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-44 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: C.orange, fontFamily: "monospace" }}
          >
            Concept 03 — The Forge
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-4xl"
          >
            We don&apos;t just manage your digital presence.{" "}
            <span style={{ color: C.orange }}>We forge it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: C.ash }}
          >
            Social media management, digital marketing, and operational systems engineered to outlast trends and outperform benchmarks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-[3px] transition-colors duration-300 hover:bg-[#FF5E1A] hover:text-black"
              style={{ borderColor: C.orange, color: C.orange, background: "transparent" }}
            >
              Start Building
            </button>
            <button
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-[3px] transition-colors duration-300 hover:bg-white/10"
              style={{ borderColor: C.ash, color: C.ash }}
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section style={{ background: C.steel }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.orange, fontFamily: "monospace" }}>What We Build</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">Core Capabilities</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div
                  className="p-8 border-l-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: C.graphite, borderLeftColor: C.orange }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <s.icon size={22} style={{ color: C.orange }} />
                    <h3 className="text-sm font-bold tracking-widest" style={{ fontFamily: "monospace" }}>{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.ash }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.amber, fontFamily: "monospace" }}>The Method</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">How We Work</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.12}>
                <div className="relative">
                  <span className="text-7xl md:text-8xl font-black opacity-10 absolute -top-6 -left-2 select-none" style={{ color: C.orange }}>
                    {s.num}
                  </span>
                  <div className="relative z-10 pt-12">
                    <div className="w-12 h-1 mb-4" style={{ background: C.orange }} />
                    <h3 className="text-lg font-extrabold tracking-widest mb-3" style={{ fontFamily: "monospace" }}>{s.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.ash }}>{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight size={18} className="hidden lg:block absolute top-16 -right-5" style={{ color: C.ash, opacity: 0.3 }} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section style={{ background: C.steel }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.orange, fontFamily: "monospace" }}>Proof of Work</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">Client Testimonials</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <div className="p-8 h-full flex flex-col justify-between" style={{ background: C.graphite }}>
                  <div>
                    <div className="w-8 h-1 mb-6" style={{ background: C.amber }} />
                    <p className="text-sm leading-relaxed mb-8" style={{ color: C.cloud }}>&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.author}</p>
                    <p className="text-xs mt-1" style={{ color: C.ash, fontFamily: "monospace" }}>{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ METRICS BAR ══════════════ */}
      <section className="py-16 border-y" style={{ borderColor: C.graphite }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "150+", label: "Clients Served" },
              { val: "340%", label: "Avg. Lead Growth" },
              { val: "98%", label: "Retention Rate" },
              { val: "2.4M+", label: "Impressions / Mo" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div>
                  <p className="text-3xl md:text-4xl font-black" style={{ color: C.orange }}>{m.val}</p>
                  <p className="text-xs tracking-widest uppercase mt-2" style={{ color: C.ash, fontFamily: "monospace" }}>{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.orange} 0px, ${C.orange} 1px, transparent 1px, transparent 60px)` }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to build something{" "}
              <span style={{ color: C.amber }}>unbreakable?</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: C.ash }}>
              Book a free strategy session and get a custom blueprint for your brand&apos;s next chapter.
            </p>
            <button
              className="px-10 py-5 text-sm font-bold tracking-widest uppercase border-[3px] transition-colors duration-300 hover:text-black"
              style={{ borderColor: C.orange, color: C.cloud, background: C.orange }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.amber; e.currentTarget.style.borderColor = C.amber; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.borderColor = C.orange; }}
            >
              Book Your Strategy Call <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{ background: C.steel }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-extrabold mb-3">SimplyUs&amp;U</h3>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.ash }}>
                Digital management, marketing, and operations — forged for businesses that refuse to settle.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ fontFamily: "monospace", color: C.orange }}>Services</h4>
              <ul className="space-y-2 text-sm" style={{ color: C.ash }}>
                <li className="hover:text-white transition-colors cursor-pointer">Social Media</li>
                <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Operations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Brand Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ fontFamily: "monospace", color: C.orange }}>Connect</h4>
              <ul className="space-y-2 text-sm" style={{ color: C.ash }}>
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">Email Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: C.graphite }}>
            <p className="text-xs" style={{ color: C.ash, fontFamily: "monospace" }}>&copy; 2026 SimplyUs&amp;U. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: C.ash }}>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

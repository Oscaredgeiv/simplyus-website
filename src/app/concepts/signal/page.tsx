"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Activity, Radio, Zap, TrendingUp, BarChart2, Wifi } from "lucide-react";

/* ─── palette ─── */
const C = {
  bg: "#0F0B2E",
  surface: "#1A1545",
  indigo: "#130F3A",
  cyan: "#00D4FF",
  violet: "#8B5CF6",
  emerald: "#10B981",
  amber: "#F59E0B",
  rose: "#F43F5E",
  muted: "#6366a0",
  white: "#F8FAFC",
};

/* ─── scroll reveal wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── animated metric chip used in hero ─── */
function MetricChip({ label, value, color, delay }: { label: string; value: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border"
      style={{
        background: "rgba(26,21,69,0.65)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: `${color}30`,
      }}
    >
      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
      <div>
        <p className="text-[10px] uppercase tracking-widest" style={{ color: C.muted, fontFamily: "monospace" }}>{label}</p>
        <p className="text-lg font-bold" style={{ color, fontFamily: "monospace" }}>{value}</p>
      </div>
      {/* mini sparkline decoration */}
      <svg width="48" height="20" viewBox="0 0 48 20" fill="none" className="ml-2 opacity-60">
        <polyline
          points="0,16 6,12 12,14 18,6 24,9 30,4 36,7 42,2 48,5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

/* ─── services data ─── */
const services = [
  { icon: Radio, title: "Social Media Management", desc: "Content strategy, community engagement, and growth tracking with full-funnel analytics on every post.", color: C.cyan, metric: "+127% avg engagement" },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Paid acquisition, SEO, and email campaigns optimized through A/B testing and real-time performance data.", color: C.violet, metric: "3.2x avg ROAS" },
  { icon: Zap, title: "Operations & Automation", desc: "Workflow design, CRM integrations, and process automation that save hundreds of hours monthly.", color: C.emerald, metric: "14h saved / week" },
  { icon: Activity, title: "Analytics & Reporting", desc: "Custom dashboards, attribution modeling, and executive reporting that turns noise into actionable signal.", color: C.amber, metric: "Real-time data" },
];

/* ─── process steps ─── */
const processSteps = [
  { label: "CONNECT", desc: "Integrate your platforms and define success metrics.", color: C.cyan },
  { label: "ANALYZE", desc: "Deep baseline audit across all digital touchpoints.", color: C.violet },
  { label: "ACTIVATE", desc: "Launch strategy with live performance monitoring.", color: C.emerald },
  { label: "AMPLIFY", desc: "Scale what works, cut what doesn't. Iterate weekly.", color: C.amber },
];

/* ─── testimonials ─── */
const testimonials = [
  { quote: "They gave us a dashboard we actually use every day. The clarity in our marketing data is unmatched.", author: "Ava R.", role: "CMO, Prism Health", color: C.cyan },
  { quote: "Our social engagement jumped 200% in the first quarter. The data-driven approach was a game-changer.", author: "Daniel M.", role: "Founder, NovaBridge", color: C.violet },
  { quote: "SimplyUs&U turned our scattered operations into a clean, automated machine. Incredible team.", author: "Leila H.", role: "COO, Verve Studios", color: C.emerald },
];

export default function SignalFlowConcept() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: "system-ui, -apple-system, sans-serif" }} className="min-h-screen">

      {/* ── back link ── */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/concepts" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-80 transition-opacity" style={{ color: C.muted, fontFamily: "monospace" }}>
          <ArrowLeft size={14} /> Back to Concepts
        </Link>
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: C.violet }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]" style={{ background: C.cyan }} />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-28 md:pt-36 md:pb-40 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: C.cyan, fontFamily: "monospace" }}
          >
            Concept 04 — Signal Flow
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] max-w-4xl"
          >
            Your growth,{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${C.cyan}, ${C.violet})` }}>
              measured in real time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: C.muted }}
          >
            We manage your social media, marketing, and operations — and prove every result with the data to back it up.
          </motion.p>

          {/* floating metrics */}
          <div className="mt-10 flex flex-wrap gap-3">
            <MetricChip label="Engagement" value="+127%" color={C.cyan} delay={0.5} />
            <MetricChip label="ROAS" value="3.2x" color={C.violet} delay={0.65} />
            <MetricChip label="Lead Growth" value="+340%" color={C.emerald} delay={0.8} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12"
          >
            <button
              className="group px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${C.cyan}, ${C.violet})`,
                color: "#fff",
                boxShadow: `0 0 30px ${C.cyan}30`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 50px ${C.cyan}50`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 30px ${C.cyan}30`; }}
            >
              See Your Potential <ArrowRight size={16} className="inline ml-2 -mt-0.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.cyan, fontFamily: "monospace" }}>Active Channels</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">What We Monitor &amp; Manage</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(26,21,69,0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderColor: `${s.color}20`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}50`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}20`; }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                      <s.icon size={18} style={{ color: s.color }} />
                      <h3 className="text-sm font-bold tracking-wide">{s.title}</h3>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full border" style={{ color: s.color, borderColor: `${s.color}40`, fontFamily: "monospace" }}>
                      {s.metric}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="py-24 md:py-32" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.violet, fontFamily: "monospace" }}>Signal Path</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">From Noise to Signal</h2>
          </Reveal>

          <div className="relative">
            {/* connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px" style={{ background: `linear-gradient(90deg, ${C.cyan}40, ${C.violet}40, ${C.emerald}40, ${C.amber}40)` }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.12}>
                  <div className="text-center relative">
                    {/* node dot */}
                    <div className="w-5 h-5 rounded-full mx-auto mb-6 relative" style={{ background: s.color, boxShadow: `0 0 20px ${s.color}50` }}>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: s.color }} />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: C.muted, fontFamily: "monospace" }}>Step 0{i + 1}</span>
                    <h3 className="text-lg font-bold tracking-wider mb-3" style={{ color: s.color, fontFamily: "monospace" }}>{s.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase mb-3" style={{ color: C.emerald, fontFamily: "monospace" }}>Live Feedback</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16">What Our Clients Report</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl border h-full flex flex-col justify-between"
                  style={{
                    background: "rgba(26,21,69,0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderColor: `${t.color}20`,
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                      <span className="text-[10px] tracking-wider uppercase" style={{ color: t.color, fontFamily: "monospace" }}>Verified Client</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: C.white }}>&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.author}</p>
                    <p className="text-xs mt-1" style={{ color: C.muted, fontFamily: "monospace" }}>{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ METRICS BAR ══════════════ */}
      <section className="py-16" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "150+", label: "Active Clients", color: C.cyan },
              { val: "2.4M+", label: "Data Points / Mo", color: C.violet },
              { val: "98%", label: "Client Retention", color: C.emerald },
              { val: "24/7", label: "Live Monitoring", color: C.amber },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div>
                  <p className="text-3xl md:text-4xl font-black" style={{ color: m.color, fontFamily: "monospace" }}>{m.val}</p>
                  <p className="text-xs tracking-widest uppercase mt-2" style={{ color: C.muted, fontFamily: "monospace" }}>{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[140px]" style={{ background: C.cyan }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <Wifi size={32} className="mx-auto mb-6" style={{ color: C.cyan }} />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to tune into your{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${C.cyan}, ${C.violet})` }}>
                growth signal?
              </span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: C.muted }}>
              Get a free data audit and see exactly where your biggest opportunities are hiding.
            </p>
            <button
              className="group px-10 py-5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${C.cyan}, ${C.violet})`,
                color: "#fff",
                boxShadow: `0 0 40px ${C.cyan}30`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 60px ${C.cyan}50`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 40px ${C.cyan}30`; }}
            >
              Get Your Free Audit <ArrowRight size={16} className="inline ml-2 -mt-0.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{ background: C.indigo }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-extrabold mb-3">SimplyUs&amp;U</h3>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Data-driven social media, marketing, and operations management. Every result measured, every dollar accounted for.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ fontFamily: "monospace", color: C.cyan }}>Services</h4>
              <ul className="space-y-2 text-sm" style={{ color: C.muted }}>
                <li className="hover:text-white transition-colors cursor-pointer">Social Media</li>
                <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Operations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ fontFamily: "monospace", color: C.cyan }}>Connect</h4>
              <ul className="space-y-2 text-sm" style={{ color: C.muted }}>
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">Email Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: `${C.violet}20` }}>
            <p className="text-xs" style={{ color: C.muted, fontFamily: "monospace" }}>&copy; 2026 SimplyUs&amp;U. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: C.muted }}>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Cpu,
  Eye,
  Layers,
  Rocket,
  Share2,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ------------------------------------------------------------------ */
/*  Fade-in animation wrapper                                          */
/* ------------------------------------------------------------------ */
function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
/* ------------------------------------------------------------------ */
const c = {
  bg: "#0A0A0F",
  surface: "#111118",
  border: "#1E1E2E",
  muted: "#6B7280",
  white: "#FFFFFF",
  blue: "#3B82F6",
  purple: "#8B5CF6",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  { icon: Share2, title: "Social Media Management", desc: "Content strategy, scheduling, community engagement, and analytics across every platform that matters to your audience." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Paid media, SEO, email funnels, and conversion optimization — all measured against real revenue outcomes." },
  { icon: Layers, title: "Operations Consulting", desc: "Process mapping, workflow redesign, and systems integration so your team stops fighting friction." },
  { icon: Cpu, title: "Project Management", desc: "End-to-end delivery management with clear milestones, transparent reporting, and zero surprises." },
  { icon: Zap, title: "Software & Automation", desc: "Custom integrations, CRM pipelines, and intelligent automation that eliminate repetitive human work." },
];

const steps = [
  { num: "01", label: "Audit", desc: "Deep-dive into your current stack, channels, and metrics." },
  { num: "02", label: "Strategy", desc: "Custom growth blueprint aligned to your goals and budget." },
  { num: "03", label: "Execute", desc: "We deploy, manage, and iterate — fast." },
  { num: "04", label: "Scale", desc: "Double down on what works; automate the rest." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function VelocityPage() {
  const roi = useCounter(312);
  const impressions = useCounter(42, 1800);
  const clients = useCounter(89, 1600);

  return (
    <div className="min-h-screen font-sans" style={{ background: c.bg, color: c.white }}>
      {/* Dot-grid background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(${c.border} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* ---- Nav / back ---- */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/concepts" className="group flex items-center gap-2 text-sm" style={{ color: c.muted }}>
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Concepts
          </Link>
          <span className="rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase" style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.muted }}>
            Concept 01
          </span>
        </nav>

        {/* ---- Hero ---- */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
          <FadeUp>
            <p className="mb-4 font-mono text-xs tracking-widest uppercase" style={{ color: c.blue }}>
              Simply Us &amp; You
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Ship Growth.{" "}
              <span style={{ color: c.muted }}>Not Busywork.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: c.muted }}>
              Simply Us &amp; You is the growth engine behind brands that move fast. Social media, digital marketing, operations, and automation — deployed as one integrated system.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${c.blue}, ${c.purple})` }}
              >
                Launch Your Growth Engine <Rocket size={16} />
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5" style={{ borderColor: c.border, color: c.muted }}>
                See how it works <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>

          {/* Metrics */}
          <FadeUp delay={0.4}>
            <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { ref: roi.ref, value: `${roi.count}%`, label: "Avg. Client ROI" },
                { ref: impressions.ref, value: `${impressions.count / 10}M`, label: "Impressions Managed" },
                { ref: clients.ref, value: `${clients.count}`, label: "Active Clients" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
                  <span ref={m.ref} className="block font-mono text-3xl font-bold md:text-4xl" style={{ color: c.blue }}>
                    {m.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider" style={{ color: c.muted }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* ---- Services ---- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <FadeUp>
            <p className="mb-2 font-mono text-xs tracking-widest uppercase" style={{ color: c.purple }}>Services</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">One system. Five capabilities.</h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div
                  className="group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-blue-500/40"
                  style={{
                    background: "rgba(17,17,24,0.6)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: `1px solid ${c.border}`,
                  }}
                >
                  <s.icon size={28} strokeWidth={1.5} style={{ color: c.blue }} className="mb-4" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: c.muted }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ---- Process ---- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <FadeUp>
            <p className="mb-2 font-mono text-xs tracking-widest uppercase" style={{ color: c.purple }}>Process</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From zero to scale in four moves.</h2>
          </FadeUp>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 top-6 hidden h-px w-full lg:block" style={{ background: `linear-gradient(90deg, ${c.blue}, ${c.purple})` }} />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <FadeUp key={s.num} delay={i * 0.12}>
                  <div className="relative">
                    {/* Dot */}
                    <div className="mb-6 hidden h-3 w-3 rounded-full lg:block" style={{ background: c.blue, boxShadow: `0 0 12px ${c.blue}` }} />
                    <span className="font-mono text-xs" style={{ color: c.blue }}>{s.num}</span>
                    <h3 className="mt-1 text-xl font-bold">{s.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: c.muted }}>{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Testimonial ---- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <FadeUp>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
              <Eye size={32} strokeWidth={1.5} style={{ color: c.purple }} className="mb-6" />
              <blockquote className="max-w-2xl text-xl leading-relaxed md:text-2xl" style={{ color: "#D1D5DB" }}>
                &ldquo;We tried hiring in-house, then we tried three agencies. Simply Us &amp; You was the first partner that actually understood our full picture — marketing, ops, and tech — and made them work together.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full font-bold" style={{ background: `linear-gradient(135deg, ${c.blue}, ${c.purple})` }}>
                  JM
                </div>
                <div>
                  <p className="text-sm font-semibold">Jordan Mitchell</p>
                  <p className="text-xs" style={{ color: c.muted }}>COO, Brightly Health</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ---- CTA ---- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <FadeUp>
            <div
              className="relative overflow-hidden rounded-2xl p-10 text-center md:p-16"
              style={{
                background: c.surface,
                border: "double 2px transparent",
                backgroundImage: `linear-gradient(${c.surface}, ${c.surface}), linear-gradient(135deg, ${c.blue}, ${c.purple})`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to stop guessing?</h2>
              <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: c.muted }}>
                Book a free 30-minute strategy call. No sales deck — just a candid conversation about where you are and where you want to go.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${c.blue}, ${c.purple})` }}
              >
                Launch Your Growth Engine <Rocket size={16} />
              </Link>
            </div>
          </FadeUp>
        </section>

        {/* ---- Footer ---- */}
        <footer className="mx-auto max-w-6xl px-6 py-12" style={{ borderTop: `1px solid ${c.border}` }}>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-xs" style={{ color: c.muted }}>&copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: c.muted }}>
              <Link href="#" className="transition-colors hover:text-white">Privacy</Link>
              <Link href="#" className="transition-colors hover:text-white">Terms</Link>
              <Link href="#" className="transition-colors hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

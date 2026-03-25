"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Crosshair,
  Cpu,
  Activity,
  Shield,
  Radio,
  BarChart3,
  ArrowLeft,
  Terminal,
  Zap,
  Eye,
  ChevronRight,
} from "lucide-react";

/* ── colour tokens ── */
const C = {
  void: "#0A0A0A",
  graphite: "#161616",
  steel: "#1E1E1E",
  slate: "#2A2A2A",
  ash: "#6B6B6B",
  cloud: "#E5E5E5",
  green: "#00FF88",
  amber: "#FFB800",
  red: "#FF4444",
};

/* ── reusable fade-up wrapper ── */
function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── typewriter hook ── */
function useTypewriter(text: string, speed = 45) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return { display, done };
}

/* ── dot grid background ── */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `radial-gradient(circle, ${C.cloud} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}

/* ── status bar ── */
function StatusBar() {
  const items = [
    { label: "SYS", value: "ONLINE", color: C.green },
    { label: "LATENCY", value: "12ms", color: C.green },
    { label: "UPTIME", value: "99.97%", color: C.green },
    { label: "MODULES", value: "6 ACTIVE", color: C.amber },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-16 text-xs font-mono"
      style={{ color: C.ash }}
    >
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: item.color }} />
          {item.label}: <span style={{ color: item.color }}>{item.value}</span>
        </span>
      ))}
    </motion.div>
  );
}

/* ── data ── */
const services = [
  { icon: Radio, title: "Social Media Ops", tag: "MODULE::SOCIAL", desc: "Real-time content scheduling, community monitoring, and engagement analytics running on autopilot." },
  { icon: Crosshair, title: "Digital Marketing", tag: "MODULE::MARKETING", desc: "Precision-targeted campaigns with real-time bid optimization and conversion tracking." },
  { icon: Cpu, title: "Automation Engine", tag: "MODULE::AUTO", desc: "Workflow orchestration that eliminates manual tasks and connects every tool in your stack." },
  { icon: BarChart3, title: "Analytics Core", tag: "MODULE::DATA", desc: "Unified dashboards pulling from every channel — one source of truth for all KPIs." },
  { icon: Shield, title: "Operations Layer", tag: "MODULE::OPS", desc: "Process design, SOP creation, and backend optimization for seamless daily operations." },
  { icon: Activity, title: "Growth Intelligence", tag: "MODULE::INTEL", desc: "Predictive insights and trend analysis to stay three moves ahead of the market." },
];

const protocol = [
  { phase: "RECON", num: "01", icon: Eye, desc: "Deep audit of your current systems, channels, and market position." },
  { phase: "ARCHITECT", num: "02", icon: Terminal, desc: "Custom strategy blueprint mapped to your goals, timeline, and budget." },
  { phase: "DEPLOY", num: "03", icon: Zap, desc: "Systems go live, campaigns launch, and automation begins executing." },
  { phase: "OPTIMIZE", num: "04", icon: Activity, desc: "Continuous monitoring, A/B testing, and iteration for peak performance." },
];

const testimonials = [
  { name: "Anika Rao", role: "CTO, StackLayer", text: "It felt like plugging into a second operations team. Everything just started running faster." },
  { name: "Marcus Webb", role: "Founder, Tideshift Digital", text: "They didn't just manage our marketing — they built an entire command layer for our business." },
];

/* ══════════════════════════════════════════════ */
export default function NexusPage() {
  const headline = "Your Business Operations. One Command Center.";
  const { display, done } = useTypewriter(headline, 40);

  return (
    <main style={{ background: C.void, color: C.cloud, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ── back link ── */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/concepts"
          className="flex items-center gap-2 px-4 py-2 text-sm font-mono rounded"
          style={{ background: C.steel, color: C.green, border: `1px solid ${C.slate}` }}
        >
          <ArrowLeft size={14} /> ../concepts
        </Link>
      </div>

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" style={{ background: C.void }}>
        <DotGrid />

        {/* subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, ${C.green}08 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.3em] text-xs mb-8 font-mono"
            style={{ color: C.ash }}
          >
            simply us &amp; you &bull; concept 08
          </motion.p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-mono"
            style={{ color: C.cloud }}
          >
            {display}
            {!done && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                style={{ color: C.green }}
              >
                _
              </motion.span>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: C.ash }}
          >
            Simply Us &amp; You integrates social media, digital marketing, operations, and automation into a single orchestration layer.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }} transition={{ duration: 0.5 }}>
            <Link
              href="#contact"
              className="inline-block font-mono text-sm tracking-widest px-10 py-4 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
              style={{ border: `1px solid ${C.green}`, color: C.green, background: "transparent", borderRadius: 4 }}
            >
              [ INITIALIZE CONSULTATION ]
            </Link>
          </motion.div>

          <StatusBar />
        </div>
      </section>

      {/* ── divider line ── */}
      <div className="max-w-6xl mx-auto" style={{ borderTop: `1px solid ${C.slate}` }} />

      {/* ══════ SERVICES ══════ */}
      <section className="py-24 px-6" style={{ background: C.graphite }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: C.green }}>
              &gt; system.modules
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mono" style={{ color: C.cloud }}>
              Active Modules
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div
                  className="p-6 rounded h-full group transition-colors"
                  style={{ background: C.steel, border: `1px solid ${C.slate}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.green + "55")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.slate)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <s.icon size={20} style={{ color: C.green }} />
                      <span className="font-mono text-[10px] tracking-wider" style={{ color: C.ash }}>{s.tag}</span>
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: C.green }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: C.green }} />
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-mono mb-2" style={{ color: C.cloud }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.ash }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="max-w-6xl mx-auto" style={{ borderTop: `1px solid ${C.slate}` }} />

      {/* ══════ PROCESS ══════ */}
      <section className="py-24 px-6" style={{ background: C.void }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: C.amber }}>
              &gt; execution.protocol
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mono" style={{ color: C.cloud }}>
              Deployment Protocol
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-8">
            {protocol.map((p, i) => (
              <FadeUp key={p.phase} delay={i * 0.12} className="text-center">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded flex items-center justify-center mx-auto mb-5"
                    style={{ background: C.steel, border: `1px solid ${C.green}33` }}
                  >
                    <p.icon size={28} style={{ color: C.green }} />
                  </div>
                  {i < protocol.length - 1 && (
                    <ChevronRight
                      size={20}
                      className="hidden md:block absolute top-5 -right-4"
                      style={{ color: C.slate }}
                    />
                  )}
                </div>
                <span className="font-mono text-[10px] tracking-widest mb-2 block" style={{ color: C.ash }}>
                  PHASE {p.num}
                </span>
                <h3 className="text-xl font-bold font-mono mb-2" style={{ color: C.green }}>{p.phase}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.ash }}>{p.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="max-w-6xl mx-auto" style={{ borderTop: `1px solid ${C.slate}` }} />

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-24 px-6" style={{ background: C.graphite }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: C.green }}>
              &gt; signal.received
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mono" style={{ color: C.cloud }}>
              Operator Feedback
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.12}>
                <div
                  className="p-8 rounded relative"
                  style={{ background: C.steel, border: `1px solid ${C.slate}` }}
                >
                  <span className="font-mono text-[10px] tracking-wider block mb-4" style={{ color: C.ash }}>
                    // transmission
                  </span>
                  <p className="text-base leading-relaxed mb-6" style={{ color: C.cloud }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center font-mono text-sm font-bold"
                      style={{ background: C.slate, color: C.green }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-mono text-sm font-bold" style={{ color: C.cloud }}>{t.name}</p>
                      <p className="font-mono text-xs" style={{ color: C.ash }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="max-w-6xl mx-auto" style={{ borderTop: `1px solid ${C.slate}` }} />

      {/* ══════ CTA ══════ */}
      <section id="contact" className="py-24 px-6 relative" style={{ background: C.void }}>
        <DotGrid />
        <FadeUp className="relative z-10 max-w-3xl mx-auto text-center">
          <Terminal size={36} className="mx-auto mb-6" style={{ color: C.green }} />
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6" style={{ color: C.cloud }}>
            Ready to Take Command?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: C.ash }}>
            Stop juggling tools and start orchestrating growth. One system. One team. Total clarity.
          </p>
          <Link
            href="#"
            className="inline-block font-mono text-sm tracking-widest px-10 py-4 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            style={{ background: C.green, color: C.void, borderRadius: 4, fontWeight: 700 }}
          >
            [ LAUNCH SEQUENCE ]
          </Link>
        </FadeUp>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="py-12 px-6 text-center" style={{ background: C.graphite, borderTop: `1px solid ${C.slate}` }}>
        <p className="font-mono text-xs mb-2" style={{ color: C.ash }}>
          &copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.
        </p>
        <p className="font-mono text-[10px]" style={{ color: C.slate }}>
          CONCEPT 08 &middot; NEXUS COMMAND &middot; v1.0.0
        </p>
      </footer>
    </main>
  );
}

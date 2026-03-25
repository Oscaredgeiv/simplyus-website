"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Cpu,
  Rocket,
  Radio,
  Satellite,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fade-in animation wrapper                                          */
/* ------------------------------------------------------------------ */
function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
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
  void: "#0A0E27",
  nebula: "#141B3D",
  cosmic: "#1E2A52",
  plasma: "#6C2BD9",
  ion: "#00D4FF",
  stardust: "#E8ECF4",
  nova: "#FF6B35",
  white: "#FFFFFF",
  muted: "#7B8AB8",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  { icon: Rocket, title: "Launch Marketing", desc: "Full-spectrum digital marketing campaigns engineered for maximum orbital velocity and audience reach." },
  { icon: Cpu, title: "Automation Systems", desc: "Intelligent workflow automation that eliminates friction, reduces costs, and runs your ops on autopilot." },
  { icon: Radio, title: "Social Command", desc: "Strategic social media management that builds communities and turns followers into loyal brand ambassadors." },
  { icon: Satellite, title: "Analytics Grid", desc: "Real-time data dashboards and performance tracking so you always know your brand\u2019s exact coordinates." },
  { icon: Globe, title: "Web Engineering", desc: "High-performance websites and landing pages designed for conversions, speed, and interstellar first impressions." },
  { icon: Target, title: "Brand Strategy", desc: "Mission-critical brand positioning that carves out your unique space in the competitive galaxy." },
];

const phases = [
  { id: "01", label: "RECON", title: "Discovery & Research", desc: "Deep-scan your market, audience, and competition to map the landscape before launch." },
  { id: "02", label: "ARCHITECT", title: "Strategy & Blueprint", desc: "Engineer a custom growth system with precision targeting, messaging, and channel selection." },
  { id: "03", label: "DEPLOY", title: "Execute & Launch", desc: "Activate all systems. Campaigns go live, automations engage, and your brand enters orbit." },
  { id: "04", label: "OPTIMIZE", title: "Monitor & Scale", desc: "Continuous telemetry analysis, A/B testing, and iterative improvements to maximize trajectory." },
];

const testimonials = [
  { name: "Marcus Chen", role: "CEO, NovaTech Solutions", text: "Simply Us & You launched our brand into a completely different stratosphere. Our leads tripled within two months of deployment." },
  { name: "Priya Sharma", role: "Founder, Luminary Labs", text: "Their automation systems saved us 30+ hours per week. It felt like upgrading from a bicycle to a spacecraft." },
  { name: "Jordan Ellis", role: "CMO, Apex Dynamics", text: "The strategic precision they brought to our social media was unlike anything we\u2019d experienced. True mission-control energy." },
];

/* ------------------------------------------------------------------ */
/*  Starfield background CSS                                           */
/* ------------------------------------------------------------------ */
const starfieldCSS = `
  .starfield {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .starfield::before, .starfield::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 20%, rgba(232,236,244,0.6) 50%, transparent 50%),
      radial-gradient(1px 1px at 30% 65%, rgba(232,236,244,0.4) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 55% 15%, rgba(0,212,255,0.5) 50%, transparent 50%),
      radial-gradient(1px 1px at 70% 80%, rgba(232,236,244,0.5) 50%, transparent 50%),
      radial-gradient(1px 1px at 85% 35%, rgba(232,236,244,0.3) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 20% 90%, rgba(108,43,217,0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 45% 45%, rgba(232,236,244,0.5) 50%, transparent 50%),
      radial-gradient(1px 1px at 90% 60%, rgba(0,212,255,0.3) 50%, transparent 50%),
      radial-gradient(1px 1px at 5% 50%, rgba(232,236,244,0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 60% 95%, rgba(232,236,244,0.3) 50%, transparent 50%);
  }
  .starfield::after {
    background-image:
      radial-gradient(1px 1px at 15% 75%, rgba(232,236,244,0.5) 50%, transparent 50%),
      radial-gradient(1px 1px at 40% 30%, rgba(232,236,244,0.3) 50%, transparent 50%),
      radial-gradient(1.5px 1.5px at 75% 50%, rgba(0,212,255,0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 95% 10%, rgba(232,236,244,0.4) 50%, transparent 50%),
      radial-gradient(1px 1px at 25% 40%, rgba(108,43,217,0.3) 50%, transparent 50%),
      radial-gradient(1px 1px at 50% 70%, rgba(232,236,244,0.35) 50%, transparent 50%),
      radial-gradient(1px 1px at 80% 90%, rgba(232,236,244,0.3) 50%, transparent 50%),
      radial-gradient(1px 1px at 65% 5%, rgba(0,212,255,0.3) 50%, transparent 50%);
    animation: drift 120s linear infinite;
  }
  @keyframes drift {
    from { transform: translateY(0); }
    to { transform: translateY(-50px); }
  }
  .glass-panel {
    background: rgba(20,27,61,0.55);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(108,43,217,0.25);
  }
  @keyframes orbit-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function OrbitPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: starfieldCSS }} />
      <div className="starfield" />

      <div className="relative z-10 min-h-screen" style={{ background: c.void, color: c.stardust, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {/* ---- Back nav ---- */}
        <div className="px-6 pt-6 md:px-12">
          <Link href="/concepts" className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80" style={{ color: c.ion }}>
            <ArrowLeft size={16} /> Back to Concepts
          </Link>
        </div>

        {/* ---- HERO ---- */}
        <section className="relative px-6 pt-20 pb-32 md:px-12 lg:px-24 max-w-7xl mx-auto">
          {/* Orbital ring decoration */}
          <div className="absolute top-10 right-0 w-[420px] h-[420px] opacity-20 pointer-events-none hidden lg:block" style={{ animation: "orbit-spin 60s linear infinite" }}>
            <svg viewBox="0 0 420 420" fill="none">
              <ellipse cx="210" cy="210" rx="200" ry="80" stroke={c.plasma} strokeWidth="1" strokeDasharray="8 6" transform="rotate(-25 210 210)" />
              <ellipse cx="210" cy="210" rx="160" ry="60" stroke={c.ion} strokeWidth="0.8" strokeDasharray="4 8" transform="rotate(15 210 210)" />
              <circle cx="210" cy="210" r="6" fill={c.ion} opacity="0.6" />
            </svg>
          </div>

          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-mono" style={{ color: c.ion }}>
              // Mission Control Online
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl mb-8">
              Your Brand&apos;s Growth{" "}
              <span style={{ color: c.ion }}>Trajectory</span> Starts Here
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: c.muted }}>
              We engineer digital marketing systems, automate operations, and launch social media strategies that put you lightyears ahead of the competition.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${c.plasma}, ${c.ion})`,
                color: c.white,
                boxShadow: `0 0 30px ${c.plasma}44`,
              }}
            >
              <Rocket size={18} /> Initiate Launch Sequence
            </Link>
          </FadeUp>
        </section>

        {/* ---- SERVICES / ORBITAL STATIONS ---- */}
        <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: c.nova }}>// Orbital Stations</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Systems <span style={{ color: c.ion }}>Engineered</span> for Growth
            </h2>
          </FadeUp>

          {/* Central hub + orbiting services */}
          <div className="relative">
            {/* Central hub - visible on lg */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full items-center justify-center z-10" style={{ background: `linear-gradient(135deg, ${c.plasma}33, ${c.cosmic})`, border: `2px solid ${c.plasma}66` }}>
              <Zap size={36} style={{ color: c.ion }} />
            </div>
            {/* Orbit ring behind cards on lg */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ border: `1px dashed ${c.cosmic}` }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeUp key={s.title} delay={i * 0.08}>
                  <div className="glass-panel rounded-2xl p-8 h-full transition-all duration-300 hover:border-[rgba(0,212,255,0.4)]" style={{ borderColor: i % 2 === 0 ? `${c.plasma}40` : `${c.ion}30` }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${c.plasma}22` }}>
                      <s.icon size={24} style={{ color: c.ion }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: c.white }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ---- PROCESS / MISSION TIMELINE ---- */}
        <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: c.nova }}>// Mission Timeline</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              From <span style={{ color: c.ion }}>Recon</span> to <span style={{ color: c.nova }}>Orbit</span>
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${c.plasma}66, ${c.ion}66, ${c.nova}66)` }} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {phases.map((p, i) => (
                <FadeUp key={p.id} delay={i * 0.12}>
                  <div className="relative">
                    {/* Node dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full mb-8 relative z-10 items-center justify-center" style={{ background: i < 2 ? c.plasma : i < 3 ? c.ion : c.nova, boxShadow: `0 0 12px ${i < 2 ? c.plasma : i < 3 ? c.ion : c.nova}88` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: c.white }} />
                    </div>
                    <span className="text-3xl font-bold font-mono block mb-2" style={{ color: `${c.ion}55` }}>{p.id}</span>
                    <span className="text-xs tracking-[0.25em] uppercase font-mono block mb-2" style={{ color: c.nova }}>{p.label}</span>
                    <h3 className="text-lg font-bold mb-2" style={{ color: c.white }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: c.muted }}>{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ---- STATS BAR ---- */}
        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto glass-panel rounded-2xl p-10 md:p-14" style={{ borderColor: `${c.ion}30` }}>
            <FadeUp>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { val: "200+", label: "Missions Launched" },
                  { val: "4.8x", label: "Avg. ROI Multiplier" },
                  { val: "50+", label: "Automations Built" },
                  { val: "98%", label: "Client Retention" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl md:text-4xl font-bold font-mono" style={{ color: c.ion }}>{s.val}</p>
                    <p className="text-xs mt-2 tracking-wide uppercase" style={{ color: c.muted }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ---- TESTIMONIALS ---- */}
        <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: c.nova }}>// Transmission Logs</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Signals from <span style={{ color: c.ion }}>Our Crew</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="glass-panel rounded-2xl p-8 h-full flex flex-col" style={{ borderColor: `${c.plasma}30` }}>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: c.muted }}>&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: c.white }}>{t.name}</p>
                    <p className="text-xs mt-1 font-mono" style={{ color: c.ion }}>{t.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
          <FadeUp>
            <div className="glass-panel rounded-3xl p-12 md:p-20 relative overflow-hidden" style={{ borderColor: `${c.plasma}40` }}>
              {/* Background glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${c.plasma}15, transparent 70%)` }} />
              <div className="relative z-10">
                <p className="text-xs tracking-[0.3em] uppercase mb-6 font-mono" style={{ color: c.ion }}>// Ready for Launch?</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Let&apos;s Put Your Brand in <span style={{ color: c.ion }}>Orbit</span>
                </h2>
                <p className="max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: c.muted }}>
                  Book a free mission briefing and discover how we can engineer your next phase of growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${c.plasma}, ${c.ion})`, color: c.white, boxShadow: `0 0 40px ${c.plasma}44` }}
                >
                  Begin Transmission <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ---- FOOTER ---- */}
        <footer className="px-6 py-16 md:px-12 lg:px-24 border-t" style={{ borderColor: c.cosmic }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-lg" style={{ color: c.white }}>Simply Us & You</p>
              <p className="text-xs mt-1 font-mono" style={{ color: c.muted }}>Concept 05 &mdash; Orbit System</p>
            </div>
            <div className="flex gap-8 text-sm" style={{ color: c.muted }}>
              <Link href="/services" className="hover:opacity-80 transition-opacity">Services</Link>
              <Link href="/about" className="hover:opacity-80 transition-opacity">About</Link>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
            </div>
            <p className="text-xs" style={{ color: c.muted }}>&copy; 2026 Simply Us & You. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

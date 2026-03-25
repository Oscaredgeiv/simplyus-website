"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}

const orange = "#E8811A";
const gray = "#9CA3AF";
const dark = "#0A0A0A";

const stats = [
  { value: "360\u00B0", label: "SERVICE COVERAGE" },
  { value: "24/7", label: "CAMPAIGN MONITORING" },
  { value: "100+", label: "BRANDS LAUNCHED" },
  { value: "5-STAR", label: "CLIENT REVIEWS" },
];

const services = [
  {
    num: "01",
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "Command Your Digital Presence",
    desc: "We take full control of your social channels, engineering content calendars, community engagement, and growth strategies that turn passive audiences into loyal brand advocates. Every post is mission-planned for maximum impact.",
    bullets: ["Content Strategy & Scheduling", "Community Management", "Platform-Specific Growth Tactics", "Performance Analytics & Reporting"],
  },
  {
    num: "02",
    title: "DIGITAL MARKETING",
    subtitle: "Launch Targeted Campaigns",
    desc: "From paid media to organic funnels, we deploy data-driven marketing campaigns that reach your ideal audience at the right time. Our mission-control approach ensures every dollar spent generates measurable returns.",
    bullets: ["PPC & Paid Social Campaigns", "SEO & Content Marketing", "Email Marketing Automation", "Conversion Rate Optimization"],
  },
  {
    num: "03",
    title: "OPERATIONS CONSULTING",
    subtitle: "Streamline Your Mission Systems",
    desc: "We analyze your internal operations, identify inefficiencies, and architect streamlined workflows that reduce overhead and accelerate output. Think of us as ground control for your business infrastructure.",
    bullets: ["Process Mapping & Optimization", "Team Workflow Design", "KPI Dashboard Implementation", "Vendor & Resource Management"],
  },
  {
    num: "04",
    title: "PROJECT MANAGEMENT",
    subtitle: "Navigate Complex Missions",
    desc: "Every initiative needs a flight plan. We provide dedicated project management that keeps timelines tight, stakeholders aligned, and deliverables on target from launch to landing.",
    bullets: ["Agile & Waterfall Methodologies", "Stakeholder Communication", "Risk Assessment & Mitigation", "Timeline & Budget Tracking"],
  },
  {
    num: "05",
    title: "SOFTWARE & AUTOMATION",
    subtitle: "Engage Autopilot Systems",
    desc: "We build custom automation pipelines and software integrations that eliminate repetitive tasks, connect your tech stack, and let your team focus on high-value mission-critical work.",
    bullets: ["CRM & Workflow Automation", "Custom Software Solutions", "API Integrations & Data Sync", "AI-Powered Process Optimization"],
  },
];

const process = [
  { num: "01", title: "RECON", desc: "Deep-scan your market, audience, and competition to map the full landscape." },
  { num: "02", title: "ARCHITECT", desc: "Engineer a custom growth blueprint with precision targeting and channel strategy." },
  { num: "03", title: "DEPLOY", desc: "Activate all systems. Campaigns launch, automations engage, results begin." },
  { num: "04", title: "OPTIMIZE", desc: "Continuous monitoring, A/B testing, and iterative improvements to maximize trajectory." },
];

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Sticky top bar */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/concepts" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft size={16} /> <span>&larr; Back to Concepts</span>
          </Link>
          <span className="text-sm font-bold tracking-wider uppercase">Simply Us & You</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-44 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: orange }}>MISSION CONTROL ONLINE</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
              LAUNCH. SCALE.<br /><span style={{ color: orange }}>DOMINATE.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: gray }}>
              We engineer digital marketing systems, automate operations, and deploy social strategies that put your brand lightyears ahead of the competition.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider text-white transition-all hover:scale-105" style={{ backgroundColor: orange }}>
                Initiate Launch <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider text-white border-2 transition-all hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                View Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: orange }}>{s.value}</p>
                  <p className="text-xs mt-2 tracking-wider uppercase" style={{ color: gray }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">
        <FadeUp>
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: orange }}>WHAT WE DO</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">OUR CORE <span style={{ color: orange }}>SERVICES</span></h2>
        </FadeUp>
      </section>

      {/* 5 ALTERNATING SERVICE SECTIONS */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={s.num} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <FadeUp>
              <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
                {/* Image placeholder */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold opacity-10" style={{ color: orange }}>{s.num}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: orange }}>{s.num}</p>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm uppercase tracking-wider mb-4 font-semibold" style={{ color: orange }}>{s.subtitle}</p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: gray }}>{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm" style={{ color: gray }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: orange }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wider border-2 transition-all hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </section>
        );
      })}

      {/* PROCESS */}
      <section className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: orange }}>HOW WE WORK</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">THE MISSION <span style={{ color: orange }}>PROTOCOL</span></h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.1}>
                <div className="border-t-2 pt-8" style={{ borderColor: orange }}>
                  <span className="text-4xl font-bold block mb-3" style={{ color: orange }}>{p.num}</span>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: gray }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <FadeUp>
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: orange }}>READY FOR LAUNCH?</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8">
                LET&apos;S PUT YOUR BRAND<br />IN <span style={{ color: orange }}>ORBIT</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 mb-10" style={{ color: gray }}>
                <span className="flex items-center gap-2 text-sm"><Phone size={16} style={{ color: orange }} /> (555) 123-4567</span>
                <span className="flex items-center gap-2 text-sm"><Mail size={16} style={{ color: orange }} /> hello@simplyusandyou.com</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider text-white transition-all hover:scale-105" style={{ backgroundColor: orange }}>
                  Start Your Mission <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider border-2 transition-all hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                  Explore Services
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <p className="font-bold text-lg uppercase tracking-wider mb-2">Simply Us & You</p>
              <p className="text-xs" style={{ color: gray }}>Concept 05 &mdash; Orbit System</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: orange }}>SERVICES</p>
              <div className="space-y-2 text-sm" style={{ color: gray }}>
                <p>Social Media Management</p>
                <p>Digital Marketing</p>
                <p>Operations Consulting</p>
                <p>Project Management</p>
                <p>Software & Automation</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: orange }}>COMPANY</p>
              <div className="space-y-2 text-sm" style={{ color: gray }}>
                <Link href="/about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/services" className="block hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: orange }}>CONTACT</p>
              <div className="space-y-2 text-sm" style={{ color: gray }}>
                <p>hello@simplyusandyou.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-xs" style={{ color: gray }}>&copy; 2026 Simply Us & You. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

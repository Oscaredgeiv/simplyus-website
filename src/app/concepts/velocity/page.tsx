"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

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

const orange = "#E8811A";
const gray = "#9CA3AF";
const bg = "#0A0A0A";

const stats = [
  { value: "100+", label: "CLIENTS SERVED" },
  { value: "312%", label: "AVG ROI" },
  { value: "4.2M+", label: "IMPRESSIONS" },
  { value: "5-STAR", label: "RATING" },
];

const services = [
  {
    num: "01",
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "CONTENT & COMMUNITY",
    desc: "We build and execute social strategies that grow audiences, drive engagement, and turn followers into customers across every platform that matters.",
    bullets: ["Content Strategy & Scheduling", "Community Engagement", "Analytics & Reporting", "Platform Optimization"],
    img: "Social Media Management",
  },
  {
    num: "02",
    title: "DIGITAL MARKETING",
    subtitle: "PAID MEDIA & SEO",
    desc: "Data-driven campaigns across paid search, social ads, email funnels, and SEO — all measured against real revenue outcomes, not vanity metrics.",
    bullets: ["PPC & Paid Social", "Search Engine Optimization", "Email Marketing Funnels", "Conversion Rate Optimization"],
    img: "Digital Marketing",
  },
  {
    num: "03",
    title: "OPERATIONS CONSULTING",
    subtitle: "PROCESS & SYSTEMS",
    desc: "We map your workflows, identify bottlenecks, and redesign your operations so your team stops fighting friction and starts scaling with confidence.",
    bullets: ["Process Mapping & Redesign", "Systems Integration", "Team Workflow Optimization", "KPI Dashboard Setup"],
    img: "Operations Consulting",
  },
  {
    num: "04",
    title: "PROJECT MANAGEMENT",
    subtitle: "DELIVERY & ACCOUNTABILITY",
    desc: "End-to-end delivery management with clear milestones, transparent reporting, and zero surprises from kickoff to completion.",
    bullets: ["Timeline & Milestone Planning", "Resource Allocation", "Stakeholder Communication", "Risk Management"],
    img: "Project Management",
  },
  {
    num: "05",
    title: "SOFTWARE & AUTOMATION",
    subtitle: "INTEGRATIONS & AI",
    desc: "Custom integrations, CRM pipelines, and intelligent automation that eliminate repetitive tasks and let your team focus on high-value work.",
    bullets: ["CRM Pipeline Automation", "Custom Software Integrations", "AI-Powered Workflows", "Data Sync & Reporting"],
    img: "Software & Automation",
  },
];

const steps = [
  { num: "01", title: "DISCOVERY", desc: "Deep audit of your current channels, tech stack, and key performance metrics." },
  { num: "02", title: "STRATEGY", desc: "Custom growth blueprint aligned to your goals, timeline, and budget." },
  { num: "03", title: "EXECUTION", desc: "We deploy, manage, and iterate fast — with weekly reporting and full transparency." },
  { num: "04", title: "SCALE", desc: "Double down on what works, automate the rest, and accelerate growth." },
];

export default function VelocityPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: bg, color: "#FFFFFF" }}>
      {/* Sticky top bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3" style={{ background: "rgba(10,10,10,0.95)", borderBottom: "1px solid #1a1a1a" }}>
        <Link href="/concepts" className="group flex items-center gap-2 text-sm" style={{ color: gray }}>
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Concepts
        </Link>
        <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-bold" style={{ color: orange }}>
          <Phone size={14} /> (555) 123-4567
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0A0A0A 50%, #1a0f00 100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>SIMPLY US & YOU</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              SOCIAL MEDIA. DIGITAL MARKETING.{" "}
              <span style={{ color: orange }}>AUTOMATION.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: gray }}>
              The velocity growth engine behind brands that move fast. We deploy marketing, operations, and automation as one integrated system.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90" style={{ background: orange }}>
                GET A FREE QUOTE
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-80" style={{ color: orange }}>
                OR EMAIL US <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y" style={{ borderColor: "#1a1a1a", background: "#111111" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center divide-x" style={{ divideColor: "#2a2a2a" } as React.CSSProperties}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-1 flex-col items-center gap-1 px-6 py-8 sm:flex-row sm:gap-3">
              <span className="text-2xl font-bold md:text-3xl" style={{ color: orange }}>{s.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: gray }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <FadeUp>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>WHAT WE DO</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">OUR SERVICES</h2>
          <div className="mt-4 h-1 w-16" style={{ background: orange }} />
        </FadeUp>
      </section>

      {/* Service Split Sections */}
      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section key={s.num} className="mx-auto max-w-6xl px-6 py-16">
            <FadeUp>
              <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${reversed ? "lg:flex-row-reverse" : ""}`}>
                {/* Image placeholder */}
                <div className="flex h-72 w-full items-center justify-center lg:h-96 lg:w-1/2" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
                  <span className="text-sm font-medium uppercase tracking-wider" style={{ color: gray }}>{s.img}</span>
                </div>
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-4xl font-bold" style={{ color: orange }}>{s.num}</span>
                  <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: orange }}>{s.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: gray }}>{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-2 w-2 flex-shrink-0" style={{ background: orange }} />
                        <span className="text-sm font-semibold" style={{ color: gray }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="mt-8 inline-flex items-center gap-2 border-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                    GET A FREE QUOTE <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </section>
        );
      })}

      {/* Process / How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeUp>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>HOW IT WORKS</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">OUR PROCESS</h2>
          <div className="mt-4 h-1 w-16" style={{ background: orange }} />
        </FadeUp>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.1}>
              <div>
                <span className="text-4xl font-bold" style={{ color: orange }}>{s.num}</span>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: gray }}>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>FREE ESTIMATES</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">READY TO GET IT DONE?</h2>
            <div className="mx-auto mt-4 h-1 w-16" style={{ background: orange }} />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: gray }}>
              Book a free 30-minute strategy call. No sales deck — just a candid conversation about where you are and where you want to go.
            </p>
            <p className="mt-8 text-3xl font-bold md:text-4xl" style={{ color: orange }}>(555) 123-4567</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="tel:+15551234567" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90" style={{ background: orange }}>
                <Phone size={16} /> CALL NOW
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                EMAIL US
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: gray }}>
              <span>info@simplyusandyou.com</span>
              <span>Mon - Fri: 9AM - 6PM</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide">Simply Us & You</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: gray }}>
              The velocity growth engine behind brands that move fast. Marketing, operations, and automation deployed as one system.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>CONTACT</p>
            <div className="space-y-2 text-sm" style={{ color: gray }}>
              <p>(555) 123-4567</p>
              <p>info@simplyusandyou.com</p>
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>SERVICES</p>
            <div className="space-y-2 text-sm" style={{ color: gray }}>
              <p>Social Media Management</p>
              <p>Digital Marketing</p>
              <p>Operations Consulting</p>
              <p>Project Management</p>
              <p>Software & Automation</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8" style={{ borderColor: "#1a1a1a" }}>
          <p className="text-xs" style={{ color: gray }}>&copy; {new Date().getFullYear()} Simply Us & You. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

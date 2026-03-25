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
      transition={{ duration: 0.65, ease: "easeOut", delay }}
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
  { value: "50+", label: "BRANDS SCALED" },
  { value: "100%", label: "RETENTION RATE" },
  { value: "8+", label: "YEARS EXPERIENCE" },
  { value: "24/7", label: "SUPPORT" },
];

const services = [
  {
    num: "01",
    title: "DIGITAL MARKETING",
    subtitle: "REACH & REVENUE",
    desc: "Paid ads, SEO, email funnels, and full-funnel campaigns grounded in data and aimed at measurable business growth — not vanity metrics.",
    bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"],
    img: "Digital Marketing",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    num: "02",
    title: "SOCIAL CONTENT CREATION",
    subtitle: "STRATEGY & GROWTH",
    desc: "Scroll-stopping content, reels, graphics, and strategy that build consistent brand presence and turn followers into loyal customers.",
    bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"],
    img: "Social Content Creation",
    imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    num: "03",
    title: "WEBSITE DESIGN",
    subtitle: "CLARITY & CONVERSIONS",
    desc: "Custom, conversion-focused websites designed with clarity in mind — clean layouts, intuitive UX, and zero template shortcuts.",
    bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"],
    img: "Website Design",
    imgSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    num: "04",
    title: "WEBSITE HOSTING",
    subtitle: "STRUCTURE & RELIABILITY",
    desc: "Fast, secure, reliable hosting with transparent reporting and zero surprises — your site stays online, protected, and performing at peak.",
    bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"],
    img: "Website Hosting",
    imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    num: "05",
    title: "SOFTWARE & APP DEVELOPMENT",
    subtitle: "SYSTEMS & INTELLIGENCE",
    desc: "Custom apps, CRM integrations, and intelligent automation that remove repetitive tasks and free your team for high-value work.",
    bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"],
    img: "Software & App Development",
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

const steps = [
  { num: "01", title: "LISTEN", desc: "We start by understanding your business, goals, and pain points inside and out." },
  { num: "02", title: "CLARIFY", desc: "We distill complexity into a clear strategy with defined priorities and measurable outcomes." },
  { num: "03", title: "BUILD", desc: "We execute with precision — deploying systems, campaigns, and processes on schedule." },
  { num: "04", title: "REFINE", desc: "We measure results, optimize what works, and continuously improve your growth engine." },
];

export default function ClarityPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: bg, color: "#FFFFFF" }}>
      {/* Sticky top bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3" style={{ background: "rgba(10,10,10,0.95)", borderBottom: "1px solid #1a1a1a" }}>
        <Link href="/concepts" className="group flex items-center gap-2 text-sm" style={{ color: gray }}>
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Concepts
        </Link>
        <img src="/logo.svg" alt="Simply Us & U" className="h-8" />
        <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-bold" style={{ color: orange }}>
          <Phone size={14} /> (555) 123-4567
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #111111 0%, #0A0A0A 40%, #0f0a00 100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>SIMPLY US & YOU</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              STRATEGY. EXECUTION.{" "}
              <span style={{ color: orange }}>RESULTS.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: gray }}>
              We bring clarity to your marketing, operations, and growth. No noise, no guesswork — just clear strategy and measurable outcomes.
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
                {/* Image */}
                <div className="h-72 w-full overflow-hidden lg:h-96 lg:w-1/2" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
                  <img src={s.imgSrc} alt={s.img} className="w-full h-full object-cover" />
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
              No pitch deck. No pressure. Just a 30-minute call to understand where you are and explore whether we are the right fit.
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
              Clarity-driven marketing and operations for ambitious brands. Strategy, execution, and results — nothing more, nothing less.
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
              <p>Digital Marketing</p>
              <p>Social Content Creation</p>
              <p>Website Design</p>
              <p>Website Hosting</p>
              <p>Software & App Development</p>
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

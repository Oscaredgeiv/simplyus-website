"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const orange = "#F97316";
const gray = "#9CA3AF";

const stats = [
  { value: "100+", label: "CLIENTS SERVED" },
  { value: "312%", label: "AVG ROI" },
  { value: "4.2M+", label: "IMPRESSIONS" },
  { value: "5-STAR", label: "RATING" },
];

const services = [
  {
    num: "01",
    title: "DIGITAL MARKETING",
    subtitle: "PAID MEDIA & FULL-FUNNEL",
    desc: "Paid ads, SEO, email funnels, and full-funnel campaigns — all engineered for velocity and measured against real revenue, not vanity metrics.",
    bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"],
    img: "Digital Marketing",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    num: "02",
    title: "SOCIAL CONTENT CREATION",
    subtitle: "CONTENT & STRATEGY",
    desc: "Scroll-stopping content, reels, graphics, and strategy that grow audiences, drive engagement, and turn followers into customers at speed.",
    bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"],
    img: "Social Content Creation",
    imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    num: "03",
    title: "WEBSITE DESIGN",
    subtitle: "UI/UX & CONVERSIONS",
    desc: "Custom, conversion-focused websites built to load fast, look sharp, and turn traffic into revenue — no template shortcuts.",
    bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"],
    img: "Website Design",
    imgSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    num: "04",
    title: "WEBSITE HOSTING",
    subtitle: "SPEED & RELIABILITY",
    desc: "Fast, secure, reliable hosting that keeps your site online, protected, and performing at peak — so you never lose a visitor to downtime.",
    bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"],
    img: "Website Hosting",
    imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    num: "05",
    title: "SOFTWARE & APP DEVELOPMENT",
    subtitle: "INTEGRATIONS & AUTOMATION",
    desc: "Custom apps, CRM integrations, and intelligent automation that eliminate repetitive tasks and let your team focus on high-value work.",
    bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"],
    img: "Software & App Development",
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
    <div className="min-h-screen font-sans" style={{ background: "#0B0B0D", color: "#FFFFFF" }}>
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(11,11,13,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <Link href="/concepts" className="group flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Concepts
          </Link>
          <Link href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ea6c0e] hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            Get Started
          </Link>
          <div className="sm:hidden w-16" />
        </div>
      </nav>

      {/* Hero — Cinematic */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Animated gradient bg */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.04) 0%, transparent 50%), #0B0B0D",
        }} />

        {/* Logo as company name — large, centered above headline */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <motion.img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="absolute top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] select-none"
            style={{ mixBlendMode: "lighten" }}
            initial={{ opacity: 0, y: -30, scale: 1.05 }}
            animate={{ opacity: 0.9, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>

        {/* Grain texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Digital Marketing. Web Design.{" "}
            <span style={{ color: orange }}>Software Development.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: gray }}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            The velocity growth engine behind brands that move fast. We deploy marketing, operations, and automation as one integrated system.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]" style={{ background: orange }}>
              GET A FREE QUOTE
            </Link>
            <Link href="mailto:info@simplyusandyou.com" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-white" style={{ color: orange }}>
              OR EMAIL US <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#111111" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center divide-x" style={{ divideColor: "#2a2a2a" } as React.CSSProperties}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-1 flex-col items-center gap-1 px-6 py-8 sm:flex-row sm:gap-3">
              <span className="text-4xl font-bold md:text-5xl drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]" style={{ color: orange }}>{s.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: gray }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>WHAT WE DO</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">OUR SERVICES</h2>
          <div className="mt-4 h-1 w-16" style={{ background: orange }} />
        </Reveal>
      </section>

      {/* Service Split Sections */}
      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section key={s.num} className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <div className={`group flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${reversed ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96 lg:w-1/2" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <img src={s.imgSrc} alt={s.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* Content */}
                <div className="relative w-full border-l-4 border-[#F97316] pl-8 lg:w-1/2">
                  <span className="absolute -top-6 -left-2 text-7xl font-bold opacity-10" style={{ color: orange }}>{s.num}</span>
                  <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: orange }}>{s.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: gray }}>{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" style={{ background: orange }} />
                        <span className="text-sm font-semibold" style={{ color: gray }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                    GET A FREE QUOTE <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>
        );
      })}

      {/* Process / How It Works — Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>HOW IT WORKS</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">OUR PROCESS</h2>
          <div className="mt-4 h-1 w-16" style={{ background: orange }} />
        </Reveal>
        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Vertical/horizontal connector line */}
          <div className="pointer-events-none absolute top-8 left-0 right-0 hidden h-0.5 lg:block" style={{ background: `linear-gradient(90deg, ${orange}33, ${orange}, ${orange}33)` }} />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.15}>
              <div className="relative pt-4">
                {/* Connector dot */}
                <div className="absolute -top-1.5 left-6 hidden h-5 w-5 items-center justify-center rounded-full lg:flex" style={{ background: "#0B0B0D", border: `3px solid ${orange}` }}>
                  <div className="h-2 w-2 rounded-full" style={{ background: orange }} />
                </div>
                <span className="text-4xl font-bold" style={{ color: orange }}>{s.num}</span>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: gray }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section — Compelling */}
      <section id="contact" className="relative overflow-hidden py-28" style={{ background: "#0a0a0c" }}>
        {/* Radial orange glow */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>FREE ESTIMATES</p>
            <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">READY TO ACCELERATE?</h2>
            <div className="mx-auto mt-4 h-1 w-16" style={{ background: orange }} />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: gray }}>
              Book a free 30-minute strategy call. No sales deck — just a candid conversation about where you are and where you want to go.
            </p>
            <p className="mt-8 text-3xl font-bold md:text-4xl" style={{ color: orange }}>(555) 123-4567</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]" style={{ background: orange }}>
                <Phone size={16} /> CALL NOW
              </Link>
              <Link href="mailto:info@simplyusandyou.com" className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                <Mail size={16} /> EMAIL US
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer — 4 Column */}
      <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0B0B0D" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo + Tagline */}
            <div>
              <img src="/logo.png" alt="Simply Us & U" className="h-12 mb-4" />
              <p className="text-sm leading-relaxed" style={{ color: gray }}>
                The velocity growth engine behind brands that move fast. Marketing, operations, and automation deployed as one system.
              </p>
            </div>
            {/* Services */}
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
            {/* Company */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>COMPANY</p>
              <div className="space-y-2 text-sm" style={{ color: gray }}>
                <p>About Us</p>
                <p>Our Process</p>
                <p>Case Studies</p>
                <p>Careers</p>
              </div>
            </div>
            {/* Contact */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: orange }}>CONTACT</p>
              <div className="space-y-2 text-sm" style={{ color: gray }}>
                <p>(555) 123-4567</p>
                <p>info@simplyusandyou.com</p>
                <p>Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs" style={{ color: gray }}>&copy; {new Date().getFullYear()} Simply Us & You. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: gray }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

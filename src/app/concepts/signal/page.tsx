"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
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

const services = [
  {
    num: "01",
    title: "DIGITAL MARKETING",
    subtitle: "ACQUISITION & GROWTH",
    desc: "Multi-channel campaigns engineered for measurable ROI. Paid ads, SEO, email funnels, and full-funnel campaigns — all calibrated by conversion data.",
    bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
  },
  {
    num: "02",
    title: "SOCIAL CONTENT CREATION",
    subtitle: "CONTENT & AMPLIFICATION",
    desc: "Precision-targeted scroll-stopping content, reels, graphics, and strategy backed by real-time analytics. Every post is measured and optimized for maximum signal clarity.",
    bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90",
  },
  {
    num: "03",
    title: "WEBSITE DESIGN",
    subtitle: "DESIGN & PERFORMANCE",
    desc: "Custom, conversion-focused websites built with surgical precision. Beautiful interfaces engineered for maximum throughput and minimum bounce.",
    bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=90",
  },
  {
    num: "04",
    title: "WEBSITE HOSTING",
    subtitle: "INFRASTRUCTURE & UPTIME",
    desc: "Fast, secure, reliable hosting with data-grade accuracy. Your site stays online, protected, and performing at peak — tracked with full visibility at every stage.",
    bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90",
  },
  {
    num: "05",
    title: "SOFTWARE & APP DEVELOPMENT",
    subtitle: "SYSTEMS & INTEGRATIONS",
    desc: "Custom-built apps, CRM integrations, and automation that eliminate repetitive tasks and connect your entire tech stack into one seamless signal flow.",
    bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
  },
];

const stats = [
  { value: "500+", label: "SOCIAL CAMPAIGNS" },
  { value: "3.8x", label: "AVG ROAS" },
  { value: "150+", label: "AUTOMATIONS BUILT" },
  { value: "99.9%", label: "UPTIME" },
];

const steps = [
  { num: "01", title: "SCAN", desc: "Full diagnostic scan of your current digital ecosystem and data flows." },
  { num: "02", title: "MAP", desc: "Chart the optimal signal path from first touch to final conversion." },
  { num: "03", title: "DEPLOY", desc: "Launch precision-targeted strategies with live performance monitoring." },
  { num: "04", title: "AMPLIFY", desc: "Scale winning signals, eliminate noise, iterate with data-backed precision." },
];

export default function SignalFlowConcept() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0B0B0D]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/concepts" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">← Concepts</Link>
          <div className="flex items-center gap-6">
            <Link href="#services" className="hidden md:block text-sm text-[#9CA3AF] hover:text-white transition-colors">Services</Link>
            <Link href="#process" className="hidden md:block text-sm text-[#9CA3AF] hover:text-white transition-colors">Process</Link>
            <button className="px-6 py-2.5 bg-[#F97316] text-white text-sm font-bold tracking-wide uppercase rounded-full hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0B0D]" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[#F97316]/[0.05] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F97316]/[0.04] blur-[120px]" />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px" }} />
        {/* Logo as company name — large, centered above headline */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
          <motion.img
            src="/logo-transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] select-none"
            
            initial={{ opacity: 0, y: -30, scale: 1.05 }}
            animate={{ opacity: 0.9, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Content. Campaigns.<br /><span className="text-[#F97316]">Development.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-8 text-base md:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Data-driven marketing, precision operations, and intelligent automation. Every signal tracked, every result measured, every opportunity captured.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#F97316] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300">
              GET YOUR AUDIT <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
            </button>
            <button className="px-8 py-4 border-2 border-[#F97316] text-[#F97316] text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#F97316]/10 transition-all duration-300">
              SEE RESULTS
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <p className="text-4xl md:text-5xl font-bold text-[#F97316] drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">{s.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF] mt-2">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F97316] font-bold mb-4">SIGNAL CHANNELS</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase">OUR CORE SERVICES</h2>
            <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">Five precision instruments calibrated for your growth. Clear signal, zero noise.</p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((s, i) => {
        const imgLeft = i % 2 === 0;
        return (
          <section key={s.num} className="py-16 md:py-24 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal>
                <div className={`group flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
                  <div className="w-full md:w-1/2 relative">
                    <span className="absolute -top-6 -left-2 text-[120px] md:text-[160px] font-bold text-[#F97316]/[0.06] leading-none select-none pointer-events-none">{s.num}</span>
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/[0.06] rounded-lg overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 border-l-4 border-[#F97316] pl-6">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase">{s.title}</h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-[#F97316] font-bold mt-2">{s.subtitle}</p>
                    <p className="text-[#9CA3AF] mt-4 leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[#9CA3AF] text-sm">
                          <span className="w-2 h-2 bg-[#F97316] rounded-full mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 px-6 py-3 border-2 border-[#F97316] text-[#F97316] text-xs font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#F97316] hover:text-white transition-all duration-300">
                      LEARN MORE <ArrowRight size={14} className="inline ml-1 -mt-0.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* PROCESS — Vertical Timeline */}
      <section id="process" className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#F97316] font-bold mb-4 text-center">THE SIGNAL PATH</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-16 text-center">FROM NOISE TO SIGNAL</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[#F97316]/30" />
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.12}>
                <div className="relative pl-14 md:pl-20 pb-14 last:pb-0">
                  <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-[#F97316] border-4 border-[#111111]" />
                  <span className="text-sm font-bold text-[#F97316] tracking-[0.2em]">STEP {s.num}</span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mt-1">{s.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mt-2">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.08), transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
              READY TO TUNE INTO YOUR<br /><span className="text-[#F97316]">GROWTH SIGNAL?</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto mb-10">Get a free data audit and see exactly where your biggest opportunities are waiting.</p>
            <button className="px-10 py-4 bg-[#F97316] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300">
              GET YOUR FREE AUDIT
            </button>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/logo-transparent.png" alt="Simply Us & U" className="h-12 mb-4" />
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Data-driven marketing, operations, and automation. Every signal tracked, every result proven, every dollar accounted for.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Social Content Creation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Website Design</li>
                <li className="hover:text-white transition-colors cursor-pointer">Website Hosting</li>
                <li className="hover:text-white transition-colors cursor-pointer">Software &amp; App Dev</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Work</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">CONTACT</h4>
              <ul className="space-y-3 text-sm text-[#9CA3AF]">
                <li className="flex items-center gap-2"><Phone size={14} className="text-[#F97316]" /> (770) 524-0488</li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-[#F97316]" /> hello@simplyusandu.com</li>
                <li className="flex items-start gap-2"><MapPin size={14} className="text-[#F97316] mt-0.5" /> Dallas, TX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#9CA3AF]">&copy; 2026 SimplyUs&amp;U. All rights reserved.</p>
              <div className="flex gap-6 text-xs text-[#9CA3AF]">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

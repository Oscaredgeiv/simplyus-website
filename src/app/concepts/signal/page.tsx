"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    num: "02",
    title: "SOCIAL CONTENT CREATION",
    subtitle: "CONTENT & AMPLIFICATION",
    desc: "Precision-targeted scroll-stopping content, reels, graphics, and strategy backed by real-time analytics. Every post is measured and optimized for maximum signal clarity.",
    bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    num: "03",
    title: "WEBSITE DESIGN",
    subtitle: "DESIGN & PERFORMANCE",
    desc: "Custom, conversion-focused websites built with surgical precision. Beautiful interfaces engineered for maximum throughput and minimum bounce.",
    bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    num: "04",
    title: "WEBSITE HOSTING",
    subtitle: "INFRASTRUCTURE & UPTIME",
    desc: "Fast, secure, reliable hosting with data-grade accuracy. Your site stays online, protected, and performing at peak — tracked with full visibility at every stage.",
    bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    num: "05",
    title: "SOFTWARE & APP DEVELOPMENT",
    subtitle: "SYSTEMS & INTEGRATIONS",
    desc: "Custom-built apps, CRM integrations, and automation that eliminate repetitive tasks and connect your entire tech stack into one seamless signal flow.",
    bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
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
      {/* STICKY TOP BAR */}
      <div className="sticky top-0 z-50 bg-[#0B0B0D]/85 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/concepts" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft size={14} /> Concepts
          </Link>
          <img src="/logo.png" alt="Simply Us & U" className="h-9" />
          <div className="w-[100px]" />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0B0D]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0D]" />
        {/* Subtle watermark — offset bottom-right, blurred, partially cropped */}
        <div className="absolute bottom-[-15%] right-[-10%] pointer-events-none">
          <img
            src="/logo.png"
            alt=""
            className="w-[500px] sm:w-[600px] md:w-[700px] opacity-[0.035] select-none"
            style={{ filter: "blur(28px)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-44 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-[#E8811A] mb-6 font-bold">
            Simply Us & U
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Content. Campaigns.<br /><span className="text-[#E8811A]">Development.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-8 text-base md:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Data-driven marketing, precision operations, and intelligent automation. Every signal tracked, every result measured, every opportunity captured.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#E8811A] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#d0740f] transition-all duration-300">
              GET YOUR AUDIT <ArrowRight size={16} className="inline ml-2 -mt-0.5" />
            </button>
            <button className="px-8 py-4 border-2 border-[#E8811A] text-[#E8811A] text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#E8811A]/10 transition-all duration-300">
              SEE RESULTS
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/[0.06] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <p className="text-3xl md:text-4xl font-bold text-[#E8811A]">{s.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9CA3AF] mt-2">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8811A] font-bold mb-4">SIGNAL CHANNELS</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase">OUR CORE SERVICES</h2>
            <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">Five precision instruments calibrated for your growth. Clear signal, zero noise.</p>
          </Reveal>
        </div>
      </section>

      {/* 5 SERVICE SPLIT SECTIONS */}
      {services.map((s, i) => {
        const imgLeft = i % 2 === 0;
        return (
          <section key={s.num} className="py-16 md:py-24 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal>
                <div className={`flex flex-col ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/[0.06] rounded-lg overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <span className="text-5xl md:text-6xl font-bold text-[#E8811A]">{s.num}</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mt-4">{s.title}</h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-[#E8811A] font-bold mt-2">{s.subtitle}</p>
                    <p className="text-[#9CA3AF] mt-4 leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[#9CA3AF] text-sm">
                          <span className="w-2 h-2 bg-[#E8811A] rounded-lg mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 px-6 py-3 border-2 border-[#E8811A] text-[#E8811A] text-xs font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#E8811A] hover:text-white transition-all duration-300">
                      LEARN MORE <ArrowRight size={14} className="inline ml-1 -mt-0.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8811A] font-bold mb-4">THE SIGNAL PATH</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-16">FROM NOISE TO SIGNAL</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div className="rounded-lg">
                  <span className="text-4xl font-bold text-[#E8811A]">{s.num}</span>
                  <div className="w-10 h-1 bg-[#E8811A] my-4" />
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-3">{s.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8811A] font-bold mb-4">LOCK IN YOUR SIGNAL</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
              READY TO TUNE INTO YOUR<br /><span className="text-[#E8811A]">GROWTH SIGNAL?</span>
            </h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto mb-6">Get a free data audit and see exactly where your biggest opportunities are waiting.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#9CA3AF] mb-8">
              <span className="flex items-center gap-2"><Phone size={14} className="text-[#E8811A]" /> (555) 123-4567</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-[#E8811A]" /> hello@simplyusandu.com</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-[#E8811A] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#d0740f] transition-all duration-300">
                GET YOUR FREE AUDIT
              </button>
              <button className="px-10 py-4 border-2 border-[#E8811A] text-[#E8811A] text-sm font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-[#E8811A]/10 transition-all duration-300">
                SEND US A MESSAGE
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold uppercase mb-3">SIMPLYUS&amp;U</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
                Data-driven marketing, operations, and automation. Every signal tracked, every result proven, every dollar accounted for.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8811A] mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Social Content Creation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Website Design</li>
                <li className="hover:text-white transition-colors cursor-pointer">Website Hosting</li>
                <li className="hover:text-white transition-colors cursor-pointer">Software &amp; App Development</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8811A] mb-4">CONNECT</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">Email Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#9CA3AF]">&copy; 2026 SimplyUs&amp;U. All rights reserved.</p>
              <div className="flex gap-6 text-xs text-[#9CA3AF]">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const orange = "#F97316";
const dark = "#0B0B0D";
const gray = "#9CA3AF";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24, filter: "blur(4px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "300%", label: "AVG GROWTH RATE" },
  { value: "60+", label: "ACTIVE CLIENTS" },
  { value: "8", label: "YEARS IN BUSINESS" },
  { value: "0", label: "COOKIE-CUTTER PLANS" },
];

const services = [
  { num: "01", title: "Digital Marketing", subtitle: "Cultivate Targeted Growth", desc: "Paid ads, SEO, email funnels, and full-funnel campaigns rooted in data and designed to bloom. We plant the seeds of visibility across every channel and nurture leads until they blossom into loyal customers.", bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90" },
  { num: "02", title: "Social Content Creation", subtitle: "Grow Scroll-Stopping Content", desc: "Scroll-stopping content, reels, graphics, and strategy cultivated to captivate your audience. We tend to every post, every story, every reel — nurturing your brand voice into something your community can't ignore.", bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"], image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90" },
  { num: "03", title: "Website Design", subtitle: "Design That Takes Root", desc: "Custom, conversion-focused websites built from the ground up. We design digital experiences that are rooted in strategy, bloom with personality, and guide every visitor toward action.", bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"], image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=90" },
  { num: "04", title: "Website Hosting", subtitle: "Strengthen Your Digital Roots", desc: "Fast, secure, reliable hosting that keeps your online presence thriving year-round. We tend the soil beneath your site so it never wilts — with uptime guarantees, backups, and security that let you grow worry-free.", bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"], image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90" },
  { num: "05", title: "Software & App Development", subtitle: "Harvest Efficiency at Scale", desc: "Custom apps, CRM integrations, and automation that eliminate manual tasks and let your business grow without growing your workload. We build the tools that turn effort into exponential output.", bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90" },
];

const steps = [
  { num: "01", title: "Seed", desc: "We listen, research, and map out a growth blueprint unique to your business." },
  { num: "02", title: "Root", desc: "Systems, strategy, and infrastructure are established for sustainable growth." },
  { num: "03", title: "Grow", desc: "Campaigns launch, content flows, and automation kicks in with building momentum." },
  { num: "04", title: "Harvest", desc: "Leads convert, revenue grows, and your business reaches measurable new heights." },
];

export default function GreenfieldPage() {
  return (
    <main className="bg-[#0B0B0D] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center backdrop-blur-xl border-b border-white/10" style={{ background: "rgba(11,11,13,0.9)" }}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
          <Link href="/concepts" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">← Concepts</Link>
          <Link href="#contact" className="text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-full bg-[#F97316] text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Radial orange glows */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(249,115,22,0.06), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(249,115,22,0.04), transparent 60%)" }} />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
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
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            Plant. Nurture.<br /><span className="text-[#F97316]">Harvest.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[#9CA3AF]">
            We blend digital marketing, content creation, web design, hosting, and custom development into a growth system that compounds over time. No gimmicks. No burnout. Just results that last.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-lg bg-[#F97316] text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              Start Your Growth Plan
            </Link>
            <Link href="#services" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-lg border-2 border-[#F97316] text-[#F97316] transition-all duration-300 hover:bg-white/5">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06]" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className={`text-center py-10 px-4 ${i < stats.length - 1 ? "md:border-r md:border-white/[0.06]" : ""}`}>
              <p className="text-4xl md:text-5xl font-bold mb-2 text-[#F97316]" style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.4))" }}>{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#9CA3AF]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section id="services" className="py-24 px-6">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium text-[#F97316]">What We Cultivate</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Services That Grow With You</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-[#9CA3AF]">
            Five core disciplines working together like a well-tended ecosystem. Each service strengthens the others, compounding your growth season after season.
          </p>
        </Reveal>
      </section>

      {/* SERVICES */}
      {services.map((s, i) => (
        <section key={s.num} className="py-20 px-6 border-t border-white/[0.06]">
          <div className={`max-w-7xl mx-auto flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
            <Reveal className="w-full lg:w-1/2 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="w-full lg:w-1/2">
              <div className="border-l-4 border-[#F97316] pl-6">
                <p className="text-6xl font-bold mb-4 opacity-20 text-[#F97316]">{s.num}</p>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">{s.title}</h3>
                <p className="text-base font-semibold uppercase tracking-wider mb-4 text-[#F97316]">{s.subtitle}</p>
                <p className="text-base leading-relaxed mb-6 text-[#9CA3AF]">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#F97316]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-lg border-2 border-[#F97316] text-[#F97316] transition-all duration-300 hover:bg-white/5">
                  Learn More
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* PROCESS — Vertical Timeline */}
      <section className="py-24 px-6 border-t border-white/[0.06]" style={{ background: "#111" }}>
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium text-[#F97316]">Our Growth Cycle</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From Seed to Harvest</h2>
          </Reveal>
          <div className="relative">
            {/* Orange vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#F97316]/30 -translate-x-1/2" />
            {steps.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.15} className={`relative flex items-start gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F97316] border-4 border-[#111] z-10 mt-1" style={{ boxShadow: "0 0 12px rgba(249,115,22,0.5)" }} />
                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:ml-auto"}`}>
                  <p className="text-4xl font-bold text-[#F97316] mb-2">{p.num}</p>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 px-6 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.08), transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium text-[#F97316]">Ready to Grow?</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Plant the First Seed Today</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-[#9CA3AF]">
              Every thriving business started with a single decision to grow. Let us build something rooted in strategy, nourished by creativity, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-lg bg-[#F97316] text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                Book a Free Discovery Call
              </Link>
              <Link href="#" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-lg border-2 border-[#F97316] text-[#F97316] transition-all duration-300 hover:bg-white/5">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER — 4 Column */}
      <footer className="py-16 px-6 border-t border-white/[0.06]" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + Tagline */}
          <div>
            <img src="/logo-transparent.png" alt="Simply Us & U" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed text-[#9CA3AF]">Plant. Nurture. Harvest. We grow businesses with strategy, creativity, and technology.</p>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>Digital Marketing</li>
              <li>Social Content Creation</li>
              <li>Website Design</li>
              <li>Website Hosting</li>
              <li>Software Development</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Case Studies</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li className="flex items-center gap-2"><Mail size={14} className="text-[#F97316]" /> hello@simplyusandyou.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-[#F97316]" /> (704) 555-0123</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-[#F97316]" /> Charlotte, NC</li>
            </ul>
          </div>
        </div>
        {/* Copyright bar */}
        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-[#9CA3AF]">&copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.</p>
          <p className="text-xs mt-1 text-[#555]">Concept 07 &middot; Greenfield Growth</p>
        </div>
      </footer>
    </main>
  );
}

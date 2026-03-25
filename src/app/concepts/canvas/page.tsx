"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24, filter: "blur(4px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay }} className={className}>{children}</motion.div>
  );
}

const stats = [
  { value: "1000+", label: "POSTS CREATED" },
  { value: "50M+", label: "REACH GENERATED" },
  { value: "85%", label: "ENGAGEMENT LIFT" },
  { value: "100%", label: "CUSTOM STRATEGY" },
];

const services = [
  { num: "01", title: "Digital Marketing", subtitle: "Paint The Market With Your Brand", desc: "From paid ads to organic funnels, we create marketing campaigns that are as creative as they are data-driven. We blend artistry with analytics to reach your audience where they live and convert them where it counts.", bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90" },
  { num: "02", title: "Social Content Creation", subtitle: "Craft Scroll-Stopping Stories", desc: "We design bold reels, striking graphics, and strategic content that stops thumbs and starts conversations. Every post is a brushstroke in your brand story, carefully composed for engagement, reach, and cultural relevance.", bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"], image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=90" },
  { num: "03", title: "Website Design", subtitle: "Design Experiences That Convert", desc: "We bring creative problem-solving to every pixel. Custom, conversion-focused websites built with bold aesthetics and intuitive UX — because great design isn't just beautiful, it's effective.", bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"], image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=90" },
  { num: "04", title: "Website Hosting", subtitle: "Keep Your Canvas Online", desc: "Fast, secure, and reliable hosting that keeps your digital masterpiece performing at its peak. We handle the infrastructure so your creative work is always accessible, always protected, always live.", bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"], image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90" },
  { num: "05", title: "Software & App Development", subtitle: "Automate The Mundane, Amplify The Creative", desc: "We build custom apps, CRM integrations, and automation pipelines that free your team from repetitive work. When machines handle the mundane, your people can focus on what humans do best: create, connect, and innovate.", bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90" },
];

const steps = [
  { num: "01", title: "Discover", desc: "We immerse ourselves in your brand, market, and audience to find the creative opportunity." },
  { num: "02", title: "Conceptualize", desc: "Bold strategy meets creative direction. We build the blueprint for standout work." },
  { num: "03", title: "Create", desc: "Campaigns launch, content ships, systems deploy. Every deliverable crafted with intent." },
  { num: "04", title: "Evolve", desc: "Data shapes the next iteration. We refine, test, and push the boundaries further." },
];

export default function CanvasPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center backdrop-blur-xl" style={{ background: "rgba(11,11,13,0.9)" }}>
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/concepts" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">← Concepts</Link>
          <Link href="/contact" className="px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-[#F97316] transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-105">
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Radial orange accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)" }} />
        </div>
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px" }} />
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal delay={0.15}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              Create. Connect.<br /><span className="text-[#F97316]">Convert.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[#9CA3AF]">
              We blend bold creative vision with strategic precision to build brands that captivate audiences and drive measurable business growth.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white bg-[#F97316] transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-105">
                Start Creating <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-[#F97316] border-2 border-[#F97316] transition-all duration-300 hover:bg-white/5">
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl md:text-5xl font-bold text-[#F97316]" style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.4))" }}>{s.value}</p>
                  <p className="text-xs mt-3 tracking-wider uppercase text-[#9CA3AF]">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#F97316]">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Creative <span className="text-[#F97316]">Services</span></h2>
        </Reveal>
      </section>

      {/* ── SERVICES ── */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={s.num} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <Reveal>
              <div className={`group flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 border-l-4 border-[#F97316] pl-6">
                  <p className="text-4xl md:text-5xl font-bold mb-2 text-[#F97316]">{s.num}</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm uppercase tracking-wider mb-4 font-semibold text-[#F97316]">{s.subtitle}</p>
                  <p className="text-base leading-relaxed mb-6 text-[#9CA3AF]">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#F97316]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider text-[#F97316] border-2 border-[#F97316] transition-all duration-300 hover:bg-white/5">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>
        );
      })}

      {/* ── PROCESS — Vertical Timeline ── */}
      <section className="border-t border-white/[0.06] mt-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#F97316]">How We Work</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">The Creative <span className="text-[#F97316]">Process</span></h2>
          </Reveal>
          <div className="relative">
            {/* Vertical orange line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#F97316]/30" />
            <div className="space-y-12">
              {steps.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.12}>
                  <div className="relative pl-12">
                    {/* Orange dot */}
                    <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-[#F97316] border-4 border-[#0B0B0D]" style={{ boxShadow: "0 0 12px rgba(249,115,22,0.5)" }} />
                    <span className="text-xs font-bold tracking-wider text-[#F97316]">STEP {p.num}</span>
                    <h3 className="text-xl font-bold tracking-tight mt-1 mb-2">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-[#9CA3AF]">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-28 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold text-[#F97316]">Ready to Create?</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Let&apos;s Build Something<br /><span className="text-[#F97316]">Impossible to Ignore</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-10 max-w-xl mx-auto">Stop blending in. Start standing out. Partner with us and create a brand presence that demands attention.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white bg-[#F97316] transition-all duration-300 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105">
              Start A Project <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 — Logo */}
            <div>
              <img src="/logo-transparent.png" alt="Simply Us & U" className="h-12 mb-4" />
              <p className="text-sm leading-relaxed text-[#9CA3AF]">Bold creative vision meets strategic precision. We build brands that captivate and convert.</p>
            </div>
            {/* Col 2 — Services */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li>Digital Marketing</li><li>Social Content</li><li>Website Design</li><li>Hosting</li><li>Software Development</li>
              </ul>
            </div>
            {/* Col 3 — Company */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Col 4 — Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-[#9CA3AF]">
                <li className="flex items-center gap-2"><Mail size={14} className="text-[#F97316]" /> hello@simplyusandyou.com</li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-[#F97316]" /> (555) 123-4567</li>
                <li className="flex items-center gap-2"><MapPin size={14} className="text-[#F97316]" /> Los Angeles, CA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-center">
            <p className="text-xs text-[#9CA3AF]">&copy; 2026 Simply Us & You. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

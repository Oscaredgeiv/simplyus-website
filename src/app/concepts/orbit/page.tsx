"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24, filter: "blur(4px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay }} className={className}>{children}</motion.div>
  );
}

const orange = "#E8811A";
const gray = "#9CA3AF";

const stats = [
  { value: "360\u00B0", label: "SERVICE COVERAGE" },
  { value: "24/7", label: "CAMPAIGN MONITORING" },
  { value: "100+", label: "BRANDS LAUNCHED" },
  { value: "5-STAR", label: "CLIENT REVIEWS" },
];

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    subtitle: "Deploy Full-Funnel Campaigns",
    desc: "From paid media to organic search, we launch data-driven marketing campaigns that acquire, nurture, and convert your ideal audience. Our mission-control approach ensures every dollar spent generates measurable returns across every channel.",
    bullets: ["Google & Meta Ads Management", "Search Engine Optimization", "Email Marketing & Automation", "Analytics & Performance Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    num: "02",
    title: "Social Content Creation",
    subtitle: "Command The Feed",
    desc: "We engineer scroll-stopping reels, graphics, and content strategies that dominate timelines and turn passive scrollers into loyal brand advocates. Every asset is mission-planned for maximum engagement and reach.",
    bullets: ["Social Media Strategy & Planning", "Content Creation (Photos, Video, Reels)", "Community Management & Engagement", "Brand Voice Development"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    num: "03",
    title: "Website Design",
    subtitle: "Architect Conversion Systems",
    desc: "We build custom, conversion-focused websites engineered for speed, clarity, and results. Every pixel is precision-placed, every interaction designed to guide visitors from landing to launch — turning browsers into buyers.",
    bullets: ["Custom UI/UX Design", "Mobile-First Responsive Layouts", "Landing Pages & Sales Funnels", "E-commerce Solutions"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    num: "04",
    title: "Website Hosting",
    subtitle: "Maintain Orbital Stability",
    desc: "Fast, secure, and bulletproof hosting infrastructure that keeps your digital presence online and performing at peak velocity. We handle the technical operations so you can focus on the mission ahead.",
    bullets: ["99.9% Uptime Guarantee", "SSL Certificates & Security", "Daily Backups & Monitoring", "Managed WordPress Hosting"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    num: "05",
    title: "Software & App Development",
    subtitle: "Engage Custom Systems",
    desc: "We build custom applications, CRM integrations, and automation pipelines that eliminate friction, connect your tech stack, and let your team focus on high-value mission-critical work.",
    bullets: ["Custom Web & Mobile Apps", "CRM Setup & Integration", "Workflow Automation", "API Development & Integrations"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

const process = [
  { num: "01", title: "Recon", desc: "Deep-scan your market, audience, and competition to map the full landscape." },
  { num: "02", title: "Architect", desc: "Engineer a custom growth blueprint with precision targeting and channel strategy." },
  { num: "03", title: "Deploy", desc: "Activate all systems. Campaigns launch, automations engage, results begin." },
  { num: "04", title: "Optimize", desc: "Continuous monitoring, A/B testing, and iterative improvements to maximize trajectory." },
];

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Subtle watermark — offset bottom-right, blurred, partially cropped */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img src="/logo.png" alt="" aria-hidden="true" className="absolute -bottom-32 -right-24 w-[700px] select-none opacity-[0.035]" style={{ filter: "blur(28px)" }} />
      </div>

      {/* Sticky top bar */}
      <nav className="sticky top-0 z-50 bg-[#0B0B0D]/85 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/concepts" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft size={16} /> <span>&larr; Back to Concepts</span>
          </Link>
          <img src="/logo.png" alt="Simply Us & U" className="h-9" />
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0B0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-transparent to-[#0B0B0D]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-44 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: orange }}>Simply Us & U</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              Launch. Scale.<br /><span style={{ color: orange }}>Dominate.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: gray }}>
              We engineer digital marketing systems, automate operations, and deploy social strategies that put your brand lightyears ahead of the competition.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:scale-105" style={{ backgroundColor: orange }}>
                Initiate Launch <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white border-2 transition-all duration-300 hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: orange }}>{s.value}</p>
                  <p className="text-xs mt-2 tracking-wider uppercase" style={{ color: gray }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: orange }}>What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core <span style={{ color: orange }}>Services</span></h2>
        </Reveal>
      </section>

      {/* 5 ALTERNATING SERVICE SECTIONS */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={s.num} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <Reveal>
              <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)" }}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: orange }}>{s.num}</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{s.title}</h3>
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
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>
        );
      })}

      {/* PROCESS */}
      <section className="border-t border-white/[0.06] mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: orange }}>How We Work</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">The Mission <span style={{ color: orange }}>Protocol</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.1}>
                <div className="rounded-lg border border-white/[0.06] border-t-2 pt-8 p-6" style={{ borderTopColor: orange }}>
                  <span className="text-4xl font-bold block mb-3" style={{ color: orange }}>{p.num}</span>
                  <h3 className="text-lg font-bold tracking-wider mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: gray }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <Reveal>
            <div className="text-center md:text-left">
              <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: orange }}>Ready for Launch?</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Let&apos;s Put Your Brand<br />In <span style={{ color: orange }}>Orbit</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 mb-10" style={{ color: gray }}>
                <span className="flex items-center gap-2 text-sm"><Mail size={16} style={{ color: orange }} /> hello@simplyusandyou.com</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:scale-105" style={{ backgroundColor: orange }}>
                  Start Your Mission <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:bg-white/5" style={{ borderColor: orange, color: orange }}>
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 text-center">
          <p className="text-xs" style={{ color: gray }}>&copy; 2026 Simply Us & You. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

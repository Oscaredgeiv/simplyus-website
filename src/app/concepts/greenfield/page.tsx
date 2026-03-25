"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

const orange = "#E8811A";
const dark = "#0A0A0A";
const gray = "#9CA3AF";

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
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
  { num: "01", title: "SOCIAL MEDIA MANAGEMENT", subtitle: "Cultivate Your Digital Presence", desc: "We plant the seeds of engagement across every platform. From content calendars to community management, we nurture your social channels into thriving ecosystems that attract, engage, and convert your ideal audience organically.", bullets: ["Content strategy & scheduling", "Community engagement", "Analytics & growth tracking", "Platform optimization"] },
  { num: "02", title: "DIGITAL MARKETING", subtitle: "Grow Targeted Campaigns", desc: "Data-driven campaigns rooted in research and designed to bloom. We cultivate paid and organic strategies that attract the right audience, nurture leads through the funnel, and harvest measurable results season after season.", bullets: ["SEO & content marketing", "PPC & paid social", "Email nurture sequences", "Conversion optimization"] },
  { num: "03", title: "OPERATIONS CONSULTING", subtitle: "Strengthen Your Roots", desc: "A thriving business needs strong roots. We dig into your operations, identify inefficiencies, and design streamlined processes that let your team focus on growth instead of getting tangled in daily chaos.", bullets: ["Process mapping & optimization", "SOP development", "Team workflow design", "Performance benchmarking"] },
  { num: "04", title: "PROJECT MANAGEMENT", subtitle: "Nurture Every Initiative", desc: "Every project is a garden that needs tending. We bring structure, timelines, and accountability to your initiatives so nothing falls through the cracks and every effort bears fruit on schedule.", bullets: ["Agile & waterfall frameworks", "Timeline & milestone tracking", "Cross-team coordination", "Risk mitigation planning"] },
  { num: "05", title: "SOFTWARE & AUTOMATION", subtitle: "Harvest Efficiency at Scale", desc: "Automate the repetitive so you can focus on the creative. We build and integrate software solutions that eliminate manual tasks, connect your tools, and let your business grow without growing your workload.", bullets: ["Workflow automation", "CRM & tool integrations", "Custom software solutions", "Data pipeline design"] },
];

const process = [
  { num: "01", title: "SEED", desc: "We listen, research, and map out a growth blueprint unique to your business." },
  { num: "02", title: "ROOT", desc: "Systems, strategy, and infrastructure are established for sustainable growth." },
  { num: "03", title: "GROW", desc: "Campaigns launch, content flows, and automation kicks in with building momentum." },
  { num: "04", title: "HARVEST", desc: "Leads convert, revenue grows, and your business reaches measurable new heights." },
];

export default function GreenfieldPage() {
  return (
    <main className="bg-[#0A0A0A] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* STICKY TOP BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/concepts" className="flex items-center gap-2 text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors">
            <ArrowLeft size={16} /> <span>&larr; Back to Concepts</span>
          </Link>
          <span className="text-sm font-bold uppercase tracking-wider">Simply Us &amp; You</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 30%, #E8811A22, transparent 70%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="uppercase tracking-[0.3em] text-sm mb-6 font-medium" style={{ color: orange }}>
            CONCEPT 07 &middot; GREENFIELD GROWTH
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
            PLANT. NURTURE.<br /><span style={{ color: orange }}>HARVEST.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: gray }}>
            We blend social media, digital marketing, operations, and automation into a growth system that compounds over time. No gimmicks. No burnout. Just results that last.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 transition-all hover:brightness-110" style={{ background: orange, color: "#fff" }}>
              START YOUR GROWTH PLAN
            </Link>
            <Link href="#services" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 transition-all hover:bg-white/5" style={{ border: `2px solid ${orange}`, color: orange }}>
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/10" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1} className={`text-center py-10 px-4 ${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}>
              <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: orange }}>{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: gray }}>{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section id="services" className="py-24 px-6">
        <FadeUp className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: orange }}>WHAT WE CULTIVATE</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">SERVICES THAT GROW WITH YOU</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: gray }}>
            Five core disciplines working together like a well-tended ecosystem. Each service strengthens the others, compounding your growth season after season.
          </p>
        </FadeUp>
      </section>

      {/* 5 ALTERNATING SERVICE SECTIONS */}
      {services.map((s, i) => (
        <section key={s.num} className="py-20 px-6 border-t border-white/10">
          <div className={`max-w-7xl mx-auto flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
            {/* Image placeholder */}
            <FadeUp className="w-full lg:w-1/2">
              <div className="aspect-[4/3] rounded-sm overflow-hidden" style={{ background: `linear-gradient(135deg, #1a1a1a, #2a2a2a, #1a1a1a)` }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold opacity-10" style={{ color: orange }}>{s.num}</span>
                </div>
              </div>
            </FadeUp>
            {/* Content */}
            <FadeUp delay={0.15} className="w-full lg:w-1/2">
              <p className="text-6xl font-bold mb-4 opacity-20" style={{ color: orange }}>{s.num}</p>
              <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-base font-semibold uppercase tracking-wider mb-4" style={{ color: orange }}>{s.subtitle}</p>
              <p className="text-base leading-relaxed mb-6" style={{ color: gray }}>{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm" style={{ color: gray }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: orange }} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 transition-all hover:bg-white/5" style={{ border: `2px solid ${orange}`, color: orange }}>
                LEARN MORE
              </Link>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className="py-24 px-6 border-t border-white/10" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: orange }}>OUR GROWTH CYCLE</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">FROM SEED TO HARVEST</h2>
          </FadeUp>
          <div className="grid md:grid-cols-4 gap-10">
            {process.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.12} className="text-center">
                <p className="text-5xl font-bold mb-4" style={{ color: orange }}>{p.num}</p>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: gray }}>{p.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/10">
        <FadeUp className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-medium" style={{ color: orange }}>READY TO GROW?</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">PLANT THE FIRST SEED TODAY</h2>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: gray }}>
            Every thriving business started with a single decision to grow. Let us build something rooted in strategy, nourished by creativity, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link href="#" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 transition-all hover:brightness-110" style={{ background: orange, color: "#fff" }}>
              BOOK A FREE DISCOVERY CALL
            </Link>
            <Link href="#" className="inline-block text-sm font-bold uppercase tracking-wider px-10 py-4 transition-all hover:bg-white/5" style={{ border: `2px solid ${orange}`, color: orange }}>
              VIEW OUR WORK
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm" style={{ color: gray }}>
            <span className="flex items-center gap-2"><Phone size={16} style={{ color: orange }} /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail size={16} style={{ color: orange }} /> hello@simplyusandyou.com</span>
            <span className="flex items-center gap-2"><MapPin size={16} style={{ color: orange }} /> Charlotte, NC</span>
          </div>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider mb-4">Simply Us &amp; You</p>
            <p className="text-xs leading-relaxed" style={{ color: gray }}>Growth-focused marketing and operations for businesses that refuse to stay small.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: orange }}>SERVICES</p>
            <ul className="space-y-2 text-xs" style={{ color: gray }}>
              <li>Social Media Management</li><li>Digital Marketing</li><li>Operations Consulting</li><li>Project Management</li><li>Software &amp; Automation</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: orange }}>COMPANY</p>
            <ul className="space-y-2 text-xs" style={{ color: gray }}>
              <li>About Us</li><li>Our Work</li><li>Careers</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: orange }}>CONNECT</p>
            <ul className="space-y-2 text-xs" style={{ color: gray }}>
              <li>LinkedIn</li><li>Instagram</li><li>Twitter / X</li><li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs" style={{ color: gray }}>&copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.</p>
          <p className="text-xs mt-1" style={{ color: "#555" }}>Concept 07 &middot; Greenfield Growth</p>
        </div>
      </footer>
    </main>
  );
}

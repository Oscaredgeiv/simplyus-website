"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Eye,
  Layers,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fade-in animation wrapper                                          */
/* ------------------------------------------------------------------ */
function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee scroll text                                                */
/* ------------------------------------------------------------------ */
function Marquee() {
  const items = [
    "Brand Strategy",
    "Digital Marketing",
    "Automation",
    "Social Media",
    "Web Design",
    "Content Creation",
    "SEO & Analytics",
    "Creative Direction",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-6 border-t border-b" style={{ borderColor: "#D6D0C9" }}>
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-sm tracking-[0.2em] uppercase flex items-center gap-12" style={{ color: "#8A8580" }}>
            {item}
            <span className="inline-block w-2 h-2" style={{ background: "#E63B2E" }} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
/* ------------------------------------------------------------------ */
const c = {
  bg: "#F5F0EB",
  cream: "#FAF7F2",
  ink: "#1A1A1A",
  red: "#E63B2E",
  gray: "#8A8580",
  border: "#D6D0C9",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  { num: "01", title: "Brand Strategy & Identity", desc: "We define who you are, how you speak, and why anyone should care. Every brand decision flows from strategy.", icon: Palette },
  { num: "02", title: "Digital Marketing", desc: "Paid media, organic growth, email funnels, and conversion optimization engineered around your goals.", icon: Megaphone },
  { num: "03", title: "Social Media Management", desc: "Content calendars, community management, and platform strategy that turns passive scrollers into buyers.", icon: Eye },
  { num: "04", title: "Automation & Operations", desc: "We wire your business to run itself. CRM flows, email sequences, task automation, and system integrations.", icon: Zap },
  { num: "05", title: "Web Design & Development", desc: "Fast, beautiful, conversion-focused websites built to work as hard as you do.", icon: Layers },
  { num: "06", title: "Creative Production", desc: "Photography direction, copywriting, video concepts, and graphic design that makes your brand undeniable.", icon: PenTool },
];

const process = [
  { num: "01", title: "Listen", desc: "We study your market, your customers, and your competition until we understand the territory better than anyone." },
  { num: "02", title: "Define", desc: "We distill insights into a sharp strategy with measurable objectives, clear positioning, and a creative brief." },
  { num: "03", title: "Build", desc: "Campaigns launch, systems get built, content ships. Every deliverable is crafted with precision and purpose." },
  { num: "04", title: "Refine", desc: "Data drives the next move. We test, iterate, and optimize relentlessly until the numbers speak for themselves." },
];

const testimonials = [
  { name: "Ava Richardson", role: "Founder, Meridian Studio", text: "They didn't just redesign our brand. They gave us a voice we didn't know we had. Revenue up 140% in six months." },
  { name: "Derek Okafor", role: "CEO, Baseline Co.", text: "Working with this team feels like having an unfair advantage. Our competitors genuinely don't understand what happened." },
  { name: "Lina Park", role: "Head of Growth, Tidal", text: "The automation systems alone paid for themselves in three weeks. The marketing results were a bonus on top of that." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function CanvasPage() {
  return (
    <div className="min-h-screen" style={{ background: c.bg, color: c.ink, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ---- Back nav ---- */}
      <div className="px-6 pt-6 md:px-12 lg:px-16">
        <Link href="/concepts" className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-60" style={{ color: c.gray }}>
          <ArrowLeft size={16} /> Back to Concepts
        </Link>
      </div>

      {/* ---- HERO ---- */}
      <section className="px-6 pt-24 pb-20 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase mb-10" style={{ color: c.gray }}>Simply Us & You</p>
        </FadeUp>

        <div className="mb-12">
          {["We", "Make", "Brands", "Impossible", "To Ignore"].map((word, i) => (
            <FadeUp key={word} delay={i * 0.07}>
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.92]"
                style={{ color: i === 3 ? c.red : c.ink }}
              >
                {word}
              </h1>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl">
            <p className="text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: c.gray, fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Simply Us & You is a strategy-first collective that blends creative marketing, operational precision, and automation engineering.
            </p>
            <Link href="/contact" className="text-lg font-semibold underline underline-offset-8 decoration-2 transition-colors hover:opacity-70 flex items-center gap-2 shrink-0" style={{ color: c.ink, textDecorationColor: c.red }}>
              Start a Project <ArrowUpRight size={20} />
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ---- MARQUEE ---- */}
      <Marquee />

      {/* ---- SERVICES ---- */}
      <section className="px-6 py-24 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: c.red }}>What We Do</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Capabilities</h2>
            </div>
            <p className="text-sm max-w-sm" style={{ color: c.gray }}>
              Six disciplines. One integrated team. Zero fluff.
            </p>
          </div>
        </FadeUp>

        <div>
          {services.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.06}>
              <div className="border-t py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start group" style={{ borderColor: c.border }}>
                <span className="text-5xl md:text-7xl font-extrabold tracking-tight md:col-span-2" style={{ color: `${c.ink}12`, WebkitTextStroke: `1.5px ${c.border}` }}>{s.num}</span>
                <div className="md:col-span-4 flex items-center gap-4">
                  <s.icon size={20} style={{ color: c.red }} />
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{s.title}</h3>
                </div>
                <p className="md:col-span-6 text-base leading-relaxed" style={{ color: c.gray }}>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
          <div className="border-t" style={{ borderColor: c.border }} />
        </div>
      </section>

      {/* ---- PROCESS ---- */}
      <section className="py-24" style={{ background: c.ink }}>
        <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: c.red }}>How We Work</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16" style={{ color: c.cream }}>The Process</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#333" }}>
            {process.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.08}>
                <div className="p-10 md:p-12" style={{ background: c.ink }}>
                  <span className="text-6xl font-extrabold tracking-tight block mb-4" style={{ color: c.red }}>{p.num}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ color: c.cream }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#999" }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <section className="px-6 py-20 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "200+", label: "Projects Delivered" },
              { val: "4.8x", label: "Average ROI" },
              { val: "98%", label: "Client Retention" },
              { val: "30+", label: "Hours Saved Weekly" },
            ].map((s, i) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: i === 0 ? c.red : c.ink }}>{s.val}</p>
                <p className="text-xs mt-2 tracking-[0.15em] uppercase" style={{ color: c.gray }}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className="px-6 py-24 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: c.red }}>Kind Words</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16">What They Say</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: c.border }}>
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ background: c.cream }}>
                <p className="text-base leading-relaxed mb-8 flex-1" style={{ color: c.ink, fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t pt-6" style={{ borderColor: c.border }}>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: c.gray }}>{t.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="px-6 py-24 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <div className="p-12 md:p-20 text-center" style={{ background: c.ink }}>
            <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: c.red }}>Ready?</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ color: c.cream }}>
              Let&apos;s make something
              <br />
              <span style={{ color: c.red }}>impossible to ignore.</span>
            </h2>
            <p className="max-w-md mx-auto mb-10 text-sm leading-relaxed" style={{ color: "#999" }}>
              No pitch decks. No fluff. Just a conversation about what your brand needs to win.
            </p>
            <Link
              href="/contact"
              className="text-lg font-semibold underline underline-offset-8 decoration-2 transition-colors hover:opacity-70 inline-flex items-center gap-2"
              style={{ color: c.cream, textDecorationColor: c.red }}
            >
              Start a Project <ArrowUpRight size={20} />
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="px-6 py-16 md:px-12 lg:px-16 border-t" style={{ borderColor: c.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-extrabold text-lg tracking-tight">Simply Us & You</p>
            <p className="text-xs mt-1" style={{ color: c.gray }}>Concept 06 &mdash; Canvas Collective</p>
          </div>
          <div className="flex gap-8 text-sm" style={{ color: c.gray }}>
            <Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
          </div>
          <p className="text-xs" style={{ color: c.gray }}>&copy; 2026 Simply Us & You. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

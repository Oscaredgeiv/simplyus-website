"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Leaf, MessageCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fade-in animation wrapper                                          */
/* ------------------------------------------------------------------ */
function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
/* ------------------------------------------------------------------ */
const c = {
  bg: "#FAFAF8",
  cream: "#F5F0EB",
  warmGray: "#6B6560",
  charcoal: "#2C2825",
  coral: "#E07A5F",
  sage: "#81B29A",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Social Media Management",
    desc: "Strategy, content creation, community management, and analytics — delivered consistently so your brand never goes quiet.",
  },
  {
    title: "Digital Marketing",
    desc: "Paid search, SEO, email campaigns, and funnel optimization grounded in data and aimed at measurable business growth.",
  },
  {
    title: "Operations Consulting",
    desc: "We map your workflows, find the friction, and redesign processes so your team can focus on the work that actually matters.",
  },
  {
    title: "Project Management",
    desc: "Clear timelines, accountable milestones, and transparent reporting from kickoff to completion — no micromanagement required.",
  },
  {
    title: "Software & Automation",
    desc: "Custom integrations, CRM workflows, and intelligent automation that remove repetitive tasks from your team\u2019s plate.",
  },
];

const values = [
  { title: "Simplicity over complexity", desc: "Every recommendation should make your life easier, not harder." },
  { title: "Transparency by default", desc: "You see what we see. No black boxes, no jargon walls." },
  { title: "Outcomes over output", desc: "We measure success in results, not deliverables." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ClarityPage() {
  return (
    <div className="min-h-screen" style={{ background: c.bg, color: c.charcoal, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ---- Nav / back ---- */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <Link href="/concepts" className="group flex items-center gap-2 text-sm transition-colors hover:opacity-70" style={{ color: c.warmGray }}>
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Concepts
        </Link>
        <span className="text-xs tracking-widest uppercase" style={{ color: c.warmGray }}>
          Concept 02
        </span>
      </nav>

      {/* ---- Hero ---- */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-12 md:pt-20">
        <FadeUp>
          <p className="mb-5 text-sm font-medium tracking-wide" style={{ color: c.coral }}>
            Simply Us &amp; You
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            className="max-w-3xl text-4xl leading-snug tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            We bring clarity to your marketing, operations, and growth.
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: c.warmGray }}>
            Simply Us &amp; You partners with ambitious businesses to manage their social media, run their digital marketing, streamline their operations, and automate what should not require a human touch.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: c.coral }}
            >
              Start a Conversation <MessageCircle size={15} />
            </Link>
            <span className="text-sm" style={{ color: c.warmGray }}>
              Free 30-minute consultation. No pitch deck. Just answers.
            </span>
          </div>
        </FadeUp>
      </section>

      {/* ---- Divider ---- */}
      <div className="mx-auto max-w-5xl px-6">
        <div style={{ height: 1, background: c.cream }} />
      </div>

      {/* ---- Services ---- */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <FadeUp>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: c.sage }}>
            What We Do
          </p>
          <h2 className="text-3xl tracking-tight sm:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Five disciplines, one team.
          </h2>
        </FadeUp>

        <div className="mt-16">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.06}>
              <div
                className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8"
                style={{ borderBottom: `1px solid ${c.cream}` }}
              >
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed" style={{ color: c.warmGray }}>
                    {s.desc}
                  </p>
                </div>
                <div className="hidden items-center justify-end md:col-span-1 md:flex">
                  <ArrowUpRight size={18} style={{ color: c.coral }} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ---- Philosophy pull-quote ---- */}
      <section className="py-24" style={{ background: c.cream }}>
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <Leaf size={28} strokeWidth={1.5} style={{ color: c.sage }} className="mb-8" />
            <blockquote
              className="max-w-3xl text-2xl leading-relaxed italic sm:text-3xl md:text-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: c.charcoal }}
            >
              &ldquo;We believe growth shouldn&rsquo;t come at the cost of clarity. The best systems are the ones you barely notice — because they just work.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm font-medium" style={{ color: c.warmGray }}>
              — The team at Simply Us &amp; You
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <FadeUp>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: c.sage }}>How We Think</p>
          <h2 className="text-3xl tracking-tight sm:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Our guiding principles.
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.1}>
              <div>
                <span className="mb-3 block font-mono text-xs" style={{ color: c.coral }}>0{i + 1}</span>
                <h3 className="text-lg font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: c.warmGray }}>{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ---- Testimonial ---- */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <FadeUp>
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <blockquote
              className="max-w-2xl text-xl leading-relaxed md:text-2xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &ldquo;What I appreciate most is that they don&rsquo;t just execute — they think. They challenged our assumptions, simplified our workflows, and delivered results we didn&rsquo;t think were possible this fast.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: c.sage }}
              >
                AP
              </div>
              <div>
                <p className="text-sm font-semibold">Amara Patel</p>
                <p className="text-xs" style={{ color: c.warmGray }}>Founder, Terrace &amp; Co.</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ---- CTA ---- */}
      <section className="py-24" style={{ background: c.cream }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <h2
              className="text-3xl tracking-tight sm:text-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Let&rsquo;s start with a conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed" style={{ color: c.warmGray }}>
              No pitch deck. No pressure. Just a 30-minute call to understand where you are and explore whether we are the right fit.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: c.coral }}
            >
              Start a Conversation <MessageCircle size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="mx-auto max-w-5xl px-6 py-12" style={{ borderTop: `1px solid ${c.cream}` }}>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs" style={{ color: c.warmGray }}>
            &copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: c.warmGray }}>
            <Link href="#" className="transition-opacity hover:opacity-70">Privacy</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Terms</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

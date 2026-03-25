"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sprout,
  TrendingUp,
  BarChart3,
  Zap,
  MessageSquare,
  Target,
  ArrowLeft,
  Leaf,
  Sun,
  TreePine,
  Quote,
} from "lucide-react";

/* ── colour tokens ── */
const C = {
  canopy: "#2D5016",
  sage: "#6B8F5E",
  fern: "#A3C585",
  sunlight: "#F5E6A3",
  cream: "#FBF8F0",
  bark: "#4A3728",
  terracotta: "#C4704B",
  petal: "#E8D5C4",
};

/* ── reusable fade-up wrapper ── */
function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── organic wave divider ── */
function WaveDivider({ flip = false, fill = C.cream }: { flip?: boolean; fill?: string }) {
  return (
    <div style={{ marginTop: -1, marginBottom: -1, lineHeight: 0, transform: flip ? "rotate(180deg)" : undefined }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: "100%", height: 60 }}>
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,30 1440,50 L1440,100 L0,100Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ── data ── */
const services = [
  { icon: MessageSquare, title: "Social Media Management", desc: "Cultivated content calendars, community engagement, and analytics that grow your audience like a well-tended garden." },
  { icon: Target, title: "Digital Marketing", desc: "Targeted campaigns rooted in data, designed to attract the right audience and nurture leads into loyal customers." },
  { icon: Zap, title: "Smart Automation", desc: "Streamlined workflows that free your time so you can focus on what you do best — running your business." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Clear, honest reporting that shows exactly how your growth ecosystem is performing season over season." },
  { icon: TrendingUp, title: "Brand Strategy", desc: "Organic brand positioning that lets your authentic voice take root and spread naturally." },
  { icon: Sprout, title: "Operations Support", desc: "Behind-the-scenes systems that keep everything running smoothly while your business flourishes." },
];

const process = [
  { phase: "Seed", icon: Sprout, tagline: "Plant the Vision", desc: "We listen deeply, research your market, and map out a growth blueprint unique to your business." },
  { phase: "Root", icon: TreePine, tagline: "Build the Foundation", desc: "Systems, strategy, and infrastructure are established to support sustainable, long-term growth." },
  { phase: "Grow", icon: Leaf, tagline: "Nurture & Expand", desc: "Campaigns launch, content flows, and automation kicks in — momentum builds week after week." },
  { phase: "Harvest", icon: Sun, tagline: "Reap the Results", desc: "Leads convert, revenue grows, and your business reaches new heights you can measure and feel." },
];

const testimonials = [
  { name: "Maya Chen", role: "Founder, Bloom Botanicals", text: "Working with Simply Us & You felt like finally having a team that understood our pace. Growth has been steady, stress-free, and genuinely exciting." },
  { name: "James Ortiz", role: "CEO, Fieldwork Co.", text: "They didn't just market our brand — they helped us build something that keeps growing on its own. That's rare." },
];

/* ══════════════════════════════════════════════ */
export default function GreenfieldPage() {
  return (
    <main style={{ background: C.cream, color: C.bark, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ── back link ── */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/concepts"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.85)", color: C.canopy, border: `1px solid ${C.fern}` }}
        >
          <ArrowLeft size={16} /> All Concepts
        </Link>
      </div>

      {/* ══════ HERO ══════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        style={{ background: `linear-gradient(170deg, ${C.cream} 0%, ${C.petal} 50%, ${C.sunlight}44 100%)` }}
      >
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{ background: C.fern }} />
        <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full opacity-15" style={{ background: C.sunlight }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Leaf size={48} style={{ color: C.fern }} className="mx-auto mb-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase tracking-[0.25em] text-sm mb-6 font-medium"
            style={{ color: C.sage }}
          >
            Simply Us &amp; You &middot; Concept 07
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: C.canopy }}
          >
            Grow Your Business the Way Nature Intended&nbsp;&mdash; Steadily, Sustainably, and Strong.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: C.bark }}
          >
            We blend social media management, digital marketing, and smart automation into a growth system that compounds over time. No gimmicks. No burnout. Just results that last.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}>
            <Link
              href="#contact"
              className="inline-block text-lg font-semibold px-10 py-4 rounded-2xl transition-transform hover:scale-105"
              style={{ background: C.canopy, color: "#fff" }}
            >
              Start Your Growth Plan 🌱
            </Link>
          </motion.div>
        </div>
      </section>

      <WaveDivider fill={C.cream} />

      {/* ══════ SERVICES ══════ */}
      <section className="py-24 px-6" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-sm mb-3 font-medium" style={{ color: C.terracotta }}>What We Cultivate</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Georgia, serif", color: C.canopy }}>
              Services That Grow With You
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl h-full transition-shadow hover:shadow-lg"
                  style={{ background: "#fff", border: `1px solid ${C.fern}33` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${C.fern}22` }}
                  >
                    <s.icon size={28} style={{ color: C.canopy }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: C.canopy }}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: C.bark, opacity: 0.85 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill={C.petal} />

      {/* ══════ PROCESS ══════ */}
      <section className="py-24 px-6" style={{ background: C.petal }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-20">
            <p className="uppercase tracking-[0.2em] text-sm mb-3 font-medium" style={{ color: C.terracotta }}>Our Growth Cycle</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Georgia, serif", color: C.canopy }}>
              From Seed to Harvest
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-10">
            {process.map((p, i) => (
              <FadeUp key={p.phase} delay={i * 0.15} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: `linear-gradient(135deg, ${C.fern}, ${C.canopy})` }}
                >
                  <p.icon size={32} color="#fff" />
                </div>
                <span
                  className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: `${C.canopy}15`, color: C.canopy }}
                >
                  Phase {i + 1}
                </span>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: C.canopy }}>
                  {p.phase}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: C.terracotta }}>{p.tagline}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.bark, opacity: 0.8 }}>{p.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill={C.cream} />

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-24 px-6" style={{ background: C.cream }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-sm mb-3 font-medium" style={{ color: C.terracotta }}>Kind Words</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Georgia, serif", color: C.canopy }}>
              Grown Together
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.15}>
                <div
                  className="relative p-10 rounded-3xl"
                  style={{ background: "#fff", border: `1px solid ${C.fern}33` }}
                >
                  <Leaf
                    size={64}
                    className="absolute -top-4 -right-4 opacity-10"
                    style={{ color: C.fern }}
                  />
                  <Quote size={28} style={{ color: C.fern }} className="mb-4" />
                  <p className="text-lg leading-relaxed mb-6 italic" style={{ color: C.bark }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${C.sage}, ${C.canopy})` }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold" style={{ color: C.canopy }}>{t.name}</p>
                      <p className="text-sm" style={{ color: C.sage }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill={`${C.canopy}`} />

      {/* ══════ CTA ══════ */}
      <section id="contact" className="py-24 px-6" style={{ background: C.canopy }}>
        <FadeUp className="max-w-3xl mx-auto text-center">
          <Sprout size={40} className="mx-auto mb-6" style={{ color: C.fern }} />
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#fff" }}
          >
            Ready to Plant the First Seed?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: C.petal }}>
            Every thriving business started with a single decision to grow. Let&apos;s build something rooted in strategy, nourished by creativity, and built to last.
          </p>
          <Link
            href="#"
            className="inline-block text-lg font-semibold px-10 py-4 rounded-2xl transition-transform hover:scale-105"
            style={{ background: C.sunlight, color: C.bark }}
          >
            Book a Free Discovery Call
          </Link>
        </FadeUp>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="py-16 px-6 text-center" style={{ background: C.bark }}>
        <p className="text-sm mb-2" style={{ color: C.petal, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Simply Us &amp; You. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: C.petal, opacity: 0.4 }}>
          Concept 07 &middot; Greenfield Growth
        </p>
      </footer>
    </main>
  );
}

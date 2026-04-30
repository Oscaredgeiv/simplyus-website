"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronDown,
  MonitorPlay,
  Share2,
  Repeat,
  FlaskConical,
  DollarSign,
  PieChart,
} from "lucide-react";
import Link from "next/link";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-lg border border-white/[0.06] bg-[#111111] p-5 text-left transition hover:border-white/[0.1]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#F97316] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">{answer}</p>
      )}
    </button>
  );
}

const features = [
  {
    icon: MonitorPlay,
    title: "Google Ads Management",
    description:
      "Search, Display, Shopping, and YouTube campaigns managed end-to-end with bid strategies optimized for your goals.",
  },
  {
    icon: Share2,
    title: "Meta / Facebook / Instagram Ads",
    description:
      "Full-funnel Meta campaigns from awareness to conversion, including lookalike audiences and dynamic creative.",
  },
  {
    icon: PieChart,
    title: "Ad Creative Design",
    description:
      "Scroll-stopping static images, carousels, and video ads designed to convert on every platform.",
  },
  {
    icon: FlaskConical,
    title: "A/B Testing & Optimization",
    description:
      "Systematic creative and audience testing to find winning combinations and continuously improve performance.",
  },
  {
    icon: Repeat,
    title: "Retargeting Campaigns",
    description:
      "Re-engage website visitors, cart abandoners, and past customers with personalized ad sequences.",
  },
  {
    icon: DollarSign,
    title: "Budget Strategy",
    description:
      "Data-driven budget allocation across platforms and campaigns to maximize return on every dollar spent.",
  },
];

const process = [
  {
    step: "01",
    title: "Research",
    description:
      "Audience analysis, competitor ad research, and platform selection to build a winning strategy.",
  },
  {
    step: "02",
    title: "Create",
    description:
      "Ad copy, visuals, and video assets produced and reviewed against platform best practices.",
  },
  {
    step: "03",
    title: "Test",
    description:
      "Structured A/B tests across audiences, creatives, and placements to identify top performers fast.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Winners get more budget, losers get cut. Continuous optimization and scaling of profitable campaigns.",
  },
];

const stats = [
  { value: "Strong", label: "ROAS Lift" },
  { value: "Strategic", label: "Spend Allocation" },
  { value: "A/B", label: "Tested Creative" },
  { value: "Always", label: "Optimizing" },
];

const faqs = [
  {
    q: "What is the minimum ad budget you recommend?",
    a: "For Google Ads, we recommend a minimum of $1,500 per month in ad spend. For Meta Ads, $1,000 per month is the minimum for meaningful data and optimization. These are in addition to our management fees. During strategy, we will model expected returns at different budget levels.",
  },
  {
    q: "Which platforms do you run ads on?",
    a: "We specialize in Google Ads (Search, Display, Shopping, YouTube) and Meta Ads (Facebook, Instagram). We also work with LinkedIn Ads for B2B clients and TikTok Ads for brands targeting younger demographics. We recommend platforms based on where your audience is most active.",
  },
  {
    q: "Do you create the ad creative or do I need to provide it?",
    a: "We handle everything from concept to final creative. Our team produces ad copy, static images, carousels, and short-form video ads optimized for each platform. If you have existing brand assets, we incorporate them into our designs.",
  },
  {
    q: "How do you report on ad performance?",
    a: "You get access to a real-time dashboard plus a detailed monthly report covering spend, impressions, clicks, conversions, ROAS, and CPA by campaign. We also include strategic recommendations and next steps in every report.",
  },
];

export default function AdCreationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,.14),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
                  Google Ads &middot; Meta Ads &middot; Creative &middot; A/B Testing
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)]">
                  Ads That Stop the Scroll and Drive Results
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-[#9CA3AF] leading-relaxed">
                  From ad creative and copywriting to campaign management and
                  optimization, we build ads that capture attention, generate
                  clicks, and turn impressions into revenue.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Strong ROAS Lift", "Strategic Spend", "Always Optimizing"].map((s) => (
                    <span key={s} className="rounded-full border border-white/[0.06] bg-white/5 px-4 py-1.5 text-xs font-medium text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]">
                    Launch Your Campaign <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+17705240488" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Phone className="h-4 w-4" /> (770) 524-0488
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="hidden lg:block">
              <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=90" alt="Ad campaign performance" className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">What We Deliver</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Full-Service Ad Management
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="h-full rounded-lg border border-white/[0.06] bg-[#111111] p-6">
                  <f.icon className="h-8 w-8 text-[#F97316]" />
                  <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">Our Process</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              From Research to Scale
            </h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F97316] to-[#F97316]/20 hidden sm:block" />
            <div className="space-y-10">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div className="flex gap-6 sm:gap-8 items-start">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white">{p.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#9CA3AF]">{p.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-white/[0.06] bg-[#111111]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-[#F97316] sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#9CA3AF]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Common Questions
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <FAQ question={f.q} answer={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">Related Services</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Explore More
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Digital Marketing",
                slug: "digital-marketing",
                description: "Full-funnel paid media, SEO, and email campaigns that drive measurable ROI.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              },
              {
                title: "Social Media & Content",
                slug: "social-media",
                description: "Scroll-stopping content and community management that amplifies your brand.",
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
              },
            ].map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link href={`/services/${s.slug}`} className="group flex flex-col rounded-lg border border-white/[0.06] bg-[#111111] overflow-hidden transition hover:border-[#F97316]/30">
                  <div className="h-40 overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-[#F97316] transition-colors">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#9CA3AF]">{s.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#F97316]">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Ready to Launch Ads That Convert?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[#9CA3AF] max-w-xl mx-auto">
              Get a free ad account audit and discover how to get more results
              from your ad spend.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]">
                Get Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+17705240488" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> (770) 524-0488
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

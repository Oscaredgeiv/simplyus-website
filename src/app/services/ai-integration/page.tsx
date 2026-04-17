"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronDown,
  Workflow,
  MessageSquare,
  BookOpen,
  ClipboardList,
  Plug,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { AILogoMesh } from "@/components/shared/ai-logo-mesh";

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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes — from lead intake and assignment to invoicing and status updates — using AI-powered workflows that run in the background.",
  },
  {
    icon: MessageSquare,
    title: "Follow-Up & Communication Systems",
    description:
      "Automated follow-up sequences, internal notifications, client check-ins, and status updates that keep nothing from slipping through the cracks.",
  },
  {
    icon: BookOpen,
    title: "Knowledge & Documentation",
    description:
      "Centralized knowledge bases, AI-assisted SOPs, and searchable documentation systems that capture what your team knows and make it accessible to everyone.",
  },
  {
    icon: ClipboardList,
    title: "Operations & Admin Automation",
    description:
      "Reduce the hours your team spends on scheduling, data entry, report generation, and routine admin through targeted AI automation.",
  },
  {
    icon: Plug,
    title: "CRM & Tool Integration",
    description:
      "Connect your existing tools — CRM, project management, email, calendar, and communication platforms — with AI layers that make them work harder for you.",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Adoption",
    description:
      "Hands-on training for your team on practical AI tools and workflows, with ongoing support to ensure adoption sticks and delivers real value.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit",
    description:
      "We map your current workflows, tools, and team processes to identify where AI can save the most time and reduce the most friction.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We build a custom automation plan targeting your highest-impact processes — with clear outcomes and timelines for each.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "We configure, integrate, and test every automation in your live environment — with your team involved at every step.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Ongoing monitoring, optimization, and training to make sure your AI systems keep delivering as your business evolves.",
  },
];

const stats = [
  { value: "50+", label: "Workflows Built" },
  { value: "60%", label: "Less Manual Work" },
  { value: "15+", label: "Hrs Saved Weekly" },
  { value: "12+", label: "Industries Served" },
];

const painPoints = [
  {
    problem: "Follow-ups get missed because they depend on someone remembering",
    outcome:
      "Automated sequences handle follow-up on schedule, every time",
  },
  {
    problem: "Onboarding new clients takes 3 hours of manual setup",
    outcome: "AI-powered intake cuts onboarding to 30 minutes",
  },
  {
    problem: "Status updates require 4 emails and a meeting",
    outcome:
      "Automated reports and notifications keep everyone current",
  },
  {
    problem:
      "SOPs live in someone's head — when they're out, the team is stuck",
    outcome:
      "Searchable knowledge base makes every process accessible",
  },
  {
    problem: "Your CRM has great data that nobody uses",
    outcome:
      "AI surfaces insights, triggers actions, and keeps records current",
  },
  {
    problem: "Admin work is scaling faster than your team",
    outcome:
      "Targeted automation handles the volume without adding headcount",
  },
];

const faqs = [
  {
    q: "Do I need to be technical to use AI in my business?",
    a: "Not at all. We build systems that work inside the tools your team already uses — email, CRM, project management, calendars, and messaging. Your team doesn't need to learn AI. They just get faster, more consistent tools.",
  },
  {
    q: "How is this different from your software development service?",
    a: "Software development builds custom applications from scratch — mobile apps, web platforms, APIs. AI Integration & Automation focuses on embedding AI into your existing tools and daily operations. Software development builds the car. AI integration makes it drive itself to the places you go every day.",
  },
  {
    q: "What tools and platforms do you integrate with?",
    a: "We work with whatever your business already uses — HubSpot, Salesforce, Slack, Microsoft Teams, Google Workspace, Asana, Monday, Notion, QuickBooks, and dozens of others. If your team uses it daily, we can integrate AI into it.",
  },
  {
    q: "How long does a typical AI integration project take?",
    a: "Most initial implementations take 2 to 4 weeks from audit to live deployment. Simpler automations can be running within days. We prioritize quick wins first so your team sees value immediately, then expand from there.",
  },
];

export default function AIIntegrationPage() {
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
                  Workflows &middot; Operations &middot; Communication &middot;
                  Automation
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)]">
                  Put AI to Work Across Your Business
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-[#9CA3AF] leading-relaxed">
                  We integrate practical AI into your daily operations —
                  automating follow-up, reducing manual work, standardizing
                  processes, and helping your team get more done without changing
                  the way you already work.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "50+ Workflows Built",
                    "60% Less Manual Work",
                    "12+ Industries Served",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[0.06] bg-white/5 px-4 py-1.5 text-xs font-medium text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
                  >
                    Get a Free Assessment <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+17705240488"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" /> (770) 524-0488
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="hidden lg:block">
              <div className="rounded-xl overflow-hidden border border-white/[0.06] h-[400px]">
                <AILogoMesh className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              What We Deliver
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              AI That Fits Your Business
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="h-full rounded-lg border border-white/[0.06] bg-[#111111] p-6">
                  <f.icon className="h-8 w-8 text-[#F97316]" />
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
                  Who It&apos;s For
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
                  Built for Teams That Run on Process
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[#9CA3AF] leading-relaxed">
                  This service is for businesses that already have clients,
                  systems, and workflows in place — but know they&apos;re
                  spending too much time on manual tasks that should be faster,
                  more consistent, and less dependent on one person remembering
                  to do them.
                </p>
                <p className="mt-4 text-[#9CA3AF] leading-relaxed">
                  You don&apos;t need to be technical. You don&apos;t need an AI
                  strategy. You just need a team that listens to how your
                  business actually operates and builds practical AI into the
                  places where it saves real time.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <ul className="space-y-4">
                {[
                  "Business owners managing operations across multiple roles",
                  "Operations managers overseeing teams and processes",
                  "Service businesses with high client communication volume",
                  "Growing companies whose admin is scaling faster than their team",
                  "Teams already using CRM, PM, and communication tools but not getting full value",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-[#F97316]" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              Why Businesses Come to Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Problems We Solve Every Day
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full rounded-lg border border-white/[0.06] bg-[#111111] p-6">
                  <p className="text-sm font-medium text-white/60">
                    The problem
                  </p>
                  <p className="mt-1 font-semibold text-white">{p.problem}</p>
                  <div className="my-4 h-px bg-white/[0.06]" />
                  <p className="text-sm font-medium text-[#F97316]">
                    The outcome
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#9CA3AF]">
                    {p.outcome}
                  </p>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              From Audit to Automation
            </h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F97316] to-[#F97316]/20 hidden sm:block" />
            <div className="space-y-10">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div className="flex gap-6 sm:gap-8 items-start">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white">
                      {p.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#9CA3AF]">
                        {p.description}
                      </p>
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
                  <p className="text-3xl font-extrabold text-[#F97316] sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#9CA3AF]">
                    {s.label}
                  </p>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              FAQ
            </p>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              Related Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Explore More
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Software & App Development",
                slug: "software-development",
                description:
                  "Custom apps, CRM integrations, workflow automation, and scalable software solutions.",
                image:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
              },
              {
                title: "Digital Marketing",
                slug: "digital-marketing",
                description:
                  "Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              },
            ].map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-lg border border-white/[0.06] bg-[#111111] overflow-hidden transition hover:border-[#F97316]/30"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-[#F97316] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#9CA3AF]">
                      {s.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#F97316]">
                      Learn More{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              Ready to Put AI to Work?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[#9CA3AF] max-w-xl mx-auto">
              Book a free 30-minute AI operations assessment. We&apos;ll audit
              your current workflows, identify your biggest time sinks, and show
              you exactly where AI can start saving hours this month.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
              >
                Book Your Free Assessment{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+17705240488"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> (770) 524-0488
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

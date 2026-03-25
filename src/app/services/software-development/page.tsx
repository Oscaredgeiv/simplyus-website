"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronDown,
  Smartphone,
  Database,
  Workflow,
  Code2,
  Server,
  Cloud,
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
    icon: Smartphone,
    title: "Custom Web & Mobile Apps",
    description:
      "Native and cross-platform applications built with modern frameworks for iOS, Android, and the web.",
  },
  {
    icon: Database,
    title: "CRM Setup & Integration",
    description:
      "HubSpot, Salesforce, or custom CRM solutions configured and integrated with your existing tools.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks with custom automations that save your team hours every week.",
  },
  {
    icon: Code2,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs that connect your systems, third-party services, and data sources seamlessly.",
  },
  {
    icon: Server,
    title: "Database Architecture",
    description:
      "Scalable database design, optimization, and migration for PostgreSQL, MongoDB, and more.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS, GCP, and Azure deployment with CI/CD pipelines, auto-scaling, and infrastructure as code.",
  },
];

const process = [
  {
    step: "01",
    title: "Scope",
    description:
      "We define requirements, user stories, and technical specifications through collaborative workshops.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "System architecture, database design, API contracts, and technology stack decisions documented and approved.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile sprints with regular demos, code reviews, and automated testing ensure quality at every step.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Production deployment with monitoring, documentation, training, and a transition to ongoing support.",
  },
];

const stats = [
  { value: "40+", label: "Apps Built" },
  { value: "150+", label: "Automations" },
  { value: "99.7%", label: "Uptime" },
  { value: "60%", label: "Time Saved" },
];

const faqs = [
  {
    q: "What tech stack do you use?",
    a: "We are stack-agnostic and choose the best tools for each project. Common choices include React and Next.js for web, React Native and Flutter for mobile, Node.js and Python for backends, and PostgreSQL or MongoDB for databases. We will recommend the ideal stack during the scoping phase.",
  },
  {
    q: "How long does a typical software project take?",
    a: "Timelines vary based on complexity. A simple automation or integration might take 2 to 4 weeks. A full custom application typically takes 2 to 4 months. We provide detailed timelines during the scoping phase and deliver in iterative sprints so you see progress every two weeks.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. Everything we build belongs to you. All source code, documentation, and assets are transferred to your repositories upon project completion. We believe in full transparency and ownership.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer flexible support plans that include bug fixes, feature enhancements, performance monitoring, and security updates. Many clients keep us on retainer for continuous improvement and new feature development.",
  },
];

export default function SoftwareDevelopmentPage() {
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
                  Apps &middot; CRM &middot; Automation &middot; APIs
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)]">
                  Custom Software Built for Your Business
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-[#9CA3AF] leading-relaxed">
                  From custom apps and CRM integrations to workflow automation
                  and API development, we build the software your business needs
                  to operate faster and scale smarter.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["40+ Apps Built", "150+ Automations", "60% Time Saved"].map((s) => (
                    <span key={s} className="rounded-full border border-white/[0.06] bg-white/5 px-4 py-1.5 text-xs font-medium text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Phone className="h-4 w-4" /> (555) 123-4567
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="hidden lg:block">
              <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90" alt="Software development code" className="w-full h-auto object-cover" />
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
              Software That Scales With You
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
              From Scope to Deployment
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
                title: "Website Design",
                slug: "website-design",
                description: "Custom, conversion-focused websites that look premium and perform even better.",
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
              },
              {
                title: "Website Hosting",
                slug: "hosting",
                description: "Fast, secure hosting with 99.9% uptime and managed infrastructure.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
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
              Ready to Build Something Great?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[#9CA3AF] max-w-xl mx-auto">
              Tell us about your project and get a free technical consultation
              with our development team.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> (555) 123-4567
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

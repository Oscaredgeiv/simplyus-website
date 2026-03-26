"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Metadata must be exported from a server component in Next 16,     */
/*  but since we need "use client" for animations we handle the       */
/*  <title> via a nested head or rely on layout template. We keep     */
/*  the page as a client component for framer-motion.                 */
/* ------------------------------------------------------------------ */

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
  },
  {
    num: "02",
    title: "Social Media & Content",
    slug: "social-media",
    description:
      "Scroll-stopping content, reels, graphics, and social strategy that grows your audience.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90",
  },
  {
    num: "03",
    title: "Website Design",
    slug: "website-design",
    description:
      "Custom, conversion-focused websites that look premium and perform even better.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=90",
  },
  {
    num: "04",
    title: "Website Hosting",
    slug: "hosting",
    description:
      "Fast, secure, and reliable hosting with 99.9% uptime and hands-free management.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90",
  },
  {
    num: "05",
    title: "Software & App Development",
    slug: "software-development",
    description:
      "Custom apps, CRM integrations, workflow automation, and scalable software solutions.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
  },
  {
    num: "06",
    title: "Ad Creation & Campaigns",
    slug: "ad-creation",
    description:
      "High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=90",
  },
] as const;

/* ---------- animation helper ---------- */
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

export default function ServicesPage() {
  return (
    <>
      {/* ---------- Hero / Header ---------- */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,.12),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316]">
              What We Build
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Services That Drive Growth
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#9CA3AF] leading-relaxed">
              End-to-end digital services — from marketing and content to web
              design, hosting, and custom software. One partner, zero gaps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Service Cards Grid ---------- */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-lg border border-white/[0.06] bg-[#111111] overflow-hidden transition-all duration-300 hover:border-[#F97316]/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,.15)]"
                >
                  {/* image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold tracking-widest text-[#F97316]">
                      {service.num}
                    </span>
                    <h2 className="mt-2 text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-[#9CA3AF] leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-[family-name:var(--font-plus-jakarta-sans)]">
              Not Sure Where to Start?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[#9CA3AF] max-w-xl mx-auto">
              Book a free strategy call and we&apos;ll map the fastest path to
              growth for your business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

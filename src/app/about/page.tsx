"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Handshake,
  Target,
  Calendar,
  Users,
  Briefcase,
  FolderCheck,
  ArrowRight,
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
  const ref = useRef(null);
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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of trends and leverage cutting-edge strategies to give your business a competitive edge in an ever-evolving digital landscape.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Your success is our success. We work alongside you as an extension of your team, building lasting relationships rooted in transparency and trust.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "Every strategy we craft is data-driven and results-oriented. We measure what matters and relentlessly optimize to deliver real, measurable growth.",
  },
];

const stats = [
  { icon: Calendar, value: "8+", label: "Years in Business" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Briefcase, value: "15+", label: "Team Members" },
  { icon: FolderCheck, value: "500+", label: "Projects Delivered" },
];

const milestones = [
  {
    year: "2017",
    title: "Founded",
    description:
      "Simply Us & U was born from a simple belief: small businesses deserve big-agency results without the big-agency price tag.",
  },
  {
    year: "2018",
    title: "First Major Client",
    description:
      "Landed our first enterprise-level partnership, proving our model could scale while maintaining the personal touch that sets us apart.",
  },
  {
    year: "2020",
    title: "Expanded to Software",
    description:
      "Added custom software development and SaaS solutions to our toolkit, becoming a true full-service digital partner for our clients.",
  },
  {
    year: "2024",
    title: "100th Client",
    description:
      "Reached a major milestone of 100 clients served across dozens of industries, with a 95% client satisfaction rate.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
              Who We Are
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              We&apos;re Simply Us &amp; U
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              We&apos;re a full-service digital agency that helps businesses
              grow through strategic marketing, stunning design, and powerful
              technology. Founded in 2017, we&apos;ve spent years perfecting the
              art of turning ambitious ideas into measurable results — and
              we&apos;re just getting started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Our Core Values
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#9CA3AF] text-center max-w-2xl mx-auto mb-14">
              These principles guide every decision we make and every project we
              take on.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 * (i + 1)}>
                <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="text-center">
                  <s.icon className="w-6 h-6 text-[#F97316] mx-auto mb-3" />
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm text-[#9CA3AF]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Our Story
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#9CA3AF] text-center max-w-xl mx-auto mb-14">
              From a one-person side project to a full-service agency — here are
              the milestones that shaped who we are.
            </p>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#F97316]/30" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={0.15 * i}>
                  <div
                    className={`relative flex items-start gap-8 md:gap-12 ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse md:text-right"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F97316] border-4 border-[#0B0B0D] z-10 mt-1.5" />

                    {/* Content */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                      <span className="inline-block text-sm font-bold text-[#F97316] mb-1">
                        {m.year}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[#9CA3AF] leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-10 sm:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-[#9CA3AF] max-w-xl mx-auto mb-8 text-lg">
                Let&apos;s talk about how we can help your business grow. No
                pressure, no jargon — just a real conversation about your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

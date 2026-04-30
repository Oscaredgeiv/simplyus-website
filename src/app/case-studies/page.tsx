"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center pt-20 pb-16">
        <Reveal>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            Client Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Case Studies Coming Soon
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-10">
            We&apos;re putting together detailed write-ups of the work
            we&apos;ve done with our clients. In the meantime, check out what
            they&apos;re saying about us on the homepage — or reach out and
            we&apos;ll happily walk you through real examples of our work.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#testimonials"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
            >
              See What Clients Say
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

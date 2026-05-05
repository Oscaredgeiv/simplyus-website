"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface LocalHeroProps {
  eyebrow: string; // e.g. "Serving Dacula, GA"
  heading: string; // e.g. "Digital Marketing in Dacula, GA"
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showPhone?: boolean;
}

export function LocalHero({
  eyebrow,
  heading,
  description,
  primaryCta = { label: "Get a Free Quote", href: "/contact" },
  secondaryCta,
  showPhone = true,
}: LocalHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* radial backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />

      <div className="relative mx-auto max-w-4xl text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              {secondaryCta.label}
            </Link>
          )}

          {showPhone && (
            <a
              href="tel:+17705240488"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> (770) 524-0488
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

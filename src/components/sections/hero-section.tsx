"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(249,115,22,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(249,115,22,0.04) 0%, transparent 50%), #0B0B0D",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content — everything in normal flow, vertically centered */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* LOGO — the hero, the brand, the anchor */}
        <motion.img
          src="/logo-transparent.png"
          alt="Simply Us & U"
          className="mb-8 w-[340px] sm:w-[440px] md:w-[520px] lg:w-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0, 1] }}
        />

        {/* Thin orange divider — visual breath between logo and headline */}
        <motion.div
          className="mb-8 h-px w-14 bg-[#F97316]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Headline — intentionally smaller than the logo's presence */}
        <motion.h1
          className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0, 1] }}
        >
          Digital Marketing. Web Design.
          <br />
          <span className="text-[#F97316]">Software Development.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#9CA3AF] sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0, 1] }}
        >
          The growth engine behind brands that move fast. Marketing, design, and
          technology — deployed as one integrated system.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_0_24px_rgba(249,115,22,0.25)]"
          >
            Get a Free Quote
          </Link>
          <Link
            href="mailto:hello@simplyusandyou.com"
            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#F97316] transition-colors duration-200 hover:text-white"
          >
            Or Email Us <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

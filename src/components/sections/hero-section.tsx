"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 40%, rgba(249,115,22,0.1) 0%, transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(249,115,22,0.04) 0%, transparent 50%), #0B0B0D",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Logo — offset right, large, the brand backdrop */}
      <motion.img
        src="/logo-transparent.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[750px] select-none sm:w-[950px] md:w-[1150px] lg:w-[1350px] xl:w-[1550px]"
        initial={{ opacity: 0, scale: 0.88, x: 60 }}
        animate={{ opacity: 0.25, scale: 1, x: 0 }}
        transition={{ duration: 2, ease: [0.25, 0.4, 0, 1] }}
      />

      {/* Content — left-aligned, overlapping the logo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-20">
        <div className="max-w-3xl">
          {/* Headline — big, bold, left-aligned */}
          <motion.h1
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0, 1] }}
          >
            Digital Marketing.
            <br />
            Web Design.
            <br />
            <span className="text-[#F97316]">Software Development.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#9CA3AF] md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0, 1] }}
          >
            The growth engine behind brands that move fast. Marketing, design,
            and technology — deployed as one integrated system.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
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
      </div>
    </section>
  );
}

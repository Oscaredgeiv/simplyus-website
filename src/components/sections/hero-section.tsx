"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Dual radial orange gradient blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.05) 0%, transparent 50%), #0B0B0D",
        }}
      />

      {/* SVG grain/noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content — logo ABOVE text in normal flow */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
        {/* Logo — large, visible, ABOVE the headline */}
        <motion.img
          src="/logo-transparent.png"
          alt="Simply Us & U"
          className="mx-auto mb-8 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] select-none"
          initial={{ opacity: 0, y: -20, scale: 1.05 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Headline */}
        <motion.h1
          className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Digital Marketing. Web Design.{" "}
          <span className="text-[#F97316]">Software Development.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF] md:text-lg"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The velocity growth engine behind brands that move fast. We deploy
          marketing, operations, and automation as one integrated system.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
          >
            GET A FREE QUOTE
          </Link>
          <Link
            href="mailto:info@simplyusandyou.com"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F97316] transition-all duration-300 hover:text-white"
          >
            OR EMAIL US <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

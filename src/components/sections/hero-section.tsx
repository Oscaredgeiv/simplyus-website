"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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

      {/* ===== MOBILE LAYOUT (stacked: logo above text) ===== */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-12 md:hidden">
        {/* Logo — centered, fully visible, animates in */}
        <motion.img
          src="/logo-transparent.png"
          alt="Simply Us & U"
          className="-mb-40 w-[160vw] max-w-[1600px] select-none -mx-[30vw] relative z-0"
          style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Text content — centered on mobile */}
        <motion.h1
          className="relative z-10 text-center text-3xl font-bold leading-[1.1] tracking-tight"
          style={{ textShadow: "0 2px 20px rgba(11,11,13,0.9), 0 0 40px rgba(11,11,13,0.8)" }}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Digital Marketing.
          <br />
          Web Design.
          <br />
          <span className="text-[#F97316]">Software Development.</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-sm text-center text-sm leading-relaxed text-[#9CA3AF]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          The growth engine behind brands that move fast. Marketing, design,
          and technology — deployed as one integrated system.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-col items-center gap-3 w-full max-w-xs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#EA580C]"
          >
            Get a Free Quote
          </Link>
          <Link
            href="mailto:Support@SimplyUsandU.com"
            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#F97316] transition-colors duration-200 hover:text-white"
          >
            Or Email Us <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>

      {/* ===== DESKTOP LAYOUT (logo offset right, text left) ===== */}
      <div className="relative z-10 hidden min-h-screen items-center md:flex">
        {/* Centering shell — keeps everything contained on ultrawide */}
        <div className="relative mx-auto w-full max-w-[1400px] min-h-screen flex items-center px-6">
        {/* Logo — offset right backdrop, pinned inside the container */}
        <motion.img
          src="/logo-transparent.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 select-none w-[1200px] lg:w-[1450px] xl:w-[1650px]"
          initial={{ opacity: 0, scale: 0.85, x: 80 }}
          animate={{ opacity: 0.25, scale: 1, x: 0 }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Text content — left-aligned */}
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <motion.h1
              className="text-5xl font-bold leading-[1.05] tracking-tight lg:text-7xl"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Digital Marketing.
              <br />
              Web Design.
              <br />
              <span className="text-[#F97316]">Software Development.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-[#9CA3AF] lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            >
              The growth engine behind brands that move fast. Marketing, design,
              and technology — deployed as one integrated system.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_0_24px_rgba(249,115,22,0.25)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="mailto:Support@SimplyUsandU.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#F97316] transition-colors duration-200 hover:text-white"
              >
                Or Email Us <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
        </div>{/* close centering shell */}
      </div>
    </section>
  );
}

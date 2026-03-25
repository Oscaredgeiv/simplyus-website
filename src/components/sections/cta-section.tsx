"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, Mail } from "lucide-react";

function Reveal({
  children,
  className = "",
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

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28" id="contact">
      {/* Radial orange glow */}
      <div className="absolute inset-0 bg-[#0a0a0c]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
            FREE ESTIMATES
          </p>
          <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
            READY TO ACCELERATE?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#F97316]" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            Book a free 30-minute strategy call. No sales deck — just a candid
            conversation about where you are and where you want to go.
          </p>

          {/* Phone number */}
          <p className="mt-8 text-3xl font-bold text-[#F97316] md:text-4xl">
            (555) 123-4567
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              <Phone size={16} /> CALL NOW
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#F97316] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F97316] transition-all duration-300 hover:bg-white/5"
            >
              <Mail size={16} /> EMAIL US
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

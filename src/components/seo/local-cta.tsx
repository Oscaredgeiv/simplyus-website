"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface LocalCTAProps {
  heading: string;
  description?: string;
  cityName?: string;
}

export function LocalCTA({ heading, description, cityName }: LocalCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative border-t border-white/[0.06] overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {heading}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-[#9CA3AF] mb-8 max-w-xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
          >
            {cityName ? `Talk to Us About ${cityName}` : "Start a Conversation"}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+17705240488"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> (770) 524-0488
          </a>
          <a
            href="mailto:Support@SimplyUsandU.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

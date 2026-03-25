"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/testimonials";

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

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      {/* Section header */}
      <Reveal>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="mt-4 h-1 w-16 bg-[#F97316]" />
      </Reveal>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1}>
            <div className="relative rounded-lg border border-white/[0.06] bg-[#111111] p-6 transition-colors duration-300 hover:border-white/[0.12]">
              {/* Decorative quote mark */}
              <span className="pointer-events-none absolute -top-2 left-5 select-none text-6xl font-bold leading-none text-[#F97316] opacity-20">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="relative z-10 pt-4 text-sm leading-relaxed text-white/90">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="mt-0.5 text-xs text-[#9CA3AF]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

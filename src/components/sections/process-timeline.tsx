"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const steps = [
  {
    num: "01",
    title: "DISCOVERY",
    desc: "Deep audit of your current channels, tech stack, and key performance metrics.",
  },
  {
    num: "02",
    title: "STRATEGY",
    desc: "Custom growth blueprint aligned to your goals, timeline, and budget.",
  },
  {
    num: "03",
    title: "EXECUTION",
    desc: "We deploy, manage, and iterate fast — with weekly reporting and full transparency.",
  },
  {
    num: "04",
    title: "SCALE",
    desc: "Double down on what works, automate the rest, and accelerate growth.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      {/* Section header */}
      <Reveal>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
          HOW IT WORKS
        </p>
        <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
          OUR PROCESS
        </h2>
        <div className="mt-4 h-1 w-16 bg-[#F97316]" />
      </Reveal>

      {/* Desktop: horizontal timeline / Mobile: vertical */}
      <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Horizontal connector line (desktop only) */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(249,115,22,0.2), #F97316, rgba(249,115,22,0.2))",
          }}
        />

        {/* Vertical connector line (mobile only) */}
        <div
          className="pointer-events-none absolute bottom-0 left-6 top-0 w-0.5 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(249,115,22,0.2), #F97316, rgba(249,115,22,0.2))",
          }}
        />

        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.15}>
            <div className="relative pl-12 pt-4 sm:pl-0">
              {/* Desktop connector dot */}
              <div className="absolute -top-1.5 left-6 hidden h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#F97316] bg-[#0B0B0D] lg:flex">
                <div className="h-2 w-2 rounded-full bg-[#F97316]" />
              </div>

              {/* Mobile connector dot */}
              <div className="absolute left-[14px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#F97316] bg-[#0B0B0D] sm:hidden">
                <div className="h-2 w-2 rounded-full bg-[#F97316]" />
              </div>

              {/* Ring animation on dot (desktop) */}
              <motion.div
                className="absolute -top-3.5 left-[14px] hidden h-9 w-9 rounded-full border border-[#F97316]/30 lg:block"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />

              <span className="text-4xl font-bold text-[#F97316]">
                {s.num}
              </span>
              <h3 className="mt-3 text-lg font-bold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

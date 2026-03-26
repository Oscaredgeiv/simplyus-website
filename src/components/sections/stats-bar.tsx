"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="border-y border-white/[0.06] bg-[#111111]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4 px-4 sm:px-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center gap-1 px-4 py-8 sm:flex-row sm:gap-3 sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <span className="text-3xl font-bold text-[#F97316] drop-shadow-[0_0_20px_rgba(249,115,22,0.15)] sm:text-4xl md:text-5xl">
              {s.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

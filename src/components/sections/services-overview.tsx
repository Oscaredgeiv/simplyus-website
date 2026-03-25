"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

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

export function ServicesOverview() {
  return (
    <section>
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-8">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F97316]">
            WHAT WE DO
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            OUR SERVICES
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#F97316]" />
        </Reveal>
      </div>

      {/* Service split sections */}
      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <div key={s.num} className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <div
                className={`group flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden rounded-lg border border-white/[0.06] bg-[#1a1a1a] lg:h-96 lg:w-1/2">
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="relative w-full border-l-4 border-[#F97316] pl-8 lg:w-1/2">
                  {/* Ghost number */}
                  <span className="pointer-events-none absolute -left-2 -top-10 select-none text-[120px] font-bold leading-none text-[#F97316] opacity-[0.06]">
                    {s.num}
                  </span>

                  <p className="text-sm font-semibold text-[#9CA3AF]">
                    {s.num}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                    {s.subtitle}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-[#9CA3AF]">
                    {s.shortDescription}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-[#F97316]" />
                        <span className="text-sm font-semibold text-[#9CA3AF]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F97316] transition-colors duration-300 hover:text-white"
                  >
                    LEARN MORE <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}

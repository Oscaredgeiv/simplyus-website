"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICE_SLUGS, SERVICES_META } from "@/lib/seo-helpers";

interface ServiceMiniGridProps {
  heading?: string;
  /** When set, links go to /areas/[citySlug]/[service] for each service */
  citySlug?: string;
  /** When set, links go to /counties/[countySlug]/[service] for each service */
  countySlug?: string;
  /** Optional override description */
  intro?: string;
}

export function ServiceMiniGrid({
  heading = "All Services",
  citySlug,
  countySlug,
  intro,
}: ServiceMiniGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {heading}
          </h2>
          {intro && (
            <p className="text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_SLUGS.map((slug, i) => {
            const meta = SERVICES_META[slug];
            const href = citySlug
              ? `/areas/${citySlug}/${slug}`
              : countySlug
                ? `/counties/${countySlug}/${slug}`
                : `/services/${slug}`;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * i,
                  ease: [0.25, 0.4, 0, 1],
                }}
              >
                <Link
                  href={href}
                  className="group flex flex-col h-full rounded-lg border border-white/[0.06] bg-[#111111] p-6 transition hover:border-[#F97316]/30 hover:bg-[#161616]"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F97316] transition-colors mb-2">
                    {meta.name}
                  </h3>
                  <p className="flex-1 text-sm text-[#9CA3AF] leading-relaxed">
                    {meta.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

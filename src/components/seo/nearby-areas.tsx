"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { City } from "@/data/cities";

interface NearbyAreasProps {
  heading?: string;
  cities: City[];
  /** Optional service slug to deep-link service+city */
  serviceSlug?: string;
}

export function NearbyAreas({
  heading = "Nearby Areas We Serve",
  cities,
  serviceSlug,
}: NearbyAreasProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (cities.length === 0) return null;

  return (
    <section
      ref={ref}
      className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map((city, i) => {
            const href = serviceSlug
              ? `/areas/${city.slug}/${serviceSlug}`
              : `/areas/${city.slug}`;
            return (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.04 * i,
                  ease: [0.25, 0.4, 0, 1],
                }}
              >
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 transition hover:border-[#F97316]/30 hover:bg-[#161616]"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                    {city.name}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF] transition-all group-hover:translate-x-0.5 group-hover:text-[#F97316]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

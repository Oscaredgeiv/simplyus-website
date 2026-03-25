"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Reveal({
  children,
  className,
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

const caseStudies = [
  {
    client: "Bloom Wellness Studio",
    industry: "Health & Wellness",
    metric: "400% follower growth",
    excerpt:
      "Transformed their social media presence from zero engagement to a thriving community. Revenue jumped 185% within the first six months of our partnership.",
    services: ["Social Media", "Content Creation", "Paid Ads"],
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
  },
  {
    client: "Apex Property Group",
    industry: "Real Estate",
    metric: "2x faster delivery",
    excerpt:
      "Streamlined operations with a custom project management platform, cutting project delivery time in half and reducing overhead by 35%.",
    services: ["Software Development", "Process Automation"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    client: "Elevate Coaching Co",
    industry: "Professional Services",
    metric: "312% ROI increase",
    excerpt:
      "Built an end-to-end marketing automation system that tripled their return on ad spend while freeing up 15 hours per week of manual work.",
    services: ["Marketing Automation", "Email Marketing", "CRM Setup"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    client: "Oakridge Financial",
    industry: "Finance",
    metric: "3x conversion rate",
    excerpt:
      "Redesigned their outdated website into a high-converting lead generation machine, tripling their monthly appointment bookings within 90 days.",
    services: ["Web Design", "SEO", "Conversion Optimization"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    client: "Luxe Salon & Spa",
    industry: "Beauty & Wellness",
    metric: "60% time saved",
    excerpt:
      "Developed a custom booking and inventory management app that eliminated double-bookings and saved 60% of daily administrative time.",
    services: ["Custom App", "Software Development", "UX Design"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
  },
  {
    client: "Clearview Dental",
    industry: "Healthcare",
    metric: "Page 1 in 6 months",
    excerpt:
      "Executed a targeted SEO and PPC strategy that catapulted them to page one of Google for their top 12 keywords in just six months.",
    services: ["SEO", "PPC Advertising", "Local Marketing"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
              Our Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Results That Speak for Themselves
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Real projects, real numbers, real growth. Here&apos;s a look at
              how we&apos;ve helped businesses like yours achieve their goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.client} delay={0.08 * i}>
              <div className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={cs.image}
                    alt={cs.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {cs.client}
                    </h3>
                    <span className="text-xs font-medium bg-[#F97316]/10 text-[#F97316] px-2.5 py-1 rounded-full whitespace-nowrap">
                      {cs.industry}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#F97316] mb-3">
                    {cs.metric}
                  </p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4 flex-1">
                    {cs.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-[#9CA3AF] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

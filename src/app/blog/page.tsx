"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

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

export default function BlogPage() {
  const featured = posts[0];
  const grid = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
              Insights &amp; Resources
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Expert Knowledge, Zero Fluff
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Practical strategies and insights from the trenches. Everything we
              publish is designed to help you grow your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden md:grid md:grid-cols-2 hover:border-white/[0.12] transition-colors"
            >
              <div className="relative h-64 md:h-full min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <span className="inline-block self-start text-xs font-semibold tracking-widest uppercase text-[#F97316] mb-3">
                  {featured.category}
                </span>
                <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-4">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#F97316] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#9CA3AF] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden h-full flex flex-col hover:border-white/[0.12] transition-colors"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block self-start text-xs font-semibold tracking-widest uppercase text-[#F97316] mb-2">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[#F97316] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

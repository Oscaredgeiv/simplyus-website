"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

const posts = [
  {
    title:
      "Why Your Business Needs a Full-Funnel Marketing Strategy in 2025",
    excerpt:
      "Most businesses pour money into ads without a plan for what happens after the click. Learn how a full-funnel approach turns strangers into loyal customers.",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "The Ultimate Guide to Social Media Content That Converts",
    excerpt:
      "Likes are nice, but revenue is better. Here are the content frameworks top brands use to turn scrollers into buyers.",
    date: "Jan 8, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
  },
  {
    title: "5 Signs Your Website Is Costing You Customers",
    excerpt:
      "Your website might be your biggest liability. Slow load times, confusing navigation, and poor mobile design silently drive customers away every day.",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
  },
  {
    title: "How Marketing Automation Can Save You 20 Hours Per Week",
    excerpt:
      "Stop doing manually what software can do better. We break down the automations that free up your time and boost your results.",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    title: "Choosing the Right Tech Stack for Your Business",
    excerpt:
      "React vs. WordPress? Custom code vs. no-code? The right choice depends on your goals, budget, and timeline. Here is how to decide.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  },
  {
    title:
      "Google Ads vs. Meta Ads: Where Should You Spend Your Budget?",
    excerpt:
      "Both platforms can deliver incredible ROI, but only if you use them correctly. We compare reach, intent, cost, and performance for different business types.",
    date: "Nov 15, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
  },
];

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
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-4">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[#9CA3AF] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all cursor-pointer">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((post, i) => (
            <Reveal key={post.title} delay={0.08 * i}>
              <div className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

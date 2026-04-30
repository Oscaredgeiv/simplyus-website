"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { PostBlock } from "@/data/posts";

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-content space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <Reveal key={i}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 tracking-tight">
                    {block.text}
                  </h2>
                </Reveal>
              );
            }
            return (
              <Reveal key={i}>
                <h3 className="text-xl font-bold text-white mt-8 mb-3 tracking-tight">
                  {block.text}
                </h3>
              </Reveal>
            );

          case "paragraph":
            return (
              <Reveal key={i}>
                <p className="text-base sm:text-lg leading-[1.8] text-[#D1D5DB]">
                  {block.text}
                </p>
              </Reveal>
            );

          case "list":
            return (
              <Reveal key={i}>
                <ul className="space-y-2 my-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base sm:text-lg leading-[1.7] text-[#D1D5DB]"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={i}>
                <blockquote className="border-l-4 border-[#F97316] pl-6 my-8 italic text-lg text-white">
                  {block.text}
                </blockquote>
              </Reveal>
            );

          case "callout":
            return (
              <Reveal key={i}>
                <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-6 my-8">
                  <h4 className="text-[#F97316] font-bold mb-2 text-sm tracking-wide uppercase">
                    {block.title}
                  </h4>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </Reveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

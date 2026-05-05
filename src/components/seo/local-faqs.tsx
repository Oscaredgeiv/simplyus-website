"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface LocalFAQsProps {
  heading?: string;
  subhead?: string;
  faqs: { question: string; answer: string }[];
}

export function LocalFAQs({
  heading = "Frequently Asked Questions",
  subhead,
  faqs,
}: LocalFAQsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1] }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
        >
          {heading}
        </motion.h2>
        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#9CA3AF] text-center mb-12 max-w-2xl mx-auto"
          >
            {subhead}
          </motion.p>
        )}

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  inView,
}: {
  faq: { question: string; answer: string };
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.25, 0.4, 0, 1] }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-lg border border-white/[0.06] bg-[#111111] p-5 text-left transition hover:border-white/[0.12]"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-white">{faq.question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-[#F97316] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        {open && (
          <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
            {faq.answer}
          </p>
        )}
      </button>
    </motion.div>
  );
}

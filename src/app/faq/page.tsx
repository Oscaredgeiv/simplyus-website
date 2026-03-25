"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

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


type Category = "General" | "Services" | "Pricing" | "Process";

const categories: Category[] = ["General", "Services", "Pricing", "Process"];

const faqs: Record<Category, { q: string; a: string }[]> = {
  General: [
    {
      q: "What does Simply Us & U do?",
      a: "We're a full-service digital agency specializing in digital marketing, social media management, website design and development, hosting and maintenance, and custom software development. We help businesses of all sizes grow their online presence and streamline their operations.",
    },
    {
      q: "What industries do you serve?",
      a: "We work across a wide range of industries including healthcare, real estate, finance, beauty and wellness, professional services, e-commerce, and more. Our strategies are always tailored to the specific needs and audience of each industry.",
    },
    {
      q: "Where are you located?",
      a: "We're a remote-first agency serving clients nationwide. Our distributed team allows us to tap into top talent regardless of geography and offer flexible scheduling across time zones.",
    },
    {
      q: "How do I get started?",
      a: "Simply reach out through our contact page or give us a call. We'll schedule a free discovery call to learn about your business, discuss your goals, and recommend the best path forward. No pressure, no commitment required.",
    },
  ],
  Services: [
    {
      q: "Do you offer all services as a bundle?",
      a: "Yes! We offer comprehensive bundles that combine marketing, design, and development services at a discounted rate. Bundling allows us to create cohesive strategies that amplify results across every channel.",
    },
    {
      q: "Can I hire you for just one service?",
      a: "Absolutely. While our bundled approach delivers the best results, we're happy to work on individual projects like a website redesign, social media campaign, or custom application. Every engagement is tailored to your needs.",
    },
    {
      q: "Do you work with small businesses?",
      a: "We love working with small businesses. In fact, Simply Us & U was founded to give small businesses access to the same quality digital services that large enterprises enjoy, but at a price point that makes sense.",
    },
    {
      q: "What platforms do you specialize in?",
      a: "On the marketing side, we work with Meta, Google, TikTok, LinkedIn, and more. For web development, we specialize in React, Next.js, and WordPress. For software, we build with modern stacks including Node.js, Python, and cloud-native platforms.",
    },
  ],
  Pricing: [
    {
      q: "How much do your services cost?",
      a: "Our pricing depends on the scope and complexity of each project. Marketing retainers typically start at $1,500 per month, website projects from $3,000, and custom software from $10,000. We always provide a detailed proposal before any work begins.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes, we offer flexible payment plans for larger projects. Typically we structure payments in milestones — a deposit to begin, progress payments at key milestones, and a final payment at launch.",
    },
    {
      q: "Is there a minimum contract?",
      a: "For marketing retainers, we recommend a minimum three-month commitment to see meaningful results. Project-based work like websites and software are scoped individually with clear deliverables and timelines.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We offer a complimentary 30-minute discovery call where we learn about your business, discuss your challenges, and share initial recommendations. There is absolutely no obligation or pressure.",
    },
  ],
  Process: [
    {
      q: "How long does a typical project take?",
      a: "Timelines vary by project type. A marketing campaign can launch in 1-2 weeks, a website typically takes 4-8 weeks, and custom software ranges from 8-16 weeks. We provide detailed timelines during the proposal phase.",
    },
    {
      q: "How do you communicate during projects?",
      a: "We believe in proactive communication. You'll have a dedicated project manager, access to our project portal, and regular check-in calls. We use Slack for day-to-day communication and provide weekly progress reports.",
    },
    {
      q: "What tools do you use?",
      a: "We leverage industry-leading tools including Figma for design, GitHub for development, Notion and ClickUp for project management, and platforms like Google Analytics, SEMrush, and HubSpot for marketing execution and reporting.",
    },
    {
      q: "How do you measure success?",
      a: "Every engagement starts with clearly defined KPIs. We track metrics that matter to your business — leads, revenue, conversion rates, traffic, engagement — and provide transparent monthly reports showing exactly how we're performing against those goals.",
    },
  ],
};

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#111111] border border-white/[0.06] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-white font-medium pr-4">{q}</span>
        {open ? (
          <Minus className="w-5 h-5 text-[#F97316] shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#F97316] shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-[#9CA3AF] leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [active, setActive] = useState<Category>("General");

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="text-[#F97316] hover:underline font-medium"
              >
                Contact us directly
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Tabs + Accordion */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-[#F97316] text-white"
                      : "bg-[#111111] text-[#9CA3AF] border border-white/[0.06] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs[active].map((faq, i) => (
              <Reveal key={`${active}-${i}`} delay={0.06 * i}>
                <AccordionItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

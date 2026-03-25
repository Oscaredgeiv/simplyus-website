"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.08),transparent_60%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              Trusted by 100+ growing businesses
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Growth Marketing{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              & Operations Partner
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We manage your social media, run your digital marketing, streamline
            your operations, and automate the rest — so you can focus on what
            matters most: your clients.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-brand-600 px-10 text-lg font-semibold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg"
            >
              Get a Free Strategy Session
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            >
              See Our Results
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

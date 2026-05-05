"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail, Globe } from "lucide-react";
import { useExitIntent } from "@/lib/use-exit-intent";

/**
 * Exit-intent popup for Simply Us & U.
 *
 * Offer: complimentary website review.
 * Captures: website URL + email.
 *
 * Submission stub: currently sets submitted=true and stores dismissal.
 * Wire `submitToBackend()` below to your email service (Resend,
 * Formspree, etc.) when ready.
 */

const STORAGE_KEY = "suu_exit";

export function ExitIntent() {
  const { isOpen, close, submitted, handleSubmit } = useExitIntent(STORAGE_KEY);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  async function submitToBackend(_payload: { website: string; email: string }) {
    /* TODO: wire to your email service. For now we just resolve. */
    void _payload;
    return new Promise<void>((r) => setTimeout(r, 350));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await submitToBackend({ website, email });
      handleSubmit();
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0D]/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.25, 0.4, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-headline"
            className="relative w-full max-w-[580px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-10 shadow-2xl"
          >
            {/* Subtle radial glow flourish — matches site hero aesthetic */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.08), transparent 60%)",
              }}
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#9CA3AF] transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]/40"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              {!submitted ? (
                <>
                  {/* Eyebrow */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.32em] text-[#F97316]">
                    Before You Go —
                  </span>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-[#F97316]/40 via-white/[0.08] to-transparent" />

                  {/* Headline */}
                  <h2
                    id="exit-headline"
                    className="mt-5 text-3xl sm:text-[2.1rem] font-bold tracking-tight text-white leading-[1.15] font-[family-name:var(--font-plus-jakarta-sans)]"
                  >
                    A complimentary website review.
                  </h2>

                  {/* Body */}
                  <p className="mt-4 text-[15px] leading-relaxed text-[#9CA3AF]">
                    Send us your URL and we&apos;ll send back a short custom
                    video pointing out 3–5 specific things you can fix to bring
                    in more leads. No obligation, no upsell — just useful eyes
                    on your site.
                  </p>

                  {/* Form */}
                  <form onSubmit={onSubmit} className="mt-7 space-y-3">
                    <div className="relative">
                      <Globe className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                      <input
                        type="url"
                        name="website"
                        required
                        autoComplete="url"
                        placeholder="yourwebsite.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full rounded-lg border border-white/[0.08] bg-[#0B0B0D] pl-10 pr-4 py-3 text-sm text-white placeholder-[#6B7280] transition-colors focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]/40"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-white/[0.08] bg-[#0B0B0D] pl-10 pr-4 py-3 text-sm text-white placeholder-[#6B7280] transition-colors focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]/40"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                    >
                      {sending ? "Sending…" : "Get My Free Review"}
                      {!sending && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </button>
                  </form>

                  {/* Dismiss */}
                  <div className="mt-5 text-center">
                    <button
                      type="button"
                      onClick={close}
                      className="text-xs text-[#6B7280] hover:text-[#9CA3AF] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      No thanks, I&apos;ll keep browsing
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.32em] text-[#F97316]">
                    Received
                  </span>
                  <div className="mx-auto mt-3 h-px w-32 bg-gradient-to-r from-transparent via-[#F97316]/40 to-transparent" />

                  <h2
                    id="exit-headline"
                    className="mt-5 text-3xl sm:text-[2.1rem] font-bold tracking-tight text-white leading-[1.15] font-[family-name:var(--font-plus-jakarta-sans)]"
                  >
                    Thank you.
                  </h2>

                  <p className="mt-4 text-[15px] leading-relaxed text-[#9CA3AF] max-w-md mx-auto">
                    Your site is in our queue. Watch for an email from{" "}
                    <span className="text-white font-medium">
                      Support@SimplyUsandU.com
                    </span>{" "}
                    within a few business days.
                  </p>

                  <button
                    type="button"
                    onClick={close}
                    className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]/40"
                  >
                    Continue browsing
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

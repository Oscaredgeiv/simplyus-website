"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowRight, Send } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tawk.to global type declarations                                   */
/* ------------------------------------------------------------------ */
declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      minimize: () => void;
      hideWidget: () => void;
      showWidget: () => void;
      toggle: () => void;
      setAttributes: (
        attrs: Record<string, string>,
        cb?: (err: unknown) => void
      ) => void;
      addTags: (tags: string[], cb?: (err: unknown) => void) => void;
      addEvent: (
        name: string,
        meta?: Record<string, string>,
        cb?: (err: unknown) => void
      ) => void;
      onLoad?: () => void;
      isChatMaximized: () => boolean;
      isChatMinimized: () => boolean;
      isChatHidden: () => boolean;
      isChatOngoing: () => boolean;
      popup: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const services = [
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "social-media", label: "Social Media & Content" },
  { id: "website-design", label: "Website Design" },
  { id: "website-hosting", label: "Website Hosting" },
  { id: "software-development", label: "Software & App Development" },
  { id: "ai-integration", label: "AI Integration & Automation" },
  { id: "ad-creation", label: "Ad Creation & Campaigns" },
  { id: "other", label: "Something Else" },
];

export function TawkChat() {
  const [tawkReady, setTawkReady] = useState(false);
  const [tawkLoading, setTawkLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [step, setStep] = useState<"select" | "details">("select");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  /* Lazy-load Tawk.to — only when user is ready to chat */
  const loadTawk = useCallback(() => {
    if (tawkReady || tawkLoading) return;
    setTawkLoading(true);

    if (!window.Tawk_API) {
      window.Tawk_API = {} as NonNullable<typeof window.Tawk_API>;
    }
    window.Tawk_LoadStart = new Date();

    window.Tawk_API!.onLoad = () => {
      window.Tawk_API!.hideWidget();
      setTawkReady(true);
      setTawkLoading(false);
    };

    const s = document.createElement("script");
    s.async = true;
    s.src = "https://embed.tawk.to/69e1af6e840f7e1c346a8140/default";
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.head.appendChild(s);
  }, [tawkReady, tawkLoading]);

  const openTawkChat = useCallback(() => {
    if (!window.Tawk_API) return;

    /* Pass selected service + name as attributes & tags */
    if (selectedService) {
      const svc = services.find((s) => s.id === selectedService);
      window.Tawk_API.addTags(
        [svc?.label || selectedService],
        () => {}
      );
      window.Tawk_API.setAttributes(
        {
          "service-interest": svc?.label || selectedService,
          ...(name ? { name } : {}),
        },
        () => {}
      );
      if (message) {
        window.Tawk_API.addEvent("pre-chat-message", { message }, () => {});
      }
    }

    /* Open in popup window so the green widget never shows on the site */
    window.Tawk_API.popup();
    setShowPanel(false);
    setStep("select");
    setSelectedService("");
    setName("");
    setMessage("");
  }, [selectedService, name, message]);

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setStep("details");
  };

  /* When tawk becomes ready after lazy load, open the chat */
  const pendingOpen = useRef(false);
  useEffect(() => {
    if (tawkReady && pendingOpen.current) {
      pendingOpen.current = false;
      openTawkChat();
    }
  }, [tawkReady, openTawkChat]);

  const handleStartChat = () => {
    if (tawkReady) {
      openTawkChat();
    } else {
      pendingOpen.current = true;
      loadTawk();
    }
  };

  const resetPanel = () => {
    setShowPanel(false);
    setStep("select");
    setSelectedService("");
    setName("");
    setMessage("");
  };

  return (
    <>
      {/* Custom chat trigger button */}
      <motion.button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#F97316] text-white shadow-[0_4px_24px_rgba(249,115,22,0.4)] transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_4px_32px_rgba(249,115,22,0.5)] sm:h-16 sm:w-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: [0.25, 0.4, 0, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {showPanel ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pre-chat panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            className="fixed bottom-24 right-6 z-[9998] w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B0D] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(249,115,22,0.08)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0, 1] }}
          >
            {/* Header */}
            <div className="relative border-b border-white/[0.06] bg-[#111111] px-5 py-4">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-40" />
                    <span className="relative h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium text-green-400">
                    Team Online
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">
                  How can we help?
                </h3>
                <p className="mt-0.5 text-xs text-[#9CA3AF]">
                  Select a service and we&apos;ll connect you with a team member
                  who can immediately assist you.
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="max-h-[400px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === "select" ? (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                      What are you interested in?
                    </p>
                    <div className="space-y-2">
                      {services.map((svc) => (
                        <button
                          key={svc.id}
                          onClick={() => handleServiceSelect(svc.id)}
                          className="group flex w-full items-center justify-between rounded-lg border border-white/[0.06] bg-[#111111] px-4 py-3 text-left text-sm font-medium text-white transition-all duration-200 hover:border-[#F97316]/30 hover:bg-[#F97316]/5"
                        >
                          {svc.label}
                          <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#F97316]" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4"
                  >
                    {/* Selected service tag */}
                    <div className="mb-4 flex items-center gap-2">
                      <button
                        onClick={() => setStep("select")}
                        className="text-xs text-[#9CA3AF] transition-colors hover:text-white"
                      >
                        &larr; Back
                      </button>
                      <span className="rounded-full border border-[#F97316]/20 bg-[#F97316]/10 px-3 py-1 text-xs font-medium text-[#F97316]">
                        {services.find((s) => s.id === selectedService)?.label}
                      </span>
                    </div>

                    {/* Name field */}
                    <div className="mb-3">
                      <label className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                        Your name{" "}
                        <span className="text-[#6B7280]">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John"
                        className="w-full rounded-lg border border-white/[0.06] bg-[#111111] px-3 py-2.5 text-sm text-white placeholder-[#6B7280] transition-colors focus:border-[#F97316]/50 focus:outline-none focus:ring-1 focus:ring-[#F97316]/20"
                      />
                    </div>

                    {/* Message field */}
                    <div className="mb-4">
                      <label className="mb-1 block text-xs font-medium text-[#9CA3AF]">
                        How can we help?{" "}
                        <span className="text-[#6B7280]">(optional)</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us a bit about what you need..."
                        rows={3}
                        className="w-full resize-none rounded-lg border border-white/[0.06] bg-[#111111] px-3 py-2.5 text-sm text-white placeholder-[#6B7280] transition-colors focus:border-[#F97316]/50 focus:outline-none focus:ring-1 focus:ring-[#F97316]/20"
                      />
                    </div>

                    {/* Start chat button */}
                    <button
                      onClick={handleStartChat}
                      disabled={tawkLoading}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition-all duration-200 hover:bg-[#EA580C] disabled:opacity-70"
                    >
                      <Send className="h-4 w-4" />
                      {tawkLoading ? "Connecting..." : "Start Live Chat"}
                    </button>

                    <p className="mt-3 text-center text-[10px] text-[#9CA3AF]">
                      You&apos;ll be connected with a team member who can
                      immediately assist you.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
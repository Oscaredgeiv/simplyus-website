"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { mainNavItems } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Left — Logo text as home link (clean, no image) */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
          >
            Simply Us & U
          </Link>

          {/* Center — Desktop Nav Links */}
          <div className="hidden items-center gap-7 lg:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-medium tracking-wide transition-colors duration-200",
                  pathname === item.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right — CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-[#F97316] px-5 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#EA580C]"
            >
              Get Started
            </Link>

            {/* Mobile only */}
            <button
              className="p-2 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#0B0B0D]/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-5">
              <div className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-white/[0.06] text-white"
                        : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#F97316] px-6 text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

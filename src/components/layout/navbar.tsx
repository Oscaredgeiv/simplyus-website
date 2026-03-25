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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Simply Us & You
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-600",
                  pathname === item.href
                    ? "text-brand-600"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-brand-50 text-brand-600"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
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

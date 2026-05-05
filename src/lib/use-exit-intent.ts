"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Exit-intent detection hook. Theme-agnostic.
 *
 * Behaviour:
 *   - Listens for `mouseout` on document with clientY <= 0 and
 *     relatedTarget === null (cursor leaving the top of the viewport).
 *   - Skips on touch / mobile-width devices (no reliable equivalent).
 *   - Arms after a delay so quick bounces don't trigger.
 *   - Fires at most once per page session.
 *   - Persists dismissal in localStorage with TTL (default 14 days).
 *   - Closes on Escape key (consumer must wire backdrop click + X button).
 *   - Locks body scroll while open; restores on close.
 *
 * Usage:
 *   const { isOpen, close, submitted, handleSubmit } = useExitIntent("myco_exit");
 */

const TTL_DAYS = 14;
const ARM_DELAY_MS = 3500;

export interface ExitIntentResult {
  isOpen: boolean;
  close: () => void;
  submitted: boolean;
  handleSubmit: () => void;
}

export function useExitIntent(storageKey: string): ExitIntentResult {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const triggeredRef = useRef(false);
  const armedRef = useRef(false);

  const writeDismissal = useCallback(() => {
    try {
      localStorage.setItem(storageKey, String(Date.now()));
    } catch {
      /* storage may be blocked — silently ignore */
    }
  }, [storageKey]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    writeDismissal();
  }, [writeDismissal]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    writeDismissal();
  }, [writeDismissal]);

  /* Trigger setup */
  useEffect(() => {
    if (typeof window === "undefined") return;

    /* Skip if dismissed within TTL */
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const elapsed = Date.now() - parseInt(stored, 10);
        const ttl = TTL_DAYS * 24 * 60 * 60 * 1000;
        if (Number.isFinite(elapsed) && elapsed < ttl) return;
      }
    } catch {
      /* ignore */
    }

    /* Skip on mobile / touch devices */
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const armTimer = window.setTimeout(() => {
      armedRef.current = true;
    }, ARM_DELAY_MS);

    const onMouseOut = (e: MouseEvent) => {
      if (!armedRef.current || triggeredRef.current) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        triggeredRef.current = true;
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }
    };

    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [storageKey]);

  /* Escape-to-close */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  /* Restore body scroll if unmounted while open */
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  return { isOpen, close, submitted, handleSubmit };
}

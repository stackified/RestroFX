"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, CreditCard, Wallet, Apple } from "lucide-react";

const AUTO_DISMISS_MS = 6000;

/**
 * Global, brand-themed popup announcing the available deposit methods
 * (debit card, credit card, Apple Pay). It slides in when the site loads,
 * auto-dismisses after 3 seconds, and can be closed early via the cancel (X)
 * symbol. Mounted once from the root layout so it shows across all pages
 * without re-triggering on client-side navigation.
 */
export function DepositPopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Slight delay so the entrance animation plays after first paint.
    const showTimer = setTimeout(() => setVisible(true), 400);
    // Auto-dismiss after it has stayed for 3 seconds.
    const hideTimer = setTimeout(() => dismiss(), 400 + AUTO_DISMISS_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setLeaving(true);
    // Allow the exit transition to finish before unmounting.
    setTimeout(() => setMounted(false), 400);
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Deposit methods available"
      className={`fixed bottom-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 transition-all duration-500 ease-out ${
        visible && !leaving
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card/95 shadow-2xl shadow-black/10 backdrop-blur-md">
        {/* Brand accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

        {/* Auto-dismiss progress indicator */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-primary/70"
          style={{
            animation: visible && !leaving ? `deposit-progress ${AUTO_DISMISS_MS}ms linear forwards` : "none",
          }}
        />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4 p-5 pr-10">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CreditCard className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="font-heading text-sm font-semibold text-foreground">
              Fund your account instantly
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              We now accept{" "}
              <span className="font-medium text-foreground">debit card</span>,{" "}
              <span className="font-medium text-foreground">credit card</span> and{" "}
              <span className="font-medium text-foreground">Apple Pay</span> deposits.
            </p>

            <div className="mt-3 flex items-center gap-3 text-muted-foreground">
              <span className="flex items-center gap-1 text-xs">
                <CreditCard className="h-3.5 w-3.5" /> Card
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Apple className="h-3.5 w-3.5" /> Apple Pay
              </span>
              <span className="flex items-center gap-1 text-xs">
                <Wallet className="h-3.5 w-3.5" /> Debit
              </span>
            </div>

            <Link
              href="/support/how-to-deposit-with-debit-cards"
              onClick={dismiss}
              className="mt-3 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn how to deposit →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

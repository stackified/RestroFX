"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

/**
 * Global, brand-themed deposit announcement modal. It fades in (centered) when
 * the site loads and stays until the user closes it via the cancel (X) symbol,
 * the "Close Window" link, the backdrop, or the Escape key. Mounted once from
 * the root layout so it shows across all pages without re-triggering on
 * client-side navigation.
 */
export function DepositPopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Slight delay so the entrance animation plays after first paint.
    const showTimer = setTimeout(() => setVisible(true), 350);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setLeaving(true);
    // Allow the exit transition to finish before unmounting.
    setTimeout(() => setMounted(false), 350);
  }

  if (!mounted) return null;

  const open = visible && !leaving;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Deposit methods now available"
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl shadow-black/30 transition-all duration-300 ease-out ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Brand accent bar */}
        <div className="absolute left-0 top-0 z-20 h-1 w-full bg-primary" />

        {/* Close (cancel) symbol */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col justify-center gap-5 p-7 sm:p-9">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now Live
            </span>

            <h2 className="font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              <span className="text-primary">Deposit</span> Using Cards
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We&apos;re proud to announce our new card deposits payment processor
              is officially live. Fund your account instantly with{" "}
              <span className="font-medium text-foreground">debit</span>,{" "}
              <span className="font-medium text-foreground">credit</span> or{" "}
              <span className="font-medium text-foreground">Apple Pay</span>.
            </p>

            <Link
              href="/support/how-to-deposit-with-debit-cards"
              onClick={dismiss}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={dismiss}
              className="w-fit text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Close Window
            </button>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[240px] bg-black sm:min-h-[340px]">
            <Image
              src={withBasePath("/images/deposit-cards.png")}
              alt="Deposit instantly using debit, credit cards or Apple Pay"
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-contain object-center"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

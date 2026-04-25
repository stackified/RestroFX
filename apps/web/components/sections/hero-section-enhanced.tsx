"use client";

import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export function HeroSectionEnhanced({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden bg-transparent pt-14 md:pt-32 pb-8">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[70%_50%] sm:object-center"
        >
          <source src={withBasePath("/Hero.mp4")} type="video/mp4" />
        </video>

        {/* Mobile-only Red Glassmorphic Overlay */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm sm:hidden z-[5]" />

        {/* Top Fade for Navbar */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-10" />
        {/* Bottom Fade for Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

        <div className="hero-glow-1 animate-pulse-slow opacity-20" />
        <div className="hero-glow-2 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl">

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold mb-8 backdrop-blur-md"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {eyebrow}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.2] md:leading-[1.1] mb-6"
            >
              {title.split(" ").map((word, i) => {
                const isBrand = word === "Restro" || word === "FX";
                return (
                  <span 
                    key={i} 
                    className={isBrand ? "bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" : ""}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/90 sm:text-muted-foreground mb-10 leading-relaxed max-w-2xl drop-shadow-md"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start"
            >
              <Button
                size="lg"
                className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,38,38,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95 border-none"
                asChild
              >
                <Link href={ctaHref}>
                  <span className="relative z-10 flex items-center justify-center">
                    {ctaLabel} <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-12 h-16 text-lg font-bold border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-500 bg-transparent active:scale-95 shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link href={secondaryCtaHref}>
                  <span className="flex items-center justify-center">
                    <Play className="mr-3 h-4 w-4 fill-current group-hover:scale-110 transition-transform" /> {secondaryCtaLabel}
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:flex gap-6 md:gap-8 items-center justify-start opacity-70"
            >
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">10k+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">Active Traders</span>
              </div>
              <div className="w-px h-8 bg-border hidden lg:block" />
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">$5B+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">Volume Traded</span>
              </div>
              <div className="w-px h-8 bg-border hidden lg:block" />
              <div className="flex flex-col group cursor-default items-start">
                <span className="text-xl md:text-2xl font-bold text-white sm:text-foreground group-hover:text-primary transition-colors drop-shadow-md">4.5/5</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-white/80 sm:text-muted-foreground group-hover:text-foreground transition-colors drop-shadow-md">User Rating</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

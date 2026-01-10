"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function HeroSectionEnhanced({
  eyebrow = "Trade Global Markets",
  title,
  subtitle,
  ctaLabel = "Start Trading",
  ctaHref = "/register",
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/10"
    >
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_60%,transparent_100%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            opacity: 0.03,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Crimson Glow */}
        <motion.div
          className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%)",
          }}
        />
        
        {/* Bottom Right Accent */}
        <motion.div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Eyebrow Badge */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex"
            >
              <motion.span
                className={cn(
                  "group relative inline-flex items-center gap-2 px-5 py-2.5",
                  "text-xs font-medium tracking-wider uppercase text-muted-foreground",
                  "bg-muted/50 backdrop-blur-sm border border-border/50 rounded-full",
                  "hover:border-red-600/30 hover:text-red-600/80 transition-all duration-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {eyebrow}
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-heading leading-[1.1] tracking-tight text-foreground max-w-5xl"
          >
            <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl font-body leading-relaxed tracking-tight"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {ctaLabel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "group relative h-12 px-8 text-base font-medium",
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-red-600/20",
                    "transition-all duration-300 border-0"
                  )}
                >
                  <Link href={ctaHref} className="flex items-center gap-2">
                    {ctaLabel}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {secondaryCtaLabel && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className={cn(
                      "group relative h-12 px-8 text-base font-medium",
                      "bg-background/50 backdrop-blur-sm border-2 border-border",
                      "hover:border-red-600/50 hover:text-red-600 hover:bg-red-600/5",
                      "transition-all duration-300 shadow-sm hover:shadow-md"
                    )}
                  >
                    <Link href={secondaryCtaHref || "/demo"} className="flex items-center gap-2">
                      {secondaryCtaLabel}
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Trust Indicators - Optional decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-16 flex items-center gap-8 text-sm text-muted-foreground/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Regulated</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Secure</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Fast Execution</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

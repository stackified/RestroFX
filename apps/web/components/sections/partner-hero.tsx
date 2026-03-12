"use client";

import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PartnerHeroProps {
  partnerName: string;
}

export function PartnerHero({ partnerName }: PartnerHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
        
        <div className="hero-glow-1 animate-pulse-slow opacity-20" />
        <div className="hero-glow-2 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-size opacity-[0.03] z-0" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
               initial={{ opacity: 0, y: 10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold mb-8 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              OFFICIAL PARTNER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-8"
            >
              Trade with my <br />
              <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                preferred
              </span> broker.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl"
            >
              A forex broker that meets the demands of modern traders—without compromise. 
              Trade Forex, metals, crypto, stocks, and more with raw spreads, fast execution, 
              on multiple platforms. Open an account that fits your strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                size="lg"
                className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white shadow-[0_20px_50px_rgba(187,0,0,0.3)] hover:bg-red-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(187,0,0,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95 border-none"
                asChild
              >
                <Link href="/register">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Trading <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PartnerCTAProps {
  partnerName: string;
  message?: string;
}

export function PartnerCTA({ partnerName, message }: PartnerCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-8"
          >
            A message from <span className="text-primary">{partnerName.split(' ')[0]}</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              {message || `Trade with the broker I trust. Join me at RestroFX and experience trading the way it was meant to be. Raw spreads, lightning-fast execution, and a platform that puts you first.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-xl font-bold bg-primary text-white shadow-xl hover:bg-red-700 hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/register">
                JOIN RESTROFX <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

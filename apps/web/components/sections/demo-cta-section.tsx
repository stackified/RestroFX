"use client";

import Link from "next/link";
import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";

export function DemoCTASection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 tracking-tight">
            Test Our Platform with a <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Free Demo Account</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            No risk. No obligation. Start trading in minutes.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,38,38,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95"
              asChild
            >
              <Link href="/demo">
                <span className="relative z-10 flex items-center">
                  Create Demo Account
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

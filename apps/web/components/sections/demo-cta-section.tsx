"use client";

import Link from "next/link";
import { Button } from "@crimsonfx/ui";
import { motion } from "framer-motion";
import { GridBeam } from "@/components/ui/background-grid-beam";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function DemoCTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      <GridBeam className="w-full h-full bg-grid">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-heading text-foreground mb-6">
              Test Our Platform with a Free Demo Account
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              No risk. No obligation. Start trading in minutes.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl text-lg px-8 py-6 font-semibold"
                asChild
              >
                <Link href="/demo">Create Demo Account</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </GridBeam>
    </section>
  );
}

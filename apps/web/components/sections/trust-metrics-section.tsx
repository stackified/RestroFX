"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BackgroundBeams } from "@/components/ui/background-beams";

const metrics = [
  { label: "Traders Worldwide", value: "500K+", suffix: "" },
  { label: "Withdrawals Processed", value: "$2.5B+", suffix: "" },
  { label: "Execution Speed", value: "<30", suffix: "ms" },
  { label: "Partner Network", value: "150+", suffix: "" },
];

export function TrustMetricsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-medium font-numbers text-foreground mb-2">
                <AnimatedCounter value={`${metric.value}${metric.suffix || ""}`} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

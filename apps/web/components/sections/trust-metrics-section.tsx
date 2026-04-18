"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const metrics = [
  { label: "Traders Worldwide", value: "25K+", suffix: "" },
  { label: "Withdrawals Processed", value: "$100K+", suffix: "" },
  { label: "Execution Speed", value: "<15", suffix: "ms" },
  { label: "Partner Network", value: "150+", suffix: "" },
];

export function TrustMetricsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
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
              <div className="text-3xl sm:text-5xl lg:text-6xl font-medium font-numbers text-foreground mb-2">
                <AnimatedCounter value={`${metric.value}${metric.suffix || ""}`} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium px-1">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

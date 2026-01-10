"use client";

import { AnimatedCard } from "@/components/ui/animated-card";
import { GlowCard } from "@/components/ui/glow-card";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { TrendingUp, Monitor, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

const valueProps = [
  {
    icon: TrendingUp,
    title: "Tight Spreads & Fast Execution",
    description:
      "Competitive spreads and lightning-fast order execution to maximize your trading potential.",
  },
  {
    icon: Monitor,
    title: "Advanced Trading Platforms",
    description:
      "Access professional-grade trading platforms with powerful tools and seamless experience.",
  },
  {
    icon: Eye,
    title: "Transparent Trading Conditions",
    description:
      "Clear, upfront pricing with no hidden fees. Know exactly what you're paying for.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-4">
            Why Traders Choose CrimsonFX
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference with our cutting-edge trading solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {valueProps.map((prop, index) => (
            <AnimatedCard key={index} index={index} className="flex flex-col h-full">
              <GlowCard className="flex flex-col h-full flex-1">
                <Card className="flex flex-col border-2 border-border transition-all duration-300 group overflow-hidden relative hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/30 h-full">
                  <CardHeader className="relative z-10 pt-6 pb-0 px-6 flex-shrink-0">
                    <div className="p-3 rounded-xl bg-muted border border-border w-fit mb-2 group-hover:scale-110 transition-transform duration-300">
                      <prop.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-red-600 transition-colors duration-300 mb-0 min-h-[2rem]">
                      {prop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-6 pt-2 pb-6 flex-grow flex flex-col justify-start">
                    <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              </GlowCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

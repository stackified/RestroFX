"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Check, Smartphone, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  {
    id: "lock-it-trade",
    name: "Lock It Trade",
    description:
      "Our premier trading platform designed for precision and control.",
    features: [
      "Advanced risk management tools",
      "Instant execution",
      "Customizable layouts",
      "Deep liquidity access",
    ],
    downloads: [
      { name: "Web", icon: Globe },
      { name: "Mobile", icon: Smartphone },
    ],
  },
  {
    id: "tradelocker",
    name: "TradeLocker",
    description:
      "A modern, intuitive platform designed for today's traders.",
    features: [
      "User-friendly interface",
      "Advanced order management",
      "Real-time market data",
      "Cloud-based access",
    ],
    downloads: [
      { name: "Web", icon: Globe },
      { name: "iOS", icon: Smartphone },
      { name: "Android", icon: Smartphone },
    ],
  },
];

export function TradingPlatformsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight">
            Trade on <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Powerful Platforms</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from industry-leading trading platforms designed for professional traders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <AnimatedCard key={platform.id} index={index}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {platform.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">{platform.description}</p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">Available On:</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.downloads.map((download, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md text-sm hover:bg-muted/80 transition-colors"
                        >
                          <download.icon className="h-4 w-4" />
                          <span className="font-medium">{download.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full rounded-full h-11 border-2 border-primary/20 text-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white group/btn transition-all duration-300 font-semibold" asChild>
                    <Link href={`/platforms/${platform.id}`} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,38,38,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95 w-[90%] sm:w-auto mx-auto border-none" asChild>
            <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center">
                Start Trading <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

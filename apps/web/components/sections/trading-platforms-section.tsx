"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Check, Download, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

const platforms = [
  {
    id: "mt5",
    name: "MetaTrader 5",
    description:
      "The industry-standard platform trusted by millions of traders worldwide.",
    features: [
      "Advanced charting & analysis",
      "EA & Algorithmic trading",
      "Multi-asset trading",
      "Mobile & Desktop apps",
    ],
    downloads: [
      { name: "Windows", icon: Download },
      { name: "Mac", icon: Download },
      { name: "iOS", icon: Smartphone },
      { name: "Android", icon: Smartphone },
      { name: "Web", icon: Globe },
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
      { name: "Windows", icon: Download },
      { name: "Mac", icon: Download },
      { name: "Web", icon: Globe },
      { name: "Mobile", icon: Smartphone },
    ],
  },
];

export function TradingPlatformsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-4">
            Trade on Powerful Platforms
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
                  
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link href={`/platforms/${platform.id}`} className="flex items-center justify-center gap-2">
                      Learn More
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        →
                      </motion.span>
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
          className="text-center"
        >
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/register">Start Trading</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

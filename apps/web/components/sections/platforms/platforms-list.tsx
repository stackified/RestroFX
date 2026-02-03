"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Check, Brain, Smartphone, ArrowRight, Laptop, Globe } from "lucide-react";

export function PlatformsList() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 space-y-32">

            {/* Platform 1: Lock It Trade */}
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">Lock It Trade</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            A sophisticated AI-powered trading journal designed for serious traders.
                            Lock It Trade replaces legacy spreadsheets with data-driven insights and automated analytics
                            to help you identify your strengths and weaknesses.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "87% AI Readiness Score",
                                "Strategy Compliance Analysis",
                                "Win Rate Tracking",
                                "Prop Firm Optimization",
                                "Risk/Reward Breakdown",
                                "Automated Analytics"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-red-600" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-xl h-12 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20" asChild>
                                <Link href="/platforms/lock-it-trade">
                                    Explore Lock It Trade <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-xl h-12" asChild>
                                <Link href="/register">
                                    Start Using Now
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-purple-500/20 rounded-[2rem] blur-3xl opacity-30" />
                        <div className="relative rounded-[2rem] bg-card/50 backdrop-blur-xl border border-white/5 p-2 shadow-2xl overflow-hidden glass">
                            <div className="rounded-[1.5rem] overflow-hidden bg-black/60 aspect-[4/3] relative grid place-items-center border border-white/5">
                                {/* Abstract UI representation */}
                                <div className="text-center">
                                    <Brain className="w-20 h-20 text-red-600/50 mx-auto mb-4" />
                                    <div className="text-muted-foreground font-medium">AI Dashboard Interface</div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-bold">Analysis Active</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Platform 2: TradeLocker */}
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-cyan-500/20 rounded-[2rem] blur-3xl opacity-30" />
                        <div className="relative rounded-[2rem] bg-card/50 backdrop-blur-xl border border-white/5 p-2 shadow-2xl overflow-hidden glass">
                            <div className="rounded-[1.5rem] overflow-hidden bg-black/60 aspect-[4/3] relative grid place-items-center border border-white/5">
                                {/* Abstract UI representation */}
                                <div className="text-center">
                                    <Smartphone className="w-20 h-20 text-blue-500/50 mx-auto mb-4" />
                                    <div className="text-muted-foreground font-medium">Mobile Trading View</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">TradeLocker</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            A next-generation trading platform built for speed and precision.
                            TradeLocker combines powerful charting tools with an intuitive interface,
                            making it perfect for both scalpers and swing traders.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "TradingView Integration",
                                "One-Click Trading",
                                "Micro-lot Support",
                                "Mobile Optimized",
                                "Depth of Market",
                                "Advanced Risk Management"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 mb-8">
                            <div className="flex flex-col items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/50 min-w-[80px]">
                                <Smartphone className="w-5 h-5 text-foreground" />
                                <span className="text-xs text-muted-foreground">Mobile</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/50 min-w-[80px]">
                                <Globe className="w-5 h-5 text-foreground" />
                                <span className="text-xs text-muted-foreground">Web</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/50 min-w-[80px]">
                                <Laptop className="w-5 h-5 text-foreground" />
                                <span className="text-xs text-muted-foreground">Desktop</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-xl h-12 bg-foreground text-background hover:bg-foreground/90 shadow-lg" asChild>
                                <Link href="/platforms/tradelocker">
                                    Discover TradeLocker <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, BarChart2, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function AiTradingJournalSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Glowing Card Container */}
                        <div className="relative rounded-[2rem] p-1 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-3xl">
                            <GlowingEffect
                                spread={60}
                                glow={true}
                                disabled={false}
                                proximity={100}
                                inactiveZone={0.01}
                                borderWidth={3}
                                variant="red"
                            />

                            <div className="relative rounded-[1.8rem] bg-background/40 border border-white/5 overflow-hidden shadow-2xl backdrop-blur-xl">
                                {/* Chat Interface Header */}
                                <div className="absolute top-0 inset-x-0 h-16 border-b border-primary/10 bg-background/50 backdrop-blur-md flex items-center px-6 justify-between z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="font-heading font-semibold text-sm tracking-wide text-foreground/80">RESTRO INTELLIGENCE</span>
                                    </div>
                                    <Sparkles className="h-4 w-4 text-primary" />
                                </div>

                                {/* Chat Body */}
                                <div className="pt-24 pb-8 px-6 space-y-6 h-[460px] flex flex-col justify-end">

                                    {/* AI Message 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 }}
                                        className="flex gap-4 max-w-[90%]"
                                    >
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-red-700 flex items-center justify-center shadow-lg shadow-primary/20">
                                            <Bot className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="p-4 rounded-2xl rounded-tl-none bg-muted/50 border border-primary/5 text-sm leading-relaxed text-foreground shadow-sm">
                                                I&apos;ve analyzed your last 50 trades on EUR/USD. You have a <span className="text-primary font-bold">78% win rate</span> during the London session, but your stop-losses are too tight during high volatility.
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* User Response */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1 }}
                                        className="flex gap-4 max-w-[85%] self-end flex-row-reverse"
                                    >
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-foreground flex items-center justify-center">
                                            <span className="text-xs font-bold text-background">ME</span>
                                        </div>
                                        <div className="p-4 rounded-2xl rounded-tr-none bg-primary text-white text-sm leading-relaxed shadow-lg shadow-primary/20">
                                            Generate an optimized risk management plan for next week.
                                        </div>
                                    </motion.div>

                                    {/* AI Insight Card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                        transition={{ delay: 1.8 }}
                                        className="bg-background/60 border border-primary/10 rounded-xl p-4 mt-2 backdrop-blur-md shadow-lg"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <BarChart2 className="h-4 w-4 text-primary" />
                                            <span className="text-xs font-bold text-foreground">OPTIMIZATION STRATEGY</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-primary/5 p-3 rounded-lg border border-primary/5">
                                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Recommended SL</div>
                                                <div className="font-numbers font-bold text-primary">25 Pips</div>
                                            </div>
                                            <div className="bg-primary/5 p-3 rounded-lg border border-primary/5">
                                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Projected ROI</div>
                                                <div className="font-numbers font-bold text-green-500">+12.4%</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 opacity-40 rounded-full mix-blend-screen pointer-events-none" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide">
                            <Sparkles className="h-3 w-3" />
                            <span>AI-POWERED ANALYTICS</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
                            Your Personal <br />
                            <span className="text-primary">AI Trading Mentor</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Stop trading in the dark. Our advanced AI Journal creates a digital twin of your trading behavior, detecting hidden patterns and offering real-time coaching to boost your profitability.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Automated Pattern Recognition",
                                "Real-time Behavioural Coaching",
                                "Predictive Profitability Scoring"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <TrendingUp className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button size="lg" className="rounded-xl px-8 h-12 text-base font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                <Link href="/ai-trading-journal">
                                    Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

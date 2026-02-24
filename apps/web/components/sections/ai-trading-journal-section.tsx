"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Activity } from "lucide-react";

export function AiTradingJournalSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                        <PinContainer title="Unlock AI Insights" href="/register">
                            <div className="flex flex-col p-6 sm:p-8 tracking-tight w-[20rem] sm:w-[26rem] h-[20rem] sm:h-[26rem] bg-gradient-to-br from-white/90 via-white/80 to-primary/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl shadow-2xl shadow-primary/30 relative overflow-hidden">
                                {/* Glassmorphic overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

                                {/* Content wrapper */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="size-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                                            <div className="text-xs font-semibold text-primary uppercase tracking-wider">Live AI</div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
                                            <span className="text-xs font-bold text-primary">Pro</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-1">
                                            Smart Trading
                                        </h3>
                                        <p className="text-sm text-foreground/70 font-medium">AI-Powered Insights</p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gradient-to-br from-white/60 to-primary/10 rounded-xl p-4 border border-white/50 backdrop-blur-md shadow-lg">
                                            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">+127%</div>
                                            <div className="text-xs text-foreground/60 font-medium">Avg. Profit</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-white/60 to-primary/10 rounded-xl p-4 border border-white/50 backdrop-blur-md shadow-lg">
                                            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">2.4K</div>
                                            <div className="text-xs text-foreground/60 font-medium">Trades Analyzed</div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-foreground/70 font-medium">AI Confidence</span>
                                            <span className="text-xs text-primary font-bold">98%</span>
                                        </div>
                                        <div className="relative h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary to-primary/80 rounded-full w-[98%] shadow-lg shadow-primary/40">
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/30 animate-pulse" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-primary/20">
                                        <div className="flex items-center gap-2">
                                            <Activity className="h-4 w-4 text-primary animate-pulse" />
                                            <span className="text-xs text-foreground/70 font-medium">Active Now</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                                            <span>Explore</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>

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

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight">
                            Your Personal <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">AI Trading Mentor</span>
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
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full h-14 px-10 border-2 border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-bold active:scale-95 shadow-md inline-flex items-center gap-2"
                                asChild
                            >
                                <Link href="/platforms/ai-trading-journal">
                                    Get Started Free <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

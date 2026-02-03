"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AccountTypesCTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-red-600/5 via-red-600/0 to-red-600/5 border border-red-600/10 shadow-2xl"
                >
                    {/* Subtle Background Effects */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16 relative z-10">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
                                No Risk • No Commitments
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1] text-foreground">
                                Test our spreads <br />
                                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">risk-free.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Create a free demo account in seconds. Practice with virtual funds before trading the real markets.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="rounded-xl h-14 px-10 text-lg font-bold shadow-lg shadow-red-600/20 hover:scale-105 transition-all w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
                                    asChild
                                >
                                    <Link href="/demo" className="flex items-center justify-center gap-2">
                                        Create Demo Account
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-xl h-14 px-10 text-lg font-bold border-2 border-border hover:bg-muted text-foreground w-full sm:w-auto"
                                    asChild
                                >
                                    <Link href="/platforms">
                                        View Platforms
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative h-[350px] lg:h-[450px] flex items-end justify-center lg:justify-end lg:pr-12 pointer-events-none">
                            {/* Phone Mockup - Updated for Light/Dark Context */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="relative w-[280px] aspect-[9/19] bg-background border-[8px] border-foreground/10 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
                            >
                                <div className="absolute top-0 w-full h-8 bg-foreground/10 z-20 rounded-b-2xl flex justify-center">
                                    <div className="w-20 h-5 bg-foreground/10 rounded-b-xl" />
                                </div>
                                {/* Screen Content */}
                                <div className="w-full h-full bg-background flex flex-col pt-8">
                                    <div className="px-4 mb-4">
                                        <div className="h-8 w-8 bg-red-600/10 rounded-full mb-2 flex items-center justify-center text-red-600 text-xs font-bold">
                                            FX
                                        </div>
                                        <div className="h-2 w-20 bg-muted rounded" />
                                    </div>
                                    <div className="flex-1 bg-muted/30 p-4 space-y-3">
                                        <div className="h-32 bg-white dark:bg-black/20 rounded-xl border border-border/50 relative overflow-hidden shadow-sm">
                                            <div className="absolute bottom-0 w-full h-2/3">
                                                <svg className="w-full h-full text-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <path d="M0,80 L20,60 L40,70 L60,40 L80,50 L100,20 V100 H0 Z" fill="currentColor" fillOpacity="0.1" />
                                                    <path d="M0,80 L20,60 L40,70 L60,40 L80,50 L100,20" stroke="currentColor" strokeWidth="2" fill="none" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="h-12 bg-white dark:bg-black/20 rounded-xl shadow-sm border border-border/50 flex items-center px-3" >
                                            <div className="w-8 h-8 rounded bg-muted-foreground/10" />
                                            <div className="ml-3 h-2 w-16 bg-muted-foreground/20 rounded" />
                                        </div>
                                        <div className="h-12 bg-white dark:bg-black/20 rounded-xl shadow-sm border border-border/50 flex items-center px-3" >
                                            <div className="w-8 h-8 rounded bg-muted-foreground/10" />
                                            <div className="ml-3 h-2 w-16 bg-muted-foreground/20 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

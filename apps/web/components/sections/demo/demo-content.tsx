"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Zap, BarChart } from "lucide-react";

export function DemoContent() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="container relative mx-auto px-4 max-w-7xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
                            Risk-Free Trading
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                            Practice before <br />
                            you <span className="text-red-600">perform.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                            Experience our premium trading conditions with zero risk.
                            Master the markets with $10,000 in virtual funds and full access to our platforms.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                                <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                                    <Zap className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">Real-time Spreads</h3>
                                    <p className="text-sm text-muted-foreground">Trade with the exact same feed as our live accounts.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                                <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">Zero Risk</h3>
                                    <p className="text-sm text-muted-foreground">Test new strategies without risking real capital.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                                <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                                    <BarChart className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">Full Analytics</h3>
                                    <p className="text-sm text-muted-foreground">Access Lock It Trade analytics even on demo.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-2xl opacity-20" />
                        <div className="relative bg-card/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold font-heading mb-2">Create Demo Account</h3>
                            <p className="text-muted-foreground text-sm mb-8">Enter your details to receive your login credentials instantly.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-muted-foreground">First Name</label>
                                        <input type="text" className="w-full h-12 rounded-xl bg-background/50 border border-border px-4 focus:outline-none focus:border-red-600/50 transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-muted-foreground">Last Name</label>
                                        <input type="text" className="w-full h-12 rounded-xl bg-background/50 border border-border px-4 focus:outline-none focus:border-red-600/50 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-muted-foreground">Email Address</label>
                                    <input type="email" className="w-full h-12 rounded-xl bg-background/50 border border-border px-4 focus:outline-none focus:border-red-600/50 transition-colors" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-muted-foreground">Platform</label>
                                    <select className="w-full h-12 rounded-xl bg-background/50 border border-border px-4 focus:outline-none focus:border-red-600/50 transition-colors text-foreground">
                                        <option>TradeLocker</option>
                                        <option>MetaTrader 5</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <Button size="lg" className="w-full h-14 rounded-xl text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20" asChild>
                                        <Link href="/register">
                                            Create Limitless Demo
                                        </Link>
                                    </Button>
                                </div>

                                <p className="text-xs text-center text-muted-foreground pt-4">
                                    By signing up you agree to our <Link href="/legal" className="underline hover:text-foreground">Terms of Service</Link> and <Link href="/legal" className="underline hover:text-foreground">Privacy Policy</Link>.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

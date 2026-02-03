"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, TrendingUp } from "lucide-react";

const steps = [
    {
        title: "Registration",
        description: "Create your account in minutes. Fill out a simple form to get started with your trading journey.",
        icon: UserPlus,
    },
    {
        title: "Verification",
        description: "Verify your identity safely and securely. Our automated system ensures quick approval so you can deposit sooner.",
        icon: ShieldCheck,
    },
    {
        title: "Start Trading",
        description: "Fund your account and access global markets. Enjoy tight spreads and fast execution on our premium platforms.",
        icon: TrendingUp,
    }
];

export function AccountTypesSteps() {
    return (
        <section className="py-24 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Steps List */}
                    <div className="order-2 lg:order-1 space-y-0">
                        <div className="mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-red-600/10 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                                Get Started
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading">
                                Three steps to <br />
                                <span className="text-red-600">trading mastery.</span>
                            </h2>
                        </div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative pl-10 pb-12 last:pb-0 border-l-[3px] border-muted hover:border-red-600/30 transition-colors duration-500 group"
                            >
                                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-[3px] border-muted group-hover:border-red-600 group-hover:scale-125 transition-all duration-300" />

                                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-red-600 transition-colors duration-300 flex items-center gap-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-40 animate-pulse-slow" />

                        <div className="relative rounded-[2rem] bg-card border border-white/10 p-8 shadow-2xl overflow-hidden glass">
                            {/* Abstract UI Elements representing 'Success' */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                                        <UserPlus className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <div className="h-2.5 w-24 bg-foreground/10 rounded mb-2" />
                                        <div className="h-2 w-16 bg-muted-foreground/20 rounded" />
                                    </div>
                                </div>
                                <div className="h-8 w-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 text-xs font-bold uppercase">
                                    Verified
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-32 rounded-xl bg-gradient-to-br from-muted/50 to-muted/10 border border-white/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-600/5 to-transparent" />
                                    {/* Simulated Graph Line */}
                                    <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-red-600" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,80 C20,80 30,40 50,60 C70,80 80,20 100,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                                    </svg>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-20 rounded-xl bg-muted/30 border border-white/5 animate-pulse" />
                                    <div className="h-20 rounded-xl bg-muted/30 border border-white/5 animate-pulse delay-100" />
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

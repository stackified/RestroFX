"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";

export const accountDetails = {
    "raw": {
        id: "raw",
        title: "RAW",
        heroHeadline: "Raw market access. Institutional spreads.",
        heroDescription: "The RAW account offers the most direct access to market liquidity. With spreads starting from 0.1 pips and a straightforward $18 RT commission, it's designed for serious traders, scalpers, and algos.",
        whoItsFor: [
            "Active and professional traders",
            "Scalpers who need tight spreads to make their strategy work",
            "Algo / EA traders running automated strategies",
            "Anyone who wants the lowest cost of trading on every ticket"
        ],
        whyTitle: "Why Traders Choose RAW",
        whyContent: (
            <ul className="grid grid-cols-1 gap-4">
                {[
                    "Spreads from 0.1 pips on major pairs",
                    "Direct A-Book execution — pure liquidity",
                    "Up to 1:500 leverage across forex",
                    "$500 minimum deposit",
                    "EAs, scalping, and hedging all permitted"
                ].map((reason, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-muted/20 border border-border/40 hover:border-red-500/30 transition-all group">
                        <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-foreground text-base sm:text-lg font-medium">{reason}</span>
                    </li>
                ))}
            </ul>
        ),
        specs: [
            { label: "Minimum deposit", value: "$500" },
            { label: "Commission", value: "$18.00 RT" },
            { label: "Spread", value: "From 0.1 pips" },
            { label: "Leverage", value: "Up to 1:500" },
            { label: "Execution", value: "A-Book Direct" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "EAs / Scalping / Hedging", value: "All permitted" },
            { label: "Platform", value: "TradeLocker" },
        ]
    },
    "ecn-standard-default": {
        id: "ecn-standard-default",
        title: "ECN / Standard Default",
        heroHeadline: "Trading made simple — competitive and flexible.",
        heroDescription: "The Standard Default Account is built for the everyday retail trader. With a $100 minimum deposit, 1:500 leverage, and simple $4 RT commissions, it provides a balanced environment for all strategies.",
        whoItsFor: [
            "Traders who want a clean, no-frills account",
            "Swing and position traders who hold longer-term setups",
            "Anyone diversifying across forex, metals, indices, and crypto"
        ],
        whyTitle: "Why Traders Choose Standard Default",
        whyContent: (
            <ul className="grid grid-cols-1 gap-4">
                {[
                    "Spreads from 2.0 pips",
                    "Up to 1:500 leverage",
                    "$100 minimum deposit",
                    "Full instrument access — forex, metals, energies, indices, crypto",
                    "Hybrid execution with reliable fill quality"
                ].map((reason, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-muted/20 border border-border/40 hover:border-red-500/30 transition-all group">
                        <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-foreground text-base sm:text-lg font-medium">{reason}</span>
                    </li>
                ))}
            </ul>
        ),
        specs: [
            { label: "Minimum deposit", value: "$100" },
            { label: "Commission", value: "$4.00 RT" },
            { label: "Spread", value: "From 2.0 pips" },
            { label: "Leverage", value: "Up to 1:500" },
            { label: "Execution", value: "Hybrid" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "EAs / Scalping / Hedging", value: "All permitted" },
            { label: "Platform", value: "TradeLocker" },
        ]
    },
    "ecn-standard-vip": {
        id: "ecn-standard-vip",
        title: "ECN / Standard VIP",
        heroHeadline: "Premium structure for high-volume traders.",
        heroDescription: "The Standard VIP Account is tailored for high-volume retail traders and VIP affiliates. It offers similar robust conditions to our Default account with spreads starting from 3.5 pips.",
        whoItsFor: [
            "High-Volume Retail Traders",
            "VIP Affiliates requiring bespoke setups",
            "Traders looking for premium tier conditions"
        ],
        whyTitle: "Why Traders Choose Standard VIP",
        whyContent: (
            <ul className="grid grid-cols-1 gap-4">
                {[
                    "Spreads from 3.5 pips",
                    "Up to 1:500 leverage",
                    "$100 minimum deposit",
                    "Full instrument access with Hybrid execution",
                    "Premium tier affiliate support structure"
                ].map((reason, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-muted/20 border border-border/40 hover:border-red-500/30 transition-all group">
                        <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-foreground text-base sm:text-lg font-medium">{reason}</span>
                    </li>
                ))}
            </ul>
        ),
        specs: [
            { label: "Minimum deposit", value: "$100" },
            { label: "Commission", value: "$4.00 RT" },
            { label: "Spread", value: "From 3.5 pips" },
            { label: "Leverage", value: "Up to 1:500" },
            { label: "Execution", value: "Hybrid" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "EAs / Scalping / Hedging", value: "All permitted" },
            { label: "Platform", value: "TradeLocker" },
        ]
    }
};

export function AccountDetailClient({ slug }: { slug: string }) {
    const data = accountDetails[slug as keyof typeof accountDetails];

    if (!data) {
        notFound();
    }

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            
            <main className="min-h-screen bg-background relative z-10 pt-32 pb-24 overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-red-600/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-red-900/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8 md:mb-12"
                    >
                        <Link href="/account-types" className="text-muted-foreground hover:text-red-600 transition-colors inline-flex items-center gap-2 text-sm font-medium">
                            &larr; Back to Account Types
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-12 sm:space-y-16">
                            
                            {/* Hero Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-xs sm:text-sm font-bold mb-6">
                                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                    {data.title}
                                </div>
                                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-[1.1]">
                                    {data.heroHeadline}
                                </h1>
                                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                    {data.heroDescription}
                                </p>
                                <div className="mt-8 sm:mt-10">
                                    <Button size="lg" className="w-full sm:w-auto rounded-full bg-red-600 hover:bg-red-700 text-white font-bold h-14 px-8 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all hover:-translate-y-1" asChild>
                                        <Link href={`/register?account=${data.id}`}>
                                            Open {data.title} <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            <hr className="border-border/40" />

                            {/* Who It's For */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-6 sm:mb-8">Who It&apos;s For</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.whoItsFor.map((item: string, i: number) => (
                                        <GlowCard key={i} className="p-6 rounded-2xl bg-card/50 border border-border/50 h-full flex flex-col group">
                                            <div className="w-10 h-10 rounded-full bg-red-600/10 group-hover:bg-red-600/20 transition-colors flex items-center justify-center mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-red-600" />
                                            </div>
                                            <span className="text-foreground text-sm sm:text-base font-medium leading-relaxed">{item}</span>
                                        </GlowCard>
                                    ))}
                                </div>
                            </motion.div>

                            <hr className="border-border/40" />

                            {/* Why / How It Works */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full overflow-hidden"
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-6 sm:mb-8">{data.whyTitle}</h3>
                                <div className="w-full text-foreground">
                                    {data.whyContent}
                                </div>
                            </motion.div>
                            
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <motion.div 
                                className="sticky top-24"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="bg-card/80 backdrop-blur-xl border border-red-600/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <h3 className="text-xl sm:text-2xl font-bold font-heading mb-6 relative z-10 flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-red-600 rounded-full" />
                                        Account Specs
                                    </h3>
                                    <div className="space-y-4 relative z-10">
                                        {data.specs.map((spec: any, i: number) => (
                                            <div key={i} className="flex justify-between items-start gap-3 sm:gap-4 pb-4 border-b border-border/40 hover:border-red-600/30 transition-colors last:border-0 last:pb-0">
                                                <span className="text-muted-foreground text-xs sm:text-sm flex-shrink-0">{spec.label}</span>
                                                <span className="text-foreground font-semibold text-xs sm:text-sm text-right">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full mt-8 rounded-xl font-bold h-12 sm:h-14 text-sm sm:text-base bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 relative z-10 hover:-translate-y-0.5 transition-transform" asChild>
                                        <Link href={`/register?account=${data.id}`}>Open Account Now</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    );
}

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
                    "Direct execution — pure liquidity",
                    "Up to 1:500 leverage across forex",
                    "$25 minimum deposit",
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
            { label: "Minimum deposit", value: "$25" },
            { label: "Commission", value: "$18.00 RT" },
            { label: "Spread", value: "From 0.1 pips" },
            { label: "Leverage", value: "Up to 1:500" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "EAs / Scalping / Hedging", value: "All permitted" },
            { label: "Platform", value: "TradeLocker" },
        ]
    },
    "ecn-standard-default": {
        id: "ecn-standard-default",
        title: "ECN / Standard Default",
        heroHeadline: "Trading made simple — competitive and flexible.",
        heroDescription: "The Standard Default Account is built for the everyday retail trader. With a $25 minimum deposit, 1:500 leverage, and simple $4 RT commissions, it provides a balanced environment for all strategies.",
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
                    "$25 minimum deposit",
                    "Full instrument access — forex, metals, energies, indices, crypto",
                    "Reliable execution with fast fill quality"
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
            { label: "Minimum deposit", value: "$25" },
            { label: "Commission", value: "$4.00 RT" },
            { label: "Spread", value: "From 2.0 pips" },
            { label: "Leverage", value: "Up to 1:500" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "EAs / Scalping / Hedging", value: "All permitted" },
            { label: "Platform", value: "TradeLocker" },
        ]
    },
    "powerup": {
        id: "bonus",
        title: "PowerUp Account",
        heroHeadline: "Deposit $5,000. Trade like you have $11,250.",
        heroDescription: "The PowerUp Account gives you 125% extra buying power on every qualifying deposit — automatically. No challenge. No evaluation. No monthly fees. Just deposit and trade.",
        whoItsFor: [
            "Newer traders who want more room to learn without risking more capital",
            "Active traders who want to scale position size without scaling deposits",
            "Anyone who wants prop-style buying power without the prop-style hoops"
        ],
        whyTitle: "How the Bonus Works",
        whyContent: (
            <div className="space-y-6 w-full">
                <p className="text-muted-foreground text-base sm:text-lg">Every qualifying deposit ($250 minimum) is matched with 125% buying power, credited instantly. The bonus is added to your margin — not your withdrawable balance — so it works as extra firepower while you trade.</p>
                <div className="bg-card border border-border/50 rounded-2xl w-full overflow-hidden mt-6 shadow-xl shadow-black/10">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-red-600/20">
                        <table className="w-full text-sm min-w-[500px]">
                            <thead className="bg-muted/80 border-b border-border/50">
                                <tr>
                                    <th className="text-left p-4 sm:p-5 font-semibold text-foreground">Your Deposit</th>
                                    <th className="text-left p-4 sm:p-5 font-semibold text-foreground">Bonus Credited</th>
                                    <th className="text-left p-4 sm:p-5 font-bold text-red-500">Total Buying Power</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30 text-muted-foreground">
                                <tr className="hover:bg-muted/20 transition-colors"><td className="p-4 sm:p-5">$250</td><td className="p-4 sm:p-5">$312.50</td><td className="p-4 sm:p-5 text-red-500 font-bold">$562.50</td></tr>
                                <tr className="hover:bg-muted/20 transition-colors"><td className="p-4 sm:p-5">$500</td><td className="p-4 sm:p-5">$625</td><td className="p-4 sm:p-5 text-red-500 font-bold">$1,125</td></tr>
                                <tr className="hover:bg-muted/20 transition-colors"><td className="p-4 sm:p-5">$1,000</td><td className="p-4 sm:p-5">$1,250</td><td className="p-4 sm:p-5 text-red-500 font-bold">$2,250</td></tr>
                                <tr className="hover:bg-muted/20 transition-colors"><td className="p-4 sm:p-5">$2,500</td><td className="p-4 sm:p-5">$3,125</td><td className="p-4 sm:p-5 text-red-500 font-bold">$5,625</td></tr>
                                <tr className="hover:bg-muted/20 transition-colors bg-muted/10"><td className="p-4 sm:p-5">$5,000</td><td className="p-4 sm:p-5">$6,250</td><td className="p-4 sm:p-5 text-red-500 font-bold text-base">$11,250</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground italic mt-2 opacity-80">*Maximum bonus per deposit cycle: $6,250. Bonus applies to every qualifying deposit — not just the first.</p>
                
                <h4 className="text-xl sm:text-2xl font-bold font-heading mt-10 mb-6 text-foreground">Bonus Terms (Plain English)</h4>
                <ul className="grid grid-cols-1 gap-3">
                    {[
                        "Minimum $250 deposit to qualify for the bonus",
                        "Bonus is buying power only — it increases your trading capacity, not your withdrawable balance",
                        "Bonus credits instantly on confirmed deposit",
                        "If you withdraw funds, the proportional bonus is removed; redeposit to receive a fresh bonus",
                        "Bonus stays in your account through trading drawdowns — it never expires while your account is active",
                        "Full terms apply — see Bonus Credit Rules"
                    ].map((term, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{term}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ),
        specs: [
            { label: "Minimum deposit", value: "$250" },
            { label: "Bonus", value: "125% buying power on every qualifying deposit" },
            { label: "Maximum bonus per cycle", value: "$6,250" },
            { label: "Commission", value: "$18.00 RT" },
            { label: "Spread", value: "From 1.2 pips on majors" },
            { label: "Leverage (majors)", value: "Up to 1:100" },
            { label: "Negative balance protection", value: "Always on" },
            { label: "Hedging", value: "Allowed" },
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

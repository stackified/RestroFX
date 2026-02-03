"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { TrendingUp, BarChart3, Droplets, Bitcoin, ArrowRight } from "lucide-react";

const markets = [
    {
        id: "forex",
        name: "Forex",
        description: "Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.",
        icon: TrendingUp,
        instruments: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD"],
        spread: "From 0.0 pips",
        leverage: "Up to 1:500",
    },
    {
        id: "indices",
        name: "Indices",
        description: "Access global stock indices including S&P 500, NASDAQ, FTSE 100, and more.",
        icon: BarChart3,
        instruments: ["S&P 500", "NASDAQ 100", "FTSE 100", "DAX 30", "Nikkei 225"],
        spread: "From 0.5 points",
        leverage: "Up to 1:200",
    },
    {
        id: "commodities",
        name: "Commodities",
        description: "Trade gold, oil, silver, and other commodities with tight spreads and 24/5 availability.",
        icon: Droplets,
        instruments: ["Gold (XAU/USD)", "Oil (WTI)", "Silver (XAG/USD)", "Natural Gas"],
        spread: "From 0.15 points",
        leverage: "Up to 1:200",
    },
    {
        id: "crypto",
        name: "Crypto CFDs",
        description: "Trade cryptocurrency CFDs including Bitcoin, Ethereum, and other major cryptocurrencies.",
        icon: Bitcoin,
        instruments: ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Ripple (XRP)"],
        spread: "From 0.01%",
        leverage: "Up to 1:10",
    },
];

export function MarketsGrid() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {markets.map((market, index) => (
                        <motion.div
                            key={market.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card border border-border/60 hover:border-red-600/30 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-red-600/5 transition-all duration-300"
                        >
                            {/* Card Header & Icon */}
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-red-600/5 border border-red-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white text-red-600 transition-all duration-300">
                                    <market.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-foreground mb-2 group-hover:text-red-600 transition-colors">
                                        {market.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {market.description}
                                    </p>
                                </div>
                            </div>

                            {/* Instruments Pills */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Popular Instruments</h4>
                                <div className="flex flex-wrap gap-2">
                                    {market.instruments.map((inst, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-lg bg-muted text-xs font-medium border border-border group-hover:border-red-600/20 group-hover:bg-red-600/5 transition-colors"
                                        >
                                            {inst}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-muted/30 rounded-xl border border-border/50">
                                <div>
                                    <span className="text-xs text-muted-foreground font-medium block mb-1">Spread</span>
                                    <p className="font-bold text-foreground">{market.spread}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground font-medium block mb-1">Leverage</span>
                                    <p className="font-bold text-foreground">{market.leverage}</p>
                                </div>
                            </div>

                            {/* Button */}
                            <Button
                                size="lg"
                                className="w-full rounded-xl h-12 text-base font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 hover:scale-[1.02] transition-all"
                                asChild
                            >
                                <Link href="/register" className="flex items-center justify-center gap-2">
                                    Start Trading {market.name}
                                </Link>
                            </Button>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

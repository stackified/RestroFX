"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Info } from "lucide-react";
import type { AccountType } from "@crimsonfx/types";

const accountTypes: (AccountType & Record<string, any>)[] = [
    {
        id: "bonus",
        name: "PowerUp Account",
        bestFor: "Building accounts faster with bonus capital",
        minimumDeposit: "$250",
        spread: "From 1.2 pips",
        commission: "$18 RT per lot",
        leverage: "Up to 1:100",
        executionType: "Market",
        bonus: "125% buying power",
        easScalping: "Allowed",
        hedging: "Allowed",
        negativeBalance: "Yes",
        platform: "TradeLocker"
    },
    {
        id: "ecn-raw",
        name: "ECN Raw",
        bestFor: "Active traders, scalpers, EAs",
        minimumDeposit: "$25",
        spread: "From 0.0 pips",
        commission: "$18 per lot",
        leverage: "Up to 1:1000",
        executionType: "ECN",
        bonus: "—",
        easScalping: "Allowed",
        hedging: "Allowed",
        negativeBalance: "Yes",
        platform: "TradeLocker",
        popular: true,
    },
    {
        id: "standard",
        name: "Standard Account",
        bestFor: "All-around traders",
        minimumDeposit: "$25",
        spread: "From 0.0 pips",
        commission: "$9 per lot",
        leverage: "Up to 1:1000",
        executionType: "Market",
        bonus: "—",
        easScalping: "Allowed",
        hedging: "Allowed",
        negativeBalance: "Yes",
        platform: "TradeLocker"
    },
];

const features = [
    { label: "Min. Deposit", key: "minimumDeposit" },
    { label: "Spread", key: "spread" },
    { label: "Commission", key: "commission" },
    { label: "Leverage", key: "leverage" },
    { label: "Execution", key: "executionType" },
    { label: "Bonus", key: "bonus" },
    { label: "EAs / Scalping", key: "easScalping" },
    { label: "Hedging", key: "hedging" },
    { label: "Negative balance protection", key: "negativeBalance" },
    { label: "Platform", key: "platform" },
];

export function AccountTypesComparison() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-card/50 backdrop-blur-xl rounded-[2rem] border border-border/50 shadow-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-red-600/20">
                        <div className="min-w-[700px] md:min-w-full">
                            {/* Header Row */}
                            <div className="grid grid-cols-4 divide-x border-b border-border/50">
                                <div className="p-6 md:p-8 flex items-center bg-muted/20">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold font-heading mb-1 text-foreground">Specifications</h3>
                                        <p className="text-[10px] md:text-sm text-muted-foreground whitespace-nowrap">Compare our features</p>
                                    </div>
                                </div>
                                {accountTypes.map((account) => (
                                    <div key={account.id} className="p-6 md:p-8 text-center relative group">
                                        {/* Hover Gradient Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {account.popular && (
                                            <span className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-red-600/20 whitespace-nowrap z-20">
                                                Most Popular
                                            </span>
                                        )}
                                        <div className="relative z-10 pt-4">
                                            <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 group-hover:text-red-600 transition-colors duration-300 truncate">{account.name}</h3>
                                            <p className="text-muted-foreground text-[10px] md:text-xs mb-4 md:mb-6 uppercase tracking-wider font-medium">
                                                {(account as any).bestFor}
                                            </p>
                                            <Button
                                                size="sm"
                                                variant={account.popular ? "default" : "outline"}
                                                className={`w-full rounded-xl font-bold transition-all duration-300 text-[10px] md:text-sm ${account.popular
                                                    ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30'
                                                    : 'border-red-600/20 hover:border-red-600 hover:text-red-600 hover:bg-red-600/5'}`}
                                                asChild
                                            >
                                                <Link href={`/register?account=${account.id}`}>Open Account</Link>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features Rows */}
                            <div className="divide-y divide-border/50">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="grid grid-cols-4 divide-x divide-border/50 hover:bg-muted/30 transition-colors duration-300 group/row">
                                        <div className="p-4 md:p-6 flex items-center justify-start bg-muted/10">
                                            <span className="font-semibold text-xs md:text-base text-muted-foreground group-hover/row:text-foreground transition-colors flex items-center gap-2">
                                                {feature.label}
                                                <Info className="w-3 h-3 opacity-0 group-hover/row:opacity-50 transition-opacity" />
                                            </span>
                                        </div>
                                        {accountTypes.map((account) => (
                                            <div key={`${account.id}-${feature.key}`} className="p-4 md:p-6 flex items-center justify-center text-center">
                                                <span className={`text-[10px] md:text-sm font-medium ${(account as any)[feature.key].includes("0.0") ? "text-red-600 font-bold" : "text-foreground"}`}>
                                                    {(account as any)[feature.key]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Footer Action Row */}
                            <div className="grid grid-cols-4 divide-x border-t border-border/50 bg-muted/20">
                                <div className="p-6 md:p-8 flex items-center justify-start">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Action</span>
                                </div>
                                {accountTypes.map((account) => (
                                    <div key={`${account.id}-action`} className="p-6 md:p-8 flex items-center justify-center">
                                        <Button
                                            size="sm"
                                            variant={account.popular ? "default" : "outline"}
                                            className={`w-full rounded-xl font-bold h-10 md:h-12 transition-all duration-300 text-[10px] md:text-sm ${account.popular
                                                ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 hover:scale-105'
                                                : 'border-red-600/20 hover:border-red-600 hover:text-red-600 hover:bg-red-600/5'}`}
                                            asChild
                                        >
                                            <Link href={`/register?account=${account.id}`}>
                                                Select {account.id === "ecn-raw" ? "Raw" : account.id === "bonus" ? "PowerUp" : "Standard"}
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

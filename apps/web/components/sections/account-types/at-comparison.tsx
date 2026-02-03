"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import type { AccountType } from "@crimsonfx/types";

const accountTypes: AccountType[] = [
    {
        id: "bonus",
        name: "Bonus Account",
        spread: "From 1.2 pips",
        commission: "No commission",
        leverage: "Up to 1:500",
        executionType: "Market",
        minimumDeposit: "$100",
    },
    {
        id: "ecn-raw",
        name: "ECN Raw",
        spread: "From 0.0 pips",
        commission: "$3.5 per lot",
        leverage: "Up to 1:500",
        executionType: "ECN",
        minimumDeposit: "$500",
        popular: true,
    },
    {
        id: "standard",
        name: "Standard Account",
        spread: "From 1.5 pips",
        commission: "No commission",
        leverage: "Up to 1:500",
        executionType: "Market",
        minimumDeposit: "$100",
    },
];

const features = [
    { label: "Spread", key: "spread" },
    { label: "Commission", key: "commission" },
    { label: "Leverage", key: "leverage" },
    { label: "Execution", key: "executionType" },
    { label: "Minimum Deposit", key: "minimumDeposit" },
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
                    {/* Header Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-b border-border/50">
                        <div className="p-8 flex items-center justify-center md:justify-start bg-muted/20">
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-1">Specifications</h3>
                                <p className="text-sm text-muted-foreground">Compare our account features</p>
                            </div>
                        </div>
                        {accountTypes.map((account) => (
                            <div key={account.id} className="p-8 text-center relative group">
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {account.popular && (
                                    <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-red-600/20">
                                        Most Popular
                                    </span>
                                )}
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">{account.name}</h3>
                                    <p className="text-muted-foreground text-xs mb-6 uppercase tracking-wider font-medium">
                                        {account.id === "bonus" && "For Beginners"}
                                        {account.id === "ecn-raw" && "For Professionals"}
                                        {account.id === "standard" && "Balanced Choice"}
                                    </p>
                                    <Button
                                        size="sm"
                                        variant={account.popular ? "default" : "outline"}
                                        className={`w-full rounded-xl font-bold transition-all duration-300 ${account.popular
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
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50 hover:bg-muted/30 transition-colors duration-300 group/row">
                                <div className="p-5 md:p-6 flex items-center justify-between md:justify-start bg-muted/10">
                                    <span className="font-semibold text-sm md:text-base text-muted-foreground group-hover/row:text-foreground transition-colors flex items-center gap-2">
                                        {feature.label}
                                        <Info className="w-3 h-3 opacity-0 group-hover/row:opacity-50 transition-opacity" />
                                    </span>
                                </div>
                                {accountTypes.map((account) => (
                                    <div key={`${account.id}-${feature.key}`} className="p-5 md:p-6 flex items-center justify-center text-center">
                                        <span className={`text-sm font-medium ${(account as any)[feature.key].includes("0.0") ? "text-red-600 font-bold" : "text-foreground"}`}>
                                            {(account as any)[feature.key]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Footer Action Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-t border-border/50 bg-muted/20">
                        <div className="p-8 hidden md:block"></div>
                        {accountTypes.map((account) => (
                            <div key={`${account.id}-action`} className="p-8 flex items-center justify-center">
                                <Button
                                    size="lg"
                                    variant={account.popular ? "default" : "outline"}
                                    className={`w-full rounded-xl font-bold h-12 ${account.popular
                                        ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 hover:scale-105'
                                        : 'border-red-600/20 hover:border-red-600 hover:text-red-600 hover:bg-red-600/5'}`}
                                    asChild
                                >
                                    <Link href={`/register?account=${account.id}`}>
                                        Select {account.name}
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion, AnimatePresence } from "framer-motion";
import type { AccountType } from "@crimsonfx/types";
import { TrendingUp, Zap, Shield, ArrowRight, Info, X, CheckCircle2 } from "lucide-react";

const accountTypes: AccountType[] = [
  {
    id: "raw",
    name: "RAW",
    spread: "From 0.1 pips",
    commission: "$18.00 RT",
    leverage: "Up to 1:500",
    executionType: "A-Book Direct",
    minimumDeposit: "$500",
  },
  {
    id: "ecn-standard-default",
    name: "ECN / Standard Default",
    spread: "From 2.0 pips",
    commission: "$4.00 RT",
    leverage: "Up to 1:500",
    executionType: "Hybrid",
    minimumDeposit: "$100",
    popular: true,
  },
  {
    id: "ecn-standard-vip",
    name: "ECN / Standard VIP",
    spread: "From 3.5 pips",
    commission: "$4.00 RT",
    leverage: "Up to 1:500",
    executionType: "Hybrid",
    minimumDeposit: "$100",
  },
];

const accountIcons: Record<string, typeof Zap> = {
  raw: Zap,
  "ecn-standard-default": TrendingUp,
  "ecn-standard-vip": Shield,
};

export function AccountTypesSection() {

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 rounded-full text-sm font-medium text-red-600 mb-4"
          >
            <span>Account Types</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight">
            Choose the Account That <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Trades Like You Do</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Three account types. One trading platform. Pick the setup that matches your style — whether you&apos;re starting out, scaling up, or trading at full speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-6 auto-rows-fr">
          {accountTypes.map((account, index) => {
            const Icon = accountIcons[account.id] || Shield;

            return (
              <AnimatedCard key={account.id} index={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {account.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-red-600/40 whitespace-nowrap block"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}

                  <Card
                    className={`
                      h-full relative overflow-hidden transition-all duration-300 cursor-pointer flex flex-col
                      ${account.popular
                        ? "border-2 border-red-600/30 hover:border-red-600/50 shadow-lg shadow-red-600/10"
                        : "border-2 border-red-500/20 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/10 bg-card/50"
                      }
                      group
                    `}
                  >
                    {account.popular && (
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: 'linear-gradient(to bottom right, rgba(220, 38, 38, 0.06), rgba(0, 0, 0, 0.03), rgba(220, 38, 38, 0.06))'
                        }}
                      />
                    )}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${account.popular ? "opacity-100" : ""}`}
                      style={{
                        background: account.popular
                          ? 'linear-gradient(to bottom right, rgba(220, 38, 38, 0.08), rgba(0, 0, 0, 0.12), rgba(220, 38, 38, 0.08))'
                          : 'linear-gradient(to bottom right, rgba(220, 38, 38, 0.08), rgba(0, 0, 0, 0.12), rgba(220, 38, 38, 0.08))'
                      }}
                    />

                    <CardHeader className={`relative z-10 pb-2 sm:pb-4 px-4 sm:px-6 flex-shrink-0 ${account.popular ? 'pt-8 sm:pt-7' : 'pt-6'}`}>
                      <div className="flex flex-col sm:flex-row items-start gap-4 mb-3">
                        <div className="p-2 sm:p-3 rounded-xl bg-muted border border-border flex-shrink-0">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl group-hover:text-red-600 transition-colors duration-300 mb-1 truncate sm:whitespace-normal">
                            {account.name}
                          </CardTitle>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {account.id === "raw" ? "Raw spreads. Direct execution." :
                              account.id === "ecn-standard-default" ? "All-around trading with competitive conditions" :
                                "Premium structure for VIP clients"}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0 pb-14 px-4 sm:px-6 flex-grow">
                      <div className="space-y-0 text-sm">
                        {[
                          { label: "Spread", value: account.spread },
                          { label: "Commission", value: account.commission },
                          { label: "Leverage", value: account.leverage },
                          { label: "Execution", value: account.executionType },
                          { label: "Min. Deposit", value: account.minimumDeposit }
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.04 }}
                            className="flex justify-between items-center py-2.5 border-b border-gray-200 dark:border-gray-700 last:border-0"
                          >
                            <span className="text-muted-foreground text-xs sm:text-sm flex-shrink-0 mr-2">{item.label}:</span>
                            <span className="font-semibold text-xs sm:text-sm text-foreground text-right">{item.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="relative z-10 pt-2 pb-6 px-4 sm:px-6 flex flex-col gap-3 flex-shrink-0">
                      <Button
                        className={`w-full rounded-full h-12 sm:h-14 text-base sm:text-lg font-bold transition-all duration-500 ${account.popular
                          ? "bg-primary hover:bg-red-700 shadow-[0_20px_50px_rgba(220,38,38,0.2)] hover:shadow-[0_30px_60px_rgba(220,38,38,0.3)] text-white hover:-translate-y-1"
                          : "border-2 border-red-600/30 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm"
                          } group/btn active:scale-95`}
                        variant={account.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href={`/register?account=${account.id}`} className="flex items-center justify-center gap-2">
                          <span className="relative z-10 flex items-center justify-center">
                            Open Account
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      </Button>

                      <Button
                          variant="ghost"
                          className="w-full h-10 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full"
                          asChild
                      >
                          <Link href={`/account-types/${account.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>

    </section>
  );
}

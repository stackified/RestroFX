"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";
import type { AccountType } from "@crimsonfx/types";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TrendingUp, Zap, Shield, ArrowRight } from "lucide-react";

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

const accountIcons: Record<string, typeof Zap> = {
  bonus: Zap,
  "ecn-raw": TrendingUp,
  standard: Shield,
};

export function AccountTypesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]" />

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-heading text-foreground mb-4">
            Choose Your Trading Edge
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Select the account type that best fits your trading style and experience level. Each account is designed to optimize your trading performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 auto-rows-fr">
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

                    <CardHeader className={`relative z-10 pb-4 px-6 flex-shrink-0 ${account.popular ? 'pt-7' : 'pt-6'}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-muted border border-border">
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-red-600 transition-colors duration-300 mb-1">
                            {account.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {account.id === "bonus" ? "Perfect for beginners" :
                              account.id === "ecn-raw" ? "Best for professional traders" :
                                "Balanced option for all traders"}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0 pb-14 px-6 flex-grow">
                      <div className="space-y-0 text-sm">
                        {[
                          { label: "Spread", value: account.spread },
                          { label: "Commission", value: account.commission },
                          { label: "Leverage", value: account.leverage },
                          { label: "Execution", value: account.executionType },
                          { label: "Min. Deposit", value: account.minimumDeposit },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.04 }}
                            className="flex justify-between items-center py-2.5 border-b border-gray-200 dark:border-gray-700 last:border-0 pr-10"
                          >
                            <span className="text-muted-foreground text-sm">{item.label}:</span>
                            <span className="font-semibold text-sm text-foreground">{item.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="relative z-10 pt-2 pb-6 px-6 flex-shrink-0">
                      <Button
                        className={`w-full rounded-full ${account.popular ? "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 text-white" : "border-red-600/30 hover:border-red-600 hover:text-red-600"} group/btn transition-all duration-300`}
                        variant={account.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href={`/register?account=${account.id}`} className="flex items-center justify-center gap-2">
                          Open Account
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </Link>
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

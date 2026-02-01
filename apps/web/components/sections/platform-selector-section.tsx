"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@/components/ui/neon-button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  Laptop,
  Brain
} from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  badge: string;
  color: string;
  borderColor: string;
}

interface AccountTypeData {
  id: string;
  name: string;
  spread: string;
  commission: string;
  leverage: string;
  executionType: string;
  minimumDeposit: string;
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  borderColor: string;
}

const platforms: Platform[] = [
  {
    id: "lock-it-trade",
    name: "Lock It Trade",
    icon: Brain,
    description: "AI-powered trading journal designed for prop firm traders",
    features: [
      "AI Readiness Score (87%)",
      "Automated Performance Analysis",
      "Violations & Risk Tracking",
      "Strategy Compliance Monitoring",
    ],
    badge: "AI Powered",
    color: "from-red-950/20 via-black/30 to-red-900/20",
    borderColor: "border-red-500/20 hover:border-red-600/40",
  },
  {
    id: "tradelocker",
    name: "TradeLocker",
    icon: Laptop,
    description: "Modern, intuitive platform designed for today's traders",
    features: [
      "User-friendly interface",
      "Advanced order management",
      "Real-time market data",
      "Cloud-based access",
    ],
    badge: "Modern",
    color: "from-red-950/20 via-black/30 to-red-900/20",
    borderColor: "border-red-500/20 hover:border-red-600/40",
  },
];

const accountTypes: AccountTypeData[] = [
  {
    id: "bonus",
    name: "Bonus Account",
    spread: "From 1.2 pips",
    commission: "No commission",
    leverage: "Up to 1:500",
    executionType: "Market",
    minimumDeposit: "$100",
    icon: Zap,
    description: "Perfect for beginners",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-500/20 hover:border-green-500/40",
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
    icon: TrendingUp,
    description: "Best for professional traders",
    color: "from-red-600/10 to-red-700/20",
    borderColor: "border-red-600/40 hover:border-red-600/60",
  },
  {
    id: "standard",
    name: "Standard Account",
    spread: "From 1.5 pips",
    commission: "No commission",
    leverage: "Up to 1:500",
    executionType: "Market",
    minimumDeposit: "$100",
    icon: Shield,
    description: "Balanced option for all traders",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
  },
];

export function PlatformSelectorSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [step, setStep] = useState<"platform" | "account">("platform");

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    setStep("account");
    setTimeout(() => {
      const element = document.getElementById("account-selection");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 300);
  };

  const handleAccountSelect = (accountId: string) => {
    setSelectedAccount(accountId);
  };

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);
  const selectedAccountData = accountTypes.find(a => a.id === selectedAccount);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-balance">
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
            <span>Get Started</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-foreground mb-4">
            Choose Your Platform
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"> & Account Type</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Select your preferred trading platform and account type to start your journey with professional-grade trading tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step === "platform"
              ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-600/30"
              : selectedPlatform
                ? "bg-red-600/20 text-red-600"
                : "bg-muted text-muted-foreground"
              }`}>
              {selectedPlatform ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : "1"}
            </div>
            <span className={`text-sm sm:text-base font-medium ${step === "platform" || selectedPlatform ? "text-foreground" : "text-muted-foreground"}`}>
              Platform
            </span>
          </div>
          <div className={`w-8 sm:w-12 h-0.5 transition-all duration-300 ${selectedPlatform ? "bg-red-600" : "bg-muted"}`} />
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step === "account" && selectedAccount
              ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-600/30"
              : step === "account" || selectedPlatform
                ? "bg-red-600/20 text-red-600"
                : "bg-muted text-muted-foreground"
              }`}>
              {selectedAccount ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : "2"}
            </div>
            <span className={`text-sm sm:text-base font-medium ${step === "account" || selectedAccount ? "text-foreground" : "text-muted-foreground"}`}>
              Account
            </span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === "platform" && (
            <motion.div
              key="platforms"
              id="platform-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                {platforms.map((platform, index) => {
                  const IconComponent = platform.icon;
                  const isSelected = selectedPlatform === platform.id;
                  return (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card
                          className={`
                            h-full flex flex-col relative overflow-hidden transition-all duration-300 cursor-pointer
                            ${isSelected
                              ? `border-2 border-red-600 shadow-2xl shadow-red-600/20 scale-[1.02]`
                              : `border-2 ${platform.borderColor} hover:shadow-xl`
                            }
                            group
                          `}
                          onClick={() => handlePlatformSelect(platform.id)}
                        >
                          <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isSelected ? "opacity-100" : ""}`}
                            style={{
                              background: 'linear-gradient(to bottom right, rgba(220, 38, 38, 0.08), rgba(0, 0, 0, 0.12), rgba(220, 38, 38, 0.08))'
                            }}
                          />

                          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                            <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-red-600/20 text-red-700 dark:text-red-300 whitespace-nowrap">
                              {platform.badge}
                            </span>
                          </div>

                          <CardHeader className="relative z-10 pb-2 sm:pb-4 px-4 sm:px-6 pt-8 sm:pt-6 flex-shrink-0">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-2">
                              <div className={`p-2 sm:p-3 rounded-xl bg-muted border border-border flex-shrink-0`}>
                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-xl sm:text-2xl group-hover:text-red-600 transition-colors duration-300 mb-1 truncate sm:whitespace-normal">
                                  {platform.name}
                                </CardTitle>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                  {platform.description}
                                </p>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="relative z-10 space-y-2 sm:space-y-3 px-4 sm:px-6 pb-6 flex-grow">
                            {platform.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                className="flex items-center gap-3 text-sm"
                              >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isSelected ? "bg-red-600/20" : "bg-muted"
                                  }`}>
                                  <Check className={`h-3 w-3 ${isSelected ? "text-red-600" : "text-muted-foreground"}`} />
                                </div>
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </CardContent>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute bottom-4 right-4 z-20"
                            >
                              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                <Check className="h-5 w-5 text-white" />
                              </div>
                            </motion.div>
                          )}
                        </Card>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === "account" && (
            <motion.div
              key="accounts"
              id="account-selection"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {selectedPlatformData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-8"
                >
                  <Card className="bg-muted/50 border-2 border-red-600/20 rounded-2xl overflow-hidden group">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="p-2 rounded-lg bg-red-600/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <selectedPlatformData.icon className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-muted-foreground">Selected Platform</p>
                            <p className="font-semibold text-lg truncate group-hover:text-red-600 transition-colors">{selectedPlatformData.name}</p>
                          </div>
                        </div>
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-xl h-10 px-4 border-red-600/30 hover:border-red-600 flex-shrink-0 transition-all font-semibold"
                          onClick={() => {
                            setStep("platform");
                            setSelectedPlatform(null);
                            setSelectedAccount(null);
                            setTimeout(() => {
                              const element = document.getElementById("platform-selection");
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start"
                                });
                              }
                            }, 100);
                          }}
                        >
                          Change
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {accountTypes.map((account, index) => {
                  const IconComponent = account.icon;
                  const isSelected = selectedAccount === account.id;
                  return (
                    <motion.div
                      key={account.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="h-full"
                      >
                        {account.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                              className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-red-600/40 whitespace-nowrap block animate-bounce-subtle"
                            >
                              Most Popular
                            </motion.span>
                          </div>
                        )}
                        <Card
                          className={`
                            h-full relative overflow-hidden transition-all duration-300 cursor-pointer
                            ${isSelected
                              ? `border-2 border-red-600 shadow-2xl shadow-red-600/20`
                              : account.popular
                                ? `border-2 border-red-600/30 hover:border-red-600 shadow-lg shadow-red-600/10`
                                : `border-2 ${account.borderColor} hover:shadow-xl hover:border-red-500/30`
                            }
                            group
                          `}
                          onClick={() => handleAccountSelect(account.id)}
                        >
                          <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            style={{
                              background: 'linear-gradient(to bottom right, rgba(220, 38, 38, 0.05), transparent, rgba(220, 38, 38, 0.05))'
                            }}
                          />

                          <CardHeader className={`relative z-10 pb-2 sm:pb-4 px-4 sm:px-6 ${account.popular ? 'pt-8 sm:pt-7' : 'pt-6'}`}>
                            <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                              <div className="p-2 sm:p-3 rounded-xl bg-muted border border-border group-hover:bg-red-600/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-foreground group-hover:text-red-600" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg sm:text-xl group-hover:text-red-600 transition-colors duration-300 mb-1">
                                  {account.name}
                                </CardTitle>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{account.description}</p>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="relative z-10 pt-0 pb-14 px-4 sm:px-6">
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
                                  className="flex justify-between items-center py-2.5 border-b border-gray-200 dark:border-gray-700 last:border-0"
                                >
                                  <span className="text-muted-foreground text-xs sm:text-sm flex-shrink-0 mr-2">{item.label}:</span>
                                  <span className="font-semibold text-xs sm:text-sm text-foreground text-right">{item.value}</span>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute bottom-4 right-4 z-20"
                            >
                              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                <Check className="h-5 w-5 text-white" />
                              </div>
                            </motion.div>
                          )}
                        </Card>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedPlatform && selectedAccount && selectedPlatformData && selectedAccountData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-2 border-red-600/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold mb-2">Ready to Start Trading?</h3>
                    <p className="text-muted-foreground">
                      {selectedPlatformData.name} • {selectedAccountData.name}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0 flex-wrap justify-center">
                    <Button
                      variant="default"
                      size="lg"
                      className="rounded-xl h-14 px-8 border-2 border-red-600/30 hover:border-red-600 hover:bg-red-600/5 transition-all font-bold"
                      onClick={() => {
                        setSelectedPlatform(null);
                        setSelectedAccount(null);
                        setStep("platform");
                        setTimeout(() => {
                          const element = document.getElementById("platform-selection");
                          if (element) {
                            element.scrollIntoView({
                              behavior: "smooth",
                              block: "start"
                            });
                          }
                        }, 100);
                      }}
                    >
                      Start Over
                    </Button>
                    <Link
                      href={`/register?platform=${selectedPlatform}&account=${selectedAccount}`}
                    >
                      <Button
                        variant="default"
                        size="lg"
                        className="rounded-xl h-14 px-10 text-lg font-bold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 text-white hover:scale-105 transition-all inline-flex items-center gap-2"
                      >
                        <span>Open Account</span>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === "platform" && !selectedPlatform && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Button
              variant="default"
              className="rounded-xl h-auto min-h-[3.5rem] py-3 px-8 border-red-600/30 hover:border-red-600 transition-all font-semibold max-w-[280px] sm:max-w-none mx-auto flex items-center justify-center leading-tight text-center"
              onClick={() => {
                setStep("account");
                setTimeout(() => {
                  const element = document.getElementById("account-selection");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }, 100);
              }}
            >
              Skip to Account Selection
            </Button>
          </motion.div>
        )}

        {step === "account" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button
              variant="default"
              size="sm"
              className="rounded-xl h-auto min-h-[2.5rem] py-2 px-6 border-red-600/30 hover:border-red-600 inline-flex items-center justify-center gap-2 transition-all font-semibold max-w-[280px] sm:max-w-none mx-auto leading-tight text-center"
              onClick={() => {
                setStep("platform");
                setSelectedAccount(null);
                setTimeout(() => {
                  const element = document.getElementById("platform-selection");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }, 100);
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back to Platform Selection</span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

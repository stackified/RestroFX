"use client";

import { motion } from "framer-motion";

import { Zap, Percent, Activity } from "lucide-react";

export function PartnerFeatures() {
  const features = [
    {
      title: "1:1000 Leverage on MT5 & TradeLocker",
      description:
        "Instantly unlock 1:1000 leverage and take your account to new heights. Don't let low leverage hold you back! More margin = Larger lots = More Opportunity.",
      icon: Activity,
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/10 to-transparent",
    },
    {
      title: "Enjoy ZERO Commission Trading on our STP Account",
      description:
        "Access some of the lowest all-in costs in FX trading. Benefit from market-leading prices, low spreads, and zero commissions*. Available on MT5 & TradeLocker.",
      icon: Percent,
      borderColor: "border-primary/20 hover:border-primary/40",
      iconColor: "text-primary",
      bgGradient: "from-primary/10 to-transparent",
    },
    {
      title: "Trade Raw Spreads with Tier-1 Liquidity",
      description:
        "Sourced 20+ major banks, non-bank LPs, and top cryptocurrency exchanges to offer best trading conditions. During active sessions many pairs will have 0.0 spreads.",
      icon: Zap,
      borderColor: "border-green-500/20 hover:border-green-500/40",
      iconColor: "text-green-500",
      bgGradient: "from-green-500/10 to-transparent",
    },
  ];

  return (
    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          CFD trading the way it was meant to be. <br className="hidden sm:block" />
          Fast. Reliable. Low-Cost Per Trade.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="h-full group p-6 sm:p-8 rounded-[2rem] border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-background/50 backdrop-blur-md relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${feature.bgGradient} -z-10`}
              />
              <div className="flex flex-col h-full z-10 relative">
                <div className={`p-4 rounded-2xl bg-muted/50 border border-border w-fit mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-sm`}>
                  <Icon className={`h-8 w-8 ${feature.iconColor} group-hover:rotate-6 transition-transform`} />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground text-base sm:text-lg flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

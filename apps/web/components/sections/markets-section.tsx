"use client";

import Link from "next/link";
import { TrendingUp, BarChart3, Droplets, Bitcoin, Globe, PieChart } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const markets = [
  {
    id: "forex",
    name: "Forex Trading",
    description: "Trade major, minor, and exotic currency pairs with competitive spreads and lightning-fast execution.",
    icon: TrendingUp,
  },
  {
    id: "commodities",
    name: "Commodities Market",
    description: "Trade gold, oil, silver, and other precious metals with professional-grade execution and transparency.",
    icon: Droplets,
  },
  {
    id: "crypto",
    name: "Cryptocurrency CFDs",
    description: "Trade Bitcoin, Ethereum, and other major cryptocurrencies with competitive conditions and 24/7 availability.",
    icon: Bitcoin,
  },
  {
    id: "indices",
    name: "Stock Indices",
    description: "Access global stock indices including S&P 500, NASDAQ, FTSE 100, and more with tight spreads.",
    icon: BarChart3,
  },
  {
    id: "stocks",
    name: "Global Stocks",
    description: "Access thousands of stocks from major exchanges worldwide. Trade shares with leverage and competitive fees.",
    icon: Globe,
  },
  {
    id: "etfs",
    name: "ETFs & Funds",
    description: "Trade Exchange-Traded Funds and investment funds from major markets with diversified exposure and low costs.",
    icon: PieChart,
  },
];

interface MarketGridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string;
}

const MarketGridItem = ({ icon, title, description, id }: MarketGridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <Link href={`/markets/${id}`} className="block h-full">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect
            spread={50}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={4}
            variant="red"
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                  {title}
                </h3>
                <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export function MarketsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-4">
            Trade Global Markets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access a wide range of trading instruments across multiple asset classes with professional-grade execution.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <MarketGridItem
              key={market.id}
              icon={<market.icon className="h-4 w-4 text-foreground" />}
              title={market.name}
              description={market.description}
              id={market.id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

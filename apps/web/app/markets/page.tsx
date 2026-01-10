import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { TrendingUp, BarChart3, Droplets, Bitcoin } from "lucide-react";

const markets = [
  {
    id: "forex",
    name: "Forex",
    description:
      "Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.",
    icon: TrendingUp,
    instruments: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD"],
    spread: "From 0.0 pips",
    leverage: "Up to 1:500",
  },
  {
    id: "indices",
    name: "Indices",
    description:
      "Access global stock indices including S&P 500, NASDAQ, FTSE 100, and more.",
    icon: BarChart3,
    instruments: ["S&P 500", "NASDAQ 100", "FTSE 100", "DAX 30", "Nikkei 225"],
    spread: "From 0.5 points",
    leverage: "Up to 1:200",
  },
  {
    id: "commodities",
    name: "Commodities",
    description:
      "Trade gold, oil, silver, and other commodities with tight spreads and 24/5 availability.",
    icon: Droplets,
    instruments: ["Gold (XAU/USD)", "Oil (WTI)", "Silver (XAG/USD)", "Natural Gas"],
    spread: "From 0.15 points",
    leverage: "Up to 1:200",
  },
  {
    id: "crypto",
    name: "Crypto CFDs",
    description:
      "Trade cryptocurrency CFDs including Bitcoin, Ethereum, and other major cryptocurrencies.",
    icon: Bitcoin,
    instruments: ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Ripple (XRP)"],
    spread: "From 0.01%",
    leverage: "Up to 1:10",
  },
];

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Trade Global Markets
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access a wide range of trading instruments across multiple asset
                classes with competitive conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {markets.map((market) => (
                <Card key={market.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <market.icon className="h-10 w-10 text-primary" />
                        <div>
                          <CardTitle className="text-2xl">{market.name}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      {market.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Popular Instruments</h3>
                      <div className="flex flex-wrap gap-2">
                        {market.instruments.map((instrument, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted rounded-md text-sm"
                          >
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Spread:</span>
                        <p className="font-medium">{market.spread}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Leverage:</span>
                        <p className="font-medium">{market.leverage}</p>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/register">Start Trading {market.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


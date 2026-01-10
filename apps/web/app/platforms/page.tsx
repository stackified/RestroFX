import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Check, Download, Smartphone, Globe } from "lucide-react";

const platforms = [
  {
    id: "mt5",
    name: "MetaTrader 5",
    description:
      "The industry-standard platform trusted by millions of traders worldwide. MetaTrader 5 offers advanced charting, technical analysis tools, and algorithmic trading capabilities.",
    features: [
      "Advanced charting with 21 timeframes",
      "80+ built-in technical indicators",
      "EA & Algorithmic trading support",
      "Multi-asset trading platform",
      "Mobile apps for iOS and Android",
      "Web-based platform available",
      "One-click trading",
      "Depth of Market (DOM)",
    ],
    downloads: [
      { name: "Windows", icon: Download },
      { name: "Mac", icon: Download },
      { name: "iOS", icon: Smartphone },
      { name: "Android", icon: Smartphone },
      { name: "Web", icon: Globe },
    ],
  },
  {
    id: "tradelocker",
    name: "TradeLocker",
    description:
      "A modern, intuitive platform designed for today's traders. TradeLocker combines powerful features with a user-friendly interface for a seamless trading experience.",
    features: [
      "User-friendly interface",
      "Advanced order management",
      "Real-time market data",
      "Cloud-based access from anywhere",
      "Customizable workspace",
      "Integrated risk management tools",
      "Mobile trading apps",
      "Professional charting tools",
    ],
    downloads: [
      { name: "Windows", icon: Download },
      { name: "Mac", icon: Download },
      { name: "Web", icon: Globe },
      { name: "Mobile", icon: Smartphone },
    ],
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Trading Platforms
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from industry-leading trading platforms designed for
                professional traders.
              </p>
            </div>

            <div className="space-y-16">
              {platforms.map((platform) => (
                <div key={platform.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">{platform.name}</CardTitle>
                      <p className="text-muted-foreground mt-4 text-lg">
                        {platform.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div>
                        <h3 className="font-semibold mb-4 text-lg">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {platform.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4 text-lg">
                          Available On
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {platform.downloads.map((download, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md"
                            >
                              <download.icon className="h-4 w-4" />
                              <span className="text-sm font-medium">
                                {download.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button size="lg" asChild>
                          <Link href="/register">Start Trading</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link href="/demo">Try Demo</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


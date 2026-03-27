import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
  Users,
  DollarSign,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Globe,
  BarChart3,
  ArrowRight,
  Check,
  Star,
  Target
} from "lucide-react";

export default function AffiliateProgramPage() {
  const tiers = [
    {
      name: "Bronze",
      icon: Award,
      color: "from-orange-900/20 to-orange-800/10",
      borderColor: "border-orange-500/30",
      commission: "Up to $400",
      volume: "0 - 10 lots/month",
      features: [
        "Real-time tracking dashboard",
        "Marketing materials provided",
        "Dedicated support",
        "Monthly payouts"
      ]
    },
    {
      name: "Silver",
      icon: Star,
      color: "from-gray-400/20 to-gray-300/10",
      borderColor: "border-gray-400/30",
      commission: "Up to $600",
      volume: "11 - 50 lots/month",
      features: [
        "All Bronze benefits",
        "Priority support",
        "Custom landing pages",
        "Bi-weekly payouts"
      ],
      popular: true
    },
    {
      name: "Gold",
      icon: Target,
      color: "from-yellow-600/20 to-yellow-500/10",
      borderColor: "border-yellow-500/30",
      commission: "Up to $800",
      volume: "51+ lots/month",
      features: [
        "All Silver benefits",
        "Dedicated account manager",
        "Custom commission structures",
        "Weekly payouts"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Commissions",
      description: "Earn industry-leading commissions on every trade your referrals make"
    },
    {
      icon: TrendingUp,
      title: "Lifetime Earnings",
      description: "Continue earning as long as your referred clients keep trading"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your performance with our advanced affiliate dashboard"
    },
    {
      icon: Zap,
      title: "Fast Payouts",
      description: "Get paid quickly with multiple payout options available"
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "Partner with a regulated and reputable broker"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Promote to clients worldwide with multi-language support"
    }
  ];

  const stats = [
    { value: "$2M+", label: "Paid to Affiliates" },
    { value: "500+", label: "Active Affiliates" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                <Users className="h-4 w-4" />
                <span>Partner Program</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                Affiliate Program
                <span className="block text-primary mt-2">Earn While You Grow</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join our affiliate program and earn competitive commissions by referring traders to Restro FX.
                Get access to marketing tools, real-time tracking, and dedicated support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                  <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer">
                    Become an Affiliate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary font-numbers">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Commission Tiers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the tier that matches your ambition. The more you refer, the more you earn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 ${tier.borderColor} bg-gradient-to-br ${tier.color} backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <tier.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">{tier.commission}</div>
                    <p className="text-sm text-muted-foreground">{tier.volume}</p>
                  </div>

                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a program designed for your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-background"
                >
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 text-center border-2 border-primary/20">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our affiliate program today and start earning commissions
              </p>
              <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

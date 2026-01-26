import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
    DollarSign,
    TrendingUp,
    Zap,
    Shield,
    Globe,
    BarChart3,
    ArrowRight,
    Check,
    Star,
    Megaphone,
    Percent,
    Wallet,
    Mail,
    Image as ImageIcon,
    Code
} from "lucide-react";

export default function AffiliateProgramPage() {
    const benefits = [
        {
            icon: TrendingUp,
            title: "High Conversion Rates",
            description: "Promote optimized landing pages and platforms that convert visitors into active traders."
        },
        {
            icon: DollarSign,
            title: "Generous Commissions",
            description: "Choose from CPA, RevShare, or Hybrid models with industry-leading commission rates."
        },
        {
            icon: Megaphone,
            title: "Marketing Support",
            description: "Access professional banners, landing pages, email templates, and social media content."
        },
        {
            icon: BarChart3,
            title: "Real-Time Tracking",
            description: "Monitor clicks, conversions, and earnings with our advanced analytics dashboard."
        },
        {
            icon: Zap,
            title: "Fast Payments",
            description: "Receive your commissions on time with flexible weekly or monthly payout schedules."
        },
        {
            icon: Shield,
            title: "Dedicated Support",
            description: "Get personalized assistance from your dedicated affiliate account manager."
        }
    ];

    const commissionModels = [
        {
            title: "CPA",
            subtitle: "Cost Per Acquisition",
            description: "Earn a one-time payment for every qualified trader you refer",
            features: [
                "Up to $800 per qualified trader",
                "Instant commission on first deposit",
                "No ongoing management needed",
                "Perfect for high-traffic sources"
            ],
            icon: Wallet,
            popular: false
        },
        {
            title: "RevShare",
            subtitle: "Revenue Share",
            description: "Earn ongoing commissions from your referred clients' trading activity",
            features: [
                "Up to 50% revenue share",
                "Lifetime recurring commissions",
                "Passive income potential",
                "Best for long-term partnerships"
            ],
            icon: Percent,
            popular: true
        },
        {
            title: "Hybrid",
            subtitle: "Best of Both Worlds",
            description: "Combine CPA and RevShare for maximum earning potential",
            features: [
                "Upfront CPA payment",
                "Plus ongoing RevShare",
                "Balanced risk and reward",
                "Flexible commission structure"
            ],
            icon: TrendingUp,
            popular: false
        }
    ];

    const marketingTools = [
        {
            icon: ImageIcon,
            title: "Banner Ads",
            description: "Multiple sizes and designs optimized for conversions"
        },
        {
            icon: Globe,
            title: "Landing Pages",
            description: "Pre-built, high-converting pages for your campaigns"
        },
        {
            icon: Mail,
            title: "Email Templates",
            description: "Professional email campaigns ready to send"
        },
        {
            icon: Code,
            title: "API Integration",
            description: "Custom tracking and integration capabilities"
        }
    ];

    const stats = [
        { value: "500+", label: "Active Affiliates" },
        { value: "$10M+", label: "Commissions Paid" },
        { value: "25%", label: "Avg Conversion" },
        { value: "90 Days", label: "Cookie Duration" }
    ];

    const steps = [
        {
            step: "01",
            title: "Sign Up & Get Approved",
            description: "Complete our simple application form and get instant approval to join our affiliate program."
        },
        {
            step: "02",
            title: "Get Your Tracking Links",
            description: "Access your unique affiliate links and choose from our library of marketing materials."
        },
        {
            step: "03",
            title: "Promote Restro FX",
            description: "Share your links through your website, social media, email lists, or paid advertising."
        },
        {
            step: "04",
            title: "Earn Commissions",
            description: "Track your performance in real-time and receive payouts according to your chosen schedule."
        }
    ];

    const faqs = [
        {
            question: "How long is the cookie duration?",
            answer: "Our affiliate cookies last for 90 days, giving you ample time to earn commissions from referred visitors."
        },
        {
            question: "When do I get paid?",
            answer: "Commissions are paid weekly or monthly depending on your preference, with a minimum payout threshold of $100."
        },
        {
            question: "Can I promote on paid advertising?",
            answer: "Yes! You can use Google Ads, Facebook Ads, and other paid channels. We provide specific guidelines for compliant advertising."
        },
        {
            question: "What makes a qualified trader?",
            answer: "A qualified trader is someone who registers through your link, verifies their account, and makes a minimum deposit of $100."
        }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-background to-primary/10 pt-32 pb-20">
                    {/* Diagonal Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 origin-top-right" />
                        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 transform -skew-x-12 origin-bottom-left" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                <Megaphone className="h-4 w-4" />
                                <span>Affiliate Partnership Program</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                                Affiliate Program
                                <span className="block text-primary mt-2">Earn with Every Referral</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Join Restro FX&apos;s affiliate program and earn generous commissions by promoting our premium trading platforms.
                                Choose your commission model and start earning today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Join as Affiliate <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="#commission-plans">
                                        View Commission Plans
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

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Why Join Our Affiliate Program?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Partner with a trusted broker and unlock unlimited earning potential
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-background/50 backdrop-blur-sm"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <benefit.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Commission Structure Section */}
                <section id="commission-plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Choose Your Commission Model
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Select the commission structure that best fits your business model
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {commissionModels.map((model, index) => (
                                <div
                                    key={index}
                                    className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${model.popular
                                        ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary scale-105"
                                        : "border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm"
                                        }`}
                                >
                                    {model.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <div className="px-4 py-1 bg-primary text-white text-sm font-bold rounded-full flex items-center gap-1">
                                                <Star className="h-3 w-3 fill-current" />
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                                            <model.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
                                        <p className="text-sm text-muted-foreground">{model.subtitle}</p>
                                    </div>

                                    <p className="text-center text-muted-foreground mb-6">{model.description}</p>

                                    <div className="space-y-3">
                                        {model.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </div>
                                                <span className="text-sm text-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full mt-6 rounded-xl h-12 font-bold ${model.popular ? "shadow-lg shadow-primary/20" : ""
                                            }`}
                                        variant={model.popular ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link href="/register">Get Started</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Marketing Tools Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Professional Marketing Tools
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to promote Restro FX effectively
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {marketingTools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background text-center"
                                >
                                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                                        <tool.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Start earning in four simple steps
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Everything you need to know about our affiliate program
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-background"
                                >
                                    <h3 className="text-lg font-bold mb-2 text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 text-center border-2 border-primary/20">
                            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
                                Ready to Start Earning?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of affiliates earning commissions by promoting Restro FX
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Become an Affiliate <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/contact">
                                        Contact Affiliate Team
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

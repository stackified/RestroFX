"use client";

import { motion } from "framer-motion";
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
    Code,
    Clock,
    CreditCard,
    BarChart,
    UserCheck
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@crimsonfx/ui";
import { GlowCard } from "@/components/ui/glow-card";

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
            title: "Promote RestroFX",
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
            answer: "Our affiliate cookies last for 90 days, giving you ample time to earn commissions from referred visitors.",
            icon: Clock
        },
        {
            question: "When do I get paid?",
            answer: "Commissions are paid weekly or monthly depending on your preference, with a minimum payout threshold of $100.",
            icon: CreditCard
        },
        {
            question: "Can I promote on paid advertising?",
            answer: "Yes! You can use Google Ads, Facebook Ads, and other paid channels. We provide specific guidelines for compliant advertising.",
            icon: BarChart
        },
        {
            question: "What makes a qualified trader?",
            answer: "A qualified trader is someone who registers through your link, verifies their account, and makes a minimum deposit of $100.",
            icon: UserCheck
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
                                <span className="block bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent mt-2">Earn with Every Referral</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Join RestroFX&apos;s affiliate program and earn generous commissions by promoting our premium trading platforms.
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
                                Why Join Our <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Affiliate Program?</span>
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
                                Choose Your <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Commission Model</span>
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
                                Professional <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Marketing Tools</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to promote RestroFX effectively
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">How</span> It Works
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
                <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 skew-x-12 transform -translate-x-1/2" />
                    <div className="container mx-auto max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Frequently</span> Asked Questions
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to know about our affiliate program. Start your partnership with clarity and confidence.
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-5">
                            {faqs.map((faq, index) => {
                                const Icon = faq.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <GlowCard className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm group overflow-hidden">
                                            <AccordionItem
                                                value={`item-${index}`}
                                                className="border-none px-0"
                                            >
                                                <AccordionTrigger className="text-left font-bold font-heading hover:no-underline py-6 px-6 text-lg sm:text-xl group transition-all">
                                                    <div className="flex items-center gap-4">
                                                        <div className="p-2.5 rounded-xl bg-red-600/5 border border-red-600/10 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                                            <Icon className="h-5 w-5" />
                                                        </div>
                                                        <span className="group-hover:text-red-600 transition-colors duration-300">
                                                            {faq.question}
                                                        </span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground px-6 pb-6 leading-relaxed text-base sm:text-lg border-t border-border/10 pt-4">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </GlowCard>
                                    </motion.div>
                                );
                            })}
                        </Accordion>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-x-0 inset-y-0 bg-transparent"></div>
                    <div className="container mx-auto max-w-7xl relative z-10">
                        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary via-red-600 to-red-700 p-8 sm:p-12 lg:p-24 shadow-2xl group text-center mx-auto max-w-[90%] sm:max-w-full">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 space-y-8"
                            >
                                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-white leading-tight">
                                    Ready to <br />
                                    <span className="text-white/80 italic font-light">Start Earning?</span>
                                </h2>
                                <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                                    Join thousands of affiliates earning commissions by promoting RestroFX.
                                    Scale your business with our premium partnership program.
                                </p>
                                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-white text-primary hover:bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,0,0,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95"
                                        asChild
                                    >
                                        <Link href="/register">
                                            <span className="relative z-10 flex items-center justify-center">
                                                Become an Affiliate <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                            </span>
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold border-2 border-white/50 text-white hover:bg-white hover:text-red-600 transition-all duration-300 bg-transparent active:scale-95 shadow-lg"
                                        asChild
                                    >
                                        <Link href="/contact">
                                            Contact Affiliate Team
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

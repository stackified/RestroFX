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
    Briefcase,
    Target
} from "lucide-react";

export default function IBProgramPage() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Competitive Rebates",
            description: "Earn generous rebates on every trade your referred clients make, with no volume caps."
        },
        {
            icon: TrendingUp,
            title: "Recurring Revenue",
            description: "Build a sustainable income stream with lifetime commissions on active clients."
        },
        {
            icon: BarChart3,
            title: "Advanced Reporting",
            description: "Access detailed analytics and real-time reporting through your IB dashboard."
        },
        {
            icon: Zap,
            title: "Fast Payouts",
            description: "Receive your commissions quickly with flexible payout schedules and methods."
        },
        {
            icon: Shield,
            title: "Dedicated Support",
            description: "Get personalized assistance from your dedicated IB account manager."
        },
        {
            icon: Globe,
            title: "Marketing Resources",
            description: "Access professional marketing materials, banners, and promotional tools."
        }
    ];

    const features = [
        "Multi-tier commission structure",
        "Sub-IB capabilities",
        "Custom branded materials",
        "API access for integration",
        "Regular performance bonuses",
        "Educational webinars and training"
    ];

    const stats = [
        { value: "$5M+", label: "Paid to IBs" },
        { value: "200+", label: "Active IBs" },
        { value: "Up to $15", label: "Per Lot Rebate" },
        { value: "24/7", label: "IB Support" }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section - Diagonal Split Design */}
                <section className="relative overflow-hidden bg-gradient-to-br from-background to-primary/10 pt-32 pb-20">
                    {/* Diagonal Background Element */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 origin-top-right" />
                        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 transform -skew-x-12 origin-bottom-left" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                <Briefcase className="h-4 w-4" />
                                <span>Introducing Broker Program</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                                IB Program
                                <span className="block text-primary mt-2">Partner for Success</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Join our Introducing Broker program and build a profitable business by referring traders to Restro FX.
                                Earn competitive rebates, access premium tools, and grow your network with our support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Become an IB <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/contact">
                                        Contact IB Team
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
                                Why Become an IB?
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

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                                    Premium IB Features
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our IB program is designed to give you everything you need to succeed.
                                    From advanced tools to dedicated support, we&apos;re committed to your growth.
                                </p>
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 p-8 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <Target className="h-24 w-24 text-primary mx-auto" />
                                        <p className="text-lg font-semibold text-foreground">Build Your Network</p>
                                        <p className="text-muted-foreground">Grow your business with our comprehensive IB tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Get started in three simple steps
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Apply & Get Approved",
                                    description: "Submit your IB application and get approved within 24 hours. No fees or minimum requirements."
                                },
                                {
                                    step: "02",
                                    title: "Refer Clients",
                                    description: "Use our marketing tools and your unique IB link to refer traders to Restro FX."
                                },
                                {
                                    step: "03",
                                    title: "Earn Rebates",
                                    description: "Start earning rebates on every trade your clients make. Track everything in real-time."
                                }
                            ].map((item, index) => (
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

                {/* CTA */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 text-center border-2 border-primary/20">
                            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
                                Ready to Start Your IB Journey?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join our IB program today and start building a profitable partnership
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/contact">
                                        Schedule a Call
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

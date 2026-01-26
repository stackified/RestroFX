import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
    Lock,
    Zap,
    Shield,
    TrendingUp,
    BarChart3,
    Clock,
    Globe,
    Smartphone,
    ArrowRight,
    Layers
} from "lucide-react";

export default function LockItTradePage() {
    const features = [
        {
            icon: Lock,
            title: "Advanced Risk Management",
            description: "Lock in your profits and limit losses with our proprietary risk management tools designed for precision trading."
        },
        {
            icon: Zap,
            title: "Lightning-Fast Execution",
            description: "Experience sub-millisecond order execution with our cutting-edge infrastructure and direct market access."
        },
        {
            icon: Shield,
            title: "Bank-Grade Security",
            description: "Your funds and data are protected with military-grade encryption and multi-factor authentication."
        },
        {
            icon: TrendingUp,
            title: "Advanced Charting",
            description: "Access professional-grade charts with 100+ technical indicators and drawing tools for deep market analysis."
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Make informed decisions with live market data, sentiment analysis, and AI-powered insights."
        },
        {
            icon: Clock,
            title: "24/7 Trading",
            description: "Trade global markets around the clock with our always-on platform and dedicated support team."
        }
    ];

    const platforms = [
        {
            icon: Globe,
            name: "Web Platform",
            description: "Trade from any browser with our fully-featured web application"
        },
        {
            icon: Smartphone,
            name: "Mobile Apps",
            description: "iOS and Android apps for trading on the go"
        },
        {
            icon: Layers,
            name: "Desktop",
            description: "Powerful desktop application for Windows and macOS"
        }
    ];

    const stats = [
        { value: "<10ms", label: "Average Execution Speed" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "150+", label: "Trading Instruments" },
        { value: "24/7", label: "Customer Support" }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section - Creative Gradient Background */}
                <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                                <Lock className="h-4 w-4" />
                                <span>Premier Trading Platform</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                                Lock It Trade
                                <span className="block text-primary mt-2">Precision Meets Performance</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Our flagship trading platform combines institutional-grade tools with an intuitive interface,
                                empowering you to execute trades with confidence and precision.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/demo">
                                        Try Demo Account
                                    </Link>
                                </Button>
                            </div>

                            {/* Stats Row */}
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

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Powerful Features for Serious Traders
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to trade with confidence and precision
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-background/50 backdrop-blur-sm"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Availability */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                                Trade Anywhere, Anytime
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Access Lock It Trade on all your devices
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    className="text-center p-8 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-background"
                                >
                                    <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                                        <platform.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                                    <p className="text-muted-foreground">{platform.description}</p>
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
                                Ready to Experience Lock It Trade?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of traders who trust Lock It Trade for their trading needs
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="/register">
                                        Open Live Account <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/contact">
                                        Contact Sales
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

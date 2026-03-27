"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
    Sparkles,
    Brain,
    TrendingUp,
    BarChart3,
    Target,
    Zap,
    Shield,
    ArrowRight,
    Check,
    Activity
} from "lucide-react";
import { AetherFlow } from "@/components/ui/aether-flow";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AITradingJournalPage() {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analysis",
            description: "Advanced machine learning algorithms analyze your trading patterns and identify opportunities for improvement."
        },
        {
            icon: TrendingUp,
            title: "Performance Tracking",
            description: "Comprehensive metrics and KPIs to monitor your trading performance across all instruments and timeframes."
        },
        {
            icon: Target,
            title: "Pattern Recognition",
            description: "Automatically detect winning and losing patterns in your trading behavior to optimize your strategy."
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Deep dive into your trading data with interactive charts, heatmaps, and statistical analysis."
        },
        {
            icon: Zap,
            title: "Real-Time Insights",
            description: "Get instant feedback and actionable recommendations as you trade throughout the day."
        },
        {
            icon: Shield,
            title: "Risk Management",
            description: "AI-driven risk analysis helps you maintain optimal position sizing and risk-reward ratios."
        }
    ];

    const benefits = [
        "Identify and eliminate costly trading mistakes",
        "Discover your most profitable trading setups",
        "Optimize entry and exit timing",
        "Improve risk management discipline",
        "Track emotional patterns affecting performance",
        "Compare performance across different markets"
    ];

    const howItWorks = [
        {
            step: "01",
            title: "Connect Your Account",
            description: "Securely link your trading account to automatically import all your trades and positions."
        },
        {
            step: "02",
            title: "AI Analyzes Your Data",
            description: "Our advanced AI engine processes your trading history to identify patterns and insights."
        },
        {
            step: "03",
            title: "Receive Personalized Insights",
            description: "Get actionable recommendations tailored to your unique trading style and goals."
        },
        {
            step: "04",
            title: "Improve & Grow",
            description: "Implement the insights and watch your trading performance improve over time."
        }
    ];

    return (
        <>
            <BackgroundScroll />
            <Navbar />
            <main className="min-h-screen bg-transparent">
                {/* Hero Section - Animated Particles Background */}
                <section className="relative overflow-hidden bg-transparent pt-8 md:pt-12 pb-20">
                    {/* Hero Glows */}
                    <div className="hero-glow-1 animate-pulse-slow opacity-20" />
                    <div className="hero-glow-2 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />

                    <AetherFlow />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                <Sparkles className="h-4 w-4" />
                                <span>AI-Powered Trading Intelligence</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                                Your Personal
                                <span className="block bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent mt-2">AI Trading Mentor</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Transform your trading with AI-powered insights. Our intelligent journal analyzes every trade,
                                identifies patterns, and provides personalized recommendations to elevate your performance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button size="lg" className="rounded-xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer">
                                        Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-lg font-bold border-2" asChild>
                                    <Link href="/demo">
                                        Watch Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Intelligent Features</span> for Smarter Trading
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Leverage cutting-edge AI to gain a competitive edge in the markets
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

                {/* How It Works */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">How</span> It Works
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Get started in minutes and see results immediately
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {howItWorks.map((item, index) => (
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

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 tracking-tight">
                                    Unlock Your <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Trading Potential</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Our AI Trading Journal helps you become a better trader by providing insights
                                    that would take years to discover on your own.
                                </p>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-foreground">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                                <PinContainer title="Unlock AI Insights" href="https://portal.restrofx.com/register">
                                    <div className="flex flex-col p-6 sm:p-8 tracking-tight w-[20rem] sm:w-[26rem] h-[20rem] sm:h-[26rem] bg-gradient-to-br from-white/90 via-white/80 to-primary/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl shadow-2xl shadow-primary/30 relative overflow-hidden">
                                        {/* Glassmorphic overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

                                        {/* Content wrapper */}
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                                                    <div className="text-xs font-semibold text-primary uppercase tracking-wider">Live AI</div>
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
                                                    <span className="text-xs font-bold text-primary">Pro</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-1">
                                                    Smart Trading
                                                </h3>
                                                <p className="text-sm text-foreground/70 font-medium">AI-Powered Insights</p>
                                            </div>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-white/60 to-primary/10 rounded-xl p-4 border border-white/50 backdrop-blur-md shadow-lg">
                                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">+127%</div>
                                                    <div className="text-xs text-foreground/60 font-medium">Avg. Profit</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-white/60 to-primary/10 rounded-xl p-4 border border-white/50 backdrop-blur-md shadow-lg">
                                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">2.4K</div>
                                                    <div className="text-xs text-foreground/60 font-medium">Trades Analyzed</div>
                                                </div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-foreground/70 font-medium">AI Confidence</span>
                                                    <span className="text-xs text-primary font-bold">98%</span>
                                                </div>
                                                <div className="relative h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary to-primary/80 rounded-full w-[98%] shadow-lg shadow-primary/40">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/30 animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className="mt-auto pt-4 flex justify-between items-center border-t border-primary/20">
                                                <div className="flex items-center gap-2">
                                                    <Activity className="h-4 w-4 text-primary animate-pulse" />
                                                    <span className="text-xs text-foreground/70 font-medium">Active Now</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                                                    <span>Explore</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        </div>
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
                                    Ready to Trade <br />
                                    <span className="text-white/80 italic font-light">Smarter?</span>
                                </h2>
                                <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                                    Join thousands of traders using AI to improve their performance and unlock their full potential.
                                </p>
                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-white text-primary hover:bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,0,0,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95"
                                        asChild
                                    >
                                        <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer">
                                            <span className="relative z-10 flex items-center justify-center">
                                                Get Started Free <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                            </span>
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

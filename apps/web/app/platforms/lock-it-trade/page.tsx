"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import {
    Brain,
    Target,
    AlertTriangle,
    BarChart2,
    CheckCircle2,
    Users,
    ArrowRight,
    Sparkles,
    TrendingUp
} from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Counter } from "@/components/ui/counter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function LockItTradePage() {
    const features = useMemo(() => [
        {
            icon: Brain,
            title: "AI Readiness Score",
            description: "Get a concrete 87% readiness score based on your risk management, discipline, and consistency patterns. Know exactly when you're ready to get funded.",
            gradient: "from-blue-500/10 to-primary/10"
        },
        {
            icon: TrendingUp,
            title: "Performance Analysis",
            description: "Deep-dive into your analytics with a 72% average win rate tracking. Visualize your daily performance and identify profitable patterns instantly.",
            gradient: "from-green-500/10 to-primary/10"
        },
        {
            icon: AlertTriangle,
            title: "Violations Summary",
            description: "Automatically track trading rule violations like max daily loss and position sizing. Fix bad habits before they cost you your funded account.",
            gradient: "from-yellow-500/10 to-primary/10"
        },
        {
            icon: BarChart2,
            title: "Risk:Reward Breakdown",
            description: "Detailed evaluation of every trade setup. Compare performance across pairs like EUR/USD and GBP/JPY to optimize your strategy.",
            gradient: "from-purple-500/10 to-primary/10"
        },
        {
            icon: CheckCircle2,
            title: "Strategy Compliance",
            description: "Monitor strict adherence to your trading plan. Maintain an 85%+ compliance rate to ensure long-term profitability and discipline.",
            gradient: "from-red-500/10 to-primary/10"
        },
        {
            icon: Users,
            title: "Community Engagement",
            description: "Join a network of serious traders. Share insights, compare challenges, and grow together towards achieving your funding goals.",
            gradient: "from-cyan-500/10 to-primary/10"
        }
    ], []);

    const stats = useMemo(() => [
        { label: "AI Readiness", value: 87, suffix: "%", icon: Brain },
        { label: "Win Rate", value: 72, suffix: "%", icon: Target },
        { label: "Compliance", value: 85, suffix: "%", icon: CheckCircle2 },
        { label: "Community", value: 10, suffix: "K+", icon: Users }
    ], []);

    return (
        <>
            <BackgroundScroll />
            <div className="min-h-screen bg-transparent text-neutral-900 font-sans antialiased overflow-x-hidden relative">
                <Navbar />

                {/* Hero Section */}
                <section className="relative w-full z-20 pt-8">
                    {/* Hero Glows */}
                    <div className="hero-glow-1 animate-pulse-slow opacity-20" />
                    <div className="hero-glow-2 animate-pulse-slow opacity-20" style={{ animationDelay: "2s" }} />
                    <ContainerScroll
                        titleComponent={
                            <>
                                <div className="flex flex-col items-center justify-center space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                        <span className="tracking-wide">AI-Powered Trading Journal</span>
                                    </motion.div>

                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-neutral-900 leading-[1.05] tracking-tight text-center">
                                        Structure Your <br />
                                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                                            Success
                                        </span>
                                    </h1>

                                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto font-light text-center">
                                        A sophisticated trading journal designed for prop firm traders to improve performance with{" "}
                                        <span className="font-semibold text-primary">AI-powered insights</span> and{" "}
                                        <span className="font-semibold text-primary">automated analytics</span>.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                        <Button
                                            size="lg"
                                            className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                                            asChild
                                        >
                                            <Link href="/register" className="relative z-10 flex items-center">
                                                Start Free Journaling <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </>
                        }
                    >
                        <Image
                            src={withBasePath("/images/LockITTrade.png")}
                            alt="Lock It Trade Dashboard"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top"
                            draggable={false}
                        />
                    </ContainerScroll>
                </section>

                {/* Stats Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 relative pt-24 z-10">
                    <div className="container mx-auto max-w-7xl relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <AnimatedCard key={index} index={index} className="text-center">
                                    <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                                        <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <stat.icon className="h-6 w-6 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2 font-heading">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-600 font-medium">{stat.label}</div>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </section>

                <main className="relative bg-transparent">
                    {/* Features Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        <div className="container mx-auto max-w-7xl relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-20"
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-900 mb-6 tracking-tight">
                                    Intelligent <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Journaling</span>
                                </h2>
                                <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                                    Stop using spreadsheets. Start using a data-driven platform built for serious profitability.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <AnimatedCard key={index} index={index}>
                                        <div className="relative group h-[280px] rounded-2xl overflow-hidden border border-neutral-200 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl cursor-pointer">
                                            {/* Background Image */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <Image
                                                    src={withBasePath("/images/LockITTradeLogo.png")}
                                                    alt={feature.title}
                                                    width={700}
                                                    height={700}
                                                    className="object-contain opacity-50 group-hover:opacity-70 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90 group-hover:from-white/98 group-hover:via-white/90 group-hover:to-white/85 transition-all duration-500"></div>

                                            {/* Content */}
                                            <div className="relative h-full p-6 flex flex-col">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={cn("p-3 rounded-xl bg-gradient-to-br", feature.gradient, "text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300")}>
                                                        <feature.icon className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-5xl font-bold text-neutral-200 select-none group-hover:text-neutral-300 transition-colors">0{index + 1}</span>
                                                </div>

                                                <h3 className="text-xl font-bold mb-3 font-heading text-neutral-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                                                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-4 group-hover:text-neutral-700 transition-colors">{feature.description}</p>

                                                <div className="mt-auto pt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                    <span className="text-sm font-semibold">Explore Feature</span>
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedCard>
                                ))}
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
                                        Ready to Get <br />
                                        <span className="text-white/80 italic font-light">Funded?</span>
                                    </h2>
                                    <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                                        Join thousands of traders who have replaced spreadsheets with Lock It Trade&apos;s institutional-grade journaling.
                                    </p>
                                    <div className="pt-4">
                                        <Button
                                            size="lg"
                                            variant="secondary"
                                            className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-white text-primary hover:bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,0,0,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95"
                                            asChild
                                        >
                                            <Link href="/register">
                                                <span className="relative z-10 flex items-center justify-center">
                                                    Start Free Journaling <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
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
            </div>
        </>
    );
}

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import {
    Zap,
    TrendingUp,
    BarChart3,
    Activity,
    ArrowRight,
    Shield,
    Globe,
    Smartphone,
    Download,
    Sparkles,
    Play,
    Star,
    Award
} from "lucide-react";
// import { Boxes } from "@/components/ui/background-boxes";
import { AnimatedCard } from "@/components/ui/animated-card";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo, lazy, Suspense } from "react";

// Lazy load heavy components for better performance
const Timeline = lazy(() => import("@/components/ui/timeline").then(mod => ({ default: mod.Timeline })));
const CircularShowcase = lazy(() => import("@/components/ui/circular-showcase").then(mod => ({ default: mod.CircularShowcase })));

// Loading fallback component
const ComponentLoader = () => (
    <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
);

export default function TradeLockerPage() {
    // Memoize static data to prevent re-creation on re-renders
    const features = useMemo(() => [
        {
            icon: BarChart3,
            title: "Real-time Market Data",
            description: "Monitor live market movements with advanced stock tracking and real-time price updates across all instruments. Get instant notifications and never miss a trading opportunity.",
            id: "feature-1",
            gradient: "from-blue-500/10 to-primary/10"
        },
        {
            icon: TrendingUp,
            title: "Advanced Charting",
            description: "Professional-grade charting tools with 100+ technical indicators and drawing tools for comprehensive analysis. Customize your workspace for maximum efficiency.",
            id: "feature-2",
            gradient: "from-green-500/10 to-primary/10"
        },
        {
            icon: Zap,
            title: "One-Click Trading",
            description: "Execute trades instantly with one-click trading and manage positions with our intuitive order management. Lightning-fast execution with zero latency.",
            id: "feature-3",
            gradient: "from-yellow-500/10 to-primary/10"
        },
        {
            icon: Activity,
            title: "Multi-Asset Support",
            description: "Trade forex, indices, commodities, and cryptocurrencies all from a single unified platform. Diversify your portfolio effortlessly.",
            id: "feature-4",
            gradient: "from-purple-500/10 to-primary/10"
        },
        {
            icon: Shield,
            title: "Bank-Grade Security",
            description: "Your funds and data are protected with military-grade encryption, multi-factor authentication, and regulatory compliance standards.",
            id: "feature-5",
            gradient: "from-red-500/10 to-primary/10"
        },
        {
            icon: Globe,
            title: "Global Market Access",
            description: "Access 24/7 global markets with seamless connectivity. Trade from anywhere in the world with our cloud-based infrastructure.",
            id: "feature-6",
            gradient: "from-cyan-500/10 to-primary/10"
        }
    ], []);

    const devices = useMemo(() => [
        {
            quote: "Full-featured trading directly in your browser with no installation required. Access your account from any device instantly.",
            name: "Web Platform",
            designation: "Browser Based",
            src: withBasePath("/images/Web Platform.png")
        },
        {
            quote: "Trade on the go with our powerful iOS application optimized for iPhone and iPad. Never miss a market opportunity.",
            name: "iOS App",
            designation: "Mobile & Tablet",
            src: withBasePath("/images/iOS App.png")
        },
        {
            quote: "Manage your positions anywhere with our feature-rich Android application. Full trading capabilities in your pocket.",
            name: "Android App",
            designation: "Mobile & Tablet",
            src: withBasePath("/images/Android App.png")
        },
        {
            quote: "Maximum performance and multi-screen support for professional traders. Desktop-class power for serious trading.",
            name: "Desktop App",
            designation: "Windows & macOS",
            src: withBasePath("/images/Desktop App.png")
        }
    ], []);

    const steps = useMemo(() => [
        {
            title: "Registration",
            content: (
                <div>
                    <p className="text-neutral-600 text-sm md:text-base mb-8 leading-relaxed">
                        Create your account and complete quick verification in minutes. We&apos;ve streamlined the process to get you trading faster with minimal friction.
                    </p>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 group">
                        <Image
                            src={withBasePath("/images/Registration.png")}
                            alt="Registration"
                            width={500}
                            height={300}
                            loading="lazy"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Fund Account",
            content: (
                <div>
                    <p className="text-neutral-600 text-sm md:text-base mb-8 leading-relaxed">
                        Add funds securely using multiple payment methods including credit cards, bank transfers, and crypto. Fast processing with industry-leading security.
                    </p>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 group">
                        <Image
                            src={withBasePath("/images/Fund Account.png")}
                            alt="Funding"
                            width={500}
                            height={300}
                            loading="lazy"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Start Trading",
            content: (
                <div>
                    <p className="text-neutral-600 text-sm md:text-base mb-8 leading-relaxed">
                        Access global markets and execute your strategy with our powerful tools and lightning-fast execution. Start your trading journey today.
                    </p>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 group">
                        <Image
                            src={withBasePath("/images/Start Trading.png")}
                            alt="Trading"
                            width={500}
                            height={300}
                            loading="lazy"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            )
        }
    ], []);

    const stats = useMemo(() => [
        { label: "Active Traders", value: "500K+", icon: TrendingUp },
        { label: "Countries", value: "150+", icon: Globe },
        { label: "Assets", value: "1000+", icon: BarChart3 },
        { label: "Uptime", value: "99.9%", icon: Activity }
    ], []);

    return (
        <>
            <BackgroundScroll />
            <div className="min-h-screen bg-transparent text-neutral-900 font-sans antialiased overflow-x-hidden relative">
                <Navbar />

                {/* Redesigned Hero Section with Container Scroll */}
                {/* Redesigned Hero Section with Container Scroll */}
                <section className="relative w-full z-20">
                    <ContainerScroll
                        titleComponent={
                            <>
                                <div className="flex flex-col items-center justify-center space-y-8">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                        <span className="tracking-wide">Next-Gen Trading Platform</span>
                                    </motion.div>

                                    {/* Main Heading */}
                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-neutral-900 leading-[1.05] tracking-tight">
                                        Experience <br />
                                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                                            Fluid Trading
                                        </span>
                                    </h1>

                                    {/* Subheading */}
                                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-light">
                                        TradeLocker offers an immersive, intuitive environment designed for modern traders with{" "}
                                        <span className="font-semibold text-primary">zero latency</span> and{" "}
                                        <span className="font-semibold text-primary">maximum precision</span>.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                        <Button
                                            size="lg"
                                            className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                                            asChild
                                        >
                                            <Link href="/register" className="relative z-10 flex items-center">
                                                Start Trading <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="rounded-full px-10 h-16 text-lg font-semibold border-2 border-neutral-200 hover:border-primary hover:bg-neutral-50 transition-all duration-300 group"
                                            asChild
                                        >
                                            <Link href="/demo" className="flex items-center">
                                                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                                Watch Demo
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Trust Indicators */}
                                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 Pt-8">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-red-600 border-2 border-white" />
                                                ))}
                                            </div>
                                            <span className="font-medium">500K+ Traders</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="h-5 w-5 text-primary" />
                                            <span className="font-medium">Award Winning</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                            <span className="font-medium">4.9/5 Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    >
                        <Image
                            src={withBasePath("/TL.avif")}
                            alt="hero"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top"
                            draggable={false}
                        />
                    </ContainerScroll>
                </section>

                {/* Stats Section */}
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
                                        <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 font-heading">{stat.value}</div>
                                        <div className="text-sm md:text-base text-neutral-600 font-medium">{stat.label}</div>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </section>

                <main className="relative bg-transparent">
                    {/* Enhanced Features Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        {/* <div className="absolute inset-0 bg-neutral-50/80 backdrop-blur-sm"></div> Removed for seamless look */}
                        <Suspense fallback={null}>
                            {/* <BackgroundBeams className="opacity-30" /> Removed meteors/beams */}
                        </Suspense>
                        <div className="container mx-auto max-w-7xl relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-20"
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-900 mb-6 tracking-tight">
                                    Powerful <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Features</span>
                                </h2>
                                <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                                    Everything you need to analyze, execute, and manage trades with institutional-grade precision.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <AnimatedCard key={feature.id} index={index}>
                                        <div className="relative group h-[280px] rounded-2xl overflow-hidden border border-neutral-200 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl cursor-pointer">
                                            {/* Background Image */}
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={withBasePath("/images/Trade Locker Swapped Colors.png")}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover opacity-30 group-hover:opacity-35 transition-opacity duration-500"
                                                />
                                            </div>

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90 group-hover:from-white/98 group-hover:via-white/90 group-hover:to-white/85 transition-all duration-500"></div>

                                            {/* Content */}
                                            <div className="relative h-full p-6 flex flex-col">
                                                {/* Icon and Number */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={cn("p-3 rounded-xl bg-gradient-to-br", feature.gradient, "text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300")}>
                                                        <feature.icon className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-5xl font-bold text-neutral-200 select-none group-hover:text-neutral-300 transition-colors">0{index + 1}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold mb-3 font-heading text-neutral-900 group-hover:text-primary transition-colors">{feature.title}</h3>

                                                {/* Description */}
                                                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-4 group-hover:text-neutral-700 transition-colors">{feature.description}</p>

                                                {/* Hover Arrow Indicator */}
                                                <div className="mt-auto pt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                    <span className="text-sm font-semibold">Learn more</span>
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Multi-Device Section */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                        <div className="container mx-auto max-w-7xl relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-24"
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-900 mb-6 tracking-tight">
                                    Trade on <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Any Device</span>
                                </h2>
                                <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                                    Seamless synchronization across all your platforms. Your portfolio, your way.
                                </p>
                            </motion.div>

                            <Suspense fallback={<ComponentLoader />}>
                                <CircularShowcase
                                    items={devices}
                                    colors={{
                                        name: "#171717",
                                        designation: "#BB0000",
                                        testimony: "#525252",
                                        arrowBackground: "#F5F5F5",
                                        arrowForeground: "#171717",
                                        arrowHoverBackground: "#BB0000"
                                    }}
                                />
                            </Suspense>
                        </div>
                    </section>

                    {/* Enhanced Onboarding Timeline */}
                    <section className="relative overflow-hidden">
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-white/80 to-neutral-50/80 backdrop-blur-sm"></div> Removed */}
                        <div className="container mx-auto max-w-7xl relative z-10 py-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-8"
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-neutral-900 mb-6 tracking-tight">
                                    Get Started in <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">3 Steps</span>
                                </h2>
                                <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                                    Simple, fast, and secure. Start your trading journey in minutes.
                                </p>
                            </motion.div>
                            <Suspense fallback={<ComponentLoader />}>
                                <Timeline data={steps} />
                            </Suspense>
                        </div>
                    </section>

                    {/* Enhanced Demo CTA */}
                    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                        <div className="container mx-auto max-w-7xl relative z-10">
                            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary via-red-600 to-red-700 p-12 lg:p-24 shadow-2xl group">
                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                                {/* Glow Effects */}
                                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="space-y-8 text-white"
                                    >
                                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading leading-none tracking-tight">
                                            Test your strategy <br />
                                            <span className="text-white/80 italic font-light">risk-free.</span>
                                        </h2>
                                        <p className="text-2xl text-white/90 font-light max-w-lg leading-relaxed">
                                            Get a $100,000 demo account and experience the TradeLocker advantage today. No credit card required.
                                        </p>
                                        <Button
                                            size="lg"
                                            variant="secondary"
                                            className="rounded-full px-12 h-18 text-xl font-bold bg-white text-primary hover:bg-neutral-100 shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                                            asChild
                                        >
                                            <Link href="/demo">
                                                Start Free Demo <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="relative flex justify-center lg:justify-end"
                                    >
                                        <div className="relative w-80 h-[640px] bg-neutral-900/10 rounded-[4rem] border-8 border-white/20 shadow-2xl backdrop-blur-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                                            <TrendingUp className="h-28 w-28 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black/20 rounded-b-3xl"></div>
                                        </div>

                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-1/4 -left-12 p-5 bg-white rounded-2xl shadow-2xl"
                                        >
                                            <Activity className="h-10 w-10 text-primary" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="absolute bottom-1/4 -right-8 p-5 bg-white rounded-2xl shadow-2xl"
                                        >
                                            <Zap className="h-10 w-10 text-yellow-500" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Download Section */}
                    <section className="py-12 px-4 sm:px-6 lg:px-8">
                        <div className="container mx-auto max-w-7xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-neutral-900 mb-6 tracking-tight">
                                    Download <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">TradeLocker</span>
                                </h2>
                                <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
                                    Available on all major platforms. Choose your preferred device.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                {[
                                    { name: "Windows", icon: Download },
                                    { name: "Mac", icon: Download },
                                    { name: "Web", icon: Globe },
                                    { name: "Mobile", icon: Smartphone }
                                ].map((platform, index) => (
                                    <AnimatedCard key={platform.name} index={index}>
                                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 text-center group cursor-pointer">
                                            <div className="inline-flex p-4 rounded-xl bg-primary/5 text-primary mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                                <platform.icon className="h-6 w-6 group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">{platform.name}</div>
                                        </div>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

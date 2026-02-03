"use client";

import { motion } from "framer-motion";

export function MarketsHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="hero-glow-1 animate-pulse-slow opacity-30" />
                <div className="hero-glow-2 animate-pulse-slow opacity-30" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container relative mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-bold mb-8 backdrop-blur-md">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                        Global Access
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight leading-[1.1]">
                        Trade Global <br className="hidden md:block" />
                        <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                            Markets
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed drop-shadow-sm">
                        Access a wide range of trading instruments across multiple asset classes with competitive conditions and professional-grade execution.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

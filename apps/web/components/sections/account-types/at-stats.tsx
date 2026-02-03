"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Globe, TrendingUp, Users, Clock } from "lucide-react";

const stats = [
    {
        label: "Traders Worldwide",
        value: "306",
        suffix: "k",
        icon: Globe,
        description: "Trusted across the globe"
    },
    {
        label: "Partner Network",
        value: "2400",
        suffix: "+",
        icon: Users,
        description: "Active partners"
    },
    {
        label: "Withdrawals Processed",
        value: "$6.1",
        suffix: "M",
        icon: TrendingUp,
        description: "In processed funds"
    },
    {
        label: "Execution Speed",
        value: "<30",
        suffix: "ms",
        icon: Clock,
        description: "Ultra-fast execution"
    },
];

export function AccountTypesStats() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
                        Trusted <span className="text-red-600">globally.</span><br />
                        Traded daily.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join thousands of traders who choose us for our reliability, transparency, and superior trading conditions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-card/80 backdrop-blur-sm border border-border/60 hover:border-red-600/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-600/10 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-inner">
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div className="text-4xl font-bold font-numbers mb-2 flex items-baseline justify-center tracking-tight text-foreground">
                                <AnimatedCounter value={stat.value} />
                                <span className="text-red-600 ml-0.5">{stat.suffix}</span>
                            </div>
                            <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                            <div className="text-sm text-muted-foreground">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

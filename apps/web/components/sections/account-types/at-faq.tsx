"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@crimsonfx/ui";
import { motion } from "framer-motion";
import {
    ArrowDownToLine,
    MonitorSmartphone,
    Gamepad2,
    Zap,
    MessageCircle,
    ArrowRight
} from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";

const faqs = [
    {
        question: "How fast are withdrawals?",
        answer: "Withdrawals are typically processed within 24 hours. Most payment methods complete within 1-3 business days.",
        icon: ArrowDownToLine
    },
    {
        question: "Which platforms are available?",
        answer: "We offer Lock It Trade and TradeLocker trading platforms on desktop, web, and mobile devices.",
        icon: MonitorSmartphone
    },
    {
        question: "Do you offer demo accounts?",
        answer: "Yes, free demo accounts are available for you to practice trading strategies risk-free with virtual funds.",
        icon: Gamepad2
    },
    {
        question: "What leverage is available?",
        answer: "We offer leverage up to 1:1000, depending on your account type and traded instrument.",
        icon: Zap
    },
];

export function AccountTypesFAQ() {
    return (
        <section className="py-24 bg-muted/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Side: Big Text */}
                    <motion.div
                        className="lg:col-span-5 lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10rem] leading-none font-bold text-red-600/[0.03] select-none pointer-events-none absolute -top-24 -left-12 hidden lg:block transform -rotate-1 font-heading">
                            FAQ
                        </h2>
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-bold mb-6 backdrop-blur-md"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Support Center
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                                    Common</span> Questions
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                Everything you need to know about opening an account and trading with RestroFX. Our team is here to help you every step of the way.
                            </p>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-muted border border-border/50 shadow-xl shadow-black/5">
                                    <h4 className="font-bold mb-2">Still need help?</h4>
                                    <p className="text-sm text-muted-foreground mb-4">Can&apos;t find the answer you&apos;re looking for? Contact our 24/7 support team.</p>
                                    <Button variant="outline" className="w-full rounded-xl border-red-600/20 hover:border-red-600 transition-colors" asChild>
                                        <Link href="/contact" className="flex items-center justify-center gap-2">
                                            Contact Support <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Accordion with GlowCards */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
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
                                        <GlowCard className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm group overflow-hidden">
                                            <AccordionItem
                                                value={`item-${index}`}
                                                className="border-none px-0"
                                            >
                                                <AccordionTrigger className="text-left font-bold font-heading hover:no-underline py-6 px-6 text-xl group transition-all">
                                                    <div className="flex items-center gap-4">
                                                        <div className="p-2.5 rounded-xl bg-red-600/5 border border-red-600/10 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                                            <Icon className="h-5 w-5" />
                                                        </div>
                                                        <span className="group-hover:text-red-600 transition-colors duration-300">
                                                            {faq.question}
                                                        </span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground px-6 pb-6 leading-relaxed text-lg border-t border-border/20 pt-4">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </GlowCard>
                                    </motion.div>
                                );
                            })}
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

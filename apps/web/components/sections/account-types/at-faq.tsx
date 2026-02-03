"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@crimsonfx/ui";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Is RestroFX regulated?",
        answer: "Yes, we are a regulated broker operating in accordance with applicable financial regulations, ensuring the security of your funds.",
    },
    {
        question: "How fast are withdrawals?",
        answer: "Withdrawals are typically processed within 24 hours. Most payment methods complete within 1-3 business days.",
    },
    {
        question: "Which platforms are available?",
        answer: "We offer MetaTrader 5 and TradeLocker trading platforms on desktop, web, and mobile devices.",
    },
    {
        question: "Do you offer demo accounts?",
        answer: "Yes, free demo accounts are available for you to practice trading strategies risk-free with virtual funds.",
    },
    {
        question: "What leverage is available?",
        answer: "We offer leverage up to 1:500, depending on your account type and traded instrument.",
    },
];

export function AccountTypesFAQ() {
    return (
        <section className="py-24 bg-muted/20 relative">
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Side: Big Text */}
                    <motion.div
                        className="lg:col-span-4 lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[8rem] leading-none font-bold text-foreground/5 select-none pointer-events-none absolute -top-20 -left-6 hidden lg:block transform -rotate-2">
                            FAQ
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 relative z-10">
                            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                Common Questions
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground relative z-10">
                            Everything you need to know about opening an account and trading with RestroFX.
                        </p>
                    </motion.div>

                    {/* Right Side: Accordion */}
                    <motion.div
                        className="lg:col-span-8 space-y-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-card border border-border/60 hover:border-red-600/30 rounded-xl px-6 transition-colors duration-300 shadow-sm"
                                >
                                    <AccordionTrigger className="text-left font-semibold font-heading hover:no-underline py-5 text-lg group">
                                        <span className="group-hover:text-red-600 transition-colors duration-300">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

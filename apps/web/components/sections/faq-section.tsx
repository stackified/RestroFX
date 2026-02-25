"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@crimsonfx/ui";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowDownToLine,
  MonitorSmartphone,
  Gamepad2,
  Zap
} from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";

const faqs = [
  {
    question: "Is RestroFX regulated?",
    answer:
      "Yes, RestroFX is a regulated broker operating in accordance with applicable financial regulations. We maintain strict compliance with regulatory requirements to ensure the security and protection of our clients' funds.",
    icon: ShieldCheck
  },
  {
    question: "How fast are withdrawals?",
    answer:
      "Withdrawals are typically processed within 24 hours. The time it takes for funds to reach your account depends on your payment method, with most methods completing within 1-3 business days.",
    icon: ArrowDownToLine
  },
  {
    question: "Which platforms are available?",
    answer:
      "We offer Lock It Trade and TradeLocker trading platforms. Both platforms are available on desktop, web, and mobile devices, giving you flexibility in how you trade.",
    icon: MonitorSmartphone
  },
  {
    question: "Do you offer demo accounts?",
    answer:
      "Yes, we offer free demo accounts that allow you to practice trading with virtual funds. Demo accounts are a great way to familiarize yourself with our platforms and test your trading strategies risk-free.",
    icon: Gamepad2
  },
  {
    question: "What leverage is available?",
    answer:
      "We offer leverage up to 1:500, depending on your account type and the instruments you trade. Leverage allows you to control larger positions with a smaller initial investment, but it's important to understand the risks involved.",
    icon: Zap
  },
];

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight text-balance">
            <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Frequently</span> Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our trading platform and start your journey with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
        </motion.div>
      </div>
    </section>
  );
}

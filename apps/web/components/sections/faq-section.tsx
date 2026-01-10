"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@crimsonfx/ui";
import { motion } from "framer-motion";
import type { FAQ } from "@crimsonfx/types";

const faqs: FAQ[] = [
  {
    question: "Is CrimsonFX regulated?",
    answer:
      "Yes, CrimsonFX is a regulated broker operating in accordance with applicable financial regulations. We maintain strict compliance with regulatory requirements to ensure the security and protection of our clients' funds.",
  },
  {
    question: "How fast are withdrawals?",
    answer:
      "Withdrawals are typically processed within 24 hours. The time it takes for funds to reach your account depends on your payment method, with most methods completing within 1-3 business days.",
  },
  {
    question: "Which platforms are available?",
    answer:
      "We offer MetaTrader 5 and TradeLocker trading platforms. Both platforms are available on desktop, web, and mobile devices, giving you flexibility in how you trade.",
  },
  {
    question: "Do you offer demo accounts?",
    answer:
      "Yes, we offer free demo accounts that allow you to practice trading with virtual funds. Demo accounts are a great way to familiarize yourself with our platforms and test your trading strategies risk-free.",
  },
  {
    question: "What leverage is available?",
    answer:
      "We offer leverage up to 1:500, depending on your account type and the instruments you trade. Leverage allows you to control larger positions with a smaller initial investment, but it's important to understand the risks involved.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our trading platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-4 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold font-heading hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

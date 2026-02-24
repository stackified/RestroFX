"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function RiskDisclosurePage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="relative">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Risk Disclosure
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Last updated: February 23, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-primary/20 shadow-sm">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold font-heading mb-2 text-foreground">
                      Important Warning
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Trading in financial instruments carries a high level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before trading.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  1. General Risk Warning
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trading forex and leveraged products involves substantial risk and may not be suitable for all investors.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  2. Leverage Risk
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage increases both potential profits and losses. You may lose all invested capital.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  3. Market Volatility
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Markets can move rapidly due to economic, political, or global events.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  4. No Advice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX does not provide investment, legal, or tax advice.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  5. Client Responsibility
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You acknowledge full responsibility for all trading decisions and outcomes.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these risk disclosures, please contact us at{" "}
                  <a href="mailto:support@restrofx.com" className="text-primary hover:underline">
                    support@restrofx.com
                  </a>
                  <br />
                  Website: <a href="https://www.restrofx.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.restrofx.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

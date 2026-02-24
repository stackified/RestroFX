"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AMLPage() {
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
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  AML Policy
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Anti-Money Laundering & Counter-Terrorist Financing
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Last updated: February 23, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  1. Purpose
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX is committed to preventing money laundering, terrorist financing, and financial crime.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  2. Client Due Diligence (KYC)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We require:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Proof of identity</li>
                  <li>Proof of address</li>
                  <li>Ongoing verification when necessary</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  3. Transaction Monitoring
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All transactions are monitored for suspicious activity. Suspicious behavior may be reported to authorities.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  4. Account Restrictions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Accounts may be frozen or closed if AML violations are suspected.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  5. Record Keeping
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Client data and transaction records are retained as required by law.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our AML policy, please contact our compliance team at{" "}
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

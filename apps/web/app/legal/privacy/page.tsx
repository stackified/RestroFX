"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
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
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Privacy Policy
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
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  1. Information We Collect
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal information (name, email, phone)</li>
                  <li>Verification documents</li>
                  <li>Technical data (IP address, device data)</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  2. Use of Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide and manage services</li>
                  <li>Verify identity</li>
                  <li>Improve platform performance</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  3. Data Protection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX uses industry-standard security measures to protect client data.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  4. Data Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell personal data. Information may be shared with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment providers</li>
                  <li>Compliance partners</li>
                  <li>Authorities when required by law</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  5. User Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Clients may request access, correction, or deletion of personal data subject to legal requirements.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Legal Documentation
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Last updated: February 23, 2026
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Introduction */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the RestroFX website, trading platform, and services. By opening an account or using our services, you agree to be legally bound by these Terms.
                </p>
              </div>

              {/* Eligibility */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  2. Eligibility
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use RestroFX services, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Be at least 18 years old</li>
                  <li>Have legal capacity to enter into contracts</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Services */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  3. Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX provides online trading services in Forex, CFDs, commodities, indices, and other financial instruments as offered on the platform.
                </p>
              </div>

              {/* Account Registration */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  4. Account Registration
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Clients must provide accurate and up-to-date information</li>
                  <li>Identity verification (KYC) is mandatory</li>
                  <li>One client may hold only one account unless approved by RestroFX</li>
                </ul>
              </div>

              {/* Client Obligations */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  5. Client Obligations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Keep login credentials confidential</li>
                  <li>Be responsible for all trading activity in your account</li>
                  <li>Trade at your own risk</li>
                </ul>
              </div>

              {/* Prohibited Activities */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  6. Prohibited Activities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are strictly prohibited:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fraud, abuse, or manipulation of markets</li>
                  <li>Exploiting technical errors or latency</li>
                  <li>Illegal or deceptive activities</li>
                </ul>
              </div>

              {/* Account Suspension */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  7. Account Suspension
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX reserves the right to suspend or terminate accounts for violations of these Terms or applicable laws.
                </p>
              </div>

              {/* Amendments */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  8. Amendments
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  RestroFX may update these Terms at any time. Continued use constitutes acceptance of updated Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at{" "}
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

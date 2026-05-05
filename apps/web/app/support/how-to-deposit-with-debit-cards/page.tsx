"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  ArrowRight,
  Play,
  HelpCircle,
  X
} from "lucide-react";
import { Button, Card, CardContent } from "@crimsonfx/ui";
import { OnboardingStepsSection } from "@/components/sections/onboarding-steps-section";
import { DemoCTASection } from "@/components/sections/demo-cta-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    title: "Log In to Your RestroFX Account",
    content: "Head to your client portal and sign in with your registered email and password.",
    link: { text: "https://portal.restrofx.com/login", href: "https://portal.restrofx.com/login" }
  },
  {
    title: "Complete KYC Verification",
    content: "Card deposits on RestroFX require a fully verified account. Before your first card deposit, you must complete our KYC (Know Your Customer) process — this includes uploading proof of identity and proof of address. KYC is a regulatory requirement, and the card deposit option will be available once your verification is approved.",
    important: true
  },
  {
    title: "Click 'Deposit Funds'",
    content: "From the top of your trader dashboard, click the Deposit Funds button to start the deposit flow."
  },
  {
    title: "Select 'Card Payment'",
    content: "From the available deposit methods in the dropdown, select Card Payment and click Continue."
  },
  {
    title: "Enter Your Deposit Amount",
    content: "Type in the amount you'd like to deposit (up to $2,000 USD), then review the details on the confirmation screen and click Continue. You'll be redirected to the secure payment screen.",
    note: "Currently capped at $2,000 USD per deposit."
  },
  {
    title: "Confirm Your Region",
    content: "Select your country or state from the dropdown and click Continue to Payment."
  },
  {
    title: "Verify Your Phone Number",
    content: "Confirm the phone number on your profile is correct. You'll receive a 4-digit verification code by SMS — enter it to continue."
  },
  {
    title: "Verify Your Cardholder Information",
    content: "Your name, email, and date of birth will be pre-filled. Double-check that everything matches the details on your physical card exactly — especially the cardholder name. Mismatched details are the most common reason for declines."
  },
  {
    title: "Choose Your Payment Method",
    content: "Click Pay with Card. Depending on your device and region, you may also see options like Google Pay or Apple Pay. Select your preferred option and click Continue."
  },
  {
    title: "Enter Your Card Details and Submit",
    content: "Click New Card, enter your card number, expiry, billing address, and click Add Card. Then enter the CVV and click Confirm & Pay. Wait while the transaction processes."
  }
];

const faqs = [
  {
    q: "Why do I have to complete KYC before depositing by card?",
    a: "Card payments are subject to strict anti-fraud regulations. We must confirm the cardholder's identity matches the account holder. This protects you from card fraud and complies with regulatory requirements."
  },
  {
    q: "Why is the deposit limit $2,000?",
    a: "Card payments are a new method on RestroFX. We've started with a conservative limit while we monitor performance and fraud signals. We expect to increase this limit as the system stabilizes."
  },
  {
    q: "Can I deposit more by making multiple card transactions?",
    a: "Yes. The $2,000 cap applies per individual transaction. If you need to fund a larger amount, you can submit additional card deposits or use our other deposit methods."
  },
  {
    q: "What cards are accepted?",
    a: "Visa and Mastercard (both debit and credit) are accepted. We don't currently support American Express, Discover, or JCB through this method."
  }
];

export default function CardDepositSupportPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-foreground"
            >
              How to Deposit with <br />
              <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                Debit & Credit Cards
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-muted-foreground text-sm">May 05, 2026</p>
              <div className="flex gap-2">
                {["Deposits", "Trader Dashboard", "Card Payments"].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full aspect-[5/4] rounded-[40px] overflow-hidden mb-20 shadow-2xl shadow-black/40 border border-white/5 bg-muted/5"
          >
            <Image 
              src="/images/Debit-Cards.png" 
              alt="How to Deposit" 
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Intro Text */}
          <div className="space-y-8 mb-20">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-foreground">
              Funding Your RestroFX Account With Credit & Debit Cards Is Easy!
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Card deposits are now live on RestroFX. You can fund your trading account directly with a Visa or Mastercard — credit or debit — and your funds land in your trading wallet as soon as the transaction clears. The whole process takes about two minutes from start to finish.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <p className="text-sm">
                If you&apos;re a visual learner, click the link to watch a short video on how to make your first deposit: <br />
                <Link href="#" className="text-red-600 font-bold hover:underline">Watch Video</Link>
              </p>
            </div>
          </div>

          {/* Verification Callout */}
          <Card className="bg-red-600/5 border-red-600/20 rounded-3xl mb-20">
            <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <ShieldCheck className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Important: Verification Required</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Card deposits require a fully verified account. You must complete KYC verification before your first card deposit will be processed. If you haven&apos;t been verified yet, see Step 2 below.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Steps Section */}
          <div className="space-y-20 mb-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                  Step {i + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                  {step.content}
                </p>
                {step.link && (
                  <Link href={step.link.href} className="text-red-600 font-bold hover:underline break-all block">
                    {step.link.text}
                  </Link>
                )}
                {step.note && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-muted/20 border border-border/30 text-xs text-muted-foreground italic">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    {step.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Facts Section */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold font-heading mb-8">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Cards accepted", value: "Visa, Mastercard" },
                { label: "Deposit limit", value: "$2,000 USD per deposit" },
                { label: "Processing time", value: "Instant on approval" },
                { label: "Currency", value: "USD" },
                { label: "KYC required", value: "Yes" },
                { label: "Fees", value: "No fees from RestroFX" },
              ].map((fact, i) => (
                <div key={i} className="flex justify-between p-4 rounded-xl bg-muted/10 border border-border/40">
                  <span className="text-muted-foreground text-sm">{fact.label}</span>
                  <span className="text-foreground font-bold text-sm">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Section */}
          <div className="text-center space-y-8 mb-24">
            <h3 className="text-3xl font-bold font-heading text-foreground">And Thats It!</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              If the payment was approved, you will see a green success message. If the payment was rejected, please check your phone for a notification from your bank. Once successful, funds land in your trading wallet immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-12 bg-red-600 hover:bg-red-700 text-white font-bold h-14" asChild>
                <Link href="https://portal.restrofx.com/login">Check My Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-14 font-bold" asChild>
                <Link href="/help">Back to Support Home</Link>
              </Button>
            </div>
          </div>

          {/* Regional Note */}
          <div className="p-8 rounded-3xl bg-muted/10 border border-border/50 text-center text-xs text-muted-foreground leading-relaxed">
            <p>*** Please note, deposits and withdrawals are not available in all regions and some regions will only have deposits available. Rest assured, our team is working hard with our payment processor to bring availability to all regions.</p>
          </div>

          {/* FAQs at bottom */}
          <div className="mt-24 border-t border-border pt-24">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <Card key={i} className="bg-card border-border/40 hover:border-red-600/30 transition-all rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-xl mb-4 text-foreground">{faq.q}</h4>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>

        {/* Global Sections for Context */}
        <div className="mt-32 border-t border-border/40 pt-20">
          <ScrollReveal>
            <OnboardingStepsSection />
          </ScrollReveal>
        </div>
        
        <div className="mt-12">
          <ScrollReveal>
            <DemoCTASection />
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
}

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "General Inquiries",
      content: "support@restrofx.com",
      href: "mailto:support@restrofx.com",
      gradient: "from-blue-500/10 to-primary/10"
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "24/7 Support",
      content: "+1 (234) 567-890",
      href: "tel:+1234567890",
      gradient: "from-green-500/10 to-primary/10"
    },
    {
      icon: Clock,
      title: "Support Hours",
      subtitle: "Always Available",
      content: "24/7 Global Support",
      gradient: "from-purple-500/10 to-primary/10"
    }
  ];

  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-primary animate-spin">✱</span>
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative group h-full p-6 rounded-2xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer">
                    {/* Icon */}
                    <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4 group-hover:scale-110 transition-all duration-300", card.gradient)}>
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {card.subtitle}
                    </p>

                    {/* Content */}
                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                      >
                        {card.content}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{card.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form and Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 rounded-2xl bg-white border border-border shadow-lg"
              >
                <h2 className="text-2xl font-bold font-heading mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-semibold group">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>

              {/* Office & Regulatory Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 rounded-2xl bg-white border border-border shadow-lg space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">Office & Regulatory Information</h2>

                  {/* Registered Office */}
                  <div className="mb-8">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Registered Office</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          RestroFX Limited<br />
                          123 Trading Street<br />
                          Financial District<br />
                          City, Country 12345
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Regulation */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-3">Regulation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      RestroFX is regulated and operates in accordance with applicable financial regulations. We maintain strict compliance with regulatory requirements to ensure the security and protection of our clients&apos; funds.
                    </p>
                  </div>

                  {/* Compliance */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Compliance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      All trading activities are subject to our Terms & Conditions and Risk Disclosure. Please ensure you understand the risks involved before trading.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to start trading with RestroFX?
                  </p>
                  <Button variant="outline" className="w-full group" asChild>
                    <a href="/register">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

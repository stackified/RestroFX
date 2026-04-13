"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, MapPin, Send, ArrowRight, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Info & Socials */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 space-y-12"
              >
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-primary animate-pulse">✱</span>
                    <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">
                      Reach Out
                    </span>
                  </div>

                  <h1 className="text-5xl sm:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
                    Let&apos;s start a <br />
                    <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                      conversation.
                    </span>
                  </h1>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Have questions about our platforms or services? Our team is dedicated to providing you with the support you need to succeed in the markets.
                  </p>
                </div>

                {/* Contact Cards Stack */}
                <div className="space-y-4">
                  {contactCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className={cn("p-3 rounded-xl bg-gradient-to-br group-hover:scale-110 transition-transform duration-300", card.gradient)}>
                          <card.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{card.subtitle}</p>
                          <h3 className="text-lg font-bold text-foreground">{card.content}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media Section */}
                <div className="pt-8 border-t border-border/50">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Connect with us</h4>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Instagram, href: "#" },
                      { icon: Youtube, href: "#" },
                      { icon: Twitter, href: "#" },
                      { icon: Facebook, href: "#" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="relative group p-8 sm:p-10 rounded-[2.5rem] bg-white border border-border shadow-2xl overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold font-heading mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground mb-10">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border border-border rounded-2xl bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-foreground/80 ml-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border border-border rounded-2xl bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Email address"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-border rounded-2xl bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-5 py-4 border border-border rounded-2xl bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <Button type="submit" className="w-full h-14 text-lg font-bold group rounded-2xl shadow-xl shadow-primary/20">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </div>
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

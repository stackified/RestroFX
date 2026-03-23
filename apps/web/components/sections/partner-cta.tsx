"use client";

import { motion } from "framer-motion";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PartnerCTAProps {
  partnerName: string;
  message?: string;
  ctaUrl?: string;
}

export function PartnerCTA({ partnerName, message, ctaUrl }: PartnerCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-transparent z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary via-red-600 to-red-700 p-8 sm:p-12 lg:p-24 shadow-2xl group text-center mx-auto max-w-[90%] sm:max-w-full">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 space-y-8"
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-white leading-tight">
                A message from <br />
                <span className="text-white/80 italic font-light">{partnerName.split(' ')[0]}.</span>
              </h2>
              <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed italic">
                &quot;{message}&quot;
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                      size="lg"
                      variant="secondary"
                      className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-white text-primary hover:bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(220,0,0,0.4)] transition-all duration-500 group relative overflow-hidden active:scale-95"
                      asChild
                  >
                      <Link 
                        href={ctaUrl || "/register"}
                        target={ctaUrl ? "_blank" : undefined}
                        rel={ctaUrl ? "noopener noreferrer" : undefined}
                      >
                          <span className="relative z-10 flex items-center justify-center">
                              JOIN RESTROFX <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </span>
                      </Link>
                  </Button>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

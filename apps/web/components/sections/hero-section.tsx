"use client";

import Link from "next/link";
import { Button } from "@crimsonfx/ui";
import { Shield, Zap, Globe } from "lucide-react";

const trustBadges = [
  { icon: Zap, text: "Fast Withdrawals" },
  { icon: Shield, text: "Secure Funds" },
  { icon: Globe, text: "Global Markets Access" },
];

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-heading text-foreground mb-6 leading-tight">
          Trade Global Markets.
          <br />
          Trade with Confidence.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          A modern trading platform designed for speed, transparency, and
          professional-grade execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" asChild>
            <Link href="/register">Start Trading</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/demo">Try Demo Account</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <badge.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


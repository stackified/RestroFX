"use client";

import { FeatureSteps } from "@/components/ui/feature-section";

const steps = [
  {
    step: "Step 1",
    title: "Register Account",
    content: "Create your account in minutes with our simple registration process.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Verify Identity",
    content: "Complete identity verification to ensure security and compliance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Start Trading",
    content: "Deposit funds and start trading on your preferred platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export function OnboardingStepsSection() {
  return (
    <FeatureSteps 
      features={steps}
      title="Get Started in 3 Simple Steps"
      autoPlayInterval={4000}
      imageHeight="h-[400px]"
    />
  );
}

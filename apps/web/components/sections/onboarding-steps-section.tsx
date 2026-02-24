"use client";

import { FeatureSteps } from "@/components/ui/feature-section";

const steps = [
  {
    step: "01",
    title: "Discovery",
    content: "Begin your journey with Restro FX by exploring the world of trading. From understanding forex markets to diving into CFDs, we help you discover new opportunities, equipping you with the knowledge needed to navigate the financial landscape.",
    image: "/images/Discovery.jpg",
  },
  {
    step: "02",
    title: "Strategy Design",
    content: "From analyzing market trends to customizing trading strategies, we work with precision to tailor an approach that aligns with your goals. Whether you're a novice or an experienced trader, our tools and insights are designed to bring your financial vision to life.",
    image: "/images/Strategy Design.jpg",
  },
  {
    step: "03",
    title: "Transformation",
    content: "Our team ensures your trading experience is executed with precision and agility. With cutting-edge technology, risk management, and dedicated support, we help you transform your investments into rewarding outcomes.",
    image: "/images/Transformation.jpg",
  },
];

export function OnboardingStepsSection() {
  // We are using a simplified view for now as we removed the images.
  // Ideally we would update FeatureSteps to accept icons or just render a simple list.
  // For now, let's keep it simple and just show the text content using a different layout or same layout with placeholder.
  return (
    <FeatureSteps
      features={steps}
      title={<>Our <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Journey</span></>}
      autoPlayInterval={4000}
      imageHeight="aspect-square h-auto w-full max-w-md mx-auto bg-transparent shadow-none"
    />
  );
}

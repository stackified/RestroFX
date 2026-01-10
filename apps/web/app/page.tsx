import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSectionEnhanced } from "@/components/sections/hero-section-enhanced";
import { PlatformSelectorSection } from "@/components/sections/platform-selector-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { AccountTypesSection } from "@/components/sections/account-types-section";
import { TradingPlatformsSection } from "@/components/sections/trading-platforms-section";
import { MarketsSection } from "@/components/sections/markets-section";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { OnboardingStepsSection } from "@/components/sections/onboarding-steps-section";
import { FAQSection } from "@/components/sections/faq-section";
import { DemoCTASection } from "@/components/sections/demo-cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <HeroSectionEnhanced
            eyebrow="Trade Global Markets"
            title="Trade Global Markets. Trade with Confidence."
            subtitle="A modern trading platform designed for speed, transparency, and professional-grade execution."
            ctaLabel="Start Trading"
            ctaHref="/register"
            secondaryCtaLabel="Try Demo Account"
            secondaryCtaHref="/demo"
          />
          <PlatformSelectorSection />
          <ValuePropositionSection />
          <AccountTypesSection />
          <TradingPlatformsSection />
          <MarketsSection />
          <TrustMetricsSection />
          <OnboardingStepsSection />
          <FAQSection />
          <DemoCTASection />
      </main>
      <Footer />
    </>
  );
}


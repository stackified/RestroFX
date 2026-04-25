import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSectionEnhanced } from "@/components/sections/hero-section-enhanced";
import { PlatformSelectorSection } from "@/components/sections/platform-selector-section";
import { AiTradingJournalSection } from "@/components/sections/ai-trading-journal-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { AccountTypesSection } from "@/components/sections/account-types-section";
import { TradingPlatformsSection } from "@/components/sections/trading-platforms-section";
import { MarketsSection } from "@/components/sections/markets-section";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { OnboardingStepsSection } from "@/components/sections/onboarding-steps-section";
import { FAQSection } from "@/components/sections/faq-section";
import { DemoCTASection } from "@/components/sections/demo-cta-section";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main>
        <HeroSectionEnhanced
          eyebrow=""
          title="Restro FX Redefining Your Trading Experience."
          subtitle="The Prop Account by RestroFX. No challenge. No evaluation. No monthly fee. Just deposit and trade with 125% extra buying power."
          ctaLabel="Start Trading"
          ctaHref="https://portal.restrofx.com/register"
          secondaryCtaLabel="View Platforms"
          secondaryCtaHref="/platforms"
        />

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <PlatformSelectorSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal delay={0.3}>
            <AiTradingJournalSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <ValuePropositionSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <AccountTypesSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <TradingPlatformsSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <MarketsSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <TrustMetricsSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <OnboardingStepsSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <DemoCTASection />
          </ScrollReveal>
        </div>
        <Footer />
      </main>
    </>
  );
}


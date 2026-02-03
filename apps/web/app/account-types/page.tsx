import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { AccountTypesHero } from "@/components/sections/account-types/at-hero";
import { AccountTypesComparison } from "@/components/sections/account-types/at-comparison";
import { AccountTypesStats } from "@/components/sections/account-types/at-stats";
import { AccountTypesFAQ } from "@/components/sections/account-types/at-faq";
import { AccountTypesSteps } from "@/components/sections/account-types/at-steps";
import { AccountTypesCTA } from "@/components/sections/account-types/at-cta";

export default function AccountTypesPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="min-h-screen bg-background">
        <AccountTypesHero />
        <AccountTypesComparison />
        <AccountTypesStats />
        <AccountTypesFAQ />
        <AccountTypesSteps />
        <AccountTypesCTA />
      </main>
      <Footer />
    </>
  );
}


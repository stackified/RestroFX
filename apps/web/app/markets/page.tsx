import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { MarketsHero } from "@/components/sections/markets/markets-hero";
import { MarketsGrid } from "@/components/sections/markets/markets-grid";

export default function MarketsPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="min-h-screen bg-background">
        <MarketsHero />
        <MarketsGrid />
      </main>
      <Footer />
    </>
  );
}


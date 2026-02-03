import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { PlatformsHero } from "@/components/sections/platforms/platforms-hero";
import { PlatformsList } from "@/components/sections/platforms/platforms-list";

export default function PlatformsPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="min-h-screen bg-background">
        <PlatformsHero />
        <PlatformsList />
      </main>
      <Footer />
    </>
  );
}


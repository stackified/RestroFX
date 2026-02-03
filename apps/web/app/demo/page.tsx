import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { DemoContent } from "@/components/sections/demo/demo-content";

export default function DemoPage() {
  return (
    <>
      <BackgroundScroll />
      <Navbar />
      <main className="min-h-screen bg-background">
        <DemoContent />
      </main>
      <Footer />
    </>
  );
}


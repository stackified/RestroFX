import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PartnerHero } from "@/components/sections/partner-hero";
import { PartnerBio } from "@/components/sections/partner-bio";
import { PartnerVideo } from "@/components/sections/partner-video";
import { PartnerVideoCarousel } from "@/components/sections/partner-video-carousel";
import { PartnerCTA } from "@/components/sections/partner-cta";
import { PartnerFeatures } from "@/components/sections/partner-features";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface PartnerData {
  name: string;
  bio: string;
  imageUrl: string;
  quote?: string;
  ctaMessage?: string;
  youtubeId?: string;
  ctaUrl?: string;
  extraVideos?: { id: string; title: string; thumbnail: string }[];
}

const PARTNERS_DATA: Record<string, PartnerData> = {
  "solo-e-tv": {
    name: "Solo E TV",
    bio: "Solo E started trading with $500–$600 paychecks to fund his music dream. No prop firms, no handouts — just self-taught grit. He burned $100K learning the hard way, mastering risk, discipline, and consistency. \n\nThe breakthrough came flipping $600 to $25K (then losing it), but going live on YouTube and turning $4K into $40K put him on the map. Now he refuses to deposit over $10K, proving small accounts can win big. The Solo E brand is about flipping limits, giving underdogs a system, and proving the world wrong one trade at a time.",
    imageUrl: "/images/soloetv.png",
    quote: "Life is short and working for other people sucks",
    ctaMessage: "Trade with the broker I trust. Join me at RestroFX and experience trading the way it was meant to be. Raw spreads, lightning-fast execution, and a platform that puts you first.",
    ctaUrl: "https://portal.restrofx.com/r/glaPWwHQ",
    extraVideos: [
      {
        id: "R2djd5ACzPM",
        thumbnail: "https://i.ytimg.com/vi/R2djd5ACzPM/hqdefault.jpg",
        title: "i'm finally buying my dream car"
      },
      {
        id: "_QmCh4dNVGE",
        thumbnail: "https://i.ytimg.com/vi/_QmCh4dNVGE/hqdefault.jpg",
        title: "Don't Trade Every Pair | Here's What Actually Works"
      },
      {
        id: "DV6cte3H9rc",
        thumbnail: "https://i.ytimg.com/vi/DV6cte3H9rc/hqdefault.jpg",
        title: "Pulled $15k profit - here's every single trade (GatesFX)"
      },
      {
        id: "KhLUPlL777U",
        thumbnail: "https://i.ytimg.com/vi/KhLUPlL777U/hqdefault.jpg",
        title: "Why You Should Reconsider Trading This year"
      },
      {
        id: "SyC37iKc2wE",
        thumbnail: "https://i.ytimg.com/vi/SyC37iKc2wE/hqdefault.jpg",
        title: "I Made $20k Trading Silver | Here's My Exact Strategy"
      },
      {
        id: "rExdi9Vzkxk",
        thumbnail: "https://i.ytimg.com/vi/rExdi9Vzkxk/hqdefault.jpg",
        title: "Is Trading Really Worth It? My 6 Years of Results"
      }
    ]
  },
  "default": {
    name: "Our Global Partner",
    bio: "Our partners are experienced traders and market leaders who trust RestroFX for their trading journey. They choose us for our transparency, technology, and superior trading conditions.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
    ctaMessage: "Join our community of successful traders today."
  }
};

export async function generateStaticParams() {
  return [
    { slug: "solo-e-tv" },
  ];
}

export default function PartnerProfilePage({ params }: { params: { slug: string } }) {
  const partner = PARTNERS_DATA[params.slug] || PARTNERS_DATA["default"];

  if (!partner && params.slug !== "demo") {
    notFound();
  }

  return (
    <>
      <BackgroundScroll />
      <Navbar ctaUrl={partner.ctaUrl} />
      <main>
        <PartnerHero ctaUrl={partner.ctaUrl} />

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <PartnerBio
              name={partner.name}
              bio={partner.bio}
              imageUrl={partner.imageUrl}
              quote={partner.quote}
              ctaUrl={partner.ctaUrl}
            />
          </ScrollReveal>
        </div>

        {partner.youtubeId && (
          <ScrollReveal>
            <PartnerVideo youtubeId={partner.youtubeId} />
          </ScrollReveal>
        )}

        {partner.extraVideos && (
          <ScrollReveal>
            <PartnerVideoCarousel videos={partner.extraVideos} />
          </ScrollReveal>
        )}

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">
                Why <span className="text-primary">RestroFX</span> is my <br /> favorite broker.
              </h2>
            </div>
            <PartnerFeatures />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <TrustMetricsSection />
          </ScrollReveal>
        </div>

        <div className="py-4 sm:py-6">
          <ScrollReveal>
            <PartnerCTA 
              partnerName={partner.name} 
              message={partner.ctaMessage} 
              ctaUrl={partner.ctaUrl} 
            />
          </ScrollReveal>
        </div>

      </main>
      <Footer />
    </>
  );
}

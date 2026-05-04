import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PartnerHero } from "@/components/sections/partner-hero";
import { PartnerBio } from "@/components/sections/partner-bio";
import { PartnerVideo } from "@/components/sections/partner-video";
import { CurvedCarousel } from "@/components/ui/curved-carousel";
import { PartnerCTA } from "@/components/sections/partner-cta";
import { PartnerFeatures } from "@/components/sections/partner-features";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { BackgroundScroll } from "@/components/ui/background-scroll";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WorkflowBuilderCard } from "@/components/ui/workflow-builder-card";

interface PartnerData {
  name: string;
  bio: string;
  imageUrl: string;
  quote?: string;
  ctaMessage?: string;
  youtubeId?: string;
  ctaUrl?: string;
  featuredVideos?: { id: string; videoId: string; title: string }[];
}

const PARTNERS_DATA: Record<string, PartnerData> = {
  "solo-e-tv": {
    name: "Solo E TV",
    bio: "Solo E started trading with $500–$600 paychecks to fund his music dream. No prop firms, no handouts — just self-taught grit. He burned $100K learning the hard way, mastering risk, discipline, and consistency. \n\nThe breakthrough came flipping $600 to $25K (then losing it), but going live on YouTube and turning $4K into $40K put him on the map. Now he refuses to deposit over $10K, proving small accounts can win big. The Solo E brand is about flipping limits, giving underdogs a system, and proving the world wrong one trade at a time.",
    imageUrl: "/images/soloetv.png",
    quote: "Life is short and working for other people sucks",
    ctaMessage: "Trade with the broker I trust. Join me at RestroFX and experience trading the way it was meant to be. Raw spreads, lightning-fast execution, and a platform that puts you first.",
    youtubeId: "FXUtCnCdEq4",
    ctaUrl: "https://portal.restrofx.com/r/nqehg2zv",
    featuredVideos: [
      { id: "1", videoId: "LdjfeDLhRiM", title: "$38k withdrawal in brought a lamborghini Then Went Left!" },
      { id: "2", videoId: "R2djd5ACzPM", title: "i'm finally buying my dream car" },
      { id: "3", videoId: "_QmCh4dNVGE", title: "Don't Trade Every Pair | Here's What Actually Works" },
      { id: "4", videoId: "KhLUPlL777U", title: "Why You Should Reconsider Trading This year" },
      { id: "5", videoId: "SyC37iKc2wE", title: "I Made $20k Trading Silver | Here's My Exact Strategy" },
      { id: "6", videoId: "rExdi9Vzkxk", title: "Is Trading Really Worth It? My 6 Years of Results" }
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

        {partner.featuredVideos && (
          <>
            <ScrollReveal>
              <CurvedCarousel 
                items={partner.featuredVideos} 
                title={<>Our Latest <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Insights</span></>}
                subtitle="Watch the journey unfold. From strategy deep dives to lifestyle updates, stay connected with our partner's latest content."
              />
            </ScrollReveal>

            {/* Instructional Cards Section */}
            <div className="container mx-auto max-w-7xl px-4 mb-20">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                    Getting <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">Started</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Everything you need to know to set up your account, fund your wallet, and start trading with confidence.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <WorkflowBuilderCard
                    title="How to Deposit"
                    description={
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Login to your RestroFX Portal</li>
                        <li>Click on &apos;Deposit Funds&apos;</li>
                        <li>Select your preferred method</li>
                        <li>Follow the on-screen steps</li>
                      </ul>
                    }
                    imageUrl="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2940&auto=format&fit=crop"
                  />

                  <WorkflowBuilderCard
                    title="Take Your First Trade"
                    description={
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Open TradeLocker Platform</li>
                        <li>Select your trading pair</li>
                        <li>Choose your lot size</li>
                        <li>Click Buy or Sell to execute</li>
                      </ul>
                    }
                    imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format&fit=crop"
                  />

                  <WorkflowBuilderCard
                    title="Login TradeLocker"
                    description={
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Locate credentials in your email</li>
                        <li>Go to TradeLocker login page</li>
                        <li>Enter your email and password</li>
                        <li>Select the RestroFX Server</li>
                      </ul>
                    }
                    imageUrl="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
                  />
                </div>
              </ScrollReveal>
            </div>
          </>
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

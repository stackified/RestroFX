import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSectionEnhanced } from "@/components/sections/about-section-enhanced";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Shield, Award, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSectionEnhanced />
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6 text-center">
              About CrimsonFX
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-16">
              A trusted trading partner for traders worldwide
            </p>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-2xl font-semibold font-heading text-foreground mb-4">
                Company Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                CrimsonFX is a leading online trading platform dedicated to
                providing traders with access to global financial markets. We
                combine cutting-edge technology with transparent trading
                conditions to deliver a professional trading experience.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to empower traders by providing them with the
                tools, platforms, and support they need to succeed in the
                financial markets. We believe in transparency, integrity, and
                putting our clients first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Regulation & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CrimsonFX operates as a regulated broker, ensuring the
                    highest standards of security and compliance. Your funds are
                    protected, and we maintain strict regulatory compliance in
                    all jurisdictions where we operate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Industry Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We have earned recognition in the industry for our
                    commitment to excellence, innovative technology, and
                    exceptional client service. Our awards reflect our dedication
                    to providing the best trading experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Global Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With hundreds of thousands of traders worldwide, we have
                    built a global community of traders who trust CrimsonFX for
                    their trading needs. Our diverse client base spans multiple
                    continents and trading styles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide access to global financial markets, allowing
                    traders to trade a wide range of instruments including
                    forex, indices, commodities, and cryptocurrencies from a
                    single account.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-semibold font-heading text-foreground mb-4">
                Our Values
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transparency in all our operations and pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Integrity in every interaction and transaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Innovation in technology and trading solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Client-first approach in everything we do</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


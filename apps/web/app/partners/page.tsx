import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import { Users, Building2, TrendingUp, HelpingHand } from "lucide-react";

const partnerPrograms = [
  {
    id: "ib",
    name: "IB Program",
    description:
      "Join our Introducing Broker program and earn competitive commissions by referring clients to CrimsonFX.",
    icon: Users,
  },
  {
    id: "white-label",
    name: "White Label",
    description:
      "Launch your own branded trading platform with our comprehensive white label solution.",
    icon: Building2,
  },
  {
    id: "affiliates",
    name: "Affiliates",
    description:
      "Promote CrimsonFX and earn commissions for every client you refer to our platform.",
    icon: TrendingUp,
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Partner with CrimsonFX
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Grow your business with our comprehensive partner programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {partnerPrograms.map((program) => (
                <Card key={program.id}>
                  <CardHeader>
                    <program.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {program.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/partners/${program.id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <HelpingHand className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Become a Partner</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Interested in partnering with CrimsonFX? Contact our partner
                  team to learn more about our programs and how we can help grow
                  your business.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Partner Team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


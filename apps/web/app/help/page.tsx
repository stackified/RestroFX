import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import {
  HelpCircle,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  Mail,
} from "lucide-react";

const helpResources = [
  {
    name: "Getting Started",
    description: "Learn the basics of trading and using our platform",
    icon: BookOpen,
    href: "/help/getting-started",
  },
  {
    name: "FAQs",
    description: "Find answers to frequently asked questions",
    icon: HelpCircle,
    href: "/#faq",
  },
  {
    name: "Trading Guides",
    description: "Comprehensive guides on trading strategies and tools",
    icon: FileText,
    href: "/help/guides",
  },
  {
    name: "Video Tutorials",
    description: "Watch step-by-step video tutorials",
    icon: Video,
    href: "/help/videos",
  },
  {
    name: "Contact Support",
    description: "Get in touch with our support team",
    icon: MessageCircle,
    href: "/contact",
  },
];

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Help Center
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to your questions and get the support you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {helpResources.map((resource) => (
                <Card key={resource.name} className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader>
                    <resource.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{resource.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={resource.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Still Need Help?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our support team is available 24/7 to assist you with any
                  questions or concerns. Reach out to us through email, phone,
                  or live chat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:support@crimsonfx.com">Email Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


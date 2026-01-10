import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@crimsonfx/ui";
import { Button } from "@/components/ui/neon-button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Login
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sign in to your CrimsonFX account to access your trading
                dashboard.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Sign In</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <Button variant="solid" className="w-full" size="lg">
                  Sign In
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    Create one
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


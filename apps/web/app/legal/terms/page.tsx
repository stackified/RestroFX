import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
              Terms & Conditions
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the CrimsonFX website and trading
                  platform, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Account Registration
                </h2>
                <p>
                  To use our services, you must register for an account. You
                  agree to provide accurate, current, and complete information
                  during the registration process and to update such information
                  to keep it accurate, current, and complete.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Trading Rules
                </h2>
                <p>
                  All trading activities are subject to our trading rules and
                  regulations. You agree to comply with all applicable laws and
                  regulations when using our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Liability
                </h2>
                <p>
                  CrimsonFX shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of
                  profits or revenues, whether incurred directly or indirectly,
                  or any loss of data, use, goodwill, or other intangible
                  losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes to these terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


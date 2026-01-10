import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us,
                  including when you create an account, make a deposit or
                  withdrawal, or contact us for support.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our services, process transactions, send technical
                  notices, and communicate with you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information at any time. You may also opt out of certain
                  communications from us.
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


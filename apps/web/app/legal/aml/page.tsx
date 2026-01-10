import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AMLPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
              AML & Compliance Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Anti-Money Laundering Commitment
                </h2>
                <p>
                  CrimsonFX is committed to preventing money laundering and
                  terrorist financing. We have implemented comprehensive
                  policies and procedures to ensure compliance with all
                  applicable anti-money laundering (AML) laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Customer Due Diligence
                </h2>
                <p>
                  We are required by law to verify the identity of all clients.
                  This includes collecting and verifying personal information,
                  identity documents, and proof of address. We may also perform
                  enhanced due diligence for certain clients or transactions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Transaction Monitoring
                </h2>
                <p>
                  We monitor all transactions for suspicious activity and report
                  any suspicious transactions to the relevant authorities as
                  required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Compliance
                </h2>
                <p>
                  We maintain strict compliance with all applicable financial
                  regulations and cooperate fully with regulatory authorities.
                  Our compliance program is regularly reviewed and updated to
                  ensure effectiveness.
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


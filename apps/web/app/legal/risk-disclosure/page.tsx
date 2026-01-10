import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RiskDisclosurePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
              Risk Disclosure
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  General Risk Warning
                </h2>
                <p>
                  Trading in financial instruments, including derivatives such as
                  Contracts for Difference (CFDs), carries a high level of risk
                  and may not be suitable for all investors. The high degree of
                  leverage can work against you as well as for you.
                </p>
                <p>
                  Before deciding to trade, you should carefully consider your
                  investment objectives, level of experience, and risk appetite.
                  The possibility exists that you could sustain a loss of some
                  or all of your initial investment and therefore you should not
                  invest money that you cannot afford to lose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Leverage Risk
                </h2>
                <p>
                  Trading on margin carries a high level of risk, and may not be
                  suitable for all investors. The high degree of leverage can
                  work against you as well as for you. Before deciding to trade
                  you should carefully consider your investment objectives,
                  level of experience, and risk appetite.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Market Risk
                </h2>
                <p>
                  All trading involves risk. Prices can move rapidly against you
                  and may result in losses that exceed your initial deposit. You
                  should be aware of all the risks associated with trading
                  financial instruments and seek advice from an independent
                  financial advisor if you have any doubts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading text-foreground mt-8 mb-4">
                  Past Performance
                </h2>
                <p>
                  Past performance is not indicative of future results. Any
                  historical returns, expected returns, or probability
                  projections may not reflect actual future performance.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mt-8">
                <p className="font-medium text-foreground">
                  If you do not fully understand the risks involved, or if you
                  are unsure whether trading is suitable for you, you should
                  seek independent financial advice.
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


import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

export function Footer() {
  return (
    <footer className="relative z-10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Section: Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-foreground/10 pb-8 mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Image src={withBasePath("/logo.png")} alt="Restro FX" width={40} height={40} className="h-10 w-auto" />
            <span className="text-2xl font-bold tracking-tight text-foreground font-heading">Restro FX</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-muted-foreground hidden lg:block">Follow for the latest updates.</span>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content: Description + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="max-w-md space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Restro FX is an international broker regulated by the International Financial Centre,
                ensuring transparency and compliance with international standards of the company&apos;s services.
              </p>
              <div className="text-[10px] text-muted-foreground/60 leading-tight space-y-1">
                <p>Registration number: 2024-00388</p>
                <p>Copyright {new Date().getFullYear()} Restro FX LTD. All rights reserved.</p>
                <p>Registration Address: Rodney Village, Rodney Bay, Gros Islet, St. Lucia</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/platforms/lock-it-trade" className="hover:text-primary">Lock It Trade</Link></li>
                <li><Link href="/platforms/tradelocker" className="hover:text-primary">TradeLocker</Link></li>
                <li><Link href="/ai-trading-journal" className="hover:text-primary">AI Trading Journal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Trading</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/account-types" className="hover:text-primary">Account Types</Link></li>
                <li><Link href="/markets" className="hover:text-primary">Instruments</Link></li>
                <li><Link href="/liquidity" className="hover:text-primary">Liquidity</Link></li>
                <li><Link href="/spreads" className="hover:text-primary">Spreads</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Partners</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/partners/ib" className="hover:text-primary">IB Program</Link></li>
                <li><Link href="/partners/affiliate" className="hover:text-primary">Affiliates</Link></li>
                <li><Link href="/partners/white-label" className="hover:text-primary">White Label</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/legal" className="hover:text-primary">Legal Docs</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2 mb-12 border-b border-foreground/5 pb-8">
          {["AML Policy", "Risk Disclosure", "Privacy Policy", "Refund Policy", "Terms & Conditions"].map((link) => (
            <Link key={link} href="#" className="text-xs font-semibold text-muted-foreground hover:text-primary">
              {link}
            </Link>
          ))}
          <Link href="/register" className="text-xs font-bold text-primary hover:underline">Opening an Account</Link>
        </div>

        {/* Detailed Disclaimers */}
        <div className="space-y-6 text-[10px] text-muted-foreground opacity-60 leading-relaxed mb-12">
          <p>
            Restro FX LTD is an Authorized Financial Services Provider (&quot;FSP&quot;) licensed and regulated by the Financial Sector Conduct Authority (&quot;FSCA&quot;) (FSP No. 48827).
          </p>
          <p>
            Restro FX LTD is an International Broker regulated by the International Financial Centre of St. Lucia, ensuring transparency and compliance with international standards of the company&apos;s services and provides access to trading services in accordance with applicable laws and regulations.
          </p>
          <p>
            Client accounts are onboarded through Restro FX LTD, a company incorporated in saint lucia (Reg. No. 2024-00388). By opening an account with Restro FX LTD, you confirm that you are at least eighteen (18) years of age (or the legal age in your jurisdiction), that you are acting of your own free will without solicitation from Restro FX, and that you will ensure compliance with all applicable local laws and regulations.
          </p>
        </div>

        {/* Risk Warning Box */}
        <div className="bg-muted/30 border border-foreground/10 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-primary mt-0.5">ⓘ</div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Risk Warning:</strong> Trading Forex and CFDs carries a high level of risk to your capital and you should only trade with funds you can afford to lose. Trading Forex and CFDs may not be suitable for all investors, so please ensure that you fully understand the risks involved and seek independent advice if necessary. Please read and ensure you fully understand our risk disclosure.
            </p>
          </div>
          <p className="pl-8 text-[10px] text-muted-foreground leading-relaxed">
            <strong className="text-foreground text-xs block mb-1">Restricted Countries:</strong>
            Restro FX LTD does not provide services for residents of certain countries, including Israel, New Zealand, Iran, and North Korea (Democratic People&apos;s Republic of Korea), or any country where such distribution or use would be contrary to local law or regulation. Furthermore, Restro FX LTD does not solicit citizens of the United States of America. Please check with your local jurisdiction to determine if you are permitted to open an account with Restro FX LTD.
          </p>
          <p className="pl-8 text-[10px] text-muted-foreground leading-relaxed italic">
            It is your responsibility to determine whether you are permitted to open an account with Restro FX LTD.
          </p>
          <p className="pl-8 text-[10px] text-muted-foreground/60 leading-relaxed">
            <strong className="text-foreground opacity-100 non-italic">Disclaimer:</strong> The information provided herein reflects personal opinions and ideas and does not constitute a recommendation to purchase financial services or guarantee the performance or outcomes of future transactions. This material is not intended to be interpreted as financial advice. While every effort has been made to ensure the accuracy, validity and completeness of the information, no guarantees are provided and no liability is accepted for any losses incurred as a result of investments made based on this material. Nothing contained on this site should be considered or construed as professional advice from Restro FX LTD, its affiliates, directors, officers, or employees.
          </p>
        </div>

      </div>
    </footer>
  );
}


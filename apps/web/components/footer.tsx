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
                { icon: Instagram, href: "https://www.instagram.com/restrofx" },
                { icon: Youtube, href: "https://www.youtube.com/@restrofx" },
                { icon: Twitter, href: "https://x.com/restrofx" },
                { icon: Facebook, href: "https://www.facebook.com/restrofx" },
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
                Restro FX is an international broker ensuring transparency and compliance
                with international standards of the company&apos;s services.
              </p>
              <div className="text-[10px] text-muted-foreground/60 leading-tight space-y-1">
                <p>Registration number: 2025-00922</p>
                <p>© 2026 Restro FX Ltd. All rights reserved.</p>
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Trading</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/account-types" className="hover:text-primary">Account Types</Link></li>
                <li><Link href="/markets" className="hover:text-primary">Instruments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Partners</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/partners/ib" className="hover:text-primary">IB Program</Link></li>
                <li><Link href="/partners/affiliate" className="hover:text-primary">Affiliates</Link></li>
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
          <Link href="/legal/aml" className="text-xs font-semibold text-muted-foreground hover:text-primary">
            AML Policy
          </Link>
          <Link href="/legal/risk-disclosure" className="text-xs font-semibold text-muted-foreground hover:text-primary">
            Risk Disclosure
          </Link>
          <Link href="/legal/privacy" className="text-xs font-semibold text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="text-xs font-semibold text-muted-foreground hover:text-primary">
            Terms & Conditions
          </Link>
          <Link href="https://portal.restrofx.com/register" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary hover:underline">Opening an Account</Link>
        </div>

        {/* Regulatory & Risk Information */}
        <div className="space-y-6 text-[10px] text-muted-foreground leading-relaxed mb-12 border-t border-foreground/5 pt-8">
          <p>
            <strong className="text-foreground">Risk Warning:</strong> Trading Contracts for Difference (CFDs) and Forex instruments involves a high level of risk and may not be suitable for all investors. You may lose more than your initial deposit. Please ensure you fully understand the risks involved before trading.
          </p>
          <p>
            Client accounts are onboarded through Restro FX Ltd., a company incorporated in Saint Lucia (Reg. No. 2025-00922). By opening an account with Restro FX Ltd., you confirm that you are at least eighteen (18) years of age (or the legal age in your jurisdiction), that you are acting of your own free will without solicitation from Restro FX, and that you will ensure compliance with all applicable local laws and regulations.
          </p>
          <p>
            Restro FX Ltd. does not offer services to residents of jurisdictions where such services are restricted or prohibited by law, including but not limited to Hong Kong, Afghanistan, and Russia.
          </p>
          <p className="pt-4 opacity-60">
            © 2026 Restro FX Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}


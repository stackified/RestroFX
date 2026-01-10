import Link from "next/link";
import { cn } from "@/lib/utils";

const footerSections = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "News & Updates", href: "/news" },
    ],
  },
  platforms: {
    title: "Platforms",
    links: [
      { name: "MetaTrader 5", href: "/platforms/mt5" },
      { name: "TradeLocker", href: "/platforms/tradelocker" },
      { name: "Mobile Trading", href: "/platforms/mobile" },
      { name: "Web Trading", href: "/platforms/web" },
    ],
  },
  trading: {
    title: "Trading",
    links: [
      { name: "Markets", href: "/markets" },
      { name: "Account Types", href: "/account-types" },
      { name: "Trading Conditions", href: "/trading-conditions" },
      { name: "Deposit & Withdrawal", href: "/deposit-withdrawal" },
    ],
  },
  partners: {
    title: "Partners",
    links: [
      { name: "IB Program", href: "/partners/ib" },
      { name: "White Label", href: "/partners/white-label" },
      { name: "Affiliates", href: "/partners/affiliates" },
      { name: "Become a Partner", href: "/partners" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Risk Disclosure", href: "/legal/risk-disclosure" },
      { name: "Terms & Conditions", href: "/legal/terms" },
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "AML Policy", href: "/legal/aml" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold font-heading text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p className="mb-2">
                © {new Date().getFullYear()} CrimsonFX. All rights reserved.
              </p>
              <p className="text-xs">
                Trading derivatives carries a high level of risk. You should
                only trade with money you can afford to lose. Past performance
                is not indicative of future results.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="text-xs">
                CrimsonFX is regulated and operates in accordance with
                applicable financial regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


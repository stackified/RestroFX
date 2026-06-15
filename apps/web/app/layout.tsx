import type { Metadata } from "next";
import { Archivo, Inter, Poppins } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { DepositPopup } from "@/components/deposit-popup";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

// Using Inter as General Sans alternative (General Sans is not on Google Fonts)
// To use General Sans, add it as a custom font via @font-face
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-numbers",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stackified.github.io/RestroFX'),
  title: "Restro FX",
  description: "Restro FX is committed to redefining your trading experience by merging deep market expertise with advanced trading platforms and tools.",
  openGraph: {
    title: "Restro FX",
    description: "Restro FX is committed to redefining your trading experience by merging deep market expertise with advanced trading platforms and tools.",
    images: ['/RestroFX/Logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4688865621440669'); 
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      {/* Google Tag Manager (GTM) */}
      <GoogleTagManager gtmId="GTM-59JTRGK7" />
      {/* Google Analytics (GA4) */}
      <GoogleAnalytics gaId="G-Y8BK4R8S1L" />
      <body
        className={`${archivo.variable} ${inter.variable} ${poppins.variable} font-body antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59JTRGK7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4688865621440669&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {children}
        <DepositPopup />
      </body>
    </html>
  );
}


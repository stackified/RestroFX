import type { Metadata } from "next";
import { Archivo, Inter, Poppins } from "next/font/google";
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
  metadataBase: new URL('https://stackified.github.io'),
  title: "Restro FX",
  description: "Restro FX is committed to redefining your trading experience by merging deep market expertise with advanced trading platforms and tools.",
  icons: {
    icon: '/favicon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Restro FX",
    description: "Restro FX is committed to redefining your trading experience by merging deep market expertise with advanced trading platforms and tools.",
    images: ['/Logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} ${poppins.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


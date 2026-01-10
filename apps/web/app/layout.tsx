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
  title: "CrimsonFX - Trade Global Markets with Confidence",
  description: "A modern trading platform designed for speed, transparency, and professional-grade execution.",
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


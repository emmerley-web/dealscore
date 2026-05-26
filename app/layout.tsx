import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PitchMark: Know Your Chances of Getting a Traditional Book Deal",
  description:
    "Take the PitchMark assessment to understand your readiness for a traditional nonfiction book deal, get personalised coaching, and track your progress over time.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Security headers — GitHub Pages cannot set HTTP headers, so we use meta tags */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https://images.unsplash.com https://lucindaliterary.com https://i0.wp.com https://memoirist.co.uk; connect-src 'self'; frame-ancestors 'none';"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="font-sans bg-white text-stone-900 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DealScore — Know Your Chances of Getting a Traditional Book Deal",
  description:
    "Take the DealScore assessment to understand your readiness for a traditional nonfiction book deal, get personalised coaching, and track your progress over time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-stone-900 antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-stone-900 antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

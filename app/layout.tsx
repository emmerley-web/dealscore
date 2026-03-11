import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "DealScore — Know Your Chances of Getting a Traditional Book Deal",
  description:
    "Take the DealScore assessment to find out how ready you are for a traditional book deal, get AI-powered personalized advice, and track your progress over time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

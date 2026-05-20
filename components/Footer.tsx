import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t-2 border-gold-400/20 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-serif font-bold text-white text-lg tracking-tight">
            Pitch<span className="text-gold-400">Mark</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-stone-500">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link>
          <Link href="/tactics" className="hover:text-white transition-colors">Tactics</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
        </div>
        <p className="text-stone-600 text-sm">Built by Tim Vandehey and Emily Liao.</p>
      </div>
    </footer>
  );
}

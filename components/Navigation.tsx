"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { LogoMark } from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "How It Works" },
  { href: "/tactics", label: "Tactics" },
  { href: "/plans", label: "Work With Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="scale-110 origin-left" />
            <span className="font-serif font-bold text-stone-900 text-2xl tracking-tight">
              Pitch<span className="text-gold-400">Mark</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-2.5 text-base font-medium transition-colors",
                  pathname === link.href || pathname === link.href + "/"
                    ? "text-stone-900 border-b-2 border-gold-400"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="ml-4 px-5 py-2.5 bg-stone-900 hover:bg-stone-700 text-white text-base font-medium transition-colors"
            >
              Get My Score
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block px-3 py-3 text-sm font-medium transition-colors",
                  pathname === link.href || pathname === link.href + "/"
                    ? "text-stone-900 font-semibold"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="block mt-2 px-3 py-3.5 bg-stone-900 text-white text-sm font-medium text-center"
            >
              Get My Score
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

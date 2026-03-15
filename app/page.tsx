"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Star,
  TrendingUp,
  Lightbulb,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { LogoMark } from "@/components/Logo";

const FEATURES = [
  {
    icon: BarChart3,
    title: "The variables publishers actually use",
    description:
      "Platform, manuscript quality, concept uniqueness, commercial potential, and timeliness. These are the real inputs. Most authors never know to ask about them.",
  },
  {
    icon: Star,
    title: "An honest score, not a pep talk",
    description:
      "You get a number from 0 to 100, broken down by category. If your platform is thin or your concept isn't differentiated enough, the score will show it. That honesty is the point.",
  },
  {
    icon: Lightbulb,
    title: "A clear path forward",
    description:
      "Traditional publishing is one path. Hybrid publishers and self-publishing are others. Your score and breakdown tell you which route fits your actual position.",
  },
  {
    icon: TrendingUp,
    title: "Track your progress over time",
    description:
      "Building a platform or sharpening a concept takes months. Save your results, retake the assessment as you make changes, and watch your score move as the work accumulates.",
  },
];

const SPECTRUM_PREVIEW = [
  { range: "0\u201320", label: "Just Getting Started", color: "#a8a29e" },
  { range: "21\u201340", label: "Early Explorer", color: "#78716c" },
  { range: "41\u201360", label: "Rising Contender", color: "#57534e" },
  { range: "61\u201375", label: "Strong Candidate", color: "#44403c" },
  { range: "76\u201388", label: "Near Deal-Ready", color: "#292524" },
  { range: "89\u2013100", label: "Deal-Ready", color: "#1c1917" },
];

const WHAT_YOU_GET = [
  "Your DealScore out of 100",
  "Scores across the five key publishing variables",
  "Where you sit on the readiness spectrum",
  "Which publication path fits your current position",
  "Tactics and resources matched to your weakest areas",
];

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
      {children}
    </p>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-stone-100 border-y border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <EyebrowLabel>Stay informed</EyebrowLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
              Publishing insights for nonfiction authors
            </h2>
            <p className="text-stone-500 text-base leading-relaxed">
              Practical guidance on platform building, proposals, and navigating the
              publishing landscape. No noise. Sent occasionally.
            </p>
          </div>
          <div>
            {submitted ? (
              <div className="flex items-start gap-3 p-5 bg-white border border-stone-200">
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900 mb-1">You&rsquo;re on the list.</p>
                  <p className="text-stone-500 text-sm">
                    We&rsquo;ll be in touch when there&rsquo;s something worth reading.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 px-4 py-3 border border-stone-300 bg-white text-stone-900 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-stone-900 hover:bg-stone-700 text-white font-medium text-sm transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-xs text-stone-400">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div>
              <EyebrowLabel>For nonfiction authors pursuing a traditional book deal</EyebrowLabel>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-stone-900 mb-7 leading-[1.06]">
                Do you know what it actually takes to get a nonfiction book deal?
              </h1>
              <p className="text-lg sm:text-xl text-stone-500 mb-10 leading-relaxed">
                Agents and publishers evaluate every nonfiction submission against the same
                framework. DealScore gives you access to it, so you know exactly where you
                stand on every variable that drives traditional acquisition decisions.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-700 text-white font-medium text-base transition-colors group"
                >
                  Take the Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              <p className="mt-5 text-sm text-stone-400">
                5 minutes &middot; 20 questions &middot; For nonfiction authors at any stage
              </p>
            </div>

            {/* Right: image */}
            <div className="hidden lg:block">
              <div className="overflow-hidden h-[480px] bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Readiness Spectrum Preview */}
      <section className="py-14 px-4 sm:px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold text-stone-500 uppercase tracking-[0.18em] mb-8">
            The DealScore Readiness Spectrum
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200 border border-stone-200">
            {SPECTRUM_PREVIEW.map((item) => (
              <div key={item.label} className="bg-white p-5 sm:p-6 text-center">
                <div
                  className="text-sm font-bold mb-2 font-serif"
                  style={{ color: item.color }}
                >
                  {item.range}
                </div>
                <div className="text-sm text-stone-500 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <EyebrowLabel>How it works</EyebrowLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-5">
              The knowledge gap is the problem
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              Most nonfiction authors want a traditional deal. Few understand the specific
              variables agents and editors apply to every submission. DealScore gives you
              that same framework, scored against your actual position, so you can see
              clearly whether traditional publishing is within reach right now and what
              it would take to get there.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="border-t border-stone-200 pt-7">
                <div className="w-8 h-8 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-serif font-bold text-stone-900 mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-4 sm:px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <EyebrowLabel>What you receive</EyebrowLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-5">
                Know where you stand before you query
              </h2>
              <p className="text-stone-500 mb-10 leading-relaxed text-base">
                20 questions. A score out of 100. A breakdown showing exactly
                which variables are holding you back and which publishing
                path makes sense for your book right now.
              </p>
              <ul className="space-y-4">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock score card */}
            <div className="bg-stone-900 p-6 sm:p-8 text-white">
              <p className="text-stone-400 text-sm font-medium mb-1 uppercase tracking-widest">
                Example: Business / Leadership Author
              </p>
              <div className="flex items-end gap-2 mb-4 mt-3">
                <span className="font-serif text-7xl font-bold text-white leading-none">
                  72
                </span>
                <span className="text-2xl text-stone-500 mb-2">/100</span>
              </div>
              <div className="inline-flex items-center gap-2 border border-stone-700 px-3 py-1 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span className="text-sm font-medium text-stone-300 tracking-wide">
                  Strong Candidate
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Platform", score: 45 },
                  { name: "Manuscript", score: 80 },
                  { name: "Uniqueness", score: 75 },
                  { name: "Commercial", score: 85 },
                  { name: "Timeliness", score: 70 },
                ].map((cat) => (
                  <div key={cat.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-stone-400">{cat.name}</span>
                      <span className="font-medium text-stone-300">{cat.score}</span>
                    </div>
                    <div className="h-px bg-stone-700">
                      <div
                        className="h-px bg-gold-400"
                        style={{ width: `${cat.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone-500 text-sm mt-6 leading-relaxed">
                Biggest opportunity: Platform. A newsletter, speaking engagements,
                and a few high-profile podcast appearances could push this score
                into deal-ready territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 bg-stone-900 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-stone-900/85" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="w-8 h-px bg-gold-400 mx-auto mb-8" aria-hidden="true" />
          <p className="font-serif text-xl sm:text-2xl text-white leading-relaxed italic">
            &ldquo;The authors who got deals weren&rsquo;t always the ones with the best books.
            They were the ones who already understood what publishers were evaluating.&rdquo;
          </p>
          <div className="w-8 h-px bg-gold-400 mx-auto mt-8 mb-6" aria-hidden="true" />
          <p className="text-stone-400 text-sm font-medium tracking-[0.18em] uppercase">
            Tim Vandehey &middot; NYT Bestselling Ghostwriter
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-2xl mx-auto text-center">
          <EyebrowLabel>Get started</EyebrowLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-5">
            Ready to find out where you stand?
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed">
            Five minutes and 20 questions. A score out of 100, a breakdown across every
            variable, and a clear sense of which publishing route makes sense for your
            book right now.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 hover:bg-stone-700 text-white font-medium text-lg transition-colors group"
          >
            Start the Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-stone-950 border-t-2 border-gold-400/20 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-serif font-bold text-white text-lg tracking-tight">
              Deal<span className="text-gold-400">Score</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-stone-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link>
            <Link href="/tactics" className="hover:text-white transition-colors">Tactics</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <p className="text-stone-600 text-sm">Built by Tim Vandehey and Emily Liao.</p>
        </div>
      </footer>
    </div>
  );
}

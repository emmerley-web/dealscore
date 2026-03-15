import Link from "next/link";
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
      "You get a number from 0 to 100, broken down by category. If your platform is thin or your concept is not differentiated enough, the score will show it. That honesty is the point.",
  },
  {
    icon: Lightbulb,
    title: "A clear path forward",
    description:
      "Traditional publishing is one path. Hybrid publishers and self-publishing are others. Your score and breakdown help you figure out which route is actually right for you, not just the one you hoped for.",
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
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-5 h-px bg-gold-400 flex-shrink-0" aria-hidden="true" />
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <EyebrowLabel>Built by publishing insiders for aspiring authors</EyebrowLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-stone-900 mb-7 leading-[1.05] max-w-3xl">
            Do you know what it actually takes to get a nonfiction book deal?
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
            Publishing professionals evaluate every submission against the same framework.
            DealScore gives you access to it — so you know exactly where you stand on
            every variable that drives acquisition decisions.
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
      </section>

      {/* Readiness Spectrum Preview */}
      <section className="py-14 px-4 sm:px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold text-stone-400 uppercase tracking-[0.18em] mb-8">
            The DealScore Readiness Spectrum
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200 border border-stone-200">
            {SPECTRUM_PREVIEW.map((item) => (
              <div key={item.label} className="bg-white p-4 sm:p-5 text-center">
                <div
                  className="text-xs font-bold mb-1.5 font-serif"
                  style={{ color: item.color }}
                >
                  {item.range}
                </div>
                <div className="text-xs text-stone-500 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <EyebrowLabel>How it works</EyebrowLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-5">
              The knowledge gap is the problem
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              Authors can ask anyone whether they have a chance at a traditional deal.
              The problem is they do not know which variables to assess in the first place.
              DealScore gives you the same framework publishing professionals use, and
              points you toward the right path — whether that is traditional, hybrid, or self-publishing.
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
        <div className="max-w-5xl mx-auto">
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
            <div className="bg-stone-900 p-8 text-white">
              <p className="text-stone-400 text-xs font-medium mb-1 uppercase tracking-widest">
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
                <span className="text-xs font-medium text-stone-300 tracking-wide">
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
                    <div className="flex justify-between text-xs mb-1.5">
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
              <p className="text-stone-500 text-xs mt-6 leading-relaxed">
                Biggest opportunity: Platform. A newsletter, speaking engagements,
                and a few high-profile podcast appearances could push this score
                into deal-ready territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote — replaces editorial image */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-stone-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-8 h-px bg-gold-400 mx-auto mb-8" aria-hidden="true" />
          <p className="font-serif text-xl sm:text-2xl text-white leading-relaxed italic">
            &ldquo;The authors who got deals were not always the ones with the best books.
            They were the ones who already understood what publishers were evaluating.&rdquo;
          </p>
          <div className="w-8 h-px bg-gold-400 mx-auto mt-8 mb-6" aria-hidden="true" />
          <p className="text-stone-500 text-xs font-medium tracking-[0.2em] uppercase">
            Tim Vandehey &middot; NYT Bestselling Ghostwriter
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <EyebrowLabel>Get started</EyebrowLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-5 max-w-xl">
            Ready to find out where you stand?
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed max-w-xl">
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

      {/* Footer */}
      <footer className="bg-stone-950 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-serif font-bold text-white text-lg tracking-tight">
              Deal<span className="text-gold-400">Score</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-stone-500">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/assessment" className="hover:text-white transition-colors">
              Assessment
            </Link>
            <Link href="/tactics" className="hover:text-white transition-colors">
              Tactics
            </Link>
          </div>
          <p className="text-stone-600 text-sm">Built by Tim Vandehey and Emily Liao.</p>
        </div>
      </footer>
    </div>
  );
}

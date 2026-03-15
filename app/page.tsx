import Link from "next/link";
import {
  BookOpen,
  Star,
  TrendingUp,
  Lightbulb,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const FEATURES = [
  {
    icon: BarChart3,
    title: "The variables publishers actually use",
    description:
      "Platform, manuscript quality, concept uniqueness, commercial potential, timeliness, and whether you are the only person who could have written this book. These are the real inputs. Most authors never know to ask about them.",
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
  "A dashboard to track your score as you improve",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-0 min-h-[560px]">
            {/* Text */}
            <div className="flex flex-col justify-center py-20 pr-0 md:pr-16">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-stone-400 mb-8">
                Built by publishing insiders for aspiring authors
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-stone-900 mb-7 leading-[1.1]">
                Do you know what it actually takes to get a nonfiction book deal?
              </h1>
              <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-lg">
                Most nonfiction authors can feel when something is wrong with their
                submission but cannot name it. DealScore gives you the framework
                agents and editors use, and tells you exactly where you stand on
                each variable.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-700 text-white font-medium text-base transition-colors group"
                >
                  Take the Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              <p className="mt-5 text-sm text-stone-400">
                5 minutes. 20 questions. For nonfiction authors at any stage.
              </p>
            </div>

            {/* Image */}
            <div className="hidden md:block relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85&auto=format&fit=crop"
                alt="Books on shelves"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
            </div>
          </div>
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
              <div
                key={item.label}
                className="bg-white p-4 text-center"
              >
                <div
                  className="text-xs font-bold mb-1.5 font-serif"
                  style={{ color: item.color }}
                >
                  {item.range}
                </div>
                <div className="text-xs text-stone-500 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-5">
              The knowledge gap is the problem
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              Authors can ask anyone whether they have a chance at a traditional deal.
              The problem is they do not know which variables to assess in the first place.
              DealScore gives you the same framework publishing professionals use, and
              points you toward the right path, whether that is traditional, hybrid, or self-publishing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="border-t border-stone-200 pt-6"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-stone-400" />
                </div>
                <h3 className="font-serif font-bold text-stone-900 mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
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
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-5">
                Know where you stand before you query
              </h2>
              <p className="text-stone-500 mb-10 leading-relaxed">
                20 questions. A score out of 100. A breakdown showing exactly
                which variables are holding you back and which publishing
                path makes sense for your book right now.
              </p>
              <ul className="space-y-4">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm">{item}</span>
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
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span className="text-xs font-medium text-stone-300 tracking-wide">Strong Candidate</span>
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
                        className="h-px bg-stone-300"
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

      {/* Editorial image break */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80&auto=format&fit=crop"
          alt="A library reading room"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="relative h-full flex items-center justify-center px-4">
          <p className="font-serif text-white text-2xl sm:text-3xl font-bold text-center max-w-2xl leading-tight">
            Most authors query too early, or chase the wrong path.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-5">
            Ready to find out where you stand?
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed">
            Five minutes and 20 questions will tell you where you actually stand,
            which variables to address, and which publishing route makes sense
            for your nonfiction book right now.
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
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-stone-500" />
            <span className="font-serif font-bold text-white text-lg tracking-tight">
              Deal<span className="text-stone-500">Score</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-stone-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/assessment" className="hover:text-white transition-colors">Assessment</Link>
            <Link href="/tactics" className="hover:text-white transition-colors">Tactics</Link>
          </div>
          <p className="text-stone-600 text-sm">
            Built by Tim Vandehey and Emily Liao.
          </p>
        </div>
      </footer>
    </div>
  );
}

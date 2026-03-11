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
    title: "5-Category Assessment",
    description:
      "Get scored across Platform, Manuscript Quality, Concept Uniqueness, Commercial Potential, and Timeliness — with Platform weighted for maximum accuracy.",
  },
  {
    icon: Star,
    title: "Your DealScore",
    description:
      "See exactly where you fall on the readiness spectrum from 'Just Getting Started' to 'Deal-Ready' — with full category breakdown.",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Personal Advice",
    description:
      "Claude analyzes your specific score breakdown and generates tailored, genre-specific recommendations you won't find in any generic guide.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Save your results, retake the assessment as you improve, and watch your score climb over time with a visual progress dashboard.",
  },
];

const SPECTRUM_PREVIEW = [
  { range: "0–20", label: "Just Getting Started", color: "#ef4444" },
  { range: "21–40", label: "Early Explorer", color: "#f97316" },
  { range: "41–60", label: "Rising Contender", color: "#eab308" },
  { range: "61–75", label: "Strong Candidate", color: "#84cc16" },
  { range: "76–88", label: "Near Deal-Ready", color: "#22c55e" },
  { range: "89–100", label: "Deal-Ready", color: "#10b981" },
];

const WHAT_YOU_GET = [
  "Your DealScore out of 100",
  "Breakdown across 5 key categories",
  "Where you fall on the readiness spectrum",
  "AI-generated personalized action plan",
  "Curated tactics matched to your weaknesses",
  "Progress tracking over multiple assessments",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-24 px-4 sm:px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2e1065 0%, #4c1d95 35%, #6d28d9 65%, #7c3aed 100%)",
        }}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white/90 font-medium">
              For Aspiring Authors Pursuing Traditional Publishing
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            What Are Your Real Odds of a{" "}
            <span className="text-gold-400">Traditional Book Deal?</span>
          </h1>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            The DealScore assessment measures the five factors that matter most
            to publishers — and gives you a personalized roadmap for improving
            your odds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all group"
            >
              Get My DealScore Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl text-lg transition-all"
            >
              View My Dashboard
            </Link>
          </div>

          <p className="mt-5 text-sm text-white/50">
            Takes 5 minutes · No account required
          </p>
        </div>
      </section>

      {/* Readiness Spectrum Preview */}
      <section className="py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
            The DealScore Readiness Spectrum
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SPECTRUM_PREVIEW.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-3 text-center border"
                style={{
                  borderColor: item.color + "40",
                  backgroundColor: item.color + "0d",
                }}
              >
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.range}
                </div>
                <div className="text-xs font-medium text-slate-700 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything You Need to Level Up Your Readiness
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              DealScore combines a rigorous assessment framework with AI-powered
              coaching to give you a clear picture and a concrete path forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Your Complete Readiness Picture
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                In just 5 minutes, you&apos;ll have a clear, honest assessment
                of where you stand — and a personalized plan to move the
                needle.
              </p>
              <ul className="space-y-3">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock score card */}
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl p-8 text-white shadow-2xl">
              <p className="text-white/60 text-sm font-medium mb-1 uppercase tracking-wide">
                Your DealScore
              </p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-7xl font-extrabold text-gold-400">
                  72
                </span>
                <span className="text-2xl text-white/40 mb-3">/100</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium">Strong Candidate</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Platform", score: 45, bar: "#3b82f6" },
                  { name: "Manuscript", score: 80, bar: "#8b5cf6" },
                  { name: "Uniqueness", score: 75, bar: "#f43f5e" },
                  { name: "Commercial", score: 85, bar: "#f59e0b" },
                  { name: "Timeliness", score: 70, bar: "#14b8a6" },
                ].map((cat) => (
                  <div key={cat.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/70">{cat.name}</span>
                      <span className="font-bold">{cat.score}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${cat.score}%`,
                          backgroundColor: cat.bar,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-4 sm:px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #7c3aed 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Know Where You Stand?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Stop guessing. Get your DealScore in 5 minutes and leave with a
            clear, personalized action plan.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl text-xl shadow-xl hover:shadow-2xl transition-all group"
          >
            Start the Assessment
            <ArrowRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-brand-400" />
          <span className="font-bold text-white">
            Deal<span className="text-brand-400">Score</span>
          </span>
        </div>
        <p className="text-slate-500 text-sm">
          Helping aspiring authors understand and improve their path to traditional publishing.
        </p>
      </footer>
    </div>
  );
}

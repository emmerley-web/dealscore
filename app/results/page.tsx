"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BookmarkPlus,
  RotateCcw,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Loader2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import { AssessmentResult, getSpectrumLevel } from "@/lib/types";
import { getPendingResult, saveResult, getLatestResult } from "@/lib/storage";
import ScoreSpectrum from "@/components/ScoreSpectrum";
import CategoryBreakdown from "@/components/CategoryBreakdown";
import { getWeakestCategories } from "@/lib/scoring";

type PublicationPath = {
  id: "traditional" | "hybrid" | "self";
  label: string;
  fit: "strong" | "possible" | "unlikely";
  summary: string;
  realities: string[];
  examples: string;
};

function getPublicationPaths(score: number, genre: string): PublicationPath[] {
  const traditionalFit: PublicationPath["fit"] =
    score >= 75 ? "strong" : score >= 55 ? "possible" : "unlikely";

  const hybridFit: PublicationPath["fit"] =
    score >= 35 && score < 75 ? "strong" : score >= 75 ? "possible" : "possible";

  return [
    {
      id: "traditional",
      label: "Traditional (Big Five / Major Publisher)",
      fit: traditionalFit,
      summary:
        score >= 75
          ? "Your score puts you in contention. The remaining gaps in your breakdown are worth addressing before you query."
          : score >= 55
          ? "Possible, but you'll face significant competition. Publishers will want to see stronger numbers on your weakest variables before committing."
          : "Unlikely at this stage. Platform, commercial hook, and manuscript readiness aren't yet where they need to be.",
      realities: [
        "Requires a literary agent before any publisher will read your work",
        "Agent acquisition alone can take 6-18 months of querying",
        "Publisher controls cover, title, release date, and marketing budget",
        "Advances are real but modest for debut authors; royalties take years to arrive",
        "Building platform from zero to Big Five deal realistically takes years and significant investment",
      ],
      examples: "Penguin Random House, HarperCollins, Simon & Schuster, Hachette, Macmillan",
    },
    {
      id: "hybrid",
      label: "Hybrid Publishing",
      fit: hybridFit,
      summary:
        "Hybrid publishers offer professional production, real distribution, and credibility, without requiring the platform a Big Five deal demands. You share costs but retain far more control. For business authors and memoirists with modest platforms, this is often the most realistic serious path.",
      realities: [
        "Author shares production costs with the publisher",
        "Professional editing, design, and distribution included",
        "Books appear in major retail channels and are taken seriously by press",
        "You retain more rights and higher royalty rates than traditional deals",
        "Quality varies widely. Vet any hybrid publisher carefully.",
      ],
      examples: "Amplify, Greenleaf Book Group, She Writes Press, Lioncrest, Disruption Books",
    },
    {
      id: "self",
      label: "Self-Publishing",
      fit: "possible",
      summary:
        "Full control, full cost, full marketing responsibility. The right choice if you have an existing audience to sell to directly, need to move quickly, or are testing a concept before pursuing other routes. The quality ceiling is as high as you make it, but distribution and discoverability require real work.",
      realities: [
        "No gatekeeping. You publish when you're ready.",
        "All production costs are yours: editing, design, formatting, distribution",
        "No advance, but you keep the majority of revenue",
        "Discoverability requires active marketing; books do not sell themselves",
        "Works best if you already have an audience or a specific community to sell into",
      ],
      examples: "Amazon KDP, IngramSpark, Draft2Digital",
    },
  ];
}

const FIT_CONFIG = {
  strong: { label: "Good fit", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  possible: { label: "Worth considering", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  unlikely: { label: "Unlikely right now", color: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
};

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Try pending result first (just completed), then fall back to last saved
    const r = getPendingResult() || getLatestResult();
    if (!r) {
      const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
      window.location.href = base + "/assessment/";
      return;
    }
    setResult(r);
  }, [router]);

  function handleSave() {
    if (!result) return;
    saveResult(result);
    setSaved(true);
  }

  if (!result) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-stone-600" />
      </div>
    );
  }

  const level = getSpectrumLevel(result.pitchScore);
  const weakest = getWeakestCategories(result, 2);
  const paths = getPublicationPaths(result.pitchScore, result.genre);

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Score Hero */}
        <div className="bg-stone-900 p-6 sm:p-8 text-center text-white">
          <p className="text-stone-400 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
            Your PitchMark Score
          </p>
          <div className="flex items-end justify-center gap-2 mb-3">
            <span className="font-serif text-7xl sm:text-8xl font-bold leading-none text-white">
              {result.pitchScore}
            </span>
            <span className="text-2xl sm:text-3xl text-stone-600 mb-2 sm:mb-3">/100</span>
          </div>
          <div className="inline-flex items-center gap-2 border border-stone-700 px-4 py-1.5 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
            <span className="text-sm font-medium text-stone-300 tracking-wide">{level.label}</span>
          </div>
          <p className="text-stone-400 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            {level.description}
          </p>
          <div className="mt-4 text-sm text-stone-500">
            {result.genre}
          </div>
        </div>

        {/* Consult CTA */}
        <Link
          href="/consult"
          className="flex items-center justify-between gap-4 bg-gold-400/10 border border-gold-400/30 rounded-2xl px-5 py-4 hover:bg-gold-400/20 transition-colors group"
        >
          <div>
            <p className="font-semibold text-stone-900 text-sm">Ready to take the next step?</p>
            <p className="text-stone-500 text-xs mt-0.5">Get a personal analysis from Tim and Emily.</p>
          </div>
          <ArrowRight className="w-4 h-4 text-stone-500 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Spectrum */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="font-serif text-lg font-bold text-stone-900 mb-4">
            Where you fall on the spectrum
          </h2>
          <ScoreSpectrum score={result.pitchScore} />
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <h2 className="font-serif text-lg font-bold text-stone-900 mb-5">Category breakdown</h2>
          <CategoryBreakdown categoryScores={result.categoryScores} showDescriptions={false} />
        </div>

        {/* Weakest Areas */}
        {weakest.length > 0 && (
          <div className="bg-stone-100 border border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-stone-600" />
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Where to focus first
              </h2>
            </div>
            <p className="text-sm text-stone-600 mb-3">
              These two variables have the most room for improvement and will
              move your score the most.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {weakest.map((cat) => (
                <div
                  key={cat.key}
                  className="bg-white rounded-xl p-4 border border-stone-200"
                >
                  <div className="font-semibold text-stone-900 mb-1">
                    {cat.name}
                  </div>
                  <div className="text-2xl font-bold text-stone-700">
                    {Math.round(cat.score)}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publication Paths */}
        <div>
          <h2 className="font-serif text-xl font-bold text-stone-900 mb-1">
            Which publishing path fits you right now
          </h2>
          <p className="text-sm text-stone-500 mb-5">
            Traditional publishing isn&rsquo;t the only route, and for many authors
            at many stages it&rsquo;s not the right one. Here&rsquo;s an honest assessment of
            all three paths based on your score.
          </p>
          <div className="space-y-4">
            {paths.map((path) => {
              const fit = FIT_CONFIG[path.fit];
              return (
                <div
                  key={path.id}
                  className={`bg-white rounded-2xl border p-6 shadow-sm ${
                    path.fit === "strong" ? "border-stone-300" : "border-stone-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="font-bold text-stone-900 leading-snug">{path.label}</h3>
                    <span
                      className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${fit.color} ${fit.bg} ${fit.border}`}
                    >
                      {fit.label}
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed mb-4">
                    {path.summary}
                  </p>
                  <div className="space-y-1.5">
                    {path.realities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-3">
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-700">Important:</strong> There are no universal rules in publishing.
            The right acquisitions editor, a timely cultural moment, an agent who connects with your
            specific voice: these factors are real and outside any scoring tool&apos;s ability to
            predict. PitchMark gives you a structured framework for understanding where you
            stand, not a definitive verdict. Use it as a starting point, not an endpoint.
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong className="text-stone-700">A note on scores:</strong> A high PitchMark doesn&rsquo;t
            guarantee a book deal. It means you&rsquo;re well-positioned on the variables that
            consistently matter to agents and publishers. Publishing involves subjectivity,
            timing, and factors no framework can fully account for. Use your score to
            understand your strengths and gaps, not as a promise of any particular outcome.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="space-y-3">
          <Link
            href="/tactics"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-base rounded-xl transition-all group"
          >
            <Lightbulb className="w-5 h-5" />
            Next: Tactical Recommendations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleSave}
              disabled={saved}
              className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                saved
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-700"
              }`}
            >
              {saved ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Saved
                </>
              ) : (
                <>
                  <BookmarkPlus className="w-4 h-4" />
                  Save Results
                </>
              )}
            </button>

            <Link
              href="/assessment"
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-300 text-stone-600 font-semibold text-sm rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Retake
            </Link>
          </div>
        </div>

        {/* Next steps */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
          <p className="text-sm font-semibold text-stone-900 mb-3">Useful next steps</p>
          <div className="space-y-2">
            {[
              { label: "Browse the Tactics library for your weakest areas", href: "/tactics", internal: true },
              { label: "Search for literary agents at QueryTracker", href: "https://querytracker.net", internal: false },
              { label: "Research hybrid publishers at IBPA's member directory", href: "https://www.ibpa-online.org", internal: false },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.internal ? undefined : "_blank"}
                rel={item.internal ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 font-medium transition-colors"
              >
                {item.internal ? (
                  <Lightbulb className="w-3.5 h-3.5 flex-shrink-0" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                )}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

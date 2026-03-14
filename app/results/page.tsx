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
  AlertTriangle,
} from "lucide-react";
import { AssessmentResult, getSpectrumLevel } from "@/lib/types";
import { getPendingResult, saveResult } from "@/lib/storage";
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
  const isMemoirOrNarrative =
    genre === "Memoir / Personal Essay" || genre === "Narrative Nonfiction";

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
          ? "Possible, but you will face significant competition. Publishers will want to see stronger numbers on your weakest variables before committing."
          : isMemoirOrNarrative
          ? "Memoir and narrative nonfiction are among the hardest categories to place traditionally unless you have an existing platform, celebrity profile, or a story of truly singular urgency. Your score suggests traditional is not the right path right now."
          : "Unlikely at this stage. The variables that matter most to a Big Five publisher — platform, commercial hook, manuscript readiness — are not yet where they need to be.",
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
        "Hybrid publishers offer professional production, real distribution, and credibility — without requiring the platform a Big Five deal demands. You share costs but retain far more control. For business authors and memoirists with modest platforms, this is often the most realistic serious path.",
      realities: [
        "Author shares production costs (typically $5,000-$25,000 depending on publisher)",
        "Professional editing, design, and distribution included",
        "Books appear in major retail channels and are taken seriously by press",
        "You retain more rights and higher royalty rates than traditional deals",
        "Quality varies widely — vet any hybrid publisher carefully",
      ],
      examples: "Amplify, Greenleaf Book Group, She Writes Press, Lioncrest, Disruption Books",
    },
    {
      id: "self",
      label: "Self-Publishing",
      fit: "possible",
      summary:
        "Full control, full cost, full marketing responsibility. The right choice if you have an existing audience to sell to directly, need to move quickly, or are testing a concept before pursuing other routes. The quality ceiling is as high as you make it — but distribution and discoverability require real work.",
      realities: [
        "No gatekeeping — you publish when you are ready",
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
    const r = getPendingResult();
    if (!r) {
      router.push("/assessment");
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
        <Loader2 className="w-8 h-8 animate-spin text-brand-500" />
      </div>
    );
  }

  const level = getSpectrumLevel(result.dealScore);
  const weakest = getWeakestCategories(result, 2);
  const paths = getPublicationPaths(result.dealScore, result.genre);
  const isMemoirOrNarrative =
    result.genre === "Memoir / Personal Essay" || result.genre === "Narrative Nonfiction";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Score Hero */}
        <div
          className="rounded-2xl p-8 text-center shadow-xl text-white"
          style={{
            background:
              "linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #7c3aed 100%)",
          }}
        >
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
            Your DealScore
          </p>
          <div className="flex items-end justify-center gap-2 mb-2">
            <span
              className="text-8xl font-extrabold leading-none"
              style={{ color: "#fbbf24" }}
            >
              {result.dealScore}
            </span>
            <span className="text-3xl text-white/40 mb-3">/100</span>
          </div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-2 font-semibold text-sm"
            style={{ backgroundColor: level.color + "30", color: level.color }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: level.color }}
              aria-hidden="true"
            />
            {level.label}
          </div>
          <p className="text-white/70 text-sm max-w-lg mx-auto mt-2">
            {level.description}
          </p>
          <div className="mt-4 text-xs text-white/40">
            Genre: {result.genre}
          </div>
        </div>

        {/* Memoir warning */}
        {isMemoirOrNarrative && (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">A note on memoir and narrative nonfiction</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                These are among the hardest categories to place with a traditional publisher.
                Unless you are already a public figure, have a very large platform, or have a story
                of truly singular and urgent relevance — think Aron Ralston level — the bar is
                extremely high. That does not mean your story should not be published. It means
                hybrid or self-publishing is often the more realistic and faster path to readers.
              </p>
            </div>
          </div>
        )}

        {/* Spectrum */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4">
            Where you fall on the spectrum
          </h2>
          <ScoreSpectrum score={result.dealScore} />
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-1">Category breakdown</h2>
          <p className="text-sm text-slate-500 mb-5">
            Platform carries 20% more weight in the final score. But a genuinely
            irreplaceable author position can offset a thin platform — your
            uniqueness score matters more than it might appear.
          </p>
          <CategoryBreakdown categoryScores={result.categoryScores} />
        </div>

        {/* Weakest Areas */}
        {weakest.length > 0 && (
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-slate-600" />
              <h2 className="font-bold text-slate-900">
                Where to focus first
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              These two variables have the most room for improvement and will
              move your score the most.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {weakest.map((cat) => (
                <div
                  key={cat.key}
                  className="bg-white rounded-xl p-4 border border-slate-200"
                >
                  <div className="font-semibold text-slate-900 mb-1">
                    {cat.name}
                  </div>
                  <div className="text-2xl font-bold text-slate-700">
                    {Math.round(cat.score)}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publication Paths */}
        <div>
          <h2 className="font-bold text-slate-900 mb-1 text-lg">
            Which publishing path fits you right now
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Traditional publishing is not the only route — and for many authors
            at many stages, it is not the right one. Here is an honest assessment
            of all three paths based on your score.
          </p>
          <div className="space-y-4">
            {paths.map((path) => {
              const fit = FIT_CONFIG[path.fit];
              return (
                <div
                  key={path.id}
                  className={`bg-white rounded-2xl border p-6 shadow-sm ${
                    path.fit === "strong" ? "border-slate-300" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-slate-900">{path.label}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${fit.color} ${fit.bg} ${fit.border}`}
                    >
                      {fit.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {path.summary}
                  </p>
                  <div className="space-y-1.5 mb-3">
                    {path.realities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        {r}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 italic">{path.examples}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Important:</strong> There are no universal rules in publishing.
            The right acquisitions editor, a timely cultural moment, an agent who loves your
            specific voice — these factors are real and outside any scoring tool's ability to
            predict. DealScore gives you a structured framework for understanding where you
            stand, not a definitive verdict. Use it as a starting point, not an endpoint.
          </p>
        </div>

        {/* Actions */}
        <div className="grid sm:grid-cols-3 gap-4">
          <button
            onClick={handleSave}
            disabled={saved}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
              saved
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-brand-500 hover:bg-brand-600 text-white shadow-md hover:shadow-lg"
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
            href="/tactics"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-700 font-semibold text-sm rounded-xl transition-all"
          >
            <Lightbulb className="w-4 h-4" />
            View Tactics
          </Link>

          <Link
            href="/assessment"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 font-semibold text-sm rounded-xl transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Retake
          </Link>
        </div>

        {/* Next steps */}
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5">
          <p className="text-sm font-semibold text-brand-900 mb-3">Useful next steps</p>
          <div className="space-y-2">
            {[
              { label: "Browse the Tactics library for your weakest areas", href: "/tactics", internal: true },
              { label: "Search for literary agents at QueryTracker", href: "https://querytracker.net", internal: false },
              { label: "Research hybrid publishers at IBPA's member directory", href: "https://www.ibpa-online.org", internal: false },
              { label: "Track your progress over time in My Results", href: "/dashboard", internal: true },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.internal ? undefined : "_blank"}
                rel={item.internal ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 font-medium transition-colors"
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

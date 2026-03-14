"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  BookmarkPlus,
  RotateCcw,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { AssessmentResult, getSpectrumLevel } from "@/lib/types";
import { getPendingResult, saveResult } from "@/lib/storage";
import ScoreSpectrum from "@/components/ScoreSpectrum";
import CategoryBreakdown from "@/components/CategoryBreakdown";
import { getWeakestCategories } from "@/lib/scoring";

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^#{1,3} (.+)$/gm, "<h2>$1</h2>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [saved, setSaved] = useState(false);
  const [aiText, setAiText] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const aiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r = getPendingResult();
    if (!r) {
      router.push("/assessment");
      return;
    }
    setResult(r);
  }, [router]);

  useEffect(() => {
    if (!result) return;
    fetchAIAdvice(result);
  }, [result]);

  async function fetchAIAdvice(r: AssessmentResult) {
    setAiLoading(true);
    setAiText("");
    setAiError("");

    try {
      const res = await fetch("/api/ai-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ result: r }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to generate advice");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setAiText((prev) => prev + decoder.decode(value, { stream: true }));
        if (aiRef.current) {
          aiRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      if (message.includes("ANTHROPIC_API_KEY") || message.includes("404") || message.includes("Failed to fetch")) {
        setAiError(
          "AI-powered advice needs a server with an Anthropic API key. Your scores and category breakdown are fully available above. Head to the Tactics page for curated strategies matched to your weakest areas."
        );
      } else {
        setAiError("Could not generate AI advice right now. Try again in a moment.");
      }
    } finally {
      setAiLoading(false);
    }
  }

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
            Platform carries 20% more weight in the final score because it is
            what publishers look at first.
          </p>
          <CategoryBreakdown categoryScores={result.categoryScores} />
        </div>

        {/* Weakest Areas Callout */}
        {weakest.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              <h2 className="font-bold text-amber-900">
                Your biggest opportunities
              </h2>
            </div>
            <p className="text-sm text-amber-800 mb-3">
              These two categories have the most room for improvement. Working on
              them will move your score the fastest.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {weakest.map((cat) => (
                <div
                  key={cat.key}
                  className="bg-white rounded-xl p-4 border border-amber-200"
                >
                  <div className="font-semibold text-slate-900 mb-1">
                    {cat.name}
                  </div>
                  <div className="text-2xl font-bold text-amber-600">
                    {Math.round(cat.score)}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Advice */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">
                Your personalized action plan
              </h2>
              <p className="text-xs text-slate-500">
                AI-written advice based on your specific scores and genre
              </p>
            </div>
          </div>

          {aiLoading && aiText === "" && (
            <div className="flex items-center gap-3 py-4 text-slate-500">
              <Loader2 className="w-5 h-5 animate-spin text-brand-500" />
              <span className="text-sm">
                Reading your results and writing recommendations...
              </span>
            </div>
          )}

          {aiError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              {aiError}
            </div>
          )}

          {aiText && (
            <div
              ref={aiRef}
              className="prose-advice text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `<p>${formatMarkdown(aiText)}</p>`,
              }}
            />
          )}

          {aiLoading && aiText !== "" && (
            <span className="inline-block w-1 h-4 bg-brand-500 animate-pulse ml-0.5 rounded" aria-label="Loading" />
          )}
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
      </div>
    </div>
  );
}

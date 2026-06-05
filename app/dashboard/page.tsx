"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Calendar,
  BarChart3,
  RotateCcw,
  Trash2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { AssessmentResult, getSpectrumLevel, CATEGORY_DISPLAY_NAMES, CategoryKey } from "@/lib/types";
import { getSavedResults, deleteResult } from "@/lib/storage";
import CategoryBreakdown from "@/components/CategoryBreakdown";
import ProgressChart from "@/components/ProgressChart";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function ScoreBadge({ score }: { score: number }) {
  const level = getSpectrumLevel(score);
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
      style={{
        color: level.color,
        backgroundColor: level.bgColor,
        borderColor: level.color + "40",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: level.color }}
        aria-hidden="true"
      />
      {level.label}
    </span>
  );
}

export default function DashboardPage() {
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [selected, setSelected] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const r = getSavedResults();
    setResults(r);
    if (r.length > 0) setSelected(r[0]);
  }, []);

  function handleDelete(id: string) {
    if (!confirm("Remove this assessment from your history?")) return;
    deleteResult(id);
    const updated = results.filter((r) => r.id !== id);
    setResults(updated);
    if (selected?.id === id) setSelected(updated[0] || null);
  }

  if (results.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-stone-500" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900 mb-3">
            Nothing saved yet
          </h1>
          <p className="text-stone-500 mb-6">
            Take the assessment and save your results to start tracking how
            your score changes over time.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-700 text-white font-semibold rounded-xl transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Take the Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const latest = results[0];
  const previous = results[1];
  const improvement =
    previous ? latest.pitchScore - previous.pitchScore : null;

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-stone-900">
              My Results
            </h1>
            <p className="text-stone-500 mt-1">
              {results.length} assessment{results.length !== 1 ? "s" : ""} saved
            </p>
          </div>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Assessment
          </Link>
        </div>

        {/* Latest Score Summary */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div
            className="sm:col-span-1 rounded-2xl p-6 text-white shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, #1c1b16 0%, #44403c 50%, #57534e 100%)",
            }}
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              Latest Score
            </p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-extrabold text-gold-400">
                {latest.pitchScore}
              </span>
              <span className="text-xl text-white/40 mb-1">/100</span>
            </div>
            <ScoreBadge score={latest.pitchScore} />
            <p className="text-xs text-white/50 mt-2">
              {formatDate(latest.date)}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
            <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1">
              Change
            </p>
            {improvement !== null ? (
              <div
                className={`text-4xl font-bold ${
                  improvement > 0
                    ? "text-emerald-600"
                    : improvement < 0
                    ? "text-red-500"
                    : "text-stone-400"
                }`}
              >
                {improvement > 0 ? "+" : ""}
                {improvement}
              </div>
            ) : (
              <div className="text-stone-400 text-sm mt-2">
                Take a second assessment to see your progress
              </div>
            )}
            {improvement !== null && (
              <p className="text-xs text-stone-500 mt-1">
                since previous assessment
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
            <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1">
              Total Assessments
            </p>
            <div className="text-4xl font-bold text-stone-900">
              {results.length}
            </div>
            <p className="text-xs text-stone-500 mt-1">
              First: {formatDate(results[results.length - 1].date)}
            </p>
          </div>
        </div>

        {/* Progress Chart */}
        {results.length > 1 && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5 text-stone-600" />
              <h2 className="font-bold text-stone-900">Score over time</h2>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              The dashed line marks 75 (Fifty-Fifty Chance).
            </p>
            <ProgressChart results={results} />
          </div>
        )}

        {/* Assessment History with Detail Panel */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* History list */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-bold text-stone-900 mb-3">
              History
            </h2>
            {results.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelected(r)}
                className={`w-full text-left rounded-xl border p-4 transition-all ${
                  selected?.id === r.id
                    ? "bg-stone-50 border-stone-300 shadow-sm"
                    : "bg-white border-stone-200 hover:border-stone-200 hover:bg-stone-50"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-stone-900 text-lg">
                      {r.pitchScore}/100
                    </div>
                    <div className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {formatDate(r.date)}
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      {r.genre}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <ScoreBadge score={r.pitchScore} />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(r.id);
                      }}
                      className="text-stone-300 hover:text-red-400 transition-colors"
                      aria-label={`Delete assessment from ${formatDate(r.date)}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selected && (
            <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-stone-900">
                  Detail
                </h2>
                <span className="text-xs text-stone-400">
                  {formatDate(selected.date)}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl font-extrabold text-stone-700">
                  {selected.pitchScore}
                </span>
                <ScoreBadge score={selected.pitchScore} />
              </div>
              <CategoryBreakdown
                categoryScores={selected.categoryScores}
                showDescriptions={false}
              />
              <div className="mt-5 flex gap-3">
                <Link
                  href="/tactics"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-50 hover:bg-stone-100 text-stone-700 font-semibold text-sm rounded-xl transition-colors border border-stone-200"
                >
                  View Tactics
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Category Progress Over Time */}
        {results.length > 1 && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <h2 className="font-bold text-stone-900 mb-4">
              Category progress (latest vs. previous)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {latest.categoryScores.map((cat) => {
                const prevCat = previous?.categoryScores.find(
                  (c) => c.key === cat.key
                );
                const diff = prevCat ? cat.score - prevCat.score : null;
                return (
                  <div
                    key={cat.key}
                    className="bg-stone-50 rounded-xl p-3 text-center"
                  >
                    <div className="text-xs text-stone-500 font-medium mb-1 leading-tight">
                      {CATEGORY_DISPLAY_NAMES[cat.key as CategoryKey].split(" ").slice(0, 2).join(" ")}
                    </div>
                    <div className="text-2xl font-bold text-stone-900">
                      {Math.round(cat.score)}
                    </div>
                    {diff !== null && (
                      <div
                        className={`text-xs font-semibold mt-0.5 ${
                          diff > 0
                            ? "text-emerald-600"
                            : diff < 0
                            ? "text-red-500"
                            : "text-stone-400"
                        }`}
                      >
                        {diff > 0 ? `+${Math.round(diff)}` : Math.round(diff)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

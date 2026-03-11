"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  Zap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";
import { AssessmentResult, CATEGORY_DISPLAY_NAMES, CategoryKey } from "@/lib/types";
import { getLatestResult } from "@/lib/storage";
import { getPendingResult } from "@/lib/storage";
import {
  ALL_TACTICS,
  Tactic,
  EFFORT_LABELS,
  CATEGORY_COLORS,
} from "@/lib/tactics";
import { getWeakestCategories } from "@/lib/scoring";

const CATEGORY_ORDER: CategoryKey[] = [
  "platform",
  "manuscriptQuality",
  "conceptUniqueness",
  "conceptCommercialPotential",
  "conceptTimeliness",
];

const CATEGORY_ICONS: Record<CategoryKey, string> = {
  platform: "📣",
  manuscriptQuality: "✍️",
  conceptUniqueness: "💡",
  conceptCommercialPotential: "📈",
  conceptTimeliness: "⏱️",
};

function TacticCard({
  tactic,
  isPriority,
}: {
  tactic: Tactic;
  isPriority: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const effort = EFFORT_LABELS[tactic.effort];
  const catColor = CATEGORY_COLORS[tactic.category];

  return (
    <div
      className={clsx(
        "bg-white rounded-xl border p-5 transition-all hover:shadow-md",
        isPriority ? "border-brand-300 shadow-sm" : "border-slate-200"
      )}
    >
      {isPriority && (
        <div className="flex items-center gap-1.5 mb-3">
          <Zap className="w-3.5 h-3.5 text-brand-500" />
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
            Recommended for You
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${catColor}`}>
          {CATEGORY_ICONS[tactic.category]}{" "}
          {CATEGORY_DISPLAY_NAMES[tactic.category]}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${effort.color}`}>
          {effort.label}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium border text-slate-500 bg-slate-50 border-slate-200">
          ⏳ {tactic.timeframe}
        </span>
      </div>

      <h3 className="font-bold text-slate-900 mb-2">{tactic.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {tactic.description}
      </p>

      {/* Expandable actions */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-3.5 h-3.5" />
            Hide action steps
          </>
        ) : (
          <>
            <ChevronDown className="w-3.5 h-3.5" />
            Show action steps ({tactic.actions.length})
          </>
        )}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-2 pl-1">
          {tactic.actions.map((action, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-1 w-4 h-4 rounded-full bg-brand-100 text-brand-600 text-xs flex items-center justify-center flex-shrink-0 font-bold">
                {i + 1}
              </span>
              {action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TacticsPage() {
  const [latestResult, setLatestResult] = useState<AssessmentResult | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");

  useEffect(() => {
    // Try pending first, then saved
    const r = getPendingResult() || getLatestResult();
    setLatestResult(r);
  }, []);

  const weakestKeys: CategoryKey[] = latestResult
    ? getWeakestCategories(latestResult, 2).map((c) => c.key)
    : [];

  // Filter tactics by selected category
  const filteredTactics =
    activeCategory === "all"
      ? ALL_TACTICS
      : ALL_TACTICS.filter((t) => t.category === activeCategory);

  // Sort: priority (weakest) first, then rest
  const sorted = [...filteredTactics].sort((a, b) => {
    const aP = weakestKeys.includes(a.category) ? 0 : 1;
    const bP = weakestKeys.includes(b.category) ? 0 : 1;
    return aP - bP;
  });

  const priorityTactics = sorted.filter((t) =>
    weakestKeys.includes(t.category)
  );
  const otherTactics = sorted.filter(
    (t) => !weakestKeys.includes(t.category)
  );

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
            Tactics Library
          </h1>
          <p className="text-slate-500">
            {latestResult
              ? `Personalized for your latest DealScore (${latestResult.dealScore}/100 · ${latestResult.genre}). Your highest-impact tactics are highlighted first.`
              : "Actionable strategies for improving every dimension of your book deal readiness."}
          </p>
        </div>

        {/* No result banner */}
        {!latestResult && (
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-brand-600 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-900">
                  Get personalized recommendations
                </p>
                <p className="text-sm text-brand-700">
                  Take the assessment to see which tactics will move your score
                  the most.
                </p>
              </div>
            </div>
            <Link
              href="/assessment"
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Take Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Your weakest areas banner */}
        {latestResult && weakestKeys.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="font-bold text-amber-900 text-sm">
                Focus Zones — Your Lowest Scoring Areas
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {weakestKeys.map((k) => {
                const cat = latestResult.categoryScores.find(
                  (c) => c.key === k
                );
                return (
                  <button
                    key={k}
                    onClick={() => setActiveCategory(k)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 rounded-full text-sm font-medium text-amber-800 hover:bg-amber-100 transition-colors"
                  >
                    {CATEGORY_ICONS[k]}{" "}
                    {CATEGORY_DISPLAY_NAMES[k]}
                    <span className="ml-1 text-xs text-amber-600 font-bold">
                      {cat ? Math.round(cat.score) : "—"}/100
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-3 py-1.5 rounded-full text-sm font-medium border transition-all",
              activeCategory === "all"
                ? "bg-brand-500 text-white border-brand-500"
                : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600"
            )}
          >
            All Tactics ({ALL_TACTICS.length})
          </button>
          {CATEGORY_ORDER.map((cat) => {
            const count = ALL_TACTICS.filter((t) => t.category === cat).length;
            const isWeak = weakestKeys.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-3 py-1.5 rounded-full text-sm font-medium border transition-all",
                  activeCategory === cat
                    ? "bg-brand-500 text-white border-brand-500"
                    : isWeak
                    ? "bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100"
                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600"
                )}
              >
                {CATEGORY_ICONS[cat]}{" "}
                {CATEGORY_DISPLAY_NAMES[cat].split(" ")[0]}
                {isWeak && " ⚡"} ({count})
              </button>
            );
          })}
        </div>

        {/* Tactics grid */}
        {latestResult && weakestKeys.length > 0 && priorityTactics.length > 0 && activeCategory === "all" && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-brand-500" />
              <h2 className="font-bold text-slate-900">
                Highest Impact for You ({priorityTactics.length} tactics)
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {priorityTactics.map((t) => (
                <TacticCard key={t.id} tactic={t} isPriority />
              ))}
            </div>
          </div>
        )}

        {/* Other / all tactics */}
        <div>
          {activeCategory === "all" && latestResult && otherTactics.length > 0 && (
            <h2 className="font-bold text-slate-900 mb-4">
              All Other Tactics ({otherTactics.length})
            </h2>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            {(activeCategory === "all" ? otherTactics : filteredTactics).map(
              (t) => (
                <TacticCard
                  key={t.id}
                  tactic={t}
                  isPriority={
                    activeCategory !== "all" && weakestKeys.includes(t.category)
                  }
                />
              )
            )}
          </div>
        </div>

        {filteredTactics.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <Lightbulb className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p>No tactics found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

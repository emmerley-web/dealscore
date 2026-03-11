"use client";

import { CategoryScore, CATEGORY_DESCRIPTIONS } from "@/lib/types";

interface CategoryBreakdownProps {
  categoryScores: CategoryScore[];
  showDescriptions?: boolean;
}

const categoryColors = [
  { bar: "#3b82f6", bg: "#eff6ff", text: "#1d4ed8" },   // blue – platform
  { bar: "#8b5cf6", bg: "#f5f3ff", text: "#5b21b6" },   // purple – manuscript
  { bar: "#f43f5e", bg: "#fff1f2", text: "#be123c" },   // rose – uniqueness
  { bar: "#f59e0b", bg: "#fffbeb", text: "#b45309" },   // amber – commercial
  { bar: "#14b8a6", bg: "#f0fdfa", text: "#0f766e" },   // teal – timeliness
];

function scoreColor(score: number): string {
  if (score >= 75) return "#10b981";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
}

export default function CategoryBreakdown({
  categoryScores,
  showDescriptions = true,
}: CategoryBreakdownProps) {
  return (
    <div className="space-y-4">
      {categoryScores.map((cat, i) => {
        const c = categoryColors[i % categoryColors.length];
        const isWeighted = cat.key === "platform";
        return (
          <div key={cat.key} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  {cat.name}
                </span>
                {isWeighted && (
                  <span className="text-xs px-1.5 py-0.5 bg-brand-50 text-brand-600 border border-brand-200 rounded-full font-medium">
                    +20% weight
                  </span>
                )}
              </div>
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: scoreColor(cat.score) }}
              >
                {Math.round(cat.score)}/100
              </span>
            </div>

            {/* Bar */}
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${cat.score}%`,
                  backgroundColor: c.bar,
                }}
              />
            </div>

            {showDescriptions && (
              <p className="mt-1 text-xs text-slate-500">
                {CATEGORY_DESCRIPTIONS[cat.key]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

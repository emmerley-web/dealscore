"use client";

import { CategoryScore, CATEGORY_DESCRIPTIONS } from "@/lib/types";

interface CategoryBreakdownProps {
  categoryScores: CategoryScore[];
  showDescriptions?: boolean;
}

const categoryColors = [
  { bar: "#44403c", bg: "#f5f5f4", text: "#1c1917" },   // stone-dark – platform
  { bar: "#c4a030", bg: "#fefce8", text: "#92400e" },   // gold – manuscript
  { bar: "#78716c", bg: "#f5f5f4", text: "#44403c" },   // stone-mid – uniqueness
  { bar: "#a8861a", bg: "#fefce8", text: "#78350f" },   // gold-dark – commercial
  { bar: "#292524", bg: "#f5f5f4", text: "#1c1917" },   // stone-deep – timeliness
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
                <span className="text-sm font-semibold text-stone-800">
                  {cat.name}
                </span>
                {isWeighted && (
                  <span className="text-xs px-1.5 py-0.5 bg-stone-50 text-stone-700 border border-stone-200 rounded-full font-medium">
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
            <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${cat.score}%`,
                  backgroundColor: c.bar,
                }}
              />
            </div>

            {showDescriptions && (
              <p className="mt-1 text-xs text-stone-500">
                {CATEGORY_DESCRIPTIONS[cat.key]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

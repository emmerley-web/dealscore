"use client";

import { CategoryScore, CATEGORY_DESCRIPTIONS } from "@/lib/types";

interface CategoryBreakdownProps {
  categoryScores: CategoryScore[];
  showDescriptions?: boolean;
}

// Brand-appropriate: gold for strong, mid-stone for average, light stone for weak
function scoreColor(score: number): string {
  if (score >= 75) return "#c4a030"; // gold-400 — strong
  if (score >= 50) return "#57534e"; // stone-600 — mid
  return "#a8a29e";                  // stone-400 — needs work
}

export default function CategoryBreakdown({
  categoryScores,
  showDescriptions = true,
}: CategoryBreakdownProps) {
  return (
    <div className="space-y-5">
      {categoryScores.map((cat) => {
        const isWeighted = cat.key === "platform";
        return (
          <div key={cat.key}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm font-semibold text-stone-800 truncate">
                  {cat.name}
                </span>
                {isWeighted && (
                  <span className="text-xs px-1.5 py-0.5 bg-stone-50 text-stone-500 border border-stone-200 rounded-full font-medium flex-shrink-0">
                    +20% weight
                  </span>
                )}
              </div>
              <span
                className="text-sm font-bold tabular-nums flex-shrink-0 ml-3"
                style={{ color: scoreColor(cat.score) }}
              >
                {Math.round(cat.score)}/100
              </span>
            </div>

            {/* Bar */}
            <div className="h-3 bg-stone-100 rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm transition-all duration-700"
                style={{
                  width: `${cat.score}%`,
                  backgroundColor: scoreColor(cat.score),
                }}
              />
            </div>

            {showDescriptions && (
              <p className="mt-1.5 text-sm text-stone-500 leading-relaxed">
                {CATEGORY_DESCRIPTIONS[cat.key]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

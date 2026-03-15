"use client";

import { SPECTRUM_LEVELS, getSpectrumLevel } from "@/lib/types";

interface ScoreSpectrumProps {
  score: number;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ScoreSpectrum({
  score,
  showLabels = true,
  size = "md",
}: ScoreSpectrumProps) {
  const level = getSpectrumLevel(score);
  const percentage = (score / 100) * 100;

  const heights = { sm: "h-3", md: "h-5", lg: "h-7" };
  const markerSizes = { sm: "w-4 h-4 -top-0.5", md: "w-6 h-6 -top-0.5", lg: "w-8 h-8 -top-0.5" };

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex justify-between text-xs text-stone-500 mb-2 font-medium">
          <span>Just Getting Started</span>
          <span>Deal-Ready</span>
        </div>
      )}

      {/* Spectrum bar */}
      <div className={`relative w-full ${heights[size]} rounded-full overflow-visible`}>
        {/* Gradient background */}
        <div
          className={`absolute inset-0 rounded-full ${heights[size]}`}
          style={{
            background:
              "linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #84cc16 60%, #22c55e 76%, #10b981 89%, #059669 100%)",
          }}
        />

        {/* Score marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700"
          style={{ left: `${percentage}%` }}
        >
          <div
            className={`${markerSizes[size]} rounded-full border-2 border-white shadow-lg`}
            style={{ backgroundColor: level.color }}
          />
        </div>
      </div>

      {/* Level labels below */}
      {showLabels && (
        <div className="mt-4 flex flex-wrap gap-1 justify-center">
          {SPECTRUM_LEVELS.map((lvl) => (
            <span
              key={lvl.label}
              className="px-2 py-0.5 rounded-full text-xs font-medium border transition-all"
              style={
                lvl.label === level.label
                  ? {
                      backgroundColor: lvl.color,
                      color: "white",
                      borderColor: lvl.color,
                    }
                  : {
                      backgroundColor: lvl.bgColor,
                      color: lvl.color,
                      borderColor: lvl.color + "40",
                    }
              }
            >
              {lvl.min}–{lvl.max}: {lvl.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

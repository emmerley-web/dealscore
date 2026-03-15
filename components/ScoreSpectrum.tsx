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

  const heights = { sm: "h-2.5", md: "h-4", lg: "h-6" };
  const markerSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex justify-between text-xs text-stone-400 mb-2.5 font-medium">
          <span>Just Getting Started</span>
          <span>Deal-Ready</span>
        </div>
      )}

      {/* Spectrum bar */}
      <div className={`relative w-full ${heights[size]} rounded-sm overflow-visible`}>
        {/* Editorial gradient: light stone → warm gold → deep stone */}
        <div
          className={`absolute inset-0 rounded-sm ${heights[size]}`}
          style={{
            background:
              "linear-gradient(to right, #e7e5e4 0%, #d6d3d1 20%, #c4a030 65%, #292524 100%)",
          }}
        />

        {/* Score marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700"
          style={{ left: `${percentage}%` }}
        >
          <div
            className={`${markerSizes[size]} rounded-full border-2 border-white shadow-md bg-stone-900`}
          />
        </div>
      </div>

      {/* Tier labels — editorial segmented grid */}
      {showLabels && (
        <div className="mt-4 grid grid-cols-6 gap-px bg-stone-200 border border-stone-200">
          {SPECTRUM_LEVELS.map((lvl) => {
            const isActive = lvl.label === level.label;
            return (
              <div
                key={lvl.label}
                className={`text-center py-2 px-1 transition-colors ${
                  isActive ? "bg-stone-900" : "bg-white"
                }`}
              >
                <div
                  className={`text-[9px] font-bold leading-tight tabular-nums ${
                    isActive ? "text-white" : "text-stone-400"
                  }`}
                >
                  {lvl.min}–{lvl.max}
                </div>
                <div
                  className={`text-[8px] leading-tight mt-0.5 hidden sm:block ${
                    isActive ? "text-stone-300" : "text-stone-300"
                  }`}
                  style={{ color: isActive ? "#d6d3d1" : lvl.color }}
                >
                  {lvl.label.split(" ").slice(0, 2).join(" ")}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

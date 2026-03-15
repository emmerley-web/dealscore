"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { AssessmentResult } from "@/lib/types";

interface ProgressChartProps {
  results: AssessmentResult[];
}

function formatDate(isoString: string): string {
  const d = new Date(isoString);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl shadow-lg p-3">
        <p className="text-xs text-stone-500 mb-1">{label}</p>
        <p className="text-lg font-bold text-stone-700">
          {payload[0].value}
          <span className="text-sm font-normal text-stone-500">/100</span>
        </p>
        {payload[0].payload.label && (
          <p className="text-xs text-slate-600 mt-0.5">
            {payload[0].payload.label}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function ProgressChart({ results }: ProgressChartProps) {
  if (results.length === 0) return null;

  // Oldest first for chart
  const data = [...results]
    .reverse()
    .map((r) => ({
      date: formatDate(r.date),
      score: r.dealScore,
      label: r.label,
      genre: r.genre,
    }));

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: "#94a3b8" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: "#94a3b8" }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine y={75} stroke="#84cc16" strokeDasharray="4 4" strokeWidth={1.5} />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#7c3aed"
          strokeWidth={2.5}
          dot={{ fill: "#7c3aed", r: 5, strokeWidth: 2, stroke: "white" }}
          activeDot={{ r: 7, fill: "#7c3aed", stroke: "white", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

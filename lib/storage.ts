"use client";

import { AssessmentResult } from "./types";

const RESULTS_KEY = "dealscore_results";
const PENDING_KEY = "dealscore_pending";

export function getSavedResults(): AssessmentResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveResult(result: AssessmentResult): void {
  if (typeof window === "undefined") return;
  const existing = getSavedResults();
  // Avoid duplicates by id
  const updated = [result, ...existing.filter((r) => r.id !== result.id)];
  localStorage.setItem(RESULTS_KEY, JSON.stringify(updated));
}

export function deleteResult(id: string): void {
  if (typeof window === "undefined") return;
  const updated = getSavedResults().filter((r) => r.id !== id);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(updated));
}

export function setPendingResult(result: AssessmentResult): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PENDING_KEY, JSON.stringify(result));
}

export function getPendingResult(): AssessmentResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PENDING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearPendingResult(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PENDING_KEY);
}

export function getLatestResult(): AssessmentResult | null {
  const results = getSavedResults();
  return results.length > 0 ? results[0] : null;
}

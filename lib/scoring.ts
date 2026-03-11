import {
  CategoryKey,
  CategoryScore,
  AssessmentResult,
  CATEGORY_DISPLAY_NAMES,
  getSpectrumLevel,
} from "./types";
import { ASSESSMENT_QUESTIONS } from "./questions";

// Platform gets 20% more weight than the other four categories
const CATEGORY_WEIGHTS: Record<CategoryKey, number> = {
  platform: 1.2,
  manuscriptQuality: 1.0,
  conceptUniqueness: 1.0,
  conceptCommercialPotential: 1.0,
  conceptTimeliness: 1.0,
};

const TOTAL_WEIGHT = Object.values(CATEGORY_WEIGHTS).reduce((a, b) => a + b, 0);
// = 1.2 + 1.0 * 4 = 5.2

const CATEGORY_ORDER: CategoryKey[] = [
  "platform",
  "manuscriptQuality",
  "conceptUniqueness",
  "conceptCommercialPotential",
  "conceptTimeliness",
];

export function calculateCategoryScore(
  categoryKey: CategoryKey,
  answers: Record<string, number>
): number {
  const questions = ASSESSMENT_QUESTIONS.filter(
    (q) => q.category === categoryKey
  );
  if (questions.length === 0) return 0;

  const total = questions.reduce((sum, q) => sum + (answers[q.id] ?? 1), 0);
  // Each question: 1–5, 4 questions → raw range 4–20
  // Normalize to 0–100
  const minRaw = questions.length * 1;
  const maxRaw = questions.length * 5;
  return Math.round(((total - minRaw) / (maxRaw - minRaw)) * 100);
}

export function calculateDealScore(categoryScores: CategoryScore[]): number {
  const weightedSum = categoryScores.reduce((sum, cat) => {
    const w = CATEGORY_WEIGHTS[cat.key];
    return sum + cat.score * w;
  }, 0);
  return Math.round(weightedSum / TOTAL_WEIGHT);
}

export function buildAssessmentResult(
  answers: Record<string, number>,
  genre: string
): AssessmentResult {
  const categoryScores: CategoryScore[] = CATEGORY_ORDER.map((key) => ({
    key,
    name: CATEGORY_DISPLAY_NAMES[key],
    score: calculateCategoryScore(key, answers),
    weight: CATEGORY_WEIGHTS[key],
  }));

  const dealScore = calculateDealScore(categoryScores);
  const level = getSpectrumLevel(dealScore);

  return {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    answers,
    categoryScores,
    dealScore,
    genre,
    label: level.label,
  };
}

export function getWeakestCategories(
  result: AssessmentResult,
  count = 2
): CategoryScore[] {
  return [...result.categoryScores]
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

export function getStrongestCategories(
  result: AssessmentResult,
  count = 2
): CategoryScore[] {
  return [...result.categoryScores]
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

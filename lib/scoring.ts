import {
  CategoryKey,
  CategoryScore,
  AssessmentResult,
  CATEGORY_DISPLAY_NAMES,
  getSpectrumLevel,
} from "./types";
import { ASSESSMENT_QUESTIONS } from "./questions";

// All four categories weighted equally at 25% each
const CATEGORY_WEIGHTS: Record<CategoryKey, number> = {
  platform: 1.0,
  uniquenessAndTimeliness: 1.0,
  writing: 1.0,
  audience: 1.0,
};

const TOTAL_WEIGHT = Object.values(CATEGORY_WEIGHTS).reduce((a, b) => a + b, 0);
// = 4.0

const CATEGORY_ORDER: CategoryKey[] = [
  "platform",
  "uniquenessAndTimeliness",
  "writing",
  "audience",
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

export function calculatePitchScore(categoryScores: CategoryScore[]): number {
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

  const pitchScore = calculatePitchScore(categoryScores);
  const level = getSpectrumLevel(pitchScore);

  return {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    answers,
    categoryScores,
    pitchScore,
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

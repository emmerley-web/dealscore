export type CategoryKey =
  | "platform"
  | "manuscriptQuality"
  | "conceptUniqueness"
  | "conceptCommercialPotential"
  | "conceptTimeliness";

export interface AssessmentQuestion {
  id: string;
  category: CategoryKey;
  question: string;
  options: { value: number; label: string; description: string }[];
}

export interface CategoryScore {
  key: CategoryKey;
  name: string;
  score: number; // 0–100
  weight: number;
}

export interface AssessmentResult {
  id: string;
  date: string;
  answers: Record<string, number>;
  categoryScores: CategoryScore[];
  dealScore: number;
  genre: string;
  label: string;
}

export interface SpectrumLevel {
  min: number;
  max: number;
  label: string;
  color: string;
  bgColor: string;
  description: string;
}

export const SPECTRUM_LEVELS: SpectrumLevel[] = [
  {
    min: 0,
    max: 20,
    label: "Just Getting Started",
    color: "#ef4444",
    bgColor: "#fef2f2",
    description:
      "You're at the beginning of the journey. Focus on building foundations.",
  },
  {
    min: 21,
    max: 40,
    label: "Early Explorer",
    color: "#f97316",
    bgColor: "#fff7ed",
    description:
      "Making progress! Key areas need development before targeting publishers.",
  },
  {
    min: 41,
    max: 60,
    label: "Rising Contender",
    color: "#eab308",
    bgColor: "#fefce8",
    description:
      "Solid foundations in place. Strategic improvements will move the needle significantly.",
  },
  {
    min: 61,
    max: 75,
    label: "Strong Candidate",
    color: "#84cc16",
    bgColor: "#f7fee7",
    description:
      "Competitive for representation. Targeted refinements will sharpen your edge.",
  },
  {
    min: 76,
    max: 88,
    label: "Near Deal-Ready",
    color: "#22c55e",
    bgColor: "#f0fdf4",
    description:
      "Very attractive to publishers. Polish the remaining gaps and you're there.",
  },
  {
    min: 89,
    max: 100,
    label: "Deal-Ready",
    color: "#10b981",
    bgColor: "#ecfdf5",
    description:
      "Exceptional readiness. You have the platform, manuscript, and concept to compete at the highest level.",
  },
];

export function getSpectrumLevel(score: number): SpectrumLevel {
  return (
    SPECTRUM_LEVELS.find((l) => score >= l.min && score <= l.max) ||
    SPECTRUM_LEVELS[0]
  );
}

export const CATEGORY_DISPLAY_NAMES: Record<CategoryKey, string> = {
  platform: "Platform & Audience",
  manuscriptQuality: "Manuscript Quality",
  conceptUniqueness: "Concept Uniqueness",
  conceptCommercialPotential: "Commercial Potential",
  conceptTimeliness: "Concept Timeliness",
};

export const CATEGORY_DESCRIPTIONS: Record<CategoryKey, string> = {
  platform:
    "Your existing audience, reach, and public presence as an author.",
  manuscriptQuality:
    "The craft, development, and polish of your writing and manuscript.",
  conceptUniqueness:
    "How original, differentiated, and author-specific your book concept is.",
  conceptCommercialPotential:
    "The marketability, audience size, and commercial appeal of your book.",
  conceptTimeliness:
    "How well your concept aligns with current cultural conversations and market gaps.",
};

export const GENRES = [
  "Literary Fiction",
  "Commercial Fiction",
  "Mystery / Thriller",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Historical Fiction",
  "Narrative Nonfiction",
  "Self-Help / Personal Development",
  "Business / Finance",
  "Memoir / Personal Essay",
  "YA / Middle Grade",
  "Children's Books",
  "True Crime",
  "Humor / Satire",
  "Other",
];

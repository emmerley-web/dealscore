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
      "A traditional deal is not realistic right now. That is not a judgment — it is useful information. Most authors in this range benefit most from self-publishing or hybrid publishing while building the foundations that a traditional deal requires.",
  },
  {
    min: 21,
    max: 40,
    label: "Early Stage",
    color: "#f97316",
    bgColor: "#fff7ed",
    description:
      "Key variables need significant development before a traditional publisher will take you seriously. Hybrid publishing is a realistic path now. A 12-24 month platform and proposal strategy could change this picture considerably.",
  },
  {
    min: 41,
    max: 60,
    label: "Building Momentum",
    color: "#eab308",
    bgColor: "#fefce8",
    description:
      "You have real foundations. A traditional deal is possible but competitive. Your category breakdown will show you exactly which one or two variables are holding you back — those are where to focus your energy.",
  },
  {
    min: 61,
    max: 75,
    label: "Strong Candidate",
    color: "#84cc16",
    bgColor: "#f7fee7",
    description:
      "You are competitive for representation. Agents will take your query seriously. The difference between this and a deal often comes down to one factor — usually platform or a sharper commercial hook.",
  },
  {
    min: 76,
    max: 88,
    label: "Near Deal-Ready",
    color: "#22c55e",
    bgColor: "#f0fdf4",
    description:
      "Very attractive to publishers. The gaps are small and addressable. At this level, timing, the right agent, and the specific acquisitions editor matter as much as the manuscript itself.",
  },
  {
    min: 89,
    max: 100,
    label: "Deal-Ready",
    color: "#10b981",
    bgColor: "#ecfdf5",
    description:
      "You have the platform, manuscript, and concept to compete at the highest level. The variables outside your control — timing, editor fit, market conditions — are now the main factors.",
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
    "Your existing public reach: social following, email list, press coverage, speaking engagements, and media presence. For nonfiction, publishers look at this first. A strong concept with thin platform can sell — but the concept has to be exceptional.",
  manuscriptQuality:
    "The development and polish of your manuscript and book proposal. Nonfiction is acquired on proposal, not finished manuscript — but a weak proposal signals an unprepared author. Strong comps, a sharp overview, and sample chapters matter enormously.",
  conceptUniqueness:
    "How differentiated your book is — and critically, whether you are the only person who could have written it. 'Only you could write this' is one of the most powerful things an agent can say to an acquisitions editor.",
  conceptCommercialPotential:
    "The size of the potential readership and the strength of your commercial hook. The pitch question every editor asks is: why is this book necessary, and who is buying it? A compelling answer to both is what gets a deal.",
  conceptTimeliness:
    "Where your concept sits in the cultural moment. Timing is the hardest variable to control. The same book can go from highly sellable to a pass within two years as conversations shift and market conditions change.",
};

export const GENRES = [
  "Narrative Nonfiction",
  "Memoir / Personal Essay",
  "Self-Help / Personal Development",
  "Business / Finance",
  "Leadership / Management",
  "Health / Wellness",
  "History / Biography",
  "Politics / Current Affairs",
  "Science / Technology",
  "True Crime",
  "Humor / Satire",
  "Other Nonfiction",
];

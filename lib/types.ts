export type CategoryKey =
  | "platform"
  | "uniquenessAndTimeliness"
  | "writing"
  | "audience";

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
  pitchScore: number;
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
    color: "#a8a29e",
    bgColor: "#fafaf9",
    description:
      "The foundations for a traditional deal are not yet in place. Your category breakdown shows where to focus first. Most authors at this stage benefit from building platform and sharpening their concept before approaching agents.",
  },
  {
    min: 21,
    max: 40,
    label: "Minimal Chance of Deal",
    color: "#78716c",
    bgColor: "#f5f5f4",
    description:
      "Key variables need significant development before traditional publishing is realistic. Hybrid publishing is a viable path right now. A focused strategy on your weakest areas over 12–18 months could change this picture considerably.",
  },
  {
    min: 41,
    max: 60,
    label: "More Development Needed",
    color: "#57534e",
    bgColor: "#f5f5f4",
    description:
      "Real foundations are in place and a traditional deal is within reach — but you're not ready to query yet. Your category breakdown shows exactly which one or two variables are holding you back. Fix those, then query.",
  },
  {
    min: 61,
    max: 75,
    label: "Fifty-Fifty Chance",
    color: "#a8861a",
    bgColor: "#fefce8",
    description:
      "You are competitive for representation. Agents will take your query seriously. At this level, the difference between a request and a pass usually comes down to one variable — most often platform or the sharpness of your commercial hook.",
  },
  {
    min: 76,
    max: 88,
    label: "Near Deal-Ready",
    color: "#c4a030",
    bgColor: "#fefce8",
    description:
      "Very attractive to agents and publishers. The gaps are small and addressable. At this stage, timing, the right agent relationship, and acquisitions editor fit matter as much as any manuscript variable.",
  },
  {
    min: 89,
    max: 100,
    label: "Deal-Ready",
    color: "#292524",
    bgColor: "#f5f5f4",
    description:
      "You have the platform, writing, and concept to compete at the highest level. The variables outside your control — timing, market conditions, editor fit — are now the primary factors.",
  },
];

export function getSpectrumLevel(score: number): SpectrumLevel {
  return (
    SPECTRUM_LEVELS.find((l) => score >= l.min && score <= l.max) ||
    SPECTRUM_LEVELS[0]
  );
}

export const CATEGORY_DISPLAY_NAMES: Record<CategoryKey, string> = {
  platform: "Platform",
  uniquenessAndTimeliness: "Uniqueness & Timeliness",
  writing: "Writing",
  audience: "Audience",
};

export const CATEGORY_DESCRIPTIONS: Record<CategoryKey, string> = {
  platform:
    "Your existing public reach — social following, email list, press coverage, speaking engagements — and your plan for promoting the book. For nonfiction, publishers look at this first. A thin platform can be offset by an exceptional concept, but publishers always want to know how the book reaches readers.",
  uniquenessAndTimeliness:
    "How differentiated your book is, whether you are the only person who could have written it, and whether the timing is right. 'Only you could write this' is one of the most powerful things an agent can say to an acquisitions editor. Timing matters too — the same book can go from highly sellable to a pass in two years.",
  writing:
    "The quality and readiness of your writing and book proposal. Nonfiction is acquired on proposal, not finished manuscript, but a weak proposal signals an unprepared author. Professional writing experience, structural feedback, and a polished proposal all count.",
  audience:
    "The size, reading habits, and accessibility of your target audience, your visibility in the media they consume, and the strength of your personal network. Publishers want to know exactly who is buying this book — and that those people actually read books.",
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

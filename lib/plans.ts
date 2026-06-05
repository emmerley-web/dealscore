export type PlanId = "learn" | "consult" | "partner";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  forWho: string;
  features: string[];
  cta: string;
  ctaHref: string;
  badge?: string;
};

export const PLANS: Plan[] = [
  {
    id: "learn",
    name: "Learn",
    tagline: "Understand the framework at your own pace.",
    price: "$250",
    priceNote: "one-time",
    forWho:
      "For authors who are still building foundations and want to understand what publishers actually evaluate before committing to a bigger investment.",
    features: [
      "Live webinar with Tim and Emily (recorded)",
      "Full access to the content library",
      "Platform-building guides and templates",
      "Book proposal writing resources",
      "Audience development frameworks",
      "Library updates as new content is added",
    ],
    cta: "Get Access",
    ctaHref: "#", // TODO: replace with Stripe / signup link
  },
  {
    id: "consult",
    name: "Consult",
    tagline: "A personalised analysis and action plan. You do the work.",
    price: "$2,500",
    priceNote: "one-time",
    forWho:
      "For authors who are ready to act and want a clear, personalised plan but prefer to execute it on their own terms.",
    features: [
      "Written analysis of your PitchMark results",
      "Category-by-category breakdown with specific recommendations",
      "Prioritised action plan matched to your score and genre",
      "Resource and tool recommendations for your weakest areas",
      "Publishing path recommendation with rationale",
      "Delivered within 10 business days",
    ],
    cta: "Get Your Analysis",
    ctaHref: "#", // TODO: replace with Stripe / payment link
    badge: "Most Popular",
  },
  {
    id: "partner",
    name: "Partner",
    tagline: "Full-service. We do 95% of the work.",
    price: "$25,000",
    priceNote: "per engagement",
    forWho:
      "For authors who are ready to pursue a deal and want Tim and Emily to drive the process, from building platform to writing the proposal, targeting agents, and managing the submission.",
    features: [
      "Everything in Consult",
      "Platform strategy and hands-on execution",
      "Full book proposal written by Tim and/or Emily",
      "Query letter and all submission materials",
      "Agent identification and personalised outreach strategy",
      "Submission management through the full querying process",
      "Direct involvement from Tim and/or Emily at every stage",
    ],
    cta: "Book a Discovery Call",
    ctaHref: "/consult",
  },
];

export const PLANS_BY_ID: Record<PlanId, Plan> = Object.fromEntries(
  PLANS.map((p) => [p.id, p])
) as Record<PlanId, Plan>;

export function getRecommendedPlanIds(score: number): [PlanId, PlanId] {
  if (score <= 40) return ["learn", "consult"];
  if (score <= 75) return ["consult", "partner"];
  return ["partner", "consult"];
}

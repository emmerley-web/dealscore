export type PlanId = "learn" | "report" | "consult";

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
    tagline: "Understand the framework. Go at your own pace.",
    price: "$197",
    priceNote: "one-time",
    forWho:
      "For authors who are still building foundations and want to understand what publishers actually evaluate — before committing to a bigger investment.",
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
    id: "report",
    name: "Report",
    tagline: "A personalised analysis of your results. You do the work.",
    price: "$497",
    priceNote: "one-time",
    forWho:
      "For authors who are ready to act and want a clear, personalised plan — but prefer to execute it on their own terms.",
    features: [
      "Written analysis of your PitchMark results",
      "Category-by-category breakdown with specific recommendations",
      "Prioritised action plan matched to your score and genre",
      "Resource and tool recommendations for your weakest areas",
      "Publishing path recommendation with rationale",
      "Delivered within 5 business days",
    ],
    cta: "Order Your Report",
    ctaHref: "#", // TODO: replace with Stripe / payment link
    badge: "Most Popular",
  },
  {
    id: "consult",
    name: "Consult",
    tagline: "We work through it with you.",
    price: "From $2,500",
    priceNote: "per engagement",
    forWho:
      "For authors who are near-ready and want hands-on support — from refining the proposal to preparing for agent conversations.",
    features: [
      "Everything in Report",
      "1:1 strategy sessions with Tim and/or Emily",
      "Proposal review and detailed feedback",
      "Query letter development",
      "Agent targeting and submission strategy",
      "Ongoing support through the querying process",
    ],
    cta: "Book a Discovery Call",
    ctaHref: "/consult",
  },
];

export const PLANS_BY_ID: Record<PlanId, Plan> = Object.fromEntries(
  PLANS.map((p) => [p.id, p])
) as Record<PlanId, Plan>;

export function getRecommendedPlanIds(score: number): [PlanId, PlanId] {
  if (score <= 40) return ["learn", "report"];
  if (score <= 75) return ["report", "consult"];
  return ["consult", "report"];
}

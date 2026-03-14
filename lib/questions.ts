import { AssessmentQuestion } from "./types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // ── PLATFORM ──────────────────────────────────────────────────────────────
  {
    id: "platform_1",
    category: "platform",
    question:
      "What is your total social media following across all platforms combined?",
    options: [
      {
        value: 1,
        label: "Under 1,000",
        description: "Just starting to build an online presence",
      },
      {
        value: 2,
        label: "1,000 – 5,000",
        description: "A growing but small following",
      },
      {
        value: 3,
        label: "5,000 – 25,000",
        description: "A meaningful niche audience",
      },
      {
        value: 4,
        label: "25,000 – 100,000",
        description: "A significant, engaged audience",
      },
      {
        value: 5,
        label: "100,000+",
        description: "A large, established platform",
      },
    ],
  },
  {
    id: "platform_2",
    category: "platform",
    question:
      "Do you have an email newsletter? If so, how large is your subscriber list?",
    options: [
      {
        value: 1,
        label: "No newsletter",
        description: "Email list building not started",
      },
      {
        value: 2,
        label: "Under 500 subscribers",
        description: "Just getting started with email",
      },
      {
        value: 3,
        label: "500 – 2,000 subscribers",
        description: "A growing email audience",
      },
      {
        value: 4,
        label: "2,000 – 10,000 subscribers",
        description: "A strong, loyal email following",
      },
      {
        value: 5,
        label: "10,000+ subscribers",
        description: "A powerful, direct-to-reader platform",
      },
    ],
  },
  {
    id: "platform_3",
    category: "platform",
    question:
      "How often do you speak at events, conferences, or appear on notable podcasts?",
    options: [
      {
        value: 1,
        label: "Never",
        description: "No public speaking or podcast appearances",
      },
      {
        value: 2,
        label: "Rarely (1–2 times ever)",
        description: "Occasional appearances",
      },
      {
        value: 3,
        label: "Sometimes (3–5 times per year)",
        description: "Building a speaking presence",
      },
      {
        value: 4,
        label: "Regularly (6–12 times per year)",
        description: "Recognized voice in the space",
      },
      {
        value: 5,
        label: "Frequently — major stages or podcasts",
        description: "Established thought leader",
      },
    ],
  },
  {
    id: "platform_4",
    category: "platform",
    question:
      "Have you been published in notable outlets, or do you have a recognized author brand?",
    options: [
      {
        value: 1,
        label: "No published work",
        description: "Haven't started building a writing brand",
      },
      {
        value: 2,
        label: "Personal blog or social posts only",
        description: "Writing for yourself, not for audiences",
      },
      {
        value: 3,
        label: "Guest posts or small publications",
        description: "Beginning to get bylines",
      },
      {
        value: 4,
        label: "Established bylines in mid-tier outlets",
        description: "Known and credible in your niche",
      },
      {
        value: 5,
        label: "Major publications or nationally recognized brand",
        description: "Nationally recognized voice",
      },
    ],
  },

  // ── MANUSCRIPT QUALITY ────────────────────────────────────────────────────
  {
    id: "manuscript_1",
    category: "manuscriptQuality",
    question: "What stage is your manuscript or book proposal currently in?",
    options: [
      {
        value: 1,
        label: "Concept or outline only",
        description: "Still in the ideas phase",
      },
      {
        value: 2,
        label: "First draft in progress",
        description: "Writing but not yet complete",
      },
      {
        value: 3,
        label: "Complete first draft",
        description: "Written but needs significant refinement",
      },
      {
        value: 4,
        label: "Revised and beta-read",
        description: "Has received and incorporated meaningful feedback",
      },
      {
        value: 5,
        label: "Professionally edited / submission-ready",
        description: "Polished and ready for the market",
      },
    ],
  },
  {
    id: "manuscript_2",
    category: "manuscriptQuality",
    question:
      "What level of professional feedback have you received on your manuscript?",
    options: [
      {
        value: 1,
        label: "No feedback yet",
        description: "Haven't shared with others",
      },
      {
        value: 2,
        label: "Friends or family only",
        description: "Informal feedback only",
      },
      {
        value: 3,
        label: "Writing group or beta readers",
        description: "Community-level feedback received",
      },
      {
        value: 4,
        label: "Professional editor or manuscript critique",
        description: "Expert structural feedback received",
      },
      {
        value: 5,
        label: "Multiple rounds of professional editing",
        description: "Thoroughly vetted and refined manuscript",
      },
    ],
  },
  {
    id: "manuscript_3",
    category: "manuscriptQuality",
    question:
      "How developed is your book proposal?",
    options: [
      {
        value: 1,
        label: "No proposal yet",
        description: "Have not started the proposal",
      },
      {
        value: 2,
        label: "Basic outline only",
        description: "Early stage, not submission-ready",
      },
      {
        value: 3,
        label: "Draft proposal in progress",
        description: "Working through the key sections",
      },
      {
        value: 4,
        label: "Complete draft proposal",
        description: "All major sections written, needs refinement",
      },
      {
        value: 5,
        label: "Polished, agent-ready proposal",
        description: "Professionally refined and ready to submit",
      },
    ],
  },
  {
    id: "manuscript_4",
    category: "manuscriptQuality",
    question:
      "How strong and precise are your comparable titles (comps) for positioning the book?",
    options: [
      {
        value: 1,
        label: "Haven't identified comps",
        description: "Not yet researched the competitive market",
      },
      {
        value: 2,
        label: "Comps are vague or very dated (5+ years old)",
        description: "Beginning market research",
      },
      {
        value: 3,
        label: "Solid comps, somewhat dated (3–5 years)",
        description: "Good positioning but could be sharper",
      },
      {
        value: 4,
        label: "Recent, well-matched comps (last 1–3 years)",
        description: "Strong and credible market positioning",
      },
      {
        value: 5,
        label: "Perfect comps — recent bestsellers in your exact lane",
        description: "Ideal, publisher-ready market positioning",
      },
    ],
  },

  // ── CONCEPT UNIQUENESS ────────────────────────────────────────────────────
  {
    id: "uniqueness_1",
    category: "conceptUniqueness",
    question:
      "How clearly differentiated is your book concept from others already in the market?",
    options: [
      {
        value: 1,
        label: "Very similar to existing books",
        description: "Little differentiation identified",
      },
      {
        value: 2,
        label: "Somewhat similar with minor twists",
        description: "Some overlap with existing books",
      },
      {
        value: 3,
        label: "Distinct angle on a known topic",
        description: "Clear but not dramatic difference",
      },
      {
        value: 4,
        label: "Fresh perspective that stands out",
        description: "Meaningfully different from what's on shelves",
      },
      {
        value: 5,
        label: "Truly original concept",
        description: "Nothing quite like it on the market",
      },
    ],
  },
  {
    id: "uniqueness_2",
    category: "conceptUniqueness",
    question:
      "What unique expertise, lived experience, or authority do you bring to this book?",
    options: [
      {
        value: 1,
        label: "No specific relevant expertise",
        description: "Could be written by many people",
      },
      {
        value: 2,
        label: "Some relevant background",
        description: "Modest connection to the material",
      },
      {
        value: 3,
        label: "Notable expertise or lived experience",
        description: "Credible and specific voice on the topic",
      },
      {
        value: 4,
        label: "Unique, hard-to-replicate perspective",
        description: "Distinctly positioned as the right author",
      },
      {
        value: 5,
        label: "Only you could write this book",
        description: "Unparalleled expertise or irreplaceable experience",
      },
    ],
  },
  {
    id: "uniqueness_3",
    category: "conceptUniqueness",
    question:
      "How innovative is your book's structure, narrative approach, or voice?",
    options: [
      {
        value: 1,
        label: "Entirely conventional",
        description: "Standard structure for the genre",
      },
      {
        value: 2,
        label: "Slightly unconventional",
        description: "Small departures from genre norms",
      },
      {
        value: 3,
        label: "Somewhat innovative",
        description: "Noticeable structural or voice choices",
      },
      {
        value: 4,
        label: "Quite innovative",
        description: "Distinctly fresh approach to the genre",
      },
      {
        value: 5,
        label: "Groundbreaking",
        description: "Reinvents or meaningfully expands the form",
      },
    ],
  },
  {
    id: "uniqueness_4",
    category: "conceptUniqueness",
    question:
      "How precisely can you articulate what makes your book different in one compelling sentence?",
    options: [
      {
        value: 1,
        label: "Can't articulate it yet",
        description: "Still working out the core differentiator",
      },
      {
        value: 2,
        label: "Vague description",
        description: "General sense but not yet sharp",
      },
      {
        value: 3,
        label: "Reasonable but somewhat generic",
        description: "Solid but not immediately memorable",
      },
      {
        value: 4,
        label: "Clear and specific",
        description: "Distinctive and easy to remember",
      },
      {
        value: 5,
        label: "Compelling and irresistible",
        description: "The kind of hook that stops an editor in their tracks",
      },
    ],
  },

  // ── CONCEPT COMMERCIAL POTENTIAL ──────────────────────────────────────────
  {
    id: "commercial_1",
    category: "conceptCommercialPotential",
    question: "How large is the potential readership for your book?",
    options: [
      {
        value: 1,
        label: "Very niche (under 10,000 people)",
        description: "Extremely small, specialized target audience",
      },
      {
        value: 2,
        label: "Niche (10,000 – 100,000)",
        description: "Small but clearly defined audience",
      },
      {
        value: 3,
        label: "Moderate (100,000 – 1 million)",
        description: "Meaningful but not mass-market appeal",
      },
      {
        value: 4,
        label: "Large (1 million – 10 million)",
        description: "Broad potential readership",
      },
      {
        value: 5,
        label: "Mass market (10 million+)",
        description: "Universal or near-universal appeal",
      },
    ],
  },
  {
    id: "commercial_2",
    category: "conceptCommercialPotential",
    question:
      "Does your book have potential for film, TV, podcast, or other media adaptations?",
    options: [
      {
        value: 1,
        label: "No adaptation potential",
        description: "Not suited for other media",
      },
      {
        value: 2,
        label: "Unlikely",
        description: "Minimal crossover or adaptation appeal",
      },
      {
        value: 3,
        label: "Possible",
        description: "Could work in another format with some effort",
      },
      {
        value: 4,
        label: "Strong potential",
        description: "Clear, compelling media adaptation possibilities",
      },
      {
        value: 5,
        label: "Obvious adaptation potential",
        description: "Built for screen, audio, or other media",
      },
    ],
  },
  {
    id: "commercial_3",
    category: "conceptCommercialPotential",
    question:
      "How strong and immediate is your book's commercial hook or one-sentence pitch?",
    options: [
      {
        value: 1,
        label: "Hard to explain quickly",
        description: "Difficult to pitch to a general audience",
      },
      {
        value: 2,
        label: "Niche pitch",
        description: "Clear to insiders but confusing to general readers",
      },
      {
        value: 3,
        label: "Reasonable hook",
        description: "Interesting but not immediately compelling",
      },
      {
        value: 4,
        label: "Strong hook",
        description: "Intriguing to most people who hear it",
      },
      {
        value: 5,
        label: "Irresistible pitch",
        description: "Immediate 'I want to read that' reaction from anyone",
      },
    ],
  },
  {
    id: "commercial_4",
    category: "conceptCommercialPotential",
    question: "Does your book have series, sequel, or franchise potential?",
    options: [
      {
        value: 1,
        label: "Strictly standalone",
        description: "One-and-done concept with no natural continuation",
      },
      {
        value: 2,
        label: "Possible but unlikely sequel",
        description: "Could continue but doesn't naturally call for it",
      },
      {
        value: 3,
        label: "Natural follow-up possible",
        description: "Could expand if the first book succeeds",
      },
      {
        value: 4,
        label: "Clear series potential",
        description: "Designed or well-suited for continuation",
      },
      {
        value: 5,
        label: "Built-in franchise potential",
        description: "World, character, or system actively invites expansion",
      },
    ],
  },

  // ── CONCEPT TIMELINESS ────────────────────────────────────────────────────
  {
    id: "timeliness_1",
    category: "conceptTimeliness",
    question:
      "How relevant is your book's topic to current cultural conversations?",
    options: [
      {
        value: 1,
        label: "Not culturally relevant right now",
        description: "Disconnected from current discourse",
      },
      {
        value: 2,
        label: "Mildly relevant",
        description: "Tangentially connected to current topics",
      },
      {
        value: 3,
        label: "Somewhat timely",
        description: "Related to ongoing but not dominant conversations",
      },
      {
        value: 4,
        label: "Quite timely",
        description: "Connected to active, prominent cultural conversations",
      },
      {
        value: 5,
        label: "At the center of a major conversation",
        description: "Exactly what people are talking about right now",
      },
    ],
  },
  {
    id: "timeliness_2",
    category: "conceptTimeliness",
    question:
      "Does your book address an emerging trend, movement, or unmet need in the market?",
    options: [
      {
        value: 1,
        label: "No emerging trends",
        description: "No connection to new or growing movements",
      },
      {
        value: 2,
        label: "Loosely connected",
        description: "Peripheral connection to emerging trends",
      },
      {
        value: 3,
        label: "Connected to a known trend",
        description: "Aligns with an identified movement",
      },
      {
        value: 4,
        label: "Directly addresses an emerging trend",
        description: "Written for this specific moment",
      },
      {
        value: 5,
        label: "Ahead of a major trend",
        description: "Anticipating where the cultural conversation is going",
      },
    ],
  },
  {
    id: "timeliness_3",
    category: "conceptTimeliness",
    question:
      "How evergreen is your topic? Will it be just as relevant in 5–10 years?",
    options: [
      {
        value: 1,
        label: "Highly time-sensitive — will date quickly",
        description: "Tied to a fleeting moment or trend",
      },
      {
        value: 2,
        label: "Likely to feel dated within 2–3 years",
        description: "Shorter commercial shelf life",
      },
      {
        value: 3,
        label: "Mixed — some evergreen, some dated",
        description: "Good now but uncertain longevity",
      },
      {
        value: 4,
        label: "Mostly evergreen with a timely hook",
        description: "Strong balance of now and lasting relevance",
      },
      {
        value: 5,
        label: "Timeless topic",
        description: "Will be as relevant in a decade as it is today",
      },
    ],
  },
  {
    id: "timeliness_4",
    category: "conceptTimeliness",
    question:
      "Is there a clear, identifiable gap in the current market that your book fills?",
    options: [
      {
        value: 1,
        label: "No obvious gap",
        description: "The market seems well-covered already",
      },
      {
        value: 2,
        label: "Small gap",
        description: "Minor hole in the existing landscape",
      },
      {
        value: 3,
        label: "Clear gap",
        description: "A visible need not currently being met",
      },
      {
        value: 4,
        label: "Significant gap",
        description: "Readers are actively looking for this book",
      },
      {
        value: 5,
        label: "Obvious, widely acknowledged unmet need",
        description:
          "Everyone in the space knows this book is missing from shelves",
      },
    ],
  },
];

export const QUESTIONS_BY_CATEGORY = ASSESSMENT_QUESTIONS.reduce(
  (acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  },
  {} as Record<string, AssessmentQuestion[]>
);

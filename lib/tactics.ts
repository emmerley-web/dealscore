import { CategoryKey } from "./types";

export interface Tactic {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  effort: "low" | "medium" | "high";
  timeframe: string;
  actions: string[];
}

export const ALL_TACTICS: Tactic[] = [
  // ── PLATFORM ──────────────────────────────────────────────────────────────
  {
    id: "p1",
    category: "platform",
    title: "Choose One Platform and Go Deep",
    description:
      "Pick the single social platform most aligned with your genre's reader community and post consistently for 90 days before expanding.",
    effort: "medium",
    timeframe: "90 days",
    actions: [
      "Research where your genre's most engaged readers live (BookTok, Bookstagram, LinkedIn, X)",
      "Post 3–5 times per week with content tied to your book's themes",
      "Engage with 10 accounts in your target reader community daily",
      "Track follower growth and engagement weekly",
    ],
  },
  {
    id: "p2",
    category: "platform",
    title: "Launch a Newsletter on Substack or ConvertKit",
    description:
      "An email list is the most valuable platform asset you can own. Start building it now, even before your manuscript is done.",
    effort: "medium",
    timeframe: "Start this week",
    actions: [
      "Set up a free Substack or ConvertKit account",
      "Write 3 'back issue' posts to give new subscribers immediate value",
      "Add a sign-up link to all social profiles",
      "Email your existing network personally asking them to subscribe",
    ],
  },
  {
    id: "p3",
    category: "platform",
    title: "Land Your First Podcast Guest Spots",
    description:
      "Podcast appearances build credibility and drive email subscribers more effectively than most social posts.",
    effort: "medium",
    timeframe: "60–90 days",
    actions: [
      "Create a one-page speaker bio and pitch document",
      "Identify 20 podcasts in your genre/topic niche with under 10K listeners (easier to book)",
      "Send personalized pitches to 5 podcasts per week",
      "Leverage each appearance to pitch your newsletter sign-up",
    ],
  },
  {
    id: "p4",
    category: "platform",
    title: "Build a BookTok Presence",
    description:
      "TikTok's book community drives more book sales per platform than any other social network. Even a modest BookTok presence signals market engagement to publishers.",
    effort: "high",
    timeframe: "60–90 days",
    actions: [
      "Study the top 20 BookTok creators in your genre",
      "Post one 30–60 second video per day for 30 days",
      "Use trending book sounds and genre-specific hashtags",
      "Document your writing process and book's themes authentically",
    ],
  },
  {
    id: "p5",
    category: "platform",
    title: "Get Published in Established Outlets",
    description:
      "A byline in a respected publication establishes you as an expert author before your book even exists.",
    effort: "high",
    timeframe: "3–6 months",
    actions: [
      "Identify 10 publications that have published authors in your genre",
      "Study their submission guidelines and recent pieces",
      "Draft 3 essay or article pitches tied to your book's themes",
      "Submit one pitch per week and track responses",
    ],
  },
  {
    id: "p6",
    category: "platform",
    title: "Create a Professional Author Website",
    description:
      "Your author website is your home base and the one platform you fully own. Make it clear, focused, and built around your book's identity.",
    effort: "medium",
    timeframe: "2 weeks",
    actions: [
      "Buy your author domain (FirstnameLastname.com)",
      "Include: bio, newsletter sign-up, press/media page, and contact form",
      "Add a dedicated page for your book with a clear description and early interest form",
      "Connect all social profiles to your website",
    ],
  },
  {
    id: "p7",
    category: "platform",
    title: "Speak at Genre-Specific Conferences",
    description:
      "Speaking at conferences in your book's space positions you as an authority and builds your author credentials.",
    effort: "high",
    timeframe: "6–12 months",
    actions: [
      "Research conferences in your genre or topic area",
      "Submit a speaker proposal for at least 3 events",
      "Build a 'Speaking' page on your website with your topics and bio",
      "Use every speaking engagement to grow your email list",
    ],
  },
  {
    id: "p8",
    category: "platform",
    title: "Document Your Writing Journey Publicly",
    description:
      "Sharing your writing process creates authentic content and builds an audience before your book launches.",
    effort: "low",
    timeframe: "Ongoing",
    actions: [
      "Share weekly updates on your writing progress on your chosen platform",
      "Post about your research, influences, and behind-the-scenes process",
      "Share excerpts and ask your audience for input",
      "Build anticipation by making your audience feel like insiders",
    ],
  },

  // ── MANUSCRIPT QUALITY ────────────────────────────────────────────────────
  {
    id: "mq1",
    category: "manuscriptQuality",
    title: "Hire a Developmental Editor",
    description:
      "A developmental editor addresses structural issues before you refine prose, the single highest-ROI investment in your manuscript.",
    effort: "high",
    timeframe: "1–3 months",
    actions: [
      "Research developmental editors who specialize in your genre (Reedsy is a good starting point)",
      "Request sample edits from 2–3 editors before committing",
      "Budget $1,500–$5,000 depending on manuscript length and editor experience",
      "Incorporate feedback in a full revision pass",
    ],
  },
  {
    id: "mq2",
    category: "manuscriptQuality",
    title: "Build and Use a Critique Partner Relationship",
    description:
      "A dedicated critique partner who reads your genre provides the most targeted ongoing feedback you can get.",
    effort: "medium",
    timeframe: "Ongoing",
    actions: [
      "Post in genre-specific writing communities (r/writing, genre Facebook groups, NaNoWriMo forums)",
      "Find a partner at your level who writes the same genre",
      "Exchange chapters on a regular schedule (every 2 weeks)",
      "Focus feedback requests on specific craft concerns",
    ],
  },
  {
    id: "mq3",
    category: "manuscriptQuality",
    title: "Take a Targeted Craft Workshop",
    description:
      "Focused workshops on your manuscript's specific weakness (structure, dialogue, pacing) accelerate craft faster than general writing courses.",
    effort: "medium",
    timeframe: "4–12 weeks",
    actions: [
      "Identify your single weakest craft area based on feedback you've received",
      "Research workshops at Hugo House, Grub Street, or online equivalents",
      "Consider the WriterUnboxed or StoryGrid communities for ongoing development",
      "Apply the workshop lessons directly to your manuscript in real time",
    ],
  },
  {
    id: "mq4",
    category: "manuscriptQuality",
    title: "Research and Lock In Your Comparable Titles",
    description:
      "Precise, current comps are one of the most practical signals of market readiness and help you pitch with confidence.",
    effort: "low",
    timeframe: "1–2 weeks",
    actions: [
      "Browse Publisher's Marketplace for recent deals in your category",
      "Identify 3–5 books published in the last 2 years that share your book's tone, audience, and themes",
      "Read them to understand how your book differs",
      "Practice articulating: 'My book is for readers of [COMP A] who also love [COMP B]'",
    ],
  },
  {
    id: "mq5",
    category: "manuscriptQuality",
    title: "Run Targeted Beta Reader Passes",
    description:
      "Strategically chosen beta readers who represent your ideal reader give you the clearest signal of what's working.",
    effort: "medium",
    timeframe: "4–8 weeks per pass",
    actions: [
      "Recruit 5–8 beta readers who are avid readers of your genre (not writers)",
      "Give them specific questions to answer, not open-ended prompts",
      "Track patterns in feedback; what 3+ readers flag matters most",
      "Do a targeted revision pass based on patterns, not individual preferences",
    ],
  },
  {
    id: "mq6",
    category: "manuscriptQuality",
    title: "Study the Structure of 5 Bestsellers in Your Genre",
    description:
      "Reverse-engineering books that succeeded in your market teaches you the structural expectations your reader has, and how to subvert them effectively.",
    effort: "medium",
    timeframe: "4–6 weeks",
    actions: [
      "Choose the 5 bestsellers most similar to your book",
      "Map their structure: act breaks, pacing, chapter length, POV",
      "Note patterns: what almost every book in your genre does",
      "Identify which conventions your book follows and which it deliberately breaks",
    ],
  },

  // ── CONCEPT UNIQUENESS ────────────────────────────────────────────────────
  {
    id: "cu1",
    category: "conceptUniqueness",
    title: "Write Your 'Only I Could Write This' Document",
    description:
      "Publishers buy books from the intersection of great concept AND the right author. Document why you are the uniquely credentialed person to write this book.",
    effort: "low",
    timeframe: "1 week",
    actions: [
      "List your relevant life experiences, credentials, and expertise",
      "Identify what you've witnessed or lived that no one else could bring to this topic",
      "Craft a 2–3 sentence 'author authority' statement for your proposal",
      "Test it: would a stranger understand in 30 seconds why you're the right author?",
    ],
  },
  {
    id: "cu2",
    category: "conceptUniqueness",
    title: "Conduct a Thorough Market Gap Analysis",
    description:
      "Articulating what's missing from your genre's current shelf is one of the most compelling things you can put in a pitch.",
    effort: "medium",
    timeframe: "2–3 weeks",
    actions: [
      "Browse the 'New Releases' and bestseller lists in your category on Amazon",
      "Read reviews of the top 20 books — what are readers saying is missing?",
      "Interview 5–10 avid readers of your genre about what book they wish existed",
      "Write a one-paragraph 'market gap' statement for your book",
    ],
  },
  {
    id: "cu3",
    category: "conceptUniqueness",
    title: "Sharpen Your One-Sentence Differentiator",
    description:
      "Your book's differentiation should be expressible in a single, memorable sentence that makes people immediately want to read it.",
    effort: "low",
    timeframe: "1–2 weeks",
    actions: [
      "Write 10 different versions of your book's differentiating sentence",
      "Test them on people who haven't heard your pitch before",
      "Note which versions generate 'wait, really?' or 'I want to read that'",
      "Refine until you have one sentence that's specific, intriguing, and uniquely you",
    ],
  },
  {
    id: "cu4",
    category: "conceptUniqueness",
    title: "Identify and Amplify Your Structural Innovation",
    description:
      "Books that offer a fresh structural approach stand out to editors who read thousands of conventional manuscripts.",
    effort: "high",
    timeframe: "1–3 months",
    actions: [
      "Study books in your genre that are praised specifically for structure or form",
      "Ask: is there a structural choice that would make my story more powerful AND original?",
      "Experiment with alternatives (nonlinear timeline, hybrid structure, unusual POV)",
      "Test structural changes with beta readers before committing",
    ],
  },

  // ── CONCEPT COMMERCIAL POTENTIAL ──────────────────────────────────────────
  {
    id: "ccp1",
    category: "conceptCommercialPotential",
    title: "Quantify and Define Your Target Audience",
    description:
      "Publishers want to know exactly who will buy your book and how many of them exist. The more specific and large your answer, the stronger your pitch.",
    effort: "low",
    timeframe: "1 week",
    actions: [
      "Define your ideal reader in one specific sentence (age, interest, reading habit)",
      "Research the size of that audience using GoodReads, Amazon, and industry reports",
      "Identify the communities where your target readers gather (subreddits, Facebook groups, conventions)",
      "Include audience data in your book proposal or pitch document",
    ],
  },
  {
    id: "ccp2",
    category: "conceptCommercialPotential",
    title: "Develop a Series or Expansion Plan",
    description:
      "Even if your book is standalone, publishers appreciate knowing there's a potential for continuation. A series bible signals commercial ambition.",
    effort: "medium",
    timeframe: "2–4 weeks",
    actions: [
      "Outline at least 2 potential sequels or companion volumes",
      "Create a brief 'series overview' document (2 pages max)",
      "Identify the recurring elements, world, characters, system, that enable expansion",
      "Frame your standalone as 'Book 1' even if the series is speculative",
    ],
  },
  {
    id: "ccp3",
    category: "conceptCommercialPotential",
    title: "Craft an Irresistible Commercial Hook",
    description:
      "A strong commercial hook is the difference between a pass and a request. Every pitch needs a sentence that makes any reader say 'wait, tell me more.'",
    effort: "low",
    timeframe: "1–2 weeks",
    actions: [
      "Practice pitching your book to strangers at parties and watch their faces",
      "Study the 'jacket copy' of 10 bestsellers in your genre for hook structure",
      "Try the formula: [Protagonist] must [goal] before [stakes], but [twist that makes it unique]",
      "Test your hook on 10 people and note genuine interest reactions",
    ],
  },
  {
    id: "ccp4",
    category: "conceptCommercialPotential",
    title: "Research Adaptation and Cross-Media Potential",
    description:
      "Books with obvious adaptation potential attract publishers who think beyond the book itself. Understanding your book's cross-media angle adds commercial weight.",
    effort: "low",
    timeframe: "1 week",
    actions: [
      "Ask: if this were a film, what would the poster look like? Who would star in it?",
      "Research if similar books in your genre have been adapted recently",
      "Note adaptation potential naturally in your pitch (don't oversell it)",
      "Consider whether your premise has podcast, game, or other media extensions",
    ],
  },

  // ── CONCEPT TIMELINESS ────────────────────────────────────────────────────
  {
    id: "ct1",
    category: "conceptTimeliness",
    title: "Build Your 'Why Now' Argument",
    description:
      "Every strong pitch needs a compelling 'why now': the cultural, social, or market forces that make this the perfect moment for your book.",
    effort: "low",
    timeframe: "1 week",
    actions: [
      "Research 3–5 recent news stories, trends, or cultural moments related to your book's themes",
      "Write a 2–3 sentence 'why now' paragraph for your pitch",
      "Connect your book's themes to a movement or conversation already in motion",
      "Update this argument every 6 months as the cultural landscape shifts",
    ],
  },
  {
    id: "ct2",
    category: "conceptTimeliness",
    title: "Find the Evergreen Core Beneath the Timely Hook",
    description:
      "The best books are timely enough to sell now and timeless enough to have a long backlist life. Identifying both layers strengthens your pitch.",
    effort: "low",
    timeframe: "1 week",
    actions: [
      "Write two versions of your book description: one that emphasizes the timely angle, one that emphasizes the universal theme",
      "Ensure your manuscript's core is built on the timeless layer",
      "In your pitch, lead with the timely hook but promise the evergreen depth",
      "Research how similar books from 5–10 years ago have held up in sales",
    ],
  },
  {
    id: "ct3",
    category: "conceptTimeliness",
    title: "Connect Your Book to a Trending Conversation Right Now",
    description:
      "Publishing moves slowly, but if you can connect your book to a trend that's building now, your pitch will feel urgent to publishers who are thinking 18 to 24 months ahead.",
    effort: "medium",
    timeframe: "2–4 weeks",
    actions: [
      "Follow trend reports from publishing industry outlets (Publishers Weekly, Shelf Awareness)",
      "Monitor Google Trends for search patterns related to your book's topic",
      "Connect with journalists or influencers who are covering your book's themes",
      "Write a timely op-ed or essay that surfaces your expertise and book's relevance",
    ],
  },
  {
    id: "ct4",
    category: "conceptTimeliness",
    title: "Research and Articulate Your Market Gap",
    description:
      "Showing publishers that your book fills a clear, current gap is more powerful than any other commercial argument you can make.",
    effort: "medium",
    timeframe: "2 weeks",
    actions: [
      "Search Amazon, Goodreads, and bookseller lists for books directly competing with yours",
      "Read reader reviews to find what they wish the existing books had done differently",
      "Articulate in one sentence: 'Readers who love [X] and [Y] have been asking for a book that [Z]; that's this book'",
      "Validate the gap by posting about the topic in reader communities and measuring engagement",
    ],
  },
];

export function getTacticsForCategories(
  categoryKeys: CategoryKey[],
  limit?: number
): Tactic[] {
  const filtered = ALL_TACTICS.filter((t) =>
    categoryKeys.includes(t.category)
  );
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getPersonalizedTactics(
  weakCategories: CategoryKey[],
  allCategories: CategoryKey[]
): { priority: Tactic[]; general: Tactic[] } {
  const priority = ALL_TACTICS.filter((t) =>
    weakCategories.includes(t.category)
  );
  const general = ALL_TACTICS.filter(
    (t) =>
      !weakCategories.includes(t.category) &&
      allCategories.includes(t.category)
  );
  return { priority, general };
}

export const EFFORT_LABELS = {
  low: { label: "Quick Win", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  medium: { label: "Moderate Effort", color: "text-amber-700 bg-amber-50 border-amber-200" },
  high: { label: "Deep Work", color: "text-brand-700 bg-brand-50 border-brand-200" },
};

export const CATEGORY_COLORS: Record<CategoryKey, string> = {
  platform: "text-blue-700 bg-blue-50 border-blue-200",
  manuscriptQuality: "text-purple-700 bg-purple-50 border-purple-200",
  conceptUniqueness: "text-rose-700 bg-rose-50 border-rose-200",
  conceptCommercialPotential: "text-amber-700 bg-amber-50 border-amber-200",
  conceptTimeliness: "text-teal-700 bg-teal-50 border-teal-200",
};

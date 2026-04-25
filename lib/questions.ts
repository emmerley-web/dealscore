import { AssessmentQuestion } from "./types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // ── PLATFORM ──────────────────────────────────────────────────────────────
  {
    id: "platform_1",
    category: "platform",
    question: "What is your total social media following across all platforms combined?",
    options: [
      { value: 1, label: "Under 1,000", description: "Just starting to build an online presence" },
      { value: 2, label: "1,000 – 5,000", description: "A growing but small following" },
      { value: 3, label: "5,000 – 25,000", description: "A meaningful niche audience" },
      { value: 4, label: "25,000 – 100,000", description: "A significant, engaged audience" },
      { value: 5, label: "100,000+", description: "A large, established platform" },
    ],
  },
  {
    id: "platform_2",
    category: "platform",
    question: "How large is your email list?",
    options: [
      { value: 1, label: "No email list", description: "Haven't started building one" },
      { value: 2, label: "Under 500", description: "Just getting started" },
      { value: 3, label: "500 – 2,000", description: "A growing list" },
      { value: 4, label: "2,000 – 10,000", description: "A strong, loyal list" },
      { value: 5, label: "10,000+", description: "A powerful direct-to-reader channel" },
    ],
  },
  {
    id: "platform_3",
    category: "platform",
    question: "How often have you appeared in the press in the last two years (print, broadcast, online, podcasts), and do you have working relationships with journalists, editors, producers, or podcasters?",
    options: [
      { value: 1, label: "Never, no relationships", description: "No press coverage or media contacts" },
      { value: 2, label: "Rarely (1–3 times), few relationships", description: "Occasional coverage, minimal contacts" },
      { value: 3, label: "Occasionally (4–8 times), know some journalists", description: "Some coverage and media relationships" },
      { value: 4, label: "Frequently (10–15 times), on pick-up-the-phone terms", description: "Regular coverage, strong media relationships with producers, reporters, podcasters" },
      { value: 5, label: "Constantly (20+ times), own media presence", description: "Own column, radio show, or podcast; in regular contact with press" },
    ],
  },
  {
    id: "platform_4",
    category: "platform",
    question: "How often do you speak at events or conferences?",
    options: [
      { value: 1, label: "Never", description: "No speaking engagements" },
      { value: 2, label: "Rarely (1–2 times/year, small audiences under 25)", description: "Occasional, small-scale appearances" },
      { value: 3, label: "Sometimes (3–5 times/year, audiences of 50–100)", description: "Building a speaking presence" },
      { value: 4, label: "Regularly (6–10 times/year, audiences of 200–500)", description: "Recognized speaker in your space" },
      { value: 5, label: "Constantly (10+/year, have a speaking agent, large audiences)", description: "Established keynote speaker with major event presence" },
    ],
  },
  {
    id: "platform_5",
    category: "platform",
    question: "Do you have a marketing and promotional plan for your book — covering PR, your personal network, email, Amazon, organizational or bulk sales, social media, and pre-publication outreach?",
    options: [
      { value: 1, label: "No plan", description: "Haven't thought about this yet" },
      { value: 2, label: "Preliminary plan", description: "Early ideas but nothing structured" },
      { value: 3, label: "Completed in-house plan, no resources yet", description: "Plan exists but no vendors or budget in place" },
      { value: 4, label: "Plan developed with a marketing or PR firm", description: "Professional collaboration on strategy" },
      { value: 5, label: "Completed plan with engaged resources", description: "PR firm, social media firm, or similar resources already contracted" },
    ],
  },

  // ── UNIQUENESS & TIMELINESS ───────────────────────────────────────────────
  {
    id: "uniqueness_1",
    category: "uniquenessAndTimeliness",
    question: "How clearly differentiated is your book concept from others already in the market?",
    options: [
      { value: 1, label: "Very similar to existing books", description: "Little differentiation identified" },
      { value: 2, label: "Somewhat similar with minor twists", description: "Some overlap with existing books" },
      { value: 3, label: "Distinct angle on a known topic", description: "Clear but not dramatic difference" },
      { value: 4, label: "Fresh perspective that stands out", description: "Meaningfully different from what's on shelves" },
      { value: 5, label: "Truly original concept", description: "Nothing quite like it on the market" },
    ],
  },
  {
    id: "uniqueness_2",
    category: "uniquenessAndTimeliness",
    question: "What unique expertise, lived experience, or authority do you bring to this book?",
    options: [
      { value: 1, label: "No specific relevant expertise", description: "Could be written by many people" },
      { value: 2, label: "Some relevant background", description: "Modest connection to the material" },
      { value: 3, label: "Notable expertise or lived experience", description: "Credible and specific voice on the topic" },
      { value: 4, label: "Unique, hard-to-replicate perspective", description: "Distinctly positioned as the right author" },
      { value: 5, label: "Only you could write this book", description: "Unparalleled expertise or irreplaceable experience" },
    ],
  },
  {
    id: "uniqueness_3",
    category: "uniquenessAndTimeliness",
    question: "Does your book solve or address a current, urgent question or problem?",
    options: [
      { value: 1, label: "No connection to a current problem", description: "Disconnected from any pressing issue" },
      { value: 2, label: "Marginally connected to a somewhat relevant issue", description: "Loose tie to something people care about" },
      { value: 3, label: "Directly addresses an issue of moderate urgency", description: "e.g., childhood literacy, workplace burnout" },
      { value: 4, label: "Directly addresses an issue of immediate urgency", description: "e.g., political corruption, financial instability" },
      { value: 5, label: "Addresses a question of immediate and evergreen urgency", description: "e.g., climate change, systemic inequality — urgent now and for decades" },
    ],
  },
  {
    id: "uniqueness_4",
    category: "uniquenessAndTimeliness",
    question: "How many comparable titles for your book were published by major houses (Penguin Random House, HarperCollins, Simon & Schuster, Hachette, Macmillan, Norton, Bloomsbury, Sourcebooks, Abrams, Grove Atlantic) and became New York Times bestsellers?",
    options: [
      { value: 1, label: "I'm not sure what a comp title is", description: "Haven't researched the competitive market yet" },
      { value: 2, label: "1–2 comp titles", description: "Minimal precedent in the major-publisher market" },
      { value: 3, label: "3–4 comp titles", description: "Solid but not crowded market precedent" },
      { value: 4, label: "5–6 comp titles", description: "Strong market validation for this category" },
      { value: 5, label: "More than 6 comp titles", description: "Proven, well-established market category" },
    ],
  },
  {
    id: "uniqueness_5",
    category: "uniquenessAndTimeliness",
    question: "Is there a clear, identifiable gap in the current market that your book fills?",
    options: [
      { value: 1, label: "No obvious gap", description: "The market seems well-covered already" },
      { value: 2, label: "Small gap", description: "Minor hole in the existing landscape" },
      { value: 3, label: "Clear gap", description: "A visible need not currently being met" },
      { value: 4, label: "Significant gap", description: "Readers are actively looking for this book" },
      { value: 5, label: "Obvious, widely acknowledged unmet need", description: "Everyone in the space knows this book is missing from shelves" },
    ],
  },

  // ── WRITING ───────────────────────────────────────────────────────────────
  {
    id: "writing_1",
    category: "writing",
    question: "Do you have professional writing experience?",
    options: [
      { value: 1, label: "None", description: "Haven't published anything yet" },
      { value: 2, label: "Published a few times, nothing major", description: "Some small bylines but no sustained publishing history" },
      { value: 3, label: "Published regularly", description: "Online magazines, Substack, newspaper op-eds, academic journals, etc." },
      { value: 4, label: "Currently published on a regular basis", description: "Active columns, journals, trade periodicals, or regular guest blogging" },
      { value: 5, label: "Regularly published and have written at least one book", description: "Established writing career with a book credit" },
    ],
  },
  {
    id: "writing_2",
    category: "writing",
    question: "If you have a manuscript, what stage is it in?",
    options: [
      { value: 1, label: "Concept or outline only", description: "Still in the ideas phase" },
      { value: 2, label: "First draft in progress", description: "Writing but not yet complete" },
      { value: 3, label: "Complete first draft", description: "Written but needs significant refinement" },
      { value: 4, label: "Revised and beta-read", description: "Has received and incorporated meaningful feedback" },
      { value: 5, label: "Professionally edited / submission-ready", description: "Polished and ready for the market" },
    ],
  },
  {
    id: "writing_3",
    category: "writing",
    question: "What level of professional feedback have you received on your manuscript?",
    options: [
      { value: 1, label: "No feedback yet", description: "Haven't shared with others" },
      { value: 2, label: "Friends or family only", description: "Informal feedback only" },
      { value: 3, label: "Writing group or beta readers", description: "Community-level feedback received" },
      { value: 4, label: "Professional editor or manuscript critique", description: "Expert structural feedback received" },
      { value: 5, label: "Multiple rounds of professional editing", description: "Thoroughly vetted and refined" },
    ],
  },
  {
    id: "writing_4",
    category: "writing",
    question: "If you have received professional feedback, what kind of comments are you getting?",
    options: [
      { value: 1, label: "No professional feedback received yet", description: "Haven't reached this stage" },
      { value: 2, label: "Needs a complete rewrite or new concept", description: "Fundamental issues with the approach" },
      { value: 3, label: "Needs a developmental edit to solve serious problems", description: "Structural or conceptual issues require significant work" },
      { value: 4, label: "Solid, but needs work in structure, clarity, or voice", description: "Good foundation with specific areas to improve" },
      { value: 5, label: "Strong, with only minimal revision needed", description: "Close to polished and publication-ready" },
    ],
  },
  {
    id: "writing_5",
    category: "writing",
    question: "What's the status of your book proposal?",
    options: [
      { value: 1, label: "I didn't know I needed a book proposal", description: "Not yet researched the nonfiction submission process" },
      { value: 2, label: "Basic outline only", description: "Early stage, not submission-ready" },
      { value: 3, label: "Draft proposal in progress", description: "Working through the key sections" },
      { value: 4, label: "Complete draft proposal", description: "All major sections written, needs refinement" },
      { value: 5, label: "Polished, agent-ready proposal", description: "Professionally refined and ready to submit" },
    ],
  },

  // ── AUDIENCE ──────────────────────────────────────────────────────────────
  {
    id: "audience_1",
    category: "audience",
    question: "How large is your Tier 1 audience — the readers for whom this book is most immediately relevant?",
    options: [
      { value: 1, label: "Very niche (under 10,000 people)", description: "Extremely small, specialized target audience" },
      { value: 2, label: "Niche (10,000 – 100,000)", description: "Small but clearly defined audience" },
      { value: 3, label: "Moderate (100,000 – 1 million)", description: "Meaningful but not mass-market appeal" },
      { value: 4, label: "Large (1 million – 10 million)", description: "Broad potential readership" },
      { value: 5, label: "Mass market (10 million+)", description: "Universal or near-universal appeal" },
    ],
  },
  {
    id: "audience_2",
    category: "audience",
    question: "Does your target audience read books?",
    options: [
      { value: 1, label: "I don't know", description: "Haven't researched their reading habits" },
      { value: 2, label: "Rarely — they mostly consume online media", description: "Not a book-buying audience" },
      { value: 3, label: "Occasionally — in the right format (audio, graphic novels)", description: "Will engage with books in specific forms" },
      { value: 4, label: "Regularly — consistent book buyers in all forms", description: "Print, e-book, and audio book buyers" },
      { value: 5, label: "Voraciously — they are rabid readers", description: "Books are central to how they engage with ideas" },
    ],
  },
  {
    id: "audience_3",
    category: "audience",
    question: "Does your book have potential for film, TV, gaming, or other media adaptations?",
    options: [
      { value: 1, label: "No adaptation potential", description: "Not suited for other media" },
      { value: 2, label: "Unlikely", description: "Minimal crossover or adaptation appeal" },
      { value: 3, label: "Possible", description: "Could work in another format with some development" },
      { value: 4, label: "Strong potential", description: "Clear, compelling media adaptation possibilities" },
      { value: 5, label: "Obvious adaptation potential", description: "Built for screen, audio, or other media" },
    ],
  },
  {
    id: "audience_4",
    category: "audience",
    question: "How active and visible are you in the media your audience consumes regularly?",
    options: [
      { value: 1, label: "Not at all", description: "No presence in your audience's media" },
      { value: 2, label: "Lightly — a few videos on YouTube or TikTok", description: "Minimal presence in your niche's media" },
      { value: 3, label: "Moderately — a regularly read Substack or niche blog", description: "Consistent but limited media presence" },
      { value: 4, label: "Broadly — appear regularly on podcasts or cable news as an expert", description: "Recognized expert in your field's media" },
      { value: 5, label: "Constantly — YouTube channel, podcast, or show with large following", description: "Dominant media presence in your niche" },
    ],
  },
  {
    id: "audience_5",
    category: "audience",
    question: "How big and engaged is your personal network?",
    options: [
      { value: 1, label: "Not very large — a few dozen LinkedIn connections", description: "Limited professional or personal network" },
      { value: 2, label: "Moderate — a semi-regular newsletter to a decent list", description: "Some network but limited ongoing engagement" },
      { value: 3, label: "Solid — an online community with hundreds of engaged members", description: "Subscription or community with regular contact" },
      { value: 4, label: "Strong — an affinity group of thousands you stay in touch with personally", description: "Email contact and in-person relationship with a large group" },
      { value: 5, label: "Family — thousands bonded by a common purpose", description: "Deeply loyal community bound by business, civic, political, or religious affiliation" },
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

# DealScore — Scoring Methodology Review

**How to use this document**

This is a fill-in calibration sheet for the people who actually know publishing. Every section maps directly to code that Claude Code can update. Work through it in order: high-level weights first, then question calibration, then outcome language. Changes here can be implemented without you touching any code — hand the completed document back to Claude Code and ask it to implement.

Anything in `[FILL IN]` is waiting for your input. Anything shown is the current live value.

---

## 1. HOW THE SCORE IS CALCULATED

**Overview of the math:**

1. The assessment has 20 questions across 5 categories (4 questions each).
2. Each answer is scored 1–5.
3. Each category's 4 answers are summed and normalized to a 0–100 scale.
4. The 5 category scores are averaged using weights (see Section 2) to produce the final DealScore (0–100).
5. The final score maps to one of 6 spectrum bands (see Section 4).

**The 5 categories:**

| Code name                    | Display name               | # of questions |
|------------------------------|----------------------------|---------------|
| `platform`                   | Platform & Audience        | 4             |
| `manuscriptQuality`          | Manuscript Quality         | 4             |
| `conceptUniqueness`          | Concept Uniqueness         | 4             |
| `conceptCommercialPotential` | Commercial Potential       | 4             |
| `conceptTimeliness`          | Concept Timeliness         | 4             |

---

## 2. CATEGORY WEIGHTS

Weights control how much each category contributes to the final score. A weight of 1.2 means that category counts 20% more than a category at 1.0. Weights are relative to each other — you can use any numbers as long as they're proportional.

**Current weights:**

| Category                | Current weight | Your revised weight | Reason for change |
|-------------------------|---------------|--------------------|--------------------|
| Platform & Audience     | **1.2**       | [FILL IN]          | [FILL IN]          |
| Manuscript Quality      | 1.0           | [FILL IN]          | [FILL IN]          |
| Concept Uniqueness      | 1.0           | [FILL IN]          | [FILL IN]          |
| Commercial Potential    | 1.0           | [FILL IN]          | [FILL IN]          |
| Concept Timeliness      | 1.0           | [FILL IN]          | [FILL IN]          |

**Notes on weighting:**

- Platform is currently the only category with elevated weight (1.2), reflecting that publishers prioritise it for nonfiction.
- If you want two categories to count equally, give them the same number.
- A weight of 0 would remove that category entirely. A weight of 2.0 means it counts twice as much as a 1.0 category.
- Leave blank any rows you don't want to change.

---

## 3. QUESTION CALIBRATION

For each question, the current answer options are shown. You can:

- **Re-label** any option (e.g. change threshold numbers)
- **Re-describe** any option (the small italic line under the label)
- **Flag** any option as misweighted (e.g. "a 3 here should actually score like a 4")
- **Replace** any question entirely

Use the "Expert notes" column. Claude Code will implement all of it.

---

### CATEGORY: Platform & Audience

**Why it matters (current description shown to users):**
> Your existing public reach: social following, email list, press coverage, speaking engagements, and media presence. For nonfiction, publishers look at this first. A strong concept with thin platform can sell, but the concept has to be exceptional.

Revised description: [FILL IN or leave blank to keep]

---

**Q1 — Total social media following (all platforms combined)**

| Score | Current label         | Current description                   | Your revised label | Your revised description | Notes |
|-------|-----------------------|---------------------------------------|--------------------|--------------------------|-------|
| 1     | Under 1,000           | Just starting to build an online presence | [FILL IN]      | [FILL IN]                | [FILL IN] |
| 2     | 1,000 – 5,000         | A growing but small following         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | 5,000 – 25,000        | A meaningful niche audience           | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | 25,000 – 100,000      | A significant, engaged audience       | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | 100,000+              | A large, established platform         | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q1: [FILL IN]

---

**Q2 — Email newsletter size**

| Score | Current label             | Current description                        | Your revised label | Your revised description | Notes |
|-------|---------------------------|--------------------------------------------|--------------------|--------------------------|-------|
| 1     | No newsletter             | Email list building not started            | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Under 500 subscribers     | Just getting started with email            | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | 500 – 2,000 subscribers   | A growing email audience                   | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | 2,000 – 10,000 subscribers| A strong, loyal email following            | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | 10,000+ subscribers       | A powerful, direct-to-reader platform      | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q2: [FILL IN]

---

**Q3 — Speaking / podcast appearances**

| Score | Current label                          | Current description                | Your revised label | Your revised description | Notes |
|-------|----------------------------------------|------------------------------------|--------------------|--------------------------|-------|
| 1     | Never                                  | No public speaking or appearances  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Rarely (1–2 times ever)                | Occasional appearances             | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Sometimes (3–5 times per year)         | Building a speaking presence       | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Regularly (6–12 times per year)        | Recognized voice in the space      | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Frequently — major stages or podcasts  | Established thought leader         | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q3: [FILL IN]

---

**Q4 — Published bylines / recognized author brand**

| Score | Current label                                  | Current description                     | Your revised label | Your revised description | Notes |
|-------|------------------------------------------------|-----------------------------------------|--------------------|--------------------------|-------|
| 1     | No published work                              | Haven't started building a writing brand | [FILL IN]         | [FILL IN]                | [FILL IN] |
| 2     | Personal blog or social posts only             | Writing for yourself, not for audiences  | [FILL IN]         | [FILL IN]                | [FILL IN] |
| 3     | Guest posts or small publications              | Beginning to get bylines                 | [FILL IN]         | [FILL IN]                | [FILL IN] |
| 4     | Established bylines in mid-tier outlets        | Known and credible in your niche         | [FILL IN]         | [FILL IN]                | [FILL IN] |
| 5     | Major publications or nationally recognized brand | Nationally recognized voice           | [FILL IN]         | [FILL IN]                | [FILL IN] |

Expert notes on Q4: [FILL IN]

---

### CATEGORY: Manuscript Quality

**Current description shown to users:**
> The development and polish of your manuscript and book proposal. Nonfiction is acquired on proposal, not finished manuscript, but a weak proposal signals an unprepared author. Strong comps, a sharp overview, and sample chapters matter enormously.

Revised description: [FILL IN or leave blank]

---

**Q5 — Stage of manuscript / proposal**

| Score | Current label                        | Current description                             | Your revised label | Your revised description | Notes |
|-------|--------------------------------------|-------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Concept or outline only              | Still in the ideas phase                        | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | First draft in progress              | Writing but not yet complete                    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Complete first draft                 | Written but needs significant refinement        | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Revised and beta-read                | Has received and incorporated meaningful feedback | [FILL IN]        | [FILL IN]                | [FILL IN] |
| 5     | Professionally edited / submission-ready | Polished and ready for the market           | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q5: [FILL IN]

---

**Q6 — Level of professional feedback received**

| Score | Current label                              | Current description                     | Your revised label | Your revised description | Notes |
|-------|--------------------------------------------|-----------------------------------------|--------------------|--------------------------|-------|
| 1     | No feedback yet                            | Haven't shared with others              | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Friends or family only                     | Informal feedback only                  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Writing group or beta readers              | Community-level feedback received       | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Professional editor or manuscript critique | Expert structural feedback received     | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Multiple rounds of professional editing    | Thoroughly vetted and refined           | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q6: [FILL IN]

---

**Q7 — Development of book proposal**

| Score | Current label                  | Current description                        | Your revised label | Your revised description | Notes |
|-------|--------------------------------|--------------------------------------------|--------------------|--------------------------|-------|
| 1     | No proposal yet                | Have not started the proposal              | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Basic outline only             | Early stage, not submission-ready          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Draft proposal in progress     | Working through the key sections           | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Complete draft proposal        | All major sections written, needs refinement | [FILL IN]        | [FILL IN]                | [FILL IN] |
| 5     | Polished, agent-ready proposal | Professionally refined and ready to submit | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q7: [FILL IN]

---

**Q8 — Comparable titles (comps)**

| Score | Current label                                    | Current description                            | Your revised label | Your revised description | Notes |
|-------|--------------------------------------------------|------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Haven't identified comps                         | Not yet researched the competitive market      | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Comps are vague or very dated (5+ years old)     | Beginning market research                      | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Solid comps, somewhat dated (3–5 years)          | Good positioning but could be sharper          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Recent, well-matched comps (last 1–3 years)      | Strong and credible market positioning         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Perfect comps — recent bestsellers in your lane  | Ideal, publisher-ready market positioning      | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q8: [FILL IN]

---

### CATEGORY: Concept Uniqueness

**Current description shown to users:**
> How differentiated your book is, and critically, whether you are the only person who could have written it. 'Only you could write this' is one of the most powerful things an agent can say to an acquisitions editor.

Revised description: [FILL IN or leave blank]

---

**Q9 — Differentiation from existing books**

| Score | Current label                           | Current description                            | Your revised label | Your revised description | Notes |
|-------|-----------------------------------------|------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Very similar to existing books          | Little differentiation identified              | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Somewhat similar with minor twists      | Some overlap with existing books               | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Distinct angle on a known topic         | Clear but not dramatic difference              | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Fresh perspective that stands out       | Meaningfully different from what's on shelves  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Truly original concept                  | Nothing quite like it on the market            | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q9: [FILL IN]

---

**Q10 — Author's unique expertise or lived experience**

| Score | Current label                             | Current description                               | Your revised label | Your revised description | Notes |
|-------|-------------------------------------------|---------------------------------------------------|--------------------|--------------------------|-------|
| 1     | No specific relevant expertise            | Could be written by many people                   | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Some relevant background                  | Modest connection to the material                 | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Notable expertise or lived experience     | Credible and specific voice on the topic          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Unique, hard-to-replicate perspective     | Distinctly positioned as the right author         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Only you could write this book            | Unparalleled expertise or irreplaceable experience | [FILL IN]         | [FILL IN]                | [FILL IN] |

Expert notes on Q10: [FILL IN]

---

**Q11 — Innovation in structure, narrative, or voice**

| Score | Current label            | Current description                       | Your revised label | Your revised description | Notes |
|-------|--------------------------|-------------------------------------------|--------------------|--------------------------|-------|
| 1     | Entirely conventional    | Standard structure for the genre          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Slightly unconventional  | Small departures from genre norms         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Somewhat innovative      | Noticeable structural or voice choices    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Quite innovative         | Distinctly fresh approach to the genre    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Groundbreaking           | Reinvents or meaningfully expands the form | [FILL IN]         | [FILL IN]                | [FILL IN] |

Expert notes on Q11: [FILL IN]

---

**Q12 — Can you articulate your differentiator in one sentence?**

| Score | Current label                       | Current description                                    | Your revised label | Your revised description | Notes |
|-------|-------------------------------------|--------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Can't articulate it yet             | Still working out the core differentiator              | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Vague description                   | General sense but not yet sharp                        | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Reasonable but somewhat generic     | Solid but not immediately memorable                    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Clear and specific                  | Distinctive and easy to remember                       | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Compelling and irresistible         | The kind of hook that stops an editor in their tracks  | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q12: [FILL IN]

---

### CATEGORY: Commercial Potential

**Current description shown to users:**
> The size of the potential readership and the strength of your commercial hook. The pitch question every editor asks is: why is this book necessary, and who is buying it? A compelling answer to both is what gets a deal.

Revised description: [FILL IN or leave blank]

---

**Q13 — Size of potential readership**

| Score | Current label                      | Current description                          | Your revised label | Your revised description | Notes |
|-------|------------------------------------|----------------------------------------------|--------------------|--------------------------|-------|
| 1     | Very niche (under 10,000 people)   | Extremely small, specialized target audience | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Niche (10,000 – 100,000)           | Small but clearly defined audience           | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Moderate (100,000 – 1 million)     | Meaningful but not mass-market appeal        | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Large (1 million – 10 million)     | Broad potential readership                   | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Mass market (10 million+)          | Universal or near-universal appeal           | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q13: [FILL IN]

---

**Q14 — Film / TV / media adaptation potential**

| Score | Current label               | Current description                                   | Your revised label | Your revised description | Notes |
|-------|-----------------------------|-------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | No adaptation potential     | Not suited for other media                            | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Unlikely                    | Minimal crossover or adaptation appeal                | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Possible                    | Could work in another format with some effort         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Strong potential            | Clear, compelling media adaptation possibilities      | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Obvious adaptation potential | Built for screen, audio, or other media              | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q14: [FILL IN — is this actually a meaningful signal for a nonfiction deal? Or should this question be replaced?]

---

**Q15 — Strength of commercial hook / one-sentence pitch**

| Score | Current label           | Current description                                       | Your revised label | Your revised description | Notes |
|-------|-------------------------|-----------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Hard to explain quickly | Difficult to pitch to a general audience                  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Niche pitch             | Clear to insiders but confusing to general readers        | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Reasonable hook         | Interesting but not immediately compelling                | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Strong hook             | Intriguing to most people who hear it                     | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Irresistible pitch      | Immediate "I want to read that" reaction from anyone      | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q15: [FILL IN]

---

**Q16 — Series / sequel / franchise potential**

| Score | Current label                       | Current description                                        | Your revised label | Your revised description | Notes |
|-------|-------------------------------------|------------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Strictly standalone                 | One-and-done concept with no natural continuation          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Possible but unlikely sequel        | Could continue but doesn't naturally call for it           | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Natural follow-up possible          | Could expand if the first book succeeds                    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Clear series potential              | Designed or well-suited for continuation                   | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Built-in franchise potential        | World, character, or system actively invites expansion     | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q16: [FILL IN — does series potential actually matter for nonfiction, or is this more fiction-oriented?]

---

### CATEGORY: Concept Timeliness

**Current description shown to users:**
> Where your concept sits in the cultural moment. Timing is the hardest variable to control. The same book can go from highly sellable to a pass within two years as conversations shift and market conditions change.

Revised description: [FILL IN or leave blank]

---

**Q17 — Relevance to current cultural conversations**

| Score | Current label                              | Current description                                    | Your revised label | Your revised description | Notes |
|-------|--------------------------------------------|--------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | Not culturally relevant right now          | Disconnected from current discourse                    | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Mildly relevant                            | Tangentially connected to current topics               | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Somewhat timely                            | Related to ongoing but not dominant conversations      | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Quite timely                               | Connected to active, prominent cultural conversations  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | At the center of a major conversation      | Exactly what people are talking about right now        | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q17: [FILL IN]

---

**Q18 — Connection to emerging trend or unmet market need**

| Score | Current label                             | Current description                               | Your revised label | Your revised description | Notes |
|-------|-------------------------------------------|---------------------------------------------------|--------------------|--------------------------|-------|
| 1     | No emerging trends                        | No connection to new or growing movements         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Loosely connected                         | Peripheral connection to emerging trends          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Connected to a known trend                | Aligns with an identified movement                | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Directly addresses an emerging trend      | Written for this specific moment                  | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Ahead of a major trend                    | Anticipating where the cultural conversation is going | [FILL IN]       | [FILL IN]                | [FILL IN] |

Expert notes on Q18: [FILL IN]

---

**Q19 — Evergreen longevity**

| Score | Current label                               | Current description                      | Your revised label | Your revised description | Notes |
|-------|---------------------------------------------|------------------------------------------|--------------------|--------------------------|-------|
| 1     | Highly time-sensitive — will date quickly   | Tied to a fleeting moment or trend       | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Likely to feel dated within 2–3 years       | Shorter commercial shelf life            | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Mixed — some evergreen, some dated          | Good now but uncertain longevity         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Mostly evergreen with a timely hook         | Strong balance of now and lasting relevance | [FILL IN]        | [FILL IN]                | [FILL IN] |
| 5     | Timeless topic                              | Will be as relevant in a decade as today | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q19: [FILL IN]

---

**Q20 — Identifiable gap in the current market**

| Score | Current label                               | Current description                                            | Your revised label | Your revised description | Notes |
|-------|---------------------------------------------|----------------------------------------------------------------|--------------------|--------------------------|-------|
| 1     | No obvious gap                              | The market seems well-covered already                          | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 2     | Small gap                                   | Minor hole in the existing landscape                           | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 3     | Clear gap                                   | A visible need not currently being met                         | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 4     | Significant gap                             | Readers are actively looking for this book                     | [FILL IN]          | [FILL IN]                | [FILL IN] |
| 5     | Obvious, widely acknowledged unmet need     | Everyone in the space knows this book is missing from shelves  | [FILL IN]          | [FILL IN]                | [FILL IN] |

Expert notes on Q20: [FILL IN]

---

## 4. SCORE SPECTRUM — BANDS AND OUTCOMES

These are the 6 readiness tiers. Each band has a score range, a label, and a paragraph of copy shown to the user on their results page. The descriptions are the most important editorial lever in the whole system — this is where expert voice matters most.

The current paragraphs are functional but generic. Replace them with language that reflects how an experienced agent or publisher actually thinks and speaks.

| Band | Current range | Current label        | Your revised range | Your revised label | Notes |
|------|--------------|----------------------|--------------------|-------------------|-------|
| 1    | 0 – 20       | Just Getting Started | [FILL IN]          | [FILL IN]         | [FILL IN] |
| 2    | 21 – 40      | Early Stage          | [FILL IN]          | [FILL IN]         | [FILL IN] |
| 3    | 41 – 60      | Building Momentum    | [FILL IN]          | [FILL IN]         | [FILL IN] |
| 4    | 61 – 75      | Strong Candidate     | [FILL IN]          | [FILL IN]         | [FILL IN] |
| 5    | 76 – 88      | Near Deal-Ready      | [FILL IN]          | [FILL IN]         | [FILL IN] |
| 6    | 89 – 100     | Deal-Ready           | [FILL IN]          | [FILL IN]         | [FILL IN] |

**Revised band descriptions** (replace each paragraph below with your own language):

**Band 1 — Just Getting Started (0–20):**
> The foundations for a traditional deal are not yet in place. Your category breakdown shows where to focus first. Most authors at this stage benefit from hybrid or self-publishing while building toward traditional.

Your revised copy:
```
[FILL IN]
```

**Band 2 — Early Stage (21–40):**
> Key variables need significant development before traditional publishing is realistic. Hybrid publishing is a viable path right now. A focused strategy on your weakest areas over 12–18 months could change this picture.

Your revised copy:
```
[FILL IN]
```

**Band 3 — Building Momentum (41–60):**
> Real foundations are in place and a traditional deal is possible — but competitive. Your category breakdown shows you exactly which one or two variables are holding you back. Those are where to focus your energy.

Your revised copy:
```
[FILL IN]
```

**Band 4 — Strong Candidate (61–75):**
> You are competitive for representation. Agents will take your query seriously. At this level, the difference between a request and a pass usually comes down to one variable — most often platform or a sharper commercial hook.

Your revised copy:
```
[FILL IN]
```

**Band 5 — Near Deal-Ready (76–88):**
> Very attractive to agents and publishers. The gaps are small and addressable. At this stage, timing, the right agent relationship, and acquisitions editor fit matter as much as the manuscript.

Your revised copy:
```
[FILL IN]
```

**Band 6 — Deal-Ready (89–100):**
> You have the platform, manuscript, and concept to compete at the highest level. The variables outside your control — timing, market conditions, editor fit — are now the primary factors.

Your revised copy:
```
[FILL IN]
```

---

## 5. GENRE-SPECIFIC ADJUSTMENTS

Currently the score is calculated the same way regardless of genre. In reality, what a publisher looks for in a Business/Finance book is different from what they look for in a Memoir. This section lets you define per-genre weight adjustments.

**Should any categories be weighted differently by genre?**

The genres in the system are:
- Narrative Nonfiction
- Memoir / Personal Essay
- Self-Help / Personal Development
- Business / Finance
- Leadership / Management
- Health / Wellness
- History / Biography
- Politics / Current Affairs
- Science / Technology
- True Crime
- Humor / Satire
- Other Nonfiction

Use this table to flag any genre where the default weights feel wrong. You only need to fill in the categories you want to change for that genre — the rest stay at their defaults.

| Genre                        | Platform adj. | Manuscript adj. | Uniqueness adj. | Commercial adj. | Timeliness adj. | Notes |
|------------------------------|--------------|-----------------|-----------------|-----------------|-----------------|-------|
| Narrative Nonfiction         | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Memoir / Personal Essay      | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Self-Help / Personal Development | [FILL IN] | [FILL IN]      | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Business / Finance           | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Leadership / Management      | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Health / Wellness            | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| History / Biography          | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Politics / Current Affairs   | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Science / Technology         | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| True Crime                   | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |
| Humor / Satire               | [FILL IN]    | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN]       | [FILL IN] |

Example of how to fill this in:
> Memoir / Personal Essay: Platform 0.8 (lower — literary agents care more about voice and concept than follower count for memoir), Manuscript 1.4 (higher — execution quality is far more important for memoir than for business), Timeliness 0.7 (memoir is less tied to the news cycle)

---

## 6. HARD FLOOR RULES

Sometimes a single variable should make a traditional deal essentially impossible regardless of the overall score. For example: if a self-help author has under 1,000 followers AND no email list AND no speaking history, the platform ceiling is so low that no amount of concept strength can compensate.

These are override rules — they cap or adjust the final score if certain conditions are met.

**Are there any conditions that should trigger a hard outcome regardless of total score?**

Fill in any rules that feel important. Be specific about the condition and the consequence.

```
Rule 1: [FILL IN]
Condition: [e.g. "Platform category score is under 25 AND genre is Business/Finance or Self-Help"]
Consequence: [e.g. "Cap the recommended outcome at Band 2 (Early Stage) regardless of total DealScore"]
Reason: [e.g. "Business publishers won't touch a self-help book without demonstrated reach"]

Rule 2: [FILL IN]
Condition: [FILL IN]
Consequence: [FILL IN]
Reason: [FILL IN]

Rule 3: [FILL IN]
Condition: [FILL IN]
Consequence: [FILL IN]
Reason: [FILL IN]
```

---

## 7. RECOMMENDED NEXT STEPS (per band, shown on results page)

The results page shows each user a list of "what to do next" based on their score. Currently this is driven by the tactics library. This section lets you define the framing copy that appears above those tactics — the editorial voice that puts the score in human context.

This is where you can speak directly to where a user sits and what the honest advice is. It's distinct from the band description (Section 4) — that explains what the score means. This is what you'd say to the author if you were on the phone with them.

**Band 1 (0–20) — what would you tell this author on a call?**
```
[FILL IN]
```

**Band 2 (21–40):**
```
[FILL IN]
```

**Band 3 (41–60):**
```
[FILL IN]
```

**Band 4 (61–75):**
```
[FILL IN]
```

**Band 5 (76–88):**
```
[FILL IN]
```

**Band 6 (89–100):**
```
[FILL IN]
```

---

## 8. QUESTIONS TO CONSIDER ADDING OR REPLACING

If any of the 20 current questions feel wrong, redundant, or missing something important, note them here. Claude Code can add, remove, or replace questions — but each category must keep the same number of questions (currently 4 each) for the scoring math to work, unless you want to restructure the whole system (which is also doable).

**Questions to replace (by number) and with what:**

```
Replace Q[number]:
New question text: [FILL IN]
New options (1–5): [FILL IN]
Reason: [FILL IN]

Replace Q[number]:
...
```

**Questions that feel like they're missing:**

```
Missing from [category]:
Topic: [FILL IN]
Reason it matters: [FILL IN]
```

---

## HOW TO HAND THIS BACK

When you've filled in what you want to change, share this document with Claude Code and say: **"Implement the scoring methodology changes in SCORING-METHODOLOGY.md."**

Claude Code will:
1. Update `lib/scoring.ts` with new category weights and any hard floor rules
2. Update `lib/questions.ts` with revised question text, labels, and descriptions
3. Update `lib/types.ts` with revised spectrum bands, thresholds, and descriptions
4. Add genre-specific weight logic to `lib/scoring.ts` if you've filled in Section 5
5. Update any results-page copy if you've filled in Section 7

You don't need to fill in every section. Partial input is fine — anything left blank stays as it is.

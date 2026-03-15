import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { AssessmentResult, CATEGORY_DISPLAY_NAMES, CategoryKey } from "@/lib/types";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { result }: { result: AssessmentResult } = body;

  if (!result) {
    return new Response("Missing result", { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response("ANTHROPIC_API_KEY not configured", { status: 500 });
  }

  const client = new Anthropic({ apiKey });

  const sortedCategories = [...result.categoryScores].sort(
    (a, b) => a.score - b.score
  );
  const weakest = sortedCategories.slice(0, 2);

  const categoryLines = result.categoryScores
    .map(
      (c) =>
        `• ${CATEGORY_DISPLAY_NAMES[c.key as CategoryKey]}: ${Math.round(c.score)}/100${c.key === "platform" ? " (20% weighted)" : ""}`
    )
    .join("\n");

  const weakLines = weakest
    .map(
      (c) =>
        `• ${CATEGORY_DISPLAY_NAMES[c.key as CategoryKey]}: ${Math.round(c.score)}/100`
    )
    .join("\n");

  const prompt = `You are an expert publishing consultant and author coach with 20+ years helping aspiring authors land traditional book deals. You combine the candor of a seasoned literary consultant with the warmth of a genuine mentor.

An author has completed their DealScore readiness assessment. Here are their results:

Genre: ${result.genre}
DealScore: ${result.dealScore}/100 (${result.label})

Category Breakdown:
${categoryLines}

Weakest areas requiring most attention:
${weakLines}

Please write a personalized coaching response with the following sections (use these exact headings):

**Where You Stand**
2-3 sentences: honest, warm, specific to their score and genre. Don't sugarcoat or over-praise. Be real.

**Your Top Priorities**
3 highly specific, actionable recommendations focused on their two weakest areas. Be specific to the ${result.genre} genre and their exact score breakdown. No generic publishing advice.

**Quick Wins (Next 30 Days)**
2–3 things they can start immediately this week or this month. Concrete, low-barrier actions.

**Your 3–6 Month Roadmap**
A brief narrative (3–4 sentences) describing what focused effort over the next few months should look like for this specific author at this specific stage.

Tone guidelines:
- Encouraging but honest; don't avoid uncomfortable truths
- Highly specific to ${result.genre} and their actual numbers
- Avoid mentioning literary agents or querying — focus on building readiness
- No generic publishing advice; everything should be tailored to their profile
- Keep total response under 550 words`;

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
    },
  });
}

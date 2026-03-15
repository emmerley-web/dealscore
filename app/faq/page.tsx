"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const FAQS: FAQItem[] = [
  {
    question: "Does a high DealScore guarantee a book deal?",
    answer: (
      <>
        <p>
          No. A high score means you&rsquo;re well-positioned on the variables that
          consistently matter to agents and publishers. It doesn&rsquo;t guarantee any
          particular outcome.
        </p>
        <p>
          Publishing involves subjectivity, timing, and factors no framework can fully
          account for. The right editor at the right moment, an agent who connects with
          your voice, a cultural window that opens unexpectedly: these are real and
          meaningful, and they sit outside what any scoring tool can predict.
        </p>
        <p>
          Use your score to understand your strengths and gaps, and to identify where
          your preparation needs more work. Treat it as a starting point, not a verdict.
        </p>
      </>
    ),
  },
  {
    question: "What does DealScore actually measure?",
    answer: (
      <>
        <p>
          DealScore evaluates you across five variables that drive acquisition decisions
          in nonfiction publishing:
        </p>
        <ul>
          <li><strong>Platform:</strong> your existing audience, media presence, speaking profile, and reach. This is the single most heavily weighted variable for debut nonfiction authors.</li>
          <li><strong>Manuscript quality:</strong> the strength, clarity, and completeness of your writing and proposal.</li>
          <li><strong>Concept uniqueness:</strong> whether your idea is genuinely differentiated, and whether you&rsquo;re the only person who could have written this particular book.</li>
          <li><strong>Commercial potential:</strong> the size of the likely market and whether publishers can identify a clear audience to sell to.</li>
          <li><strong>Timeliness:</strong> how well your topic aligns with current cultural, professional, or market conversations.</li>
        </ul>
        <p>
          These are not abstract criteria. They are the categories that agents and editors
          explicitly or implicitly apply when they evaluate a submission.
        </p>
      </>
    ),
  },
  {
    question: "Why does platform matter so much?",
    answer: (
      <>
        <p>
          For debut nonfiction, platform is the variable publishers weight most heavily.
          This is because nonfiction books are primarily sold based on the author, not
          the manuscript. A publisher acquiring a business or self-help book is betting
          on whether the author can drive sales, get media attention, and speak to an
          audience that already exists.
        </p>
        <p>
          Platform doesn&rsquo;t have to mean social media followers. It can include a
          newsletter, a podcast, keynote speaking, a professional reputation in a
          defined field, or significant press coverage. What matters is whether there&rsquo;s
          an identifiable audience that trusts you and will buy what you write.
        </p>
        <p>
          The exception is memoir and narrative nonfiction, where a genuinely singular
          story can sometimes overcome a thin platform. But even then, publishers will
          want to understand how the book reaches readers.
        </p>
      </>
    ),
  },
  {
    question: "What is the difference between traditional, hybrid, and self-publishing?",
    answer: (
      <>
        <p>
          <strong>Traditional publishing</strong> (Big Five and major independents) means
          signing with a literary agent who then sells your book to a publisher. You
          receive an advance against future royalties, and the publisher covers all
          production costs. In exchange, the publisher controls cover design, title,
          release date, and marketing decisions. The process from finished proposal to
          published book typically takes two to four years.
        </p>
        <p>
          <strong>Hybrid publishing</strong> is a middle path. Hybrid publishers offer
          professional editing, design, and distribution, but authors share the production
          costs. In return, you retain more rights and earn higher royalty rates than in
          a traditional deal. Quality varies significantly across hybrid publishers, so
          vetting is important. For authors with credible ideas and modest platforms, it
          is often the most realistic route to a professionally produced book.
        </p>
        <p>
          <strong>Self-publishing</strong> gives you full control and full responsibility.
          You own all rights, keep most revenue, and publish on your own timeline. The
          trade-off is that all production costs (editing, design, formatting, and
          distribution) are yours, and discoverability requires active marketing. It
          works best when you already have an audience or a specific community to sell
          into directly.
        </p>
        <p>
          None of these routes is inherently better than the others. The right path
          depends on your goals, your timeline, your platform, and what you&rsquo;re willing
          to invest.
        </p>
      </>
    ),
  },
  {
    question: "Do I need a literary agent to get a book deal?",
    answer: (
      <>
        <p>
          For the Big Five publishers and most major houses, yes. These publishers do not
          accept unsolicited submissions directly from authors. You need a literary agent
          to represent your work, and the agent submits on your behalf.
        </p>
        <p>
          Acquiring an agent is itself a competitive process. Most agents receive thousands
          of query letters each year and sign a small fraction of them. The querying process
          can take anywhere from a few months to two or more years.
        </p>
        <p>
          Hybrid and self-publishing routes don&rsquo;t require an agent. Some smaller
          independent publishers also accept direct submissions, but checking their
          individual submission guidelines is essential.
        </p>
      </>
    ),
  },
  {
    question: "How accurate is the score?",
    answer: (
      <>
        <p>
          DealScore is a framework tool, not a predictive model. It is based on the
          variables that publishing professionals consistently apply when evaluating
          nonfiction submissions, and the scoring logic reflects patterns observed across
          hundreds of real acquisition processes.
        </p>
        <p>
          That said, no 20-question assessment can fully capture the complexity of an
          individual book, author, or market moment. Your score is a structured estimate
          of your positioning, not a definitive read. Some authors with strong scores will
          not get deals. Some with modest scores will.
        </p>
        <p>
          The most useful way to use DealScore is to look at the category breakdown, not
          just the overall number. The breakdown tells you which specific variables are
          working in your favour and which need attention before you start querying.
        </p>
      </>
    ),
  },
  {
    question: "How often should I retake the assessment?",
    answer: (
      <p>
        Whenever something material changes. If you have grown your platform, finished
        a stronger proposal draft, found a clearer commercial angle, or shifted your
        concept significantly, take it again. Platform building and manuscript
        development happen over months, so quarterly reassessments can help you track
        whether your preparation is moving in the right direction.
      </p>
    ),
  },
  {
    question: "Is DealScore only for traditional publishing?",
    answer: (
      <p>
        The scoring framework is calibrated against traditional publishing standards,
        because that is the context in which the variables matter most and are most
        clearly defined. But your score and category breakdown are useful regardless of
        which route you are considering. Even if you are planning to self-publish or go
        hybrid, understanding your platform strength, concept differentiation, and
        commercial potential will help you make better decisions about positioning,
        timing, and where to invest your preparation.
      </p>
    ),
  },
  {
    question: "What is a book proposal and do I need one?",
    answer: (
      <>
        <p>
          A book proposal is the standard submission document for nonfiction. It
          typically runs 20 to 50 pages and covers your overview and premise, market
          analysis, competing titles, author bio and platform, chapter outline, and
          two to three sample chapters.
        </p>
        <p>
          For traditional publishing, a proposal is non-negotiable. Literary agents
          evaluate nonfiction on the strength of the proposal, not the completed
          manuscript. For hybrid publishers, most require at least a partial proposal.
          For self-publishing, a proposal is not required, but the process of writing
          one can sharpen your thinking significantly before you invest in production.
        </p>
      </>
    ),
  },
];

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif font-bold text-stone-900 text-base sm:text-lg leading-snug">
          {item.question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-stone-400">
          {open ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>
      {open && (
        <div className="pb-6 prose-advice text-stone-600 text-base leading-relaxed space-y-4">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-stone-200 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
                Frequently asked questions
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Questions about DealScore and the publishing process
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed">
                What the score means, how publishing actually works, and what to do
                with your results.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="overflow-hidden h-[380px] bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {FAQS.map((item) => (
            <FAQRow key={item.question} item={item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
            Ready to find out where you stand
          </p>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-4 max-w-lg">
            Take the assessment
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed max-w-xl">
            20 questions covering the five variables that drive nonfiction acquisition decisions.
            A score out of 100, a category breakdown, and a clear read on which publishing
            route makes sense for where you are right now.
          </p>
          <Link
            href="/assessment"
            className="inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-700 text-white font-medium transition-colors group"
          >
            Get My Score
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

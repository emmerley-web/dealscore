import Link from "next/link";
import { BookOpen, ArrowRight, Pen, BarChart3, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(135deg, #2e1065 0%, #4c1d95 35%, #6d28d9 65%, #7c3aed 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Why we built this
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            DealScore was built by two people who have spent years inside the
            traditional publishing world — one as a ghostwriter who has seen
            hundreds of submissions, one as a technologist who experienced the
            opacity of the process firsthand.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-brand-500" />
              <h2 className="text-xl font-bold text-slate-900">The backstory</h2>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Tim had been ghostwriting nonfiction books for over fifteen years when
                he started noticing a pattern. The authors who got deals were not always
                the ones with the best books. They were the ones who happened to walk
                in the door already understanding what publishers were actually evaluating:
                platform, concept differentiation, commercial hook, timeliness, and whether
                the author was uniquely positioned to write the book.
              </p>
              <p>
                Most authors had no framework for any of this. They would ask their agent
                for feedback and get something vague. They would hire a book proposal
                consultant and spend $5,000 to be told their platform was thin. They would
                query for two years without understanding which one or two variables were
                actually holding them back.
              </p>
              <p>
                Tim built a scoring rubric for his own clients — a structured way to evaluate
                where an author stood across the five variables that drive acquisition decisions.
                He used it quietly for years. Authors who saw it found it clarifying in a way
                that general feedback never was.
              </p>
              <p>
                Emily came across the framework in 2022 and asked the obvious question: why was
                this sitting in a private document? They spent the following year refining the
                scoring model, pressure-testing the questions against real acquisition patterns,
                and building the tool that became DealScore.
              </p>
            </div>
          </div>

          {/* Team */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            The team
          </h2>
          <div className="space-y-8">

            {/* Tim */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lucindaliterary.com/wp-content/uploads/2025/03/Tim-Vandehey-headshot-2.jpeg"
                    alt="Tim Vandehey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Tim Vandehey</h3>
                  <p className="text-brand-600 font-medium text-sm">
                    Co-creator, Publishing Strategy
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://www.timvandehey.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-brand-600 transition-colors underline underline-offset-2"
                    >
                      timvandehey.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tvandehey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-brand-600 transition-colors underline underline-offset-2"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tim Vandehey is a New York Times bestselling ghostwriter and
                  co-author who has worked on more than 70 nonfiction books, with
                  over 20 published by Big Five houses including HarperCollins,
                  Penguin Random House, Simon &amp; Schuster, and Hachette. He has
                  been a full-time ghostwriter since 2005.
                </p>
                <p>
                  His work spans memoir, business, prescriptive self-help, cultural
                  commentary, and true crime. Among his credited titles are
                  {" "}<em>The Wait</em> (Simon &amp; Schuster, NYT bestseller, with
                  DeVon Franklin and Meagan Good),{" "}
                  <em>Swipe: The Science Behind Why We Don&apos;t Finish What We Start</em>{" "}
                  (Amplify Publishing), and{" "}
                  <em>Saturday Night, Sunday Morning</em> with P.J. Morton (Hachette).
                </p>
                <p>
                  Working directly with publishers and agents on hundreds of projects
                  over two decades, Tim developed a clear understanding of the variables
                  that drive acquisition decisions — and the ones that authors consistently
                  misunderstand or overlook entirely. DealScore is his attempt to make
                  that framework available to authors before they start querying, not
                  after they have spent years wondering why the answer was no.
                </p>
              </div>
            </div>

            {/* Emily */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md bg-slate-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-400">EL</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Emily Liao</h3>
                  <p className="text-brand-600 font-medium text-sm">
                    Co-creator, Product &amp; Technology
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://memoirist.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-brand-600 transition-colors underline underline-offset-2"
                    >
                      memoirist.co.uk
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emilytheghost/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-brand-600 transition-colors underline underline-offset-2"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Emily Liao is a ghostwriter and memoirist specialising in business
                  memoirs and book proposals for traditional publishing. Before pivoting
                  to writing full-time in 2021, she worked at an AI startup, bringing
                  a product and technology perspective to how authors navigate the
                  publishing process.
                </p>
                <p>
                  She has worked with clients across four continents on memoirs,
                  narrative business books, and proposals aimed at traditional publishers.
                  She is a member of the Association of Ghostwriters and has a particular
                  focus on helping authors whose stories are ready before their platform
                  catches up.
                </p>
                <p>
                  Emily&apos;s experience sitting across the table from both authors and
                  the submission process — as a collaborator helping writers get to
                  agent-ready, not just book-ready — shaped the question structure and
                  scoring logic in DealScore. She designed the assessment flow and
                  built the scoring model that turns 20 questions into a breakdown
                  authors can actually act on.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What we believe
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">No absolutes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                There are no universal rules in publishing. The right editor,
                a well-timed submission, an agent who connects with your voice —
                these matter enormously and no tool can predict them.
                DealScore gives you a framework, not a verdict.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Pen className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">The right path, not the dream path</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional publishing is one route. Hybrid publishers and
                self-publishing are serious, legitimate alternatives. The
                honest value is pointing authors toward the path that fits
                their situation — not just the one they hoped for.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">The knowledge gap is the problem</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nonfiction authors can ask anyone whether they have a chance.
                The problem is they do not know which variables matter most.
                That knowledge gap is itself a form of expertise — and it is
                what DealScore is designed to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Ready to find out where you stand?
          </h2>
          <p className="text-slate-600 mb-6">
            The assessment takes about five minutes. 20 questions covering the
            five variables that determine your readiness for a traditional
            nonfiction deal.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-lg transition-all group"
          >
            Take the Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

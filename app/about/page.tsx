import Link from "next/link";
import { BookOpen, ArrowRight, Mail, Pen, BarChart3 } from "lucide-react";

const TEAM = [
  {
    name: "Tim Vandehey",
    role: "Co-creator, Publishing Strategy",
    photo: "/tim-vandehey.jpg",
    initials: "TV",
    color: "bg-brand-600",
    bio: [
      "Tim is a ghostwriter and collaborative author who has worked on more than 60 published books, including multiple New York Times bestsellers. Over a 20-year career in traditional publishing, he has seen the acquisition process from every angle: as a writer, a book proposal consultant, and an informal advisor to agents and editors trying to evaluate new projects.",
      "He noticed the same pattern again and again. Talented authors with strong manuscripts would get rejected because they had no platform. Others with huge followings would stall because their concept was not differentiated enough. The problem was rarely the writing itself. It was usually one or two blind spots the author did not know they had.",
      "DealScore grew out of the informal scoring rubric Tim had been using with his own clients for years. He wanted to make that framework available to any writer, not just the ones who could afford a consultant.",
    ],
  },
  {
    name: "Emily Liao",
    role: "Co-creator, Product & Technology",
    photo: "/emily-liao.jpg",
    initials: "EL",
    color: "bg-teal-600",
    bio: [
      "Emily is a product builder and technologist who spent the early part of her career at media and edtech companies, working on tools that help people learn and create. She met Tim through a mutual friend in 2022, when she was looking for a ghostwriter for a project of her own.",
      "What started as a business relationship turned into long conversations about why the publishing industry felt so opaque from the outside. Emily kept hearing the same frustration from writer friends: nobody could give them a straight answer about whether they were ready to query agents or what they should focus on first.",
      "She saw that Tim already had the framework. It just needed to be turned into something any writer could use on their own. Emily designed the assessment flow, built the scoring model, and created the AI coaching layer that turns raw scores into specific, genre-aware recommendations.",
    ],
  },
];

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
            DealScore started as a spreadsheet that Tim used with his ghostwriting
            clients. Emily turned it into a tool that any writer can use for free.
            Here is the longer version.
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
                In 2019, Tim was reviewing book proposals for a literary agent friend
                who was drowning in submissions. They spent a Saturday afternoon going
                through the slush pile, and Tim started explaining how he evaluated
                projects: not just the writing quality, but the author&apos;s platform,
                the commercial hook, the timing of the concept, how differentiated it
                was from what was already on shelves.
              </p>
              <p>
                The agent said something that stuck: &quot;If every writer could see
                what we see when we look at a submission, half of them would fix the
                obvious problems before they even queried. The other half would stop
                querying too early and go build their platform first.&quot;
              </p>
              <p>
                Tim started writing down the criteria he used. He organized them into
                five categories, assigned rough weights, and began scoring his own
                clients&apos; projects. The results were useful. Writers who scored
                below 50 on platform but above 80 on manuscript quality knew exactly
                where to focus. Writers with a timely concept but a weak commercial
                hook could see the gap clearly.
              </p>
              <p>
                For three years, this lived as a Google Sheet that Tim shared with
                clients and a few agent friends. In early 2023, Emily got hold of
                the spreadsheet through a mutual connection and asked Tim an obvious
                question: &quot;Why is this not a website?&quot;
              </p>
              <p>
                They spent six months refining the scoring model, writing better
                questions, and building the AI coaching layer that turns a set of
                scores into advice that actually applies to your specific book and
                genre. DealScore launched in its current form in late 2023. It is
                free, it does not require an account, and it always will be.
              </p>
            </div>
          </div>

          {/* Team */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            The team
          </h2>
          <div className="space-y-8">
            {TEAM.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="flex items-start gap-5 mb-6">
                  {/* Avatar placeholder */}
                  <div
                    className={`w-20 h-20 rounded-2xl ${person.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {person.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {person.name}
                    </h3>
                    <p className="text-brand-600 font-medium text-sm">
                      {person.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  {person.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
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
                a well-timed submission, an agent who connects with your
                voice — these matter enormously and no tool can predict them.
                DealScore gives you a framework, not a verdict.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Pen className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">The right path, not just the dream path</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional publishing is one route. Hybrid publishers and
                self-publishing are serious, legitimate alternatives. The honest
                consulting value is pointing authors toward the path that actually
                fits their situation — not just helping them chase a deal they
                are unlikely to get.
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

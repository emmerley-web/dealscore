import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

function ProfileLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 underline underline-offset-2 decoration-stone-300 hover:decoration-stone-500 transition-colors"
    >
      {label}
      <ExternalLink className="w-3 h-3 flex-shrink-0" />
    </a>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
            About DealScore
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight max-w-2xl">
            Why we built this
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl">
            DealScore was built by two ghostwriters: Tim Vandehey, who has spent two
            decades working directly with publishers and agents, and Emily Liao, who
            brought the product and technical foundation that makes it work at scale.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
            The backstory
          </p>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8 max-w-xl">
            Where this came from
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed text-base max-w-3xl">
            <p>
              Between them, Tim and Emily have shepherded hundreds of authors through the
              full arc of getting a book published, from the first conversation about an
              idea through the proposal process to submission, acquisition, and release.
              They've worked across traditional, hybrid, and self-publishing routes, with
              everyone from first-time authors to executives and public figures.
            </p>
            <p>
              What they kept running into, regardless of the author or the book, was a
              fundamental gap in expectations. Accomplished, intelligent people who had
              built careers, companies, and reputations routinely arrived believing that
              a strong idea and the right connections were enough to secure a deal. Many
              had no idea that a publisher's decision rests on a small set of concrete,
              measurable variables: platform, manuscript readiness, concept differentiation,
              commercial hook, timeliness, and whether the author is the only person who
              could have written this particular book.
            </p>
            <p>
              The misunderstanding comes down to access, not intelligence. Publishing
              professionals carry this framework in their heads and use it on every
              submission, but they rarely articulate it to authors in any structured way.
              Most authors go into the process without knowing what they're actually
              being evaluated on.
            </p>
            <p>
              Tim had been using a private scoring rubric with his own clients for years,
              a way to give them an honest, structured read on where they stood before
              they started querying. Emily recognised that it addressed something authors
              needed long before they ever engaged a ghostwriter or a consultant. Together
              they refined it, tested it against real acquisition patterns, and built it
              into a tool that any author can use at the start of their journey. That tool
              is DealScore.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
            The team
          </p>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-12">
            The people behind it
          </h2>
          <div className="space-y-14 max-w-4xl">

            {/* Tim */}
            <div className="grid sm:grid-cols-[auto_1fr] gap-8">
              <div className="flex flex-col items-center sm:items-start gap-4">
                <div className="w-36 h-36 overflow-hidden flex-shrink-0 bg-stone-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lucindaliterary.com/wp-content/uploads/2025/03/Tim-Vandehey-headshot-2.jpeg"
                    alt="Tim Vandehey"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Tim Vandehey</h3>
                  <p className="text-stone-400 text-sm mt-1">Co-creator, Publishing Strategy</p>
                  <div className="flex flex-col gap-2 mt-3">
                    <ProfileLink href="https://www.timvandehey.com" label="timvandehey.com" />
                    <ProfileLink href="https://www.linkedin.com/in/tvandehey/" label="LinkedIn" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-stone-600 leading-relaxed text-base">
                <p>
                  Tim Vandehey is a New York Times bestselling ghostwriter and co-author
                  who has worked on more than 70 nonfiction books, with over 20 published
                  by Big Five houses including HarperCollins, Penguin Random House,
                  Simon &amp; Schuster, and Hachette. He's been a full-time ghostwriter
                  since 2005.
                </p>
                <p>
                  His work spans memoir, business, prescriptive self-help, cultural
                  commentary, and true crime. Among his credited titles are{" "}
                  <em>The Wait</em> (Simon &amp; Schuster, NYT bestseller, with DeVon
                  Franklin and Meagan Good) and{" "}
                  <em>Saturday Night, Sunday Morning</em> with P.J. Morton (Hachette).
                </p>
                <p>
                  Working directly with publishers and agents on hundreds of projects
                  over two decades, Tim developed a clear understanding of the variables
                  that drive acquisition decisions and the ones authors consistently
                  misunderstand or overlook. DealScore is his attempt to make that
                  framework available to authors before they start querying, not after
                  they've spent years wondering why the answer was no.
                </p>
              </div>
            </div>

            <hr className="border-stone-200" />

            {/* Emily */}
            <div className="grid sm:grid-cols-[auto_1fr] gap-8">
              <div className="flex flex-col items-center sm:items-start gap-4">
                <div className="w-36 h-36 overflow-hidden flex-shrink-0 bg-stone-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i0.wp.com/memoirist.co.uk/wp-content/uploads/2024/03/C8C3B095-70D7-402C-9E47-675039590218_1_105_c.jpeg?fit=400%2C400&ssl=1"
                    alt="Emily Liao"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Emily Liao</h3>
                  <p className="text-stone-400 text-sm mt-1">Co-creator, Product &amp; Technology</p>
                  <div className="flex flex-col gap-2 mt-3">
                    <ProfileLink href="https://memoirist.co.uk" label="memoirist.co.uk" />
                    <ProfileLink href="https://www.linkedin.com/in/emilytheghost/" label="LinkedIn" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-stone-600 leading-relaxed text-base">
                <p>
                  Emily Liao is a ghostwriter and memoirist specialising in business
                  memoirs for traditional publishing. Before pivoting to writing full-time
                  in 2021, she worked at an AI startup, bringing a product and technology
                  perspective to how authors navigate the publishing process.
                </p>
                <p>
                  She's worked with clients across four continents on memoirs, narrative
                  business books, and proposals aimed at traditional publishers, with a
                  particular focus on helping authors whose stories are ready before their
                  platform catches up.
                </p>
                <p>
                  She brought the product and technical foundation that makes DealScore
                  work, applying the systems thinking from her AI startup background to
                  the challenge of making Tim's publishing framework accessible at scale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
            What we believe
          </p>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-12">
            The principles behind DealScore
          </h2>
          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl">
            <div>
              <h3 className="font-serif font-bold text-stone-900 mb-3 text-lg">No absolutes</h3>
              <p className="text-base text-stone-500 leading-relaxed">
                There aren't universal rules in publishing. The right editor,
                a well-timed submission, an agent who connects with your voice:
                these matter enormously and no tool can predict them.
                DealScore gives you a framework, not a verdict.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 mb-3 text-lg">The right path, not the dream path</h3>
              <p className="text-base text-stone-500 leading-relaxed">
                Traditional publishing is one route. Hybrid and self-publishing
                are serious, legitimate alternatives. The honest value is pointing
                authors toward the path that fits their situation, whatever that
                turns out to be.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 mb-3 text-lg">Knowledge is the gap</h3>
              <p className="text-base text-stone-500 leading-relaxed">
                Nonfiction authors can ask anyone whether they have a chance.
                The problem is they don't know which variables matter most.
                That knowledge gap is what DealScore is designed to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-5">
            Ready to find out where you stand?
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed max-w-xl">
            Five minutes and 20 questions covering the variables that determine
            your readiness for a traditional nonfiction deal.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-700 text-white font-medium text-base transition-colors group"
          >
            Take the Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}

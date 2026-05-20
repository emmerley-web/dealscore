import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PLANS, Plan } from "@/lib/plans";

function PlanCard({ plan, featured }: { plan: Plan; featured: boolean }) {
  return (
    <div
      className={`relative flex flex-col bg-white border rounded-2xl p-7 ${
        featured
          ? "border-stone-400 shadow-lg ring-1 ring-stone-200"
          : "border-stone-200 shadow-sm"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-block px-3 py-1 bg-stone-900 text-white text-xs font-semibold uppercase tracking-widest rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-2">
          {plan.name}
        </p>
        <div className="flex items-end gap-1.5 mb-1">
          <span className="font-serif text-3xl font-bold text-stone-900">
            {plan.price}
          </span>
          <span className="text-stone-400 text-sm mb-1">{plan.priceNote}</span>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed">{plan.tagline}</p>
      </div>

      <div className="border-t border-stone-100 pt-5 mb-5">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
          Best for
        </p>
        <p className="text-sm text-stone-600 leading-relaxed">{plan.forWho}</p>
      </div>

      <div className="flex-1 mb-7">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
          What&rsquo;s included
        </p>
        <ul className="space-y-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-stone-700">
              <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={plan.ctaHref}
        className={`flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-sm transition-colors group ${
          featured
            ? "bg-stone-900 hover:bg-stone-700 text-white"
            : "bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-500 text-stone-900"
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
              Work with us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              From understanding the framework to getting the deal
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              The assessment is free and always will be. Once you have your score, we can
              help you act on it at whatever level of support makes sense for where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Plans grid */}
      <section className="py-20 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                featured={plan.id === "report"}
              />
            ))}
          </div>

          <p className="mt-10 text-sm text-stone-400 text-center">
            Not sure where to start?{" "}
            <Link href="/assessment" className="underline underline-offset-2 hover:text-stone-600 transition-colors">
              Take the free assessment first
            </Link>{" "}
            — your score will tell you exactly which option makes the most sense.
          </p>
        </div>
      </section>

      {/* What the assessment tells you */}
      <section className="py-20 px-4 sm:px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-5">
                Why start with the assessment
              </p>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-5">
                Your score tells us where to focus
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                Every report and consulting engagement starts from your PitchMark score.
                It gives us — and you — a structured read on exactly which variables are
                working in your favour and which need attention before you start querying.
              </p>
              <p className="text-stone-500 leading-relaxed">
                If you haven&rsquo;t taken the assessment yet, it takes five minutes and it&rsquo;s free.
                If you have, your score will follow you into whichever option you choose.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-stone-900 hover:bg-stone-700 text-white font-medium transition-colors group"
              >
                Take the Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

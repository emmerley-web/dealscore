"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import clsx from "clsx";
import { ASSESSMENT_QUESTIONS, QUESTIONS_BY_CATEGORY } from "@/lib/questions";
import { GENRES, CategoryKey, CATEGORY_DISPLAY_NAMES, CATEGORY_DESCRIPTIONS } from "@/lib/types";
import { buildAssessmentResult } from "@/lib/scoring";
import { setPendingResult } from "@/lib/storage";

const CATEGORY_ORDER: CategoryKey[] = [
  "platform",
  "manuscriptQuality",
  "conceptUniqueness",
  "conceptCommercialPotential",
  "conceptTimeliness",
];

const CATEGORY_ICONS: Record<CategoryKey, string> = {
  platform: "📣",
  manuscriptQuality: "✍️",
  conceptUniqueness: "💡",
  conceptCommercialPotential: "📈",
  conceptTimeliness: "⏱️",
};

type Step = "genre" | 0 | 1 | 2 | 3 | 4 | "calculating";

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("genre");
  const [genre, setGenre] = useState("");
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentCategoryIndex = typeof step === "number" ? step : -1;
  const currentCategory =
    currentCategoryIndex >= 0
      ? CATEGORY_ORDER[currentCategoryIndex]
      : null;
  const currentQuestions = currentCategory
    ? QUESTIONS_BY_CATEGORY[currentCategory] || []
    : [];

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const overallProgress =
    step === "genre"
      ? 0
      : step === "calculating"
      ? 100
      : (currentCategoryIndex * 4 + currentQuestions.filter((q) => answers[q.id]).length) /
        totalQuestions *
        100;

  function handleAnswer(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function categoryComplete(catIndex: number): boolean {
    const cat = CATEGORY_ORDER[catIndex];
    const qs = QUESTIONS_BY_CATEGORY[cat] || [];
    return qs.every((q) => answers[q.id] !== undefined);
  }

  function canAdvance(): boolean {
    if (step === "genre") return genre !== "";
    if (typeof step === "number") return categoryComplete(step);
    return false;
  }

  function advance() {
    if (step === "genre") {
      setStep(0);
    } else if (typeof step === "number") {
      if (step < CATEGORY_ORDER.length - 1) {
        setStep((step + 1) as Step);
      } else {
        setStep("calculating");
        const result = buildAssessmentResult(answers, genre);
        setPendingResult(result);
        setTimeout(() => router.push("/results"), 1200);
      }
    }
  }

  function goBack() {
    if (step === "genre") return;
    if (step === 0) setStep("genre");
    else if (typeof step === "number") setStep((step - 1) as Step);
  }

  if (step === "calculating") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <BookOpen className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Scoring your answers...
          </h2>
          <p className="text-slate-500">
            Calculating scores across all five categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-slate-50 py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-slate-500 mb-2 font-medium">
            <span>
              {step === "genre"
                ? "Step 1 of 6: Pick your genre"
                : typeof step === "number"
                ? `Step ${step + 2} of 6: ${CATEGORY_DISPLAY_NAMES[CATEGORY_ORDER[step]]}`
                : "Complete"}
            </span>
            <span>{Math.round(overallProgress)}% done</span>
          </div>
          <div
            className="h-2 bg-slate-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(overallProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Category step indicators */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1" role="list" aria-label="Assessment categories">
          {CATEGORY_ORDER.map((cat, i) => (
            <div
              key={cat}
              role="listitem"
              className={clsx(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
                typeof step === "number" && step === i
                  ? "bg-brand-100 text-brand-700 border border-brand-300"
                  : categoryComplete(i)
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-white text-slate-400 border border-slate-200"
              )}
            >
              <span>{CATEGORY_ICONS[cat]}</span>
              <span className="hidden sm:inline">{CATEGORY_DISPLAY_NAMES[cat]}</span>
            </div>
          ))}
        </div>

        {/* Genre selection */}
        {step === "genre" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              What genre are you writing in?
            </h1>
            <p className="text-slate-500 mb-6">
              Genre shapes the benchmarks we use. Platform requirements,
              commercial hooks, and what counts as a strong concept vary
              significantly between categories.
            </p>
            <fieldset>
              <legend className="sr-only">Select your genre</legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {GENRES.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    aria-pressed={genre === g}
                    className={clsx(
                      "px-3 py-2.5 rounded-xl text-sm font-medium border text-left transition-all",
                      genre === g
                        ? "bg-brand-500 text-white border-brand-500 shadow-md"
                        : "bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:bg-brand-50"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </fieldset>
            {(genre === "Memoir / Personal Essay" || genre === "Narrative Nonfiction") && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 leading-relaxed">
                <strong className="text-amber-900">Note on memoir and narrative nonfiction:</strong>{" "}
                These are among the hardest categories to sell traditionally. Publishers
                typically require either a very large existing platform, celebrity profile,
                or a story of singular and urgent relevance. Your results will reflect
                this reality honestly.
              </div>
            )}
          </div>
        )}

        {/* Category questions */}
        {typeof step === "number" && currentCategory && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{CATEGORY_ICONS[currentCategory]}</span>
              <h1 className="text-2xl font-bold text-slate-900">
                {CATEGORY_DISPLAY_NAMES[currentCategory]}
              </h1>
            </div>
            <p className="text-slate-500 mb-8">
              {CATEGORY_DESCRIPTIONS[currentCategory]}
            </p>

            <div className="space-y-8">
              {currentQuestions.map((q, qi) => (
                <fieldset key={q.id}>
                  <legend className="font-semibold text-slate-900 mb-3 leading-snug">
                    <span className="text-brand-500 font-bold mr-1">{qi + 1}.</span>
                    {q.question}
                  </legend>
                  <div className="space-y-2" role="radiogroup" aria-label={q.question}>
                    {q.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(q.id, opt.value)}
                        role="radio"
                        aria-checked={answers[q.id] === opt.value}
                        className={clsx(
                          "w-full text-left px-4 py-3 rounded-xl border text-sm transition-all",
                          answers[q.id] === opt.value
                            ? "bg-brand-50 border-brand-400 text-brand-900 shadow-sm"
                            : "bg-white border-slate-200 text-slate-700 hover:border-brand-200 hover:bg-slate-50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={clsx(
                              "w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all",
                              answers[q.id] === opt.value
                                ? "bg-brand-500 border-brand-500"
                                : "border-slate-300"
                            )}
                            aria-hidden="true"
                          />
                          <div>
                            <div className="font-medium">{opt.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {opt.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={goBack}
            disabled={step === "genre"}
            className={clsx(
              "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all",
              step === "genre"
                ? "opacity-0 pointer-events-none"
                : "text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={advance}
            disabled={!canAdvance()}
            className={clsx(
              "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all",
              canAdvance()
                ? "bg-brand-500 hover:bg-brand-600 text-white shadow-md hover:shadow-lg"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            )}
          >
            {step === "genre"
              ? "Start Assessment"
              : typeof step === "number" && step === CATEGORY_ORDER.length - 1
              ? "Calculate My Score"
              : "Next Category"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

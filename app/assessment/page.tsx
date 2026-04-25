"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Users, Layers, PenLine, Target } from "lucide-react";
import clsx from "clsx";
import { ASSESSMENT_QUESTIONS, QUESTIONS_BY_CATEGORY } from "@/lib/questions";
import { GENRES, CategoryKey, CATEGORY_DISPLAY_NAMES, CATEGORY_DESCRIPTIONS } from "@/lib/types";
import { buildAssessmentResult } from "@/lib/scoring";
import { setPendingResult } from "@/lib/storage";

const CATEGORY_ORDER: CategoryKey[] = [
  "platform",
  "uniquenessAndTimeliness",
  "writing",
  "audience",
];

type LucideIcon = React.ComponentType<{ className?: string }>;

const CATEGORY_ICONS: Record<CategoryKey, LucideIcon> = {
  platform: Users,
  uniquenessAndTimeliness: Layers,
  writing: PenLine,
  audience: Target,
};

type Step = "genre" | "intro" | 0 | 1 | 2 | 3 | "calculating";

export default function AssessmentPage() {
  const [step, setStep] = useState<Step>("genre");
  const [genre, setGenre] = useState("");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const topRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the step changes
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

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
    step === "genre" || step === "intro"
      ? 0
      : step === "calculating"
      ? 100
      : (currentCategoryIndex * 5 + currentQuestions.filter((q) => answers[q.id]).length) /
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
    if (step === "intro") return true;
    if (typeof step === "number") return categoryComplete(step);
    return false;
  }

  function advance() {
    if (step === "genre") {
      setStep("intro");
    } else if (step === "intro") {
      setStep(0);
    } else if (typeof step === "number") {
      if (step < CATEGORY_ORDER.length - 1) {
        setStep((step + 1) as Step);
      } else {
        setStep("calculating");
        const result = buildAssessmentResult(answers, genre);
        setPendingResult(result);
        setTimeout(() => {
          const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
          window.location.href = base + "/results/";
        }, 1200);
      }
    }
  }

  function goBack() {
    if (step === "genre") return;
    if (step === "intro") setStep("genre");
    else if (step === 0) setStep("intro");
    else if (typeof step === "number") setStep((step - 1) as Step);
  }

  if (step === "calculating") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <BookOpen className="w-8 h-8 text-stone-700" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">
            Scoring your answers...
          </h2>
          <p className="text-stone-500">
            Calculating scores across all four categories.
          </p>
        </div>
      </div>
    );
  }

  const stepLabel =
    step === "genre"
      ? "Step 1 of 6: Pick your genre"
      : step === "intro"
      ? "Step 2 of 6: What we're measuring"
      : typeof step === "number"
      ? `Step ${step + 3} of 6: ${CATEGORY_DISPLAY_NAMES[CATEGORY_ORDER[step]]}`
      : "Complete";

  return (
    <div className="min-h-[80vh] bg-stone-50 py-8 px-4 sm:px-6">
      <div ref={topRef} className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-stone-500 mb-2 font-medium">
            <span>{stepLabel}</span>
            <span>{Math.round(overallProgress)}% done</span>
          </div>
          <div
            className="h-2 bg-stone-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(overallProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Category step indicators */}
        {(step === "intro" || typeof step === "number") && (
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1" role="list" aria-label="Assessment categories">
            {CATEGORY_ORDER.map((cat, i) => {
              const CatIcon = CATEGORY_ICONS[cat];
              return (
                <div
                  key={cat}
                  role="listitem"
                  className={clsx(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                    typeof step === "number" && step === i
                      ? "bg-stone-100 text-stone-700 border border-stone-300"
                      : typeof step === "number" && categoryComplete(i)
                      ? "bg-stone-50 text-stone-600 border border-stone-300"
                      : "bg-white text-stone-400 border border-stone-200"
                  )}
                >
                  <CatIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="hidden sm:inline">{CATEGORY_DISPLAY_NAMES[cat]}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Genre selection */}
        {step === "genre" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              What genre are you writing in?
            </h1>
            <p className="text-stone-500 mb-6">
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
                        ? "bg-stone-900 text-white border-stone-900 shadow-md"
                        : "bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {/* Category intro screen */}
        {step === "intro" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              What we&rsquo;re measuring
            </h1>
            <p className="text-stone-500 mb-8">
              The assessment evaluates you across four categories that agents and publishers
              apply to every nonfiction submission. Here&rsquo;s what each one covers.
            </p>
            <div className="space-y-6">
              {CATEGORY_ORDER.map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                return (
                  <div key={cat} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-stone-600" />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-stone-900 mb-1">
                        {CATEGORY_DISPLAY_NAMES[cat]}
                      </h2>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {CATEGORY_DESCRIPTIONS[cat]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Category questions */}
        {typeof step === "number" && currentCategory && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              {(() => { const Icon = CATEGORY_ICONS[currentCategory]; return <Icon className="w-6 h-6 text-gold-500 flex-shrink-0" />; })()}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {CATEGORY_DISPLAY_NAMES[currentCategory]}
              </h1>
            </div>
            <p className="text-stone-500 mb-8">
              {CATEGORY_DESCRIPTIONS[currentCategory]}
            </p>

            <div className="space-y-8">
              {currentQuestions.map((q, qi) => (
                <fieldset key={q.id}>
                  <legend className="font-semibold text-stone-900 mb-3 leading-snug">
                    <span className="text-stone-600 font-bold mr-1">{qi + 1}.</span>
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
                            ? "bg-stone-50 border-stone-400 text-stone-900 shadow-sm"
                            : "bg-white border-stone-200 text-stone-700 hover:border-stone-200 hover:bg-stone-50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={clsx(
                              "w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all",
                              answers[q.id] === opt.value
                                ? "bg-gold-500 border-gold-600"
                                : "border-stone-300"
                            )}
                            aria-hidden="true"
                          />
                          <div>
                            <div className="font-medium">{opt.label}</div>
                            <div className="text-sm text-stone-500 mt-0.5 leading-snug">
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
                : "text-stone-600 hover:text-stone-900 bg-white border border-stone-200 hover:border-stone-300"
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
                ? "bg-stone-900 hover:bg-stone-700 text-white shadow-md hover:shadow-lg"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            )}
          >
            {step === "genre"
              ? "Continue"
              : step === "intro"
              ? "Begin Assessment"
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

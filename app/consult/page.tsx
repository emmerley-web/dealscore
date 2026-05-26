"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getLatestResult } from "@/lib/storage";
import { AssessmentResult, CategoryScore, CATEGORY_DISPLAY_NAMES } from "@/lib/types";

export default function ConsultPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [form, setForm] = useState({ name: "", email: "", summary: "", _honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setResult(getLatestResult());
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Honeypot: reject bots that fill the hidden field
    if (form._honeypot) return;
    if (!form.name.trim() || !form.email.trim() || !form.summary.trim()) {
      setError("Please fill in all fields before submitting.");
      return;
    }
    setError("");
    // TODO: replace this with your backend / HubSpot / Formspree endpoint
    // For now, simulate submission
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-gold-400" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 mb-4">
            We&rsquo;ve received your message.
          </h1>
          <p className="text-stone-500 leading-relaxed mb-4">
            Tim and Emily will review your submission and get back to you — typically within
            2–3 business days. If we think we&rsquo;re the right fit, we&rsquo;ll reach out to
            schedule a conversation. If you&rsquo;d be better served starting somewhere else,
            we&rsquo;ll tell you that too.
          </p>
          <p className="text-stone-400 text-sm">
            You can close this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-500 mb-4">
            Work with us
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4 leading-tight">
            Tell us about your book
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed">
            We work with a small number of authors at a time. If you&rsquo;re considering the
            consulting route — or you&rsquo;re not sure which option fits your situation — start
            here. Tell us where you are, what you&rsquo;re working on, and what you&rsquo;re hoping
            to achieve. We&rsquo;ll get back to you with our read on fit and where to start.
          </p>
        </div>

        {/* Show their score if available */}
        {result && (
          <div className="bg-stone-900 text-white p-5 rounded-2xl mb-8">
            <p className="text-stone-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Your latest PitchMark score
            </p>
            <div className="flex items-end gap-2 mb-3">
              <span className="font-serif text-5xl font-bold text-gold-400">{result.pitchScore}</span>
              <span className="text-xl text-stone-500 mb-1">/100</span>
              <span className="text-stone-400 ml-1 text-sm mb-1">— {result.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {result.categoryScores.map((cat: CategoryScore) => (
                <div key={cat.key} className="flex justify-between text-sm">
                  <span className="text-stone-400">{CATEGORY_DISPLAY_NAMES[cat.key]}</span>
                  <span className="font-medium text-stone-300">{Math.round(cat.score)}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-xs mt-3">
              Genre: {result.genre}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
            />
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-semibold text-stone-700 mb-1.5">
              What are you working on and what do you need?
            </label>
            <textarea
              id="summary"
              name="summary"
              value={form.summary}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your book — the concept, where you are in the process, and what you're hoping to achieve. The more specific, the better."
              required
              className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-900 placeholder-stone-400 text-base focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 resize-none"
            />
          </div>

          {/* Honeypot — hidden from real users, filled only by bots */}
          <input
            type="text"
            name="_honeypot"
            value={form._honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-base transition-colors group"
          >
            Send My Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <p className="text-xs text-stone-400 text-center leading-relaxed">
            We reply to every submission personally. If we&rsquo;re a good fit, we&rsquo;ll suggest
            next steps. If you&rsquo;d be better served starting somewhere else, we&rsquo;ll tell you
            that too. Your information will never be shared with third parties.
          </p>
        </form>

      </div>
    </div>
  );
}

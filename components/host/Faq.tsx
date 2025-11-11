"use client";

import { useState } from "react";
import { Clock3, IndianRupee, PlaySquare, ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";

const faqs = [
  {
    icon: IndianRupee,
    question: "How much can I really earn?",
    answer:
      "Most hosts earn between ₹3,000 - ₹15,000 monthly per screen, depending on your location type, audience, and commission tier."
  },
  {
    icon: ShieldCheck,
    question: "Is there any cost involved?",
    answer:
      "Absolutely none. We provide the TV, installation, creative management, and maintenance at no charge."
  },
  {
    icon: PlaySquare,
    question: "What type of content will be displayed?",
    answer:
      "A mix of national brands, local business creatives, PSAs, and your own promotions. You always have final approval."
  },
  {
    icon: Clock3,
    question: "How long does installation take?",
    answer:
      "Typically 2–3 hours. We coordinate with your business hours to minimize disruption."
  },
  {
    icon: SlidersHorizontal,
    question: "Can I choose what ads to show?",
    answer:
      "Yes. While we curate the playlist, you can veto categories or ads that don’t align with your customers."
  },
  {
    icon: Wrench,
    question: "What happens if the TV needs repair?",
    answer:
      "Our NOC monitors every screen and dispatches engineers when needed. Hardware is fixed or replaced within 48 hours."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-t border-white/5 bg-black/60 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Got questions?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Everything you need to know about becoming a host.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const active = openIndex === index;
            return (
              <div
                key={faq.question}
                className="fade-up rounded-3xl border border-white/10 bg-white/5 p-4"
                data-animate
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3 text-white">
                    <faq.icon className="h-5 w-5 text-purple-400" aria-hidden />
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </div>
                  <span className="text-purple-300">{active ? "−" : "+"}</span>
                </button>
                {active && (
                  <p className="mt-3 text-sm text-white/70" aria-live="polite">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

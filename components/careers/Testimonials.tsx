"use client";

import { useEffect, useState } from "react";
import { careerTestimonials } from "@/lib/contentCareers";
import { Pause, Play } from "lucide-react";

export function CareersTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % careerTestimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const displayTestimonials = careerTestimonials.slice(active).concat(careerTestimonials.slice(0, active));

  return (
    <section id="testimonials" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Life at Adverttize</p>
            <h2 className="text-3xl font-semibold text-white">Hear From Our Team</h2>
          </div>
          <button
            type="button"
            onClick={() => setPaused((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#60a5fa]"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {paused ? "Resume Rotation" : "Pause Rotation"}
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {displayTestimonials.slice(0, 2).map((story) => (
            <article
              key={story.name}
              className="fade-up rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-[#05070f] to-[#0f172a] p-6 shadow-lg transition hover:-translate-y-1"
              data-animate
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#60a5fa] text-sm font-semibold text-white">
                  {story.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{story.name}</p>
                  <p className="text-sm text-white/60">{story.role} • {story.tenure}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">“{story.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

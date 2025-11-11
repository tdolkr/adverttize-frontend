"use client";

import Link from "next/link";
import { MessageCircle, Rocket } from "lucide-react";
import { aboutHero } from "@/lib/contentAbout";

export function AboutHero() {
  return (
    <section id="hero" className="fade-up relative isolate overflow-hidden border-b border-white/5" data-animate>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#0b1220] to-[#05060a]" />
        <div className="absolute inset-0 opacity-30">
          <div className="animated-text-loop" aria-hidden>
            {Array.from({ length: 6 }).map((_, index) => (
              <p key={index}>
                {"story"} {"impact"}
              </p>
            ))}
          </div>
        </div>
        <p className="absolute bottom-6 right-6 text-xs uppercase tracking-[1em] text-white/30">ADVERTTIZE</p>
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-28 text-center sm:px-8">
        <span className="fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70" data-animate>
          {aboutHero.eyebrow}
        </span>
        <div className="fade-up space-y-5" data-animate>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {aboutHero.title}
          </h1>
          <p className="text-lg text-white/75">{aboutHero.description}</p>
          <div className="space-y-4 text-sm text-white/70">
            <p>
              We started as a collective of technologists and storytellers asking how real-time data could make digital advertising feel cinematic again. Today, our platform powers experiences across 45,000+ screens by blending editorial craft with measurable outcomes.
            </p>
            <p>
              Each campaign unfolds like a long-form feature—chaptered storytelling, intentional placements, performance instrumentation at every beat. It&rsquo;s a new vernacular for out-of-home media.
            </p>
          </div>
        </div>
        <div className="fade-up flex flex-wrap justify-center gap-4" data-animate>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1d4ed8]"
          >
            <MessageCircle className="h-4 w-4" />
            {aboutHero.primaryCta}
          </Link>
          <Link
            href="/advertise"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd]"
          >
            <Rocket className="h-4 w-4" />
            {aboutHero.secondaryCta}
          </Link>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          {aboutHero.metrics.map((metric) => (
            <article
              key={metric.label}
              className="fade-up rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white shadow-inner"
              data-animate
              role="group"
              aria-label={metric.aria}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
              <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
            </article>
          ))}
          <article className="fade-up rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white shadow-inner sm:col-span-2" data-animate>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Current footprint</p>
            <p className="mt-2 text-base text-white/80">Operating across 50+ cities with 120 dedicated field teams.</p>
          </article>
        </div>
      </div>
      <style jsx>{`
        .animated-text-loop {
          position: absolute;
          inset: -20% 0;
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-size: 64px;
          font-weight: 600;
          text-transform: lowercase;
          color: rgba(255, 255, 255, 0.04);
          animation: marquee 25s linear infinite;
        }
        .animated-text-loop p {
          white-space: nowrap;
        }
        @keyframes marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { careersHero } from "@/lib/contentCareers";

export function CareersHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#0b1120] to-[#05060a]" />
        <div className="absolute inset-0 opacity-30">
          <div className="animated-text-loop" aria-hidden>
            {Array.from({ length: 6 }).map((_, index) => (
              <p key={index}>
                {"<innovation/>"} {"{growth}"}
              </p>
            ))}
          </div>
        </div>
        <p className="absolute bottom-6 right-6 text-xs uppercase tracking-[1em] text-white/30">ADVERTTIZE</p>
      </div>
      <div className="fade-up relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-28 text-center sm:px-8" data-animate>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
          {careersHero.eyebrow}
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {careersHero.title}
          </h1>
          <p className="text-lg text-white/70">{careersHero.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#positions"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
          >
            {careersHero.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#culture"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd]"
          >
            <Users className="h-4 w-4" />
            {careersHero.secondaryCta}
          </Link>
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

"use client";

import { useEffect, useState } from "react";
import { missionVision } from "@/lib/contentAbout";
import { getInvestIcon } from "@/lib/icons";

export function MissionVision() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      setCursor({ x: event.clientX / width - 0.5, y: event.clientY / height - 0.5 });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section id="mission-vision" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:px-12">
        {missionVision.map((card, index) => {
          const Icon = getInvestIcon(card.icon);
          const parallaxX = cursor.x * (index === 0 ? 10 : -10);
          const parallaxY = cursor.y * 8;
          return (
            <article
              key={card.title}
              className={`fade-up relative flex-1 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/5 via-[#05060a] to-[#0c1424] p-8 text-white shadow-[0_45px_150px_rgba(5,6,14,0.6)] ${
                index === 0 ? "lg:translate-y-10" : "lg:-translate-y-10"
              }`}
              data-animate
              style={{ transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)` }}
            >
              <div className="absolute inset-6 rounded-[28px] bg-white/5 blur-3xl" aria-hidden />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3 text-[#93c5fd]">
                  <Icon className="h-6 w-6" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{card.subtitle}</p>
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-white/75">
                  {card.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Adverttize Manifesto — {index === 0 ? "Mission" : "Vision"}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

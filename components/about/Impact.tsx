"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { impactStats } from "@/lib/contentAbout";
import { getInvestIcon } from "@/lib/icons";

function formatDisplay(rawValue: string, current: number) {
  if (rawValue.includes("K")) {
    return `${Math.round(current / 1000)}K+`;
  }
  if (rawValue.includes("+")) {
    return `${current}+`;
  }
  if (rawValue.includes("%")) {
    return `${current}%`;
  }
  return current.toString();
}

function ImpactCard({ value, label, icon }: { value: string; label: string; icon: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let numericTarget = parseInt(value.replace(/\D/g, ""), 10) || 0;
    if (value.includes("K")) {
      numericTarget *= 1000;
    }

    if (prefersReducedMotion) {
      setCount(numericTarget);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const duration = 1500;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <article
      ref={ref}
      className="fade-up min-w-[220px] snap-start rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-lg transition hover:-translate-y-1 lg:min-w-[240px]"
      data-animate
    >
      {icon}
      <p className="mt-4 text-3xl font-semibold text-white">{formatDisplay(value, count)}</p>
      <p className="text-sm text-white/60">{label}</p>
    </article>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-16 md:py-20 fade-up" data-animate>
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 via-[#0f172a]/70 to-[#020617]/90 px-6 py-12 shadow-inner sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">By The Numbers</p>
            <h2 className="text-3xl font-semibold text-white">
              Transforming digital advertising across the nation with measurable results.
            </h2>
          </div>
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {impactStats.map((stat) => {
              const IconComponent = getInvestIcon(stat.icon);
              return (
                <ImpactCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={<IconComponent className="mx-auto h-6 w-6 text-[#93c5fd]" aria-hidden />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { InvestHero } from "@/components/invest/Hero";
import { LivePortfolio } from "@/components/invest/LivePortfolio";
import { InvestBenefits } from "@/components/invest/Benefits";
import { InvestCalculator } from "@/components/invest/Calculator";
import { RevenueModel } from "@/components/invest/RevenueModel";
import { InvestStories } from "@/components/invest/Stories";
import { InvestProcess } from "@/components/invest/Process";
import { FinalCta } from "@/components/invest/FinalCta";
import { HostHeader } from "@/components/host/Header";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";

export default function InvestPage() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-white">
      <div className="invest-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]" />
      <AuroraBackground aria-hidden className="z-0 opacity-45" variant="invest" />
      <ParticleField variant="green" />
      <div className="relative z-10 flex flex-col">
        <HostHeader active="Invest" />
        <InvestHero />
        <LivePortfolio />
        <InvestBenefits />
        <InvestCalculator />
        <RevenueModel />
        <InvestStories />
        <InvestProcess />
        <FinalCta />
        <HostFooter />
      </div>
    </main>
  );
}

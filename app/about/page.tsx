"use client";

import { useEffect } from "react";
import { HostHeader } from "@/components/host/Header";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";
import { AboutHero } from "@/components/about/Hero";
import { MissionVision } from "@/components/about/MissionVision";
import { Impact } from "@/components/about/Impact";
import { ValuesSection } from "@/components/about/Values";
import { Journey } from "@/components/about/Journey";
import { TeamSection } from "@/components/about/Team";
import { AboutFinalCta } from "@/components/about/FinalCta";

export default function AboutPage() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements.length) return;

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
      <div className="about-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <AuroraBackground aria-hidden className="z-0 opacity-40" variant="about" />
      <ParticleField variant="blue" />
      <div className="tv-scan-overlay" aria-hidden />
      <div className="water-distortion" aria-hidden />
      <div className="relative z-10 flex flex-col">
        <HostHeader active="About Us" />
        <AboutHero />
        <MissionVision />
        <Impact />
        <ValuesSection />
        <Journey />
        <TeamSection />
        <AboutFinalCta />
        <HostFooter />
      </div>
    </main>
  );
}

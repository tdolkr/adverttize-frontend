"use client";

import { useEffect } from "react";
import { HostHeader } from "@/components/host/Header";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";
import { CareersHero } from "@/components/careers/Hero";
import { CultureSection } from "@/components/careers/Culture";
import { CareersBenefits } from "@/components/careers/Benefits";
import { CareersTestimonials } from "@/components/careers/Testimonials";
import { HiringProcess } from "@/components/careers/HiringProcess";
import { OpenPositions } from "@/components/careers/Positions";
import { CareersCta } from "@/components/careers/FinalCta";

export default function CareersPage() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
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
      <div className="careers-background" aria-hidden />
      <AuroraBackground aria-hidden className="z-0 opacity-40" variant="careers" />
      <ParticleField variant="blue" />
      <div className="tv-scan-overlay" aria-hidden />
      <div className="water-distortion" aria-hidden />
      <div className="relative z-10 flex flex-col">
        <HostHeader active="Career" />
        <CareersHero />
        <CultureSection />
        <CareersBenefits />
        <CareersTestimonials />
        <HiringProcess />
        <OpenPositions />
        <CareersCta />
        <HostFooter />
      </div>
    </main>
  );
}

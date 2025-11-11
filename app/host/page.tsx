"use client";

import { useEffect } from "react";
import { HostHeader } from "@/components/host/Header";
import { Hero } from "@/components/host/Hero";
import { KpiCards } from "@/components/host/KpiCards";
import { WhyHost } from "@/components/host/WhyHost";
import { Calculator } from "@/components/host/Calculator";
import { Steps } from "@/components/host/Steps";
import { Testimonials } from "@/components/host/Testimonials";
import { Faq } from "@/components/host/Faq";
import { CtaBanner } from "@/components/host/CtaBanner";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";

export default function HostPage() {
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
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="host-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_55%)]" />
      <AuroraBackground aria-hidden className="z-0 opacity-40" />
      <ParticleField />
      <div className="relative z-10 flex flex-col">
        <HostHeader />
        <Hero />
        <KpiCards />
        <WhyHost />
        <Calculator />
        <Steps />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <HostFooter />
      </div>
    </main>
  );
}

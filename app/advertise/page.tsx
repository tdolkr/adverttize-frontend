"use client";

import { useEffect } from "react";
import { HostHeader } from "@/components/host/Header";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";
import { AdvertiseHero } from "@/components/advertise/Hero";
import { LiveCampaign } from "@/components/advertise/LiveCampaign";
import { AdvertiseBenefits } from "@/components/advertise/Benefits";
import { AdvertiseCalculator } from "@/components/advertise/Calculator";
import { AdvertisePricing } from "@/components/advertise/Pricing";
import { AdvertiseStories } from "@/components/advertise/Stories";
import { AdvertiseFinalCta } from "@/components/advertise/FinalCta";

export default function AdvertisePage() {
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
      <div className="advertise-background" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_60%)]" />
      <AuroraBackground aria-hidden className="z-0 opacity-45" variant="advertise" />
      <ParticleField variant="blue" />
      <div className="tv-scan-overlay" aria-hidden />
      <div className="water-distortion" aria-hidden />
      <div className="relative z-10 flex flex-col">
        <HostHeader active="Advertise" />
        <AdvertiseHero />
        <LiveCampaign />
        <AdvertiseBenefits />
        <AdvertiseCalculator />
        <AdvertisePricing />
        <AdvertiseStories />
        <AdvertiseFinalCta />
        <HostFooter />
      </div>
    </main>
  );
}

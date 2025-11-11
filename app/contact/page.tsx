"use client";

import { useEffect } from "react";
import { HostHeader } from "@/components/host/Header";
import { HostFooter } from "@/components/host/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/host/ParticleField";
import { ContactHero } from "@/components/contact/Hero";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { CompanyInfo } from "@/components/contact/CompanyInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDepartments } from "@/components/contact/Departments";
import { ContactReasons } from "@/components/contact/Reasons";
import { ContactCta } from "@/components/contact/FinalCta";

export default function ContactPage() {
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
      <div className="contact-background" aria-hidden />
      <AuroraBackground aria-hidden className="z-0 opacity-35" variant="contact" />
      <ParticleField variant="blue" />
      <div className="tv-scan-overlay" aria-hidden />
      <div className="water-distortion" aria-hidden />
      <div className="relative z-10 flex flex-col">
        <HostHeader active="Contact Us" />
        <ContactHero />
        <ContactOptions />
        <CompanyInfo />
        <ContactForm />
        <ContactDepartments />
        <ContactReasons />
        <ContactCta />
        <HostFooter />
      </div>
    </main>
  );
}

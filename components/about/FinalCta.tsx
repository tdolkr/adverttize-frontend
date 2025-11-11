import Link from "next/link";
import { aboutCta } from "@/lib/contentAbout";
import { getInvestIcon } from "@/lib/icons";
import { Mail, ArrowRight } from "lucide-react";
import { GooeyBackground } from "@/components/host/GooeyBackground";

export function AboutFinalCta() {
  return (
    <section
      id="cta"
      className="fade-up relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-[#0b1220] to-black py-20"
      data-animate
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <GooeyBackground hueRange={[200, 240]} />
      </div>
      <div
        className="reveal relative mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center text-white sm:px-8"
        data-animate
      >
        <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Ready to grow with us?</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">{aboutCta.title}</h2>
        <p className="text-sm text-white/75">{aboutCta.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
          >
            <Mail className="h-4 w-4" />
            {aboutCta.buttons.primary}
          </Link>
          <Link
            href="/advertise"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd] hover:text-[#93c5fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {aboutCta.buttons.secondary}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/80">
          {aboutCta.bullets.map((bullet) => {
            const Icon = getInvestIcon(bullet.icon);
            return (
              <span
                key={bullet.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2"
              >
                <Icon className="h-4 w-4 text-[#93c5fd]" />
                {bullet.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

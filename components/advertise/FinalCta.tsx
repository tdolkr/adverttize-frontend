import Link from "next/link";
import { advertiseCta } from "@/lib/contentAdvertise";
import { getInvestIcon } from "@/lib/icons";
import { GooeyBackground } from "@/components/host/GooeyBackground";

export function AdvertiseFinalCta() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-[#0f172a] to-black py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <GooeyBackground hueRange={[210, 230]} />
      </div>
      <div
        className="reveal relative mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center text-white sm:px-8"
        data-animate
      >
        <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Ready to get started?</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">{advertiseCta.title}</h2>
        <p className="text-sm text-white/70">{advertiseCta.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
          >
            Start Advertising
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd] hover:text-[#93c5fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Sales
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/70">
          {advertiseCta.bullets.map((bullet) => {
            const Icon = getInvestIcon(bullet.icon);
            return (
              <span key={bullet.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
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

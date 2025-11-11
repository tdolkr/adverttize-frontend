import Link from "next/link";
import { GooeyBackground } from "@/components/host/GooeyBackground";

const perks = ["Remote flexibility", "Learning budget", "Career growth"];

export function CareersCta() {
  return (
    <section
      id="careers-cta"
      className="relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-[#0b1120] to-black py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.2),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <GooeyBackground hueRange={[220, 260]} />
      </div>
      <div
        className="reveal relative mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center text-white sm:px-8"
        data-animate
      >
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Ready to build the future?</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Build the Future of Advertising?</h2>
        <p className="text-sm text-white/75">
          Join our passionate team at Adverttize Technologies and make an impact on thousands of businesses worldwide.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="#positions"
            className="rounded-full bg-[#4f46e5] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5b4fc]"
          >
            View All Positions
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#a5b4fc] hover:text-[#a5b4fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Recruiting
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/75">
          {perks.map((perk) => (
            <span key={perk} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-indigo-300" aria-hidden />
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

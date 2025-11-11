import Link from "next/link";
import { ShieldCheck, Wrench, Gift } from "lucide-react";
import { GooeyBackground } from "@/components/host/GooeyBackground";

const bullets = [
  { icon: ShieldCheck, label: "Regulated process" },
  { icon: Wrench, label: "Managed operations" },
  { icon: Gift, label: "Performance bonus" }
];

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-black py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.2),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <GooeyBackground hueRange={[95, 140]} />
      </div>
      <div
        className="reveal relative mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center text-white sm:px-8"
        data-animate
      >
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Ready to invest?</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Invest?</h2>
        <p className="text-sm text-white/70">
          Join 2,000+ smart investors building wealth through digital advertising. Start with as little as ₹50,000.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="#calculator"
            className="rounded-full bg-[#22C55E] px-8 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-[#16a34a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86efac]"
          >
            Start Investing
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#86efac] hover:text-[#86efac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Advisor
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/70">
          {bullets.map((bullet) => (
            <span key={bullet.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <bullet.icon className="h-4 w-4 text-emerald-300" />
              {bullet.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

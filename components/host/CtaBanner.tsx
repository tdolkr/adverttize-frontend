import Link from "next/link";
import { Gift, Monitor, ShieldCheck } from "lucide-react";
import { GooeyBackground } from "@/components/host/GooeyBackground";

const bullets = [
  { icon: ShieldCheck, label: "No upfront costs" },
  { icon: Monitor, label: "Free TV & installation" },
  { icon: Gift, label: "₹3000 free ads monthly" }
];

export function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-black py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <GooeyBackground />
      </div>
      <div className="reveal relative mx-auto grid w-full max-w-5xl items-center gap-8 px-6 text-center sm:px-8" data-animate>
        <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Ready to start earning?</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Join thousands of businesses earning passive income with zero investment.
        </h2>
        <p className="text-sm text-white/70">
          Free TV, free installation, and guaranteed ₹3000 monthly free advertising.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/apply"
            className="rounded-full bg-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-purple-400 hover:text-purple-200"
          >
            Contact Sales
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
          {bullets.map((bullet) => (
            <span
              key={bullet.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2"
            >
              <bullet.icon className="h-4 w-4 text-purple-300" />
              {bullet.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

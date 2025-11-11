import Link from "next/link";
import { ArrowUpRight, Gift, Percent, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  const quickLinks = ["Benefits", "Earnings", "Process", "Stories", "FAQ"];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <div className="animated-background" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950" />
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:pb-28 lg:pt-36">
        <div className="space-y-8">
          <span className="fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/70" data-animate>
            Turn your space into profit
          </span>
          <div className="space-y-4">
            <h1 className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl" data-animate>
              Become an Adverttize Host
            </h1>
            <p className="reveal reveal-delay-1 text-lg text-white/80" data-animate>
              Earn 5–7.5% commission plus ₹3000 monthly free advertising. Free TV, free installation, zero risk.
            </p>
          </div>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-3" data-animate>
            <Link
              href="/apply"
              className="rounded-full bg-purple-500 px-7 py-3 text-sm font-semibold text-neutral-50 shadow-glow transition hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Apply Now
            </Link>
            <Link
              href="#calculator"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-purple-400 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Calculate Earnings
            </Link>
          </div>
          <div className="fade-up flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2" data-animate>
            {quickLinks.map((item) => (
              <a
                key={item}
                href={`#${item === "Earnings" ? "earnings-overview" : item.toLowerCase()}`}
                className="rounded-full px-3 py-1 text-xs font-semibold text-white/70 transition hover:text-purple-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative flex h-full w-full flex-col gap-6 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-neutral-900/70 to-neutral-950 p-6 shadow-[0_35px_120px_rgba(8,8,8,0.6)] backdrop-blur" data-animate>
          <span className="orb orb--hero-one" aria-hidden />
          <span className="orb orb--hero-two" aria-hidden />
          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Live host snapshot</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-200">
                ● Online
              </span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-white">₹8,500</p>
            <p className="text-sm text-white/60">Per screen · Moderate footfall</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-[68%] rounded-full bg-purple-400" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
              <Percent className="h-4 w-4 text-purple-400" aria-hidden />
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">Commission</p>
              <p className="text-lg font-semibold text-white">5–7.5%</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
              <Gift className="h-4 w-4 text-purple-400" aria-hidden />
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">Free Ads</p>
              <p className="text-lg font-semibold text-white">₹3,000/mo</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
              <ShieldCheck className="h-4 w-4 text-purple-400" aria-hidden />
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">Setup cost</p>
              <p className="text-lg font-semibold text-white">₹0</p>
            </article>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/70">
              “Adverttize turned our lobby into a premium media asset. Installation took under 2 hours.”
            </p>
            <p className="mt-3 text-xs text-white/40">— Verified host · Pune</p>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-300 hover:text-purple-200">
              Start earning
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              Average go-live: 48 hrs
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              AMC & insurance included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Download, Play, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { advertiseHero } from "@/lib/contentAdvertise";
import { getInvestIcon } from "@/lib/icons";

export function AdvertiseHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <div className="animated-background animated-background--advertise" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
        <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:pb-28 lg:pt-36">
        <div className="space-y-8">
          <span className="fade-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#93c5fd]" data-animate>
            {advertiseHero.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl" data-animate>
              {advertiseHero.title}
            </h1>
            <p className="reveal reveal-delay-1 text-lg text-white/80" data-animate>
              {advertiseHero.description}
            </p>
          </div>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-3" data-animate>
            <Link
              href="#live-campaign"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              {advertiseHero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/product-tour"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#60a5fa] hover:text-[#bae6fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Play className="h-4 w-4" />
              {advertiseHero.secondaryCta}
            </Link>
          </div>
          <div className="fade-up flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2" data-animate>
            {[
              { label: "Live campaign", href: "#live-campaign" },
              { label: "Benefits", href: "#benefits" },
              { label: "Calculator", href: "#calculator" },
              { label: "Pricing", href: "#pricing" },
              { label: "Stories", href: "#stories" },
              { label: "Contact", href: "#cta" }
            ].map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-3 py-1 text-xs font-semibold text-white/70 transition hover:text-[#93c5fd]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative flex h-full w-full flex-col gap-6 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-neutral-900/70 to-neutral-950 p-6 shadow-[0_35px_120px_rgba(8,8,8,0.6)] backdrop-blur" data-animate>
          <span className="orb orb--advertise-one" aria-hidden />
          <span className="orb orb--advertise-two" aria-hidden />
          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Live inventory snapshot</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
                ● Available
              </span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-white">45,000+</p>
            <p className="text-sm text-white/60">Screens nationwide</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-[78%] rounded-full bg-gradient-to-r from-[#2563EB] to-[#38bdf8]" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {advertiseHero.metrics.map((metric) => {
              const Icon = getInvestIcon(metric.icon);
              return (
                <article key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4" role="group" aria-label={metric.aria}>
                  <Icon className="h-4 w-4 text-[#93c5fd]" aria-hidden />
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                </article>
              );
            })}
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/70">
              “With Adverttize, our launch campaign hit peak reach in 72 hours with full transparency over every screen.”
            </p>
            <p className="mt-3 text-xs text-white/40">— National FMCG brand</p>
            <Link
              href="#live-campaign"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd] hover:text-[#93c5fd]"
            >
              View live campaign
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-[#93c5fd]" />
              AI targeting
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#93c5fd]" />
              Verified screens
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

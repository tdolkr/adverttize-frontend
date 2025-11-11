import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, ShieldCheck, Sparkles } from "lucide-react";
import { investHero } from "@/lib/contentInvest";
import { getInvestIcon } from "@/lib/icons";

const quickLinks = [
  { label: "Portfolio", href: "#live-portfolio" },
  { label: "Benefits", href: "#benefits" },
  { label: "Calculator", href: "#calculator" },
  { label: "Revenue", href: "#revenue-model" },
  { label: "Stories", href: "#stories" },
  { label: "Process", href: "#process" }
];

export function InvestHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5" id="hero">
      <div className="absolute inset-0">
        <div className="animated-background animated-background--invest" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:pb-28 lg:pt-36">
        <div className="space-y-8">
          <span className="fade-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#86EFAC]" data-animate>
            {investHero.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl" data-animate>
              {investHero.title}
            </h1>
            <p className="reveal reveal-delay-1 text-lg text-white/80" data-animate>
              {investHero.description}
            </p>
          </div>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-3" data-animate>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-7 py-3 text-sm font-semibold text-neutral-900 shadow-glow transition hover:bg-[#16a34a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]"
            >
              {investHero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/prospectus.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#22C55E] hover:text-[#86EFAC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Download className="h-4 w-4" />
              {investHero.secondaryCta}
            </Link>
          </div>
          <div className="fade-up flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2" data-animate>
            {quickLinks.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-3 py-1 text-xs font-semibold text-white/70 transition hover:text-[#86EFAC]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative flex h-full w-full flex-col gap-6 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-neutral-900/70 to-neutral-950 p-6 shadow-[0_35px_120px_rgba(8,8,8,0.6)] backdrop-blur" data-animate>
          <span className="orb orb--invest-one" aria-hidden />
          <span className="orb orb--invest-two" aria-hidden />
          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Live investment snapshot</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/15 px-3 py-1 text-xs font-semibold text-[#86EFAC]">
                ● Open
              </span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-white">₹45,000</p>
            <p className="text-sm text-white/60">Avg. monthly ROI</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-[72%] rounded-full bg-gradient-to-r from-[#22C55E] to-[#bef264]" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ...investHero.metrics,
              {
                label: "Min Ticket",
                value: "₹50K",
                icon: "wallet" as const,
                aria: "Minimum ticket fifty thousand rupees"
              }
            ].map((metric) => {
              const Icon = getInvestIcon(metric.icon);
              return (
                <article key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4" role="group" aria-label={metric.aria}>
                  <Icon className="h-4 w-4 text-[#86EFAC]" aria-hidden />
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                </article>
              );
            })}
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/70">
              “Adverttize screens turned our idle capital into predictable returns with zero operational lift.”
            </p>
            <p className="mt-3 text-xs text-white/40">— Verified investor · Mumbai</p>
            <Link
              href="#live-portfolio"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#86EFAC] hover:text-[#86EFAC]"
            >
              View live portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86EFAC]" />
              Predictable payouts
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#86EFAC]" />
              Asset-backed security
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

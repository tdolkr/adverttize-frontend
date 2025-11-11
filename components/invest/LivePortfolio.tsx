import { livePortfolio } from "@/lib/contentInvest";
import { getInvestIcon } from "@/lib/icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LivePortfolio() {
  return (
    <section id="live-portfolio" className="py-16 md:py-20">
      <div className="reveal mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12" data-animate>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#86EFAC]">{livePortfolio.title}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{livePortfolio.name}</h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86EFAC]"
          >
            View portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm" data-animate>
          <p className="text-sm text-white/70">{livePortfolio.description}</p>
          <div className="mt-6 grid gap-4 text-white sm:grid-cols-3">
            {livePortfolio.stats.map((stat, index) => {
              const Icon = getInvestIcon(stat.icon);
              return (
                <div
                  key={stat.label}
                  className="fade-up rounded-2xl border border-white/10 bg-black/40 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20"
                  data-animate
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-2 text-[#86EFAC]">
                    <Icon className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 h-24 w-full rounded-xl bg-gradient-to-r from-white/5 via-[#22C55E]/15 to-white/5 p-4">
            <svg viewBox="0 0 300 80" className="h-full w-full">
              <polyline
                fill="none"
                stroke="#4ADE80"
                strokeWidth="3"
                points="0,60 50,50 90,55 130,40 170,42 210,30 250,34 300,20"
              />
              <polyline
                fill="none"
                stroke="#86EFAC"
                strokeWidth="3"
                strokeDasharray="6 6"
                points="0,65 60,58 110,45 160,48 210,36 260,25 300,22"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

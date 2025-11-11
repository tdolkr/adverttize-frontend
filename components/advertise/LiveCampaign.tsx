import { advertiseCampaign } from "@/lib/contentAdvertise";
import { getInvestIcon } from "@/lib/icons";
import { Building2 } from "lucide-react";

export function LiveCampaign() {
  return (
    <section id="live-campaign" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">{advertiseCampaign.title}</p>
          <h2 className="text-3xl font-semibold text-white">{advertiseCampaign.name}</h2>
        </div>
        <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/60 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <Building2 className="h-6 w-6 text-[#60a5fa]" />
              </div>
              <div>
                <p className="text-sm text-white/60">{advertiseCampaign.description}</p>
              </div>
            </div>
            <button className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]">
              View report
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {advertiseCampaign.stats.map((stat) => {
              const Icon = getInvestIcon(stat.icon);
              return (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-[#93c5fd]">
                    <Icon className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 h-28 w-full rounded-2xl bg-gradient-to-r from-[#1d4ed8]/10 via-[#60a5fa]/20 to-[#1d4ed8]/10 p-4">
            <svg viewBox="0 0 300 80" className="h-full w-full" aria-hidden>
              <polyline
                fill="none"
                stroke="#60A5FA"
                strokeWidth="3"
                points="0,65 50,58 90,55 130,48 170,35 210,30 250,26 300,20"
              />
              <polyline
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                strokeDasharray="6 6"
                points="0,70 60,64 110,58 160,40 210,32 260,28 300,24"
              />
            </svg>
          </div>
        </article>
      </div>
    </section>
  );
}

import { revenueShares } from "@/lib/contentInvest";
import { getInvestIcon } from "@/lib/icons";
import { Trophy } from "lucide-react";

export function RevenueModel() {
  const totalInvestor = revenueShares[0].percent + revenueShares[1].percent;

  return (
    <section id="revenue-model" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="reveal space-y-3 text-center lg:text-left" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#86EFAC]">Revenue Model</p>
          <h2 className="text-3xl font-semibold text-white">Transparent Profit Sharing</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          <div className="fade-up rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg backdrop-blur space-y-4" data-animate>
            <p className="text-sm font-semibold text-white">Payout Distribution</p>
            <div className="h-12 w-full overflow-hidden rounded-full bg-white/5">
              <div className="flex h-full w-full">
                {revenueShares.map((segment) => (
                  <div
                    key={segment.label}
                    className="h-full"
                    style={{
                      width: `${segment.percent}%`,
                      background:
                        segment.percent === 60
                          ? "linear-gradient(90deg,#22C55E,#86EFAC)"
                          : segment.percent === 15
                            ? "#22C55E"
                            : segment.percent === 20
                              ? "#F59E0B"
                              : "#64748B"
                    }}
                    title={segment.label}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-white/70">
              Total Investor Payout: <span className="font-semibold text-white">{totalInvestor}%</span>
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {revenueShares.map((item, index) => {
              const Icon = getInvestIcon(item.icon);
              return (
                <article
                  key={item.label}
                  className="fade-up rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20"
                  data-animate
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 text-[#86EFAC]">
                    <Icon className="h-5 w-5" aria-hidden />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</p>
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.percent}%</p>
                  <p className="text-sm text-white/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

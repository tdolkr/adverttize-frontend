import { Gift, Percent, TrendingUp, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    value: "₹8,500/month",
    label: "Per screen with moderate foot traffic"
  },
  {
    icon: Percent,
    value: "5–7.5%",
    label: "Commission"
  },
  {
    icon: Gift,
    value: "₹3,000",
    label: "Free Ads"
  }
];

export function KpiCards() {
  return (
    <section id="earnings-overview" className="bg-neutral-950 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Average earnings</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Transparent payouts, zero guesswork.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.label}
              className="fade-up flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-[0_12px_35px_rgba(8,8,8,0.45)] backdrop-blur transition hover:-translate-y-1"
              data-animate
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <card.icon className="h-5 w-5 text-purple-400" aria-hidden />
              <p className="text-2xl font-semibold text-white">{card.value}</p>
              <p className="text-sm text-white/70">{card.label}</p>
            </article>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70">
          <ShieldCheck className="h-4 w-4 text-purple-400" />
          Setup Cost: ₹0
        </div>
      </div>
    </section>
  );
}

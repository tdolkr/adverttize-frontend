import { advertisePricing } from "@/lib/contentAdvertise";
import { getInvestIcon } from "@/lib/icons";
import { CheckCircle2 } from "lucide-react";

export function AdvertisePricing() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Simple Pricing</p>
          <h2 className="text-3xl font-semibold text-white">Start from ₹100 per day</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advertisePricing.map((plan) => {
            const Icon = getInvestIcon(plan.icon);
            return (
              <article
                key={plan.name}
                className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-[#93c5fd]/50 ${
                  plan.badge ? "ring-2 ring-[#60a5fa]/60" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Icon className="h-5 w-5 text-[#93c5fd]" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{plan.name}</p>
                      <p className="text-sm text-white/60">{plan.cadence}</p>
                    </div>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-[#93c5fd]/40 px-3 py-1 text-xs font-semibold text-[#93c5fd]">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-4xl font-semibold text-white">{plan.price}</p>
                  <p className="text-sm text-white/60">per ad per screen per day</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#60a5fa]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]">
                  Get Started
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

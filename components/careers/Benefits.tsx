import { careersBenefits } from "@/lib/contentCareers";
import { getInvestIcon } from "@/lib/icons";

export function CareersBenefits() {
  return (
    <section id="benefits" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Why Join Us</p>
          <h2 className="text-3xl font-semibold text-white">Perks & Benefits</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careersBenefits.map((benefit) => {
            const Icon = getInvestIcon(benefit.icon);
            return (
              <article
                key={benefit.title}
                className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1"
                data-animate
              >
                <Icon className="h-6 w-6 text-[#60a5fa]" aria-hidden />
                <h3 className="mt-3 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/70">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

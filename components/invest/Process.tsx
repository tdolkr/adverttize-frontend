import { processSteps } from "@/lib/contentInvest";
import { getInvestIcon } from "@/lib/icons";

export function InvestProcess() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="reveal space-y-3 text-center lg:text-left" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#86EFAC]">Simple Process</p>
          <h2 className="text-3xl font-semibold text-white">Start Earning in 5 Steps</h2>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden
          />
          <div className="grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = getInvestIcon(step.icon);
              return (
                <article
                  key={step.title}
                  className="fade-up rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:-translate-y-1 hover:border-white/20"
                  data-animate
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center justify-between text-[#86EFAC]">
                    <span className="text-sm font-semibold text-white/70">{`0${index + 1}`}</span>
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-[#22C55E]">{step.time}</span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

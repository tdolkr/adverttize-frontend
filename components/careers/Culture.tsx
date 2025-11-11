import { cultureCards } from "@/lib/contentCareers";
import { getInvestIcon } from "@/lib/icons";

export function CultureSection() {
  return (
    <section id="culture" className="py-20 fade-up" data-animate>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Our Culture</p>
          <h2 className="text-3xl font-semibold text-white">The Adverttize Way</h2>
          <p className="text-white/70">
            Our values aren’t just words on a wall—they’re the principles that guide every decision, every collaboration, and every innovation at our company.
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5 bg-white/5 blur-3xl" aria-hidden />
          <div className="relative grid gap-4 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-[#05070f] to-[#0f172a] p-6 shadow-[0_25px_90px_rgba(4,5,12,0.6)]" aria-label="Culture Cards">
            <div className="absolute inset-0 opacity-20" aria-hidden>
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_60%)]" />
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              {cultureCards.map((card) => {
                const Icon = getInvestIcon(card.icon);
                return (
                  <article key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-inner transition hover:-translate-y-1">
                    <Icon className="h-5 w-5 text-[#93c5fd]" aria-hidden />
                    <h3 className="mt-3 text-base font-semibold">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { values } from "@/lib/contentAbout";
import { getInvestIcon } from "@/lib/icons";
import { Quote } from "lucide-react";

export function ValuesSection() {
  return (
    <section id="values" className="py-16 md:py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Our Values</p>
          <h2 className="text-3xl font-semibold text-white">The principles that guide everything we do.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = getInvestIcon(value.icon);
            return (
              <article
                key={value.title}
                className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1"
                data-animate
              >
                <Icon className="h-6 w-6 text-[#93c5fd]" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-white/70">{value.description}</p>
              </article>
            );
          })}
        </div>
        <div className="fade-up rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-black/40 to-black/60 p-8 text-center shadow-xl" data-animate>
          <Quote className="mx-auto h-8 w-8 text-[#93c5fd]" />
          <p className="mt-4 text-lg text-white/80">
            “We don&rsquo;t just sell advertising space; we build partnerships that drive growth and create lasting impact.”
          </p>
          <p className="mt-3 text-sm font-semibold text-white/60">— Adverttize Team</p>
        </div>
      </div>
    </section>
  );
}

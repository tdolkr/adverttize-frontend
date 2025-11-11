import { contactOptions } from "@/lib/contentContact";
import { getInvestIcon } from "@/lib/icons";

export function ContactOptions() {
  return (
    <section id="contact-options" className="py-16 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Contact Options</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Multiple Ways to Reach Us</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {contactOptions.map((option) => {
            const Icon = getInvestIcon(option.icon);
            return (
              <article
                key={option.title}
                className="fade-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1"
                data-animate
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#93c5fd]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-white">{option.title}</h3>
                <p className="mt-1 text-sm text-white/80">{option.value}</p>
                <p className="text-sm text-white/60">{option.description}</p>
              </article>
            );
          })}
        </div>
        <p className="text-sm text-white/60">⚡ We typically respond within 2 hours during business days.</p>
      </div>
    </section>
  );
}

import { reasons } from "@/lib/contentContact";
import { getInvestIcon } from "@/lib/icons";

export function ContactReasons() {
  return (
    <section id="reasons" className="py-16 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-12">
        <h3 className="text-center text-2xl font-semibold text-white">Why Choose Us?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((reason) => {
            const Icon = getInvestIcon(reason.icon);
            return (
              <span
                key={reason.label}
                className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-lg"
                data-animate
              >
                <Icon className="h-4 w-4 text-[#93c5fd]" aria-hidden />
                {reason.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

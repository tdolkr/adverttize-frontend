import Link from "next/link";
import { investBenefits } from "@/lib/contentInvest";
import { getInvestIcon } from "@/lib/icons";
import { ChevronRight } from "lucide-react";

export function InvestBenefits() {
  return (
    <section id="benefits" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="reveal space-y-3 text-center lg:text-left" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#86EFAC]">Why Invest With Us</p>
          <h2 className="text-3xl font-semibold text-white">Smart Investment Benefits</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {investBenefits.map((benefit, index) => {
            const Icon = getInvestIcon(benefit.icon);
            return (
              <article
                key={benefit.title}
                className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-lg"
                data-animate
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Icon className="h-6 w-6 text-[#86EFAC]" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/70">{benefit.description}</p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#86EFAC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86EFAC]/60"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

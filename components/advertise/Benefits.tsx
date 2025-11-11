import Link from "next/link";
import { advertiseBenefits } from "@/lib/contentAdvertise";
import { getInvestIcon } from "@/lib/icons";
import { ChevronRight } from "lucide-react";

export function AdvertiseBenefits() {
  return (
    <section id="benefits" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Why Choose Adverttize</p>
          <h2 className="text-3xl font-semibold text-white">Smarter Advertising Powered by AI</h2>
          <p className="text-white/70">
            Our platform combines cutting-edge technology with extensive screen networks to deliver unprecedented targeting capabilities and measurable results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advertiseBenefits.map((benefit) => {
            const Icon = getInvestIcon(benefit.icon);
            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-white/20 hover:shadow-lg"
              >
                <Icon className="h-6 w-6 text-[#60a5fa]" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/70">{benefit.description}</p>
                <Link href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#93c5fd]">
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

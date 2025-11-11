import Link from "next/link";
import { Rocket, Phone } from "lucide-react";
import { GooeyBackground } from "@/components/host/GooeyBackground";
import { reasons } from "@/lib/contentContact";
import { getInvestIcon } from "@/lib/icons";

export function ContactCta() {
  return (
    <section
      id="contact-cta"
      className="relative isolate overflow-hidden bg-gradient-to-r from-neutral-900 via-[#04212f] to-black py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <GooeyBackground hueRange={[170, 200]} />
      </div>
      <div
        className="reveal relative mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center text-white sm:px-8"
        data-animate
      >
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Ready to start your advertising journey?</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Start Your Advertising Journey?</h2>
        <p className="text-sm text-white/75">
          Let&rsquo;s discuss how we can help you achieve your advertising goals and drive real results.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="#form"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0f172a] shadow-lg transition hover:scale-[1.01]"
          >
            Get Started
            <Rocket className="h-4 w-4" />
          </Link>
          <Link
            href="tel:+917200446204"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#67e8f9] hover:text-[#67e8f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call Now
            <Phone className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/75">
          {reasons.map((reason) => {
            const Icon = getInvestIcon(reason.icon);
            return (
              <span
                key={reason.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2"
              >
                <Icon className="h-4 w-4 text-[#67e8f9]" aria-hidden />
                {reason.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

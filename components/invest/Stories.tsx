import { testimonials } from "@/lib/contentInvest";
import { Trophy, Star } from "lucide-react";

export function InvestStories() {
  return (
    <section id="stories" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="reveal space-y-3 text-center lg:text-left" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#86EFAC]">Success Stories</p>
          <h2 className="text-3xl font-semibold text-white">Hear From Our Investors</h2>
        </div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {testimonials.map((story) => (
              <article
                key={story.name}
                className="fade-up min-w-full snap-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/30 transition hover:border-white/20 sm:min-w-[360px]"
                data-animate
              >
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#86EFAC]">
                    <Trophy className="h-4 w-4" />
                    {story.badge}
                  </span>
                  <span aria-hidden className="flex gap-1 text-[#22C55E]">
                    {[...Array(4)].map((_, star) => (
                      <Star key={star} className="h-3 w-3 fill-current" />
                    ))}
                  </span>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-lg font-semibold text-white">{story.name}</p>
                  <p className="text-sm text-white/70">Invested: {story.invested}</p>
                  <p className="text-sm text-white/70">Returns: {story.returns} · Period: {story.period}</p>
                </div>
                <p className="mt-4 text-sm text-white/80">“{story.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

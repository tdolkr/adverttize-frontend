import { advertiseStories } from "@/lib/contentAdvertise";
import { Sparkles } from "lucide-react";

export function AdvertiseStories() {
  return (
    <section id="stories" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Success Stories</p>
          <h2 className="text-3xl font-semibold text-white">Brands That Transformed Their Reach</h2>
        </div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {advertiseStories.map((story) => (
              <article
                key={story.brand}
                className="min-w-full snap-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:border-white/20 sm:min-w-[360px]"
              >
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {story.emoji} {story.brand}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2 py-1 text-[11px] text-white/70">
                    <Sparkles className="h-3 w-3 text-[#93c5fd]" />
                    Verified Result
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/60">{story.goal}</p>
                <p className="mt-4 text-sm text-white/80">“{story.quote}”</p>
                <p className="mt-4 text-xs font-semibold text-[#93c5fd]">{story.details}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

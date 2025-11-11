import {
  Award,
  Coins,
  Gift,
  Megaphone,
  Monitor,
  ShieldCheck,
  Users
} from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Earn Passive Income",
    description: "Generate revenue without any effort. Your space works 24/7."
  },
  {
    icon: Monitor,
    title: "Free TV & Setup",
    description: "We supply premium screens and handle installation."
  },
  {
    icon: Megaphone,
    title: "Free Content Slot",
    description: "Use ₹3000 worth of ads each month to promote yourself."
  },
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    description: "No upfront costs. We manage maintenance and content."
  },
  {
    icon: Award,
    title: "Performance Bonus",
    description: "Higher commissions for premium, high-traffic spaces."
  },
  {
    icon: Users,
    title: "Grow Your Business",
    description: "Screens improve ambience and attract new customers."
  }
];

export function WhyHost() {
  return (
    <section id="benefits" className="border-y border-white/5 bg-black/40 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Why become a host?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Join thousands of businesses already earning passive income with our advertising screens.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group fade-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(8,8,8,0.45)] backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/60"
              data-animate
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <feature.icon className="h-5 w-5 text-purple-400" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">{feature.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-300 opacity-0 transition group-hover:opacity-100">
                Learn more
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

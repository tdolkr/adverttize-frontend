import { ClipboardCheck, MapPin, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    title: "Apply Online",
    description: "Fill out our simple application form with your business details.",
    icon: ClipboardCheck
  },
  {
    title: "Site Assessment",
    description: "Our team visits to assess the best screen placement.",
    icon: MapPin
  },
  {
    title: "Free Installation",
    description: "We install the TV screen and set up everything for you.",
    icon: Wrench
  },
  {
    title: "Start Earning",
    description: "Begin earning passive income from day one.",
    icon: Rocket
  }
];

export function Steps() {
  return (
    <section id="process" className="border-y border-white/5 bg-black/40 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Simple process</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-sm text-white/70">Get started in just 4 simple steps.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="fade-up rounded-[28px] border border-white/10 bg-black/40 p-6 backdrop-blur transition hover:-translate-y-1"
              data-animate
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between text-purple-300">
                <span className="text-sm font-semibold">{`0${index + 1}`}</span>
                <step.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

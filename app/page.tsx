"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Inventory", href: "#inventory" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" }
];

const clientNames = [
  "Coca-Cola",
  "Samsung",
  "Pepsi",
  "Zomato",
  "Nykaa",
  "Uber",
  "Dunzo",
  "Sony"
];

const howItWorks = [
  {
    title: "Discover inventory",
    description:
      "Browse India’s largest digital and static OOH marketplace by audience, format, and location.",
    icon: "🗺️"
  },
  {
    title: "Book in minutes",
    description:
      "Lock preferred sites, upload creatives, and manage approvals from one intuitive dashboard.",
    icon: "⚡"
  },
  {
    title: "Measure outcomes",
    description:
      "Track impressions, footfall, and conversions in real time with transparent attribution.",
    icon: "📈"
  }
];

const solutions = [
  {
    title: "Digital Billboards",
    description:
      "Premium DOOH screens across malls, corporate parks, and high streets with dynamic scheduling.",
    metric: "11k+ faces",
    background:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Transit Media",
    description:
      "Metro, airport, and rideshare formats that follow your audience throughout their daily journeys.",
    metric: "65 cities",
    background:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Retail & Cinema",
    description:
      "Point-of-sale, multiplex, and hyperlocal retail networks that convert footfall into loyal customers.",
    metric: "32M weekly viewers",
    background:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Programmatic OOH",
    description:
      "Trigger creatives based on weather, time, or audience density using plug-and-play programmatic pipes.",
    metric: "Always on",
    background:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
  }
];

const metrics = [
  { label: "Screens on platform", value: "45,000+" },
  { label: "Markets covered", value: "120+" },
  { label: "Brands onboarded", value: "650+" },
  { label: "Avg. ROI uplift", value: "4.2x" }
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Head of Growth · DineJoy",
    quote:
      "Outdoor planning used to take weeks. With Adverttize, we booked 84 premium sites in two days and tracked footfall uplift live.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80"
  },
  {
    name: "Priya Patel",
    role: "Brand Director · Stellar Homes",
    quote:
      "The team mirrors the experience of adverttize.com—simple workflows, transparent pricing, and responsive support for every campaign.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80"
  },
  {
    name: "Rahul Sharma",
    role: "Marketing Lead · FastKart",
    quote:
      "Real-time dashboards finally let us prove DOOH ROI to leadership. Every launch is synced to conversions automatically.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=160&q=80"
  }
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    const cycleContainer = document.querySelector<HTMLElement>("[data-cycle]");
    let wordInterval: number | undefined;

    if (cycleContainer) {
      const words = Array.from(
        cycleContainer.querySelectorAll<HTMLElement>(".cycle-word")
      );

      if (words.length > 0) {
        cycleContainer.classList.add("is-animated");

        let index = 0;
        const rotateWords = () => {
          words.forEach((word, idx) => {
            word.classList.toggle("is-active", idx === index);
          });
          index = (index + 1) % words.length;
        };

        rotateWords();
        wordInterval = window.setInterval(rotateWords, 2200);
      }
    }

    return () => {
      observer.disconnect();
      if (wordInterval) {
        window.clearInterval(wordInterval);
      }
      cycleContainer?.classList.remove("is-animated");
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.15),_transparent_60%)] blur-2xl" />

      <header
        className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/70 backdrop-blur fade-in"
        data-animate
        style={{ animationDelay: "0.08s" }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-12">
          <Logo className="h-11 w-auto" priority />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-brand hover:text-brand lg:inline-flex">
              Log in
            </button>
            <button className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-neutral-900 shadow-glow transition hover:bg-brand-dark">
              Book a demo
            </button>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),transparent_55%)]">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:px-12 lg:pb-28 lg:pt-20">
          <div className="space-y-8">
            <span
              className="fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/80"
              data-animate
            >
              Outdoor advertising made simple

            </span>
            <h1
              className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
              data-animate
            >
              Advertisement made{" "}
              <span className="inline-flex items-center">
                <span className="hero-word-cycle" data-cycle>
                  <span className="cycle-word">Smarter</span>
                  <span className="cycle-word">Measurable</span>
                  <span className="cycle-word">Powerful</span>
                  <span className="cycle-word">Simple</span>
                </span>
              </span>
            </h1>
            <p
              className="reveal reveal-delay-1 max-w-xl text-base text-neutral-200 sm:text-lg"
              data-animate
            >
              A powerful digital signage platform to grow your brand visibility across thousands of screens nationwide.


            </p>
            <div
              className="reveal reveal-delay-2 flex flex-wrap gap-3"
              data-animate
            >
              <button className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-neutral-900 shadow-glow transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Explore inventory
              </button>
              <button className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Watch product tour
              </button>
            </div>
            <div className="fade-up grid gap-4 sm:grid-cols-2" data-animate>
              {metrics.slice(0, 2).map((metric, index) => (
                <div
                  key={metric.label}
                  className="fade-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  data-animate
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <div
              className="scale-in w-full overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_35px_120px_rgba(8,8,8,0.7)] backdrop-blur"
              data-animate
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand/10 via-blue-500/20 to-neutral-900 p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.35),transparent_60%)] opacity-70" />
                <div className="relative space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Live campaign
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      Uptown Retail Launch
                    </h3>
                    <p className="text-sm text-white/70">
                      38 DOOH faces across three high-street clusters.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Reach", value: "3.2M viewers" },
                      { label: "Footfall lift", value: "+26%" },
                      { label: "Spend", value: "₹4.6L" }
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50">
                          {item.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-brand hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                    View report
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 top-10 hidden h-24 w-24 rounded-full bg-brand/20 blur-2xl pulse-glow sm:block" />
          </div>
        </div>
        <div className="pointer-events-none absolute -left-20 top-32 hidden h-48 w-48 rounded-full bg-brand/25 blur-3xl float-slow lg:block" />
        <div className="pointer-events-none absolute right-12 bottom-16 hidden h-36 w-36 rounded-full bg-blue-500/25 blur-2xl float md:block" />
      </section>

      <section className="border-y border-white/5 bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:px-8 lg:px-12">
          <p
            className="fade-in text-xs uppercase tracking-[0.35em] text-white/50"
            data-animate
          >
            Trusted by India’s leading brands
          </p>
          <div className="ticker">
            <div className="ticker-content text-sm font-semibold text-white/70">
              {[...clientNames, ...clientNames].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="reveal flex min-w-[160px] items-center justify-center rounded-xl border border-white/5 bg-white/5 px-5 py-3 backdrop-blur"
                  data-animate
                  style={{ animationDelay: `${(index % clientNames.length) * 0.08}s` }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span
              className="fade-in text-xs uppercase tracking-[0.25em] text-brand"
              data-animate
            >
              How Adverttize works
            </span>
            <h2
              className="reveal text-3xl font-semibold text-white sm:text-4xl"
              data-animate
            >
              Plan. Launch. Measure. Repeat.
            </h2>
            <p
              className="reveal reveal-delay-1 text-neutral-300"
              data-animate
            >
              Adverttize mirrors the simplicity of adverttize.com—search the
              network you want, book it instantly, and track outcomes that your
              leadership team understands. No spreadsheets, no manual follow ups.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="group reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand/50 hover:shadow-glow"
                  data-animate
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative flex h-full items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black shadow-[0_25px_80px_rgba(8,8,8,0.5)] scale-in"
            data-animate
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.18),transparent_60%)]" />
            <div className="relative max-w-sm space-y-4 p-8 text-center text-white">
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Demo preview
              </span>
              <h3 className="text-2xl font-semibold leading-snug">
                Watch how brands automate out-of-home planning in minutes.
              </h3>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-brand hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Play walkthrough
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="inventory"
        className="relative isolate overflow-hidden bg-gradient-to-b from-black/40 via-neutral-950 to-neutral-950 py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.2),_transparent_70%)] blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
          <div className="space-y-4 text-center">
            <span
              className="fade-in text-xs uppercase tracking-[0.3em] text-brand"
              data-animate
            >
              Nationwide inventory
            </span>
            <h2
              className="reveal text-3xl font-semibold text-white sm:text-4xl"
              data-animate
            >
              Every format your media plan needs.
            </h2>
            <p
              className="reveal reveal-delay-1 mx-auto max-w-3xl text-neutral-300"
              data-animate
            >
              From landmark billboards to hyperlocal retail and transit media,
              Adverttize mirrors the inventory showcased on adverttize.com with
              deeper targeting, live availability, and automated reporting.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="group reveal relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px] transition hover:border-brand/60 hover:shadow-glow"
                data-animate
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="relative h-full rounded-[30px] bg-neutral-950/80 p-8">
                  <div className="absolute inset-0 opacity-40 transition group-hover:opacity-60">
                    <Image
                      src={solution.background}
                      alt={solution.title}
                      fill
                      className="rounded-[30px] object-cover"
                    />
                    <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-black/40 via-black/70 to-black" />
                  </div>
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="space-y-4">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-brand">
                        {solution.metric}
                      </span>
                      <h3 className="text-2xl font-semibold text-white">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-neutral-300">
                        {solution.description}
                      </p>
                    </div>
                    <button className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                      View locations
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <span
              className="fade-in text-xs uppercase tracking-[0.3em] text-brand"
              data-animate
            >
              Pricing built for scale
            </span>
            <h2
              className="reveal text-3xl font-semibold text-white sm:text-4xl"
              data-animate
            >
              Advertise from ₹100 per day with transparent pricing.
            </h2>
            <p
              className="reveal reveal-delay-1 text-neutral-300"
              data-animate
            >
              Mirror the booking flow from adverttize.com with richer controls—
              lock inventory instantly, automate flighting, and only pay for
              impressions delivered. Model results with our built-in ROI
              calculator before you launch.
            </p>
            <ul className="space-y-4 text-sm text-neutral-200">
              {[
                "City-wise rate cards with all taxes and production costs upfront.",
                "Campaign calendars that sync creatives, approvals, and billing.",
                "Live analytics dashboards that translate to investor-ready reports."
              ].map(
                (item, index) => (
                  <li
                    key={item}
                    className="reveal flex items-start gap-3"
                    data-animate
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-xs font-semibold text-brand">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div
            className="scale-in relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(8,8,8,0.65)] backdrop-blur"
            data-animate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="fade-up rounded-3xl border border-white/10 bg-black/40 p-6"
                  data-animate
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="reveal reveal-delay-2 mt-8 rounded-3xl border border-white/10 bg-black/50 p-6"
              data-animate
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Projected ROI</p>
                  <p className="text-2xl font-semibold text-white">4.6x</p>
                </div>
                <button className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  Export report
                </button>
              </div>
              <div className="mt-6 flex h-2 overflow-hidden rounded-full bg-white/10">
                <span className="float w-[64%] rounded-full bg-brand" />
              </div>
              <div className="mt-4 grid gap-4 text-xs text-white/60 sm:grid-cols-3">
                <div className="fade-in" data-animate style={{ animationDelay: "0.2s" }}>
                  <p>Spend</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    ₹2,40,000
                  </p>
                </div>
                <div className="fade-in" data-animate style={{ animationDelay: "0.32s" }}>
                  <p>Impressions</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    32.4M
                  </p>
                </div>
                <div className="fade-in" data-animate style={{ animationDelay: "0.44s" }}>
                  <p>Attribution lift</p>
                  <p className="mt-1 text-sm font-semibold text-white">24%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="relative isolate overflow-hidden bg-gradient-to-br from-brand/10 via-transparent to-blue-500/10 py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_60%)] blur-2xl" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span
              className="fade-in text-xs uppercase tracking-[0.3em] text-brand"
              data-animate
            >
              Customer stories
            </span>
            <h2
              className="reveal mt-4 font-display text-3xl font-semibold text-white sm:text-4xl"
              data-animate
            >
              See how leading brands scale with Adverttize.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/70 p-8 shadow-[0_25px_70px_rgba(8,8,8,0.5)] backdrop-blur reveal"
                data-animate
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300">{testimonial.quote}</p>
                  <button className="inline-flex items-center gap-2 text-xs font-semibold text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                    Read case study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div
          className="scale-in relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/80 p-10 text-center shadow-[0_20px_80px_rgba(8,8,8,0.6)]"
          data-animate
        >
          <div className="absolute -left-24 top-1/2 hidden h-60 w-60 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl md:block" />
          <div className="absolute -right-24 top-1/2 hidden h-60 w-60 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl md:block" />
          <div className="relative space-y-4">
            <span
              className="fade-in text-xs uppercase tracking-[0.25em] text-brand"
              data-animate
            >
              Ready to make every impression count?
            </span>
            <h2
              className="reveal font-display text-3xl font-semibold text-white sm:text-4xl"
              data-animate
            >
              Join brands transforming their outdoor advertising with
              Adverttize.
            </h2>
            <p
              className="reveal reveal-delay-1 mx-auto max-w-2xl text-sm text-neutral-300"
              data-animate
            >
              Bring your strategy, we handle screen selection, creative
              automation, and performance measurement. Launch a pilot in 7 days
              with dedicated onboarding.
            </p>
            <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-3" data-animate>
              <button className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-neutral-900 shadow-glow transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Talk to an expert
              </button>
              <button className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Download rate card
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/5 bg-black/70 backdrop-blur"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12">
          <div className="space-y-6">
            <Logo className="h-12 w-auto" />
            <p className="max-w-md text-sm text-neutral-400">
              Subscribe for insights on DOOH strategy, automation, and campaign
              performance. We send one newsletter a month—no noise, just value.
            </p>
            <form className="flex w-full max-w-md items-center gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Adverttize · Privacy policy · Terms
              of use
            </p>
          </div>
          <div className="grid gap-8 text-sm text-neutral-300 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Company
              </p>
              <ul className="space-y-2">
                <li>
                  <Link className="transition hover:text-white" href="#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#career">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="#pricing">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Resources
              </p>
              <ul className="space-y-2">
                <li>
                  <Link className="transition hover:text-white" href="#resources">
                    Case studies
                  </Link>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#guides">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a className="transition hover:text-white" href="mailto:hello@adverttize.com">
                    hello@adverttize.com
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex gap-3 text-white/60">
                  <a className="transition hover:text-white" href="#linkedin">
                    LinkedIn
                  </a>
                  <a className="transition hover:text-white" href="#instagram">
                    Instagram
                  </a>
                  <a className="transition hover:text-white" href="#twitter">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

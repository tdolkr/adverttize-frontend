import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Fashion Store · Delhi",
    earnings: "₹8,500/month",
    quote:
      "The free advertising helped grow my business while the commission is pure profit. Great partnership!"
  },
  {
    name: "Priya Sharma",
    role: "Coffee Shop · Mumbai",
    earnings: "₹6,200/month",
    quote:
      "Customers love the screen content. It enhances the ambiance and brings extra income."
  },
  {
    name: "Amit Patel",
    role: "Gym Owner · Bangalore",
    earnings: "₹12,000/month",
    quote:
      "High footfall area with 7% commission. Best passive income decision I ever made."
  }
];

export function Testimonials() {
  return (
    <section id="stories" className="bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Success stories</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Hear from our hosts</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="fade-up rounded-[28px] border border-purple-500/20 bg-neutral-900/70 p-8 shadow-[0_25px_70px_rgba(8,8,8,0.5)] backdrop-blur transition hover:-translate-y-1"
              data-animate
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <Quote className="h-6 w-6 text-purple-300" aria-hidden />
              <p className="mt-4 text-sm text-white/80">“{testimonial.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={`https://i.pravatar.cc/80?img=${index + 10}`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/60">{testimonial.role}</p>
                  <p className="text-xs text-purple-300">{testimonial.earnings}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Send, Phone } from "lucide-react";

export function ContactHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070f] via-[#0b1220] to-[#05070f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),transparent_60%)]" aria-hidden />
        <div className="pulse-circle" aria-hidden />
      </div>
      <div className="fade-up relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-28 text-center" data-animate>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
          Get In Touch
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Let’s Connect</h1>
        <p className="text-lg text-white/70">
          Ready to transform your advertising strategy? We&rsquo;re here to help you every step of the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#form"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
          >
            Send Message
            <Send className="h-4 w-4" />
          </Link>
          <Link
            href="tel:+917200446204"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#93c5fd]"
          >
            Schedule Call
            <Phone className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .pulse-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 9999px;
          border: 1px solid rgba(96, 165, 250, 0.4);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: hero-pulse 8s ease-in-out infinite;
        }
        @keyframes hero-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

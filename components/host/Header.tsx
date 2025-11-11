import Link from "next/link";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Host", href: "/host" },
  { label: "Invest", href: "/invest" },
  { label: "Advertise", href: "/advertise" },
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/careers" },
  { label: "Contact Us", href: "/contact" }
];

export function HostHeader({ active }: { active?: string } = {}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center">
          <Logo className="h-11 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition ${
                  active === link.label ? "text-white font-semibold" : "hover:text-white"
                }`}
                aria-current={active === link.label ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-2xl border border-white/15 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-purple-400 hover:text-purple-200 lg:inline-flex"
          >
            Log in
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-yellow-200">
            Book a demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";

export function HostFooter() {
  return (
    <footer className="border-t border-white/5 bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:flex-row lg:justify-between">
        <div className="space-y-3 text-sm text-white/70">
          <Logo className="h-12 w-auto" />
          <p>
            Need help? Email{" "}
            <a className="text-purple-300" href="mailto:hosts@adverttize.com">
              hosts@adverttize.com
            </a>{" "}
            or call{" "}
            <a className="text-purple-300" href="tel:+919876543210">
              +91 98765 43210
            </a>
            .
          </p>
        </div>
        <div className="grid gap-8 text-sm text-white/60 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="transition hover:text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/careers">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Solutions</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="transition hover:text-white" href="/host">
                  Host
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/invest">
                  Invest
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/advertise">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Resources</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="transition hover:text-white" href="#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Adverttize. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

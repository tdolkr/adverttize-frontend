"use client";

import { useState } from "react";
import Link from "next/link";
import { HostHeader } from "@/components/host/Header";
import { ShieldCheck, Users, Zap } from "lucide-react";

const featureChips = [
  { icon: ShieldCheck, label: "Secure" },
  { icon: Users, label: "Multi-Role" },
  { icon: Zap, label: "Fast" }
];

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder submit handler
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,204,21,0.12),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'6\' cy=\'6\' r=\'1\'/%3E%3Ccircle cx=\'120\' cy=\'40\' r=\'1\'/%3E%3Ccircle cx=\'80\' cy=\'160\' r=\'0.8\'/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <HostHeader active="Login" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-12 pt-32 sm:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_140px_rgba(0,0,0,0.6)] backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-yellow-200">Welcome Back</p>
                <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Sign in to your Adverttize account</h1>
                <p className="mt-3 text-sm text-white/70">
                  Access smarter campaign planning, real-time analytics, and your personalized Adverttize workspace.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block space-y-2 text-sm text-white/80">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-200 focus:outline-none"
                    required
                  />
                </label>
                <label className="block space-y-2 text-sm text-white/80">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-yellow-200 focus:outline-none"
                    required
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/30 bg-black/60 text-yellow-300 focus:ring-offset-0"
                    />
                    Remember me
                  </label>
                  <Link href="/forgot-password" className="text-yellow-200 transition hover:text-yellow-100">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-yellow-300 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-yellow-200"
                >
                  Sign In
                </button>
              </form>

              <p className="text-center text-sm text-white/70">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-yellow-200 transition hover:text-yellow-100">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="space-y-6 rounded-[28px] border border-white/10 bg-black/40 p-6">
              <h2 className="text-base font-semibold text-white">Why teams choose Adverttize</h2>
              <p className="text-sm text-white/70">
                Centralize team permissions, automate approvals, and monitor performance in one secure dashboard.
              </p>
              <div className="space-y-4">
                {featureChips.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <feature.icon className="h-4 w-4 text-yellow-200" aria-hidden />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

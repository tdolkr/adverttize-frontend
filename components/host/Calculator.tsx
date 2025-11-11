"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Monitor,
  Users,
  Percent,
  Gauge,
  Gift,
  TrendingUp
} from "lucide-react";

const businessTypes = [
  {
    label: "Retail Store",
    rate: 6,
    helper: "Commission rate: 6.0% • Estimated footfall: ~200 people/day"
  },
  {
    label: "Coffee Shop",
    rate: 6.5,
    helper: "Commission rate: 6.5% • Estimated footfall: ~240 people/day"
  },
  {
    label: "Gym",
    rate: 7,
    helper: "Commission rate: 7.0% • Estimated footfall: ~320 people/day"
  },
  {
    label: "Mall Kiosk",
    rate: 5.5,
    helper: "Commission rate: 5.5% • Estimated footfall: ~180 people/day"
  }
];

const screenSizes = [
  { label: "Small", size: '32–43"', factor: 45 },
  { label: "Medium", size: '44–55"', factor: 60 },
  { label: "Large", size: '56"+', factor: 80 }
];

function calculateCommission(footfall: number, factor: number, rate: number) {
  const base = footfall * factor;
  return Math.round((base * rate) / 1000); // intentionally small to keep numbers manageable
}

export function Calculator() {
  const [business, setBusiness] = useState(businessTypes[0]);
  const [screen, setScreen] = useState(screenSizes[1]);
  const [footfall, setFootfall] = useState(200);

  const { commission, total } = useMemo(() => {
    const commissionValue = calculateCommission(footfall, screen.factor, business.rate);
    const totalValue = commissionValue + 3000;
    return { commission: commissionValue, total: totalValue };
  }, [business, screen, footfall]);

  const monthlyViewers = footfall * 30;

  return (
    <section
      id="calculator"
      data-component="earnings-calculator"
      className="relative isolate overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_70%)] blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
            Calculate your earnings
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            See how much you can earn
          </h2>
          <p className="text-white/70">
            Use our 5–7.5% commission model plus ₹3000 free advertising monthly.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur" data-animate>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <Building2 className="h-4 w-4 text-purple-400" /> Business Type
              </label>
              <div className="grid gap-3">
                {businessTypes.map((type) => {
                  const active = type.label === business.label;
                  return (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setBusiness(type)}
                      data-selected={active}
                      className={`flex flex-col rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? "border-purple-400 bg-purple-400/10 text-white"
                          : "border-white/15 bg-black/30 text-white/80 hover:border-white/30"
                      }`}
                    >
                      <span className="text-sm font-semibold">{type.label}</span>
                      <span className="text-xs text-white/60">{type.helper}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <Monitor className="h-4 w-4 text-purple-400" /> Screen Size
              </label>
              <div className="grid gap-3 sm:grid-cols-3">
                {screenSizes.map((option) => {
                  const active = option.label === screen.label;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setScreen(option)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? "border-purple-400 bg-purple-400/10 text-white"
                          : "border-white/15 bg-black/30 text-white/80 hover:border-white/30"
                      }`}
                    >
                      <p className="text-sm font-semibold">{option.label}</p>
                      <p className="text-xs text-white/60">{option.size}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-purple-400" />
                  Daily Footfall
                </span>
                <span>{footfall} people/day</span>
              </label>
              <input
                type="range"
                min={0}
                max={2000}
                step={10}
                value={footfall}
                onChange={(event) => setFootfall(Number(event.target.value))}
                className="w-full accent-purple-400"
              />
              <input
                type="number"
                min={0}
                max={5000}
                value={footfall}
                onChange={(event) => setFootfall(Number(event.target.value) || 0)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-purple-400 focus:outline-none"
              />
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>0</span>
                <span>2000+</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
                <span>Commission rate: {business.rate.toFixed(1)}% • Estimated footfall: ~{footfall} people/day</span>
                <button
                  type="button"
                  onClick={() => setFootfall(200)}
                  className="text-purple-400 transition hover:text-purple-300"
                >
                  Reset to estimate
                </button>
              </div>
            </div>
          </div>

          <div className="fade-up space-y-6 rounded-[32px] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_30px_90px_rgba(8,8,8,0.6)]" data-animate>
            <div className="space-y-2">
              <p className="text-sm text-white/60">Your estimated earnings</p>
              <p className="text-4xl font-semibold text-white">₹{total.toLocaleString()}</p>
              <p className="text-sm text-white/60">per month</p>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full bg-purple-400"
                  style={{ width: `${Math.min((total / 15000) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Percent className="h-4 w-4 text-purple-400" /> Commission ({business.rate.toFixed(1)}%)
                </span>
                <span className="font-semibold text-white">₹{commission.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Gift className="h-4 w-4 text-purple-400" /> Free Ad Value
                </span>
                <span className="font-semibold text-white">₹3,000</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-400" /> Total Monthly Earnings
                </span>
                <span className="font-semibold text-purple-200">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
                  <Users className="h-3.5 w-3.5 text-purple-300" /> Monthly Viewers: {monthlyViewers.toLocaleString()}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
                  <Percent className="h-3.5 w-3.5 text-purple-300" /> Commission Rate: {business.rate.toFixed(1)}%
                </span>
              </div>
            </div>
            <button className="w-full rounded-full bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600">
              Apply Now to Start Earning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

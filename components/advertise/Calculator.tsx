"use client";

import { useEffect, useMemo, useState } from "react";
import { advertiseCalculator } from "@/lib/contentAdvertise";
import { ArrowRight, Info, RefreshCcw } from "lucide-react";

const IMPRESSION_FACTOR = 0.12;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value
  );
}

export function AdvertiseCalculator() {
  const { sliderBudget, sliderDuration, screenOptions, defaults } = advertiseCalculator;
  const [budget, setBudget] = useState(defaults.budget);
  const [duration, setDuration] = useState(defaults.duration);
  const [screens, setScreens] = useState(defaults.screens);
  const [isCalculating, setIsCalculating] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setIsCalculating(true);
    const timer = window.setTimeout(() => setIsCalculating(false), 200);
    return () => window.clearTimeout(timer);
  }, [budget, duration, screens]);

  const { impressions, cpm, engagements, roi } = useMemo(() => {
    const imp = Math.round(budget * screens * duration * IMPRESSION_FACTOR);
    const cpmValue = imp ? budget / (imp / 1000) : 0;
    const engage = Math.round(imp * 0.15);
    const roiValue = (4.2 + screens * 0.02 + duration * 0.01).toFixed(1);
    return {
      impressions: imp,
      cpm: cpmValue,
      engagements: engage,
      roi: roiValue
    };
  }, [budget, screens, duration]);

  const reset = () => {
    setBudget(defaults.budget);
    setDuration(defaults.duration);
    setScreens(defaults.screens);
  };

  const handleStartCampaign = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 1500);
  };

  return (
    <section id="calculator" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Campaign Calculator</p>
          <h2 className="text-3xl font-semibold text-white">Plan Your Perfect Campaign</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Campaign Settings</p>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#93c5fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd]"
              >
                <RefreshCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">
                  Budget
                  <span className="ml-2 inline-flex items-center text-xs text-white/60">
                    <Info className="mr-1 h-3 w-3" />
                    ₹1K – ₹1L
                  </span>
                </label>
                <input
                  type="range"
                  min={sliderBudget.min}
                  max={sliderBudget.max}
                  step={sliderBudget.step}
                  value={budget}
                  onChange={(event) => setBudget(Number(event.target.value))}
                  className="mt-3 w-full accent-[#2563EB]"
                />
                <input
                  type="number"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-[#2563EB] focus:outline-none"
                  value={budget}
                  min={sliderBudget.min}
                  max={sliderBudget.max}
                  step={sliderBudget.step}
                  onChange={(event) => setBudget(Math.max(sliderBudget.min, Math.min(sliderBudget.max, Number(event.target.value))))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Screens
                  <span className="ml-2 inline-flex items-center text-xs text-white/60">
                    <Info className="mr-1 h-3 w-3" />
                    Choose coverage
                  </span>
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {screenOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setScreens(option)}
                      className={`rounded-full border px-3 py-1 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                        screens === option ? "border-[#2563EB] bg-[#2563EB] text-white" : "border-white/20 text-white/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Duration
                  <span className="ml-2 inline-flex items-center text-xs text-white/60">
                    <Info className="mr-1 h-3 w-3" />
                    1–30 days
                  </span>
                </label>
                <input
                  type="range"
                  min={sliderDuration.min}
                  max={sliderDuration.max}
                  step={sliderDuration.step}
                  value={duration}
                  onChange={(event) => setDuration(Number(event.target.value))}
                  className="mt-3 w-full accent-[#2563EB]"
                />
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white">
                  <input
                    type="number"
                    className="w-full bg-transparent focus:outline-none"
                    value={duration}
                    min={sliderDuration.min}
                    max={sliderDuration.max}
                    onChange={(event) => setDuration(Math.max(sliderDuration.min, Math.min(sliderDuration.max, Number(event.target.value))))}
                  />
                  <span className="text-xs text-white/60">days</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg space-y-4 backdrop-blur">
            <p className="text-sm font-semibold text-white">Estimated Results</p>
            {isCalculating ? (
              <div className="space-y-3">
                <div className="h-5 w-32 rounded bg-white/10" />
                <div className="h-16 rounded-xl bg-white/10" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-14 rounded-xl bg-white/10" />
                  <div className="h-14 rounded-xl bg-white/10" />
                </div>
              </div>
            ) : (
              <>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/70">Impressions</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{impressions.toLocaleString()}</p>
                  <p className="text-sm text-white/60">Cost per 1000 • {formatCurrency(cpm)}</p>
                  <div className="mt-4 h-3 w-full rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#38bdf8]" style={{ width: `${Math.min(Number(roi) * 20, 100)}%` }} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Engagements", value: engagements.toLocaleString() },
                    { label: "Expected ROI", value: `${roi}x` }
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/60">{item.label}</p>
                      <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            <button
              type="button"
              onClick={handleStartCampaign}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              Start Campaign
              <ArrowRight className="h-4 w-4" />
            </button>
            {toast && <p className="text-center text-xs font-semibold text-[#93c5fd]">We’ll reach out shortly.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { calculatorSettings } from "@/lib/contentInvest";
import { Info, RefreshCcw, ArrowRight } from "lucide-react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value
  );
}

export function InvestCalculator() {
  const { slider, screenOptions, plans } = calculatorSettings;
  const [amount, setAmount] = useState(slider.min);
  const [screens, setScreens] = useState(5);
  const [plan, setPlan] = useState(plans[1]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setIsCalculating(true);
    const timeout = window.setTimeout(() => setIsCalculating(false), 200);
    return () => window.clearTimeout(timeout);
  }, [amount, screens, plan]);

  const { annualReturns, monthlyIncome, roiPercent } = useMemo(() => {
    const uplift = Math.min(2, (screens - 1) * 0.2);
    const roi = plan.roi + uplift;
    const annual = Math.round(amount * (roi / 100));
    return {
      annualReturns: annual,
      monthlyIncome: Math.round(annual / 12),
      roiPercent: roi.toFixed(1)
    };
  }, [amount, screens, plan]);

  const handleStartInvesting = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 1500);
  };

  const reset = () => {
    setAmount(slider.min);
    setScreens(5);
    setPlan(plans[1]);
  };

  return (
    <section id="calculator" className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="reveal space-y-3 text-center lg:text-left" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#86EFAC]">Investment Calculator</p>
          <h2 className="text-3xl font-semibold text-white">Calculate Your Potential Returns</h2>
          <p className="text-sm text-white/70">
            Use our assumptions to model the yearly returns on your investment.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur" data-animate>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Investment Settings</p>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#86EFAC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86EFAC]"
              >
                <RefreshCcw className="h-3.5 w-3.5" />
                Reset to defaults
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <label className="block text-sm font-medium text-white">
                Investment Amount
                <span className="ml-2 inline-flex items-center text-xs text-white/60">
                  <Info className="mr-1 h-3 w-3" /> ₹50K – ₹50L
                </span>
              </label>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="w-full accent-[#22C55E]"
                aria-label="investment amount slider"
              />
              <input
                type="number"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-[#22C55E] focus:outline-none"
                value={amount}
                min={slider.min}
                max={slider.max}
                step={slider.step}
                onChange={(event) => setAmount(Math.max(slider.min, Math.min(slider.max, Number(event.target.value))))}
              />

              <div>
                <p className="text-sm font-medium text-white">Screens</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {screenOptions.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setScreens(value)}
                      className={`rounded-full border px-3 py-1 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] ${
                        screens === value
                          ? "border-[#22C55E] bg-[#22C55E] text-neutral-900"
                          : "border-white/20 text-white/80"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-white">Investment Plan</p>
                <div className="flex flex-wrap gap-3">
                  {plans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlan(p)}
                      className={`rounded-2xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] ${
                        plan.id === p.id
                          ? "border-[#22C55E] bg-[#22C55E]/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">{p.label}</p>
                      <p className="text-xs text-white/60">{p.roi}% ROI</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg space-y-4 backdrop-blur" data-animate>
            <p className="text-sm font-semibold text-white">Estimated Returns</p>
            {isCalculating ? (
              <div className="space-y-3">
                <div className="h-5 w-1/3 rounded bg-white/10" />
                <div className="h-16 rounded-xl bg-white/10" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="h-14 rounded-xl bg-white/10" />
                  <div className="h-14 rounded-xl bg-white/10" />
                </div>
              </div>
            ) : (
              <>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/70">Annual Returns</p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {formatCurrency(annualReturns)}
                  </p>
                  <p className="text-sm text-white/60">ROI Percentage {roiPercent}%</p>
                  <div className="mt-3 h-3 w-full rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#22C55E] to-[#86EFAC]"
                      style={{ width: `${Math.min(Number(roiPercent), 100)}%` }}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Monthly Income", value: formatCurrency(monthlyIncome) },
                    { label: "Screens", value: screens.toString() }
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
              onClick={handleStartInvesting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E]"
            >
              Start Investing
              <ArrowRight className="h-4 w-4" />
            </button>
            {toast && (
              <p className="text-center text-xs font-semibold text-[#86EFAC]">We’ll reach out shortly.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { IconKey } from "./icons";

export const investHero = {
  eyebrow: "Smart Investing",
  title: "Invest in Digital Real Estate",
  description:
    "Own TV screens in high-traffic locations and earn passive income through advertising revenue sharing. Tangible assets with 18-25% annual returns.",
  primaryCta: "Start Investing",
  secondaryCta: "Download Prospectus",
  metrics: [
    {
      label: "Active Investors",
      value: "2,000+",
      icon: "users" as IconKey,
      aria: "Active investors two thousand plus"
    },
    {
      label: "Avg. Annual ROI",
      value: "22.5%",
      icon: "percent" as IconKey,
      aria: "Average annual ROI twenty two point five percent"
    }
  ]
};

export const livePortfolio = {
  title: "Live Investment",
  name: "Premium Mall Portfolio",
  description: "15 screens across three premium shopping malls.",
  stats: [
    {
      label: "Monthly ROI",
      value: "₹45,000",
      icon: "trendingUp" as IconKey
    },
    {
      label: "Total Returns",
      value: "+24.5%",
      icon: "lineChart" as IconKey
    },
    {
      label: "Investment",
      value: "₹8.5L",
      icon: "wallet" as IconKey
    }
  ]
};

export const investBenefits = [
  {
    title: "High ROI Potential",
    description: "Earn 18-25% annual returns through advertising revenue sharing",
    icon: "rocket" as IconKey
  },
  {
    title: "Asset Ownership",
    description: "You own the TV screens - tangible assets with revenue potential",
    icon: "monitor" as IconKey
  },
  {
    title: "Diversified Portfolio",
    description: "Spread risk across multiple locations and advertising campaigns",
    icon: "layers" as IconKey
  },
  {
    title: "Passive Income",
    description: "Earn 24/7 without active management. We handle everything",
    icon: "passive" as IconKey
  },
  {
    title: "Proven Business Model",
    description: "Join 2,000+ investors already earning consistent returns",
    icon: "badge" as IconKey
  },
  {
    title: "Scalable Investment",
    description: "Start small and scale up as you see returns",
    icon: "expand" as IconKey
  }
] as const;

export const calculatorSettings = {
  slider: {
    min: 50000,
    max: 5000000,
    step: 50000
  },
  screenOptions: [1, 3, 5, 10, 25],
  plans: [
    { id: "starter", label: "Starter", roi: 18 },
    { id: "premium", label: "Premium", roi: 21 },
    { id: "enterprise", label: "Enterprise", roi: 25 }
  ]
} as const;

export const revenueShares = [
  {
    label: "60% Ad Revenue Share",
    description: "Direct share from advertising revenue",
    percent: 60,
    icon: "chart" as IconKey
  },
  {
    label: "15% Performance Bonus",
    description: "Based on screen performance and location",
    percent: 15,
    icon: "sparkles" as IconKey
  },
  {
    label: "20% Host Commission",
    description: "Shared with location hosts",
    percent: 20,
    icon: "handshake" as IconKey
  },
  {
    label: "5% Platform Fee",
    description: "Covers maintenance and operations",
    percent: 5,
    icon: "cog" as IconKey
  }
] as const;

export const testimonials = [
  {
    name: "Anil Mehta",
    invested: "₹2,00,000",
    returns: "₹48,000",
    quote: "My investment in 25 screens delivers consistent payouts every quarter.",
    period: "12 months",
    badge: "Verified Investor"
  },
  {
    name: "Priya Reddy",
    invested: "₹5,00,000",
    returns: "₹1,35,000",
    quote: "As a working professional, passive income helps me diversify beyond equity.",
    period: "18 months",
    badge: "Verified Investor"
  },
  {
    name: "Rajesh Kumar & Partners",
    invested: "₹15,00,000",
    returns: "₹3,75,000",
    quote: "We pooled resources to own premium locations. Returns beat our commercial rentals.",
    period: "24 months",
    badge: "Verified Investor"
  }
] as const;

export const processSteps = [
  {
    title: "Choose Investment",
    description: "Select your investment plan and number of screens",
    time: "Instant",
    icon: "listChecks" as IconKey
  },
  {
    title: "Complete KYC",
    description: "Quick verification process for security",
    time: "24 hours",
    icon: "id" as IconKey
  },
  {
    title: "Fund Transfer",
    description: "Secure payment through banking channels",
    time: "1–2 days",
    icon: "banknote" as IconKey
  },
  {
    title: "Screen Deployment",
    description: "We install screens in premium locations",
    time: "1 week",
    icon: "monitor" as IconKey
  },
  {
    title: "Start Earning",
    description: "Receive your first revenue share payment",
    time: "30 days",
    icon: "wallet2" as IconKey
  }
] as const;

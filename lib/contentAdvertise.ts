import type { IconKey } from "@/lib/icons";

export const advertiseHero = {
  eyebrow: "Advertising made smarter",
  title: "Advertisement made Powerful",
  description:
    "A powerful digital signage platform to grow your brand visibility across thousands of screens nationwide with AI-powered targeting and real-time analytics.",
  primaryCta: "Explore inventory",
  secondaryCta: "Watch product tour",
  metrics: [
    {
      label: "Screens on platform",
      value: "45,000+",
      icon: "monitorSmartphone" as IconKey,
      aria: "Forty five thousand plus screens on the platform"
    },
    {
      label: "Avg. ROI uplift",
      value: "4.2x",
      icon: "barChart" as IconKey,
      aria: "Average ROI uplift four point two X"
    }
  ]
};

export const advertiseCampaign = {
  title: "Live campaign",
  name: "Uptown Retail Launch",
  description: "38 DOOH faces across three high-street clusters.",
  stats: [
    { label: "Reach", value: "3.2M viewers", icon: "users" as IconKey },
    { label: "Footfall lift", value: "+26%", icon: "trendingUp" as IconKey },
    { label: "Spend", value: "₹4.6L", icon: "wallet" as IconKey }
  ]
};

export const advertiseBenefits = [
  {
    title: "AI-Powered Analytics",
    description: "Real-time audience demographics, age, gender, and engagement metrics through smart cameras",
    icon: "cpu" as IconKey
  },
  {
    title: "Precision Targeting",
    description: "Select screens based on location, demographics, foot traffic, and audience behavior",
    icon: "crosshair" as IconKey
  },
  {
    title: "Cost-Effective",
    description: "Start from just ₹100 per ad per screen per day. No long-term commitments",
    icon: "rupee" as IconKey
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor campaign performance, view analytics, and optimize in real-time",
    icon: "gauge" as IconKey
  },
  {
    title: "Premium Locations",
    description: "Access high-traffic screens in malls, offices, cafes, and residential complexes",
    icon: "mapPin" as IconKey
  },
  {
    title: "Performance Insights",
    description: "Detailed reports on reach, engagement, and conversion metrics",
    icon: "pieChart" as IconKey
  }
] as const;

export const advertiseCalculator = {
  sliderBudget: {
    min: 1000,
    max: 100000,
    step: 1000
  },
  sliderDuration: {
    min: 1,
    max: 30,
    step: 1
  },
  screenOptions: [1, 5, 10, 25, 50],
  defaults: {
    budget: 5000,
    duration: 7,
    screens: 10
  }
} as const;

export const advertisePricing = [
  {
    name: "Starter",
    price: "₹100",
    cadence: "per ad per screen per day",
    icon: "sparkles" as IconKey,
    features: ["1–10 Screens", "Basic Analytics", "Standard Locations", "7-Day Campaigns", "Email Support"],
    badge: null
  },
  {
    name: "Growth",
    price: "₹90",
    cadence: "per ad per screen per day",
    icon: "trendingUp" as IconKey,
    features: [
      "11–50 Screens",
      "Advanced Analytics",
      "Premium Locations",
      "30-Day Campaigns",
      "Priority Support",
      "A/B Testing"
    ],
    badge: "MOST POPULAR"
  },
  {
    name: "Enterprise",
    price: "₹75",
    cadence: "per ad per screen per day",
    icon: "crown" as IconKey,
    features: [
      "50+ Screens",
      "Full AI Analytics",
      "Prime Locations",
      "Custom Campaigns",
      "Dedicated Manager",
      "Real-time API Access"
    ],
    badge: null
  }
] as const;

export const advertiseStories = [
  {
    emoji: "☕",
    brand: "Urban Cafe Chain",
    goal: "New Store Launch",
    quote: "The AI analytics helped us target working professionals during peak hours. We filled the store on day one.",
    details: "14 days • 25 screens — 45% increase in footfall"
  },
  {
    emoji: "🚀",
    brand: "Tech Startup",
    goal: "App Download Drive",
    quote: "Precision targeting on young professionals gave us qualified installs at a fraction of social media costs.",
    details: "30 days • 50 screens — 2,500+ downloads"
  },
  {
    emoji: "👗",
    brand: "Fashion Brand",
    goal: "Seasonal Collection",
    quote: "The gender and age analytics helped us promote the right looks in the right neighborhoods.",
    details: "21 days • 35 screens — 32% sales uplift"
  }
] as const;

export const advertiseCta = {
  title: "Ready to Get Started?",
  description:
    "Launch Your First AI-Powered Campaign. Join thousands of brands using Adverttize to reach their perfect audience. Start with just ₹100 per day and scale as you grow.",
  bullets: [
    { icon: "shieldCheck" as IconKey, label: "No long-term commitments" },
    { icon: "gauge" as IconKey, label: "Real-time optimization" },
    { icon: "mapPin" as IconKey, label: "Premium locations" }
  ]
};

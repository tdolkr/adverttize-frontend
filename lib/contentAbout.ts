import type { IconKey } from "@/lib/icons";

export const aboutHero = {
  eyebrow: "Our Story",
  title: "About Adverttize",
  description:
    "Revolutionizing digital advertising through innovation, technology, and a passion for delivering measurable results.",
  primaryCta: "Get In Touch",
  secondaryCta: "Start Advertising",
  metrics: [
    { label: "Founded", value: "2020", aria: "Founded twenty twenty" },
    { label: "Screens Nationwide", value: "45K+", aria: "Forty five thousand plus screens nationwide" }
  ]
};

export const missionVision = [
  {
    title: "Our Mission",
    subtitle: "Driving Advertising Innovation",
    body: [
      "To democratize access to powerful digital advertising by making it simple, affordable, and effective for businesses of all sizes. We believe every brand deserves the opportunity to shine.",
      "Through cutting-edge technology and data-driven insights, we're transforming how businesses connect with their audiences in the digital age."
    ],
    icon: "target" as IconKey
  },
  {
    title: "Our Vision",
    subtitle: "The Future of Advertising",
    body: [
      "We envision a future where digital advertising is accessible to all, where businesses can effortlessly reach their target audiences through intelligent, scalable, and measurable campaigns that drive real growth."
    ],
    icon: "rocket" as IconKey
  }
] as const;

export const impactStats = [
  { icon: "monitorSmartphone" as IconKey, value: "45K+", label: "Screens Nationwide" },
  { icon: "users" as IconKey, value: "650+", label: "Happy Clients" },
  { icon: "smile" as IconKey, value: "98%", label: "Client Satisfaction" },
  { icon: "mapPin" as IconKey, value: "120+", label: "Markets Covered" }
] as const;

export const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge advertising solutions.",
    icon: "lightbulb" as IconKey
  },
  {
    title: "Trust",
    description: "Building long-term relationships based on transparency and reliability.",
    icon: "handshake" as IconKey
  },
  {
    title: "Excellence",
    description: "Committed to delivering exceptional results for every client.",
    icon: "award" as IconKey
  },
  {
    title: "Passion",
    description: "Driven by our love for transforming brand visibility.",
    icon: "heart" as IconKey
  }
] as const;

export const journey = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize digital signage.",
    icon: "flag" as IconKey,
    emoji: "🏢"
  },
  {
    year: "2021",
    title: "First 100 Clients",
    description: "Reached milestone of serving 100+ businesses.",
    icon: "usersRound" as IconKey,
    emoji: "🎯"
  },
  {
    year: "2022",
    title: "Platform Launch",
    description: "Launched our proprietary advertising platform.",
    icon: "monitorPlay" as IconKey,
    emoji: "🚀"
  },
  {
    year: "2023",
    title: "National Expansion",
    description: "Expanded to 50+ cities across the country.",
    icon: "globe" as IconKey,
    emoji: "🌆"
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Awarded Best Advertising Platform 2024.",
    icon: "trophy" as IconKey,
    emoji: "🏆"
  }
] as const;

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former advertising executive with 15+ years in digital marketing."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Tech visionary with expertise in scalable platform architecture."
  },
  {
    name: "Priya Patel",
    role: "Head of Operations",
    bio: "Operations specialist focused on delivering seamless client experiences."
  },
  {
    name: "David Kim",
    role: "Product Lead",
    bio: "Product strategist passionate about user-centric design."
  }
] as const;

export const aboutCta = {
  title: "Ready to Grow With Us?",
  description: "Join thousands of businesses that trust Adverttize to transform their digital advertising.",
  buttons: {
    primary: "Contact Us",
    secondary: "Start Advertising"
  },
  bullets: [
    { icon: "handshake" as IconKey, label: "Trusted by 650+ clients" },
    { icon: "rocket" as IconKey, label: "Driving measurable growth" },
    { icon: "gauge" as IconKey, label: "Transparent results" }
  ]
};

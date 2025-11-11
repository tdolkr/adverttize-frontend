import type { IconKey } from "@/lib/icons";

export const contactOptions = [
  {
    title: "Email Us",
    value: "contact@adverttize.com",
    description: "Send us an email anytime.",
    icon: "mail" as IconKey
  },
  {
    title: "Call Us",
    value: "+91 72004 46204",
    description: "Mon–Fri from 9am to 6pm.",
    icon: "phone" as IconKey
  },
  {
    title: "Address",
    value: "Spaces Inspire Hub, Andheri West, Mumbai, Maharashtra.",
    description: "Visit our registered office.",
    icon: "mapPin" as IconKey
  },
  {
    title: "Response Time",
    value: "Within 24 hours.",
    description: "We’ll get back to you quickly.",
    icon: "timer" as IconKey
  }
] as const;

export const departments = [
  {
    title: "Sales",
    description: "Get pricing and product information",
    email: "contact@adverttize.com",
    icon: "trendingUp" as IconKey
  },
  {
    title: "Support",
    description: "Technical help and account support",
    email: "contact@adverttize.com",
    icon: "headphones" as IconKey
  },
  {
    title: "Partnerships",
    description: "Business development opportunities",
    email: "contact@adverttize.com",
    icon: "handshake" as IconKey
  },
  {
    title: "Careers",
    description: "Join our amazing team",
    email: "contact@adverttize.com",
    icon: "briefcase" as IconKey
  }
] as const;

export const reasons = [
  { icon: "headphones" as IconKey, label: "24/7 Customer Support" },
  { icon: "sparkles" as IconKey, label: "Expert Advertising Solutions" },
  { icon: "lightbulb" as IconKey, label: "Custom Campaign Strategies" },
  { icon: "trendingUp" as IconKey, label: "Proven Results & ROI" }
] as const;

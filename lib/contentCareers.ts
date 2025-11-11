import type { IconKey } from "@/lib/icons";

export const careersHero = {
  eyebrow: "Join Our Team",
  title: "Build Your Career",
  description:
    "Join Adverttize Technologies in revolutionizing digital advertising. Work with cutting-edge technology, solve challenging problems, and grow your career.",
  primaryCta: "View Open Positions",
  secondaryCta: "Learn About Culture"
};

export const cultureCards = [
  {
    title: "Move Fast",
    description: "We ship quickly and iterate based on real user feedback.",
    icon: "zap" as IconKey
  },
  {
    title: "Collaborate Openly",
    description: "Transparent communication and cross-functional teamwork.",
    icon: "users" as IconKey
  },
  {
    title: "Own Your Impact",
    description: "Take ownership and see your work make a difference.",
    icon: "target" as IconKey
  },
  {
    title: "Grow Together",
    description: "We invest in each other's professional and personal growth.",
    icon: "heartHandshake" as IconKey
  }
] as const;

export const careersBenefits = [
  {
    title: "Competitive Salary",
    description:
      "Industry-leading compensation with regular performance reviews and bonuses.",
    icon: "badgeDollar" as IconKey
  },
  {
    title: "Remote Flexibility",
    description: "Work from anywhere with our hybrid remote-first culture and flexible hours.",
    icon: "laptop" as IconKey
  },
  {
    title: "Learning Budget",
    description:
      "₹1,50,000 annual budget for courses, conferences, and professional development.",
    icon: "bookOpenCheck" as IconKey
  },
  {
    title: "Career Growth",
    description: "Clear promotion paths and mentorship programs to accelerate your career.",
    icon: "trendingUp" as IconKey
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, vision, and mental health coverage.",
    icon: "heartPulse" as IconKey
  },
  {
    title: "Unlimited PTO",
    description: "Take the time you need to recharge with our unlimited vacation policy.",
    icon: "sun" as IconKey
  }
] as const;

export const careerTestimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Frontend Engineer",
    tenure: "2 years",
    quote:
      "The culture of ownership and trust here is incredible. I've grown more in the past two years than in my entire previous career.",
    avatar: "/avatars/priya.png"
  },
  {
    name: "Rahul Verma",
    role: "Product Manager",
    tenure: "1.5 years",
    quote:
      "The pace of innovation is exciting, and leadership truly values diverse perspectives. Every voice is heard here.",
    avatar: "/avatars/rahul.png"
  },
  {
    name: "Anjali Patel",
    role: "Design Lead",
    tenure: "3 years",
    quote:
      "I get to work on challenging problems with brilliant people. The work-life balance and benefits are unmatched.",
    avatar: "/avatars/anjali.png"
  }
] as const;

export const hiringSteps = [
  {
    title: "Application Review",
    description: "Our team reviews your application and portfolio.",
    duration: "1–3 days"
  },
  {
    title: "Initial Screening",
    description: "Quick chat with our recruiter about your experience.",
    duration: "30 min"
  },
  {
    title: "Technical Interview",
    description: "Skills assessment with the team you'll be working with.",
    duration: "60 min"
  },
  {
    title: "Team Interview",
    description: "Meet potential colleagues and discuss team fit.",
    duration: "45 min"
  },
  {
    title: "Offer",
    description: "We make you an offer and welcome you to the team.",
    duration: "1–2 days"
  }
] as const;

export const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Mumbai",
    experience: "5+ years",
    description:
      "Build responsive, performant user interfaces using React, Next.js, and modern web technologies.",
    type: "Engineering",
    mode: "Remote"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Hybrid / Mumbai",
    experience: "3+ years",
    description: "Design intuitive experiences across web and mobile with a focus on systems thinking.",
    type: "Design",
    mode: "Hybrid"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    experience: "4+ years",
    description: "Scale infrastructure, automate deployments, and maintain observability pipelines.",
    type: "Engineering",
    mode: "Remote"
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Hybrid / Mumbai",
    experience: "2+ years",
    description: "Own the full sales cycle with agencies and enterprise advertisers.",
    type: "Sales",
    mode: "Hybrid"
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote",
    experience: "3+ years",
    description: "Transform campaign data into insights that drive strategy and ROI.",
    type: "Analytics",
    mode: "Remote"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    experience: "2+ years",
    description: "Partner with clients to ensure successful onboarding and long-term growth.",
    type: "Customer Success",
    mode: "Remote"
  }
] as const;

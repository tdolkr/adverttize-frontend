## Getting Started
```bash
npm install
npm run dev
npm run build
npm run lint
```

then go to `http://localhost:3000` to preview the site.

## Project Structure
```
app/
├─ layout.tsx          # Root document wrapper + metadata
├─ globals.css         # Tailwind base + custom animations/utilities
├─ page.tsx            # Home / marketing landing
├─ login/page.tsx      # Auth entry experience
├─ host/page.tsx       # Host acquisition page
├─ invest/page.tsx     # Investor experience
├─ advertise/page.tsx  # Advertiser funnel
├─ about/page.tsx      # Company story + timeline
├─ careers/page.tsx    # Hiring portal
└─ contact/page.tsx    # Contact flow

components/
├─ Logo.tsx
├─ AuroraBackground.tsx
├─ host/…              # Reusable host widgets (Header, CTA, etc.)
├─ invest/…            # Invest-specific sections
├─ advertise/…         # Advertise sections/components
├─ about/…             # About page building blocks
├─ careers/…           # Careers page components
└─ contact/…           # Contact page UI pieces

lib/
├─ contentAbout.ts     # Structured copy + data for About page
├─ contentAdvertise.ts
├─ contentCareers.ts
├─ contentContact.ts
├─ contentInvest.ts
└─ icons.ts            # Centralized Lucide icon map helper

public/
├─ logo.png
├─ kiosk-display.svg
└─ brand-*.svg         # Logos used in carousels/partner sections
```

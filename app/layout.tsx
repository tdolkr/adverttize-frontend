import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Adverttize — Advertisement made simple",
  description:
    "Premium campaign management with smart targeting, real-time analytics, and ROI tracking."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}

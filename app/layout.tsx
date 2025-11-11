import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Adverttize",
  description:
    "Premium campaign management with smart targeting, real-time analytics, and ROI tracking."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-neutral-950 text-neutral-100">
        <div className="noise-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}

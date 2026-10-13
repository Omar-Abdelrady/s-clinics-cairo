import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S Clinics | عيادة أسنان في الشيخ زايد",
  description:
    "نموذج تعريفي لـ S Clinics في الشيخ زايد — رعاية أسنان متخصصة وحجز مباشر عبر واتساب.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

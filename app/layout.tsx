import type { Metadata } from "next";
import {
  Alexandria,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const display = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-alexandria",
  display: "swap",
});

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
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
      <body className={`${display.variable} ${body.variable} ${editorial.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

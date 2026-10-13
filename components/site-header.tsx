"use client";

import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { contactLinks } from "@/data/clinic";

const navigation = [
  { href: "#services", label: "الخدمات" },
  { href: "#doctor", label: "الطبيب" },
  { href: "#results", label: "النتائج" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="S Clinics — الصفحة الرئيسية">
          <Image
            src="/images/clinic-logo.jpg"
            width={56}
            height={56}
            alt=""
            className="brand-logo"
            priority
          />
          <span className="brand-copy">
            <strong>S Clinics</strong>
            <small>El Sheikh Zayed</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-gold header-cta"
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} aria-hidden="true" />
          احجز موعدك
        </a>

        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="افتح قائمة التنقل">
            <Menu size={24} aria-hidden="true" />
          </summary>
          <nav aria-label="التنقل على الموبايل">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="mobile-menu-booking"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              احجز على واتساب
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

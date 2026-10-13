"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactLinks } from "@/data/clinic";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const navigation = [
  { href: "#services", label: "الخدمات" },
  { href: "#doctor", label: "الطبيب" },
  { href: "#results", label: "النتائج" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    const handleViewportChange = () => {
      if (window.innerWidth > 1100) setIsMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="S Clinics — الصفحة الرئيسية">
          <Image
            src={assetPath("/images/clinic-logo.jpg")}
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

        <div className={`mobile-menu${isMobileMenuOpen ? " is-open" : ""}`}>
          <button
            type="button"
            className="mobile-menu-trigger"
            aria-label={isMobileMenuOpen ? "اقفل قائمة التنقل" : "افتح قائمة التنقل"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
          <nav
            id="mobile-navigation-panel"
            className="mobile-menu-panel"
            aria-label="التنقل على الموبايل"
            aria-hidden={!isMobileMenuOpen}
          >
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-menu-booking"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
            >
              احجز على واتساب
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState, type PropsWithChildren } from "react";

export type HeroSlide = {
  readonly src: string;
  readonly alt: string;
  readonly eyebrow: string;
  readonly counter: string;
};

type HeroCarouselProps = PropsWithChildren<{
  slides: readonly HeroSlide[];
}>;

export function HeroCarousel({ slides, children }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (slides.length < 2 || isPaused) return;

    const reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  if (!activeSlide) return null;

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-label="صور العيادة"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="hero-media">
        <Image
          key={activeSlide.src}
          src={activeSlide.src}
          fill
          sizes="(max-width: 960px) 94vw, 52vw"
          alt={activeSlide.alt}
          className="hero-image"
          priority={activeIndex === 0}
        />
        <div className="hero-media-vignette" aria-hidden="true" />
        {children}
        <span className="hero-slide-eyebrow" aria-hidden="true">
          {activeSlide.eyebrow}
        </span>
        <span className="hero-image-index" aria-live="polite">
          {activeSlide.counter}
        </span>
        <div className="hero-carousel-controls" aria-label="اختيار صورة العيادة">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className="hero-carousel-dot"
              aria-label={`الصورة ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <span aria-hidden="true">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

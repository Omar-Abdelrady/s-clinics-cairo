"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  variant?: "rise" | "clip" | "fade";
}>;

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    `reveal-${variant}`,
    isVisible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const style: RevealStyle = { "--reveal-delay": `${delay}ms` };

  return (
    <div ref={elementRef} className={classes} style={style}>
      {children}
    </div>
  );
}

"use client";

import Lenis from "lenis";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

export function SmoothScroll({ children }: PropsWithChildren) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    let animationFrame = 0;

    const renderFrame = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(renderFrame);
    };

    animationFrame = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return children;
}

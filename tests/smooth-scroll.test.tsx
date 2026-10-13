import { act, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const lenisSpies = vi.hoisted(() => ({
  constructor: vi.fn(),
  destroy: vi.fn(),
  raf: vi.fn(),
}));

vi.mock("lenis", () => ({
  default: class LenisMock {
    constructor(options: unknown) {
      lenisSpies.constructor(options);
    }

    raf(time: number) {
      lenisSpies.raf(time);
    }

    destroy() {
      lenisSpies.destroy();
    }
  },
}));

function setReducedMotion(matches: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockReturnValue({
      matches,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  );
}

describe("SmoothScroll", () => {
  let frameCallback: FrameRequestCallback | undefined;

  beforeEach(() => {
    lenisSpies.constructor.mockClear();
    lenisSpies.destroy.mockClear();
    lenisSpies.raf.mockClear();
    frameCallback = undefined;

    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn((callback: FrameRequestCallback) => {
        frameCallback = callback;
        return 17;
      }),
    );
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("drives and disposes the smooth scroller", async () => {
    setReducedMotion(false);
    const { SmoothScroll } = await import("@/components/smooth-scroll");

    const { unmount } = render(
      <SmoothScroll>{"المحتوى" as ReactNode}</SmoothScroll>,
    );

    expect(screen.getByText("المحتوى")).toBeInTheDocument();
    expect(lenisSpies.constructor).toHaveBeenCalledWith({
      duration: 1.1,
      smoothWheel: true,
    });

    act(() => frameCallback?.(24));
    expect(lenisSpies.raf).toHaveBeenCalledWith(24);

    unmount();
    expect(lenisSpies.destroy).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(17);
  });

  it("does not initialize smooth scrolling for reduced motion", async () => {
    setReducedMotion(true);
    const { SmoothScroll } = await import("@/components/smooth-scroll");

    render(<SmoothScroll>محتوى ثابت</SmoothScroll>);

    expect(screen.getByText("محتوى ثابت")).toBeInTheDocument();
    expect(lenisSpies.constructor).not.toHaveBeenCalled();
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });
});

import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

describe("Reveal", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows content immediately when IntersectionObserver is unavailable", async () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { Reveal } = await import("@/components/reveal");

    render(<Reveal delay={120}>محتوى ظاهر</Reveal>);

    const content = screen.getByText("محتوى ظاهر");
    expect(content).toHaveClass("reveal", "is-visible");
    expect(content).toHaveStyle({ "--reveal-delay": "120ms" });
  });

  it("applies the requested reveal treatment without hiding accessible content", async () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { Reveal } = await import("@/components/reveal");

    render(<Reveal variant="clip">صورة افتتاحية</Reveal>);

    expect(screen.getByText("صورة افتتاحية")).toHaveClass(
      "reveal",
      "reveal-clip",
      "is-visible",
    );
  });
});

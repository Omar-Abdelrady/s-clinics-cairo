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
});

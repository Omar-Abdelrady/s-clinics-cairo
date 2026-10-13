import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Cairo: () => ({ variable: "font-cairo" }),
  Cormorant_Garamond: () => ({ variable: "font-cormorant" }),
  IBM_Plex_Sans_Arabic: () => ({ variable: "font-plex" }),
}));
vi.mock("@/components/smooth-scroll", () => ({
  SmoothScroll: ({ children }: { children: React.ReactNode }) => children,
}));

import RootLayout from "@/app/layout";

describe("RootLayout typography", () => {
  it("places font variables on the root element so CSS tokens can resolve", () => {
    render(
      <RootLayout>
        <p>Content</p>
      </RootLayout>,
    );

    expect(document.documentElement).toHaveClass("font-cairo");
    expect(document.documentElement).toHaveClass("font-plex");
    expect(document.body).not.toHaveClass("font-cairo");
  });
});

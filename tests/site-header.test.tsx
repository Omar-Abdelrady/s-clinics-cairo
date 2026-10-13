import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("opens and closes the mobile menu with an accessible state", () => {
    render(<SiteHeader />);

    const trigger = screen.getByRole("button", { name: "افتح قائمة التنقل" });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);

    expect(screen.getByRole("button", { name: "اقفل قائمة التنقل" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(
      screen.getByRole("navigation", { name: "التنقل على الموبايل" }),
    ).not.toHaveAttribute("hidden");
  });

  it("closes the mobile menu after choosing a section", () => {
    render(<SiteHeader />);

    fireEvent.click(screen.getByRole("button", { name: "افتح قائمة التنقل" }));

    fireEvent.click(
      screen.getByRole("navigation", { name: "التنقل على الموبايل" })
        .querySelector('a[href="#faq"]')!,
    );

    expect(screen.getByRole("button", { name: "افتح قائمة التنقل" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});

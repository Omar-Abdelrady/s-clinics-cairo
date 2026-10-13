import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("closes the mobile menu after choosing a section", () => {
    render(<SiteHeader />);

    const menu = screen
      .getByLabelText("افتح قائمة التنقل")
      .closest("details");

    expect(menu).not.toBeNull();
    menu?.setAttribute("open", "");

    fireEvent.click(
      screen.getByRole("navigation", { name: "التنقل على الموبايل" })
        .querySelector('a[href="#faq"]')!,
    );

    expect(menu).not.toHaveAttribute("open");
  });
});

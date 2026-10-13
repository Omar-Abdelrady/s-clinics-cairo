import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("S Clinics landing page", () => {
  it("presents the clinic offer and primary booking journey", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /ابتسامتك تبدأ برعاية أدق/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "التنقل الرئيسي" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /احجز/ })[0]).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me/201117443355"),
    );
  });

  it("shows the verified services and doctor profile", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: "خدماتنا" }),
    ).toBeInTheDocument();
    expect(screen.getByText("جراحة الفم والوجه والفكين")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "د. عمر محمد ثروت" }),
    ).toBeInTheDocument();
  });

  it("provides guidance, contact actions, and a footer", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: "أسئلة شائعة" }),
    ).toBeInTheDocument();
    expect(screen.getByText("إزاي أحجز موعد؟")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "افتح الموقع على الخريطة" }),
    ).toHaveAttribute("href", expect.stringContaining("google.com/maps"));
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

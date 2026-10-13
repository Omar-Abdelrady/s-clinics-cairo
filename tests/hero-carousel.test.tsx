import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroCarousel } from "@/components/hero-carousel";

const slides = [
  {
    src: "/images/ai/doctor-editorial-portrait.png",
    alt: "صورة تحريرية تخيلية للدكتور عمر داخل عيادة S Clinics",
    eyebrow: "رعاية بمعايير أدق",
    counter: "01 / 03",
  },
  {
    src: "/images/ai/doctor-clinic-portrait.png",
    alt: "صورة concept للدكتور عمر في أجواء عيادة عصرية",
    eyebrow: "خبرة واضحة",
    counter: "02 / 03",
  },
  {
    src: "/images/ai/clinic-interior-editorial.png",
    alt: "عيادة أسنان عصرية بإضاءة هادئة",
    eyebrow: "تجربة أهدى",
    counter: "03 / 03",
  },
] as const;

describe("HeroCarousel", () => {
  it("renders the first slide in an accessible image region", () => {
    render(<HeroCarousel slides={slides} />);

    expect(
      screen.getByRole("region", { name: "صور العيادة" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(slides[0].alt)).toBeInTheDocument();
    expect(screen.getByText(slides[0].counter)).toBeInTheDocument();
  });

  it("moves to the selected slide", () => {
    render(<HeroCarousel slides={slides} />);

    fireEvent.click(screen.getByRole("button", { name: "الصورة 2" }));

    expect(screen.getByAltText(slides[1].alt)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "الصورة 2" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });
});

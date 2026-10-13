import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FaqList } from "@/components/faq-list";

const items = [
  { question: "السؤال الأول؟", answer: "الإجابة الأولى." },
  { question: "السؤال الثاني؟", answer: "الإجابة الثانية." },
] as const;

describe("FaqList", () => {
  it("keeps one answer open and exposes its expanded state", () => {
    render(<FaqList items={items} />);

    const triggers = screen.getAllByRole("button");
    const firstAnswer = document.getElementById("faq-answer-0");
    const secondAnswer = document.getElementById("faq-answer-1");

    expect(triggers[0]).toHaveAttribute("aria-expanded", "true");
    expect(firstAnswer).toHaveAttribute("aria-hidden", "false");
    expect(secondAnswer).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(triggers[1]);

    expect(triggers[0]).toHaveAttribute("aria-expanded", "false");
    expect(triggers[1]).toHaveAttribute("aria-expanded", "true");
    expect(firstAnswer).toHaveAttribute("aria-hidden", "true");
    expect(secondAnswer).toHaveAttribute("aria-hidden", "false");
  });
});

"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import type { ClinicFaq } from "@/data/clinic";

export function FaqList({ items }: { items: readonly ClinicFaq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <article className="faq-item" key={item.question}>
          <button
            type="button"
            className="faq-summary"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() => setOpenIndex(index)}
          >
            <span>{item.question}</span>
            <Plus size={22} aria-hidden="true" />
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`faq-answer${openIndex === index ? " is-open" : ""}`}
            aria-hidden={openIndex !== index}
          >
            <div className="faq-answer-inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

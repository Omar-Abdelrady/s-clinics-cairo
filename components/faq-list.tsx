import { Plus } from "lucide-react";
import type { ClinicFaq } from "@/data/clinic";

export function FaqList({ items }: { items: readonly ClinicFaq[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary>
            <span>{item.question}</span>
            <Plus size={22} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

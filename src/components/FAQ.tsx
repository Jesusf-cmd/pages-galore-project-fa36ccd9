import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string;
}

export default function FAQ({ items, title, subtitle, eyebrow }: { items: FAQItemData[]; title?: string; subtitle?: string; eyebrow?: string }) {
  return (
    <div className="max-w-[820px]">
      {eyebrow && <div className="section-eye">{eyebrow}</div>}
      {title && <h2 className="mb-2" dangerouslySetInnerHTML={{ __html: title }} />}
      {subtitle && <p className="prose-muted mb-8">{subtitle}</p>}
      <div>
        {items.map((item, i) => (
          <FAQItem key={i} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ item, defaultOpen }: { item: FAQItemData; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border-none text-left cursor-pointer flex justify-between items-center py-5 gap-4"
        aria-expanded={open}
      >
        <span className="font-display text-base font-extrabold uppercase tracking-[0.03em] text-concrete leading-snug hover:text-orange transition-colors">
          {item.question}
        </span>
        <span
          className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-orange text-base transition-transform duration-200"
          style={{ border: "1px solid hsl(var(--concrete) / 0.15)", transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0" }}
      >
        <div className="pb-5 text-[0.88rem] text-muted-text leading-[1.8] font-light" dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </div>
  );
}

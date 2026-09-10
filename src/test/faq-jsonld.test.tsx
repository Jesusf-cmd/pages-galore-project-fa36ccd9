import { describe, expect, it, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import {
  FAQ_JSON_LD_SCRIPT_ID,
  faqJsonLdScriptTag,
  isFaqPageJsonLd,
  syncFaqJsonLd,
} from "@/lib/faqJsonLd";

const industrialFaq = [
  {
    question: "How quickly can industrial concrete be repaired?",
    answer: "Surface repairs using rapid-set polymer-modified concrete can return to service in 2–4 hours.",
  },
];
const drivewayFaq = [
  {
    question: "Can a cracked concrete driveway actually be repaired, or does it always need replacement?",
    answer: "Depends on the crack and what caused it.",
  },
];
const homeFaq = [
  { question: "Do you subcontract any of the work?", answer: "No — our concrete and sewer line work is 100% self-performed." },
];

function faqPages() {
  return [...document.querySelectorAll('script[type="application/ld+json"]')]
    .map((el) => {
      try {
        return { id: el.id, parent: el.parentElement?.tagName, json: JSON.parse(el.textContent || "") };
      } catch {
        return null;
      }
    })
    .filter((entry): entry is { id: string; parent: string | undefined; json: { "@type"?: string; mainEntity?: { name: string }[] } } => Boolean(entry))
    .filter((entry) => isFaqPageJsonLd(entry.json));
}

function seedPrerenderedHead(items: { question: string; answer: string }[]) {
  const gc = document.createElement("script");
  gc.type = "application/ld+json";
  gc.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "FDZ Construction LLC",
  });
  document.head.appendChild(gc);

  const faq = document.createElement("script");
  faq.type = "application/ld+json";
  faq.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  });
  document.head.appendChild(faq);
}

function Nav() {
  return (
    <nav>
      <Link to="/industrial-concrete-repair-oklahoma-city">Industrial</Link>
      <Link to="/driveway-repair-oklahoma-city">Driveway repair</Link>
      <Link to="/">Home</Link>
    </nav>
  );
}

function IndustrialPage() {
  useFaqJsonLd(industrialFaq);
  return (
    <>
      <Nav />
      <h1>Industrial Concrete Repair in Oklahoma City.</h1>
    </>
  );
}

function DrivewayPage() {
  useFaqJsonLd(drivewayFaq);
  return (
    <>
      <Nav />
      <h1>Concrete Driveway Repair in Oklahoma City.</h1>
    </>
  );
}

function HomePage() {
  useFaqJsonLd(homeFaq);
  return (
    <>
      <Nav />
      <h1>One Crew. Concrete & Sewer Line Done Right.</h1>
    </>
  );
}

function App() {
  return (
    <MemoryRouter initialEntries={["/industrial-concrete-repair-oklahoma-city"]}>
      <Routes>
        <Route path="/industrial-concrete-repair-oklahoma-city" element={<IndustrialPage />} />
        <Route path="/driveway-repair-oklahoma-city" element={<DrivewayPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MemoryRouter>
  );
}

afterEach(() => {
  document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
});

describe("FAQ JSON-LD lifecycle", () => {
  it("tags only FAQPage scripts when hoisting prerender JSON-LD", () => {
    const faqTag = faqJsonLdScriptTag(
      JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [] }),
    );
    const otherTag = faqJsonLdScriptTag(
      JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Concrete" }),
    );
    expect(faqTag).toContain(`id="${FAQ_JSON_LD_SCRIPT_ID}"`);
    expect(otherTag).not.toContain(`id="${FAQ_JSON_LD_SCRIPT_ID}"`);
  });

  it("collapses prerendered head FAQ plus a body FAQ into one matching object", () => {
    seedPrerenderedHead(industrialFaq);
    const body = document.createElement("script");
    body.type = "application/ld+json";
    body.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: industrialFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    document.body.appendChild(body);

    expect(faqPages()).toHaveLength(2);
    syncFaqJsonLd(industrialFaq);
    const remaining = faqPages();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].parent).toBe("HEAD");
    expect(remaining[0].id).toBe(FAQ_JSON_LD_SCRIPT_ID);
    expect(remaining[0].json.mainEntity?.[0]?.name).toBe(industrialFaq[0].question);
    expect(document.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(2);
    body.remove();
  });

  it("keeps one current-page FAQPage across direct load and client-side navigation", () => {
    seedPrerenderedHead(industrialFaq);
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("Industrial Concrete Repair");
    let remaining = faqPages();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].json.mainEntity?.[0]?.name).toBe(industrialFaq[0].question);

    fireEvent.click(screen.getByRole("link", { name: "Driveway repair" }));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("Concrete Driveway Repair");
    remaining = faqPages();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].json.mainEntity?.[0]?.name).toBe(drivewayFaq[0].question);
    expect(remaining.some((entry) => entry.json.mainEntity?.[0]?.name === industrialFaq[0].question)).toBe(false);

    fireEvent.click(screen.getByRole("link", { name: "Industrial" }));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("Industrial Concrete Repair");
    fireEvent.click(screen.getByRole("link", { name: "Home" }));
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("One Crew");
    remaining = faqPages();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].json.mainEntity?.[0]?.name).toBe(homeFaq[0].question);
    expect(remaining.some((entry) => entry.json.mainEntity?.[0]?.name === industrialFaq[0].question)).toBe(false);
    expect(
      [...document.querySelectorAll('script[type="application/ld+json"]')].some((el) => {
        try {
          return JSON.parse(el.textContent || "")["@type"] === "GeneralContractor";
        } catch {
          return false;
        }
      }),
    ).toBe(true);
  });
});

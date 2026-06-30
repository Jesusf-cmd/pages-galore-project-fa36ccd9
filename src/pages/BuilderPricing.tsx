import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TODO: Swap in your real form endpoint before going live.
//
// Option A – Web3Forms (free, no backend needed):
//   1. Go to https://web3forms.com and get a free access key.
//   2. Replace FORM_ENDPOINT below with "https://api.web3forms.com/submit"
//   3. Add a hidden field <input name="access_key" value="YOUR_KEY" /> to the
//      form data (already done — just set WEB3FORMS_ACCESS_KEY below).
//
// Option B – Formspree (free tier, no backend needed):
//   1. Go to https://formspree.io, create a form, copy the endpoint URL.
//   2. Replace FORM_ENDPOINT with "https://formspree.io/f/YOUR_FORM_ID"
//
// Option C – Any webhook (Zapier, Make, n8n, etc.):
//   Replace FORM_ENDPOINT with your webhook POST URL.
//
// Both qualified AND disqualified submissions are sent so FDZ captures every lead.
// ─────────────────────────────────────────────────────────────────────────────
const FORM_ENDPOINT = "https://api.web3forms.com/submit"; // ← swap this
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // ← swap this

// ─── Pricing data — all prices live here, easy to update ───────────────────
const PRICING = {
  foundations: [
    {
      name: "Slab-on-Grade Foundation",
      price: "$3.00 / sq ft",
      note: "Includes digging and pouring footing, prepping and pouring slab. Labor only — materials not included.",
    },
    {
      name: "Stem Wall Foundation",
      price: "$3.00 / sq ft (slab/footing) + $15.00 / linear ft (stem wall)",
      note: "Same labor scope as slab-on-grade, plus stem wall construction billed per linear foot. Labor only — materials not included.",
    },
    {
      name: "Footing Excavation Only",
      price: "$7.00 / linear ft",
      note: "For builders who only need footings dug. No pour included.",
    },
  ],
  padPrep: [
    { label: "Basic pad prep (minimal cut/fill)", price: "$0.75 – $1.00 / sq ft" },
    { label: "Average pad (most subdivisions)", price: "$1.25 – $2.00 / sq ft" },
    { label: "Heavy cut/fill", price: "$2.00 – $3.00+ / sq ft" },
  ],
  retainingWall: "$15.00 / sq ft",
};

type FormState = "idle" | "submitting" | "disqualified" | "qualified" | "error";

export default function BuilderPricing() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    volume: "",
    buildAreas: "",
  });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});
  const pricingRef = useRef<HTMLDivElement>(null);
  const disqualRef = useRef<HTMLDivElement>(null);

  // Inject noindex into <head>
  useEffect(() => {
    document.title = "Builder Pricing — FDZ Construction LLC";

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");

    return () => {
      robots?.setAttribute("content", "index, follow");
    };
  }, []);

  // Scroll to result after state change
  useEffect(() => {
    if (formState === "qualified" && pricingRef.current) {
      setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
    if (formState === "disqualified" && disqualRef.current) {
      setTimeout(() => disqualRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [formState]);

  function validate() {
    const e: Partial<typeof fields> = {};
    if (!fields.businessName.trim()) e.businessName = "Required";
    if (!fields.contactName.trim()) e.contactName = "Required";
    if (!/^\+?[\d\s\-().]{7,}$/.test(fields.phone)) e.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid business email";
    if (!fields.volume) e.volume = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");
    const qualified = fields.volume !== "1-4";

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("subject", `FDZ Builder Lead — ${qualified ? "QUALIFIED" : "Not qualified"} — ${fields.businessName}`);
    payload.append("Business Name", fields.businessName);
    payload.append("Contact Name", fields.contactName);
    payload.append("Phone", fields.phone);
    payload.append("Email", fields.email);
    payload.append("Homes Per Year", fields.volume);
    payload.append("Build Areas", fields.buildAreas || "Not provided");
    payload.append("Qualified", qualified ? "Yes" : "No");

    try {
      await fetch(FORM_ENDPOINT, { method: "POST", body: payload });
    } catch {
      // Non-blocking — still reveal pricing even if submission fails
    }

    setFormState(qualified ? "qualified" : "disqualified");
  }

  function Field({
    id, label, error, children,
  }: { id: string; label: string; error?: string; children: React.ReactNode }) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} style={labelStyle}>{label}</label>
        {children}
        {error && <span style={{ color: "#f97316", fontSize: "0.78rem" }}>{error}</span>}
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    background: "#1c1c1e",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 4,
    color: "#e5e0d8",
    fontSize: "1rem",
    padding: "0.7rem 0.9rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };
  const labelStyle: React.CSSProperties = {
    color: "#a09890",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#141414", color: "#e5e0d8", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── Header bar ── */}
      <header style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <div>
          <div style={{ color: "#f97316", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>FDZ Construction LLC</div>
          <div style={{ color: "#706860", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Oklahoma City · Licensed & Insured</div>
        </div>
        <a href="tel:4054584805" style={{ color: "#f97316", fontWeight: 800, fontSize: "1rem", textDecoration: "none", letterSpacing: "0.02em" }}>
          (405) 458-4805
        </a>
      </header>

      {/* ── Hero / pitch ── */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "inline-block", background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 3, color: "#f97316", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.3rem 0.75rem", marginBottom: "1.25rem" }}>
          Builder Program · Not for Public Distribution
        </div>
        <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#f0ebe3", margin: "0 0 1rem", letterSpacing: "-0.01em" }}>
          Flat-Rate Foundation Pricing<br />
          <span style={{ color: "#f97316" }}>for Oklahoma City Builders.</span>
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#a09890", margin: "0 0 0.75rem" }}>
          FDZ works with custom home builders, spec builders, and developers on a flat-rate labor model. No games, no bid theater. Same pricing for every lot in your pipeline.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#706860", margin: 0 }}>
          Fill out the form below to unlock our builder rate sheet. We ask a few questions first so we can make sure this program is the right fit.
        </p>
      </section>

      {/* ── Gate form ── */}
      {(formState === "idle" || formState === "submitting" || formState === "error") && (
        <section style={{ maxWidth: 680, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
          <div style={{ background: "#1c1c1e", border: "1px solid rgba(255,255,255,0.08)", borderTop: "3px solid #f97316", borderRadius: 6, padding: "2rem 1.75rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e5e0d8", margin: "0 0 1.5rem" }}>
              Unlock Builder Pricing
            </h2>
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field id="businessName" label="Business / Company name" error={errors.businessName}>
                  <input
                    id="businessName"
                    type="text"
                    autoComplete="organization"
                    value={fields.businessName}
                    onChange={ev => setFields(f => ({ ...f, businessName: ev.target.value }))}
                    style={inputStyle}
                    onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                    onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </Field>
                <Field id="contactName" label="Contact name" error={errors.contactName}>
                  <input
                    id="contactName"
                    type="text"
                    autoComplete="name"
                    value={fields.contactName}
                    onChange={ev => setFields(f => ({ ...f, contactName: ev.target.value }))}
                    style={inputStyle}
                    onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                    onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </Field>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field id="phone" label="Phone number" error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={ev => setFields(f => ({ ...f, phone: ev.target.value }))}
                    style={inputStyle}
                    onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                    onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </Field>
                <Field id="email" label="Business email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={ev => setFields(f => ({ ...f, email: ev.target.value }))}
                    style={inputStyle}
                    onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                    onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </Field>
              </div>

              <Field id="volume" label="Homes built per year" error={errors.volume}>
                <select
                  id="volume"
                  value={fields.volume}
                  onChange={ev => setFields(f => ({ ...f, volume: ev.target.value }))}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                  onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                >
                  <option value="">Select…</option>
                  <option value="1-4">1 – 4 homes/year</option>
                  <option value="5-9">5 – 9 homes/year</option>
                  <option value="10-24">10 – 24 homes/year</option>
                  <option value="25+">25+ homes/year</option>
                </select>
              </Field>

              <Field id="buildAreas" label="Primary build areas (optional)">
                <input
                  id="buildAreas"
                  type="text"
                  placeholder="e.g. Edmond, Norman, Moore"
                  value={fields.buildAreas}
                  onChange={ev => setFields(f => ({ ...f, buildAreas: ev.target.value }))}
                  style={{ ...inputStyle, color: fields.buildAreas ? "#e5e0d8" : "#706860" }}
                  onFocus={ev => (ev.target.style.borderColor = "#f97316")}
                  onBlur={ev => (ev.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </Field>

              {formState === "error" && (
                <p style={{ color: "#f97316", fontSize: "0.88rem", margin: 0 }}>
                  Something went wrong. Please try again or call (405) 458-4805 directly.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                style={{
                  background: formState === "submitting" ? "#c2540a" : "#f97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "0.9rem 1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: formState === "submitting" ? "wait" : "pointer",
                  transition: "background 0.15s",
                  width: "100%",
                }}
              >
                {formState === "submitting" ? "Submitting…" : "Unlock Builder Pricing →"}
              </button>

              <p style={{ color: "#4a4440", fontSize: "0.75rem", textAlign: "center", margin: 0 }}>
                This page is not indexed by search engines. Your information is shared only with FDZ Construction LLC.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* ── Disqualification message ── */}
      {formState === "disqualified" && (
        <section ref={disqualRef} style={{ maxWidth: 680, margin: "0 auto", padding: "0 1.5rem 3rem" }}>
          <div style={{ background: "#1c1c1e", border: "1px solid rgba(255,255,255,0.08)", borderTop: "3px solid #f97316", borderRadius: 6, padding: "2rem 1.75rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>👋</div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#f0ebe3", margin: "0 0 0.75rem" }}>
              Thanks, {fields.contactName.split(" ")[0]}.
            </h2>
            <p style={{ color: "#a09890", lineHeight: 1.7, margin: "0 0 1rem" }}>
              Our builder program is designed for contractors building <strong style={{ color: "#e5e0d8" }}>5 or more homes per year</strong> — the flat-rate model and volume pricing we offer are structured around that build cadence.
            </p>
            <p style={{ color: "#a09890", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
              That said, we'd still love to earn your business. If you have a project ready to bid, we'll give you a competitive quote — no builder program required.
            </p>
            <a
              href="https://fdzconstruction.com/#estimate"
              style={{
                display: "inline-block",
                background: "#f97316",
                color: "#fff",
                padding: "0.85rem 1.5rem",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.88rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Request a Standard Quote →
            </a>
            <div style={{ marginTop: "1.25rem", color: "#706860", fontSize: "0.88rem" }}>
              Or call us directly: <a href="tel:4054584805" style={{ color: "#f97316", textDecoration: "none" }}>(405) 458-4805</a>
            </div>
          </div>
        </section>
      )}

      {/* ── Pricing reveal ── */}
      {formState === "qualified" && (
        <section ref={pricingRef} style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem 4rem" }}>

          {/* Confirmation banner */}
          <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 6, padding: "1rem 1.25rem", marginBottom: "2.5rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>✓</span>
            <div>
              <div style={{ color: "#86efac", fontWeight: 700, fontSize: "0.9rem" }}>You're confirmed — rate sheet unlocked.</div>
              <div style={{ color: "#706860", fontSize: "0.82rem", marginTop: "0.25rem" }}>
                A copy of this pricing has been sent to {fields.email}. FDZ will follow up within 1 business day.
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#f0ebe3", margin: "0 0 0.35rem", letterSpacing: "-0.01em" }}>
            FDZ Builder Rate Sheet
          </h2>
          <p style={{ color: "#706860", fontSize: "0.88rem", margin: "0 0 2.5rem" }}>
            Oklahoma City Metro · Effective 2025–2026 · Labor Only Unless Noted
          </p>

          {/* Foundations */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={sectionEyebrow}>Foundations</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PRICING.foundations.map(item => (
                <div key={item.name} style={pricingCard}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div style={{ fontWeight: 800, color: "#f0ebe3", fontSize: "1.02rem" }}>{item.name}</div>
                    <div style={{ color: "#f97316", fontWeight: 900, fontSize: "1.05rem", whiteSpace: "nowrap" }}>{item.price}</div>
                  </div>
                  <div style={{ color: "#706860", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.4rem" }}>{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pad prep */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={sectionEyebrow}>Pad Preparation</div>
            <div style={pricingCard}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {PRICING.padPrep.map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "#c4beb6", fontSize: "0.95rem" }}>{item.label}</span>
                    <span style={{ color: "#f97316", fontWeight: 800, fontSize: "0.95rem", whiteSpace: "nowrap" }}>{item.price}</span>
                  </div>
                ))}
              </div>
              <div style={{ color: "#4a4440", fontSize: "0.8rem", marginTop: "0.5rem" }}>Pad prep scope varies by lot conditions — final scope confirmed after site walk.</div>
            </div>
          </div>

          {/* Retaining walls */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={sectionEyebrow}>Retaining Walls</div>
            <div style={pricingCard}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ color: "#f0ebe3", fontWeight: 800, fontSize: "1.02rem" }}>Retaining Walls</span>
                <span style={{ color: "#f97316", fontWeight: 900, fontSize: "1.05rem" }}>{PRICING.retainingWall}</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "1.25rem", marginBottom: "2.5rem" }}>
            <p style={{ color: "#706860", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#a09890" }}>Pricing reflects labor only</strong> unless otherwise noted. Material costs, site access, soil conditions, and permit requirements may affect final quote. Volume pricing available for ongoing partnerships — contact us to discuss your project pipeline.
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#1c1c1e", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 6, padding: "2rem 1.75rem", textAlign: "center" }}>
            <div style={{ color: "#f97316", fontWeight: 900, fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Have a project ready to bid?
            </div>
            <p style={{ color: "#a09890", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
              Call us directly or reply to your confirmation email and we'll get a formal quote turned around fast.
            </p>
            <a
              href="tel:4054584805"
              style={{
                display: "inline-block",
                background: "#f97316",
                color: "#fff",
                padding: "0.9rem 2rem",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Call (405) 458-4805
            </a>
          </div>

        </section>
      )}

    </div>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────────────
const sectionEyebrow: React.CSSProperties = {
  color: "#f97316",
  fontSize: "0.72rem",
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom: "0.75rem",
};

const pricingCard: React.CSSProperties = {
  background: "#1c1c1e",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 6,
  padding: "1.25rem 1.5rem",
};

import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  applyEstimateOriginToDetails,
  estimateAddressPlaceholder,
  detailsLimitError,
  parseEstimateOrigin,
  quoteFollowUpPath,
  quoteSubmitCallFailure,
} from "@/lib/estimatePath";
import { EstimateCallError, EstimateCallFollowUp } from "@/components/EstimateCallLink";
import {
  SERVICE_TYPES,
  FINISH_TYPES,
  buildLineItems,
  calculateRange,
} from "@/lib/pricingConfig";
import { supabase } from "@/integrations/supabase/client";
import { trackGenerateLead } from "@/lib/dataLayer";

/** Owner-page services for the Phase 2 project-type select. */
export const OWNER_PROJECT_TYPES = [
  { id: "driveways", label: "Driveways", path: "/driveways-oklahoma-city" },
  { id: "patios", label: "Patios & slabs", path: "/patios-oklahoma-city" },
  { id: "foundations", label: "Foundations", path: "/foundations-oklahoma-city" },
  { id: "sidewalks", label: "Sidewalks", path: "/sidewalks-oklahoma-city" },
  { id: "retaining-walls", label: "Retaining walls", path: "/retaining-walls-oklahoma-city" },
  { id: "parking-lots", label: "Parking lots", path: "/parking-lots-oklahoma-city" },
  { id: "commercial", label: "Commercial concrete", path: "/commercial-concrete-oklahoma-city" },
  { id: "sewer", label: "Sewer line", path: "/sewer-line-repair-oklahoma-city" },
  { id: "other", label: "Other", path: "/" },
] as const;

const PROPERTY_TYPES = ["Residential", "Commercial", "Other"] as const;
const CUSTOMER_ROLES = ["Owner", "Property manager", "General contractor", "Other"] as const;
const BIDDING_OPTIONS = ["Bidding", "Awarded", "N/A"] as const;

// TODO(FDZ): TURNSTILE_SITE_KEY / TURNSTILE_SECRET — set VITE_TURNSTILE_SITE_KEY to enable the widget.
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const TURNSTILE_ENABLED = Boolean(TURNSTILE_SITE_KEY);

type EstimateFormProps = {
  /** Override form_location / from tracking. Defaults to current pathname. */
  fromPath?: string;
};

function fromSlug(pathname: string): string {
  if (!pathname || pathname === "/") return "home";
  return pathname.replace(/^\//, "").replace(/\/+$/, "");
}

export default function EstimateForm({ fromPath }: EstimateFormProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pathFrom = fromPath ?? location.pathname;
  const autoFrom = fromSlug(pathFrom);
  const queryFrom = searchParams.get("from");
  const originFrom = queryFrom || autoFrom;
  const origin = parseEstimateOrigin(queryFrom || (autoFrom !== "home" ? autoFrom : null));

  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("slab");
  const [ownerProjectType, setOwnerProjectType] = useState("driveways");
  const [propertyType, setPropertyType] = useState("");
  const [customerRole, setCustomerRole] = useState("");
  const [approxSize, setApproxSize] = useState("");
  const [biddingStatus, setBiddingStatus] = useState("");
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(20);
  const [finish, setFinish] = useState("broom");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [errorCallsPhone, setErrorCallsPhone] = useState(false);
  const startedAtRef = useRef(Date.now());
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!TURNSTILE_ENABLED || !turnstileRef.current) return;
    const w = window as Window & {
      turnstile?: {
        render: (
          el: HTMLElement,
          opts: { sitekey: string; callback: (token: string) => void },
        ) => string;
      };
    };
    const render = () => {
      if (!turnstileRef.current || !w.turnstile || turnstileRef.current.dataset.rendered) return;
      w.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY!,
        callback: (token) => setTurnstileToken(token),
      });
      turnstileRef.current.dataset.rendered = "1";
    };
    if (w.turnstile) {
      render();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>('script[data-fdz-turnstile]');
    if (existing) {
      existing.addEventListener("load", render);
      return () => existing.removeEventListener("load", render);
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.dataset.fdzTurnstile = "1";
    script.addEventListener("load", render);
    document.head.appendChild(script);
    return () => script.removeEventListener("load", render);
  }, [step]);

  const sqft = length * width;
  const range = calculateRange(projectType, finish, sqft);
  const types = Object.values(SERVICE_TYPES).map((s) => ({
    id: s.id,
    name: s.name,
    sub: s.description,
  }));

  const appendLeadFields = (base: string) => {
    const extras = [
      propertyType && `Property type: ${propertyType}`,
      customerRole && `Role: ${customerRole}`,
      ownerProjectType && `Owner project type: ${ownerProjectType}`,
      approxSize && `Approximate size: ${approxSize}`,
      customerRole === "General contractor" && biddingStatus && `Bidding status: ${biddingStatus}`,
    ]
      .filter(Boolean)
      .join("\n");
    if (!extras) return base;
    return base ? `${base}\n\n${extras}` : extras;
  };

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorCallsPhone(false);
      setError("Please fill in your name, phone, and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorCallsPhone(false);
      setError("Please enter a valid email address.");
      return;
    }
    const detailsError = detailsLimitError(details);
    if (detailsError) {
      setErrorCallsPhone(false);
      setError(detailsError);
      return;
    }
    setError("");
    setErrorCallsPhone(false);
    setSubmitting(true);

    try {
      const lineItems = buildLineItems(projectType, finish, sqft);
      const siteUrl = window.location.origin;
      const enrichedDetails = appendLeadFields(
        applyEstimateOriginToDetails(originFrom, details),
      );

      const { data, error: fnError } = await supabase.functions.invoke("submit-quote", {
        body: {
          name,
          email,
          phone,
          address,
          details: enrichedDetails,
          projectType,
          finishType: finish,
          lengthFt: length,
          widthFt: width,
          sqft,
          estimateLow: range.low,
          estimateHigh: range.high,
          lineItems,
          siteUrl,
          propertyType: propertyType || null,
          customerRole: customerRole || null,
          ownerProjectType: ownerProjectType || null,
          approxSize: approxSize || null,
          biddingStatus:
            customerRole === "General contractor" ? biddingStatus || null : null,
          // Honeypot + timing (server-enforced)
          company_website: honeypot,
          formStartedAt: startedAtRef.current,
          // TODO(FDZ): TURNSTILE_SITE_KEY / TURNSTILE_SECRET
          turnstileToken: TURNSTILE_ENABLED ? turnstileToken : undefined,
          from: originFrom,
        },
      });

      if (fnError) throw fnError;

      trackGenerateLead({
        formLocation: pathFrom.startsWith("/") ? pathFrom : `/${pathFrom}`,
        propertyType: propertyType || undefined,
        projectType: ownerProjectType || projectType,
      });

      if (data?.accessToken) {
        navigate(quoteFollowUpPath(data.accessToken, originFrom));
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(quoteSubmitCallFailure(originFrom).prefix);
      setErrorCallsPhone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-stone" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
        <div className="bg-orange p-4 flex justify-between items-center">
          <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">
            Quote Submitted
          </span>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-concrete mb-2">Thank You, {name}!</h3>
          <p className="text-muted-text text-sm mb-3">
            Your quote has been created. Check your email for details.
          </p>
          <EstimateCallFollowUp from={originFrom} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
      <div className="bg-orange p-4 flex justify-between items-center">
        <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">
          Instant Estimate
        </span>
        <span className="bg-white/20 text-white text-[0.63rem] tracking-[0.1em] uppercase px-2.5 py-1 font-bold">
          Step {step} of 3
        </span>
      </div>
      {origin && (
        <div
          className="px-4 md:px-5 py-3 bg-concrete/[0.04]"
          style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}
        >
          <p className="text-[0.78rem] text-concrete leading-relaxed">
            You&apos;re requesting a <strong>{origin.formLabel}</strong> estimate. Pick the closest
            project type for a planning range, then describe the actual scope in the details step.
            The range is not a site-specific bid.
          </p>
        </div>
      )}

      {step === 1 && (
        <div className="p-4 md:p-5">
          <div className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold mb-2.5">
            Select project type
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {types.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setProjectType(t.id)}
                className={`text-left p-3 md:p-3 transition-colors cursor-pointer min-h-[48px] ${
                  projectType === t.id ? "bg-orange/10 border-orange" : "bg-concrete/[0.03] border-concrete/10"
                }`}
                style={{
                  border: `1px solid hsl(var(--${projectType === t.id ? "orange" : "concrete"}) / ${
                    projectType === t.id ? "0.5" : "0.1"
                  })`,
                }}
              >
                <div className="font-display text-xs font-extrabold uppercase tracking-[0.04em] text-concrete">
                  {t.name}
                </div>
                <div className="text-[0.65rem] text-muted-text mt-0.5">{t.sub}</div>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="btn-primary w-full text-sm py-3.5 min-h-[48px]"
          >
            Next: Enter Dimensions →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="p-4 md:p-5">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                Length (ft)
              </label>
              <input
                type="number"
                value={length === 0 ? "" : length}
                onChange={(e) => setLength(e.target.value === "" ? 0 : +e.target.value)}
                onFocus={(e) => e.target.select()}
                placeholder="Enter feet"
                min={1}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none transition-colors focus:border-orange min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              />
            </div>
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                {projectType === "wall" ? "Height (ft)" : "Width (ft)"}
              </label>
              <input
                type="number"
                value={width === 0 ? "" : width}
                onChange={(e) => setWidth(e.target.value === "" ? 0 : +e.target.value)}
                onFocus={(e) => e.target.select()}
                placeholder="Enter feet"
                min={1}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none transition-colors focus:border-orange min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              />
            </div>
          </div>
          {projectType !== "wall" && (
            <div className="mb-3">
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                Finish type
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none cursor-pointer min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              >
                {Object.values(FINISH_TYPES).map((f) => (
                  <option key={f.id} value={f.id} className="bg-stone text-concrete">
                    {f.name} — {f.description}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div
            className="bg-concrete/[0.03] p-4 mt-4 mb-4"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            <div className="text-[0.6rem] tracking-[0.14em] uppercase text-muted-text font-bold mb-2">
              Estimated Range
            </div>
            <div className="font-display text-2xl md:text-3xl font-black text-orange leading-none">
              ${range.low.toLocaleString()} – ${range.high.toLocaleString()}
            </div>
            <div className="text-[0.7rem] text-muted-text mt-1">
              {sqft} sq ft · ${range.perFtLow}–${range.perFtHigh}/sq ft installed
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-outline text-sm py-3.5 min-h-[48px] flex-1 w-full sm:w-auto"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn-primary text-sm py-3.5 min-h-[48px] flex-1 w-full sm:w-auto"
            >
              Next: Your Info →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                Property type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none cursor-pointer min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              >
                <option value="">Select…</option>
                {PROPERTY_TYPES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                Your role
              </label>
              <select
                value={customerRole}
                onChange={(e) => setCustomerRole(e.target.value)}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none cursor-pointer min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              >
                <option value="">Select…</option>
                {CUSTOMER_ROLES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Project type
            </label>
            <select
              value={ownerProjectType}
              onChange={(e) => setOwnerProjectType(e.target.value)}
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none cursor-pointer min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            >
              {OWNER_PROJECT_TYPES.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Approximate size
            </label>
            <input
              value={approxSize}
              onChange={(e) => setApproxSize(e.target.value)}
              placeholder='e.g. 20×24 ft'
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          {customerRole === "General contractor" && (
            <div className="mb-3">
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                Bidding or awarded
              </label>
              <select
                value={biddingStatus}
                onChange={(e) => setBiddingStatus(e.target.value)}
                className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none cursor-pointer min-h-[48px]"
                style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
              >
                <option value="">Select…</option>
                {BIDDING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* TODO(FDZ): enable photo upload when submit-quote accepts files */}
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              autoComplete="name"
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(405) 000-0000"
              type="tel"
              autoComplete="tel"
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              type="email"
              autoComplete="email"
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Project Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={
                estimateAddressPlaceholder(originFrom) || "123 Main St, Oklahoma City, OK"
              }
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          <div className="mb-4">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
              Project Details
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={
                origin?.placeholder ||
                "Tell us about your project scope, timeline, special requirements..."
              }
              rows={3}
              className="w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none resize-y min-h-[48px]"
              style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
            />
          </div>
          {/* Honeypot — leave empty */}
          <label
            className="absolute left-[-9999px] h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            Company website
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
          {TURNSTILE_ENABLED && (
            <div className="mb-4">
              <div ref={turnstileRef} />
            </div>
          )}
          {error && (
            <div
              className="bg-destructive/20 text-destructive text-sm p-3 mb-4"
              style={{ border: "1px solid hsl(0 60% 40% / 0.3)" }}
            >
              {errorCallsPhone ? <EstimateCallError prefix={error} from={originFrom} /> : error}
            </div>
          )}
          <div
            className="bg-concrete/[0.03] p-3 mb-4 text-center"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            <div className="font-display text-xl font-black text-orange">
              ${range.low.toLocaleString()} – ${range.high.toLocaleString()}
            </div>
            <div className="text-[0.65rem] text-muted-text">
              {sqft} sq ft · {projectType}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-outline text-sm py-3.5 min-h-[48px] flex-1 w-full sm:w-auto"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-primary text-sm py-3.5 min-h-[48px] flex-1 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Creating Quote..." : "Get Your Quote →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

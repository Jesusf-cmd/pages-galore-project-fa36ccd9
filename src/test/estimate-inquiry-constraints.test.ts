/**
 * Isolated verification against real SQLite NOT NULL / CHECK constraints
 * mirroring live `quotes` and local `estimate_inquiries` schema.
 * No outbound email, uploads, or network.
 */
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import {
  buildEstimateInquiryRow,
  customerInquiryEmailHtml,
  internalInquiryEmailHtml,
} from "@/lib/estimateInquiry";
import { parsePricedQuoteAmounts, isAcceptablePricedQuote } from "@/lib/pricedQuote";
import { KANSAS_PHONE } from "@/lib/phones";

let db: DatabaseSync;

beforeEach(() => {
  db = new DatabaseSync(":memory:");
  db.exec(`
    CREATE TABLE quotes (
      id TEXT PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      customer_address TEXT,
      project_details TEXT,
      project_type TEXT NOT NULL,
      finish_type TEXT,
      length_ft INTEGER NOT NULL,
      width_ft INTEGER NOT NULL,
      square_feet INTEGER NOT NULL,
      estimate_low INTEGER NOT NULL,
      estimate_high INTEGER NOT NULL,
      total_estimate INTEGER NOT NULL,
      line_items TEXT,
      status TEXT NOT NULL DEFAULT 'pending'
    );

    CREATE TABLE estimate_inquiries (
      id TEXT PRIMARY KEY,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      customer_address TEXT,
      project_type TEXT NOT NULL,
      property_type TEXT,
      customer_role TEXT,
      approx_size TEXT,
      bidding_status TEXT,
      project_details TEXT,
      origin TEXT,
      status TEXT NOT NULL DEFAULT 'inquiry'
        CHECK (status IN ('inquiry', 'closed'))
    );
  `);
});

afterEach(() => {
  db.close();
});

describe("quotes NOT NULL constraints (live-compatible)", () => {
  it("rejects null estimate amounts and dimensions", () => {
    const insert = db.prepare(`
      INSERT INTO quotes (
        id, customer_name, customer_email, customer_phone, project_type,
        length_ft, width_ft, square_feet, estimate_low, estimate_high, total_estimate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    expect(() =>
      insert.run(
        "q1",
        "Test",
        "t@example.com",
        "3165550100",
        "slab",
        null,
        null,
        null,
        null,
        null,
        null,
      ),
    ).toThrow(/NOT NULL/i);
  });

  it("accepts a priced Oklahoma-style quote row", () => {
    const priced = parsePricedQuoteAmounts({
      estimateLow: 12000,
      estimateHigh: 18000,
      lengthFt: 40,
      widthFt: 20,
      sqft: 800,
    });
    expect(priced.ok).toBe(true);
    if (!priced.ok) return;
    db.prepare(`
      INSERT INTO quotes (
        id, customer_name, customer_email, customer_phone, project_type,
        length_ft, width_ft, square_feet, estimate_low, estimate_high, total_estimate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      "q2",
      "OKC Customer",
      "okc@example.com",
      "4055550100",
      "slab",
      priced.amounts.lengthFt,
      priced.amounts.widthFt,
      priced.amounts.sqft,
      priced.amounts.estimateLow,
      priced.amounts.estimateHigh,
      priced.amounts.estimateHigh,
    );
    const row = db.prepare("SELECT estimate_low, estimate_high FROM quotes WHERE id = ?").get("q2") as {
      estimate_low: number;
      estimate_high: number;
    };
    expect(row.estimate_low).toBe(12000);
    expect(isAcceptablePricedQuote({ ...row, status: "pending" })).toBe(true);
  });

  it("parsePricedQuoteAmounts refuses Kansas-style null prices before any insert", () => {
    const result = parsePricedQuoteAmounts({
      estimateLow: null,
      estimateHigh: null,
      lengthFt: 20,
      widthFt: 20,
      sqft: 400,
    });
    expect(result.ok).toBe(false);
  });
});

describe("estimate_inquiries path", () => {
  it("stores Kansas inquiry with real project type, approx size, and origin — no prices or dims", () => {
    const built = buildEstimateInquiryRow({
      name: "Wichita Lead",
      email: "wichita-lead@example.com",
      phone: "3165550199",
      address: "100 Douglas Ave, Wichita, KS",
      details: "Need parking lot overlay near downtown.",
      projectType: "commercial",
      propertyType: "Commercial",
      customerRole: "General contractor",
      approxSize: "about 8,000 sq ft",
      biddingStatus: "Bidding",
      from: "concrete-contractors-wichita-ks",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    expect(built.row.project_type).toBe("commercial");
    expect(built.row.approx_size).toBe("about 8,000 sq ft");
    expect(built.row.origin).toBe("concrete-contractors-wichita-ks");
    expect(built.row.status).toBe("inquiry");
    expect(built.row.project_details).toContain(
      "Requested from /concrete-contractors-wichita-ks (concrete contractors, Wichita KS).",
    );
    expect(built.row.project_details).toContain("Need parking lot overlay near downtown.");
    expect(built.row.project_details).toContain("Approximate size: about 8,000 sq ft");
    expect(JSON.stringify(built.row)).not.toMatch(/estimate_low|length_ft|width_ft|square_feet/);

    db.prepare(`
      INSERT INTO estimate_inquiries (
        id, customer_name, customer_email, customer_phone, customer_address,
        project_type, property_type, customer_role, approx_size, bidding_status,
        project_details, origin, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      "inq-1",
      built.row.customer_name,
      built.row.customer_email,
      built.row.customer_phone,
      built.row.customer_address,
      built.row.project_type,
      built.row.property_type,
      built.row.customer_role,
      built.row.approx_size,
      built.row.bidding_status,
      built.row.project_details,
      built.row.origin,
      built.row.status,
    );

    const stored = db.prepare("SELECT * FROM estimate_inquiries WHERE id = ?").get("inq-1") as Record<
      string,
      unknown
    >;
    expect(stored.project_type).toBe("commercial");
    expect(stored.approx_size).toBe("about 8,000 sq ft");
    expect(stored.origin).toBe("concrete-contractors-wichita-ks");
    expect(stored.status).toBe("inquiry");
    expect(Object.keys(stored)).not.toContain("estimate_low");
  });

  it("renders inquiry emails with Kansas phone and without Accept Quote / expiry", () => {
    const customer = customerInquiryEmailHtml({
      firstName: "Wichita",
      origin: "concrete-contractors-wichita-ks",
    });
    expect(customer).toContain(KANSAS_PHONE.display);
    expect(customer).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(customer).toMatch(/written estimate after a plan review/i);
    expect(customer).not.toMatch(/ACCEPT QUOTE/i);
    expect(customer).not.toMatch(/Valid for 30 days/i);
    expect(customer).not.toMatch(/Expires on/i);

    const internal = internalInquiryEmailHtml({
      name: "Wichita Lead",
      email: "wichita-lead@example.com",
      phone: "3165550199",
      address: "100 Douglas Ave",
      projectType: "commercial",
      propertyType: "Commercial",
      customerRole: "Owner",
      approxSize: "8,000 sq ft",
      biddingStatus: null,
      projectDetails:
        "Requested from /concrete-contractors-wichita-ks (concrete contractors, Wichita KS).\nNeed parking.",
      origin: "concrete-contractors-wichita-ks",
    });
    expect(internal).toContain("Unpriced request");
    expect(internal).toContain("concrete-contractors-wichita-ks");
    expect(internal).toContain("commercial");
    expect(internal).not.toMatch(/ACCEPT QUOTE|VIEW QUOTE|Expires/i);
  });

  it("escapes hostile markup and preserves ordinary punctuation in inquiry emails", () => {
    const customer = customerInquiryEmailHtml({
      firstName: '<b>FIXTURE</b> & "O\'Neil"',
      origin: "concrete-contractors-wichita-ks",
    });
    expect(customer).toContain("&lt;b&gt;FIXTURE&lt;/b&gt; &amp; &quot;O&#39;Neil&quot;");
    expect(customer).not.toContain("<b>FIXTURE</b>");

    const internal = internalInquiryEmailHtml({
      name: '<b>FIXTURE</b>',
      email: 'safe@example.com',
      phone: "316-555-0199",
      address: '100 Douglas & Main',
      projectType: "commercial",
      propertyType: "Commercial",
      customerRole: "Owner",
      approxSize: '8,000 sq ft — "approx"',
      biddingStatus: null,
      projectDetails: "<strong>FIXTURE-NOTES</strong>\nLine 2 & more",
      origin: "concrete-contractors-wichita-ks",
    });
    expect(internal).toContain("&lt;b&gt;FIXTURE&lt;/b&gt;");
    expect(internal).not.toContain("<b>FIXTURE</b>");
    expect(internal).toContain("&lt;strong&gt;FIXTURE-NOTES&lt;/strong&gt;");
    expect(internal).not.toContain("<strong>FIXTURE-NOTES</strong>");
    expect(internal).toContain("100 Douglas &amp; Main");
    expect(internal).toContain("mailto:safe%40example.com");
    expect(internal).toContain("tel:3165550199");
    expect(internal).toContain("8,000 sq ft — &quot;approx&quot;");
  });

  it("rejects non-string inquiry fields instead of coercing objects", () => {
    const bad = buildEstimateInquiryRow({
      name: { toString: () => "Nope" },
      email: "ok@example.com",
      phone: "3165550100",
      projectType: "commercial",
      from: "concrete-contractors-wichita-ks",
    });
    expect(bad.ok).toBe(false);
    if (!bad.ok) expect(bad.error).toMatch(/must be text/i);
  });

  it("does not treat unpriced quote-like rows as acceptable", () => {
    expect(
      isAcceptablePricedQuote({
        status: "pending",
        estimate_low: null,
        estimate_high: null,
      }),
    ).toBe(false);
  });
});

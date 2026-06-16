import { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { supabase } from "@/integrations/supabase/client";
import {
  COMPANY,
  formatQuoteNumber,
  formatCurrency,
  formatDate,
} from "@/lib/pricingConfig";

interface QuoteLineItem {
  number: number;
  title: string;
  priceLow: number;
  priceHigh: number;
  includes: string[];
}

interface Quote {
  quote_number: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  project_details: string | null;
  project_type: string;
  finish_type: string | null;
  length_ft: number;
  width_ft: number;
  square_feet: number;
  estimate_low: number;
  estimate_high: number;
  line_items: QuoteLineItem[];
  total_estimate: number;
  valid_until: string;
  created_at: string;
  status: string;
  signature_url: string | null;
  accepted_at: string | null;
  signer_name?: string | null;
  signer_email?: string | null;
}

function getDisplayStatus(quote: Quote): { label: string; color: string; bg: string } {
  if (quote.status === "accepted") {
    return { label: "ACCEPTED", color: "#16a34a", bg: "#dcfce7" };
  }
  const isExpired = new Date(quote.valid_until) < new Date();
  if (quote.status === "expired" || isExpired) {
    return { label: "EXPIRED", color: "#dc2626", bg: "#fef2f2" };
  }
  return { label: "PENDING", color: "#c45c26", bg: "#fff7ed" };
}

export default function QuotePage() {
  // The :id route param now carries the unguessable access token, not the quote's primary id.
  const { id: accessToken } = useParams<{ id: string }>();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [accepting, setAccepting] = useState(false);
  const [acceptError, setAcceptError] = useState("");
  const [signerName, setSignerName] = useState("");
  const [signerEmail, setSignerEmail] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<SignatureCanvas | null>(null);

  useEffect(() => {
    if (!accessToken) return;
    supabase.functions
      .invoke("get-quote", { body: { token: accessToken } })
      .then(({ data, error: err }) => {
        const quoteData = (data as { quote?: Quote } | null)?.quote;
        if (err || !quoteData) {
          setError("Quote not found.");
        } else {
          setQuote(quoteData);
          // Pre-fill signer fields with the customer info on file (still editable).
          setSignerName(quoteData.customer_name || "");
          setSignerEmail(quoteData.customer_email || "");
          document.title = `Estimate ${formatQuoteNumber(quoteData.quote_number)} | FDZ Construction`;
        }
        setLoading(false);
      });
  }, [accessToken]);

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: 800,
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();
      let position = 0;
      let remainingHeight = pdfHeight;
      while (remainingHeight > 0) {
        if (position > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -position, pdfWidth, pdfHeight);
        remainingHeight -= pageHeight;
        position += pageHeight;
      }
      pdf.save(`FDZ-Construction-Quote-${formatQuoteNumber(quote!.quote_number)}.pdf`);
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      setDownloading(false);
    }
  };

  const handleAcceptQuote = useCallback(async () => {
    if (!quote || !accessToken) return;
    if (!sigRef.current || sigRef.current.isEmpty()) {
      setAcceptError("Please provide your signature.");
      return;
    }
    const trimmedName = signerName.trim();
    const trimmedEmail = signerEmail.trim();
    if (trimmedName.length < 2) {
      setAcceptError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setAcceptError("Please enter a valid email address.");
      return;
    }
    if (!agreeTerms) {
      setAcceptError("Please agree to the Terms & Conditions.");
      return;
    }
    setAccepting(true);
    setAcceptError("");
    try {
      const signatureDataUrl = sigRef.current.toDataURL("image/png");
      const { data, error: fnErr } = await supabase.functions.invoke("accept-quote", {
        body: {
          accessToken,
          signatureDataUrl,
          signerName: trimmedName,
          signerEmail: trimmedEmail,
        },
      });
      if (fnErr || !data?.success) {
        setAcceptError(data?.error || "Failed to accept quote. Please try again.");
        return;
      }
      setQuote((prev) =>
        prev
          ? {
              ...prev,
              status: "accepted",
              signature_url: data.signatureUrl,
              accepted_at: data.acceptedAt,
              signer_name: trimmedName,
              signer_email: trimmedEmail,
            }
          : prev
      );
      setShowAcceptModal(false);
    } catch {
      setAcceptError("An error occurred. Please try again.");
    } finally {
      setAccepting(false);
    }
  }, [quote, accessToken, agreeTerms, signerName, signerEmail]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1eb]">
        <div className="text-[#888] text-sm tracking-widest uppercase">Loading quote...</div>
      </div>
    );
  }

  if (error || !quote) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1eb]">
        <div className="text-center">
          <div className="text-4xl mb-4">📄</div>
          <h1 className="text-[#1a1a1a] text-xl font-bold mb-2">Quote Not Found</h1>
          <p className="text-[#888] text-sm">This quote may have expired or the link is invalid.</p>
        </div>
      </div>
    );
  }

  const displayStatus = getDisplayStatus(quote);
  const lineItems: QuoteLineItem[] = Array.isArray(quote.line_items)
    ? (quote.line_items as unknown as QuoteLineItem[])
    : [];
  const isPending = displayStatus.label === "PENDING";
  const isExpired = displayStatus.label === "EXPIRED";
  const isAccepted = displayStatus.label === "ACCEPTED";

  return (
    <div className="min-h-screen bg-[#f5f1eb] print:bg-white">
      {/* Top Bar */}
      <div className="print:hidden sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#333]">
        <div className="max-w-[800px] mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-white text-sm font-bold tracking-wide">
            {formatQuoteNumber(quote.quote_number)}
          </span>
          <div className="flex items-center gap-2">
            {isPending && (
              <button
                onClick={() => setShowAcceptModal(true)}
                className="bg-[#c45c26] hover:bg-[#a84d1f] text-white px-5 py-2 text-sm font-bold tracking-wider uppercase transition-colors"
              >
                Accept Quote
              </button>
            )}
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-sm font-bold tracking-wider uppercase transition-colors border border-white/20 disabled:opacity-50"
            >
              {downloading ? "Generating..." : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* Expired Banner */}
      {isExpired && (
        <div className="max-w-[800px] mx-auto px-4 mt-4 print:hidden">
          <div className="bg-[#fef2f2] border border-[#fecaca] rounded px-5 py-4 text-center">
            <div className="text-[#dc2626] text-sm font-bold mb-1">This quote has expired.</div>
            <div className="text-[#555] text-xs">
              Please contact us at <a href="tel:4054584805" className="text-[#c45c26] font-bold">(405) 458-4805</a> for an updated estimate.
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[800px] mx-auto px-4 py-8 print:py-0 print:px-0">
        <div ref={contentRef} className="bg-white shadow-lg print:shadow-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          {/* Header */}
          <div className="bg-[#1a1a1a] px-8 py-6 sm:px-10 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold mb-1">{COMPANY.badge}</div>
                <div className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">FDZ CONSTRUCTION</div>
                <div className="text-[#888] text-xs mt-1">LLC</div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold mb-1">ESTIMATE</div>
                <div className="text-white text-2xl sm:text-3xl font-extrabold">{formatQuoteNumber(quote.quote_number)}</div>
                <div
                  className="inline-block mt-2 px-3 py-1 rounded text-[10px] tracking-[2px] font-bold"
                  style={{ color: displayStatus.color, backgroundColor: displayStatus.bg }}
                >
                  {displayStatus.label}
                </div>
              </div>
            </div>
          </div>

          {/* Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#e5e5e5]">
            <div className="px-8 sm:px-10 py-5 border-b sm:border-b-0 sm:border-r border-[#e5e5e5]">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">PREPARED FOR</div>
              <div className="text-[#1a1a1a] text-sm font-bold">{quote.customer_name}</div>
              {quote.customer_address && <div className="text-[#888] text-xs mt-0.5">{quote.customer_address}</div>}
            </div>
            <div className="px-8 sm:px-10 py-5 border-b sm:border-b-0 sm:border-r border-[#e5e5e5]">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">DATE ISSUED</div>
              <div className="text-[#1a1a1a] text-sm font-bold">{formatDate(quote.created_at)}</div>
            </div>
            <div className="px-8 sm:px-10 py-5">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">
                {isAccepted ? "ACCEPTED ON" : isExpired ? "EXPIRED ON" : "EXPIRES IN"}
              </div>
              {isAccepted && quote.accepted_at ? (
                <div className="text-[#16a34a] text-sm font-bold">{formatDate(quote.accepted_at)}</div>
              ) : isExpired ? (
                <div className="text-[#dc2626] text-sm font-bold">{formatDate(quote.valid_until)}</div>
              ) : (
                <>
                  <div className="text-[#1a1a1a] text-sm font-bold">
                    {(() => {
                      const days = Math.ceil((new Date(quote.valid_until).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                      if (days <= 0) return "Expiring today";
                      if (days === 1) return "1 day";
                      return `${days} days`;
                    })()}
                  </div>
                  <div className="text-[#888] text-xs mt-0.5">Until {formatDate(quote.valid_until)}</div>
                </>
              )}
            </div>
          </div>

          {/* Scope of Work */}
          <div className="px-8 sm:px-10 py-8">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-6 pb-3 border-b-2 border-[#c45c26]">SCOPE OF WORK</h2>
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div key={item.number} className="border border-[#e5e5e5] rounded" data-print-section="line-item">
                  <div className="bg-[#fafafa] px-5 py-3 border-b border-[#e5e5e5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <span className="text-[#c45c26] text-[10px] tracking-[2px] font-bold mr-3">ITEM {String(item.number).padStart(2, "0")}</span>
                      <span className="text-[#1a1a1a] text-sm font-bold">{item.title}</span>
                    </div>
                    <div className="text-[#c45c26] text-base font-extrabold">
                      {formatCurrency(item.priceLow)} – {formatCurrency(item.priceHigh)}
                    </div>
                  </div>
                  {item.includes && item.includes.length > 0 && (
                    <div className="px-5 py-3">
                      <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-2">INCLUDES</div>
                      <ul className="space-y-1">
                        {item.includes.map((inc, i) => (
                          <li key={i} className="text-[#555] text-xs flex items-start gap-2">
                            <span className="text-[#c45c26] mt-0.5">✓</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="px-8 sm:px-10 py-6 bg-[#fafafa] border-t border-[#e5e5e5]">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-4 pb-3 border-b-2 border-[#c45c26]">SUMMARY</h2>
            <div className="space-y-2 mb-4">
              {lineItems.map((item) => (
                <div key={item.number} className="flex justify-between text-sm">
                  <span className="text-[#555]">{item.title}</span>
                  <span className="text-[#1a1a1a] font-bold">{formatCurrency(item.priceLow)} – {formatCurrency(item.priceHigh)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t-2 border-[#1a1a1a]">
              <span className="text-[#1a1a1a] text-base font-extrabold tracking-wide">TOTAL ESTIMATE</span>
              <span className="text-[#c45c26] text-2xl font-extrabold">
                {formatCurrency(quote.estimate_low)} – {formatCurrency(quote.estimate_high)}
              </span>
            </div>
            {quote.square_feet > 0 && (
              <div className="text-[#999] text-xs text-right mt-1">{quote.square_feet} sq ft</div>
            )}
          </div>

          {/* Terms */}
          <div className="px-8 sm:px-10 py-6 border-t border-[#e5e5e5]">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-4 pb-3 border-b-2 border-[#c45c26]">TERMS & CONDITIONS</h2>
            <div className="space-y-3 text-[#555] text-xs leading-relaxed">
              <p><strong className="text-[#1a1a1a]">Payment Terms:</strong> 50% deposit required to schedule. Remaining balance due upon project completion.</p>
              <p><strong className="text-[#1a1a1a]">Validity:</strong> This estimate is valid for 30 days from the date issued. Prices subject to change after expiration.</p>
            </div>
            <h3 className="text-[#1a1a1a] text-sm font-bold mt-6 mb-2">Exclusions</h3>
            <p className="text-[#555] text-xs leading-relaxed">
              This quote does not include permits unless otherwise specified. Any underground utilities, unforeseen site conditions, or changes in scope may result in a revised estimate.
            </p>
          </div>

          {/* Authorization */}
          <div className="px-8 sm:px-10 py-6 border-t border-[#e5e5e5]" data-print-section="authorization">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-6 pb-3 border-b-2 border-[#c45c26]">AUTHORIZATION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                {isAccepted && quote.signature_url ? (
                  <div className="border-b-2 border-[#1a1a1a] pb-1 mb-2 min-h-[40px] flex items-end">
                    <img src={quote.signature_url} alt="Customer Signature" className="h-[50px] object-contain" />
                  </div>
                ) : (
                  <div className="border-b-2 border-[#1a1a1a] pb-1 mb-2 min-h-[40px]" />
                )}
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">CUSTOMER SIGNATURE</div>
                <div className="text-[#555] text-xs mt-0.5">{quote.customer_name}</div>
              </div>
              <div>
                <div className="border-b-2 border-[#1a1a1a] pb-1 mb-2 min-h-[40px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">FDZ CONSTRUCTION LLC</div>
                <div className="text-[#555] text-xs mt-0.5">Authorized Representative</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <div className="border-b border-[#ccc] pb-1 mb-2 min-h-[30px] flex items-end">
                  {isAccepted && quote.accepted_at && (
                    <span className="text-[#1a1a1a] text-xs font-bold">{formatDate(quote.accepted_at)}</span>
                  )}
                </div>
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">DATE</div>
              </div>
              <div>
                <div className="border-b border-[#ccc] pb-1 mb-2 min-h-[30px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">DATE</div>
              </div>
            </div>
          </div>

          {/* Accept CTA for pending quotes */}
          {isPending && (
            <div className="px-8 sm:px-10 py-6 border-t border-[#e5e5e5] text-center print:hidden">
              <button
                onClick={() => setShowAcceptModal(true)}
                className="bg-[#c45c26] hover:bg-[#a84d1f] text-white px-10 py-4 text-base font-bold tracking-wider uppercase transition-colors rounded"
              >
                Accept This Quote
              </button>
              <p className="text-[#888] text-xs mt-3">By accepting, you agree to the terms and conditions above.</p>
            </div>
          )}

          {/* Footer */}
          <div className="bg-[#1a1a1a] px-8 sm:px-10 py-6 text-center">
            <div className="text-white text-sm font-bold tracking-wide">FDZ Construction LLC</div>
            <div className="text-[#888] text-xs mt-2">{COMPANY.phone} · {COMPANY.email}</div>
            <div className="text-[#888] text-xs mt-1">{COMPANY.siteUrl}</div>
          </div>
        </div>
      </div>

      {/* Accept Modal */}
      {showAcceptModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 print:hidden">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <div className="bg-[#1a1a1a] px-6 py-4 rounded-t-lg flex items-center justify-between">
              <div>
                <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold">ACCEPT QUOTE</div>
                <div className="text-white text-lg font-extrabold">{formatQuoteNumber(quote.quote_number)}</div>
              </div>
              <button onClick={() => { setShowAcceptModal(false); setAcceptError(""); }} className="text-[#888] hover:text-white text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6">
              <div className="bg-[#f5f1eb] rounded px-4 py-3 mb-6">
                <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">TOTAL ESTIMATE</div>
                <div className="text-[#c45c26] text-xl font-extrabold">
                  {formatCurrency(quote.estimate_low)} – {formatCurrency(quote.estimate_high)}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="signer-name" className="block text-[#1a1a1a] text-sm font-bold mb-2">Full Name</label>
                <input
                  id="signer-name"
                  type="text"
                  value={signerName}
                  onChange={(e) => setSignerName(e.target.value)}
                  autoComplete="name"
                  maxLength={100}
                  className="w-full px-3 py-2 text-sm border-2 border-[#e5e5e5] rounded focus:outline-none focus:border-[#c45c26]"
                  placeholder="Type your full legal name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="signer-email" className="block text-[#1a1a1a] text-sm font-bold mb-2">Email</label>
                <input
                  id="signer-email"
                  type="email"
                  value={signerEmail}
                  onChange={(e) => setSignerEmail(e.target.value)}
                  autoComplete="email"
                  maxLength={255}
                  className="w-full px-3 py-2 text-sm border-2 border-[#e5e5e5] rounded focus:outline-none focus:border-[#c45c26]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <div className="text-[#1a1a1a] text-sm font-bold mb-2">Your Signature</div>
                <div className="border-2 border-[#e5e5e5] rounded bg-white" style={{ touchAction: "none" }}>
                  <SignatureCanvas
                    ref={sigRef}
                    canvasProps={{
                      className: "w-full",
                      style: { width: "100%", height: "150px" },
                    }}
                    penColor="#1a1a1a"
                    backgroundColor="#ffffff"
                  />
                </div>
                <button
                  onClick={() => sigRef.current?.clear()}
                  className="text-[#888] text-xs mt-1 hover:text-[#c45c26] transition-colors"
                >
                  Clear signature
                </button>
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#c45c26]"
                />
                <span className="text-[#555] text-xs leading-relaxed">
                  I agree to the <strong className="text-[#1a1a1a]">Terms & Conditions</strong> including 50% deposit to schedule and remaining balance due upon completion.
                </span>
              </label>

              {acceptError && (
                <div className="text-[#dc2626] text-xs font-bold mb-4 bg-[#fef2f2] rounded px-3 py-2">{acceptError}</div>
              )}

              <button
                onClick={handleAcceptQuote}
                disabled={accepting}
                className="w-full bg-[#c45c26] hover:bg-[#a84d1f] text-white py-3 text-sm font-bold tracking-wider uppercase transition-colors rounded disabled:opacity-50"
              >
                {accepting ? "Processing..." : "Confirm Acceptance"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in 0.4in;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:px-0 { padding-left: 0 !important; padding-right: 0 !important; }
          /* Prevent awkward breaks */
          h2, h3 { page-break-after: avoid; }
          table, figure, .border { page-break-inside: avoid; }
          /* Keep authorization section together */
          [data-print-section="authorization"] { page-break-inside: avoid; }
          /* Keep each scope-of-work item together */
          [data-print-section="line-item"] { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}

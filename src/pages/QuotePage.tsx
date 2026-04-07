import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
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
  id: string;
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
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error: err }) => {
        if (err || !data) {
          setError("Quote not found.");
        } else {
          setQuote(data as unknown as Quote);
        }
        setLoading(false);
      });
  }, [id]);

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

      pdf.save(
        `Redwood-Construction-Quote-${formatQuoteNumber(quote!.quote_number)}.pdf`
      );
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1eb]">
        <div className="text-[#888] text-sm tracking-widest uppercase">
          Loading quote...
        </div>
      </div>
    );
  }

  if (error || !quote) {
  const displayStatus = getDisplayStatus(quote);

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1eb]">
        <div className="text-center">
          <div className="text-4xl mb-4">📄</div>
          <h1 className="text-[#1a1a1a] text-xl font-bold mb-2">
            Quote Not Found
          </h1>
          <p className="text-[#888] text-sm">
            This quote may have expired or the link is invalid.
          </p>
        </div>
      </div>
    );
  }

  const lineItems: QuoteLineItem[] = Array.isArray(quote.line_items)
    ? (quote.line_items as unknown as QuoteLineItem[])
    : [];

  return (
    <div className="min-h-screen bg-[#f5f1eb] print:bg-white">
      {/* Download Button - hidden in print */}
      <div className="print:hidden sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#333]">
        <div className="max-w-[800px] mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-white text-sm font-bold tracking-wide">
            {formatQuoteNumber(quote.quote_number)}
          </span>
          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="bg-[#c45c26] hover:bg-[#a84d1f] text-white px-5 py-2 text-sm font-bold tracking-wider uppercase transition-colors disabled:opacity-50"
          >
            {downloading ? "Generating..." : "Download PDF"}
          </button>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-8 print:py-0 print:px-0">
        <div
          ref={contentRef}
          className="bg-white shadow-lg print:shadow-none"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {/* Header */}
          <div className="bg-[#1a1a1a] px-8 py-6 sm:px-10 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold mb-1">
                  {COMPANY.badge}
                </div>
                <div className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">
                  REDWOOD CONSTRUCTION
                </div>
                <div className="text-[#888] text-xs mt-1">LLC</div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold mb-1">
                  ESTIMATE
                </div>
                <div className="text-white text-2xl sm:text-3xl font-extrabold">
                  {formatQuoteNumber(quote.quote_number)}
                </div>
              </div>
            </div>
          </div>

          {/* Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#e5e5e5]">
            <div className="px-8 sm:px-10 py-5 border-b sm:border-b-0 sm:border-r border-[#e5e5e5]">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">
                PREPARED FOR
              </div>
              <div className="text-[#1a1a1a] text-sm font-bold">
                {quote.customer_name}
              </div>
              {quote.customer_address && (
                <div className="text-[#888] text-xs mt-0.5">
                  {quote.customer_address}
                </div>
              )}
            </div>
            <div className="px-8 sm:px-10 py-5 border-b sm:border-b-0 sm:border-r border-[#e5e5e5]">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">
                DATE ISSUED
              </div>
              <div className="text-[#1a1a1a] text-sm font-bold">
                {formatDate(quote.created_at)}
              </div>
            </div>
            <div className="px-8 sm:px-10 py-5">
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">
                VALID FOR
              </div>
              <div className="text-[#1a1a1a] text-sm font-bold">30 Days</div>
              <div className="text-[#888] text-xs mt-0.5">
                Until {formatDate(quote.valid_until)}
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="px-8 sm:px-10 py-8">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-6 pb-3 border-b-2 border-[#c45c26]">
              SCOPE OF WORK
            </h2>

            <div className="space-y-4">
              {lineItems.map((item) => (
                <div
                  key={item.number}
                  className="border border-[#e5e5e5] rounded"
                >
                  <div className="bg-[#fafafa] px-5 py-3 border-b border-[#e5e5e5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <span className="text-[#c45c26] text-[10px] tracking-[2px] font-bold mr-3">
                        ITEM {String(item.number).padStart(2, "0")}
                      </span>
                      <span className="text-[#1a1a1a] text-sm font-bold">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-[#c45c26] text-base font-extrabold">
                      {formatCurrency(item.priceLow)} –{" "}
                      {formatCurrency(item.priceHigh)}
                    </div>
                  </div>
                  {item.includes && item.includes.length > 0 && (
                    <div className="px-5 py-3">
                      <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-2">
                        INCLUDES
                      </div>
                      <ul className="space-y-1">
                        {item.includes.map((inc, i) => (
                          <li
                            key={i}
                            className="text-[#555] text-xs flex items-start gap-2"
                          >
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
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-4 pb-3 border-b-2 border-[#c45c26]">
              SUMMARY
            </h2>
            <div className="space-y-2 mb-4">
              {lineItems.map((item) => (
                <div
                  key={item.number}
                  className="flex justify-between text-sm"
                >
                  <span className="text-[#555]">{item.title}</span>
                  <span className="text-[#1a1a1a] font-bold">
                    {formatCurrency(item.priceLow)} –{" "}
                    {formatCurrency(item.priceHigh)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t-2 border-[#1a1a1a]">
              <span className="text-[#1a1a1a] text-base font-extrabold tracking-wide">
                TOTAL ESTIMATE
              </span>
              <span className="text-[#c45c26] text-2xl font-extrabold">
                {formatCurrency(quote.estimate_low)} –{" "}
                {formatCurrency(quote.estimate_high)}
              </span>
            </div>
            {quote.square_feet > 0 && (
              <div className="text-[#999] text-xs text-right mt-1">
                {quote.square_feet} sq ft
              </div>
            )}
          </div>

          {/* Terms */}
          <div className="px-8 sm:px-10 py-6 border-t border-[#e5e5e5]">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-4 pb-3 border-b-2 border-[#c45c26]">
              TERMS & CONDITIONS
            </h2>
            <div className="space-y-3 text-[#555] text-xs leading-relaxed">
              <p>
                <strong className="text-[#1a1a1a]">Payment Terms:</strong> 50%
                deposit required to schedule. Remaining balance due upon project
                completion.
              </p>
              <p>
                <strong className="text-[#1a1a1a]">Validity:</strong> This
                estimate is valid for 30 days from the date issued. Prices
                subject to change after expiration.
              </p>
            </div>

            <h3 className="text-[#1a1a1a] text-sm font-bold mt-6 mb-2">
              Exclusions
            </h3>
            <p className="text-[#555] text-xs leading-relaxed">
              This quote does not include permits unless otherwise specified.
              Any underground utilities, unforeseen site conditions, or changes
              in scope may result in a revised estimate.
            </p>
          </div>

          {/* Authorization */}
          <div className="px-8 sm:px-10 py-6 border-t border-[#e5e5e5]">
            <h2 className="text-[#1a1a1a] text-lg font-extrabold tracking-wide mb-6 pb-3 border-b-2 border-[#c45c26]">
              AUTHORIZATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="border-b-2 border-[#1a1a1a] pb-1 mb-2 min-h-[40px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">
                  CUSTOMER SIGNATURE
                </div>
                <div className="text-[#555] text-xs mt-0.5">
                  {quote.customer_name}
                </div>
              </div>
              <div>
                <div className="border-b-2 border-[#1a1a1a] pb-1 mb-2 min-h-[40px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">
                  REDWOOD CONSTRUCTION LLC
                </div>
                <div className="text-[#555] text-xs mt-0.5">
                  Authorized Representative
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <div className="border-b border-[#ccc] pb-1 mb-2 min-h-[30px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">
                  DATE
                </div>
              </div>
              <div>
                <div className="border-b border-[#ccc] pb-1 mb-2 min-h-[30px]" />
                <div className="text-[#888] text-[10px] tracking-[2px] font-bold">
                  DATE
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#1a1a1a] px-8 sm:px-10 py-6 text-center">
            <div className="text-white text-sm font-bold tracking-wide">
              Redwood Construction LLC
            </div>
            <div className="text-[#888] text-xs mt-2">
              {COMPANY.phone} · {COMPANY.email}
            </div>
            <div className="text-[#888] text-xs mt-1">{COMPANY.siteUrl}</div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:px-0 { padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </div>
  );
}

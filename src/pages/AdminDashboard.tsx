import { useEffect, useState, useMemo, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { formatCurrency, formatDate, formatQuoteNumber, SERVICE_TYPES, FINISH_TYPES } from "@/lib/pricingConfig";

type StatusFilter = "all" | "pending" | "accepted" | "expired";
type TimeFilter = "all" | "week" | "month";
type SortField = "quote_number" | "customer_name" | "total_estimate" | "status" | "created_at" | "valid_until";
type SortDir = "asc" | "desc";

interface Quote {
  id: string;
  quote_number: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  project_type: string;
  finish_type: string | null;
  estimate_low: number;
  estimate_high: number;
  total_estimate: number;
  status: string;
  created_at: string;
  valid_until: string;
  square_feet: number;
  line_items: any[];
  project_details: string | null;
  signature_url: string | null;
  accepted_at: string | null;
}

const STATUS_COLORS: Record<string, { text: string; bg: string }> = {
  pending: { text: "#c45c26", bg: "#fff7ed" },
  accepted: { text: "#16a34a", bg: "#dcfce7" },
  expired: { text: "#dc2626", bg: "#fef2f2" },
};

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchQuotes = useCallback(async () => {
    const { data } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });
    setQuotes((data as unknown as Quote[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => { document.title = "Admin Dashboard | FDZ Construction"; fetchQuotes(); }, [fetchQuotes]);

  const filtered = useMemo(() => {
    let list = [...quotes];

    // Compute effective status (check expiration for pending)
    list = list.map((q) => ({
      ...q,
      status: q.status === "pending" && new Date(q.valid_until) < new Date() ? "expired" : q.status,
    }));

    if (statusFilter !== "all") list = list.filter((q) => q.status === statusFilter);

    if (timeFilter === "week") {
      const d = new Date(); d.setDate(d.getDate() - 7);
      list = list.filter((q) => new Date(q.created_at) >= d);
    } else if (timeFilter === "month") {
      const d = new Date(); d.setMonth(d.getMonth() - 1);
      list = list.filter((q) => new Date(q.created_at) >= d);
    }

    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((q) =>
        q.customer_name.toLowerCase().includes(s) ||
        q.customer_email.toLowerCase().includes(s) ||
        q.customer_phone.includes(s) ||
        String(q.quote_number).includes(s)
      );
    }

    list.sort((a, b) => {
      let av: any = a[sortField];
      let bv: any = b[sortField];
      if (sortField === "created_at" || sortField === "valid_until") {
        av = new Date(av).getTime(); bv = new Date(bv).getTime();
      }
      if (typeof av === "string") { av = av.toLowerCase(); bv = (bv as string).toLowerCase(); }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [quotes, statusFilter, timeFilter, search, sortField, sortDir]);

  const stats = useMemo(() => {
    const effective = quotes.map((q) => ({
      ...q,
      status: q.status === "pending" && new Date(q.valid_until) < new Date() ? "expired" : q.status,
    }));
    return {
      total: effective.length,
      pending: effective.filter((q) => q.status === "pending").length,
      accepted: effective.filter((q) => q.status === "accepted").length,
      expired: effective.filter((q) => q.status === "expired").length,
      revenue: effective.filter((q) => q.status === "accepted").reduce((s, q) => s + q.total_estimate, 0),
    };
  }, [quotes]);

  const handleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdatingId(id);
    await supabase.from("quotes").update({ status } as any).eq("id", id);
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
    setUpdatingId(null);
  };

  const deleteQuote = async (id: string) => {
    if (!confirm("Delete this quote permanently?")) return;
    await supabase.from("quotes").delete().eq("id", id);
    setQuotes((prev) => prev.filter((q) => q.id !== id));
  };

  const exportCSV = () => {
    const headers = ["Quote #", "Customer", "Email", "Phone", "Project Type", "Finish", "Sq Ft", "Estimate Low", "Estimate High", "Total", "Status", "Date Issued", "Expires On"];
    const rows = filtered.map((q) => [
      formatQuoteNumber(q.quote_number), q.customer_name, q.customer_email, q.customer_phone,
      SERVICE_TYPES[q.project_type]?.name || q.project_type,
      q.finish_type ? (FINISH_TYPES[q.finish_type]?.name || q.finish_type) : "N/A",
      q.square_feet, q.estimate_low, q.estimate_high, q.total_estimate,
      q.status.toUpperCase(), new Date(q.created_at).toLocaleDateString(), new Date(q.valid_until).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `redwood-quotes-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    <span className="ml-1 text-[10px]">
      {sortField === field ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
    </span>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
        <div className="text-[#888] text-sm tracking-widest uppercase">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Header */}
      <div className="bg-[#1a1a1a] px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-[#c45c26] text-[9px] tracking-[3px] font-bold">ADMIN DASHBOARD</div>
            <div className="text-white text-lg font-extrabold tracking-wide">REDWOOD CONSTRUCTION</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/" className="text-[#888] hover:text-white text-xs font-bold tracking-wider uppercase transition-colors">
            Site →
          </Link>
          <button
            onClick={signOut}
            className="text-[#888] hover:text-[#dc2626] text-xs font-bold tracking-wider uppercase transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {[
            { label: "Total Quotes", value: stats.total, color: "#1a1a1a" },
            { label: "Pending", value: stats.pending, color: "#c45c26" },
            { label: "Accepted", value: stats.accepted, color: "#16a34a" },
            { label: "Expired", value: stats.expired, color: "#dc2626" },
            { label: "Revenue", value: formatCurrency(stats.revenue), color: "#16a34a" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded shadow-sm px-4 py-4 border-t-2" style={{ borderColor: s.color }}>
              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">{s.label.toUpperCase()}</div>
              <div className="text-[#1a1a1a] text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded shadow-sm px-4 py-4 mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {(["all", "pending", "accepted", "expired"] as StatusFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded transition-colors ${
                  statusFilter === f
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#f5f1eb] text-[#888] hover:bg-[#e5e1db]"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="w-px bg-[#e5e5e5] mx-1 hidden sm:block" />
            {(["all", "week", "month"] as TimeFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setTimeFilter(f)}
                className={`px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded transition-colors ${
                  timeFilter === f
                    ? "bg-[#c45c26] text-white"
                    : "bg-[#f5f1eb] text-[#888] hover:bg-[#e5e1db]"
                }`}
              >
                {f === "all" ? "All Time" : f === "week" ? "This Week" : "This Month"}
              </button>
            ))}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search quotes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 sm:w-56 border border-[#e5e5e5] rounded px-3 py-2 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c45c26]"
            />
            <button
              onClick={exportCSV}
              className="bg-[#1a1a1a] hover:bg-[#333] text-white px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-colors whitespace-nowrap"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="text-[#888] text-xs font-bold tracking-wider mb-3">
          {filtered.length} QUOTE{filtered.length !== 1 ? "S" : ""}
        </div>

        {/* Table */}
        <div className="bg-white rounded shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                {([
                  ["quote_number", "QUOTE #"],
                  ["customer_name", "CUSTOMER"],
                  ["total_estimate", "ESTIMATE"],
                  ["status", "STATUS"],
                  ["created_at", "ISSUED"],
                  ["valid_until", "EXPIRES"],
                ] as [SortField, string][]).map(([field, label]) => (
                  <th
                    key={field}
                    onClick={() => handleSort(field)}
                    className="px-4 py-3 text-left text-[10px] tracking-[2px] font-bold cursor-pointer hover:bg-[#333] transition-colors whitespace-nowrap"
                  >
                    {label}<SortIcon field={field} />
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-[10px] tracking-[2px] font-bold">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((q) => {
                const sc = STATUS_COLORS[q.status] || STATUS_COLORS.pending;
                const isExpanded = expandedId === q.id;
                return (
                  <Fragment key={q.id}>
                    <tr
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      className="border-b border-[#f0f0f0] hover:bg-[#faf8f5] cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          to={`/quote/${q.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[#c45c26] font-bold hover:underline"
                        >
                          {formatQuoteNumber(q.quote_number)}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-[#1a1a1a]">{q.customer_name}</div>
                        <div className="text-[#888] text-xs">{q.customer_email}</div>
                      </td>
                      <td className="px-4 py-3 font-bold text-[#1a1a1a]">
                        {formatCurrency(q.estimate_low)} – {formatCurrency(q.estimate_high)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="px-2 py-1 rounded text-[10px] tracking-[1px] font-bold"
                          style={{ color: sc.text, backgroundColor: sc.bg }}
                        >
                          {q.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#888] text-xs whitespace-nowrap">{formatDate(q.created_at)}</td>
                      <td className="px-4 py-3 text-[#888] text-xs whitespace-nowrap">{formatDate(q.valid_until)}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                          <Link
                            to={`/quote/${q.id}`}
                            className="text-[#c45c26] hover:text-[#a84d1f] text-xs font-bold"
                          >
                            View
                          </Link>
                          {q.status === "pending" && (
                            <button
                              onClick={() => updateStatus(q.id, "accepted")}
                              disabled={updatingId === q.id}
                              className="text-[#16a34a] hover:text-[#15803d] text-xs font-bold ml-2 disabled:opacity-50"
                            >
                              Accept
                            </button>
                          )}
                          {q.status === "pending" && (
                            <button
                              onClick={() => updateStatus(q.id, "expired")}
                              disabled={updatingId === q.id}
                              className="text-[#dc2626] hover:text-[#b91c1c] text-xs font-bold ml-2 disabled:opacity-50"
                            >
                              Expire
                            </button>
                          )}
                          <button
                            onClick={() => deleteQuote(q.id)}
                            className="text-[#999] hover:text-[#dc2626] text-xs font-bold ml-2"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="bg-[#faf8f5]">
                        <td colSpan={7} className="px-6 py-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">PHONE</div>
                              <a href={`tel:${q.customer_phone}`} className="text-[#c45c26] font-bold">{q.customer_phone}</a>
                            </div>
                            <div>
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">ADDRESS</div>
                              <div className="text-[#1a1a1a]">{q.customer_address || "Not provided"}</div>
                            </div>
                            <div>
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">PROJECT TYPE</div>
                              <div className="text-[#1a1a1a] font-bold">{SERVICE_TYPES[q.project_type]?.name || q.project_type}{q.finish_type ? ` · ${FINISH_TYPES[q.finish_type]?.name || q.finish_type}` : ""} · {q.square_feet} sq ft</div>
                            </div>
                          </div>
                          {q.project_details && (
                            <div className="mt-4">
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">PROJECT NOTES</div>
                              <div className="text-[#555] text-sm whitespace-pre-wrap">{q.project_details}</div>
                            </div>
                          )}
                          {q.line_items && (q.line_items as any[]).length > 0 && (
                            <div className="mt-4">
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-2">LINE ITEMS</div>
                              <div className="space-y-1">
                                {(q.line_items as any[]).map((item: any, i: number) => (
                                  <div key={i} className="flex justify-between text-sm">
                                    <span className="text-[#555]">{item.title}</span>
                                    <span className="text-[#1a1a1a] font-bold">
                                      {formatCurrency(item.priceLow)} – {formatCurrency(item.priceHigh)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {q.signature_url && (
                            <div className="mt-4">
                              <div className="text-[#999] text-[10px] tracking-[2px] font-bold mb-1">SIGNATURE</div>
                              <img src={q.signature_url} alt="Signature" className="h-12 object-contain" />
                            </div>
                          )}
                          {q.accepted_at && (
                            <div className="mt-2 text-[#16a34a] text-xs font-bold">
                              Accepted on {formatDate(q.accepted_at)}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-[#888] text-sm">
                    No quotes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

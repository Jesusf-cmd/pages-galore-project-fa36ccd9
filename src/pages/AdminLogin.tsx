import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { COMPANY } from "@/lib/pricingConfig";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError(authError.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-[#1a1a1a] px-8 py-6 text-center rounded-t-lg">
          <div className="text-[#c45c26] text-[10px] tracking-[3px] font-bold mb-1">ADMIN PORTAL</div>
          <div className="text-white text-xl font-extrabold tracking-wide">FDZ CONSTRUCTION</div>
        </div>
        <form onSubmit={handleLogin} className="bg-white px-8 py-8 rounded-b-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-[#888] text-[10px] tracking-[2px] font-bold mb-2">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#e5e5e5] rounded px-3 py-2.5 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c45c26]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#888] text-[10px] tracking-[2px] font-bold mb-2">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#e5e5e5] rounded px-3 py-2.5 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c45c26]"
              required
            />
          </div>
          {error && (
            <div className="text-[#dc2626] text-xs font-bold mb-4 bg-[#fef2f2] rounded px-3 py-2">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c45c26] hover:bg-[#a84d1f] text-white py-3 text-sm font-bold tracking-wider uppercase transition-colors rounded disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <div className="text-center mt-4">
            <div className="text-[#888] text-xs">{COMPANY.phone}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

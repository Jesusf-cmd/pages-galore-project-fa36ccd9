import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { phoneForPath } from "@/lib/phones";

type Phone = { display: string; tel: string };

type QuoteContactContextValue = {
  /** True on the private quote route until the stored origin is known. */
  pending: boolean;
  /** Resolved business phone after the quote loads. Null while pending. */
  phone: Phone | null;
  reportPhone: (phone: Phone) => void;
};

const QuoteContactContext = createContext<QuoteContactContextValue | null>(null);

function isQuotePath(pathname: string): boolean {
  return pathname === "/quote" || pathname.startsWith("/quote/");
}

export function QuoteContactProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const onQuote = isQuotePath(pathname);
  const [phone, setPhone] = useState<Phone | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPhone(null);
    setReady(false);
  }, [pathname]);

  const reportPhone = useCallback((next: Phone) => {
    setPhone(next);
    setReady(true);
  }, []);

  const value = useMemo<QuoteContactContextValue>(
    () => ({
      pending: onQuote && !ready,
      phone: onQuote && ready ? phone : null,
      reportPhone,
    }),
    [onQuote, phone, ready, reportPhone],
  );

  return <QuoteContactContext.Provider value={value}>{children}</QuoteContactContext.Provider>;
}

export function useQuoteContact(): QuoteContactContextValue {
  const value = useContext(QuoteContactContext);
  if (!value) {
    return {
      pending: false,
      phone: null,
      reportPhone: () => {},
    };
  }
  return value;
}

/** Path phone everywhere except a quote view, which waits for the stored origin. */
export function useBusinessPhone(): Phone | null {
  const pathPhone = phoneForPath(useLocation().pathname);
  const quote = useQuoteContact();
  if (quote.pending) return null;
  if (quote.phone) return quote.phone;
  return pathPhone;
}

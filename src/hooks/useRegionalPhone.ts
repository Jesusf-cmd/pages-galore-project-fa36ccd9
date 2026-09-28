import { useLocation } from "react-router-dom";
import { phoneForPath } from "@/lib/phones";

/** Oklahoma number everywhere except the Wichita/Kansas routes. */
export function useRegionalPhone() {
  const { pathname } = useLocation();
  return phoneForPath(pathname);
}

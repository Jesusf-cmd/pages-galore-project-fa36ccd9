import { useEffect, useState, type ReactNode, type AnchorHTMLAttributes } from "react";
import {
  CONTACT_FALLBACK_HREF,
  CONTACT_FALLBACK_LABEL,
  getContactEmail,
  getMailtoHref,
} from "@/lib/contact";

type MailtoLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** When true, show the assembled address after mount; otherwise keep the fallback label. */
  showAddress?: boolean;
  children?: ReactNode;
};

/**
 * Renders a contact link without putting a raw email / mailto in the initial HTML.
 * Cloudflare Email Address Obfuscation rewrites static mailto + address text into
 * crawlable /cdn-cgi/l/email-protection links — this assembles mailto client-side.
 */
export default function MailtoLink({
  className,
  showAddress = true,
  children,
  ...rest
}: MailtoLinkProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const href = ready ? getMailtoHref() : CONTACT_FALLBACK_HREF;
  const label =
    children ?? (ready && showAddress ? getContactEmail() : CONTACT_FALLBACK_LABEL);

  return (
    <a
      href={href}
      className={className}
      aria-label="Email FDZ Construction"
      {...rest}
    >
      {label}
    </a>
  );
}

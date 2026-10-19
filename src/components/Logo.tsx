interface LogoProps {
  className?: string;
  /** Regional descriptor under the wordmark. Defaults to Oklahoma City. */
  region?: "oklahoma" | "kansas";
}

/**
 * FDZ Construction monogram-badge logo (Concept 3).
 * Uses the brand-kit colors as specified: charcoal text on the light UI,
 * with badge rings in the brand burnt orange (#D85A30).
 */
export default function Logo({ className, region = "oklahoma" }: LogoProps) {
  const kansas = region === "kansas";
  const descriptor = kansas ? "SERVING WICHITA, KS." : "OKLAHOMA CITY, OK · LLC";
  const ariaLabel = kansas
    ? "FDZ Construction LLC — Serving Wichita, KS"
    : "FDZ Construction LLC — Concrete Contractors, Oklahoma City";

  return (
    <svg
      viewBox="0 0 280 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <circle cx="50" cy="50" r="42" fill="none" stroke="#D85A30" strokeWidth="2" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#D85A30" strokeWidth="0.5" />
      <text
        x="50"
        y="59"
        textAnchor="middle"
        fontFamily="'Barlow Condensed', Arial, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="2"
        fill="#2C2C2A"
      >
        FDZ
      </text>

      <text
        x="102"
        y="38"
        fontFamily="'Barlow Condensed', Arial, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="1"
        fill="#2C2C2A"
      >
        FDZ CONSTRUCTION
      </text>
      <rect x="102" y="44" width={kansas ? 168 : 150} height="1" fill="#B4B2A9" />
      <text
        x="102"
        y="58"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="400"
        letterSpacing="3"
        fill="#5F5E5A"
      >
        CONCRETE CONTRACTORS
      </text>
      <text
        x="102"
        y="70"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing={kansas ? 1.6 : 2.5}
        fill="#B4B2A9"
      >
        {descriptor}
      </text>
    </svg>
  );
}

interface LogoProps {
  className?: string;
}

/**
 * FDZ Construction monogram-badge logo (Concept 3).
 * Uses the brand-kit colors as specified: charcoal text on the light UI,
 * with badge rings in the brand burnt orange (#D85A30).
 */
export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 260 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="FDZ Construction LLC — Concrete Contractors, Oklahoma City"
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
      <rect x="102" y="44" width="150" height="1" fill="#B4B2A9" />
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
        letterSpacing="2.5"
        fill="#B4B2A9"
      >
        OKLAHOMA CITY, OK · LLC
      </text>
    </svg>
  );
}

export default function TrustBar() {
  const items = [
    { icon: "🛡", title: "Licensed & Insured", sub: "Oklahoma contractor" },
    { icon: "🏗", title: "500+ Projects", sub: "Completed OKC metro" },
    { icon: "⭐", title: "4.9 Star Rating", sub: "80+ Google reviews" },
    { icon: "⚡", title: "Free Estimates", sub: "Response in 24 hours" },
  ];

  return (
    <div className="bg-orange px-4 md:px-12 py-3.5 flex justify-center items-stretch flex-wrap">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 px-4 md:px-10 py-1.5 flex-1 min-w-[155px] justify-center"
          style={{ borderRight: i < items.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
        >
          <span className="text-xl leading-none">{item.icon}</span>
          <div>
            <div className="font-display text-[0.88rem] font-extrabold uppercase tracking-[0.06em] text-white leading-tight">{item.title}</div>
            <div className="text-[0.6rem] text-white/70 tracking-[0.06em] uppercase mt-0.5">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const items = [
  "Finanzcoaching",
  "Unternehmensberatung",
  "Buchhaltungsservice",
  "Controlling",
  "Digitalisierung",
  "Vermögensaufbau",
  "Steuerberatung",
  "Prozessoptimierung",
];

export default function MarqueeBand() {
  // Double the items so the -50% translateX loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className="bg-gold overflow-hidden py-3.5 border-y border-gold/50">
      <div className="flex animate-marquee will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="text-[9px] uppercase tracking-[0.45em] text-black font-semibold px-7">
              {item}
            </span>
            <span className="text-black/30 text-sm select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

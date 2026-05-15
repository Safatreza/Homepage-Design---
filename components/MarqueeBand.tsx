const items: { label: string; href: string }[] = [
  { label: "Finanzcoaching",       href: "#dienstleistungen" },
  { label: "Unternehmensberatung", href: "#dienstleistungen" },
  { label: "Büroorganisation",     href: "#dienstleistungen" },
  { label: "Controlling",          href: "#dienstleistungen" },
  { label: "Digitalisierung",      href: "#dienstleistungen" },
  { label: "Vermögensaufbau",      href: "#dienstleistungen" },
  { label: "Buchhaltungsservice",  href: "#dienstleistungen" },
  { label: "Prozessoptimierung",   href: "#dienstleistungen" },
];

export default function MarqueeBand() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-gold overflow-hidden py-3.5 border-y border-gold/50">
      <div className="flex animate-marquee will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <a
              href={item.href}
              className="text-[9px] uppercase tracking-[0.45em] text-black font-semibold px-7 hover:text-black/60 transition-colors duration-200"
            >
              {item.label}
            </a>
            <span className="text-black/30 text-sm select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

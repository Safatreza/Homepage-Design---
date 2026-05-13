import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background — slightly blurred for glass feel */}
      <Image
        src="/background.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center scale-105 blur-[2px]"
        sizes="100vw"
      />

      {/* Glass-like base overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Directional gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />

      {/* Vertical left accent line */}
      <div className="absolute left-8 md:left-20 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

      {/* Content — bottom left */}
      <div className="relative z-10 w-full px-8 md:px-20 pb-20 md:pb-28">
        <div className="max-w-xl">
          {/* Overline */}
          <p className="text-[9px] uppercase tracking-[0.6em] text-gold mb-8 opacity-90">
            Strategische Beratung · München
          </p>

          {/* Name — massive editorial serif */}
          <h1 className="font-serif text-[clamp(4.5rem,11vw,9rem)] text-white leading-[0.88] tracking-tight mb-8">
            René<br />Kühn
          </h1>

          {/* Horizontal rule + tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-gold shrink-0" />
            <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400">
              Finanzcoaching · Unternehmensberatung · Buchhaltung
            </p>
          </div>

          {/* Sub-tagline */}
          <p className="text-gray-400 text-sm leading-loose mb-12 max-w-xs">
            Effizienz schaffen. Wachstum ermöglichen.<br />Vertrauen aufbauen.
          </p>

          {/* CTA group */}
          <div className="flex items-center gap-8">
            <a
              href="#dienstleistungen"
              className="relative inline-block bg-gold text-black text-[9px] uppercase tracking-[0.35em] px-8 py-3.5 font-semibold overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Leistungen
              </span>
              <span className="absolute inset-0 bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a
              href="#kontakt"
              className="text-[9px] uppercase tracking-[0.35em] text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              Kontakt
              <span className="text-gold inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3">
        <span className="text-[8px] uppercase tracking-[0.45em] text-gray-600 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      {/* Top-right logo mark */}
      <div className="absolute top-24 right-8 md:right-16 z-10">
        <div className="relative h-12 w-12 md:h-14 md:w-14 opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform">
          <Image src="/logo.jpeg" alt="René Kühn" fill className="object-contain" sizes="56px" />
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
}

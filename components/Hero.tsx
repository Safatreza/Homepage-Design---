import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background */}
      {/* Background image — slightly blurred for glass feel */}
      <Image
        src="/background.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center scale-105 blur-[2px]"
        sizes="100vw"
      />

      {/* Glass-like base overlay — mutes the image significantly */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Directional gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />

      {/* Bottom-left content block — editorial */}
      <div className="relative z-10 w-full px-8 md:px-20 pb-20 md:pb-28">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8 opacity-90">
            Strategische Beratung · München
          </p>

          <h1 className="font-serif text-[clamp(4rem,10vw,8rem)] text-white leading-[0.9] tracking-tight mb-8">
            René<br />Kühn
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-gold" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
              Finanzcoaching · Unternehmensberatung · Buchhaltung
            </p>
          </div>

          <p className="text-gray-400 text-sm leading-loose mb-12 max-w-sm">
            Effizienz schaffen. Wachstum ermöglichen. Vertrauen aufbauen.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#dienstleistungen"
              className="inline-block bg-gold text-black text-[10px] uppercase tracking-[0.3em] px-8 py-3.5 hover:bg-gold-light transition-colors duration-300 font-medium"
            >
              Leistungen
            </a>
            <a
              href="#kontakt"
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              Kontakt <span className="text-gold">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-gray-500 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      {/* Top-right logo mark */}
      <div className="absolute top-24 right-8 md:right-16 z-10">
        <div className="relative h-14 w-14 md:h-16 md:w-16 opacity-80 hover:opacity-100 transition-opacity">
          <Image src="/logo.jpeg" alt="René Kühn" fill className="object-contain" sizes="64px" />
        </div>
      </div>
    </section>
  );
}

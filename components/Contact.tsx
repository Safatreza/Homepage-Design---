import Image from "next/image";

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-dark-section overflow-hidden py-32 px-8 md:px-20">
      {/* Faint logo watermark — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 opacity-[0.04] pointer-events-none select-none">
        <Image src="/logo.jpeg" alt="" fill className="object-contain" sizes="384px" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          {/* Left: dramatic heading */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8">Kontakt</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Lassen Sie<br />uns reden.
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sie haben Fragen oder möchten ein unverbindliches Erstgespräch vereinbaren?
              Ich melde mich innerhalb von 24 Stunden.
            </p>
          </div>

          {/* Right: contact details */}
          <div className="flex flex-col gap-8">
            <div className="group">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gold mb-2">E-Mail</p>
              <a
                href="mailto:rene@unternehmensberatung-kühn.de"
                className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300 break-all"
              >
                rene@unternehmensberatung-kühn.de
              </a>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="group">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gold mb-2">Telefon</p>
              <a
                href="tel:+498912345678"
                className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300"
              >
                +49 89 12345678
              </a>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="group">
              <p className="text-[9px] uppercase tracking-[0.4em] text-gold mb-2">Standort</p>
              <p className="text-white text-base">München, Deutschland</p>
            </div>

            <a
              href="mailto:rene@unternehmensberatung-kühn.de"
              className="inline-block bg-gold text-black text-[10px] uppercase tracking-[0.3em] px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-medium self-start mt-4"
            >
              Nachricht senden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

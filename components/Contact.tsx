import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-dark-section overflow-hidden py-32 px-8 md:px-20">
      {/* Faint logo watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-[0.035] pointer-events-none select-none">
        <Image src="/logo.jpeg" alt="" fill className="object-contain" sizes="448px" />
      </div>

      {/* Thin gold vertical accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1.5px] bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          {/* Left: dramatic heading */}
          <AnimateIn direction="left">
            <p className="text-[9px] uppercase tracking-[0.55em] text-gold mb-8">Kontakt</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-8 tracking-tight">
              Lassen Sie<br />uns reden.
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Sie haben Fragen oder möchten ein unverbindliches Erstgespräch vereinbaren?
              Ich melde mich innerhalb von 24 Stunden.
            </p>
          </AnimateIn>

          {/* Right: contact details */}
          <AnimateIn direction="right" delay={150}>
            <div className="flex flex-col gap-8">
              <div className="group">
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">E-Mail</p>
                <a
                  href="mailto:rene@unternehmensberatung-kühn.de"
                  className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300 break-all relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  rene@unternehmensberatung-kühn.de
                </a>
              </div>

              <div className="w-full h-px bg-white/[0.07]" />

              <div className="group">
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">Telefon</p>
                <a
                  href="tel:+498912345678"
                  className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  +49 89 12345678
                </a>
              </div>

              <div className="w-full h-px bg-white/[0.07]" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">Standort</p>
                <p className="text-white text-base">München, Deutschland</p>
              </div>

              <a
                href="mailto:rene@unternehmensberatung-kühn.de"
                className="group inline-block bg-gold text-black text-[9px] uppercase tracking-[0.35em] px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-semibold self-start mt-4 flex items-center gap-3"
              >
                Nachricht senden
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

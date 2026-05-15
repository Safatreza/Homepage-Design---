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
              {/* E-Mail */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">E-Mail</p>
                <a
                  href="mailto:info@unternehmensberater-kühn.de"
                  className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300 break-all relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  info@unternehmensberater-kühn.de
                </a>
              </div>

              <div className="w-full h-px bg-white/[0.07]" />

              {/* Telefon */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">Telefon</p>
                <a
                  href="tel:+491637002274"
                  className="text-white text-base md:text-lg hover:text-gold transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  +49 163 7002274
                </a>
              </div>

              <div className="w-full h-px bg-white/[0.07]" />

              {/* Standort — links to Google Maps for Guldeinstraße */}
              <div>
                <p className="text-[8px] uppercase tracking-[0.5em] text-gold mb-2">Standort</p>
                <a
                  href="https://maps.google.com/maps?q=Guldeinstraße,+Pasing,+München,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  Pasing, Laim, Deutschland
                  {/* Map pin icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors duration-300 group-hover:translate-y-[-1px] transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </a>
                <p className="text-gray-600 text-xs mt-1">Guldeinstraße, München</p>
              </div>

              {/* CTA button */}
              <a
                href="mailto:info@unternehmensberater-kühn.de"
                className="group inline-flex items-center gap-3 bg-gold text-black text-[9px] uppercase tracking-[0.35em] px-10 py-4 hover:bg-gold-light transition-colors duration-300 font-semibold self-start mt-4"
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

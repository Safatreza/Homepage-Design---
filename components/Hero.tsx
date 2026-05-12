import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Real background image */}
        <Image
          src="/background.jpeg"
          alt="René Kühn Unternehmensberatung"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Real logo */}
          <div className="flex justify-center mb-8">
            <div className="relative h-28 w-28 md:h-36 md:w-36">
              <Image
                src="/logo.jpeg"
                alt="René Kühn Logo"
                fill
                priority
                className="object-contain"
                sizes="144px"
              />
            </div>
          </div>

          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold mb-3 font-sans">
            Strategische Beratung
          </p>

          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest mb-4">
            René Kühn
          </h1>

          <div className="w-16 h-px bg-gold mx-auto mb-6" />

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Finanzcoaching · Unternehmensberatung · Buchhaltungsservice
          </p>

          <a
            href="#dienstleistungen"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-sm uppercase tracking-widest px-8 py-3"
          >
            Mehr erfahren
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gold/50" />
        </div>
      </section>

      {/* Welcome strip */}
      <section className="bg-dark-section py-6 px-6 text-center border-y border-white/10">
        <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase">
          Willkommen bei{" "}
          <a href="#dienstleistungen" className="text-gold hover:text-gold-light transition-colors">
            Kühn Unternehmensberatung
          </a>
        </p>
      </section>
    </>
  );
}

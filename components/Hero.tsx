import LogoIcon from "./LogoIcon";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-16"
      >
        {/* Background overlay gradient (mimics dark photo) */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-dark-bg to-neutral-800 opacity-90" />

        {/* Filler background image placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(60,50,30,0.4)_0%,_rgba(10,10,10,0.95)_70%)]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Large logo graphic in hero */}
          <div className="flex justify-center mb-6">
            <LogoIcon className="h-24 w-24 md:h-32 md:w-32" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            Strategische Beratung
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-8">
            Strategien zur Optimierung und Effizienzsteigerung
          </p>

          <p className="font-serif text-5xl md:text-7xl text-gold tracking-widest">
            René Kühn
          </p>
        </div>
      </section>

      {/* Welcome strip */}
      <section className="bg-light-bg py-8 px-6 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-1">
          Willkommen bei Kühn Unternehmensberatung
        </p>
        <a
          href="#dienstleistungen"
          className="text-testimonial-blue text-sm hover:underline"
        >
          Unternehmensberatung
        </a>
      </section>
    </>
  );
}

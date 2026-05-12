export default function Contact() {
  return (
    <section id="kontakt" className="bg-dark-bg py-24 px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Kontakt</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Lassen Sie uns sprechen
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">
          Sie haben Fragen oder möchten ein unverbindliches Erstgespräch vereinbaren?
          Ich freue mich auf Ihre Nachricht.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-dark-section border border-white/10 p-6 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-gold">E-Mail</p>
            <a
              href="mailto:rene@unternehmensberatung-kühn.de"
              className="text-white text-sm hover:text-gold transition-colors break-all"
            >
              rene@unternehmensberatung-kühn.de
            </a>
          </div>

          <div className="bg-dark-section border border-white/10 p-6 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-gold">Telefon</p>
            <a
              href="tel:+498912345678"
              className="text-white text-sm hover:text-gold transition-colors"
            >
              +49 89 12345678
            </a>
          </div>
        </div>

        <a
          href="mailto:rene@unternehmensberatung-kühn.de"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-xs uppercase tracking-widest px-10 py-4 mx-auto"
        >
          Nachricht senden
        </a>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="bg-dark-section py-20 px-6 text-center">
      <div className="max-w-md mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gold tracking-wide">
          kontaktiere uns
        </h2>

        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm">E-Mail</p>
          <a
            href="mailto:rene@unternehmensberatung-kühn.de"
            className="text-white text-sm hover:text-gold transition-colors"
          >
            rene@unternehmensberatung-kühn.de
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-sm">Telefon</p>
          <a
            href="tel:+498912345678"
            className="text-white text-sm hover:text-gold transition-colors"
          >
            +49 89 12345678
          </a>
        </div>
      </div>
    </section>
  );
}

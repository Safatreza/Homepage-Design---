const services = [
  {
    num: "01",
    title: "Finanzcoaching",
    subtitle: "Der Weg zur finanziellen Freiheit.",
    lead: "Geld ist mehr als Zahlen – es ist ein Werkzeug. Im Finanzcoaching entwickeln wir gemeinsam ein gesundes Money-Mindset, strukturieren Ihre Finanzen und entwerfen langfristige Anlagestrategien, die wirklich zu Ihnen passen.",
    detail: "Von Budgetplanung über Altersvorsorge bis hin zu konkreten Investmentstrategien: ich begleite Sie auf dem Weg zu finanzieller Souveränität.",
  },
  {
    num: "02",
    title: "Unternehmensberatung",
    subtitle: "Strategie, Wachstum, Klarheit.",
    lead: "Vom Start-up bis zum Mittelstand: ich analysiere Ihre Prozesse, identifiziere Wachstumspotenziale und entwickle klare Roadmaps — mit besonderem Augenmerk auf digitale Prozessoptimierung.",
    detail: "Als strategischer Sparringspartner behalte ich den Blick für das große Ganze und führe Sie sicher durch jeden Veränderungsprozess.",
  },
  {
    num: "03",
    title: "Buchhaltungsservice",
    subtitle: "Mehr Zeit für Ihr Kerngeschäft.",
    lead: "Ich übernehme die strukturierte Vorbereitung Ihrer Buch- und Lohnbuchhaltungsunterlagen für den Steuerberater — mit digitalisierten Prozessen, absoluter Sorgfalt und voller Verlässlichkeit.",
    detail: "So haben Sie den Rücken frei für das, was wirklich zählt: Ihr Unternehmen voranzubringen.",
  },
];

export default function Services() {
  return (
    <section id="dienstleistungen" className="bg-dark-bg py-28 px-8 md:px-20">
      {/* Section label */}
      <div className="max-w-5xl mx-auto mb-20 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4">Leistungen</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Was ich<br />für Sie tue.
          </h2>
        </div>
        <div className="hidden md:block w-1/3 h-px bg-white/10 mb-3" />
      </div>

      {/* Numbered editorial rows */}
      <div className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <div
            key={svc.num}
            className={`group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr] gap-x-8 gap-y-4 py-14 ${
              i < services.length - 1 ? "border-b border-white/10" : ""
            } hover:border-gold/20 transition-colors duration-500`}
          >
            {/* Number */}
            <span className="font-serif text-5xl md:text-6xl text-white/10 group-hover:text-gold/20 transition-colors duration-500 leading-none pt-1 select-none">
              {svc.num}
            </span>

            {/* Left text */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight group-hover:text-gold transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-gold text-xs italic">{svc.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {svc.lead}
              </p>
            </div>

            {/* Right text — hidden on mobile */}
            <div className="hidden md:flex flex-col justify-between">
              <p className="text-gray-500 text-sm leading-relaxed mt-10">
                {svc.detail}
              </p>
              <a
                href="#kontakt"
                className="self-start text-[10px] uppercase tracking-[0.4em] text-gold hover:text-gold-light transition-colors mt-6 flex items-center gap-2"
              >
                Anfragen <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          Alle Leistungen auch als individuelles Paket buchbar.
        </p>
        <a
          href="#kontakt"
          className="text-[10px] uppercase tracking-[0.4em] border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-8 py-3"
        >
          Gespräch vereinbaren
        </a>
      </div>
    </section>
  );
}

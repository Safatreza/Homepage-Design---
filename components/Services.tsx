const services = [
  {
    id: "finanzcoaching",
    icon: "💰",
    title: "Finanzcoaching",
    subtitle: "Der Weg zur finanziellen Freiheit und Klarheit.",
    body: [
      "Geld ist mehr als nur Zahlen auf Ihrem Konto – es ist ein Werkzeug für die Lebensgestaltung und die Altersvorsorge.",
      "Im Finanzcoaching unterstütze ich Sie dabei, ein gesundes Money-Mindset zu entwickeln, die privaten Finanzen zu strukturieren und langfristige Strategien für den Vermögensaufbau zu entwerfen.",
      "Wir schauen uns zusammen verschiedene Möglichkeiten und Anlagestrategien an, die zu Ihren Bedürfnissen passen und schaffen ein Fundament, auf dem Sie sicher in die Zukunft blicken können.",
    ],
  },
  {
    id: "unternehmensberatung",
    icon: "📈",
    title: "Unternehmensberatung",
    subtitle: "Strategie, Wachstum und nachhaltiger Erfolg.",
    body: [
      "Vom Start-up bis zum etablierten Mittelstand: Ich begleite Sie bei der Optimierung Ihrer Geschäftsprozesse. Gemeinsam analysieren wir Ist-Zustände, identifizieren Wachstumspotenziale und entwickeln klare Roadmaps für Ihre Visionen mit dem Augenmerk auf eine digitale Prozessoptimierung.",
      "Ob Neuausrichtung oder Skalierung – ich bin Ihr strategischer Sparringspartner, der den Blick für das große Ganze behält und Sie sicher durch Veränderungsprozesse führt.",
    ],
  },
  {
    id: "buchhaltungsservice",
    icon: "🗂️",
    title: "Buchhaltungsservice",
    subtitle: "Mehr Zeit für das Kerngeschäft.",
    body: [
      "Belege sortieren und Fristen im Blick behalten können im Alltag schnell zur Belastung werden.",
      "Ich übernehme für Sie die strukturierte Vorbereitung Ihrer Buch-/Lohnbuchhaltungsunterlagen für den Steuerberater.",
      "Mit digitalisierten Prozessen und absoluter Sorgfalt sorge ich dafür, dass Ihr Back-Office effizient und reibungslos läuft – so haben Sie den Rücken frei für Ihr Kerngeschäft.",
    ],
  },
];

export default function Services() {
  return (
    <section id="dienstleistungen" className="bg-dark-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Was ich anbiete</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Unsere Dienstleistungen
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group bg-dark-card border border-white/10 hover:border-gold/40 transition-all duration-300 p-8 flex flex-col gap-4"
            >
              <div className="text-3xl">{svc.icon}</div>

              <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                {svc.title}
              </h3>

              <p className="text-gold text-xs italic leading-relaxed">{svc.subtitle}</p>

              <div className="w-8 h-px bg-white/20 group-hover:bg-gold/50 transition-colors" />

              <div className="flex flex-col gap-3">
                {svc.body.map((para, j) => (
                  <p key={j} className="text-gray-400 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <a
                href="#kontakt"
                className="mt-auto pt-4 text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors self-start"
              >
                Anfragen →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import ImagePlaceholder from "./ImagePlaceholder";

const services = [
  {
    id: "finanzcoaching",
    title: "Finanzcoaching",
    subtitle: "Der Weg zur finanziellen Freiheit und Klarheit.",
    body: [
      "Geld ist mehr als nur Zahlen auf Ihrem Konto – es ist ein Werkzeug für die Lebensgestaltung und die Altersvorsorge.",
      "Im Finanzcoaching unterstütze ich Sie dabei, ein gesundes Money-Mindset zu entwickeln, die privaten Finanzen zu strukturieren und langfristige Strategien für den Vermögensaufbau zu entwerfen.",
      "Wir schauen uns zusammen verschiedene Möglichkeiten und Anlagestrategien an, die zu Ihren Bedürfnissen passen und schaffen ein Fundament, auf dem Sie sicher in die Zukunft blicken können.",
    ],
    imageRight: false,
  },
  {
    id: "unternehmensberatung",
    title: "Unternehmensberatung",
    subtitle: "Strategie, Wachstum und nachhaltiger Erfolg.",
    body: [
      "Vom Start-up bis zum etablierten Mittelstand: Ich begleite Sie bei der Optimierung Ihrer Geschäftsprozesse. Gemeinsam analysieren wir Ist-Zustände, identifizieren Wachstumspotenziale und entwickeln klare Roadmaps für Ihre Visionen mit dem Augenmerk auf eine digitale Prozessoptimierung.",
      "Ob Neuausrichtung oder Skalierung – ich bin Ihr strategischer Sparringspartner, der den Blick für das große Ganze behält und Sie sicher durch Veränderungsprozesse führt.",
    ],
    imageRight: true,
  },
  {
    id: "buchhaltungsservice",
    title: "Buchhaltungsservice",
    subtitle: "Mehr Zeit für das Kerngeschäft.",
    body: [
      "Belege sortieren und Fristen im Blick behalten können im Alltag schnell zur Belastung werden.",
      "Ich übernehme für Sie die strukturierte Vorbereitung Ihrer Buch-/Lohnbuchhaltungsunterlagen für den Steuerberater.",
      "Mit digitalisierten Prozessen und absoluter Sorgfalt sorge ich dafür, dass Ihr Back-Office effizient und reibungslos läuft.",
      "So haben Sie den Rücken frei und können sich auf Ihr Kerngeschäft konzentrieren.",
    ],
    imageRight: false,
  },
];

export default function Services() {
  return (
    <section id="dienstleistungen" className="bg-dark-bg py-20 px-6">
      {/* Section title */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
          Unsere Dienstleistungen
        </h2>
        <div className="section-divider" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-0">
        {services.map((svc, i) => (
          <div
            key={svc.id}
            className={`flex flex-col md:flex-row gap-8 py-12 ${
              i < services.length - 1 ? "border-b border-white/10" : ""
            } ${svc.id === "buchhaltungsservice" ? "bg-dark-section -mx-6 px-6 md:px-12 rounded" : ""}`}
          >
            {/* Image — left on imageRight=false, right on imageRight=true */}
            {!svc.imageRight && (
              <div className="md:w-1/2 flex-shrink-0">
                <ImagePlaceholder className="w-full aspect-[4/3]" />
              </div>
            )}

            {/* Text */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {svc.title}
              </h3>
              <p className="text-gold text-sm mb-4 italic">{svc.subtitle}</p>
              <div className="flex flex-col gap-3">
                {svc.body.map((para, j) => (
                  <p key={j} className="text-gray-300 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Image — right side */}
            {svc.imageRight && (
              <div className="md:w-1/2 flex-shrink-0">
                <ImagePlaceholder className="w-full aspect-[4/3]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

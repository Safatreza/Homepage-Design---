import AnimateIn from "./AnimateIn";

const services = [
  {
    num: "01",
    title: "Finanzcoaching",
    subtitle: "Der Weg zur finanziellen Freiheit und Klarheit.",
    lead: "Geld ist mehr als nur Zahlen auf Ihrem Konto – es ist ein Werkzeug für die Lebensgestaltung und die Altersvorsorge.",
    detail:
      "Im Finanzcoaching unterstütze ich Sie dabei, ein gesundes Money-Mindset zu entwickeln, die privaten Finanzen zu strukturieren und langfristige Strategien für den Vermögensaufbau zu entwerfen. Wir schauen uns zusammen verschiedene Möglichkeiten und Anlagestrategien an, die zu Ihren Bedürfnissen passen und schaffen ein Fundament, auf dem Sie sicher in die Zukunft blicken können.",
  },
  {
    num: "02",
    title: "Unternehmensberatung",
    subtitle: "Strategie, Wachstum und nachhaltiger Erfolg.",
    lead: "Vom Start-up bis zum etablierten Mittelstand: Ich begleite Sie bei der Optimierung Ihrer Geschäftsprozesse. Gemeinsam analysieren wir Ist-Zustände, identifizieren Wachstumspotenziale und entwickeln klare Roadmaps für Ihre Visionen mit dem Augenmerk auf eine digitale Prozessoptimierung.",
    detail:
      "Ob Neuausrichtung oder Skalierung – ich bin Ihr strategischer Sparringspartner, der den Blick für das große Ganze behält und Sie sicher durch Veränderungsprozesse führt.",
  },
  {
    num: "03",
    title: "Buch-/Lohnbuchhaltungsservice & Büroorganisation",
    subtitle: "Mehr Zeit für das Kerngeschäft.",
    lead: "Belege sortieren und Fristen im Blick behalten, können im Alltag schnell zur Belastung werden. Ich übernehme für Sie die strukturierte Vorbereitung Ihrer Buch-/Lohnbuchhaltungsunterlagen für den Steuerberater.",
    detail:
      "Mit digitalisierten Prozessen und absoluter Sorgfalt sorge ich dafür, dass Ihr Back-Office effizient und reibungslos läuft. So haben Sie den Rücken frei und können sich auf Ihr Kerngeschäft konzentrieren.",
  },
];

export default function Services() {
  return (
    <section id="dienstleistungen" className="bg-dark-bg py-28 px-8 md:px-20">
      {/* Section header */}
      <AnimateIn>
        <div className="max-w-5xl mx-auto mb-20 flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.55em] text-gold mb-4">Leistungen</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Was ich<br />für Sie tue.
            </h2>
          </div>
          <div className="hidden md:block w-1/3 h-px bg-white/10 mb-3" />
        </div>
      </AnimateIn>

      {/* Numbered editorial rows */}
      <div className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <AnimateIn key={svc.num} delay={i * 120}>
            <div
              className={`group relative grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr] gap-x-8 gap-y-4 py-14 ${
                i < services.length - 1 ? "border-b border-white/10" : ""
              } transition-all duration-500`}
            >
              {/* Animated left border — slides in on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-[1.5px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Subtle background on hover */}
              <div className="absolute inset-0 -mx-4 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              {/* Number */}
              <span className="relative font-serif text-5xl md:text-6xl text-white/10 group-hover:text-gold/25 transition-colors duration-500 leading-none pt-1 select-none">
                {svc.num}
              </span>

              {/* Left text */}
              <div className="relative flex flex-col gap-3">
                <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight group-hover:text-gold transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-gold text-xs italic opacity-80">{svc.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md mt-1">
                  {svc.lead}
                </p>
              </div>

              {/* Right text — desktop only */}
              <div className="relative hidden md:flex flex-col justify-center">
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                  {svc.detail}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Bottom CTA — hidden for now, may re-enable in future */}
      <AnimateIn delay={360}>
        <div className="hidden max-w-5xl mx-auto mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-sm">
            Alle Leistungen auch als individuelles Paket buchbar.
          </p>
          <a
            href="#kontakt"
            className="group text-[9px] uppercase tracking-[0.45em] border border-gold/60 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 px-8 py-3 flex items-center gap-3"
          >
            Gespräch vereinbaren
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}

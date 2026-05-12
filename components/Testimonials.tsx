const testimonials = [
  {
    text: "René hat unsere Unternehmensfinanzen vollständig neu strukturiert. Seitdem haben wir einen klaren Überblick und können viel gezielter investieren.",
    author: "Markus T.",
    role: "Geschäftsführer",
  },
  {
    text: "Das Finanzcoaching hat meine Sichtweise auf Geld grundlegend verändert. Ich fühle mich heute viel sicherer bei meinen Anlageentscheidungen.",
    author: "Sandra K.",
    role: "Unternehmerin",
  },
  {
    text: "Dank des Buchhaltungsservices spare ich jeden Monat wertvolle Stunden. Alles läuft reibungslos und mein Steuerberater ist begeistert.",
    author: "Thomas R.",
    role: "Freiberufler",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark-bg py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Referenzen</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Was Kunden sagen
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-dark-section border border-white/10 p-8 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <span className="text-gold text-4xl font-serif leading-none">&ldquo;</span>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {t.text}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white text-sm font-medium">{t.author}</p>
                <p className="text-gold text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

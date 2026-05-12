const testimonials = [
  {
    text: "René hat unsere Unternehmensfinanzen vollständig neu strukturiert. Seitdem haben wir einen klaren Überblick und können viel gezielter investieren.",
    author: "Markus T.",
    role: "Geschäftsführer, München",
  },
  {
    text: "Das Finanzcoaching hat meine Sichtweise auf Geld grundlegend verändert. Ich fühle mich heute viel sicherer bei meinen Anlageentscheidungen.",
    author: "Sandra K.",
    role: "Unternehmerin",
  },
  {
    text: "Dank des Buchhaltungsservices spare ich jeden Monat wertvolle Stunden. Alles läuft reibungslos — mein Steuerberater ist begeistert.",
    author: "Thomas R.",
    role: "Freiberufler",
  },
];

export default function Testimonials() {
  return (
    <section id="referenzen" className="bg-dark-bg py-28 px-8 md:px-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4">Referenzen</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Was Kunden<br />über mich sagen.
            </h2>
          </div>
          <div className="hidden md:block w-1/4 h-px bg-white/10 mb-3" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-dark-bg p-10 flex flex-col gap-6 hover:bg-dark-section transition-colors duration-300"
            >
              <span className="font-serif text-6xl text-gold/30 leading-none select-none">"</span>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-1 h-6 bg-gold" />
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

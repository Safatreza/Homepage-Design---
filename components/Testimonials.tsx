import AnimateIn from "./AnimateIn";

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
    <section id="referenzen" className="bg-dark-bg py-28 px-8 md:px-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimateIn>
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="text-[9px] uppercase tracking-[0.55em] text-gold mb-4">Referenzen</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Was Kunden<br />über mich sagen.
              </h2>
            </div>
            <div className="hidden md:block w-1/4 h-px bg-white/10 mb-3" />
          </div>
        </AnimateIn>

        {/* Testimonial cards — separated by 1 px borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div className="group bg-dark-bg p-10 flex flex-col gap-6 hover:bg-[#161616] transition-colors duration-400 h-full">
                {/* Large quote mark */}
                <span className="font-serif text-7xl text-gold/20 group-hover:text-gold/35 transition-colors duration-500 leading-none select-none -mb-2">
                  "
                </span>

                <p className="text-gray-400 text-sm leading-[1.85] flex-1 group-hover:text-gray-300 transition-colors duration-300">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                  <div className="w-1 h-6 bg-gold shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{t.author}</p>
                    <p className="text-gray-600 text-[10px] tracking-wide mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import ImagePlaceholder from "./ImagePlaceholder";

export default function About() {
  return (
    <section id="ueber-mich" className="bg-dark-section py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Portrait image placeholder */}
        <div className="md:w-2/5 flex-shrink-0">
          <ImagePlaceholder className="w-full aspect-[3/4]" label="Portraitfoto folgt" />
        </div>

        {/* Text */}
        <div className="md:w-3/5 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Mein Anspruch, mein Ziel –{" "}
            <span className="text-gold">Zusammenarbeit auf Augenhöhe</span>
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Finanzen und effiziente Prozesse sind meine Leidenschaft, aber der Mensch
            hinter den Zahlen steht für mich immer im Mittelpunkt. Als gelernter
            Steuerfachangestellter kenne ich die Praxis im Steuerbüro genauso gut wie
            die Herausforderungen der freien Wirtschaft und weiß genau, wo im
            Geschäftsalltag die Hürden liegen.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Diese jahrelange Erfahrung nutze ich heute, um Ihnen bei Controlling,
            Digitalisierung und Finanzanlagen den Rücken freizuhalten. Ich teile mein
            Wissen nicht nur – ich mache es zu Ihrem Fundament für nachhaltigen Erfolg.
          </p>

          <a
            href="#kontakt"
            className="text-gold text-sm hover:text-gold-light transition-colors underline underline-offset-4 self-start"
          >
            Jetzt Beratungsgespräch vereinbaren &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

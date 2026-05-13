import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-mich" className="bg-dark-section">
      <div className="max-w-none grid grid-cols-1 md:grid-cols-2">
        {/* Image panel — full bleed, no padding */}
        <div className="relative min-h-[400px] md:min-h-[600px] overflow-hidden">
          <Image
            src="/background.jpeg"
            alt="René Kühn"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* Subtle dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-section/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-section/50 to-transparent" />

          {/* Floating gold frame inset */}
          <div className="absolute inset-6 border border-gold/20 pointer-events-none" />
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8">Über mich</p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            Mein Anspruch,<br />
            mein Ziel –{" "}
            <span className="text-gold">Zusammenarbeit<br />auf Augenhöhe</span>
          </h2>

          <div className="w-10 h-px bg-gold mb-8" />

          {/* Small portrait photo */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden border border-gold/30">
              <Image
                src="/portrait.jpeg"
                alt="René Kühn"
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">René Kühn</p>
              <p className="text-gray-500 text-xs mt-0.5">Unternehmensberater</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Finanzen und effiziente Prozesse sind meine Leidenschaft, aber der Mensch
            hinter den Zahlen steht für mich immer im Mittelpunkt. Als gelernter
            Steuerfachangestellter kenne ich die Praxis im Steuerbüro genauso gut wie
            die Herausforderungen der freien Wirtschaft und weiß genau, wo im
            Geschäftsalltag die Hürden liegen. Diese jahrelange Erfahrung nutze ich
            heute, um Ihnen bei Controlling, Digitalisierung und Finanzanlagen den
            Rücken freizuhalten. Ich teile mein Wissen nicht nur – ich mache es zu
            Ihrem Fundament für nachhaltigen Erfolg.
          </p>

          <a
            href="#kontakt"
            className="self-start flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold hover:text-gold-light transition-colors"
          >
            Beratungsgespräch vereinbaren <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

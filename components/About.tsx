import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-mich" className="bg-dark-section py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Logo used as brand visual */}
        <div className="md:w-2/5 flex-shrink-0 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/30 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-52 md:h-52">
                <Image
                  src="/logo.jpeg"
                  alt="René Kühn"
                  fill
                  className="object-contain"
                  sizes="208px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:w-3/5 flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Über mich</p>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Zusammenarbeit auf Augenhöhe –{" "}
            <span className="text-gold">Ihr Erfolg ist mein Maßstab</span>
          </h2>

          <div className="w-12 h-px bg-gold/50" />

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
            className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors self-start mt-2"
          >
            Jetzt Beratungsgespräch vereinbaren
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

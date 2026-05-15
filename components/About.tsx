import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="ueber-mich" className="bg-dark-section">
      <div className="max-w-none grid grid-cols-1 md:grid-cols-2">
        {/* Image panel — full bleed */}
        <AnimateIn direction="left" className="relative min-h-[420px] md:min-h-[620px] overflow-hidden">
          <Image
            src="/background.jpeg"
            alt="René Kühn"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-section/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-section/60 to-transparent" />
          {/* Gold inset frame */}
          <div className="absolute inset-5 border border-gold/20 pointer-events-none" />
          {/* Corner accents */}
          <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-gold/50" />
          <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-gold/50" />
        </AnimateIn>

        {/* Text panel */}
        <AnimateIn direction="right" className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 bg-dark-section">
          <p className="text-[9px] uppercase tracking-[0.55em] text-gold mb-8">Über mich</p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-8">
            Mein Anspruch,<br />
            mein Ziel –{" "}
            <span className="text-gold">Zusammenarbeit<br />auf Augenhöhe</span>
          </h2>

          <div className="w-10 h-px bg-gold mb-8" />

          {/* Small portrait — expands on hover */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative group/portrait cursor-pointer shrink-0">
              {/* Small circle */}
              <div className="relative h-[72px] w-[72px] rounded-full overflow-hidden ring-1 ring-gold/30">
                <Image
                  src="/portrait.jpeg"
                  alt="René Kühn"
                  fill
                  className="object-cover object-top"
                  sizes="72px"
                />
              </div>
              {/* Expanded portrait — floats above on hover */}
              <div className="absolute bottom-[calc(100%+10px)] left-0 z-50 w-0 h-0 group-hover/portrait:w-44 group-hover/portrait:h-56 overflow-hidden rounded shadow-2xl ring-1 ring-gold/40 transition-all duration-500 ease-out origin-bottom-left">
                <Image
                  src="/portrait.jpeg"
                  alt="René Kühn"
                  fill
                  className="object-cover object-top"
                  sizes="176px"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-medium tracking-wide">René Kühn</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-1">Unternehmensberater</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-[1.85] mb-10">
            Finanzen und effiziente Prozesse sind meine Leidenschaft, aber der Mensch
            hinter den Zahlen steht für mich immer im Mittelpunkt. Als gelernter
            Steuerfachangestellter kenne ich die Praxis im Steuerbüro genauso gut wie
            die Herausforderungen der freien Wirtschaft und weiß genau, wo im
            Geschäftsalltag die Hürden liegen. Diese jahrelange Erfahrung nutze ich
            heute, um Ihnen bei Controlling, Digitalisierung und Finanzanlagen den
            Rücken freizuhalten. Ich teile mein Wissen nicht nur – ich mache es zu
            Ihrem Fundament für nachhaltigen Erfolg.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 mb-10 py-8 border-y border-white/10">
            {[
              { label: "Jahre Erfahrung", value: "10+" },
              { label: "Mandate", value: "150+" },
              { label: "Zufriedenheit", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="font-serif text-2xl text-gold mb-1 group-hover:scale-105 transition-transform duration-300 inline-block">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase tracking-widest text-gray-600 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="self-start flex items-center gap-3 text-[9px] uppercase tracking-[0.45em] text-gold hover:text-gold-light transition-colors group"
          >
            Beratungsgespräch vereinbaren
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}

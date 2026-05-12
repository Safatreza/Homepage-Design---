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
            Der Mensch<br />
            <span className="text-gold">hinter den Zahlen</span><br />
            zählt.
          </h2>

          <div className="w-10 h-px bg-gold mb-8" />

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Als gelernter Steuerfachangestellter kenne ich die Praxis im Steuerbüro
            genauso gut wie die Herausforderungen der freien Wirtschaft. Ich weiß
            genau, wo im Geschäftsalltag die Hürden liegen — und wie man sie überwindet.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Diese jahrelange Erfahrung nutze ich, um Ihnen bei Controlling,
            Digitalisierung und Finanzanlagen den Rücken freizuhalten. Mein
            Wissen wird Ihr Fundament für nachhaltigen Erfolg.
          </p>

          {/* Values strip */}
          <div className="grid grid-cols-3 gap-4 mb-10 py-8 border-y border-white/10">
            {[
              { label: "Erfahrung", value: "10+" },
              { label: "Mandate", value: "150+" },
              { label: "Zufriedenheit", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl text-gold mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

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

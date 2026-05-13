import AnimateIn from "./AnimateIn";

export default function QuoteSection() {
  return (
    <section className="bg-dark-section py-28 px-8 md:px-20 border-y border-white/[0.06]">
      <AnimateIn direction="none">
        <div className="max-w-3xl mx-auto text-center">
          {/* Large decorative quote mark */}
          <span className="font-serif text-[7rem] md:text-[10rem] text-gold/15 leading-none select-none block -mb-6 md:-mb-10">
            "
          </span>

          <p className="font-serif text-2xl md:text-[2.6rem] text-white/85 italic leading-snug tracking-tight">
            Der Mensch hinter den Zahlen<br />
            steht immer im Mittelpunkt.
          </p>

          <div className="flex items-center justify-center gap-5 mt-10">
            <div className="h-px w-10 bg-gold/50" />
            <p className="text-gold text-[9px] uppercase tracking-[0.5em]">René Kühn</p>
            <div className="h-px w-10 bg-gold/50" />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}

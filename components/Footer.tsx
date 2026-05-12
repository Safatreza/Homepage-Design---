import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/10 px-8 md:px-20 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-7">
              <Image src="/logo.jpeg" alt="René Kühn" fill className="object-contain" sizes="28px" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-white text-sm tracking-wider">René Kühn</span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-gray-600 mt-0.5">Unternehmensberatung</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {[
              { label: "Leistungen", href: "#dienstleistungen" },
              { label: "Über mich", href: "#ueber-mich" },
              { label: "Kontakt", href: "#kontakt" },
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[9px] uppercase tracking-[0.35em] text-gray-600 hover:text-gray-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-[10px] tracking-wider">
            © 2026 Unternehmensberatung Kühn · Alle Rechte vorbehalten
          </p>
          <p className="text-gray-700 text-[10px] tracking-wider">
            München, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}

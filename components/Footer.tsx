import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-section border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/logo.jpeg" alt="René Kühn" fill className="object-contain" sizes="32px" />
            </div>
            <span className="font-serif text-white text-sm tracking-widest">René Kühn</span>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="/impressum" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-600 text-xs text-center tracking-wide">
            © 2026 Unternehmensberatung Kühn · Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}

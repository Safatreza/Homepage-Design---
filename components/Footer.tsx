export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/10 px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-6 items-center justify-between mb-4">
          <div className="flex gap-6">
            <a href="/impressum" className="text-gray-400 text-sm hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-400 text-sm hover:text-white transition-colors">
              Datenschutzinformation
            </a>
          </div>
        </div>
        <hr className="border-white/10 mb-4" />
        <p className="text-gray-500 text-xs text-center">
          © [2026] [Unternehmensberatung Kühn]. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

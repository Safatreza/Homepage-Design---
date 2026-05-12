"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Leistungen", href: "#dienstleistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-bg/95 backdrop-blur-md border-b border-gold/20 shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-none px-8 md:px-20 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src="/logo.jpeg"
              alt="René Kühn"
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-white text-sm tracking-wider group-hover:text-gold transition-colors duration-300">
              René Kühn
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500 mt-0.5">
              Unternehmensberatung
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[10px] uppercase tracking-[0.35em] text-gray-400 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-block border border-gold/60 text-gold text-[9px] uppercase tracking-[0.35em] px-5 py-2.5 hover:bg-gold hover:text-black transition-all duration-300"
        >
          Gespräch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-bg/98 backdrop-blur-md border-t border-white/10 px-8 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="#kontakt"
              className="inline-block border border-gold text-gold text-[9px] uppercase tracking-[0.3em] px-6 py-3 hover:bg-gold hover:text-black transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  nombre: string;
  telefono?: string;
}

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Sellos", href: "#sellos" },
  { label: "Convivencia", href: "#convivencia" },
  { label: "Niveles", href: "#niveles" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ nombre, telefono }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Barra superior — solo desktop */}
      {!scrolled && (
        <div className="hidden lg:block bg-gc-navy text-white/80 text-sm">
          <div className="container-gc flex justify-between items-center py-1.5">
            <span className="font-body">{telefono}</span>
            <span className="font-body text-gc-gold-light">
              Corporación Educacional Filadelfia Garden
            </span>
          </div>
        </div>
      )}

      {/* Barra principal */}
      <div className="container-gc">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Nombre */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-display font-bold transition-colors ${
                scrolled
                  ? "bg-gc-navy text-gc-gold"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              GC
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg lg:text-xl transition-colors ${
                  scrolled ? "text-gc-navy" : "text-white"
                }`}
              >
                {nombre}
              </span>
            </div>
          </a>

          {/* Links — desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-body font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-gc-navy/70 hover:text-gc-navy hover:bg-gc-cream"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#admision" className="btn-primary ml-3 text-sm !py-2">
              Admisión
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gc-navy hover:bg-gc-cream"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-gc py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gc-navy font-body font-medium rounded-lg hover:bg-gc-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#admision"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Admisión 2026
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

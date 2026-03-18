"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  nombre: string;
  telefono?: string;
  variant?: "transparent" | "solid";
}

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Sellos", href: "#sellos" },
  { label: "Convivencia", href: "#convivencia" },
  { label: "Niveles", href: "#niveles" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
  { label: "Documentos", href: "/documentos", external: true },
];

export default function Navbar({ nombre, telefono, variant = "transparent" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDocPage = pathname === "/documentos";

  // En modo solid siempre se comporta como si estuviera scrolled
  const isLight = variant === "solid" || scrolled;

  // En /documentos los anchors deben volver a la onepage
  const resolveHref = (link: { href: string; external?: boolean }) => {
    if (link.external) return link.href;
    if (isDocPage && link.href.startsWith("#")) return `/${link.href}`;
    return link.href;
  };

  const logoHref = isDocPage ? "/" : "#inicio";

  useEffect(() => {
    if (variant === "solid") return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-gc-green"
          : "bg-transparent border-b-2 border-gc-green/40"
      }`}
    >
      {/* Barra superior — solo desktop */}
      {!isLight && (
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
          <a href={logoHref} className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-display font-bold transition-colors ${
                isLight
                  ? "bg-gc-green text-gc-gold"
                  : "bg-gc-green/80 text-gc-gold-light backdrop-blur-sm"
              }`}
            >
              GC
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg lg:text-xl transition-colors ${
                  isLight ? "text-gc-navy" : "text-white"
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
                href={resolveHref(link)}
                className={`px-3 py-2 text-sm font-body font-medium rounded-lg transition-colors ${
                  link.external && pathname === "/documentos"
                    ? isLight
                      ? "text-gc-gold-dark font-semibold hover:bg-gc-green/10"
                      : "text-gc-gold-light font-semibold hover:bg-gc-green/10"
                    : isLight
                    ? "text-gc-navy/70 hover:text-gc-navy hover:bg-gc-green/10"
                    : "text-white/80 hover:text-white hover:bg-gc-green/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={isDocPage ? "/#admision" : "#admision"}
              className="btn-primary ml-3 text-sm !py-2"
            >
              Admisión
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isLight
                ? "text-gc-navy hover:bg-gc-green/10"
                : "text-white hover:bg-gc-green/10"
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
                href={resolveHref(link)}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gc-navy font-body font-medium rounded-lg hover:bg-gc-green/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={isDocPage ? "/#admision" : "#admision"}
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

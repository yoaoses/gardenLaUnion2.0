"use client";

import { useState } from "react";

export interface Documento {
  id: string;
  titulo: string;
  categoria: string;
  url: string;
  descripcion?: string;
}

interface DocumentViewerProps {
  documentos: Documento[];
  categorias: string[];
}

export default function DocumentViewer({ documentos, categorias }: DocumentViewerProps) {
  const [selectedDoc, setSelectedDoc] = useState<Documento>(documentos[0]);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredDocs =
    activeCategory === "Todos"
      ? documentos
      : documentos.filter((d) => d.categoria === activeCategory);

  const handleSelectDoc = (doc: Documento) => {
    setSelectedDoc(doc);
    setSidebarOpen(false); // cerrar nav en mobile al seleccionar
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-80px)] relative">
      {/* Overlay mobile cuando sidebar está abierto */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ─── SIDEBAR IZQUIERDO ─── */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-30 h-full lg:h-auto
          w-80 bg-white border-r border-gc-gray-200
          flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header sidebar */}
        <div className="p-6 border-b border-gc-gray-200 bg-gc-cream">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-bold text-gc-navy text-xl">
              Documentos
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg text-gc-gray-500 hover:bg-gc-gray-100 transition-colors"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm font-body text-gc-gray-500">
            Planes, reglamentos y protocolos
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="p-4 border-b border-gc-gray-200 flex flex-wrap gap-2">
          {["Todos", ...categorias].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-body font-medium rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-gc-navy text-white"
                  : "bg-gc-gray-100 text-gc-gray-700 hover:bg-gc-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de documentos */}
        <div className="flex-1 overflow-y-auto">
          {categorias.map((categoria) => {
            const docsEnCategoria = filteredDocs.filter(
              (d) => d.categoria === categoria
            );
            if (docsEnCategoria.length === 0) return null;

            return (
              <div key={categoria}>
                {activeCategory === "Todos" && (
                  <div className="px-4 pt-4 pb-1">
                    <span className="text-xs font-body font-semibold text-gc-gray-500 uppercase tracking-wider">
                      {categoria}
                    </span>
                  </div>
                )}
                {docsEnCategoria.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelectDoc(doc)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-l-2 ${
                      selectedDoc.id === doc.id
                        ? "bg-gc-gold/10 border-gc-gold"
                        : "border-transparent hover:bg-gc-cream"
                    }`}
                  >
                    {/* Icono PDF */}
                    <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 15.5h7v1h-7v-1zm0-3h7v1h-7v-1zm0-3H11v1H8.5v-1z" />
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-body leading-snug ${
                          selectedDoc.id === doc.id
                            ? "text-gc-navy font-semibold"
                            : "text-gc-gray-700"
                        }`}
                      >
                        {doc.titulo}
                      </p>
                      {doc.descripcion && (
                        <p className="text-xs text-gc-gray-500 mt-0.5 leading-snug">
                          {doc.descripcion}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </aside>

      {/* ─── PANEL DERECHO ─── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gc-gray-200 shadow-sm">
          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gc-navy hover:bg-gc-cream transition-colors flex-shrink-0"
            aria-label="Abrir lista de documentos"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Categoría badge + nombre documento */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex text-xs font-body font-medium px-2 py-0.5 rounded-full bg-gc-navy/10 text-gc-navy">
                {selectedDoc.categoria}
              </span>
              <h1 className="text-sm sm:text-base font-display font-semibold text-gc-navy truncate">
                {selectedDoc.titulo}
              </h1>
            </div>
          </div>

          {/* Botón descargar */}
          <a
            href={selectedDoc.url}
            download
            className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-gc-navy text-white text-sm font-body font-medium rounded-lg hover:bg-gc-navy-light transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Descargar</span>
          </a>
        </div>

        {/* Visor */}
        <div className="flex-1 bg-gc-gray-100">
          {/* Desktop: iframe */}
          <iframe
            key={selectedDoc.id}
            src={selectedDoc.url}
            className="hidden md:block w-full h-full min-h-[calc(100vh-145px)]"
            title={selectedDoc.titulo}
          />

          {/* Mobile: mensaje con botón */}
          <div className="md:hidden flex flex-col items-center justify-center h-full min-h-[calc(100vh-145px)] gap-6 p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-red-50 border-2 border-red-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 15.5h7v1h-7v-1zm0-3h7v1h-7v-1zm0-3H11v1H8.5v-1z" />
              </svg>
            </div>
            <div>
              <p className="font-display font-semibold text-gc-navy text-lg mb-1">
                {selectedDoc.titulo}
              </p>
              <p className="text-sm font-body text-gc-gray-500">
                Los PDFs se visualizan mejor en un navegador de escritorio.
              </p>
            </div>
            <a
              href={selectedDoc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Abrir documento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

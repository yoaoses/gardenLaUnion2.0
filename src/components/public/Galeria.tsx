import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { getConfig } from "@/lib/config";

interface FotoItem {
  id: string;
  url: string;
  eventoNombre: string;
  eventoSlug: string;
  edicionSlug: string;
  fecha: Date;
}

export default async function Galeria() {
  const [config, multimediaFotos] = await Promise.all([
    getConfig(),
    prisma.multimedia.findMany({
      where: {
        tipo: "foto",
        edicion: { estado: "PUBLICADA" },
      },
      orderBy: { edicion: { fecha: "desc" } },
      take: 12,
      include: {
        edicion: {
          select: {
            slug: true,
            fecha: true,
            evento: { select: { nombre: true, slug: true } },
          },
        },
      },
    }),
  ]);

  // Fotos reales desde Multimedia
  let fotos: FotoItem[] = multimediaFotos.map((m) => ({
    id: m.id,
    url: m.url,
    eventoNombre: m.edicion.evento.nombre,
    eventoSlug: m.edicion.evento.slug,
    edicionSlug: m.edicion.slug,
    fecha: m.edicion.fecha,
  }));

  // Completa con imagenPortada de ediciones si no hay suficientes fotos reales
  if (fotos.length < 12) {
    const usedSlugs = new Set(fotos.map((f) => f.edicionSlug));
    const edicionesFallback = await prisma.edicion.findMany({
      where: {
        estado: "PUBLICADA",
        imagenPortada: { not: null },
        NOT: { slug: { in: [...usedSlugs] } },
      },
      orderBy: { fecha: "desc" },
      take: 12 - fotos.length,
      select: {
        id: true,
        slug: true,
        fecha: true,
        imagenPortada: true,
        evento: { select: { nombre: true, slug: true } },
      },
    });

    fotos = [
      ...fotos,
      ...edicionesFallback.map((e) => ({
        id: e.id,
        url: e.imagenPortada!,
        eventoNombre: e.evento.nombre,
        eventoSlug: e.evento.slug,
        edicionSlug: e.slug,
        fecha: e.fecha,
      })),
    ];
  }

  if (fotos.length === 0) return null;

  const titulo = config["galeria.titulo"] || "Galería";
  const badge = config["galeria.badge"] || "Momentos Garden";
  const subtitulo =
    config["galeria.subtitulo"] || "Los mejores momentos de nuestra comunidad";

  return (
    <section id="galeria" className="py-12 sm:py-16 lg:py-20 xl:py-28 section-alt">
      <div className="container-gc">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="badge-gold mb-4 inline-block">{badge}</span>
          <h2 className="section-heading">{titulo}</h2>
          <p className="section-subheading mx-auto mt-4">{subtitulo}</p>
        </div>

        {/* Grid asimétrico: primera foto grande (2×2 en desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 auto-rows-[180px] lg:auto-rows-[155px] max-w-6xl mx-auto">
          {fotos.map((foto, i) => {
            const isFirst = i === 0;
            const fechaStr = new Intl.DateTimeFormat("es-CL", {
              year: "numeric",
              month: "long",
            }).format(foto.fecha);

            return (
              <a
                key={foto.id}
                href={`/eventos/${foto.eventoSlug}`}
                className={`group relative rounded-xl overflow-hidden bg-gc-green-900 shadow-sm hover:shadow-md transition-shadow ${
                  isFirst ? "col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={foto.url}
                  alt={foto.eventoNombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    isFirst
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  }
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gc-green-900/0 group-hover:bg-gc-green-900/65 transition-colors duration-300 flex flex-col justify-end p-3 lg:p-4">
                  <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-display font-semibold text-sm leading-tight">
                      {foto.eventoNombre}
                    </p>
                    <p className="text-white/60 font-body text-xs mt-0.5">
                      {fechaStr}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Link a sección eventos */}
        <div className="text-center mt-10">
          <a
            href="#eventos"
            className="inline-flex items-center gap-2 text-gc-green-800 hover:text-gc-green font-body font-medium transition-colors group"
          >
            Ver todos los eventos
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

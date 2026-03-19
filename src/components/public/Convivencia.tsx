interface Logro {
  cifra: string;
  descripcion: string;
}

interface Pilar {
  titulo: string;
  descripcion: string;
}

interface Testimonio {
  texto: string;
  nombre: string;
  rol: string;
  iniciales: string;
}

interface ConvivenciaProps {
  titulo: string;
  descripcion: string;
  logros: Logro[];
  pilares: Pilar[];
  testimonio: Testimonio | null;
}

const pilarIcons = [
  // Escudo-check: respeto
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Personas: comunidad
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // Destellos: fe
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>,
  // Corazón: 4° pilar
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
];

export default function Convivencia({
  titulo,
  descripcion,
  logros,
  pilares,
  testimonio,
}: ConvivenciaProps) {
  const hasTestimonio = !!testimonio?.texto;

  return (
    <section id="convivencia" className="py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="container-gc">
        {/* Tarjeta continua — overflow-hidden aplica radius a todos los hijos */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">

          {/* ── BLOQUE 1: DECLARACIÓN ── */}
          <div className="relative bg-gc-green-800 px-6 py-12 sm:py-16 lg:py-20 text-center overflow-hidden">
            {/* Patrón de puntos */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow decorativo dorado */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-gc-gold/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gc-green-900/50 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative max-w-3xl mx-auto">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gc-gold/20 text-gc-gold-light text-sm font-semibold rounded-full border border-gc-gold/20 mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                Nuestro diferenciador
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                {titulo}
              </h2>
              <p className="text-lg text-gc-green-100/80 font-body leading-relaxed">
                {descripcion}
              </p>
            </div>
          </div>

          {/* ── BLOQUE 2: CIFRAS ── */}
          {logros.length > 0 && (
            <div className="bg-gc-green-900 border-l-4 border-gc-gold px-6 py-8 lg:py-10">
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20 max-w-3xl mx-auto">
                {logros.map((logro) => (
                  <div key={logro.descripcion} className="text-center">
                    <div className="text-4xl lg:text-5xl font-display font-bold text-gc-gold leading-none mb-2">
                      {logro.cifra}
                    </div>
                    <div className="text-gc-green-100/60 font-body text-xs uppercase tracking-widest max-w-[160px]">
                      {logro.descripcion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── BLOQUE 3: PILARES ── */}
          {pilares.length > 0 && (
            <div className="bg-gc-green-800 px-6 py-10 lg:py-14">
              <p className="text-center text-xs font-body font-semibold text-gc-green-100/50 uppercase tracking-widest mb-8">
                Cómo lo vivimos
              </p>
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl mx-auto">
                {pilares.map((pilar, i) => (
                  <div
                    key={pilar.titulo}
                    className="rounded-xl p-6 border border-gc-green-100/15 hover:border-gc-green-100/25 transition-colors"
                    style={{ background: "rgba(61,133,120,0.15)" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gc-green-light/20 text-gc-green-light flex items-center justify-center mb-4 shrink-0">
                      {pilarIcons[i % pilarIcons.length]}
                    </div>
                    <h4 className="text-base font-display font-bold text-white mb-2">
                      {pilar.titulo}
                    </h4>
                    <p className="text-gc-green-100/65 font-body text-sm leading-relaxed">
                      {pilar.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── BLOQUE CTA: LINK A /convivencia ── */}
          <div className="bg-gc-green-800 border-t border-gc-green-100/10 px-6 py-7 lg:py-8">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gc-gold animate-pulse" />
                <p className="text-gc-green-100/60 font-body text-base text-center sm:text-left">
                  Descubre cómo construimos convivencia
                </p>
              </div>
              <a
                href="/convivencia"
                className="btn-primary w-full sm:w-auto flex-shrink-0 gap-2"
              >
                Conoce nuestra historia
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── BLOQUE 4: TESTIMONIO ── */}
          {hasTestimonio && (
            <div className="bg-gc-green-900 px-6 py-10 lg:py-12">
              <div className="max-w-2xl mx-auto text-center">
                {/* Comilla decorativa */}
                <div
                  className="text-8xl leading-none text-gc-gold/30 font-serif mb-2 select-none"
                  aria-hidden
                >
                  &ldquo;
                </div>
                {/* Cita */}
                <p className="text-white/85 font-body italic text-lg sm:text-xl leading-relaxed mb-8 -mt-4">
                  {testimonio!.texto}
                </p>
                {/* Avatar + info */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gc-green-dark flex items-center justify-center shrink-0">
                    <span className="text-gc-green-100 font-display font-bold text-sm">
                      {testimonio!.iniciales}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-body font-semibold text-sm leading-tight">
                      {testimonio!.nombre}
                    </p>
                    <p className="text-gc-green-100/50 font-body text-xs">
                      {testimonio!.rol}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

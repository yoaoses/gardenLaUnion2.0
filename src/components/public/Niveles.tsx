interface Nivel {
  nombre: string;
  niveles: string;
  sede: string;
  descripcion: string;
}

interface NivelesProps {
  niveles: Nivel[];
  extras: string[];
}

const nivelColors = [
  { accent: "bg-gc-gold/10 text-gc-gold-dark border-gc-gold/20" },
  { accent: "bg-gc-red/10 text-gc-red border-gc-red/20" },
  { accent: "bg-gc-navy/10 text-gc-navy border-gc-navy/20" },
  { accent: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

export default function Niveles({ niveles, extras }: NivelesProps) {
  return (
    <section id="niveles" className="py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="container-gc">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <span className="badge-navy mb-4 inline-block">Formación completa</span>
          <h2 className="section-heading">Niveles Educativos</h2>
          <p className="section-subheading mx-auto mt-4">
            Acompañamos a tus hijos desde pre-kínder hasta cuarto medio, en dos sedes en La Unión
          </p>
        </div>

        {/* Grid de niveles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8 lg:mb-12">
          {niveles.map((nivel, i) => {
            const color = nivelColors[i % nivelColors.length];
            return (
              <div key={nivel.nombre} className="card p-6 lg:p-8">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${color.accent}`}>
                  {nivel.niveles}
                </div>
                <h3 className="text-lg font-display font-bold text-gc-navy mb-2">
                  {nivel.nombre}
                </h3>
                <p className="text-gc-navy/60 font-body text-sm leading-relaxed mb-4">
                  {nivel.descripcion}
                </p>
                <div className="flex items-center gap-2 text-xs text-gc-navy/40 font-body">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {nivel.sede}
                </div>
              </div>
            );
          })}
        </div>

        {/* Programas extras */}
        {extras.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm font-body font-semibold text-gc-navy/40 uppercase tracking-wider mb-4">
              Programas y departamentos
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {extras.map((extra) => (
                <span
                  key={extra}
                  className="px-4 py-2 bg-gc-cream text-gc-navy/70 font-body text-sm rounded-full border border-gc-gray-200"
                >
                  {extra}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

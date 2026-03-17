interface QuienesSomosProps {
  mision: string;
  vision: string;
  resena: string;
}

export default function QuienesSomos({
  mision,
  vision,
  resena,
}: QuienesSomosProps) {
  return (
    <section id="quienes-somos" className="py-20 lg:py-28">
      <div className="container-gc">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-block">Nuestra historia</span>
          <h2 className="section-heading">Quiénes Somos</h2>
        </div>

        {/* Reseña */}
        {resena && (
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gc-navy/70 font-body text-lg leading-relaxed text-center">
              {resena}
            </p>
          </div>
        )}

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Misión */}
          <div className="card p-8 lg:p-10">
            <div className="w-12 h-12 rounded-2xl bg-gc-gold/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-gc-gold-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <div className="w-12 h-0.5 bg-gc-gold rounded-full mb-4" />
            <h3 className="text-xl font-display font-bold text-gc-navy mb-4">
              Misión
            </h3>
            <p className="text-gc-navy/70 font-body leading-relaxed">{mision}</p>
          </div>

          {/* Visión */}
          <div className="card p-8 lg:p-10">
            <div className="w-12 h-12 rounded-2xl bg-gc-navy/5 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-gc-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="w-12 h-0.5 bg-gc-navy/30 rounded-full mb-4" />
            <h3 className="text-xl font-display font-bold text-gc-navy mb-4">
              Visión
            </h3>
            <p className="text-gc-navy/70 font-body leading-relaxed">{vision}</p>
          </div>
        </div>

        {/* Datos institucionales */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[
            { valor: "2004", label: "Año de fundación" },
            { valor: "2019", label: "Educación Adventista" },
            { valor: "Pre-K → 4°M", label: "Niveles educativos" },
            { valor: "2 sedes", label: "En La Unión" },
          ].map((dato) => (
            <div key={dato.label} className="text-center">
              <div className="text-3xl font-display font-bold text-gc-gold">
                {dato.valor}
              </div>
              <div className="text-sm text-gc-navy/50 font-body mt-1">
                {dato.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

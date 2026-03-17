interface Logro {
  cifra: string;
  descripcion: string;
}

interface Pilar {
  titulo: string;
  descripcion: string;
}

interface ConvivenciaProps {
  titulo: string;
  descripcion: string;
  logros: Logro[];
  pilares: Pilar[];
}

const pilarIcons = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
];

export default function Convivencia({
  titulo,
  descripcion,
  logros,
  pilares,
}: ConvivenciaProps) {
  return (
    <section id="convivencia" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gc-navy via-gc-navy to-gc-navy-light" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gc-gold/5 blur-3xl rounded-full -translate-y-1/4" />

      <div className="relative container-gc">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gc-gold/20 text-gc-gold-light text-sm font-semibold rounded-full mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            Nuestro diferenciador
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            {titulo}
          </h2>
          <p className="text-lg text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            {descripcion}
          </p>
        </div>

        {/* Logros en números */}
        {logros.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-20">
            {logros.map((logro) => (
              <div key={logro.descripcion} className="text-center">
                <div className="text-5xl lg:text-6xl font-display font-bold text-gc-gold mb-2">
                  {logro.cifra}
                </div>
                <div className="text-white/60 font-body text-sm uppercase tracking-wider max-w-[180px]">
                  {logro.descripcion}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pilares */}
        {pilares.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pilares.map((pilar, i) => (
              <div
                key={pilar.titulo}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gc-gold/20 text-gc-gold-light flex items-center justify-center mb-6">
                  {pilarIcons[i % pilarIcons.length]}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-white/60 font-body leading-relaxed">
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

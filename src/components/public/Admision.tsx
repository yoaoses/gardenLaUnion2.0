interface AdmisionProps {
  info: string;
  linkSae: string;
}

export default function Admision({ info, linkSae }: AdmisionProps) {
  return (
    <section id="admision" className="py-12 sm:py-16 lg:py-20 xl:py-28 section-alt">
      <div className="container-gc">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="badge-gold mb-4 inline-block">Únete a nuestra comunidad</span>
            <h2 className="section-heading">Proceso de Admisión</h2>
          </div>

          <div className="card p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Info */}
              <div>
                <h3 className="text-xl font-display font-bold text-gc-green-800 mb-4">
                  Sistema de Admisión Escolar (SAE)
                </h3>
                <p className="text-gc-green-800/70 font-body leading-relaxed mb-6">
                  {info}
                </p>
                <div className="space-y-3">
                  {[
                    "Postulación a través de la plataforma oficial del Mineduc",
                    "Proceso transparente y objetivo",
                    "Prioridades según normativa vigente",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gc-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gc-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-gc-green-800/70 font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gc-green/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gc-green/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <p className="text-gc-green-800/60 font-body text-sm mb-6">
                  La postulación se realiza directamente en la plataforma oficial del Ministerio de Educación de Chile.
                </p>
                <a
                  href={linkSae}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Postular en SAE Mineduc
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p className="text-xs text-gc-green-800/30 font-body mt-3">
                  Se abre en el sitio oficial del Mineduc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { getConfig } from "@/lib/config";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import DocumentViewer, { type Documento } from "@/components/public/DocumentViewer";

export const metadata: Metadata = {
  title: "Documentos | Garden College",
  description:
    "Centro de documentación de Garden College. Accede al PEI, reglamentos de convivencia y evaluación, protocolos y planes institucionales.",
  openGraph: {
    title: "Documentos | Garden College",
    description:
      "Planes, reglamentos y protocolos del colegio Garden College, La Unión.",
  },
};

const documentos: Documento[] = [
  // ── Institucional ──
  {
    id: "pei",
    titulo: "Proyecto Educativo Institucional (PEI)",
    categoria: "Institucional",
    url: "/documentos/PEICOLEGIOGARDENCOLLEGE.pdf",
    descripcion: "Misión, visión y lineamientos estratégicos del colegio",
  },

  // ── Reglamentos ──
  {
    id: "reglamento-convivencia",
    titulo: "Reglamento de Convivencia Escolar",
    categoria: "Reglamentos",
    url: "/documentos/Reglamento-de-Convivencia-Escolar.pdf",
    descripcion: "Normas de convivencia, sanciones y procedimientos",
  },
  {
    id: "reglamento-evaluacion",
    titulo: "Reglamento de Evaluación",
    categoria: "Reglamentos",
    url: "/documentos/REGLAMENTODEEVALUACIONGARDENCOLLEGE.pdf",
    descripcion: "Sistema de evaluación, calificaciones y promoción",
  },
  {
    id: "reglamento-consejo-escolar",
    titulo: "Reglamento Consejo Escolar",
    categoria: "Reglamentos",
    url: "/documentos/Reglamento_Consejo_escolar_2023_Garden_College.pdf",
    descripcion: "Funcionamiento y atribuciones del Consejo Escolar",
  },

  // ── Protocolos ──
  {
    id: "protocolo-salud-mental",
    titulo: "Protocolo de Salud Mental",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_Salud_Mental_2023.pdf",
    descripcion: "Detección, derivación y acompañamiento en salud mental",
  },
  {
    id: "protocolo-retencion-embarazo",
    titulo: "Protocolo de Retención Escolar por Embarazo",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_de_retencion_y_apoyo_para_estudiantes_embarazada_padres_y_madres.pdf",
    descripcion: "Garantías de continuidad de estudios para alumnas embarazadas",
  },
  {
    id: "protocolo-drogas-alcohol",
    titulo: "Protocolo de Drogas y Alcohol (PAEC)",
    categoria: "Protocolos",
    url: "/documentos/PAEC.pdf",
    descripcion: "Plan de acción en entornos comunitarios — prevención de consumo",
  },
  {
    id: "protocolo-agresiones-sexuales",
    titulo: "Protocolo frente a Abuso y Conductas de Connotación Sexual",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_frente_a_situaciones_de_abuso_y_conductas_de_connotacion_sexual.pdf",
    descripcion: "Procedimiento de denuncia y acompañamiento a víctimas",
  },
  {
    id: "protocolo-vulneracion-derechos",
    titulo: "Protocolo de Vulneración de Derechos del Estudiante",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_frente_a_Situaciones_de_Vulneracion_de_Derechos_del_Estudiante.pdf",
    descripcion: "Detección y reporte ante vulneración de derechos de NNA",
  },
  {
    id: "protocolo-violencia",
    titulo: "Protocolo de Actuación frente a Violencia",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_de_Actuacion_frente_a_violencia.pdf",
    descripcion: "Prevención y resolución de situaciones de violencia escolar",
  },
  {
    id: "protocolo-accidentes-escolares",
    titulo: "Protocolo frente a Accidentes Escolares",
    categoria: "Protocolos",
    url: "/documentos/Protocolo_frente_a_Accidentes_escolares_de_los_estudiantes.pdf",
    descripcion: "Procedimiento de atención y notificación ante accidentes",
  },
  {
    id: "protocolo-desregulacion",
    titulo: "Protocolo de Desregulación Emocional y Conductual",
    categoria: "Protocolos",
    url: "/documentos/PROTOCOLO-DE-DESREGULACION-EMOCIONAL-Y-CONDUCTUAL.pdf",
    descripcion: "Actuación ante crisis conductuales y emocionales de estudiantes",
  },
  {
    id: "protocolo-ley-karin",
    titulo: "Protocolo Ley Karin (Ley N°21.643)",
    categoria: "Protocolos",
    url: "/documentos/PROTOCOLO-LEY-KARIN-Ley-N°21.643-CORPORACION-EDUCACIONAL-FILADELFIA-GARDEN.pdf",
    descripcion: "Prevención y sanción del acoso laboral y sexual",
  },

  // ── Planes ──
  {
    id: "plan-inclusion",
    titulo: "Plan de Apoyo a la Inclusión",
    categoria: "Planes",
    url: "/documentos/PLAN_DE_APOYO_A_LA_INCLUSION.pdf",
    descripcion: "Estrategias de inclusión y atención a la diversidad (PIE)",
  },
  {
    id: "plan-formacion-ciudadana",
    titulo: "Plan de Formación Ciudadana",
    categoria: "Planes",
    url: "/documentos/Plan_Formacion_Ciudadana_Garden_College.pdf",
    descripcion: "Formación en ciudadanía, democracia y valores cívicos",
  },
  {
    id: "plan-convivencia-escolar",
    titulo: "Plan de Gestión de Convivencia Escolar",
    categoria: "Planes",
    url: "/documentos/plan_de_gestion_de_la_convivencia_escolar_2023_completo.pdf",
    descripcion: "Acciones preventivas y formativas para la buena convivencia",
  },
  {
    id: "plan-sexualidad-2025",
    titulo: "Plan de Sexualidad, Afectividad y Género 2025–2028",
    categoria: "Planes",
    url: "/documentos/PLAN-DE-SEXUALIDAD-2025-2028.pdf",
    descripcion: "Educación sexual integral, afectividad y equidad de género",
  },
  {
    id: "programa-sexualidad",
    titulo: "Programa de Sexualidad, Afectividad y Género",
    categoria: "Planes",
    url: "/documentos/Programa-de-Sexualidad.pdf",
    descripcion: "Programa curricular de educación sexual del colegio",
  },
];

const categorias = ["Institucional", "Reglamentos", "Protocolos", "Planes"];

export default async function DocumentosPage() {
  const config = await getConfig();

  const nombre = config["institucional.nombre"] || "Garden College";
  const sedes = [
    { telefono: config["contacto.sede_basica.telefono"] || "" },
    { telefono: config["contacto.sede_media.telefono"] || "" },
  ];

  return (
    <>
      <Navbar
        nombre={nombre}
        telefono={sedes.map((s) => s.telefono).filter(Boolean).join(" | ")}
        variant="solid"
      />

      <main className="pt-16 lg:pt-20">
        {/* Header de página */}
        <div className="bg-gc-navy text-white py-8 lg:py-10">
          <div className="container-gc">
            <nav className="text-sm font-body text-white/50 mb-3">
              <a href="/" className="hover:text-white/80 transition-colors">
                Inicio
              </a>
              <span className="mx-2">/</span>
              <span className="text-white/80">Documentos</span>
            </nav>
            <h1 className="font-display font-bold text-2xl lg:text-3xl text-white mb-1">
              Centro de Documentación
            </h1>
            <p className="font-body text-white/60 text-sm lg:text-base">
              Planes, reglamentos y protocolos de Garden College
            </p>
          </div>
        </div>

        {/* Visor de documentos */}
        <DocumentViewer documentos={documentos} categorias={categorias} />
      </main>

      <Footer
        nombre={nombre}
        corporacion={config["institucional.corporacion"] || "Corporación Educacional Filadelfia Garden"}
        redes={{
          facebook: config["redes.facebook"],
          instagram: config["redes.instagram"],
          youtube: config["redes.youtube"],
        }}
      />
    </>
  );
}

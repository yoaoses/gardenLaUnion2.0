import { getConfig } from "@/lib/config";
import Navbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import QuienesSomos from "@/components/public/QuienesSomos";
import Sellos from "@/components/public/Sellos";
import Convivencia from "@/components/public/Convivencia";
import EventosDestacados from "@/components/public/EventosDestacados";
import Niveles from "@/components/public/Niveles";
import Noticias from "@/components/public/Noticias";
import Admision from "@/components/public/Admision";
import Contacto from "@/components/public/Contacto";
import Footer from "@/components/public/Footer";

// ISR: regenerar la página cada 60 segundos
export const revalidate = 60;

export default async function HomePage() {
  const config = await getConfig();

  const nombre = config["institucional.nombre"] || "Garden College";
  const slogan = config["institucional.slogan"] || "Educación sin fronteras";

  const sellos = [
    {
      titulo: config["sellos.vida_saludable.titulo"] || "Vida Saludable",
      descripcion: config["sellos.vida_saludable.descripcion"] || "",
      icono: config["sellos.vida_saludable.icono"] || "heart-pulse",
    },
    {
      titulo:
        config["sellos.formacion_cristiana.titulo"] || "Formación Cristiana",
      descripcion: config["sellos.formacion_cristiana.descripcion"] || "",
      icono: config["sellos.formacion_cristiana.icono"] || "book-open",
    },
    {
      titulo: config["sellos.ingles.titulo"] || "Inglés",
      descripcion: config["sellos.ingles.descripcion"] || "",
      icono: config["sellos.ingles.icono"] || "globe",
    },
  ];

  const sedes = [
    {
      nombre: config["contacto.sede_basica.nombre"] || "Sede Básica",
      direccion: config["contacto.sede_basica.direccion"] || "",
      telefono: config["contacto.sede_basica.telefono"] || "",
      niveles: config["contacto.sede_basica.niveles"] || "",
    },
    {
      nombre: config["contacto.sede_media.nombre"] || "Sede Media",
      direccion: config["contacto.sede_media.direccion"] || "",
      telefono: config["contacto.sede_media.telefono"] || "",
      niveles: config["contacto.sede_media.niveles"] || "",
    },
  ];

  return (
    <>
      <Navbar
        nombre={nombre}
        telefono={sedes.map((s) => s.telefono).join(" | ")}
      />

      <main>
        <Hero
          nombre={nombre}
          slogan={slogan}
          mision={config["institucional.mision"] || ""}
        />

        <QuienesSomos
          mision={config["institucional.mision"] || ""}
          vision={config["institucional.vision"] || ""}
          resena={config["institucional.resena"] || ""}
        />

        <Sellos sellos={sellos} />

        <Convivencia
          titulo={config["convivencia.titulo"] || "Convivencia y Valores"}
          descripcion={config["convivencia.descripcion"] || ""}
          logros={config["convivencia.logros"] || []}
          pilares={config["convivencia.pilares"] || []}
        />

        <EventosDestacados />

        <Niveles
          niveles={config["niveles.info"] || []}
          extras={config["niveles.extras"] || []}
        />

        <Noticias />

        <Admision
          info={config["admision.info"] || ""}
          linkSae={config["admision.link_sae"] || "#"}
        />

        <Contacto sedes={sedes} email={config["contacto.email"] || ""} />
      </main>

      <Footer
        nombre={nombre}
        corporacion={config["institucional.corporacion"] || ""}
        redes={{
          facebook: config["redes.facebook"],
          instagram: config["redes.instagram"],
          youtube: config["redes.youtube"],
        }}
      />
    </>
  );
}

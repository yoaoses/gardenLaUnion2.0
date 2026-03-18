import { PrismaClient, Role, NoticiaEstado } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Garden College...");

  // --- Usuario admin inicial ---
  const admin = await prisma.user.upsert({
    where: { email: "yoaoses@gardenlaunion.cl" },
    update: {},
    create: {
      email: "yoaoses@gardenlaunion.cl",
      name: "YoaOses",
      role: Role.ADMIN,
    },
  });

  console.log("✅ Usuario admin creado");

  // --- ConfigSitio: Info institucional ---
  const configs = [
    // Institucional
    {
      clave: "institucional.nombre",
      valor: "Garden College",
      tipo: "text",
      grupo: "institucional",
      orden: 1,
    },
    {
      clave: "institucional.slogan",
      valor: "Educación sin fronteras",
      tipo: "text",
      grupo: "institucional",
      orden: 2,
    },
    {
      clave: "institucional.mision",
      valor:
        "Somos un Colegio que promueve el desarrollo integral de sus estudiantes, entregando educación de calidad con énfasis en el aprendizaje del idioma extranjero inglés, el desarrollo de las artes musicales y la vida saludable; sin olvidar el pilar fundamental de nuestra actividad: la relación de Dios con el hombre.",
      tipo: "richtext",
      grupo: "institucional",
      orden: 3,
    },
    {
      clave: "institucional.vision",
      valor:
        "El Colegio Garden College quiere ser reconocido como una institución educativa de excelencia, que promueva valores cristianos adventistas y desarrolle de manera integral las habilidades y aptitudes de nuestros estudiantes, formando nuevos líderes que mejoren su vida y la de sus semejantes.",
      tipo: "richtext",
      grupo: "institucional",
      orden: 4,
    },
    {
      clave: "institucional.resena",
      valor:
        'Garden College fue fundado el 29 de octubre de 2004 en La Unión, capital de la Provincia del Ranco, Región de Los Ríos. Reconocido como "El colegio inglés de La Unión", es una comunidad educativa que ha formado generaciones de estudiantes inspirados por valores cristianos y comprometidos con la excelencia. Desde 2019 somos parte de la Educación Adventista como miembro asociado a la Fundación Educacional John Andrews.',
      tipo: "richtext",
      grupo: "institucional",
      orden: 5,
    },
    {
      clave: "institucional.corporacion",
      valor: "Corporación Educacional Filadelfia Garden",
      tipo: "text",
      grupo: "institucional",
      orden: 6,
    },
    {
      clave: "institucional.rbd",
      valor: "22743-9",
      tipo: "text",
      grupo: "institucional",
      orden: 7,
    },
    {
      clave: "institucional.director",
      valor: "Rodrigo Esteban Contreras Hernández",
      tipo: "text",
      grupo: "institucional",
      orden: 8,
    },

    // Sellos educativos
    {
      clave: "sellos.vida_saludable.titulo",
      valor: "Vida Saludable",
      tipo: "text",
      grupo: "sellos",
      orden: 1,
    },
    {
      clave: "sellos.vida_saludable.descripcion",
      valor:
        "Desarrollo de las facultades físicas, mentales y espirituales del estudiante a través de nuestro Plan de Actividad Física y Estilos de Vida Saludable. Creemos que el cuidado del cuerpo es parte integral de la formación.",
      tipo: "text",
      grupo: "sellos",
      orden: 2,
    },
    {
      clave: "sellos.vida_saludable.icono",
      valor: "heart-pulse",
      tipo: "text",
      grupo: "sellos",
      orden: 3,
    },
    {
      clave: "sellos.formacion_cristiana.titulo",
      valor: "Formación Cristiana",
      tipo: "text",
      grupo: "sellos",
      orden: 4,
    },
    {
      clave: "sellos.formacion_cristiana.descripcion",
      valor:
        "Educación integral basada en principios, creencias y valores de las Sagradas Escrituras. Formamos personas con carácter, empatía y un profundo sentido de servicio al prójimo.",
      tipo: "text",
      grupo: "sellos",
      orden: 5,
    },
    {
      clave: "sellos.formacion_cristiana.icono",
      valor: "book-open",
      tipo: "text",
      grupo: "sellos",
      orden: 6,
    },
    {
      clave: "sellos.ingles.titulo",
      valor: "Inglés",
      tipo: "text",
      grupo: "sellos",
      orden: 7,
    },
    {
      clave: "sellos.ingles.descripcion",
      valor:
        "Enseñanza, aprendizaje y dominio del idioma inglés como herramienta para conectar con el mundo. Nuestro departamento de Idioma Extranjero Inglés trabaja desde los primeros niveles hasta cuarto medio.",
      tipo: "text",
      grupo: "sellos",
      orden: 8,
    },
    {
      clave: "sellos.ingles.icono",
      valor: "globe",
      tipo: "text",
      grupo: "sellos",
      orden: 9,
    },

    // Contacto
    {
      clave: "contacto.sede_basica.nombre",
      valor: "Sede Parvularia y Básica",
      tipo: "text",
      grupo: "contacto",
      orden: 1,
    },
    {
      clave: "contacto.sede_basica.direccion",
      valor: "Los Carrera 387, La Unión",
      tipo: "text",
      grupo: "contacto",
      orden: 2,
    },
    {
      clave: "contacto.sede_basica.telefono",
      valor: "(64) 232 4545",
      tipo: "text",
      grupo: "contacto",
      orden: 3,
    },
    {
      clave: "contacto.sede_basica.niveles",
      valor: "Pre-Kínder, Kínder, 1° a 6° Básico",
      tipo: "text",
      grupo: "contacto",
      orden: 4,
    },
    {
      clave: "contacto.sede_basica.lat",
      valor: "-40.2944",
      tipo: "text",
      grupo: "contacto",
      orden: 5,
    },
    {
      clave: "contacto.sede_basica.lng",
      valor: "-73.0836",
      tipo: "text",
      grupo: "contacto",
      orden: 6,
    },
    {
      clave: "contacto.sede_media.nombre",
      valor: "Sede Media",
      tipo: "text",
      grupo: "contacto",
      orden: 7,
    },
    {
      clave: "contacto.sede_media.direccion",
      valor: "Caupolicán 967, La Unión",
      tipo: "text",
      grupo: "contacto",
      orden: 8,
    },
    {
      clave: "contacto.sede_media.telefono",
      valor: "(64) 232 0503",
      tipo: "text",
      grupo: "contacto",
      orden: 9,
    },
    {
      clave: "contacto.sede_media.niveles",
      valor: "7° y 8° Básico, 1° a 4° Medio",
      tipo: "text",
      grupo: "contacto",
      orden: 10,
    },
    {
      clave: "contacto.sede_media.lat",
      valor: "-40.2928",
      tipo: "text",
      grupo: "contacto",
      orden: 11,
    },
    {
      clave: "contacto.sede_media.lng",
      valor: "-73.0811",
      tipo: "text",
      grupo: "contacto",
      orden: 12,
    },
    {
      clave: "contacto.email",
      valor: "contacto@gardenlaunion.cl",
      tipo: "text",
      grupo: "contacto",
      orden: 13,
    },

    // Redes sociales
    {
      clave: "redes.facebook",
      valor: "https://www.facebook.com/people/Garden-La-Uni%C3%B3n/100090639256568/",
      tipo: "text",
      grupo: "redes",
      orden: 1,
    },
    {
      clave: "redes.instagram",
      valor: "https://www.instagram.com/garden.launion/",
      tipo: "text",
      grupo: "redes",
      orden: 2,
    },
    {
      clave: "redes.youtube",
      valor: "https://www.youtube.com/@Garden.launion",
      tipo: "text",
      grupo: "redes",
      orden: 3,
    },

    // Admisión
    {
      clave: "admision.info",
      valor:
        "Garden College participa del Sistema de Admisión Escolar (SAE) del Ministerio de Educación. El proceso de postulación se realiza a través de la plataforma oficial del Mineduc.",
      tipo: "richtext",
      grupo: "admision",
      orden: 1,
    },
    {
      clave: "admision.link_sae",
      valor: "https://admision.mineduc.cl/vitrina-vue/establecimiento/22743",
      tipo: "text",
      grupo: "admision",
      orden: 2,
    },

    // Convivencia
    {
      clave: "convivencia.titulo",
      valor: "Un lugar donde tu hijo se siente seguro",
      tipo: "text",
      grupo: "convivencia",
      orden: 1,
    },
    {
      clave: "convivencia.descripcion",
      valor:
        "En Garden College creemos que un niño que se siente seguro, aprende mejor. Nuestro enfoque de convivencia nace de un principio simple: tratar al otro como queremos ser tratados. Eso se enseña, se practica y se vive cada día.",
      tipo: "richtext",
      grupo: "convivencia",
      orden: 2,
    },
    {
      clave: "convivencia.logros",
      valor: JSON.stringify([
        {
          cifra: "0",
          descripcion: "Denuncias de bullying en 2025",
        },
        {
          cifra: "20+",
          descripcion: "Años formando comunidad",
        },
      ]),
      tipo: "json",
      grupo: "convivencia",
      orden: 3,
    },
    {
      clave: "convivencia.pilares",
      valor: JSON.stringify([
        {
          titulo: "Respeto como base",
          descripcion:
            "Enseñamos que el respeto no es obediencia ciega — es reconocer el valor del otro. Desde pre-kínder hasta cuarto medio, nuestros estudiantes practican el diálogo como primera herramienta para resolver diferencias.",
        },
        {
          titulo: "Comunidad que acompaña",
          descripcion:
            'El Centro General de Padres y Apoderados no es un ente pasivo. Organiza talleres, campañas de prevención y actividades que fortalecen los vínculos entre familias y colegio. La campaña "Un Colegio Sin Bullying" nació de esta alianza.',
        },
        {
          titulo: "Fe que transforma",
          descripcion:
            "Nuestra formación cristiana no impone — inspira. Los valores de empatía, servicio y amor al prójimo se integran en la vida diaria del colegio, desde las asambleas hasta la forma en que los profesores acompañan a cada estudiante.",
        },
      ]),
      tipo: "json",
      grupo: "convivencia",
      orden: 4,
    },

    // Eventos
    {
      clave: "eventos.titulo",
      valor: "Eventos Garden",
      tipo: "text",
      grupo: "eventos",
      orden: 1,
    },
    {
      clave: "eventos.subtitulo",
      valor: "Tradiciones que construyen comunidad cada año",
      tipo: "text",
      grupo: "eventos",
      orden: 2,
    },
    {
      clave: "eventos.badge",
      valor: "Lo que vivimos",
      tipo: "text",
      grupo: "eventos",
      orden: 3,
    },

    // Niveles educativos
    {
      clave: "niveles.info",
      valor: JSON.stringify([
        {
          nombre: "Parvularia",
          niveles: "Pre-Kínder y Kínder",
          sede: "Los Carrera 387",
          descripcion:
            "Primeros pasos en un ambiente seguro y estimulante, con énfasis en el juego, la creatividad y los valores.",
        },
        {
          nombre: "Educación Básica",
          niveles: "1° a 6° Básico",
          sede: "Los Carrera 387",
          descripcion:
            "Formación académica sólida con inglés desde primer año, talleres de música, arte y deporte.",
        },
        {
          nombre: "Educación Básica - Media",
          niveles: "7° y 8° Básico",
          sede: "Caupolicán 967",
          descripcion:
            "Transición acompañada con mayor autonomía, preparación para la enseñanza media y talleres especializados.",
        },
        {
          nombre: "Educación Media",
          niveles: "1° a 4° Medio",
          sede: "Caupolicán 967",
          descripcion:
            "Preparación para la educación superior con talleres de Administración, Introducción al Derecho, y formación integral.",
        },
      ]),
      tipo: "json",
      grupo: "niveles",
      orden: 1,
    },
    {
      clave: "niveles.extras",
      valor: JSON.stringify([
        "Jornada Escolar Completa (JEC)",
        "Programa de Integración Escolar (PIE)",
        "Departamento de Idioma Extranjero Inglés",
        "Departamento de Educación Física y Salud",
        "Departamento de Música y Artes",
      ]),
      tipo: "json",
      grupo: "niveles",
      orden: 2,
    },
  ];

  for (const config of configs) {
    await prisma.configSitio.upsert({
      where: { clave: config.clave },
      update: { valor: config.valor },
      create: config,
    });
  }

  console.log(`✅ ${configs.length} configuraciones cargadas`);

  // --- Categorías de noticias ---
  const categorias = [
    { nombre: "Actividades", slug: "actividades" },
    { nombre: "Comunicados", slug: "comunicados" },
    { nombre: "Deportes", slug: "deportes" },
    { nombre: "Eventos", slug: "eventos" },
    { nombre: "Admisión", slug: "admision" },
    { nombre: "Comunidad", slug: "comunidad" },
  ];

  for (const cat of categorias) {
    await prisma.categoria.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log(`✅ ${categorias.length} categorías creadas`);

  // --- Noticia de ejemplo ---
  const catEventos = await prisma.categoria.findUnique({
    where: { slug: "eventos" },
  });

  if (catEventos) {
    await prisma.noticia.upsert({
      where: { slug: "primera-gala-cultural-20-anos" },
      update: {},
      create: {
        titulo:
          "Primera Gala Cultural Garden College: 20 años celebrados con música, comunidad y gratitud",
        slug: "primera-gala-cultural-20-anos",
        extracto:
          "Un hito que corona dos décadas de trayectoria educativa con una noche de alto nivel artístico y profundo sentido comunitario.",
        contenido:
          "<p>En el marco de nuestro 20° aniversario, Garden College inauguró su Primera Gala Cultural. Una noche de alto nivel artístico y profundo sentido comunitario que reunió a estudiantes, familias, docentes y autoridades locales.</p><p>El evento destacó presentaciones musicales, números artísticos preparados por los departamentos de Música y Artes, y un emotivo reconocimiento a quienes han sido parte de estas dos décadas de historia educativa en La Unión.</p>",
        estado: "PUBLICADA",
        destacada: true,
        fechaPublicacion: new Date("2025-10-21"),
        autorId: admin.id,
        categorias: {
          connect: [{ id: catEventos.id }],
        },
      },
    });

    console.log("✅ Noticia de ejemplo creada");
  }

  // --- Eventos con ediciones 2025 ---
  const eventosData = [
    {
      nombre: "Gala Cultural",
      slug: "gala-cultural",
      descripcion: "Celebración artística anual del colegio",
      recurrencia: "anual",
      edicion: {
        titulo: "20 años celebrados con música, comunidad y gratitud",
        slug: "gala-cultural-2025",
        extracto:
          "Una noche de alto nivel artístico y profundo sentido comunitario que reunió a estudiantes, familias y autoridades.",
        contenido:
          "<p>En el marco de nuestro 20° aniversario, Garden College inauguró su Primera Gala Cultural. Una noche de alto nivel artístico y profundo sentido comunitario que reunió a estudiantes, familias, docentes y autoridades locales.</p><p>El evento destacó presentaciones musicales, números artísticos preparados por los departamentos de Música y Artes, y un emotivo reconocimiento a quienes han sido parte de estas dos décadas de historia educativa en La Unión.</p>",
        fecha: new Date("2025-10-21"),
        destacada: true,
        estado: NoticiaEstado.PUBLICADA,
      },
    },
    {
      nombre: "Spelling Bee",
      slug: "spelling-bee",
      descripcion: "Competencia de inglés entre estudiantes",
      recurrencia: "anual",
      edicion: {
        titulo: "Letras, nervios y aplausos que se comparten",
        slug: "spelling-bee-2025",
        extracto:
          "Estudiantes de básica y media demostraron su dominio del inglés en una jornada limpia y ordenada.",
        contenido:
          "<p>El Spelling Bee 2025 fue una jornada que puso a prueba el vocabulario y la pronunciación de nuestros estudiantes. Desde los primeros niveles de básica hasta cuarto medio, cada participante demostró su dedicación al aprendizaje del inglés.</p><p>El evento contó con la presencia de familias y docentes que celebraron cada acierto con aplausos y aliento. Una tradición que reafirma el sello inglés de Garden College.</p>",
        fecha: new Date("2025-08-15"),
        destacada: false,
        estado: NoticiaEstado.PUBLICADA,
      },
    },
    {
      nombre: "Bingo Familiar",
      slug: "bingo-familiar",
      descripcion: "Actividad comunitaria del CGPA",
      recurrencia: "anual",
      edicion: {
        titulo: "Primer Gran Bingo Familiar de Garden College",
        slug: "bingo-familiar-2025",
        extracto:
          "El CGPA organizó una jornada que reunió a toda la comunidad educativa.",
        contenido:
          "<p>El Centro General de Padres y Apoderados organizó el Primer Gran Bingo Familiar de Garden College, una actividad que convocó a familias, estudiantes y docentes en torno a la diversión y la comunidad.</p><p>La jornada fue un éxito rotundo: entretenimiento para todas las edades, premios y la calidez característica de nuestra comunidad educativa.</p>",
        fecha: new Date("2025-07-04"),
        destacada: false,
        estado: NoticiaEstado.PUBLICADA,
      },
    },
    {
      nombre: "Campeonatos Deportivos",
      slug: "campeonatos-deportivos",
      descripcion: "Representación deportiva del colegio",
      recurrencia: "anual",
      edicion: {
        titulo: "Campeonato comunal de tenis de mesa",
        slug: "campeonatos-deportivos-2025",
        extracto:
          "Estudiantes demostraron talento y espíritu competitivo representando al colegio.",
        contenido:
          "<p>Nuestros estudiantes representaron a Garden College en el campeonato comunal de tenis de mesa, una disciplina que combina concentración, reflejos y estrategia.</p><p>Con espíritu competitivo y juego limpio, nuestros deportistas dejaron el nombre del colegio en alto. El Departamento de Educación Física y Salud continúa impulsando la participación deportiva como parte esencial de la formación integral.</p>",
        fecha: new Date("2025-09-10"),
        destacada: false,
        estado: NoticiaEstado.PUBLICADA,
      },
    },
    {
      nombre: "Día del Profesor",
      slug: "dia-del-profesor",
      descripcion: "Reconocimiento anual a los docentes",
      recurrencia: "anual",
      edicion: {
        titulo: "Una comunidad que reconoce, celebra y elige futuro",
        slug: "dia-del-profesor-2025",
        extracto:
          "El CGPA invitó a los funcionarios a una once de camaradería.",
        contenido:
          "<p>El Día del Profesor 2025 fue una jornada especial donde la comunidad Garden expresó su gratitud a quienes dedican su vida a formar personas. El Centro General de Padres y Apoderados organizó una once de camaradería que reunió a docentes y asistentes de la educación.</p><p>Palabras, gestos y presencia — así celebramos a quienes construyen cada día el futuro de nuestros estudiantes.</p>",
        fecha: new Date("2025-10-16"),
        destacada: false,
        estado: NoticiaEstado.PUBLICADA,
      },
    },
  ];

  for (const eventoData of eventosData) {
    const evento = await prisma.evento.upsert({
      where: { slug: eventoData.slug },
      update: {},
      create: {
        nombre: eventoData.nombre,
        slug: eventoData.slug,
        descripcion: eventoData.descripcion,
        recurrencia: eventoData.recurrencia,
      },
    });

    await prisma.edicion.upsert({
      where: { slug: eventoData.edicion.slug },
      update: {},
      create: {
        ...eventoData.edicion,
        eventoId: evento.id,
      },
    });
  }

  console.log(`✅ ${eventosData.length} eventos con ediciones creados`);

  console.log("🎉 Seed completado");
}

main()
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

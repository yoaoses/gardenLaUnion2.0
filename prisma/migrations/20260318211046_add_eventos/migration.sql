-- CreateTable
CREATE TABLE "Evento" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descripcion" TEXT,
    "recurrencia" TEXT NOT NULL DEFAULT 'anual',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edicion" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "extracto" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "imagenPortada" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL,
    "destacada" BOOLEAN NOT NULL DEFAULT false,
    "estado" "NoticiaEstado" NOT NULL DEFAULT 'BORRADOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eventoId" TEXT NOT NULL,

    CONSTRAINT "Edicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Multimedia" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail" TEXT,
    "titulo" TEXT,
    "orden" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edicionId" TEXT NOT NULL,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Evento_slug_key" ON "Evento"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Edicion_slug_key" ON "Edicion"("slug");

-- CreateIndex
CREATE INDEX "Edicion_estado_fecha_idx" ON "Edicion"("estado", "fecha");

-- CreateIndex
CREATE INDEX "Edicion_eventoId_idx" ON "Edicion"("eventoId");

-- AddForeignKey
ALTER TABLE "Edicion" ADD CONSTRAINT "Edicion_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_edicionId_fkey" FOREIGN KEY ("edicionId") REFERENCES "Edicion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

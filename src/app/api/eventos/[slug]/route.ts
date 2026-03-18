import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const edicion = await prisma.edicion.findUnique({
    where: { slug },
    include: {
      evento: {
        include: {
          ediciones: {
            where: { estado: "PUBLICADA" },
            orderBy: { fecha: "desc" },
            select: { id: true, titulo: true, slug: true, fecha: true },
          },
        },
      },
      multimedia: { orderBy: { orden: "asc" } },
    },
  });

  if (!edicion || edicion.estado !== "PUBLICADA") {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  return NextResponse.json(edicion);
}

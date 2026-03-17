import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(20, parseInt(searchParams.get("limit") || "6"));
  const skip = (page - 1) * limit;

  const [noticias, total] = await Promise.all([
    prisma.noticia.findMany({
      where: { estado: "PUBLICADA" },
      orderBy: { fechaPublicacion: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        titulo: true,
        slug: true,
        extracto: true,
        imagenPortada: true,
        fechaPublicacion: true,
        categorias: {
          select: { nombre: true, slug: true },
        },
      },
    }),
    prisma.noticia.count({ where: { estado: "PUBLICADA" } }),
  ]);

  return NextResponse.json({
    noticias,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
}

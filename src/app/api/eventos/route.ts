import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(20, parseInt(searchParams.get("limit") || "10"));
  const skip = (page - 1) * limit;

  const [ediciones, total] = await Promise.all([
    prisma.edicion.findMany({
      where: { estado: "PUBLICADA" },
      orderBy: { fecha: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        titulo: true,
        slug: true,
        extracto: true,
        imagenPortada: true,
        fecha: true,
        destacada: true,
        evento: {
          select: { id: true, nombre: true, slug: true, recurrencia: true },
        },
      },
    }),
    prisma.edicion.count({ where: { estado: "PUBLICADA" } }),
  ]);

  return NextResponse.json({
    data: ediciones,
    meta: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}

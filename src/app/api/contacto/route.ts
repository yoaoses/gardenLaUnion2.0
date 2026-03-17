import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Rate limiting simple en memoria (en prod usar Redis o similar)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hora

const contactoSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  telefono: z.string().max(20).optional(),
  asunto: z.string().min(3).max(200),
  mensaje: z.string().min(10).max(2000),
});

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getClientIp(req);
  const now = Date.now();
  const rateData = rateLimitMap.get(ip);

  if (rateData) {
    if (now < rateData.resetAt) {
      if (rateData.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: "Demasiados mensajes. Intenta en una hora." },
          { status: 429 }
        );
      }
      rateData.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
  }

  // Validación
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const result = contactoSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", detalles: result.error.flatten() },
      { status: 400 }
    );
  }

  const { nombre, email, telefono, asunto, mensaje } = result.data;

  await prisma.mensajeContacto.create({
    data: { nombre, email, telefono, asunto, mensaje },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}

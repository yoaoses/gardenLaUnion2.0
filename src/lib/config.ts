import { prisma } from "./prisma";
import { cache } from "react";

// React cache: deduplica llamadas en un mismo render
export const getConfig = cache(async (grupo?: string) => {
  const where = grupo ? { grupo } : {};
  const configs = await prisma.configSitio.findMany({
    where,
    orderBy: { orden: "asc" },
  });

  // Convertir a mapa clave → valor (parseando JSON si corresponde)
  const map: Record<string, any> = {};
  for (const c of configs) {
    if (c.tipo === "json") {
      try {
        map[c.clave] = JSON.parse(c.valor);
      } catch {
        map[c.clave] = c.valor;
      }
    } else {
      map[c.clave] = c.valor;
    }
  }
  return map;
});

// Helper para obtener un valor específico
export const getConfigValue = cache(async (clave: string) => {
  const config = await prisma.configSitio.findUnique({
    where: { clave },
  });

  if (!config) return null;

  if (config.tipo === "json") {
    try {
      return JSON.parse(config.valor);
    } catch {
      return config.valor;
    }
  }
  return config.valor;
});

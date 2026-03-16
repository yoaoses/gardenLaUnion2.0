"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AdminDashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/admin/login");
    },
  });

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gc-cream flex items-center justify-center">
        <div className="text-gc-navy/40 font-body">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gc-cream">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gc-navy text-gc-gold flex items-center justify-center font-display font-bold text-sm">
              GC
            </div>
            <span className="font-display font-bold text-gc-navy">
              Panel Admin
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gc-navy/50 font-body hidden sm:block">
              {session?.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm text-gc-navy/50 font-body hover:text-gc-red transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-display font-bold text-gc-navy mb-8">
          Dashboard
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <DashboardCard
            titulo="Noticias"
            descripcion="Crear y editar noticias"
            href="/admin/noticias"
            icono="📰"
          />
          <DashboardCard
            titulo="Galería"
            descripcion="Administrar álbumes de fotos"
            href="/admin/galeria"
            icono="📸"
          />
          <DashboardCard
            titulo="Info Institucional"
            descripcion="Editar datos del colegio"
            href="/admin/institucional"
            icono="🏫"
          />
          <DashboardCard
            titulo="Mensajes"
            descripcion="Ver mensajes de contacto"
            href="/admin/mensajes"
            icono="✉️"
          />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="text-lg font-display font-bold text-gc-navy mb-4">
            Bienvenido, {session?.user?.name || "Admin"}
          </h2>
          <p className="text-gc-navy/60 font-body">
            Desde acá puedes administrar el contenido público de la web de
            Garden College. Los cambios se reflejan en la web en menos de 1
            minuto.
          </p>
          <div className="mt-4 p-4 bg-gc-gold/5 border border-gc-gold/20 rounded-xl">
            <p className="text-sm text-gc-gold-dark font-body">
              <strong>Módulos en desarrollo:</strong> Los CRUDs completos de
              noticias, galería e info institucional están por implementarse.
              Este dashboard es la base funcional con autenticación operativa.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardCard({
  titulo,
  descripcion,
  href,
  icono,
}: {
  titulo: string;
  descripcion: string;
  href: string;
  icono: string;
}) {
  return (
    <a
      href={href}
      className="card p-6 group cursor-pointer"
    >
      <span className="text-3xl mb-3 block">{icono}</span>
      <h3 className="font-display font-bold text-gc-navy group-hover:text-gc-gold-dark transition-colors">
        {titulo}
      </h3>
      <p className="text-sm text-gc-navy/50 font-body mt-1">{descripcion}</p>
    </a>
  );
}

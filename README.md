# Garden College — Web Pública + Panel Admin

## Requisitos

- Docker + Docker Compose v2
- Node.js 20+ (solo para desarrollo local)
- Git

## Setup Inicial

### 1. Clonar e instalar

```bash
git clone <repo-url> garden-web
cd garden-web

# Crear archivo de variables
cp .env.example .env
# EDITAR .env con valores reales (ver sección "Variables de Entorno")
```

### 2. Desarrollo local (opción A: todo en Docker)

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
# App en http://localhost:3000
# BD accesible en localhost:5432 (para pgAdmin/DBeaver)
```

### 3. Desarrollo local (opción B: solo BD en Docker)

```bash
# Levantar solo PostgreSQL
docker compose -f docker-compose.yml -f docker-compose.dev.yml up db -d

# Instalar dependencias
npm install

# Generar Prisma Client
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev

# Seed de datos iniciales
npx prisma db seed

# Iniciar dev server
npm run dev
# App en http://localhost:3000
```

### 4. Producción (Oracle Cloud / Hostinger)

```bash
# En el servidor:
git clone <repo-url> garden-web
cd garden-web
cp .env.example .env
# Editar .env con valores de producción

# Build y levantar
docker compose up -d --build

# Verificar que todo esté corriendo
docker compose ps
docker compose logs -f app

# Seed inicial (solo la primera vez)
docker compose exec app npx prisma db seed
```

### 5. SSL (primera vez en producción)

```bash
# Obtener certificado Let's Encrypt
# CAMBIAR: gardencollege.cl por el dominio real
docker compose run certbot certonly \
  --webroot --webroot-path=/var/lib/letsencrypt \
  -d gardencollege.cl -d www.gardencollege.cl \
  --email tu@email.cl --agree-tos --no-eff-email

# Reiniciar nginx para cargar el certificado
docker compose restart nginx
```

## Variables de Entorno

| Variable | Descripción | Cómo obtener |
|----------|------------|-------------|
| `DB_PASSWORD` | Password de PostgreSQL | `openssl rand -base64 24` |
| `AUTH_SECRET` | Secret para NextAuth | `openssl rand -base64 32` |
| `SITE_URL` | URL pública del sitio | `https://gardencollege.cl` |
| `GOOGLE_CLIENT_ID` | OAuth 2.0 Client ID | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 Client Secret | Mismo lugar |
| `ALLOWED_EMAIL_DOMAIN` | Dominio permitido para login | `gardenlaunion.cl` |

## Operaciones

### Backup manual
```bash
docker compose exec db pg_dump -U garden garden_web | gzip > backup_$(date +%Y%m%d).sql.gz
```

### Restore
```bash
./scripts/restore.sh backup_20260415.sql.gz
```

### Actualizar la aplicación
```bash
git pull
docker compose up -d --build
# Las migraciones se ejecutan automáticamente al iniciar el container
```

### Migrar a otro servidor (contingencia)
```bash
# En el servidor actual:
docker compose exec db pg_dump -U garden garden_web | gzip > backup_migracion.sql.gz
docker compose down

# Copiar al nuevo servidor:
scp backup_migracion.sql.gz docker-compose.yml .env Dockerfile nginx/ scripts/ usuario@nuevo-servidor:~/garden-web/

# En el nuevo servidor:
cd ~/garden-web
docker compose up -d --build
# Esperar a que PostgreSQL esté healthy, luego:
gunzip -c backup_migracion.sql.gz | docker compose exec -T db psql -U garden garden_web
```

Tiempo estimado de migración: **< 30 minutos** (sin contar DNS).

## Estructura de archivos clave

```
CLAUDE.md           → Reglas para Claude Code (leer PRIMERO)
docker-compose.yml  → Orquestación de producción
Dockerfile          → Build multi-stage ARM64
prisma/schema.prisma → Modelo de datos
src/app/(public)/   → Onepage pública
src/app/(admin)/    → Panel admin
docs/               → Guías de contenido
```

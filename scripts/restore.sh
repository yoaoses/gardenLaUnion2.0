#!/bin/sh
# ============================================
# Restore de backup PostgreSQL
#
# USO:
#   ./scripts/restore.sh backups/garden_web_20260415_030000.sql.gz
#
# NOTA: Esto REEMPLAZA toda la BD actual. Usar con cuidado.
# ============================================

set -e

if [ -z "$1" ]; then
    echo "Uso: $0 <archivo_backup.sql.gz>"
    echo ""
    echo "Backups disponibles:"
    ls -lh backups/garden_web_*.sql.gz 2>/dev/null || echo "  (ninguno en ./backups/)"
    exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "ERROR: Archivo no encontrado: $BACKUP_FILE"
    exit 1
fi

echo "⚠️  ADVERTENCIA: Esto va a REEMPLAZAR toda la base de datos garden_web."
echo "Archivo: $BACKUP_FILE"
echo ""
read -p "¿Estás seguro? (escribe 'si' para confirmar): " CONFIRM

if [ "$CONFIRM" != "si" ]; then
    echo "Cancelado."
    exit 0
fi

echo "Restaurando..."

# Drop y recrear la BD
docker compose exec -T db psql -U garden -d postgres -c "DROP DATABASE IF EXISTS garden_web;"
docker compose exec -T db psql -U garden -d postgres -c "CREATE DATABASE garden_web;"

# Restaurar
gunzip -c "$BACKUP_FILE" | docker compose exec -T db psql -U garden garden_web

echo "✅ Restore completado desde $BACKUP_FILE"
echo ""
echo "Ejecutar migraciones pendientes:"
echo "  docker compose exec app npx prisma migrate deploy"

#!/bin/sh
# ============================================
# Backup automático de PostgreSQL
# Ejecutado por el container garden-backup via cron
#
# Retención: $BACKUP_RETENTION_DAYS días (default 30)
# Destino: /backups/ (volumen Docker mapeado)
# ============================================

set -e

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="/backups/garden_web_${TIMESTAMP}.sql.gz"
RETENTION=${BACKUP_RETENTION_DAYS:-30}

echo "[$(date)] Iniciando backup..."

# Dump + comprimir
pg_dump -h "$PGHOST" -U "$PGUSER" "$PGDATABASE" | gzip > "$BACKUP_FILE"

# Verificar que el archivo no esté vacío
if [ ! -s "$BACKUP_FILE" ]; then
    echo "[$(date)] ERROR: Backup vacío. Algo falló."
    rm -f "$BACKUP_FILE"
    exit 1
fi

SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
echo "[$(date)] Backup completado: $BACKUP_FILE ($SIZE)"

# Limpiar backups antiguos
DELETED=$(find /backups/ -name "garden_web_*.sql.gz" -mtime +${RETENTION} -print -delete | wc -l)
if [ "$DELETED" -gt 0 ]; then
    echo "[$(date)] Eliminados $DELETED backups con más de ${RETENTION} días"
fi

# Listar backups existentes
echo "[$(date)] Backups disponibles:"
ls -lh /backups/garden_web_*.sql.gz 2>/dev/null || echo "  (ninguno)"

echo "[$(date)] Backup finalizado."

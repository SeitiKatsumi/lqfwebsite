#!/bin/bash
# Run the uploaded, reviewed release as root on the CapRover host.
set -euo pipefail
release="$(cd "$(dirname "$0")" && pwd)"
wp="$(docker ps -q --filter name=srv-captain--lqf-conteudo-wordpress.1)"
db="$(docker ps -q --filter name=srv-captain--lqf-conteudo-db.1)"
test -n "$wp" && test -n "$db"
content=/var/lib/docker/volumes/captain--lqf-conteudo-wp-data/_data/conteudo/wp-content
test -d "$content/themes" && test -d "$content/plugins"
backup="/root/lqf-conteudo-backup/theme-$(date -u +%Y%m%dT%H%M%SZ)"
umask 077
mkdir -p "$backup"
docker exec "$db" sh -c 'MYSQL_PWD="$MYSQL_ROOT_PASSWORD" mysqldump -u root --single-transaction --no-tablespaces "$MYSQL_DATABASE"' > "$backup/database.sql"
test -s "$backup/database.sql"
tar -czf "$backup/wp-content.tar.gz" -C "$content" .
docker cp "$release/backup-settings.php" "$wp:/tmp/lqf-backup-settings.php"
docker exec "$wp" php /tmp/lqf-backup-settings.php > "$backup/settings.json"
docker cp "$release/rollback-settings.php" "$wp:/tmp/lqf-rollback-settings.php"
docker cp "$backup/settings.json" "$wp:/tmp/lqf-before-settings.json"
rollback() {
    for item in ./themes/lqf ./plugins/lqf-category-templates; do
        if tar -tzf "$backup/wp-content.tar.gz" "$item" >/dev/null 2>&1; then
            tar -xzf "$backup/wp-content.tar.gz" -C "$content" "$item"
        fi
    done
    docker exec "$wp" php /tmp/lqf-rollback-settings.php /tmp/lqf-before-settings.json
    echo "Deployment failed; backup: $backup" >&2
}
trap rollback ERR
# Only our theme and plugin are copied; never replace all wp-content or the DB.
cp -a "$release/lqf" "$content/themes/"
cp -a "$release/lqf-category-templates" "$content/plugins/"
chown -R 33:33 "$content/themes/lqf" "$content/plugins/lqf-category-templates"
find "$content/themes/lqf" "$content/plugins/lqf-category-templates" -type d -exec chmod 755 {} +
find "$content/themes/lqf" "$content/plugins/lqf-category-templates" -type f -exec chmod 644 {} +
docker exec "$wp" sh -c 'find /var/www/html/conteudo/wp-content/themes/lqf /var/www/html/conteudo/wp-content/plugins/lqf-category-templates -name "*.php" -print0 | xargs -0 -n1 php -l'
docker cp "$release/activate.php" "$wp:/tmp/lqf-activate.php"
docker exec "$wp" php /tmp/lqf-activate.php
docker cp "$release/test-templates.php" "$wp:/tmp/lqf-test-templates.php"
docker exec "$wp" php /tmp/lqf-test-templates.php
echo "Backup: $backup"

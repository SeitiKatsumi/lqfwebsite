# WordPress em producao

Site: https://www.lqf.com.br/conteudo/
Admin: https://www.lqf.com.br/conteudo/wp-admin/

CapRover: lqf-conteudo-wordpress (wordpress:7.1-apache, porta interna 80)
e lqf-conteudo-db (mysql:8.4.8, sem porta publica).
Volumes: lqf-conteudo-wp-data em /var/www/html;
lqf-conteudo-db-data em /var/lib/mysql.
Working directory: /var/www/html/conteudo.
WP_HOME e WP_SITEURL: https://www.lqf.com.br/conteudo
FORCE_SSL_ADMIN e DISALLOW_FILE_EDIT ativados.
Idioma pt_BR, fuso America/Sao_Paulo, permalinks /%postname%/.

O template Nginx do app lqfwebsite encaminha /conteudo/ para
http://srv-captain--lqf-conteudo-wordpress:80 preservando o caminho.
Envia Host www.lqf.com.br e X-Forwarded-Proto https.
/conteudo redireciona para /conteudo/; HTTP redireciona para HTTPS.
Demais rotas continuam no Next.js. O template persiste no CapRover.

Credenciais e configuracao anterior ficam em /root/lqf-conteudo-backup/
no servidor, restritas a root. Nunca enviar credenciais ao Git.
Nao remover volumes nas atualizacoes. Atualizar o core pelo WordPress/WP-CLI:
trocar a imagem nao atualiza arquivos existentes no volume.

Validar /conteudo/, /conteudo/wp-login.php,
/conteudo/politica-de-privacidade/, /conteudo/wp-json/, / e /tecnologia.

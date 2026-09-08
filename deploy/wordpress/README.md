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

## Tema LQF e modelos por categoria (2026-09-08)

Home estatica: pagina `inicio-lqf`, com template `front-page`.
O site principal e /processo continuam no Next.js, sem mudancas.
Tema nativo `lqf`, sem Elementor, formularios ou Iris.
Todos os botoes de conversao levam a https://www.lqf.com.br/contato#formulario.
Links de navegacao, telefone, email e politica mantem seus destinos.
OneDash SEO Head permanece ativo e controla os metadados de SEO.

### Como usar no painel

1. Em Posts > Adicionar novo, escreva titulo/conteudo e marque a categoria SEO.
2. O post recebe o modelo **LQF — Processo SEO** automaticamente: titulo H1 e
   conteudo aparecem depois das seis etapas e antes do CTA final.
3. Para mudar o layout, use Aparencia > Editor > Modelos. Para criar outro,
   adicione um modelo personalizado para posts; mantenha os blocos nativos
   Titulo do post e Conteudo do post nos locais desejados.
4. Em Posts > Categorias, escolha esse modelo no campo **Modelo dos posts**.
   Isso nao altera o arquivo/listagem da categoria.

Modelo explicito no post tem prioridade; entre categorias associadas, vence
a de menor ID. Modelo ausente ou categoria sem associacao usa `single`.
Escolher Padrao do tema explicitamente tambem persiste em novos deploys.
Edicoes do Editor e associacoes vivem no banco; arquivos do tema sao defaults.
Para editar a home, selecione o modelo Pagina inicial no Editor do site.
Partes de cabecalho, etapas, CTA e rodape sao compartilhadas entre modelos.

### Arquivos e comandos

- `lqf/`: tema, modelos, partes, estilos, imagens WebP e fonte Inter local.
- `lqf-category-templates/`: seletor seguro de modelos na categoria.
- `build-theme.mjs`: gera blocos reutilizando navItems/processSteps de lib/site.ts.
- `deploy.sh`: backup MySQL/wp-content/settings, copia restrita, PHP lint,
  ativacao idempotente e testes. Em falha restaura os arquivos anteriores do
  tema/plugin e as configuracoes de leitura/plugins. O SQL completo fica no
  backup para recuperacao manual; nao e importado automaticamente.

Na raiz do repositorio:

```text
node deploy/wordpress/build-theme.mjs
node deploy/wordpress/qa-browser.cjs
node deploy/wordpress/qa-editor.cjs
```

Os testes de navegador usam Playwright do runtime do host via NODE_PATH e
Chrome instalado, sem dependencias novas no projeto. `qa-editor.cjs` usa SSH
autorizado e `qa-session.php` copiado apenas a /tmp do container; cria uma
sessao de 15 minutos e post privado, revogando/removendo ambos no finally.
Em interrupcao do processo, execute `php /tmp/lqf-qa-session.php cleanup` no
container WordPress. Nao publicar scripts CLI dentro de wp-content.

Envie `lqf/`, `lqf-category-templates/`, `activate.php`, `backup-settings.php`,
`rollback-settings.php`, `test-templates.php` e `deploy.sh` por SCP para uma
pasta root de release no servidor. Execute `bash /caminho/do/release/deploy.sh`.
O script descobre os containers por nome de servico. Nenhum volume e apagado,
nenhuma porta e alterada. Nao requer rebuild do Next.js.

### Verificacoes executadas

- PHP lint de todos os arquivos instalados.
- `test-templates.php`: home, categorias, prioridades, fallback, nonce,
  permissoes, criacao REST e metadados OneDash; fixtures privadas removidas.
- Navegador: 1440px, 820px e 390px; sem overflow, imagens carregadas,
  menu abre/fecha, CTAs corretos e rotas HTTP 200.
- Editor: parse/validacao nativa dos templates e patterns sem blocos invalidos.
- Capturas visuais da home, post SEO privado e referencia comparadas.
- Backup inicial anterior ao tema:
  `/root/lqf-conteudo-backup/theme-20260908T190427Z/` (somente root).

As capturas ficam em `qa-screenshots/` (ignorado pelo Git). Nenhuma credencial,
cookie, backup SQL ou conteudo privado deve ser versionado.

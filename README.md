# LQF Website

Novo site institucional da LQF Farmacêutica, criado com Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

URL local padrão:

```text
http://127.0.0.1:3000
```

## Build

```bash
pnpm build
```

## Docker / CapRover

O projeto inclui:

- `Dockerfile` multi-stage com build standalone do Next e runtime Node na porta 80.
- `captain-definition` apontando para o Dockerfile.
- `.dockerignore` para reduzir o contexto de build.
- `pnpm-workspace.yaml` no contexto Docker para permitir os builds nativos exigidos por `sharp` e `unrs-resolver`.

No CapRover, crie o app e faça deploy pelo repositório `SeitiKatsumi/lqfwebsite`.

Porta interna:

```text
80
```

## Iris no Live Chat e Admin legado

O chat do site usa o canal web do Live Chat, que concentra a IA, os atendentes e o histórico. Configure no CapRover (valores por implantação):

```text
LIVECHAT_BASE_URL=https://live.elevenmind.com.br
LIVECHAT_TENANT_SLUG=lqf
```

As rotas `/api/iris` e `/api/iris/start` são proxies same-origin. Não precisam de chave OpenAI nem token administrativo. A sessão usa UUID aleatório no cabeçalho `X-Visitor-Id` e localStorage separado por servidor/workspace; não reutiliza o identificador do chat antigo. Nome, e-mail e WhatsApp são registrados em uma mensagem inicial do visitante. Reabrir o chat recupera o histórico sem reenviar os dados. Notas privadas não são encaminhadas ao navegador.

Validação local: `node lib/liveChat.test.mjs` e `pnpm build`. O limite de envio é 30 requisições/minuto/IP por processo; múltiplas réplicas exigem limite compartilhado.

Preserve `/data`, as variáveis existentes e o Nginx que encaminha `/conteudo/` ao WordPress. O painel `/admin` e seu SQLite mantêm os registros antigos e os formulários; novos atendimentos do chat são acompanhados no Live Chat.

Configuração do painel legado no CapRover:

```text
ADMIN_PASSWORD=...
SQLITE_PATH=/data/lqf-leads.sqlite
```

O painel de gestão fica em `/admin` e exige a chave `ADMIN_PASSWORD`. Configurações de IA antigas desse painel não controlam o chat web integrado.

Para preservar chave da Iris, leads, formulários e histórico de conversa em produção, configure um diretório persistente no CapRover:

```text
Caminho no App: /data
Rótulo: lqfwebsite-data
```

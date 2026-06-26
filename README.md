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

## Iris IA e Admin

A assistente Iris registra leads, pipeline e histórico de conversa em SQLite. Configure estas variáveis no CapRover:

```text
OPENAI_API_KEY=...
ADMIN_PASSWORD=...
SQLITE_PATH=/app/data/lqf-leads.sqlite
```

`OPENAI_MODEL` é opcional. Sem `OPENAI_API_KEY`, a Iris responde com uma base local simples. O painel de gestão fica em `/admin` e exige a chave `ADMIN_PASSWORD`.

Para preservar os dados em produção, configure volume persistente no CapRover apontando para `/app/data`.

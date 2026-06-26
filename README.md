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

O projeto já inclui:

- `Dockerfile` multi-stage com export estático do Next e runtime Nginx.
- `captain-definition` apontando para o Dockerfile.
- `.dockerignore` para reduzir o contexto de build.
- `pnpm-workspace.yaml` no contexto Docker para permitir os builds nativos exigidos por `sharp` e `unrs-resolver`.

No CapRover, crie o app e faça deploy pelo repositório `SeitiKatsumi/lqfwebsite`.

Porta interna:

```text
80
```

Não há persistência local obrigatória neste site.

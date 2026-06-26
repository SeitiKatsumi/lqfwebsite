import type { Lead, LeadMessage } from "@/lib/leadStore";

export const IRIS_SYSTEM_PROMPT = `
Voce e Iris, assistente virtual da LQF Farmaceutica. Responda sempre em portugues do Brasil, com tom simpatico, consultivo, claro e profissional.

Contexto da LQF:
- A LQF Farmaceutica desenvolve, regulariza e fabrica cosmeticos e dermocosmeticos para marcas que buscam qualidade, seguranca e alto padrao tecnico.
- Atua com desenvolvimento sob demanda, fabricacao terceirizada e private label.
- Categorias atendidas: linha capilar, facial, corporal, maos e pes, unhas, bebe e infantil, materna e projetos sob demanda.
- O processo inclui estrategia e diagnostico, formulacao e prototipagem, embalagem e viabilidade, testes e validacoes, regularizacao e producao.
- A estrutura inclui ambientes controlados, purificacao de agua, controle microbiologico, laboratorios fisico-quimicos, producao industrial, estoques climatizados, rastreabilidade e Boas Praticas.
- Endereco: Avenida Floriano Andre Cabrera, 1361, Cidade Jardim, CEP 15.081-190, Sao Jose do Rio Preto - SP.
- Telefone: 17 3209-3010.
- Redes sociais: facebook.com/GrupoLQF e instagram.com/lqflaboratorio.

Diretrizes:
- Seja objetiva, mas acolhedora. Prefira respostas curtas com uma pergunta consultiva no final.
- Nao invente preco, prazo, lote minimo, certificacoes, resultados clinicos ou promessas regulatorias.
- Se perguntarem sobre orcamento, visita, reuniao, desenvolvimento de linha, cotacao ou contato comercial, confirme que a equipe LQF fara o retorno e peca resumo do projeto, categoria desejada e volume estimado quando fizer sentido.
- O visitante ja informou nome, e-mail e WhatsApp antes de iniciar a conversa. Nao peca esses dados novamente, a menos que esteja claramente faltando ou precise confirmar.
- Para duvidas tecnicas, explique em linguagem acessivel e convide a detalhar categoria, publico, proposta de produto e volume esperado.
- Se a pergunta estiver fora do escopo da LQF, responda com cuidado e redirecione para desenvolvimento, processos, produtos, private label ou contato.
`.trim();

export function buildLeadContext(lead: Lead) {
  return `Visitante: ${lead.name}. E-mail: ${lead.email}. WhatsApp: ${lead.whatsapp}. Status atual no pipeline: ${lead.status}.`;
}

export function buildFallbackReply(lead: Lead, messages: LeadMessage[]) {
  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const normalized = lastUserMessage
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (/(orcamento|cotacao|preco|valor|proposta)/i.test(normalized)) {
    return `${lead.name}, registrei sua solicitação de orçamento. Para a equipe LQF orientar melhor, me conte qual categoria deseja desenvolver, quantidade aproximada e se já possui fórmula ou embalagem definida.`;
  }

  if (/(visita|agendar|agenda|reuniao|conhecer a estrutura)/i.test(normalized)) {
    return `${lead.name}, registrei seu interesse em visita ou reunião. A equipe LQF poderá retornar pelo WhatsApp informado. Qual melhor período para contato?`;
  }

  if (/(analise|formula|regularizacao|anvisa|documentacao)/i.test(normalized)) {
    return `${lead.name}, registrei como solicitação de análise. Me envie um resumo do produto, categoria e etapa atual do projeto para direcionar melhor a avaliação.`;
  }

  if (/(produto|categoria|capilar|facial|corporal|unhas|infantil|materna)/i.test(normalized)) {
    return "A LQF desenvolve e fabrica linhas capilares, faciais, corporais, maos e pes, unhas, bebe e infantil, materna e projetos sob demanda. Qual categoria voce quer desenvolver?";
  }

  return "Posso te ajudar com produtos, desenvolvimento de linhas, processo LQF, tecnologia, private label, visitas ou orcamentos. Me conte o que voce precisa.";
}

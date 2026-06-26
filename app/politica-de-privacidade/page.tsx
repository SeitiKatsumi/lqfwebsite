import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Política de Privacidade | LQF Farmacêutica",
  description: "Política de privacidade, cookies e proteção de dados pessoais da LQF Farmacêutica."
};

const sections = [
  {
    title: "1. Compromisso com a privacidade",
    text:
      "A LQF Farmacêutica respeita a privacidade dos visitantes, clientes, parceiros e titulares de dados pessoais. Esta política explica, de forma geral, como informações podem ser coletadas e utilizadas em nossos canais digitais, incluindo formulários de contato, atendimento por assistente virtual, cookies e recursos de navegação."
  },
  {
    title: "2. Dados que podemos coletar",
    text:
      "Podemos coletar dados informados voluntariamente, como nome, e-mail, telefone, WhatsApp, empresa, interesse comercial, informações sobre projetos, mensagens enviadas pelo chat Iris e demais conteúdos encaminhados por formulários. Também podemos coletar dados técnicos de navegação, como endereço IP, tipo de dispositivo, páginas acessadas, data, horário, navegador e preferências de cookies."
  },
  {
    title: "3. Finalidades de uso",
    text:
      "Os dados podem ser utilizados para responder solicitações, registrar atendimentos, analisar oportunidades comerciais, agendar visitas, elaborar propostas, prestar suporte, aprimorar a experiência no site, manter segurança, cumprir obrigações legais e documentar interações relacionadas a desenvolvimento, fabricação, regularização e atendimento comercial."
  },
  {
    title: "4. Atendimento Iris e histórico de conversa",
    text:
      "Ao iniciar o atendimento pela Iris, solicitamos nome, e-mail e WhatsApp para identificar o contato, manter o histórico da conversa e permitir que a equipe LQF dê continuidade ao atendimento. As mensagens podem ser armazenadas para acompanhamento interno, melhoria de atendimento e organização do pipeline comercial."
  },
  {
    title: "5. Cookies e tecnologias similares",
    text:
      "O site pode utilizar cookies essenciais para funcionamento, cookies de preferência e, futuramente, cookies analíticos ou de marketing. Cookies ajudam a lembrar escolhas, medir desempenho, entender navegação e melhorar a experiência. O titular pode bloquear ou apagar cookies pelo próprio navegador, ciente de que alguns recursos podem ser afetados."
  },
  {
    title: "6. Compartilhamento",
    text:
      "A LQF não comercializa dados pessoais. Informações podem ser compartilhadas com fornecedores de tecnologia, hospedagem, atendimento, segurança, ferramentas de análise ou parceiros necessários para execução do serviço solicitado, sempre observando critérios de necessidade, segurança e conformidade com a LGPD."
  },
  {
    title: "7. Segurança e retenção",
    text:
      "Adotamos medidas razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida. Os dados são mantidos pelo tempo necessário para cumprir as finalidades informadas, obrigações legais, regulatórias, contratuais ou defesa de direitos."
  },
  {
    title: "8. Direitos do titular",
    text:
      "Nos termos da Lei Geral de Proteção de Dados, o titular pode solicitar confirmação de tratamento, acesso, correção, atualização, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento, quando aplicável."
  },
  {
    title: "9. Contato",
    text:
      "Para dúvidas sobre privacidade, proteção de dados ou solicitações relacionadas à LGPD, entre em contato pelos canais oficiais da LQF Farmacêutica. Esta política poderá ser atualizada periodicamente para refletir melhorias, mudanças legais ou novos recursos do site."
  }
];

export default function PrivacyPage() {
  return (
    <main className="bg-white pt-28">
      <section className="section-shell py-14 md:py-24">
        <SectionTitle
          eyebrow="Privacidade e LGPD"
          title="Política de Privacidade"
          text="Texto preliminar para orientar visitantes, clientes e parceiros sobre uso de dados, cookies e atendimento digital no site da LQF."
        />
        <div className="mt-14 grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[24px] border border-graphite/10 bg-porcelain/55 p-6 md:p-8">
              <h2 className="text-xl font-light text-graphite md:text-2xl">{section.title}</h2>
              <p className="mt-4 text-base font-light leading-8 text-graphite/70">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import {
  Beaker,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Thermometer,
  Waves
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/produtos", label: "Produtos" },
  { href: "/#partners", label: "Partners" },
  { href: "/processo", label: "Processo LQF" },
  { href: "/private-label", label: "Private Label" },
  { href: "/contato", label: "Contato" }
];

export const placeholders = [
  "/placeholder/lqf-brand-01.png",
  "/placeholder/lqf-brand-02.png",
  "/placeholder/lqf-brand-03.png"
];

export const authorityPillars = [
  {
    title: "Desenvolvimento",
    text: "Formulações criadas ou adaptadas de acordo com proposta, performance, sensorialidade e posicionamento da marca.",
    icon: FlaskConical
  },
  {
    title: "Regularização",
    text: "Apoio técnico para adequação regulatória, rotulagem e requisitos conforme a categoria do produto.",
    icon: ClipboardCheck
  },
  {
    title: "Fabricação",
    text: "Processos produtivos controlados, equipamentos industriais, rastreabilidade e acompanhamento técnico.",
    icon: Factory
  },
  {
    title: "Qualidade",
    text: "Análises, controles e validações para garantir segurança, estabilidade e conformidade do produto final.",
    icon: ShieldCheck
  }
];

export const technologyItems = [
  { title: "Ambientes controlados", text: "Tratamento e validação de ar em áreas críticas de pesagem, manipulação, envase e embalagem.", icon: Thermometer },
  { title: "Purificação de água", text: "Osmose reversa, radiação ultravioleta e circuito contínuo para áreas de fabricação.", icon: Droplets },
  { title: "Controle microbiológico", text: "Processos estruturados de limpeza, sanitização e monitoramento microbiológico.", icon: Beaker },
  { title: "Laboratórios físico-químicos", text: "Análises de matérias-primas, insumos, processos e produtos acabados.", icon: TestTube2 },
  { title: "Produção industrial", text: "Misturadores, reatores e equipamentos preparados para diferentes tipos de formulação.", icon: Factory },
  { title: "Estoques climatizados", text: "Áreas distintas para matérias-primas, embalagens e produtos acabados.", icon: Boxes },
  { title: "Rastreabilidade", text: "Controle informatizado de lotes, etapas produtivas e liberação técnica.", icon: PackageCheck },
  { title: "Boas Práticas", text: "Documentação, validação e padronização do processo produtivo completo.", icon: CheckCircle2 }
];

export const productCategories = [
  {
    title: "Linha Capilar",
    text: "Tratamento do couro cabeludo, reconstrução, manutenção, finalização, matização, cachos e transformação capilar.",
    image: placeholders[0]
  },
  {
    title: "Linha Facial",
    text: "Limpeza, tratamento, renovação, hidratação, proteção, uniformização e acabamento da pele.",
    image: placeholders[1]
  },
  {
    title: "Linha Corporal",
    text: "Hidratação, cuidado diário, tratamento estético, perfumação e bem-estar.",
    image: placeholders[2]
  },
  {
    title: "Mãos e Pés",
    text: "Hidratação, conforto, proteção, cuidado específico, controle de odores e tratamento.",
    image: placeholders[0]
  },
  {
    title: "Unhas",
    text: "Esmaltação, bases, removedores, acabamento, tratamento e preparação das unhas.",
    image: placeholders[1]
  },
  {
    title: "Bebê e Infantil",
    text: "Cuidado da pele e cabelos de bebês e crianças, com suavidade, segurança e sensorialidade.",
    image: placeholders[2]
  },
  {
    title: "Linha Materna",
    text: "Cuidado da pele durante a maternidade, com foco em hidratação, proteção e bem-estar.",
    image: placeholders[0]
  },
  {
    title: "Sob demanda",
    text: "Formulações criadas ou adaptadas conforme estratégia, performance, requisitos regulatórios e viabilidade produtiva.",
    image: placeholders[1]
  }
];

export const processSteps = [
  {
    title: "Estratégia e diagnóstico",
    text: "Reunião técnica para compreender proposta da marca, produtos desejados, público-alvo, posicionamento e diferenciais."
  },
  {
    title: "Formulação e prototipagem",
    text: "Desenvolvimento da fórmula, avaliação de performance, sensorialidade, estabilidade, segurança e viabilidade produtiva."
  },
  {
    title: "Embalagem e viabilidade",
    text: "Definição de frascos, potes, bisnagas, válvulas, tampas, cartuchos, rótulos e demais componentes."
  },
  {
    title: "Testes e validações",
    text: "Testes de estabilidade, análises físico-químicas, microbiológicas e avaliações complementares quando aplicável."
  },
  {
    title: "Regularização",
    text: "Apoio técnico para rotulagem, documentação e regularização conforme exigências da ANVISA e categoria do produto."
  },
  {
    title: "Produção",
    text: "Planejamento, fabricação, envase, embalagem, controle de qualidade e liberação do produto acabado."
  }
];

export const qualityItems = [
  "Boas Práticas de Fabricação",
  "Controle físico-químico",
  "Controle microbiológico",
  "Validação de processos",
  "Rastreabilidade",
  "Segurança produtiva"
];

export const differentials = [
  "Estrutura farmacêutica",
  "Desenvolvimento sob demanda",
  "Capacidade para produtos de alta exigência",
  "Controle de qualidade",
  "Apoio regulatório",
  "Rastreabilidade",
  "Produção terceirizada",
  "Private Label"
];

export const privateLabelBlocks = [
  {
    title: "Para novas marcas",
    text: "Desenvolvimento de produtos para empresas que desejam lançar sua primeira linha."
  },
  {
    title: "Para marcas em expansão",
    text: "Criação de novos produtos e ampliação de portfólio com consistência técnica."
  },
  {
    title: "Para empresas consolidadas",
    text: "Fabricação terceirizada com controle, rastreabilidade e padrão farmacêutico."
  },
  {
    title: "Para projetos especiais",
    text: "Formulações sob demanda e produtos com maior exigência técnica."
  }
];

export const pageMeta = {
  home: {
    title: "LQF Farmacêutica | Desenvolvimento e Fabricação de Cosméticos e Dermocosméticos",
    description:
      "A LQF Farmacêutica desenvolve, regulariza e fabrica cosméticos e dermocosméticos para marcas que buscam qualidade, segurança e alto padrão técnico."
  },
  sobre: {
    title: "Sobre a LQF Farmacêutica | A ciência por trás da beleza",
    description:
      "Conheça a LQF Farmacêutica, indústria especializada em desenvolvimento, formulação e fabricação terceirizada de cosméticos e dermocosméticos."
  },
  tecnologia: {
    title: "Tecnologia e Qualidade | LQF Farmacêutica",
    description:
      "Estrutura produtiva, ambientes controlados, purificação de água, controle de qualidade e rastreabilidade para fabricação de cosméticos e dermocosméticos."
  },
  produtos: {
    title: "Produtos e Categorias | LQF Farmacêutica",
    description:
      "Desenvolvimento e fabricação de linhas capilares, faciais, corporais, infantis, maternas, unhas, mãos e pés e produtos sob demanda."
  },
  processo: {
    title: "Processo LQF | Da ideia ao produto pronto para o mercado",
    description:
      "Conheça o processo de desenvolvimento, formulação, testes, regularização e fabricação terceirizada da LQF Farmacêutica."
  },
  privateLabel: {
    title: "Private Label Cosméticos e Dermocosméticos | LQF Farmacêutica",
    description:
      "Desenvolvimento e fabricação terceirizada para marcas que desejam lançar ou ampliar linhas de cosméticos e dermocosméticos."
  },
  contato: {
    title: "Contato | Desenvolva sua linha com a LQF Farmacêutica",
    description:
      "Fale com a LQF Farmacêutica para desenvolver sua linha de cosméticos, dermocosméticos ou produtos de cuidado pessoal."
  }
};

export const iconMap = {
  Layers3,
  Sparkles,
  Waves
};

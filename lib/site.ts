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

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/tecnologia", label: "Tecnologia" },
  {
    href: "/produtos",
    label: "Inovações",
    children: [
      {
        href: "/produtos#facial",
        label: "Facial",
        children: [
          { href: "/produtos/facial/cronograma-facial-colorido", label: "Cronograma Facial Colorido" },
          { href: "/produtos/facial/expossoma", label: "Expossoma" },
          { href: "/produtos/facial/cremes-cuidados-especiais", label: "Cremes Cuidados Especiais" },
          { href: "/produtos/facial/higienizacao-pele", label: "Produtos para Higienizar a Pele" },
          { href: "/produtos/facial/geleias-faciais-coloridas", label: "Geleias Faciais Coloridas" },
          { href: "/produtos/facial/make-performance", label: "Linha Make Performance" },
          { href: "/produtos/facial/sensitive-balance", label: "Sensitive Balance" },
          { href: "/produtos/facial/seruns-ciclo-completo", label: "Séruns Ciclo Completo" },
          { href: "/produtos/facial/skinimalismo", label: "Skinimalismo" },
          { href: "/produtos/facial/skincare-pele-acneica", label: "Skincare Pele Acneica" },
          { href: "/produtos/facial/skincare-pele-madura", label: "Skincare Pele Madura" }
        ]
      },
      {
        href: "/produtos#corporal",
        label: "Corporal",
        children: [
          { href: "/produtos/corporal/body-splash-funcional", label: "Body Splash Funcional" },
          { href: "/produtos/corporal/cases-de-sucesso", label: "Cases de Sucesso" },
          { href: "/produtos/corporal/body-care-sensorial", label: "Body Care Sensorial" },
          { href: "/produtos/corporal/desodorante-rollon", label: "Desodorante Roll-on" },
          { href: "/produtos/corporal/dermocorporais-skinificacao", label: "Dermocorporais - Skinificação" }
        ]
      },
      {
        href: "/produtos#capilar",
        label: "Capilar",
        children: [
          { href: "/produtos/capilar/linha-capilar-coreana", label: "Linha Capilar Coreana" },
          { href: "/produtos/capilar/cuidados-especiais", label: "Cuidados Especiais" },
          { href: "/produtos/capilar/linha-capilar-frutada", label: "Linha Capilar Frutada" },
          { href: "/produtos/capilar/recuperacao-tecnologica", label: "Capilar Recuperação Tecnológica" },
          { href: "/produtos/capilar/variada", label: "Capilar Variada" },
          { href: "/produtos/capilar/mascaras-capilares", label: "Máscaras Capilares" },
          { href: "/produtos/capilar/oleos-capilares", label: "Óleos Capilares" },
          { href: "/produtos/capilar/perfumes-capilares", label: "Perfumes Capilares" },
          { href: "/produtos/capilar/tonicos-capilares", label: "Tônicos Capilares" }
        ]
      },
      { href: "/produtos#maos-e-pes", label: "Mãos e pés" },
      {
        href: "/produtos#unhas",
        label: "Unhas",
        children: [
          { href: "/produtos/unhas/cuidados-unhas-cuticulas", label: "Cuidados para Unhas e Cutículas" },
          { href: "/produtos/unhas/bases-unhas", label: "Bases para Unhas" }
        ]
      },
      {
        href: "/produtos#bebe-e-infantil",
        label: "Bebê e Infantil",
        children: [{ href: "/produtos/bebe-e-infantil/essencial-infantil", label: "Essencial Infantil" }]
      },
      {
        href: "/produtos#bucal",
        label: "Bucal",
        children: [{ href: "/produtos/bucal/enxaguantes-bucais", label: "Enxaguantes Bucais" }]
      },
      { href: "/produtos#linha-materna", label: "Linha Materna" }
    ]
  },
  { href: "/#partners", label: "Partners" },
  { href: "/processo", label: "Processo LQF" },
  { href: "/private-label", label: "Private Label" },
  { href: "/contato#formulario", label: "Contato" }
];

export const placeholders = [
  "/placeholder/lqf-brand-01.png",
  "/placeholder/lqf-brand-02.png",
  "/placeholder/lqf-brand-03.png"
];

export const conceptImages = {
  hero: "/humanized/home-hero-facial-ok.png",
  manifesto: "/concept/concept-11.png",
  about: "/concept/concept-23.png",
  facade: "/facade/lqf-fachada.png",
  technology: "/concept/concept-16.png",
  technologyHero: "/humanized/tecnologia-processo.png",
  products: "/concept/concept-13.png",
  process: "/concept/concept-20.png",
  privateLabel: "/concept/concept-06.png",
  contact: "/concept/concept-01.png",
  quality: "/concept/concept-19.png",
  packaging: "/concept/concept-04.png",
  demand: "/concept/concept-10.png",
  editorialA: "/concept/concept-17.png",
  editorialB: "/concept/concept-24.png"
};

export const chemicalImages = {
  science: "/chemical/chemical-01.png",
  quality: "/chemical/chemical-02.png",
  development: "/chemical/chemical-03.png",
  precision: "/chemical/chemical-04.png"
};

export const lineImages = {
  capilar: "/lines/capilar.png",
  facial: "/lines/facial.png",
  corporal: "/lines/corporal.png",
  maosEPes: "/lines/maos-e-pes.png",
  unhas: "/lines/unhas.png",
  bebeInfantil: "/lines/bebe-infantil.png",
  bucal: "/lines/facial.png",
  materna: "/lines/materna.png"
};

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
    slug: "capilar",
    title: "Linha Capilar",
    text: "Tratamento do couro cabeludo, reconstrução, manutenção, finalização, matização, cachos e transformação capilar.",
    image: lineImages.capilar
  },
  {
    slug: "facial",
    title: "Linha Facial",
    text: "Limpeza, tratamento, renovação, hidratação, proteção, uniformização e acabamento da pele.",
    image: lineImages.facial
  },
  {
    slug: "corporal",
    title: "Linha Corporal",
    text: "Hidratação, cuidado diário, tratamento estético, perfumação e bem-estar.",
    image: lineImages.corporal
  },
  {
    slug: "maos-e-pes",
    title: "Mãos e Pés",
    text: "Hidratação, conforto, proteção, cuidado específico, controle de odores e tratamento.",
    image: lineImages.maosEPes
  },
  {
    slug: "unhas",
    title: "Unhas",
    text: "Esmaltação, bases, removedores, acabamento, tratamento e preparação das unhas.",
    image: lineImages.unhas
  },
  {
    slug: "bebe-e-infantil",
    title: "Bebê e Infantil",
    text: "Cuidado da pele e cabelos de bebês e crianças, com suavidade, segurança e sensorialidade.",
    image: lineImages.bebeInfantil
  },
  {
    slug: "bucal",
    title: "Linha Bucal",
    text: "Enxaguantes e produtos de higiene complementar com foco em frescor, rotina e comunicação regulatória segura.",
    image: lineImages.bucal
  },
  {
    slug: "linha-materna",
    title: "Linha Materna",
    text: "Cuidado da pele durante a maternidade, com foco em hidratação, proteção e bem-estar.",
    image: lineImages.materna
  },
  {
    slug: "sob-demanda",
    title: "Sob demanda",
    text: "Formulações criadas ou adaptadas conforme estratégia, performance, requisitos regulatórios e viabilidade produtiva.",
    image: conceptImages.demand
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
    title: "Inovações e Categorias | LQF Farmacêutica",
    description:
      "Desenvolvimento e fabricação de linhas capilares, faciais, corporais, infantis, maternas, unhas, mãos e pés e produtos sob demanda."
  },
  cronogramaFacialColorido: {
    title: "Cronograma Facial Colorido | LQF Farmacêutica",
    description:
      "Linha conceitual de cronograma facial guiado por cores para marcas que buscam rotina intuitiva, experiência de prateleira e desenvolvimento terceirizado com padrão LQF."
  },
  escudoExpossoma: {
    title: "Linha Escudo Expossoma | LQF Farmacêutica",
    description:
      "Linha dermocosmética e capilar inspirada no expossoma para ajudar a proteger pele e cabelos dos efeitos visíveis de estressores ambientais, com tecnologia antipoluição, hidratação e sensorial premium."
  },
  cremesCuidadosEspeciais: {
    title: "Cremes para Cuidados Especiais da Pele | LQF Farmacêutica",
    description:
      "Coleção de cremes faciais com retinol, ácido salicílico, ácido hialurônico, ácido glicólico, arbutin, ácido tranexâmico, vitamina C e niacinamida para necessidades específicas da pele."
  },
  higienizacaoPele: {
    title: "Produtos para Higienizar a Pele | Sabonetes Faciais e Águas Micelares",
    description:
      "Linha de higienização facial com sabonete limpeza intensiva, primer make up, demaquilante micelar, ácido glicólico 10%, esfoliante anticravos, água micelar hidratante e água micelar detox."
  },
  geleiasFaciaisColoridas: {
    title: "Geleias Faciais Coloridas | LQF Farmacêutica",
    description:
      "Linha de geleias faciais em gel glicerinado, oil free e inspiração K-beauty, com complexo de arroz e cores funcionais para uniformização visual, firmeza, hidratação e antioleosidade."
  },
  makePerformance: {
    title: "Linha Make Performance | Makeup Care LQF Farmacêutica",
    description:
      "Plataforma Makeup Care que une skincare e maquiagem com produtos para remover, tratar, preparar, iluminar, proteger, fixar e blindar a maquiagem."
  },
  sensitiveBalance: {
    title: "Sensitive Balance | Cuidados para Pele Sensível, Barreira Cutânea e Conforto",
    description:
      "Sensitive Balance é uma linha dermocosmética para peles sensíveis, com gel de limpeza, sérum barreira, bruma calmante, gel creme SOS, loção noturna, creme para mãos e gel pós-sol."
  },
  serunsCicloCompleto: {
    title: "Linha Séruns Ciclo Completo | Séruns Faciais de Alta Performance",
    description:
      "Linha Séruns Ciclo Completo com ácido hialurônico, resveratrol, tranexâmico, niacinamida, glicólico, retinol, vitamina E, salicílico, zinco, peptídeos e hidratação essencial."
  },
  skinimalismo: {
    title: "Skinimalismo | Ritual Skincare Reduzido",
    description:
      "Landing page Skinimalismo com rotina reduzida de skincare para dia e noite, limpeza intensiva, hidratação facial diurna, filtro solar FPS 30, água micelar hidratante e creme facial noturno."
  },
  skincarePeleAcneica: {
    title: "Skincare para Pele Acneica | Rotina para Oleosidade, Poros e Imperfeições",
    description:
      "Linha de skincare para pele oleosa e com tendência à acne, com sabonete limpeza intensiva, sérum ácido salicílico e zinco, água micelar detox, gel hidratante, gel secativo, máscara secativa e FPS 60."
  },
  skincarePeleMadura: {
    title: "Skincare para Pele Madura | Rotina Dia e Noite com Hidratação e Uniformização",
    description:
      "Linha de skincare para pele madura com sabonete limpeza intensiva, hidratante facial dia, FPS 60, água micelar hidratante, sérum tranexâmico e niacinamida e creme hidratante noite."
  },
  bodySplashFuncional: {
    title: "Body Splash Funcional | LQF Farmacêutica",
    description:
      "Linha conceitual de body splash sem álcool com fragrâncias e ativos cosméticos para hidratar, nutrir, reparar, suavizar e tonificar a pele."
  },
  casesCuidadoCorporal: {
    title: "Cases de Sucesso em Cuidado Corporal | LQF Farmacêutica",
    description:
      "Estudo estratégico de oportunidades em cuidado corporal com categorias de alta procura, ativos funcionais, sensorial ideal e arquitetura de linha para marcas de cosméticos."
  },
  bodyCareSensorial: {
    title: "Linha Body Care Sensorial | LQF Farmacêutica",
    description:
      "Portfólio premium de coleções corporais sensoriais para marcas que desejam inovar com glow effect, skinificação corporal, perfumação funcional e bioativos de alta performance."
  },
  desodoranteRollon: {
    title: "Desodorante Roll-on com Ação Uniformizadora da Pele | LQF Farmacêutica",
    description:
      "Desodorante roll-on sem álcool etílico com proposta uniformizadora, niacinamida, óleo de rosa mosqueta, proteção contra odores e sensorial confortável."
  },
  dermocorporaisSkinificacao: {
    title: "Dermocorporais | Skinificação do Corpo com Séruns de Alta Performance",
    description:
      "Linha dermocorporal de séruns para skinificação do corpo, com niacinamida, ácido hialurônico, colágeno vegetal, ureia, lipoproteínas, óleos vegetais e hidratação inteligente."
  },
  linhaCapilarCoreana: {
    title: "Linha Capilar Coreana — Skinificação | Haircare K-beauty LQF Farmacêutica",
    description:
      "Linha capilar premium inspirada na K-beauty e na skinificação capilar, com máscara intensiva, kit de hidratação em 3 passos e protocolo de reconstrução em 4 passos."
  },
  capilarCuidadosEspeciais: {
    title: "Cuidados Especiais Capilares | Linha Capilar Performance 360 LQF Farmacêutica",
    description:
      "Plataforma capilar de alta performance para couro cabeludo, queda cosmética, detox, caspa, reconstrução, proteção térmica, lamelares, acidificação e cronograma capilar."
  },
  linhaCapilarFrutada: {
    title: "Linha Capilar Frutada | Frutas Brasileiras e Biotecnologia Capilar",
    description:
      "Linha capilar frutada com ativos de frutas brasileiras, biotecnologia vegetal e propostas para brilho, hidratação, proteção, nutrição e força cosmética."
  },
  capilarRecuperacaoTecnologica: {
    title: "Linha Capilar Recuperação Tecnológica | Nutrioil, Reparação Molecular e Gloss",
    description:
      "Linha capilar tecnológica com Nutrioil, Reparação Molecular, Anti Aging, Microbiota Capilar e Antiporosidade com Gloss Intenso para cabelos danificados, porosos e sensibilizados."
  },
  capilarVariada: {
    title: "Capilar Variada | Linha Capilar Resultados Imediatos",
    description:
      "Plataforma capilar completa com linhas para hidratação, nutrição, restauração, cachos, loiros, detox, lisos, densidade, proteção de cor e anti-quebra."
  },
  mascarasCapilares: {
    title: "Máscaras Capilares de Alta Performance | Hidratação, Reconstrução e Antiporosidade",
    description:
      "Coleção de máscaras capilares com Desmaia Total, Ultra Hidratação, Ultra Reconstrutora, Teia de Colágeno, Antiporosidade, Engrossa Fios e Bomba de Vitaminas."
  },
  oleosCapilares: {
    title: "Óleos Finalizadores | Brilho, Anti-Frizz, Proteção Térmica e Reparação de Pontas",
    description:
      "Linha de óleos finalizadores para nutrição, controle de frizz, reparação visual de pontas, brilho intenso, proteção térmica e solar e óleo extraordinário multifuncional."
  },
  perfumesCapilares: {
    title: "Perfumes Capilares | Fragrância, Brilho e Sensorial Premium",
    description:
      "Linha de perfumes capilares com perfumação sofisticada, toque leve, brilho, frescor e narrativa sensorial para haircare premium."
  },
  tonicosCapilares: {
    title: "Tônicos Capilares | Couro Cabeludo, Raiz e Densidade Visual",
    description:
      "Linha de tônicos capilares com propostas para couro cabeludo, raiz, frescor, densidade visual, equilíbrio e cuidado cosmético seguro."
  },
  essencialInfantil: {
    title: "Essencial Infantil | Linha Infantil Low Poo",
    description:
      "Linha infantil com shampoo suave, condicionador, creme para pentear, leave-in, spray desembaraçante e banho infantil com linguagem segura e foco em suavidade."
  },
  enxaguantesBucais: {
    title: "Enxaguantes Bucais | Linha Bucal LQF Farmacêutica",
    description:
      "Linha de enxaguantes bucais infantis e adultos com opções sem álcool, frescor, conforto, sabores e comunicação regulatória segura."
  },
  cuidadosUnhasCuticulas: {
    title: "Cuidados para Unhas e Cutículas | Nail Care LQF Farmacêutica",
    description:
      "Linha completa para higienizar, amolecer, nutrir, proteger, fortalecer e apoiar o cuidado de unhas e cutículas em protocolos profissionais e home care."
  },
  basesUnhas: {
    title: "Bases para Unhas | Tratamento, Proteção e Esmaltação",
    description:
      "Linha de bases para unhas com propostas endurecedora, hidratante, nutritiva, antioxidante, camuflagem, reestruturadora e multibenefício."
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

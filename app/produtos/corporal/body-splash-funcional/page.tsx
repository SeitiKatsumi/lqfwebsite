import type { Metadata } from "next";
import Image from "next/image";
import {
  Beaker,
  Blend,
  CircleDot,
  Coffee,
  Droplets,
  Flower2,
  Gem,
  Heart,
  Leaf,
  ListChecks,
  Moon,
  ShieldCheck,
  Sparkles,
  SprayCan,
  SunMedium,
  WandSparkles
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Body Splash Funcional | LQF Farmacêutica",
  description:
    "Conheça o Body Splash Funcional: fragrância corporal sem álcool com ativos cosméticos para hidratar, nutrir, reparar, suavizar e tonificar a pele."
};

const image = "/products/body-splash-funcional/body-splash-placeholder.jpg";

const conceptCards = [
  {
    title: "Perfuma",
    text: "Fragrâncias elegantes para diferentes momentos do dia.",
    icon: SprayCan
  },
  {
    title: "Cuida",
    text: "Ativos cosméticos que contribuem para hidratação, textura e conforto da pele.",
    icon: Heart
  },
  {
    title: "Envolve",
    text: "Sensorial leve, sem álcool e com sensação agradável após a aplicação.",
    icon: Sparkles
  },
  {
    title: "Personaliza",
    text: "Cinco versões para diferentes necessidades da pele e preferências olfativas.",
    icon: CircleDot
  }
];

const technicalItems = [
  {
    title: "Sem álcool",
    text: "Aplicação mais confortável e delicada para uso diário.",
    icon: ShieldCheck
  },
  {
    title: "Ativos funcionais",
    text: "Ingredientes associados à hidratação, nutrição, suavização, firmeza e vitalidade.",
    icon: Beaker
  },
  {
    title: "Uso diário",
    text: "Ideal após o banho, ao longo do dia ou antes de sair.",
    icon: SunMedium
  },
  {
    title: "Sensorial leve",
    text: "Fragrância agradável sem sensação pesada na pele.",
    icon: Leaf
  },
  {
    title: "Cuidado emocional",
    text: "Aromas pensados para conforto, presença e bem-estar.",
    icon: Moon
  }
];

const versions = [
  {
    name: "Hidratação",
    headline: "Ácido Hialurônico para uma pele mais hidratada, macia e viçosa.",
    active: "Ácido Hialurônico",
    function: "Hidratação, elasticidade e maciez",
    text:
      "O ácido hialurônico é uma substância naturalmente presente no corpo e muito utilizada em cosméticos por sua capacidade de contribuir para a hidratação, elasticidade e sensação de firmeza da pele. Nesta versão, ele transforma o body splash em um cuidado diário leve, refrescante e confortável.",
    family: "Floral âmbar encantador",
    profile:
      "Uma fragrância luminosa, moderna e feminina, com abertura frutada, coração floral elegante e fundo cremoso de baunilha, âmbar e almíscar branco.",
    top: "Pera, tangerina e bergamota",
    heart: "Flor de laranjeira, essência de néroli, néroli e jasmim sambac",
    base: "Baunilha de Bourbon, âmbar, almíscar branco e benjoim",
    moment: "Pós-banho e rotina diária",
    cta: "Quero hidratação",
    icon: Droplets
  },
  {
    name: "Nutrição",
    headline: "Niacinamida para nutrir, fortalecer e cuidar da barreira cutânea.",
    active: "Niacinamida",
    function: "Nutrição, barreira cutânea e uniformidade",
    text:
      "A niacinamida, forma ativa da vitamina B3, é um dos ativos mais versáteis da cosmetologia. Contribui para a manutenção da barreira cutânea, auxilia na hidratação e ajuda a melhorar o conforto da pele. Também é reconhecida por sua ação antioxidante, colaborando para uma pele com aparência mais uniforme, equilibrada e bem cuidada.",
    family: "Oriental baunilha elegante",
    profile:
      "Um aroma envolvente, doce na medida certa, com toque floral, frutas tropicais e fundo cremoso de baunilha, almíscar e sândalo.",
    top: "Orquídea, heliotrópio e tangerina",
    heart: "Acorde gourmand e frutas tropicais",
    base: "Baunilha, almíscar e sândalo",
    moment: "Dia a dia e autocuidado",
    cta: "Quero nutrição",
    icon: Gem
  },
  {
    name: "Reparador",
    headline: "Colágeno vegetal para firmeza, vitalidade e efeito tensor suave.",
    active: "Colágeno Vegetal",
    function: "Firmeza, vitalidade e efeito tensor suave",
    text:
      "O colágeno vegetal é um concentrado de acácia senegal, rico em gomas, aminoácidos e proteínas de alto peso molecular. Ajuda a promover sensação de firmeza, vitalidade e hidratação, formando um filme delicado sobre a pele. Também contribui para a proteção contra agressões externas, graças à sua ação antioxidante.",
    family: "Oriental floral envolvente",
    profile:
      "Uma fragrância cremosa, confortável e sofisticada, com notas frescas, nuances lactônicas, flores delicadas e fundo quente de baunilha, musk, cedro e sândalo.",
    top: "Notas frescas, lactônico e baunilha",
    heart: "Jasmim transparente, lírio do vale, heliotropina e baunilha",
    base: "Baunilha, musk, cedro e sândalo",
    moment: "Pele ressecada ou sem viço",
    cta: "Quero reparação",
    icon: Blend
  },
  {
    name: "Calmante e Suavizante",
    headline: "Um complexo botânico para peles delicadas, com toque de conforto e bem-estar.",
    active: "Calêndula, Camomila, Romã, Aloe Vera e Pantenol",
    function: "Suavidade, conforto e barreira cutânea",
    text:
      "Esta versão combina ativos associados ao cuidado de peles delicadas, promovendo sensação de suavidade, hidratação e conforto. A calêndula, a camomila, a romã, a aloe vera e o pantenol ajudam a preservar a barreira cutânea, formando um filme protetor delicado e contribuindo para amenizar a sensação de ressecamento e desconforto.",
    family: "Oriental aromático refrescante",
    profile:
      "Uma fragrância sofisticada e acolhedora, com contraste entre baunilha, lavanda, cacau e gengibre, evoluindo para um coração cremoso e fundo intenso de baunilha absoluta.",
    top: "Baunilha, lavanda, cacau e gengibre",
    heart: "Vanilla caviar",
    base: "Absoluto de baunilha",
    moment: "Pele delicada e momentos de relaxamento",
    cta: "Quero suavidade",
    icon: Flower2
  },
  {
    name: "Tonificante",
    headline: "Extrato de café para vitalidade, energia cutânea e textura mais uniforme.",
    active: "Extrato de Coffea",
    function: "Vitalidade, textura e energia cutânea",
    text:
      "O extrato de coffea é rico em compostos bioativos e antioxidantes. Contribui para melhorar a aparência da textura da pele, promover vitalidade e auxiliar na proteção contra o estresse oxidativo. É uma versão perfeita para quem busca uma sensação mais energizante, fresca e sofisticada no cuidado corporal.",
    family: "Oriental fougère sofisticado",
    profile:
      "Uma assinatura marcante, moderna e elegante, com lavanda, mandarina, groselha preta e petitgrain na saída, coração floral aromático e fundo de baunilha de Madagascar, almíscar, cedro e âmbar cinzento.",
    top: "Lavanda, mandarina, groselha preta e petitgrain",
    heart: "Lavanda, flor de laranjeira e jasmim",
    base: "Baunilha de Madagascar, almíscar, cedro e âmbar cinzento",
    moment: "Manhã, pré-saída ou rotina energizante",
    cta: "Quero tonificação",
    icon: Coffee
  }
];

const usageSteps = [
  "Borrife sobre a pele limpa e seca.",
  "Aplique principalmente no pescoço, colo e regiões de maior exposição.",
  "Espalhe suavemente, se desejar.",
  "Reaplique ao longo do dia para renovar a sensação de frescor e cuidado."
];

const sensorialBlocks = [
  {
    title: "Pele mais confortável",
    text: "Ativos funcionais contribuem para um toque mais macio e uma rotina corporal mais prazerosa.",
    icon: Heart
  },
  {
    title: "Aroma mais sofisticado",
    text: "Assinaturas olfativas com leitura premium, sem depender de associações com marcas registradas.",
    icon: Sparkles
  },
  {
    title: "Rotina mais prazerosa",
    text: "Uma aplicação leve, elegante e fácil de repetir no cuidado diário.",
    icon: WandSparkles
  }
];

const faqs = [
  {
    question: "O Body Splash Funcional substitui o hidratante corporal?",
    answer:
      "Ele complementa o cuidado diário, oferecendo fragrância e ativos cosméticos funcionais. Para peles muito ressecadas, pode ser usado junto a um hidratante corporal."
  },
  {
    question: "A fórmula tem álcool?",
    answer: "Não. A proposta da linha é oferecer uma perfumação sem álcool, com aplicação mais confortável e delicada para o uso diário."
  },
  {
    question: "Posso aplicar no corpo todo?",
    answer: "Sim. Aplique no corpo todo, principalmente em áreas como pescoço, colo, braços e pernas. Evite contato com olhos e mucosas."
  },
  {
    question: "Qual versão escolher?",
    answer:
      "Escolha de acordo com a necessidade da sua pele e a fragrância que mais combina com você: hidratação para maciez, nutrição para barreira cutânea, reparação para firmeza, calmante para suavidade e tonificante para vitalidade."
  },
  {
    question: "Pode usar todos os dias?",
    answer: "Sim. A linha foi pensada para o cuidado diário, com sensorial leve e confortável."
  }
];

function ProductImage({ label, priority = false }: { label: string; priority?: boolean }) {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-mist shadow-soft">
      <Image
        src={image}
        alt={label}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-graphite/10" />
      <div className="absolute left-5 top-5 rounded-full bg-white/86 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-graphite/60 backdrop-blur-md">
        {label}
      </div>
    </div>
  );
}

export default function BodySplashFuncionalPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Corporal • fragrância sem álcool</p>
            <h1 className="mt-5 text-[clamp(3.1rem,8vw,8.8rem)] font-light leading-[0.94] text-graphite">
              Body Splash Funcional.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Uma nova era de fragrâncias nutritivas para a pele. Um perfume para cada cuidado.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Descubra um body splash de alta performance que vai além da perfumação. Uma linha sem álcool, com sensorial leve e ativos cosméticos selecionados para hidratar, nutrir, suavizar, reparar e tonificar a pele no cuidado diário.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#versoes">Conheça as versões</MinimalButton>
              <MinimalButton href="#ativos" variant="ghost">
                Ver ativos e fragrâncias
              </MinimalButton>
            </div>
            <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-graphite/10 bg-white px-4 py-3 text-sm text-graphite/68 shadow-soft">
              <Sparkles className="h-4 w-4 text-graphite" />
              Sem álcool • Cuidado diário • Fragrância + tratamento
            </div>
          </Reveal>
          <Reveal delay={0.08} className="group relative">
            <div className="aspect-[1.14]">
              <ProductImage label="Imagem hero body splash" priority />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.5rem] border border-graphite/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl md:left-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                  <SprayCan className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-graphite">Perfuma e cuida</p>
                  <p className="text-xs leading-5 text-graphite/58">Uma linha corporal com ativos, rotina e desejo.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Conceito"
            title="Mais do que perfume. Um gesto diário de cuidado."
            text="O Body Splash Funcional entrega duplo cuidado em um único produto: primeiro, cuidar da pele com ativos funcionais; depois, elevar a sensação de bem-estar por meio de fragrâncias sofisticadas, confortáveis e envolventes."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {conceptCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-8 text-3xl font-light text-graphite">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ativos" className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="group relative min-h-[360px] bg-mist lg:min-h-[660px]">
              <ProductImage label="Textura sensorial" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Por que funcional?</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                A função está na fórmula. A experiência está na fragrância.
              </h2>
              <p className="body-large mt-7">
                Diferente de um body splash tradicional, esta linha une perfumação e tratamento cosmético em uma proposta multifuncional. Cada versão foi pensada para entregar um benefício específico para a pele, com ativos reconhecidos no cuidado corporal e fragrâncias inspiradas em caminhos olfativos sofisticados da perfumaria contemporânea.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {technicalItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.35rem] border border-graphite/10 bg-porcelain p-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-graphite">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-lg font-medium text-graphite">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="versoes" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Coleção"
          title="Cinco versões. Cinco formas de cuidar da pele."
          text="Escolha o seu body splash de acordo com o momento, a necessidade da pele e a assinatura olfativa que mais combina com você."
        />
        <div className="mt-12 grid gap-5">
          {versions.map((version, index) => {
            const Icon = version.icon;
            return (
              <Reveal key={version.name} delay={(index % 2) * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
                <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="group relative min-h-[360px] bg-mist">
                    <ProductImage label={`Frasco ${version.name}`} />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-graphite/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-graphite/62">
                        versão {index + 1}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="mt-8 text-[clamp(2.1rem,4vw,4.6rem)] font-light leading-[1.02] text-graphite">{version.name}</h2>
                    <h3 className="mt-5 text-xl font-medium text-graphite">{version.headline}</h3>
                    <p className="mt-5 text-sm leading-7 text-graphite/64">{version.text}</p>

                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Ativo destaque</p>
                        <p className="mt-3 text-lg text-graphite">{version.active}</p>
                      </div>
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Família olfativa</p>
                        <p className="mt-3 text-lg text-graphite">{version.family}</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.35rem] border border-graphite/10 p-5">
                      <p className="text-sm leading-7 text-graphite/64">{version.profile}</p>
                      <div className="mt-5 grid gap-3 text-sm text-graphite/66 md:grid-cols-3">
                        <p><strong className="text-graphite">Topo:</strong> {version.top}</p>
                        <p><strong className="text-graphite">Coração:</strong> {version.heart}</p>
                        <p><strong className="text-graphite">Fundo:</strong> {version.base}</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <MinimalButton href="/contato#formulario">{version.cta}</MinimalButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Comparativo"
          title="Qual versão combina com a sua pele hoje?"
          text="Uma leitura objetiva para orientar escolha, momento de uso e narrativa comercial de cada versão."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Versão</th>
                  <th className="px-5 py-4 font-medium">Principal ativo</th>
                  <th className="px-5 py-4 font-medium">Benefício cosmético</th>
                  <th className="px-5 py-4 font-medium">Perfil olfativo</th>
                  <th className="px-5 py-4 font-medium">Melhor momento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {versions.map((version) => (
                  <tr key={version.name} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{version.name}</td>
                    <td className="px-5 py-5">{version.active}</td>
                    <td className="px-5 py-5">{version.function}</td>
                    <td className="px-5 py-5">{version.family}</td>
                    <td className="px-5 py-5">{version.moment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="group aspect-[1.12]">
            <ProductImage label="Modo de uso" />
          </Reveal>
          <SectionTitle
            eyebrow="Modo de uso"
            title="Como usar"
            text="Aplique no corpo todo, principalmente em áreas como pescoço, colo, braços e pernas. Use após o banho para prolongar a sensação de pele limpa e cuidada, ou reaplique ao longo do dia sempre que desejar renovar a fragrância e o conforto da pele."
          />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {usageSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white text-sm">{index + 1}</span>
              <p className="mt-8 text-sm leading-7 text-graphite/66">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 rounded-[1.25rem] bg-porcelain px-5 py-4 text-sm leading-7 text-graphite/58">
          Uso externo. Evite contato com os olhos. Em caso de irritação, suspenda o uso.
        </p>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Sensorial"
            title="O cuidado que fica na pele. A fragrância que fica na memória."
            text="Cada versão foi criada para entregar uma experiência completa: o toque leve de um body splash, o conforto de um cuidado corporal e a sofisticação de uma fragrância marcante. É perfume, tratamento e ritual em um único gesto."
          />
          <Reveal className="group aspect-[1.12]">
            <ProductImage label="Imagem textura sensorial" />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sensorialBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-8 text-3xl font-light text-graphite">{block.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{block.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">Projeto corporal</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Escolha o cuidado que combina com você.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                Hidratar, nutrir, reparar, suavizar ou tonificar: existe uma versão do Body Splash Funcional para cada momento da pele e da rotina.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">
                  Quero conhecer a linha completa
                </MinimalButton>
                <MinimalButton href="/contato#formulario" variant="darkGhost">
                  Falar com consultora
                </MinimalButton>
              </div>
            </div>
            <div className="group relative min-h-[360px]">
              <ProductImage label="Coleção completa" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Respostas rápidas para orientar uso, escolha e posicionamento da linha." />
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-porcelain text-graphite">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-xl font-medium text-graphite">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/62">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-graphite/42">Próximo passo</p>
            <p className="mt-2 text-2xl font-light text-graphite">Levar essa linha para a sua marca.</p>
          </div>
          <MinimalButton href="/contato#formulario">
            Desenvolver Body Splash
          </MinimalButton>
        </Reveal>
      </section>
    </main>
  );
}

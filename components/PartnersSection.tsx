import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

const partnerLogos = [
  "03-6819dd_030f8e8b9eb84989930fce4cfcb57fd4-mv2-bb4f9d9a.png",
  "04-6819dd_03c2dc31bcf54b06a0616e0d9af597a9-mv2-71855f9b.png",
  "05-6819dd_1c6e0c8976e64b8ebfc6eaa3b8e04518-mv2-e8e34f7e.png",
  "06-6819dd_22aa7c116d7f49f7aec52fe0a3c87077-mv2-f5bb0660.png",
  "07-6819dd_22d090aa814b46ca87071453b6f930f4-mv2-93ba4db7.png",
  "08-6819dd_241ccae9334d454ca01ae04541f5109b-mv2-bab77d85.png",
  "09-6819dd_2792daf9c1184aa8984470496f01545d-mv2-84dcde60.png",
  "10-6819dd_2b58aae5a24d41feb2a3760032e34b75-mv2-7d5a7250.png",
  "11-6819dd_2dad3d3c2fbc46b7aa3914b252d78778-mv2-576a1afe.png",
  "12-6819dd_2e502326966b4fcda703fa73c8e224db-mv2-6dde5e03.png",
  "13-6819dd_33e4e0a3e2074af4a5c766495feeb860-mv2-88c168bb.png",
  "14-6819dd_36fe84d0134b4097881958e30697ff30-mv2-32c17035.png",
  "15-6819dd_3d64fd2e58164c9db1a098b3df3ae767-mv2-f8a9d834.png",
  "16-6819dd_3fb9bc427dc34b1ca18c7f2973bf6dc5-mv2-d1860240.png",
  "17-6819dd_473d30d7acec4fe2a9297c6ed1160b05-mv2-91e74004.png",
  "18-6819dd_4914d89a6fff473198c1f2cce8d49155-mv2-00171f20.png",
  "19-6819dd_4d772cc0afa14cdf9a3f682cc01e094a-mv2-66c57351.png",
  "20-6819dd_52c28fd9263e4602bc23fb790c53b6c7-mv2-10ed0f00.png",
  "21-6819dd_573fc367e06f4c2d97686eb74734ee46-mv2-9f37271d.png",
  "22-6819dd_5a737866270f456b9024d206d758b859-mv2-1873d1ce.png",
  "23-6819dd_5dab6fbd0b9f4ec09780590b020c7a1a-mv2-005072c4.png",
  "24-6819dd_64fa506d09ad4b47b102e66988de216c-mv2-a0d7b007.png",
  "25-6819dd_6a4990c8fdc94ba9840f8f50ff93130d-mv2-5f1a8370.png",
  "26-6819dd_6ff8bc1857514f74b42bdb498cd03b83-mv2-ab82f66a.png",
  "27-6819dd_7ded50d5e98b45f0a3521a35732b1e97-mv2-a5efdcef.png",
  "28-6819dd_80b1960331274a1d9277ea8c42728cd9-mv2-cee4609c.png",
  "29-6819dd_8c7409781e414e28a2b197d3c4047bb8-mv2-5fa34f71.png",
  "30-6819dd_8ea4640166804ef3b5a6a239e78613b9-mv2-49bdb0e5.png",
  "31-6819dd_90c469febc6848d7906986633ae71941-mv2-2e7291b2.jpg",
  "32-6819dd_9647bd7c54cc4533958a6803803bd5d9-mv2-2a080a64.png",
  "33-6819dd_96b8b3763e054e5eaa0eb844fee0c5ca-mv2-9635554b.png",
  "34-6819dd_a05e07081af5411494ef6277d82e32ed-mv2-03c0ecef.png",
  "35-6819dd_a12f687f061a42e6bb7597886973baf2-mv2-b9f4ea50.png",
  "36-6819dd_a5433a968e1a4a2787c5323794a4f206-mv2-4ca12bf5.png",
  "37-6819dd_a8feb0403f154a0880e02902119cfe71-mv2-6b6ac528.png",
  "38-6819dd_b6345415961249a6af2cae56cff87c9f-mv2-de9afb46.png",
  "39-6819dd_bc4030e49415433ba2ccc3d63c266582-mv2-e0744ab8.png",
  "40-6819dd_be3a5e549c5146c7b0f23087fac2de4f-mv2-116aac79.png",
  "41-6819dd_c02247375971443aa3c778b42f9cc481-mv2-1eb8c578.png",
  "42-6819dd_c2af5fda87194066bb0a47334e42daef-mv2-e9fc8906.png",
  "43-6819dd_d135ed2963a14c05944e8c8bd9a12ca2-mv2-d764f5b0.png",
  "44-6819dd_d50fc472e8d84a71ad0ca91917415f40-mv2-ef815e5f.png",
  "45-6819dd_d71929cc661f4af398fa6bc92755def8-mv2-455b51ac.png",
  "46-6819dd_dd3be795fb924572b453ddb510217573-mv2-c499f2a6.png",
  "47-6819dd_df78b36a97054fac946c971da6e24755-mv2-332c6c02.png",
  "48-6819dd_e2f1a5a85b67487382421db8f98580dc-mv2-e65ecc6e.png",
  "49-6819dd_e4f2cb8cbe574ff29d20c51e05ea7bf0-mv2-f6294e7c.png",
  "50-6819dd_f40d60db0a444e79930b75125114044d-mv2-e230426d.png",
  "51-6819dd_f53d4ded1213475097608f667b3444d7-mv2-04ca2594.png",
  "52-6819dd_f81180bee4c6453ba9dbe44b6bf92b36-mv2-de13aded.png",
  "53-6819dd_f8aabe6b1f7e4102a539e4d3bba98481-mv2-24bc63d3.png",
  "54-6819dd_f93476ba172e4513bc7d2ce592638551-mv2-bccc84ea.png",
  "56-6819dd_fad08e174ae646d19f25cbbc301b5de2-mv2-a96ecabc.jpg",
  "57-6819dd_fd021f5d55ad4a6980c5af4f1a2d2c88-mv2-b3d6ab79.png"
];

export function PartnersSection() {
  return (
    <section id="partners" className="section-shell py-16 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionTitle
            eyebrow="Partners"
            title="Credibilidade construída com marcas que confiam em estrutura técnica."
            text="A presença da LQF em diferentes projetos e parcerias reforça uma atuação baseada em consistência, responsabilidade produtiva e capacidade de transformar estratégia em produto acabado."
          />
        </div>
        <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-3 md:p-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {partnerLogos.map((logo, index) => (
              <div
                key={logo}
                className="group grid h-28 place-items-center rounded-2xl border border-graphite/[0.06] bg-white p-5 transition hover:-translate-y-0.5 hover:border-graphite/14 hover:shadow-soft"
              >
                <img
                  src={`/partners/${logo}`}
                  alt={`Logo parceiro ${index + 1}`}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain opacity-50 grayscale saturate-0 contrast-75 mix-blend-multiply transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-hover:contrast-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

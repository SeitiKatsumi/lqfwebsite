import { navItems, pageMeta } from "@/lib/site";

export const wordpressPages = [
  { slug: "home", label: "Inicio", url: "/", title: pageMeta.home.title, description: pageMeta.home.description },
  { slug: "sobre", label: "Sobre", url: "/sobre", title: pageMeta.sobre.title, description: pageMeta.sobre.description },
  { slug: "tecnologia", label: "Tecnologia", url: "/tecnologia", title: pageMeta.tecnologia.title, description: pageMeta.tecnologia.description },
  { slug: "produtos", label: "Produtos", url: "/produtos", title: pageMeta.produtos.title, description: pageMeta.produtos.description },
  { slug: "body-splash-funcional", label: "Body Splash Funcional", url: "/produtos/corporal/body-splash-funcional", title: pageMeta.bodySplashFuncional.title, description: pageMeta.bodySplashFuncional.description },
  { slug: "cases-cuidado-corporal", label: "Cases de Sucesso em Cuidado Corporal", url: "/produtos/corporal/cases-de-sucesso", title: pageMeta.casesCuidadoCorporal.title, description: pageMeta.casesCuidadoCorporal.description },
  { slug: "body-care-sensorial", label: "Body Care Sensorial", url: "/produtos/corporal/body-care-sensorial", title: pageMeta.bodyCareSensorial.title, description: pageMeta.bodyCareSensorial.description },
  { slug: "desodorante-rollon", label: "Desodorante Roll-on", url: "/produtos/corporal/desodorante-rollon", title: pageMeta.desodoranteRollon.title, description: pageMeta.desodoranteRollon.description },
  { slug: "dermocorporais-skinificacao", label: "Dermocorporais - Skinificação", url: "/produtos/corporal/dermocorporais-skinificacao", title: pageMeta.dermocorporaisSkinificacao.title, description: pageMeta.dermocorporaisSkinificacao.description },
  { slug: "processo", label: "Processo LQF", url: "/processo", title: pageMeta.processo.title, description: pageMeta.processo.description },
  { slug: "private-label", label: "Private Label", url: "/private-label", title: pageMeta.privateLabel.title, description: pageMeta.privateLabel.description },
  { slug: "contato", label: "Contato", url: "/contato", title: pageMeta.contato.title, description: pageMeta.contato.description }
];

export function wordpressHeaderHtml() {
  return `
<header class="lqf-wp-header">
  <style>
    .lqf-wp-header{position:sticky;top:16px;z-index:50;margin:0 auto 32px;max-width:1500px;padding:0 16px;font-family:Inter,Arial,sans-serif}
    .lqf-wp-nav{display:flex;align-items:center;justify-content:space-between;gap:24px;border:1px solid rgba(63,63,59,.1);border-radius:999px;background:rgba(255,255,255,.86);padding:14px 18px;box-shadow:0 18px 60px rgba(63,63,59,.08);backdrop-filter:blur(18px)}
    .lqf-wp-logo{height:auto;width:clamp(185px,14.4vw,252px);display:block}
    .lqf-wp-menu{display:flex;align-items:center;gap:24px}
    .lqf-wp-menu a{color:rgba(63,63,59,.72);font-size:14px;text-decoration:none;transition:.2s ease}
    .lqf-wp-menu a:hover{color:#3f3f3b}
    .lqf-wp-cta{display:inline-flex;align-items:center;justify-content:center;min-height:48px;border-radius:999px;background:#3f3f3b;color:#fff!important;padding:0 22px;font-size:14px;font-weight:600;text-decoration:none}
    @media(max-width:1024px){.lqf-wp-menu{display:none}.lqf-wp-nav{padding:14px 16px}.lqf-wp-logo{width:185px}}
  </style>
  <div class="lqf-wp-nav">
    <a href="/"><img class="lqf-wp-logo" src="/logos/lqf-logo-horizontal.png" alt="LQF Farmaceutica"></a>
    <nav class="lqf-wp-menu">
      ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("\n      ")}
    </nav>
    <a class="lqf-wp-cta" href="/contato#formulario">Desenvolva sua linha</a>
  </div>
</header>`.trim();
}

export function wordpressFooterHtml() {
  return `
<footer class="lqf-wp-footer">
  <style>
    .lqf-wp-footer{border-top:1px solid rgba(63,63,59,.1);background:#f7f6f3;color:#242421;font-family:Inter,Arial,sans-serif}
    .lqf-wp-footer-inner{max-width:1500px;margin:0 auto;padding:64px 24px;display:grid;grid-template-columns:1.2fr .8fr .9fr;gap:48px}
    .lqf-wp-footer-logo{width:240px;max-width:100%;height:auto}
    .lqf-wp-footer-tagline{margin:32px 0 0;font-size:26px;line-height:1.18;font-weight:300;color:rgba(63,63,59,.74)}
    .lqf-wp-footer-menu{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .lqf-wp-footer a{color:rgba(63,63,59,.68);text-decoration:none;transition:.2s ease}
    .lqf-wp-footer a:hover{color:#3f3f3b}
    .lqf-wp-footer-contact{display:grid;gap:16px;color:rgba(63,63,59,.68);font-size:14px;line-height:1.45}
    .lqf-wp-footer-bottom{max-width:1500px;margin:0 auto;border-top:1px solid rgba(63,63,59,.1);padding:24px;color:rgba(63,63,59,.48);font-size:12px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
    @media(max-width:900px){.lqf-wp-footer-inner{grid-template-columns:1fr}.lqf-wp-footer-menu{grid-template-columns:1fr}.lqf-wp-footer-bottom{display:grid}}
  </style>
  <div class="lqf-wp-footer-inner">
    <div>
      <img class="lqf-wp-footer-logo" src="/logos/lqf-logo-vertical.png" alt="LQF Farmaceutica">
      <p class="lqf-wp-footer-tagline">A ciencia por tras da beleza.</p>
    </div>
    <nav class="lqf-wp-footer-menu">
      ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("\n      ")}
      <a href="/politica-de-privacidade">Politica de Privacidade</a>
    </nav>
    <div class="lqf-wp-footer-contact">
      <p>Avenida Floriano Andre Cabrera, 1361<br>Cidade Jardim | CEP: 15.081-190<br>Sao Jose do Rio Preto - SP</p>
      <p><a href="tel:+551732093010">17 3209-3010</a></p>
      <p>contato@lqf.com.br</p>
      <p><a href="https://www.facebook.com/GrupoLQF/">Facebook</a> &nbsp; <a href="https://www.instagram.com/lqflaboratorio/">Instagram</a></p>
    </div>
  </div>
  <div class="lqf-wp-footer-bottom">
    <span>© 2026 LQF Farmaceutica. Todos os direitos reservados.</span>
    <span><a href="https://elevenmind.com.br/">Desenvolvido por Elevenmind</a></span>
  </div>
</footer>`.trim();
}

export function fallbackWordpressBlock(input: { page: string; prompt: string }) {
  const page = wordpressPages.find((item) => item.slug === input.page) ?? wordpressPages[0];
  return `
<section class="lqf-elementor-section">
  <style>
    .lqf-elementor-section{font-family:Inter,Arial,sans-serif;color:#3f3f3b;background:#fff;padding:96px 24px}
    .lqf-elementor-wrap{max-width:1180px;margin:0 auto;display:grid;gap:32px}
    .lqf-elementor-eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:rgba(63,63,59,.48);margin:0}
    .lqf-elementor-title{font-size:clamp(42px,7vw,104px);line-height:.98;font-weight:300;letter-spacing:0;margin:0;max-width:980px}
    .lqf-elementor-text{font-size:20px;line-height:1.7;color:rgba(63,63,59,.68);max-width:760px;margin:0}
    .lqf-elementor-card{border:1px solid rgba(63,63,59,.1);border-radius:28px;padding:28px;background:#f7f6f3}
    .lqf-elementor-cta{display:inline-flex;width:max-content;min-height:48px;align-items:center;border-radius:999px;background:#3f3f3b;color:#fff!important;padding:0 22px;text-decoration:none;font-weight:600}
  </style>
  <div class="lqf-elementor-wrap">
    <p class="lqf-elementor-eyebrow">${page.label}</p>
    <h2 class="lqf-elementor-title">${page.title}</h2>
    <p class="lqf-elementor-text">${page.description}</p>
    <div class="lqf-elementor-card">
      <p class="lqf-elementor-text">${input.prompt || "Use este bloco como base para uma secao editorial no Elementor, mantendo a linguagem institucional da LQF."}</p>
    </div>
    <a class="lqf-elementor-cta" href="/contato#formulario">Desenvolva sua linha</a>
  </div>
</section>`.trim();
}

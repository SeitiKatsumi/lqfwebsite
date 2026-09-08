// Production visual smoke test. Uses bundled Playwright (no project dependency).
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  fs.mkdirSync('qa-screenshots',{recursive:true});
  try {
    const page=await browser.newPage();
    const failures=[];
    page.on('pageerror', e=>failures.push(e.message));
    for(const [name,width,height] of [['desktop',1440,1000],['tablet',820,1180],['mobile',390,844]]){
      await page.setViewportSize({width,height});
      const response=await page.goto('https://www.lqf.com.br/conteudo/',{waitUntil:'networkidle'});
      assert.equal(response.status(),200);
      await page.evaluate(()=>document.fonts.ready);
      assert.equal(await page.locator('h1').count(),1);
      assert.equal(await page.locator('.lqf-step').count(),6);
      assert.equal(await page.locator('form').count(),0);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal overflow '+name);
      for(const link of await page.locator('.wp-block-button__link').all()) assert.equal(await link.getAttribute('href'),'https://www.lqf.com.br/contato#formulario');
      assert(await page.locator('.lqf-hero-image img').evaluate(img=>img.complete && img.naturalWidth>0));
      await page.screenshot({path:`qa-screenshots/lqf-wp-${name}.png`,fullPage:true});
      if(name!=='desktop'){
        await page.getByRole('button',{name:/Abrir menu|Open menu/}).click();
        await page.locator('.is-menu-open').waitFor();
        await page.screenshot({path:`qa-screenshots/lqf-wp-${name}-menu.png`});
        await page.getByRole('button',{name:/Fechar menu|Close menu/}).click();
        assert.equal(await page.locator('.is-menu-open').count(),0);
      }
      console.log('OK public visual smoke:',name);
    }
    for(const route of ['/','/processo','/contato','/conteudo/category/seo/','/conteudo/politica-de-privacidade/','/conteudo/wp-json/']){
      const r=await page.request.get('https://www.lqf.com.br'+route);
      assert.equal(r.status(),200,route);
      console.log('OK route:',route);
    }
    assert.deepEqual(failures,[]);
    await page.setViewportSize({width:1440,height:1000});
    await page.goto('https://www.lqf.com.br/processo',{waitUntil:'networkidle'});
    for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=600){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(200);}
    await page.evaluate(()=>scrollTo(0,0));
    await page.waitForTimeout(600);
    await page.screenshot({path:'qa-screenshots/lqf-reference-desktop.png',fullPage:true});
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

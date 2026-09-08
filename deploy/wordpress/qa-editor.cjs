const {chromium}=require('playwright');
const {execFileSync}=require('node:child_process');
const assert=require('node:assert/strict');
const remote=command=>execFileSync('ssh',['-o','BatchMode=yes','root@65.109.228.157',command],{encoding:'utf8'});
const container=remote('docker ps -q --filter name=srv-captain--lqf-conteudo-wordpress.1').trim();
assert.match(container,/^[0-9a-f]+$/);
(async()=>{
  const session=JSON.parse(remote(`docker exec ${container} php /tmp/lqf-qa-session.php`));
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{
    const context=await browser.newContext({viewport:{width:1440,height:1000}});
    await context.addCookies(session.cookies.map(c=>({...c,domain:'www.lqf.com.br',path:'/conteudo/',httpOnly:true,secure:true,sameSite:'Lax'})));
    const page=await context.newPage();
    await page.goto('https://www.lqf.com.br/conteudo/?p='+session.post,{waitUntil:'networkidle'});
    assert.equal(await page.locator('.lqf-step').count(),6);
    assert.match(await page.locator('h1').innerText(),/Desenvolvimento/);
    await page.screenshot({path:'qa-screenshots/lqf-private-seo-desktop.png',fullPage:true});
    await page.goto('https://www.lqf.com.br/conteudo/wp-admin/term.php?taxonomy=category&tag_ID=2&post_type=post',{waitUntil:'networkidle'});
    assert.equal(await page.locator('#lqf-post-template').inputValue(),'lqf//processo-seo');
    console.log('OK category selector in admin');
    await page.goto('https://www.lqf.com.br/conteudo/wp-admin/site-editor.php?postId=lqf%2F%2Fprocesso-seo&postType=wp_template',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>window.wp?.blocks && window.wp?.apiFetch);
    const invalid=await page.evaluate(async()=>{
      const invalid=[];
      const validate=blocks=>{for(const b of blocks){if(b.isValid===false)invalid.push({name:b.name,html:b.originalContent.slice(0,250)});validate(b.innerBlocks||[]);}};
      const templates=await wp.apiFetch({path:'/wp/v2/templates?context=edit'});
      for(const t of templates)validate(wp.blocks.parse(t.content.raw));
      const parts=await wp.apiFetch({path:'/wp/v2/template-parts?context=edit'});
      for(const p of parts)validate(wp.blocks.parse(p.content.raw));
      const patterns=wp.data.select('core').getBlockPatterns();
      if(patterns)for(const p of patterns.filter(p=>p.name.startsWith('lqf/')))validate(wp.blocks.parse(p.content));
      return invalid;
    });
    console.log('Native block validation:',JSON.stringify(invalid));
    assert.equal(invalid.length,0,'Invalid editor blocks');
    await page.screenshot({path:'qa-screenshots/lqf-editor.png'});
  }finally{await browser.close();remote(`docker exec ${container} php /tmp/lqf-qa-session.php cleanup`);}
})().catch(e=>{console.error(e);process.exitCode=1;});

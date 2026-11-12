const {chromium,webkit}=require('/Volumes/Emerge/Codex Chat/2026-11-06/glass-refactor/node_modules/playwright')
const assert=require('node:assert/strict')
;(async()=>{
for(const [name, engine] of [['chrome',chromium],['webkit',webkit]]){
 const browser=await engine.launch(name==='chrome'?{channel:'chrome',headless:true}:{headless:true,executablePath:'/Users/kosmo/Library/Caches/ms-playwright/webkit-2359/pw_run.sh'})
 for(const width of [390,1280]){
  const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'})
  const errors=[];page.on('pageerror',e=>errors.push(e.message))
  await page.goto('http://127.0.0.1:3421/')
  await page.locator('[data-enhanced=true]').waitFor()
  assert.equal(await page.locator('[data-card-mount] button').count(),4)
  assert.equal(await page.locator('[data-stack-panel]:visible').count(),0)
  assert.equal(await page.locator('main').getAttribute('data-tw-mode'),'dark')
  await page.screenshot({path:`qa/elevation/${name}-${width}-hero.png`})
  await page.locator('#portfolio-content').scrollIntoViewIfNeeded()
  await page.screenshot({path:`qa/elevation/${name}-${width}-stack.png`})
  for(const id of ['work','play','about','contact']){
   await page.locator('#portfolio-card-'+id).click()
   assert.equal(await page.locator('[data-stack-panel]:visible').count(),1)
   assert.equal(await page.locator('#portfolio-card-'+id).getAttribute('aria-expanded'),'true')
   if(id==='work')await page.screenshot({path:`qa/elevation/${name}-${width}-work.png`})
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true)
   await page.locator('#portfolio-panel-'+id+' [data-close-section]').click()
   assert.equal(await page.locator('[data-stack-panel]:visible').count(),0)
   assert.equal(await page.evaluate(()=>document.activeElement.id),'portfolio-card-'+id)
  }
  await page.locator('#portfolio-card-about').click()
  await page.locator('#portfolio-card-contact').click()
  await page.goBack()
  assert.equal(await page.locator('#portfolio-card-about').getAttribute('aria-expanded'),'true')
  await page.goForward()
  assert.equal(await page.locator('#portfolio-card-contact').getAttribute('aria-expanded'),'true')
  await page.locator('#portfolio-card-contact').focus()
  await page.keyboard.press('Escape')
  assert.equal(await page.locator('[data-stack-panel]:visible').count(),0)
  await page.waitForTimeout(200); await page.evaluate(() => { location.hash = 'work' });
  await page.locator('#portfolio-card-work[aria-expanded=true]').waitFor()
  await page.locator('#portfolio-card-work').focus()
  await page.keyboard.press('Enter')
  assert.equal(await page.locator('[data-stack-panel]:visible').count(),0)
  await page.keyboard.press('Space')
  assert.equal(await page.locator('[data-stack-panel]:visible').count(),1)
  for(const route of ['/about','/projects','/projects/project-lattice']){
   await page.goto('http://127.0.0.1:3421'+route)
   assert.equal(await page.locator('main').getAttribute('data-tw-mode'),'dark')
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true)
  }
  assert.deepEqual(errors,[])
  console.log(name,width,'PASS')
  await page.close()
 }
 await browser.close()
}
})().catch(e=>{console.error(e);process.exit(1)})

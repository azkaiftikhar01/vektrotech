import { chromium } from 'file:///C:/Users/HP/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERR', m.text()); });

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

const el = await page.locator('text=Real work, real results.').first();
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: 'C:/Users/HP/Desktop/vektrotech/.tmp-cases-1.png' });

// hover the middle card
const box = await page.locator('a[href="/portfolio/premier-health"]').first().boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/HP/Desktop/vektrotech/.tmp-cases-2.png' });
}

await browser.close();

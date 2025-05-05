// login.ts
import { chromium } from 'playwright';

const run = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.reddit.com/login');
  console.log('👉 Log in manually (you have 60 seconds)...');

  await page.waitForTimeout(60000); // 60 seconds to login

  await context.storageState({ path: 'auth.json' });
  console.log('✅ Saved auth.json');

  await browser.close();
};

run();

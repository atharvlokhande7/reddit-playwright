import { test, expect } from '@playwright/test';
test.use({ storageState: 'auth.json' }); // 👈 Use saved session

test('test', async ({ page }) => {
  await page.goto('https://www.reddit.com/?rdt=59888');
  await page.getByLabel('Primary').getByRole('link', { name: 'Home' }).click();
});
import { test, expect } from '@playwright/test';
test.use({ storageState: 'auth.json' }); // 👈 Use saved session

test('test', async ({ page }) => {
  await page.goto('https://www.reddit.com/?rdt=52207');
  await page.getByRole('button', { name: 'User Avatar Expand user menu' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
});
import { test, expect } from '@playwright/test';
test.use({ storageState: 'auth.json' }); // 👈 Use saved session

test('test', async ({ page }) => {
  await page.goto('https://www.reddit.com/?rdt=52693');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('ryan gosling');
  await page.getByRole('textbox').press('Enter');
});
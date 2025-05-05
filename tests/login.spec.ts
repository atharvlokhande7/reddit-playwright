import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' }); // 👈 Use saved session

test('User is logged in to Reddit', async ({ page }) => {
  await page.goto('https://www.reddit.com');

  // Example: check if user avatar is visible (indicates logged in)
  await expect(page.locator('img[alt="User Avatar"]')).toBeVisible();
});

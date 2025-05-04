import { test, expect } from '@playwright/test';

test('search reddit for Playwright', async ({ page }) => {
  await page.goto('https://www.reddit.com/');
  await page.getByPlaceholder('Search Reddit').fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/search/);
});

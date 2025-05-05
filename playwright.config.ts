import { defineConfig } from '@playwright/test';

// playwright.config.ts
export default defineConfig({
  use: {
    viewport: { width: 1280, height: 720 },
    // ⛔ remove storageState: 'auth.json'
  },
});

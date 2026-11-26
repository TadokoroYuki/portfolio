import { test, expect } from '@playwright/test';

test.describe('テーマ切り替え', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('テーマ切り替えボタンが存在する', async ({ page }) => {
    const themeToggle = page.locator('button[aria-label*="モード"]').first();
    await expect(themeToggle).toBeVisible();
  });

  test('テーマを切り替えられる', async ({ page }) => {
    const html = page.locator('html');
    const themeToggle = page.locator('button[aria-label*="モード"]').first();

    const initialClass = await html.getAttribute('class');

    await themeToggle.click();
    await page.waitForTimeout(500);

    const newClass = await html.getAttribute('class');

    const hadDark = initialClass?.includes('dark') ?? false;
    const hasDark = newClass?.includes('dark') ?? false;
    expect(hadDark !== hasDark).toBeTruthy();
  });
});

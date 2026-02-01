import { test, expect } from '@playwright/test';

test.describe('トップへ戻るボタン', () => {
  test('スクロール後にボタンが表示される', async ({ page }) => {
    await page.goto('/');

    const scrollButton = page.locator('button[aria-label="ページトップへ戻る"]');

    await expect(scrollButton).not.toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(500);

    await expect(scrollButton).toBeVisible();
  });

  test('ボタンクリックでトップに戻る', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    const scrollButton = page.locator('button[aria-label="ページトップへ戻る"]');
    await scrollButton.click();

    await expect(async () => {
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(100);
    }).toPass({ timeout: 3000 });
  });
});

import { test, expect } from '@playwright/test';

test.describe('レスポンシブデザイン', () => {
  test('デスクトップでナビゲーションが表示される', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    const desktopNav = page.locator('.hidden.md\\:flex');
    await expect(desktopNav).toBeVisible();

    const navButtons = desktopNav.locator('button');
    const count = await navButtons.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test('モバイルでハンバーガーメニューが表示される', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileMenuButton = page.locator('button[aria-label="Toggle mobile menu"]');
    await expect(mobileMenuButton).toBeVisible();

    await mobileMenuButton.click();

    const mobileMenu = page.locator('.md\\:hidden.bg-white');
    await expect(mobileMenu).toBeVisible();
  });

  test('モバイルメニューからナビゲーションできる', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.click('button[aria-label="Toggle mobile menu"]');
    await page.click('.md\\:hidden >> text=About');

    await expect(page.locator('#about')).toBeInViewport();
  });

  test('各セクションがモバイルで適切に表示される', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const sections = ['#home', '#about', '#skills', '#projects', '#contact'];
    for (const section of sections) {
      await expect(page.locator(section)).toBeVisible();
    }
  });
});

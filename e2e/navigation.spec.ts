import { test, expect } from '@playwright/test';

test.describe('ナビゲーション', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('ページが正しく読み込まれる', async ({ page }) => {
    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.locator('#home')).toBeVisible();
  });

  test('About セクションへのナビゲーション', async ({ page }) => {
    await page.click('text=About');
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('Skills セクションへのナビゲーション', async ({ page }) => {
    await page.click('text=Skills');
    await expect(page.locator('#skills')).toBeInViewport();
  });

  test('Projects セクションへのナビゲーション', async ({ page }) => {
    await page.click('text=Projects');
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('Contact セクションへのナビゲーション', async ({ page }) => {
    await page.click('text=Contact');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('Home セクションに戻る', async ({ page }) => {
    await page.click('text=Contact');
    await page.click('text=Home');
    await expect(page.locator('#home')).toBeInViewport();
  });

  test('Logo クリックで Home に戻る', async ({ page }) => {
    await page.click('text=Contact');
    await page.click('text=Portfolio');
    await expect(page.locator('#home')).toBeInViewport();
  });
});

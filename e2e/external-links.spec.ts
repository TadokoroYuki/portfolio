import { test, expect } from '@playwright/test';

test.describe('外部リンク', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('GitHub リンクが正しく設定されている', async ({ page }) => {
    const githubLink = page.locator('a[href*="github.com/TadokoroYuki"]').first();
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', /noopener/);
  });

  test('Email リンクが正しく設定されている', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', /mailto:/);
  });

  test('プロジェクトの GitHub リンクが存在する', async ({ page }) => {
    await page.click('text=Projects');
    const projectGithubLink = page.locator('#projects a[href*="github.com"]');
    await expect(projectGithubLink.first()).toBeVisible();
  });
});

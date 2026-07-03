import { test, expect } from '@playwright/test';

test.describe('アクセシビリティ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('スキップリンクが存在する', async ({ page }) => {
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });

  test('各セクションに見出しがある', async ({ page }) => {
    const sections = [
      { id: '#about', heading: 'About Me' },
      { id: '#skills', heading: 'Skills' },
      { id: '#projects', heading: 'Projects' },
      { id: '#contact', heading: 'Contact' },
    ];

    for (const section of sections) {
      const heading = page.locator(`${section.id} h2`);
      await expect(heading).toContainText(section.heading);
    }
  });

  test('画像に alt 属性がある（存在する場合）', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('ボタンにアクセシブルな名前がある', async ({ page }) => {
    const buttons = page.locator('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();
      expect(ariaLabel || textContent?.trim()).toBeTruthy();
    }
  });

  test('リンクに識別可能なテキストがある', async ({ page }) => {
    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const ariaLabel = await link.getAttribute('aria-label');
      const textContent = await link.textContent();
      expect(ariaLabel || textContent?.trim()).toBeTruthy();
    }
  });
});
